import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more params
  // +: one or more params
  // ?: zero or one param
  matcher: ['/users/:id*']
}