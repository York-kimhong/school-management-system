import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("user");

  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    "/Dashboard",

    "/student",

    "/teacher",

    "/user",

    "/attendance",

    "/schedule",
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",

    "/student/:path*",

    "/teacher/:path*",

    "/user/:path*",

    "/attendance/:path*",

    "/schedule/:path*",
  ],
};
