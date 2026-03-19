import { NextResponse } from "next/server";

// Mock DB interactions for API representation
export async function GET() {
  return NextResponse.json([{ id: "1", title: "E-Commerce" }]);
}

export async function POST(req) {
  const body = await req.json();
  // Insert to MongoDB here
  return NextResponse.json({ success: true, data: body });
}
