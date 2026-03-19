import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";
// For a real app, hash password in DB. For simplicity:
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Create JWT
      const secret = new TextEncoder().encode(JWT_SECRET);
      
      const token = await new SignJWT({ user: username })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1d')
        .sign(secret);

      const response = NextResponse.json({ success: true }, { status: 200 });
      
      // Set HTTP-only cookie
      response.cookies.set({
        name: "admin_token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
