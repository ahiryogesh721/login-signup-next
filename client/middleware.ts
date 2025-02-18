import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken");
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname === "/home") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  } else {
    if (pathname === "/auth/login" || pathname === "/auth/signup") {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/auth/login", "/auth/signup"],
};
