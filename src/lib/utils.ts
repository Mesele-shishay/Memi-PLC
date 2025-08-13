import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to forward authorization headers from Next.js API routes to backend
 * @param request - The incoming request from Next.js
 * @returns Headers object with authorization if present
 */
export function getForwardedHeaders(request: Request): Record<string, string> {
  const headers: Record<string, string> = {};

  // Forward authorization header if present
  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    headers["Authorization"] = authHeader;
  }

  // Forward content-type if present
  const contentType = request.headers.get("content-type");
  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  return headers;
}

/**
 * Utility function to create a standardized error response
 * @param message - Error message
 * @param status - HTTP status code
 * @returns NextResponse with error
 */
export function createErrorResponse(message: string, status: number = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
