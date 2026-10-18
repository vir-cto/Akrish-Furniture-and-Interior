// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_PATHS = [
//   "/login",
//   "/register",
//   "/forgot-password",
// ];

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/favicon.ico",
//   "/api/auth",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_PATHS.includes(pathname)) {
//     return true;
//   }

//   return PUBLIC_PREFIXES.some((prefix) =>
//     pathname.startsWith(prefix)
//   );
// }

// function isAuthenticated(request: NextRequest) {
//   /*
//    * Firebase authentication is normally managed on the client.
//    * The middleware checks for an authentication cookie/token if
//    * your application creates one.
//    *
//    * Supported cookie names:
//    * - authToken
//    * - session
//    * - firebaseToken
//    */

//   const authToken =
//     request.cookies.get("authToken")?.value ||
//     request.cookies.get("session")?.value ||
//     request.cookies.get("firebaseToken")?.value;

//   return Boolean(authToken);
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow public files and authentication pages.
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Protect ERP application routes.
//   if (pathname.startsWith("/furniture") || pathname.startsWith("/interior")) {
//     if (!isAuthenticated(request)) {
//       const loginUrl = new URL("/login", request.url);

//       // Remember where the user wanted to go.
//       loginUrl.searchParams.set("redirect", pathname);

//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Run middleware for all application routes except:
//      * - Next.js internal files
//      * - static files
//      */
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_PATHS = [
//   "/login",
//   "/register",
//   "/forgot-password",
//   "/",                 // allow Module Switcher page
// ];

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/favicon.ico",
//   "/api/auth",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_PATHS.includes(pathname)) {
//     return true;
//   }

//   return PUBLIC_PREFIXES.some((prefix) =>
//     pathname.startsWith(prefix)
//   );
// }

// function isAuthenticated(request: NextRequest) {
//   const authToken =
//     request.cookies.get("authToken")?.value ||
//     request.cookies.get("session")?.value ||
//     request.cookies.get("firebaseToken")?.value;

//   return Boolean(authToken);
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow public pages
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Protect only Interior & Furniture modules
//   if (
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const loginUrl = new URL("/login", request.url);
//       loginUrl.searchParams.set("redirect", pathname);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_PATHS = [
//   "/login",
//   "/register",
//   "/forgot-password",
// ];

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/favicon.ico",
//   "/api/auth",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_PATHS.includes(pathname)) {
//     return true;
//   }

//   return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix));
// }

// function isAuthenticated(request: NextRequest) {
//   const authToken =
//     request.cookies.get("authToken")?.value ||
//     request.cookies.get("session")?.value ||
//     request.cookies.get("firebaseToken")?.value;

//   return Boolean(authToken);
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Always allow public auth pages and static assets
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Protect home + modules: redirect to admin login if not authenticated
//   if (
//     pathname === "/" ||
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const loginUrl = new URL("/login", request.url);
//       if (pathname !== "/") {
//         loginUrl.searchParams.set("redirect", pathname);
//       }
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };


// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_PATHS = [
//   "/login",
//   "/register",
//   "/forgot-password",
// ];

// const PUBLIC_PREFIXES = [
//   "/_next",
//   "/favicon.ico",
//   "/api/auth",
// ];

// function isPublicPath(pathname: string) {
//   if (PUBLIC_PATHS.includes(pathname)) {
//     return true;
//   }

//   return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix));
// }

// function isAuthenticated(request: NextRequest) {
//   const authToken =
//     request.cookies.get("authToken")?.value ||
//     request.cookies.get("session")?.value ||
//     request.cookies.get("firebaseToken")?.value;

//   return Boolean(authToken);
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow login and other public routes
//   if (isPublicPath(pathname)) {
//     return NextResponse.next();
//   }

//   // Protect home + ERP modules
//   if (
//     pathname === "/" ||
//     pathname.startsWith("/furniture") ||
//     pathname.startsWith("/interior") ||
//     pathname.startsWith("/admin")
//   ) {
//     if (!isAuthenticated(request)) {
//       const loginUrl = new URL("/login", request.url);
//       if (pathname !== "/") {
//         loginUrl.searchParams.set("redirect", pathname);
//       }
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };


import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/login",
  "/register",
  "/forgot-password",
];

const PUBLIC_PREFIXES = [
  "/_next",
  "/favicon.ico",
  "/api/auth",
];

function normalizePath(pathname: string): string {
  return pathname.replace(/^\/erp(?=\/|$)/, "") || "/";
}

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
  const pathname = normalizePath(request.nextUrl.pathname);

  // Allow login, registration, password recovery and public assets.
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Protect ERP home and modules.
  const isProtectedPath =
    pathname === "/" ||
    pathname.startsWith("/furniture") ||
    pathname.startsWith("/interior") ||
    pathname.startsWith("/admin");

  if (isProtectedPath && !isAuthenticated(request)) {
    const loginUrl = new URL("/erp/login", request.url);

    if (pathname !== "/") {
      loginUrl.searchParams.set("redirect", pathname);
    }

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
