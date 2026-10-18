// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: {
//     default: "VIP Interior",
//     template: "%s | VIP Interior",
//   },
//   description:
//     "VIP Interior - Premium interior design, furniture and home solutions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-900 antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";

// export const metadata: Metadata = {
//   title: {
//     default: "Akrish Furniture & Interior",
//     template: "%s | Akrish",
//   },
//   description:
//     "Akrish Furniture and Interior - Premium furniture and interior design solutions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-900 antialiased">
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: {
//     default: "Akrish Furniture",
//     template: "%s | Akrish",
//   },
//   description:
//     "Akrish Furniture and Interior - Premium furniture and interior design solutions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-900 antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// import type { Metadata, Viewport } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: {
//     default: "Akrish Furniture",
//     template: "%s | Akrish",
//   },
//   description:
//     "Akrish Furniture and Interior - Premium furniture and interior design solutions.",
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
//   viewportFit: "cover",
//   themeColor: "#176b5b",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-900 antialiased">
//         <Header />
//         <main className="min-w-0">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    default: "Akrish Furniture & Interior",
    template: "%s | Akrish",
  },
  description:
    "Akrish Furniture and Interior - Premium furniture and interior design solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f9f8] text-slate-900 antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
