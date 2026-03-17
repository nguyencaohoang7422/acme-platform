// import type { NextRequest } from "next/server";
 
export interface AuthToken {
  userId: string;
  email: string;
  exp: number;
}
 
export function getAuthToken(request: any): string | undefined {
  return request.cookies.get("auth-token")?.value;
}
 
export function isAuthenticated(request: any): boolean {
  const token = getAuthToken(request);
  if (!token) return false;
  // In a real app, verify the JWT here
  return true;
}
 
export function decodeToken(token: string): AuthToken | null {
  try {
    // In a real app, use a proper JWT library
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload as AuthToken;
  } catch {
    return null;
  }
}