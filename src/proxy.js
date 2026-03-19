import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";
// Next.js middleware runs on Edge runtime which doesn't support jsonwebtoken.
// We use 'jose' or just simple fallback if doing standard verification.
// For simplicity in a basic app without 'jose', we check cookie presence
// But it is best to use jose: 'npm install jose'
// I'll install jose next.

export default async function proxy(req) {
  const token = req.cookies.get("admin_token")?.value;
  const { pathname } = req.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      // Verify token
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
    } catch (error) {
      console.error("JWT Verification failed:", error);
      const url = new URL("/admin/login", req.url);
      url.searchParams.set("error", "session_expired");
      // Clear cookie
      const res = NextResponse.redirect(url);
      res.cookies.delete("admin_token");
      return res;
    }
  }

  // If logged in, redirect away from login page to dashboard
  if (pathname.startsWith("/admin/login") && token) {
     try {
        const secret = new TextEncoder().encode(JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL("/admin", req.url));
     } catch (e) {
        // Token invalid, let them login
     }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
