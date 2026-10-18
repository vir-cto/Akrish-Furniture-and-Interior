// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_PATHS = [
//   "/",
//   "/login",
//   "/register",
//   "/forgot-password",
//   "/products",
//   "/catalog",
//   "/about",
//   "/contact",
//   "/services",
//   "/furniture",
//   "/interior",
//   "/cart",
//   "/checkout",
// ];

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/api/auth",
//   "/favicon.ico",
//   "/images",
//   "/icons",
// ];

// function isPublicPath(pathname: string): boolean {
//   if (PUBLIC_PATHS.includes(pathname)) {
//     return true;
//   }

//   return PUBLIC_PREFIXES.some((prefix) =>
//     pathname.startsWith(prefix)
//   );
// }

// function isAuthenticated(request: NextRequest): boolean {
//   const authToken =
//     request.cookies.get("authToken")?.value ||
//     request.cookies.get("session")?.value ||
//     request.cookies.get("firebaseToken")?.value;

//   return Boolean(authToken);
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow public website pages.
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Protect customer account pages.
//   const protectedPaths = [
//     "/account",
//     "/profile",
//     "/orders",
//     "/wishlist",
//   ];

//   const isProtectedPath = protectedPaths.some(
//     (path) =>
//       pathname === path ||
//       pathname.startsWith(`${path}/`)
//   );

//   if (isProtectedPath && !isAuthenticated(request)) {
//     const loginUrl = new URL(
//       "/login",
//       request.url
//     );

//     loginUrl.searchParams.set(
//       "redirect",
//       pathname
//     );

//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };


import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/products",
  "/catalog",
  "/about",
  "/contact",
  "/services",
  "/furniture",
  "/interior",
  "/cart",
  "/checkout",
];

const PUBLIC_PREFIXES = [
  "/_next",
  "/api/auth",
  "/favicon.ico",
  "/images",
  "/icons",
];

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.includes(pathname)) {
    return true;
  }

  return PUBLIC_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );
}

function isAuthenticated(request: NextRequest): boolean {
  const authToken =
    request.cookies.get("authToken")?.value ||
    request.cookies.get("session")?.value ||
    request.cookies.get("firebaseToken")?.value;

  return Boolean(authToken);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the ERP application handle its own authentication.
  if (pathname === "/erp" || pathname.startsWith("/erp/")) {
    return NextResponse.next();
  }

  // Allow public website pages.
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Protect customer account pages.
  const protectedPaths = [
    "/account",
    "/profile",
    "/orders",
    "/wishlist",
  ];

  const isProtectedPath = protectedPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith(`${path}/`)
  );

  if (isProtectedPath && !isAuthenticated(request)) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

