import { NextResponse } from "next/server";

/**
 * Middleware to handle ?bypass=TOKEN
 * - Sets an HttpOnly cookie if token matches
 * - Redirects to the same URL without the bypass param
 * - Works on all pages
 */
export function middleware(req) {
  const url = req.nextUrl.clone();
  const bypass = url.searchParams.get("bypass");

  // no bypass param, continue
  if (!bypass) return NextResponse.next();

  // token matches
  if (bypass === process.env.SNEAKY_PASSWORD) {
    url.searchParams.delete("bypass"); // remove param
    const res = NextResponse.redirect(url);

    // set HttpOnly cookie
    res.cookies.set({
      name: "secret",
      value: process.env.COOKIE_SECRET ?? "secret-placeholder",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  }

  // invalid token → continue normally (or redirect elsewhere if you prefer)
  return NextResponse.next();
}

// apply middleware to all routes
export const config = {
  matcher: ["/:path*"],
};
