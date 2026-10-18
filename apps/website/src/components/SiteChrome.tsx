// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

// export default function SiteChrome({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname() || "";
//   const isAuth = AUTH_PATHS.some(
//     (p) => pathname === p || pathname.startsWith(p + "/")
//   );

//   if (isAuth) {
//     return <main className="min-h-screen">{children}</main>;
//   }

//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AUTH_PATHS = ["/sign-in", "/register", "/forgot-password"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const isAuth = AUTH_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  return (
    <>
      <Header />
      <main className={isAuth ? "min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-5rem)]" : undefined}>
        {children}
      </main>
      {!isAuth && <Footer />}
    </>
  );
}
