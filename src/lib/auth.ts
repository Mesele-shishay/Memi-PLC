// Authentication utilities integrated with backend API
import { api } from "./apiClient";

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "super-admin";
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AdminUser;
  token?: string;
  error?: string;
}

export const authenticateAdmin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const data = await api.post<AuthResponse>("/auth/login", credentials, {
      skipAuth: true,
    });
    return data;
  } catch (error: any) {
    return { success: false, error: error.message || "Login failed" };
  }
};

export const logoutAdmin = async (): Promise<{ success: boolean }> => {
  try {
    // Stateless JWT logout; call endpoint for symmetry
    await api.post("/auth/logout");
    return { success: true };
  } catch (error) {
    // If backend down, still allow client logout
    return { success: true };
  }
};

export const validateToken = async (token: string): Promise<AuthResponse> => {
  try {
    // For token validation, we need to manually set the token since it might be expired
    const data = await api.get<AuthResponse>("/auth/validate", {
      headers: { Authorization: `Bearer ${token}` },
      skipAuth: true,
    });
    return data;
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Invalid or expired token",
    };
  }
};

export const getCurrentAdmin = async (): Promise<AdminUser | null> => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin-token") : null;
  if (!token) return null;
  const authResponse = await validateToken(token);
  return authResponse.success ? authResponse.user || null : null;
};

// Utility function to check if token is expired
export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch {
    return true; // If we can't parse the token, consider it expired
  }
};

// Utility function to get token expiration time
export const getTokenExpiration = (token: string): Date | null => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return new Date(payload.exp * 1000);
  } catch {
    return null;
  }
};
