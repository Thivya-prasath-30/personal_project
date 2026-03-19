import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Connect to Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to admin
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Note: this will fail if EMAIL_USER/PASS aren't properly set, but we catch it
    // Wait for real credentials or just log in development
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Nodemailer: Email credentials not set, logging message to console:");
      console.log(mailOptions);
    }

    // Ideally, we'd also save to MongoDB here in the Messages collection
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error contact:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
