// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "VIP Interior ERP",
//   description:
//     "Collective ERP for VIP Interior - Interior and Furniture Management",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-800 antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import { AuthProvider } from "@/core/auth/AuthContext";

// export const metadata: Metadata = {
//   title: "Akrish Collective ERP",
//   description:
//     "Collective ERP for Akrish Furniture and Interior - Interior and Furniture Management",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[#f7f9f8] text-slate-800 antialiased">
//         <AuthProvider>
//           {children}
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/core/auth/AuthContext";

export const metadata: Metadata = {
  title: "Akrish Collective ERP",
  description:
    "Collective ERP for Akrish Furniture and Interior - Interior and Furniture Management",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#176b57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#f7f9f8] text-slate-800 antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
