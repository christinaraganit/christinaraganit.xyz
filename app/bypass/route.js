// app/bypass/route.ts
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const redirectUrl = url.searchParams.get("redirect") ?? "/";
  
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  if (token === process.env.SNEAKY_PASSWORD) {
    const res = NextResponse.redirect(new URL(redirectUrl, req.url));
    res.cookies.set({
      name: "secret",
      value: process.env.COOKIE_SECRET,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  }
  
  return NextResponse.redirect(new URL("/", req.url));
}
