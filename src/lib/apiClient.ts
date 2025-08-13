// Centralized API client with automatic authentication
import { API_BASE } from "./apiBase";

interface ApiClientOptions {
  baseURL?: string;
  headers?: Record<string, string>;
}

interface RequestOptions extends RequestInit {
  skipAuth?: boolean;
  retryCount?: number;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private isRefreshing = false;
  private refreshPromise: Promise<string | null> | null = null;

  constructor(options: ApiClientOptions = {}) {
    this.baseURL = options.baseURL || API_BASE;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  private getAuthToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("admin-token");
  }

  private async refreshTokenIfNeeded(): Promise<string | null> {
    if (this.isRefreshing && this.refreshPromise) {
      return this.refreshPromise;
    }

    this.isRefreshing = true;
    this.refreshPromise = this.performTokenRefresh();
    
    try {
      const result = await this.refreshPromise;
      return result;
    } finally {
      this.isRefreshing = false;
      this.refreshPromise = null;
    }
  }

  private async performTokenRefresh(): Promise<string | null> {
    try {
      const token = this.getAuthToken();
      if (!token) return null;

      // Try to validate the current token
      const response = await fetch(`${this.baseURL}/auth/validate`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        return token; // Token is still valid
      }
      
      // Only clear token if we get a specific 401 response, not on network errors
      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("admin-token");
        }
        return null;
      }
      
      // For other errors, keep the token and let the actual request handle it
      return token;
    } catch (error) {
      console.error('Token refresh failed:', error);
      // Don't clear token on network errors
      return null;
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { skipAuth = false, retryCount = 0, ...fetchOptions } = options;

    const headers: Record<string, string> = {
      ...this.defaultHeaders,
      ...(fetchOptions.headers as Record<string, string>),
    };

    // Automatically add authorization header unless explicitly skipped
    if (!skipAuth) {
      let token = this.getAuthToken();
      
      // If no token and we're not already retrying, try to refresh
      if (!token && retryCount === 0) {
        token = await this.refreshTokenIfNeeded();
      }
      
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    const url = endpoint.startsWith("http")
      ? endpoint
      : `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
      });

      if (!response.ok) {
        // Handle authentication errors
        if (response.status === 401 && !skipAuth && retryCount === 0) {
          // Try to refresh token once
          const newToken = await this.refreshTokenIfNeeded();
          if (newToken) {
            // Retry the request with the new token
            return this.request<T>(endpoint, { ...options, retryCount: retryCount + 1 });
          }
          
          // Only clear token if refresh explicitly fails
          if (typeof window !== "undefined") {
            localStorage.removeItem("admin-token");
          }
          throw new Error("Authentication required");
        }

        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      // Handle empty responses
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }

      return response.text() as T;
    } catch (error) {
      // If it's a network error and we have a token, don't clear it
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('Network error:', error);
        // Keep the token for network errors
        throw new Error("Network error - please check your connection");
      }
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  // POST request
  async post<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PATCH request
  async patch<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }

  // For Next.js API routes (internal frontend routes)
  async internal<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const { skipAuth = false, retryCount = 0, ...fetchOptions } = options || {};

    const headers: Record<string, string> = {
      ...this.defaultHeaders,
      ...(fetchOptions.headers as Record<string, string>),
    };

    // For internal routes, we need to manually add the token
    if (!skipAuth) {
      let token = this.getAuthToken();
      
      // If no token and we're not already retrying, try to refresh
      if (!token && retryCount === 0) {
        token = await this.refreshTokenIfNeeded();
      }
      
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    try {
      const response = await fetch(endpoint, {
        ...fetchOptions,
        headers,
      });

      if (!response.ok) {
        if (response.status === 401 && !skipAuth && retryCount === 0) {
          // Try to refresh token once
          const newToken = await this.refreshTokenIfNeeded();
          if (newToken) {
            // Retry the request with the new token
            return this.internal<T>(endpoint, { ...options, retryCount: retryCount + 1 });
          }
          
          // Only clear token if refresh explicitly fails
          if (typeof window !== "undefined") {
            localStorage.removeItem("admin-token");
          }
          throw new Error("Authentication required");
        }

        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }

      return response.text() as T;
    } catch (error) {
      // If it's a network error and we have a token, don't clear it
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.error('Network error:', error);
        // Keep the token for network errors
        throw new Error("Network error - please check your connection");
      }
      throw error;
    }
  }
}

// Create and export a default instance
export const apiClient = new ApiClient();

// Export the class for custom instances if needed
export { ApiClient };

// Convenience functions for common operations
export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    apiClient.get<T>(endpoint, options),
  post: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiClient.post<T>(endpoint, data, options),
  put: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiClient.put<T>(endpoint, data, options),
  patch: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    apiClient.patch<T>(endpoint, data, options),
  delete: <T>(endpoint: string, options?: RequestOptions) =>
    apiClient.delete<T>(endpoint, options),
  internal: <T>(endpoint: string, options?: RequestOptions) =>
    apiClient.internal<T>(endpoint, options),
};
