import { isTokenExpired, getTokenExpiration } from "../auth";

// Mock JWT token for testing
const createMockToken = (exp: number): string => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(JSON.stringify({ exp, iat: exp - 3600 }));
  const signature = "mock-signature";
  return `${header}.${payload}.${signature}`;
};

describe("Auth Utilities", () => {
  describe("isTokenExpired", () => {
    it("should return true for expired token", () => {
      const expiredTime = Math.floor(Date.now() / 1000) - 3600; // 1 hour ago
      const token = createMockToken(expiredTime);
      expect(isTokenExpired(token)).toBe(true);
    });

    it("should return false for valid token", () => {
      const validTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
      const token = createMockToken(validTime);
      expect(isTokenExpired(token)).toBe(false);
    });

    it("should return true for invalid token", () => {
      expect(isTokenExpired("invalid.token.format")).toBe(true);
    });
  });

  describe("getTokenExpiration", () => {
    it("should return correct expiration date", () => {
      const expTime = Math.floor(Date.now() / 1000) + 3600;
      const token = createMockToken(expTime);
      const expiration = getTokenExpiration(token);
      expect(expiration).toBeInstanceOf(Date);
      expect(expiration?.getTime()).toBe(expTime * 1000);
    });

    it("should return null for invalid token", () => {
      expect(getTokenExpiration("invalid.token.format")).toBeNull();
    });
  });
});
