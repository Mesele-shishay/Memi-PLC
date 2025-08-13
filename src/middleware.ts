import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    // For dashboard API routes, ensure they require authentication
    if (request.nextUrl.pathname.startsWith("/api/dashboard/")) {
      const authHeader = request.headers.get("authorization");

      // Skip auth check for login endpoint
      if (request.nextUrl.pathname === "/api/auth/login") {
        return NextResponse.next();
      }

      // For other dashboard routes, check if authorization header is present
      if (!authHeader) {
        return NextResponse.json(
          { error: "Authorization header required" },
          { status: 401 }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
