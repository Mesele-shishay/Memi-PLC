// Mock authentication utilities for admin login

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'super-admin';
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

// Mock admin users database
const mockAdminUsers: AdminUser[] = [
  {
    id: '1',
    email: 'admin@memiplc.com',
    name: 'Admin User',
    role: 'admin',
    avatar: '/favicon-32x32.png'
  },
  {
    id: '2',
    email: 'superadmin@memiplc.com',
    name: 'Super Admin',
    role: 'super-admin',
    avatar: '/favicon-32x32.png'
  }
];

// Mock authentication function
export const authenticateAdmin = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation
  const user = mockAdminUsers.find(u => u.email === credentials.email);
  
  if (!user) {
    return {
      success: false,
      error: 'Invalid email or password'
    };
  }
  
  // Mock password validation (in real app, this would hash and compare)
  if (credentials.password !== 'admin123') {
    return {
      success: false,
      error: 'Invalid email or password'
    };
  }
  
  // Generate mock token
  const token = `mock-jwt-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    success: true,
    user,
    token
  };
};

// Mock logout function
export const logoutAdmin = async (): Promise<{ success: boolean }> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true };
};

// Mock token validation
export const validateToken = async (token: string): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock token validation (in real app, this would verify JWT)
  if (token.startsWith('mock-jwt-token-')) {
    const user = mockAdminUsers[0]; // Return first user for demo
    return {
      success: true,
      user,
      token
    };
  }
  
  return {
    success: false,
    error: 'Invalid or expired token'
  };
};

// Mock current user getter
export const getCurrentAdmin = async (): Promise<AdminUser | null> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // In a real app, this would get from context or localStorage
  const token = localStorage.getItem('admin-token');
  if (token) {
    const authResponse = await validateToken(token);
    return authResponse.success ? authResponse.user || null : null;
  }
  
  return null;
};
