// API Response Types

// Category types
export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  color?: string;
  icon?: string;
}

export interface CategoryResponse {
  name: string;
}

// Blog types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  image: string;
  category: string;
  readTime?: string;
  authorImage?: string;
}

export interface BlogPostResponse {
  id: string;
  slug: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  image: string;
  category: string;
  readTime?: string;
  authorImage?: string;
}

// Course types
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  students: number;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface CourseResponse {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  students: number;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

// Message types
export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
}

export interface MessageResponse {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
}

// Dashboard home types
export interface HomeContent {
  footer: {
    description: string;
    links: Array<{
      title: string;
      url: string;
    }>;
    social: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
  stats: {
    totalStudents: number;
    totalCourses: number;
    totalRevenue: number;
    activeUsers: number;
  };
}

// Auth response types
export interface AuthResponse {
  message: string;
  success: boolean;
}

// Generic response types
export interface SuccessResponse {
  success: boolean;
  message?: string;
}

export interface ErrorResponse {
  error: string;
  status?: number;
}
