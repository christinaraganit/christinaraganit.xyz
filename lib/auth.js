"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const authenticate = async (_, data) => {
  const password = data.get("password");
  const url = data.get("url") ?? "/";


  // TODO, optionally hash the cookie, optionally hash with current date to set time limit, or better yet use JWT
  if (password === process.env.SNEAKY_PASSWORD) {
    const _cookieJar = await cookies();
    _cookieJar.set("secret", process.env.COOKIE_SECRET);
    redirect(url);
  }
  return true;
};

export const isAuthenticated = async () => {
  const cookieJar = await cookies();
  return cookieJar.get("secret")?.value === process.env.COOKIE_SECRET;
}