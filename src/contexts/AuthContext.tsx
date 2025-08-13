"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  AdminUser,
  authenticateAdmin,
  logoutAdmin,
  validateToken,
} from "@/lib/auth";

interface AuthContextType {
  user: AdminUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem("admin-token");
      if (token) {
        const response = await validateToken(token);
        if (response.success && response.user) {
          setUser(response.user);
        } else {
          // Only clear token if it's actually invalid, not just on network errors
          if (response.error && response.error !== "Network error") {
            localStorage.removeItem("admin-token");
            setUser(null);
          }
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      // Don't clear token on network errors, only on actual validation failures
      // The token will be validated on the next actual API request
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("admin-token");
      if (token) {
        const response = await validateToken(token);
        if (response.success && response.user) {
          setUser(response.user);
          return;
        }
        // Only clear token if validation explicitly fails
        if (response.error && response.error !== "Network error") {
          localStorage.removeItem("admin-token");
          setUser(null);
        }
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      // Don't clear token on network errors
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authenticateAdmin({ email, password });
      if (response.success && response.user && response.token) {
        // Set user and token first
        setUser(response.user);
        localStorage.setItem("admin-token", response.token);

        // Don't immediately validate the token - trust the login response
        // The token will be validated on the next actual API request

        return { success: true };
      } else {
        return { success: false, error: response.error || "Login failed" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  const logout = async () => {
    try {
      await logoutAdmin();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      localStorage.removeItem("admin-token");
    }
  };

  // Check auth on mount but don't immediately validate after login
  useEffect(() => {
    if (!isInitialized) {
      checkAuth();
    }

    // Set up periodic token validation every 10 minutes (less aggressive)
    const interval = setInterval(() => {
      if (user && isInitialized) {
        refreshToken();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [checkAuth, refreshToken, user, isInitialized]);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    checkAuth,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
