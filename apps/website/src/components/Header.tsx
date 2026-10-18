// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
// } from "lucide-react";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// const furnitureLinks = [
//   { label: "All Furniture", href: "/furniture" },
//   { label: "Sofas", href: "/furniture?category=Sofa" },
//   { label: "Beds", href: "/furniture?category=Bed" },
//   { label: "Dining", href: "/furniture?category=Dining" },
//   { label: "Chairs", href: "/furniture?category=Chair" },
//   { label: "Tables", href: "/furniture?category=Table" },
// ];

// const interiorLinks = [
//   { label: "Interior Design", href: "/interior" },
//   { label: "Residential", href: "/interior?type=Residential" },
//   { label: "Commercial", href: "/interior?type=Commercial" },
//   { label: "Office", href: "/interior?type=Office" },
//   { label: "Villa", href: "/interior?type=Villa" },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [interiorOpen, setInteriorOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");

//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } catch {
//       setUser(null);
//     }

//     try {
//       const storedCart = localStorage.getItem("cart");

//       if (storedCart) {
//         const cart = JSON.parse(storedCart);

//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       }
//     } catch {
//       setCartCount(0);
//     }

//     const handleCartUpdate = () => {
//       try {
//         const storedCart = localStorage.getItem("cart");

//         if (!storedCart) {
//           setCartCount(0);
//           return;
//         }

//         const cart = JSON.parse(storedCart);

//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);

//     return () => {
//       window.removeEventListener("cartUpdated", handleCartUpdate);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("firebaseToken");

//     setUser(null);
//     setUserOpen(false);
//     setMobileMenuOpen(false);

//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//     setInteriorOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>

//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             {/* Furniture */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setFurnitureOpen((value) => !value);
//                   setInteriorOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Interior */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setInteriorOpen((value) => !value);
//                   setFurnitureOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Interior
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     interiorOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {interiorOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {interiorLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setInteriorOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>

//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>

//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             {/* Wishlist */}
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             {/* Cart */}
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />

//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* User */}
//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((value) => !value)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>

//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>

//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>

//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>

//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>

//                       <Link
//                         href="/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>

//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>

//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/login"
//                   className="flex items-center gap-2 rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>

//           {/* Mobile Actions */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />

//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((value) => !value)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               {/* Mobile Furniture */}
//               <div>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFurnitureOpen((value) => !value);
//                     setInteriorOpen(false);
//                   }}
//                   className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//                 >
//                   Furniture
//                   <ChevronDown
//                     className={`h-4 w-4 transition ${
//                       furnitureOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {furnitureOpen && (
//                   <div className="ml-4 border-l border-[#e4e2da] pl-3">
//                     {furnitureLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         onClick={closeMobileMenu}
//                         className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Interior */}
//               <div>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setInteriorOpen((value) => !value);
//                     setFurnitureOpen(false);
//                   }}
//                   className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//                 >
//                   Interior
//                   <ChevronDown
//                     className={`h-4 w-4 transition ${
//                       interiorOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {interiorOpen && (
//                   <div className="ml-4 border-l border-[#e4e2da] pl-3">
//                     {interiorLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         onClick={closeMobileMenu}
//                         className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>

//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>

//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>

//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <>
//                     <div className="flex items-center gap-3 px-4 py-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                         {(user.name || user.email || "U")
//                           .charAt(0)
//                           .toUpperCase()}
//                       </div>

//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>

//                         {user.email && (
//                           <p className="truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <Link
//                       href="/account"
//                       onClick={closeMobileMenu}
//                       className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <User className="h-4 w-4" />
//                       My Account
//                     </Link>

//                     <Link
//                       href="/orders"
//                       onClick={closeMobileMenu}
//                       className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Package className="h-4 w-4" />
//                       My Orders
//                     </Link>

//                     <Link
//                       href="/wishlist"
//                       onClick={closeMobileMenu}
//                       className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Heart className="h-4 w-4" />
//                       Wishlist
//                     </Link>

//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut className="h-4 w-4" />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <Link
//                     href="/login"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-4 py-3 text-sm font-semibold text-white"
//                   >
//                     <User className="h-4 w-4" />
//                     Login
//                   </Link>
//                 )}
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// const furnitureLinks = [
//   { label: "All Furniture", href: "/products" },
//   { label: "Sofas", href: "/products?category=Sofa" },
//   { label: "Beds", href: "/products?category=Bed" },
//   { label: "Dining", href: "/products?category=Dining" },
//   { label: "Chairs", href: "/products?category=Chair" },
//   { label: "Tables", href: "/products?category=Table" },
// ];

// const interiorLinks = [
//   { label: "Interior Design", href: "/services" },
//   { label: "Residential", href: "/services?type=Residential" },
//   { label: "Commercial", href: "/services?type=Commercial" },
//   { label: "Office", href: "/services?type=Office" },
//   { label: "Villa", href: "/services?type=Villa" },
// ];

// // Change this to your real ERP domain in production
// const ERP_LOGIN_URL =
//   process.env.NEXT_PUBLIC_ERP_URL
//     ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//     : "http://localhost:3001/login"; // local ERP port

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [interiorOpen, setInteriorOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       setUser(null);
//     }

//     try {
//       const storedCart = localStorage.getItem("cart");
//       if (storedCart) {
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       }
//     } catch {
//       setCartCount(0);
//     }

//     const handleCartUpdate = () => {
//       try {
//         const storedCart = localStorage.getItem("cart");
//         if (!storedCart) {
//           setCartCount(0);
//           return;
//         }
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("firebaseToken");
//     setUser(null);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//     setInteriorOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">Akrish</div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]">
//               Home
//             </Link>

//             {/* Furniture dropdown */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setFurnitureOpen((v) => !v);
//                   setInteriorOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown className={`h-4 w-4 transition ${furnitureOpen ? "rotate-180" : ""}`} />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Interior dropdown */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setInteriorOpen((v) => !v);
//                   setFurnitureOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Interior
//                 <ChevronDown className={`h-4 w-4 transition ${interiorOpen ? "rotate-180" : ""}`} />
//               </button>
//               {interiorOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {interiorLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setInteriorOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link href="/products" className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]">
//               Products
//             </Link>
//             <Link href="/services" className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]">
//               Services
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]">
//               About
//             </Link>
//             <Link href="/contact" className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]">
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Customer Account / Login */}
//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U").charAt(0).toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown className={`h-4 w-4 text-gray-500 transition ${userOpen ? "rotate-180" : ""}`} />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">{user.name || "User"}</p>
//                         {user.email && <p className="mt-1 truncate text-xs text-gray-500">{user.email}</p>}
//                       </div>
//                       <Link href="/account" onClick={() => setUserOpen(false)} className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]">
//                         <User className="h-4 w-4" /> My Account
//                       </Link>
//                       <Link href="/account/orders" onClick={() => setUserOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]">
//                         <Package className="h-4 w-4" /> My Orders
//                       </Link>
//                       <Link href="/wishlist" onClick={() => setUserOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]">
//                         <Heart className="h-4 w-4" /> Wishlist
//                       </Link>
//                       <button type="button" onClick={handleLogout} className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50">
//                         <LogOut className="h-4 w-4" /> Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             {/* STAFF LOGIN – Top right as requested */}
//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           {/* Mobile Actions */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <Link href="/cart" className="relative rounded-xl p-2.5 text-gray-600" aria-label="Shopping cart">
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link href="/" onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]">
//                 Home
//               </Link>

//               {/* Mobile Furniture / Interior – same as before */}
//               {/* ... (keep your existing mobile furniture & interior sections) ... */}

//               <Link href="/products" onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]">
//                 Products
//               </Link>
//               <Link href="/services" onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]">
//                 Services
//               </Link>
//               <Link href="/about" onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]">
//                 About
//               </Link>
//               <Link href="/contact" onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]">
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <>
//                     {/* existing user menu */}
//                     <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50">
//                       <LogOut className="h-4 w-4" /> Logout
//                     </button>
//                   </>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" /> Customer Login
//                   </Link>
//                 )}

//                 {/* Staff Login in mobile */}
//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" /> Staff Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// const furnitureLinks = [
//   { label: "All Furniture", href: "/products" },
//   { label: "Sofas", href: "/products?category=Sofa" },
//   { label: "Beds", href: "/products?category=Bed" },
//   { label: "Dining", href: "/products?category=Dining" },
//   { label: "Chairs", href: "/products?category=Chair" },
//   { label: "Tables", href: "/products?category=Table" },
// ];

// const interiorLinks = [
//   { label: "Interior Design", href: "/services" },
//   { label: "Residential", href: "/services?type=Residential" },
//   { label: "Commercial", href: "/services?type=Commercial" },
//   { label: "Office", href: "/services?type=Office" },
//   { label: "Villa", href: "/services?type=Villa" },
// ];

// // ERP Login URL (ERP runs on port 3001)
// const ERP_LOGIN_URL =
//   process.env.NEXT_PUBLIC_ERP_URL
//     ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//     : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [interiorOpen, setInteriorOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       setUser(null);
//     }

//     try {
//       const storedCart = localStorage.getItem("cart");
//       if (storedCart) {
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       }
//     } catch {
//       setCartCount(0);
//     }

//     const handleCartUpdate = () => {
//       try {
//         const storedCart = localStorage.getItem("cart");
//         if (!storedCart) {
//           setCartCount(0);
//           return;
//         }
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("firebaseToken");
//     setUser(null);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//     setInteriorOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             {/* Furniture dropdown */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setFurnitureOpen((v) => !v);
//                   setInteriorOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Interior dropdown */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setInteriorOpen((v) => !v);
//                   setFurnitureOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Interior
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     interiorOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {interiorOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {interiorLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setInteriorOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Customer Account / Login */}
//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             {/* SUPER ADMIN LOGIN – Top right */}
//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Super Admin Login
//             </a>
//           </div>

//           {/* Mobile Actions */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     Logout
//                   </button>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 {/* Super Admin Login in mobile */}
//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const interiorLinks: NavLink[] = [
//   { label: "Interior Design", href: "/services" },
//   { label: "Residential", href: "/services?type=Residential" },
//   { label: "Commercial", href: "/services?type=Commercial" },
//   { label: "Office", href: "/services?type=Office" },
//   { label: "Villa", href: "/services?type=Villa" },
// ];

// // ERP Login URL (ERP runs on port 3001)
// const ERP_LOGIN_URL =
//   process.env.NEXT_PUBLIC_ERP_URL
//     ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//     : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [interiorOpen, setInteriorOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   // Fetch categories from Firebase
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );
//         const snapshot = await getDocs(q);

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((doc) => {
//           const category = doc.data().category;
//           if (category && typeof category === "string") {
//             categorySet.add(category.trim());
//           }
//         });

//         const dynamicLinks: NavLink[] = [
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ];

//         setFurnitureLinks(dynamicLinks);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//         // Keep default "All Furniture" if fetch fails
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       setUser(null);
//     }

//     try {
//       const storedCart = localStorage.getItem("cart");
//       if (storedCart) {
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       }
//     } catch {
//       setCartCount(0);
//     }

//     const handleCartUpdate = () => {
//       try {
//         const storedCart = localStorage.getItem("cart");
//         if (!storedCart) {
//           setCartCount(0);
//           return;
//         }
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("firebaseToken");
//     setUser(null);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//     setInteriorOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             {/* Furniture dropdown - Dynamic from Firebase */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setFurnitureOpen((v) => !v);
//                   setInteriorOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Interior dropdown */}
//             {/* <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setInteriorOpen((v) => !v);
//                   setFurnitureOpen(false);
//                 }}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Interior
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     interiorOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {interiorOpen && (
//                 <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {interiorLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setInteriorOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div> */}

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Customer Account / Login */}
//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             {/* SUPER ADMIN LOGIN */}
//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           {/* Mobile Actions */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               {/* Mobile Furniture Categories */}
//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     Logout
//                   </button>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   // Categories from ERP products collection
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         const dynamicLinks: NavLink[] = [
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ];

//         setFurnitureLinks(dynamicLinks);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       setUser(null);
//     }

//     try {
//       const storedCart = localStorage.getItem("cart");
//       if (storedCart) {
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       }
//     } catch {
//       setCartCount(0);
//     }

//     const handleCartUpdate = () => {
//       try {
//         const storedCart = localStorage.getItem("cart");
//         if (!storedCart) {
//           setCartCount(0);
//           return;
//         }
//         const cart = JSON.parse(storedCart);
//         if (Array.isArray(cart)) {
//           setCartCount(
//             cart.reduce(
//               (total: number, item: { quantity?: number }) =>
//                 total + Number(item.quantity || 1),
//               0
//             )
//           );
//         }
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("firebaseToken");
//     setUser(null);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             {/* Furniture dropdown — categories from Firebase */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={`${link.label}-${link.href}`}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     Logout
//                   </button>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// // import { auth, db } from "@/lib/firebase";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   // Categories from ERP products
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         const dynamicLinks: NavLink[] = [
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ];

//         setFurnitureLinks(dynamicLinks);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // User from localStorage (login session only)
//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) setUser(JSON.parse(storedUser));
//     } catch {
//       setUser(null);
//     }
//   }, []);

//   useEffect(() => {
//   const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//     if (!firebaseUser) {
//       setUser(null);
//       setCartCount(0);
//       return;
//     }

//     let name = firebaseUser.displayName || "";
//     let email = firebaseUser.email || "";

//     try {
//       const snap = await getDoc(
//         doc(db, "furniture_customers", firebaseUser.uid)
//       );
//       if (snap.exists()) {
//         const data = snap.data();
//         if (data.name) name = String(data.name);
//         if (data.email) email = String(data.email);
//       }
//     } catch {
//       // ignore
//     }

//     setUser({ name, email });

//     // cart by email from Firebase Auth
//     try {
//       if (email) {
//         const cart = await getCart(email.toLowerCase());
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       }
//     } catch {
//       setCartCount(0);
//     }
//   });

//   return () => unsub();
// }, []);



//   // Cart count from Firebase only
//   useEffect(() => {
//     const loadCount = async () => {
//       try {
//         const raw = localStorage.getItem("user");
//         if (!raw) {
//           setCartCount(0);
//           return;
//         }
//         const parsed = JSON.parse(raw);
//         if (!parsed?.email) {
//           setCartCount(0);
//           return;
//         }
//         const email = String(parsed.email).toLowerCase();
//         const cart = await getCart(email);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     loadCount();
//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   // const handleLogout = () => {
//   //   // localStorage.removeItem("user");
//   //   // localStorage.removeItem("authToken");
//   //   // localStorage.removeItem("firebaseToken");
//   //   // localStorage.removeItem("cart"); // clear any old guest cart
//   //   await signOut(auth);
//   //   setUser(null);
//   //   setCartCount(0);
//   //   setUserOpen(false);
//   //   setMobileMenuOpen(false);
//   //   window.location.href = "/";
//   // };
//   const handleLogout = async () => {
//   await signOut(auth);
//   setUser(null);
//   setCartCount(0);
//   setUserOpen(false);
//   setMobileMenuOpen(false);
//   window.location.href = "/";
// };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={`${link.label}-${link.href}`}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     Logout
//                   </button>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     if (!mobileMenuOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [mobileMenuOpen]);

//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         setFurnitureLinks([
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ]);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Auth + cart by UID
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setCartCount(0);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         /* ignore */
//       }

//       setUser({ name, email });

//       try {
//         const cart = await getCart(firebaseUser.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     });

//     return () => unsub();
//   }, []);

//   // Refresh badge when cart changes
//   useEffect(() => {
//     const loadCount = async () => {
//       const u = auth.currentUser;
//       if (!u) {
//         setCartCount(0);
//         return;
//       }
//       try {
//         const cart = await getCart(u.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setCartCount(0);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex items-center gap-3"
//           >
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b5b]">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="border-t border-[#e4e2da] py-4 lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={`${link.label}-${link.href}`}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     Logout
//                   </button>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   useEffect(() => {
//     if (!mobileMenuOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         setFurnitureLinks([
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ]);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setCartCount(0);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         /* ignore */
//       }

//       setUser({ name, email });

//       try {
//         const cart = await getCart(firebaseUser.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     });

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const loadCount = async () => {
//       const u = auth.currentUser;
//       if (!u) {
//         setCartCount(0);
//         return;
//       }
//       try {
//         const cart = await getCart(u.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setCartCount(0);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white pt-[env(safe-area-inset-top,0px)]">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between sm:h-20">
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex min-w-0 items-center gap-3"
//           >
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
//               <span className="text-lg font-bold text-white">A</span>
//             </div>
//             <div className="hidden min-w-0 sm:block">
//               <div className="text-xl font-bold leading-none text-[#17352f]">
//                 Akrish
//               </div>
//               <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a5b18]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           <div className="flex items-center gap-1 lg:hidden">
//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-xl p-2.5 text-gray-700"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-[#e4e2da] py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={`${link.label}-${link.href}`}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="flex min-h-[40px] items-center rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <>
//                     <Link
//                       href="/account"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <User className="h-4 w-4" />
//                       My Account
//                     </Link>
//                     <Link
//                       href="/account/orders"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Package className="h-4 w-4" />
//                       My Orders
//                     </Link>
//                     <Link
//                       href="/wishlist"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Heart className="h-4 w-4" />
//                       Wishlist
//                     </Link>
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut className="h-4 w-4" />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);
//   const [furnitureAccordion, setFurnitureAccordion] = useState(true);
//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   useEffect(() => {
//     if (!mobileMenuOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         setFurnitureLinks([
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ]);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setCartCount(0);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         /* ignore */
//       }

//       setUser({ name, email });

//       try {
//         const cart = await getCart(firebaseUser.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     });

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const loadCount = async () => {
//       const u = auth.currentUser;
//       if (!u) {
//         setCartCount(0);
//         return;
//       }
//       try {
//         const cart = await getCart(u.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setCartCount(0);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white pt-[env(safe-area-inset-top,0px)]">
//       <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
//         <div className="flex h-14 items-center justify-between gap-2 sm:h-20 sm:gap-3">
//           {/* Brand — title visible on all screen sizes */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
//               <span className="text-base font-bold text-white sm:text-lg">A</span>
//             </div>
//             <div className="min-w-0">
//               <div className="truncate text-base font-bold leading-none text-[#17352f] sm:text-xl">
//                 Akrish
//               </div>
//               <div className="mt-0.5 hidden text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a5b18] xs:block sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           {/* Mobile actions: wishlist · account · cart · menu */}
//           <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 lg:hidden">
//             <Link
//               href="/wishlist"
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href={user ? "/account" : "/sign-in"}
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label={user ? "My account" : "Sign in"}
//             >
//               {user ? (
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#176b5b] text-[11px] font-bold text-white">
//                   {(user.name || user.email || "U").charAt(0).toUpperCase()}
//                 </span>
//               ) : (
//                 <User className="h-5 w-5" />
//               )}
//             </Link>

//             <Link
//               href="/cart"
//               className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-[#f7f7f4]"
//               aria-label="Toggle menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile drawer */}
//         {/* {mobileMenuOpen && (
//           <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-[#e4e2da] py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
//             <nav className="space-y-1">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Home
//               </Link>

//               <div className="px-4 py-2">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
//                   Furniture
//                 </p>
//                 {furnitureLinks.map((link) => (
//                   <Link
//                     key={`${link.label}-${link.href}`}
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="flex min-h-[40px] items-center rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/products"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/services"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/about"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#f7f7f4]"
//               >
//                 Contact
//               </Link>

//               <div className="mt-3 border-t border-[#e4e2da] pt-3">
//                 {user ? (
//                   <>
//                     <Link
//                       href="/account"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <User className="h-4 w-4" />
//                       My Account
//                     </Link>
//                     <Link
//                       href="/account/orders"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Package className="h-4 w-4" />
//                       My Orders
//                     </Link>
//                     <Link
//                       href="/wishlist"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                     >
//                       <Heart className="h-4 w-4" />
//                       Wishlist
//                     </Link>
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50"
//                     >
//                       <LogOut className="h-4 w-4" />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <Link
//                     href="/sign-in"
//                     onClick={closeMobileMenu}
//                     className="mx-4 flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#176b5b] px-4 py-3 text-sm font-semibold text-[#176b5b]"
//                   >
//                     <User className="h-4 w-4" />
//                     Customer Login
//                   </Link>
//                 )}

//                 <a
//                   href={ERP_LOGIN_URL}
//                   onClick={closeMobileMenu}
//                   className="mx-4 mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-3 text-sm font-semibold text-white"
//                 >
//                   <Lock className="h-4 w-4" />
//                   Super Admin Login
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )} */}

//                 {mobileMenuOpen && (
//           <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-[#e4e2da] bg-[#fafaf8] py-3 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
//             <nav className="space-y-1 px-2">
//               {/* Primary links */}
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="flex min-h-[48px] items-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-100 active:bg-slate-50"
//               >
//                 Home
//               </Link>

//               {/* Furniture accordion */}
//               <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
//                 <button
//                   type="button"
//                   onClick={() => setFurnitureAccordion((v) => !v)}
//                   className="flex min-h-[48px] w-full items-center justify-between px-4 text-left text-sm font-semibold text-slate-800 active:bg-slate-50"
//                   aria-expanded={furnitureAccordion}
//                 >
//                   <span>Furniture</span>
//                   <ChevronDown
//                     className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
//                       furnitureAccordion ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`grid transition-all duration-200 ease-out ${
//                     furnitureAccordion
//                       ? "grid-rows-[1fr] opacity-100"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="space-y-0.5 border-t border-slate-100 px-2 pb-2 pt-1">
//                       {furnitureLinks.map((link) => (
//                         <Link
//                           key={`${link.label}-${link.href}`}
//                           href={link.href}
//                           onClick={closeMobileMenu}
//                           className="flex min-h-[42px] items-center rounded-lg px-3 text-sm text-slate-600 active:bg-[#e8f5ef] active:text-[#176b5b]"
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {[
//                 { href: "/products", label: "Products" },
//                 { href: "/services", label: "Services" },
//                 { href: "/about", label: "About" },
//                 { href: "/contact", label: "Contact" },
//               ].map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={closeMobileMenu}
//                   className="flex min-h-[48px] items-center rounded-xl bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-100 active:bg-slate-50"
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//               {/* Account block */}
//               <div className="mt-3 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
//                 <p className="px-4 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                   Account
//                 </p>
//                 {user ? (
//                   <div className="pb-1">
//                     <Link
//                       href="/account"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 px-4 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                     >
//                       <User className="h-4 w-4 text-[#176b5b]" />
//                       My Account
//                     </Link>
//                     <Link
//                       href="/account/orders"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 px-4 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                     >
//                       <Package className="h-4 w-4 text-[#176b5b]" />
//                       My Orders
//                     </Link>
//                     <Link
//                       href="/wishlist"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center gap-3 px-4 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                     >
//                       <Heart className="h-4 w-4 text-[#176b5b]" />
//                       Wishlist
//                     </Link>
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex min-h-[44px] w-full items-center gap-3 px-4 text-sm font-medium text-red-600 active:bg-red-50"
//                     >
//                       <LogOut className="h-4 w-4" />
//                       Logout
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="px-3 pb-3 pt-1">
//                     <Link
//                       href="/sign-in"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#176b5b] text-sm font-semibold text-[#176b5b] active:bg-[#f0f9f6]"
//                     >
//                       <User className="h-4 w-4" />
//                       Customer Login
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <a
//                 href={ERP_LOGIN_URL}
//                 onClick={closeMobileMenu}
//                 className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] px-4 text-sm font-semibold text-white shadow-sm active:bg-[#7d4a14]"
//               >
//                 <Lock className="h-4 w-4" />
//                 Super Admin Login
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
//   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//   : "http://localhost:3001/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);
//   const [furnitureAccordion, setFurnitureAccordion] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   const mobileMenuRef = useRef<HTMLDivElement>(null);

//   // Close mobile menu on outside click
//   useEffect(() => {
//     if (!mobileMenuOpen) return;

//     function onPointerDown(e: MouseEvent | TouchEvent) {
//       const target = e.target as Node;
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(target)
//       ) {
//         // Don't close if clicking the menu toggle button (handled separately)
//         const toggle = document.getElementById("mobile-menu-toggle");
//         if (toggle && toggle.contains(target)) return;
//         setMobileMenuOpen(false);
//         setFurnitureAccordion(false);
//       }
//     }

//     document.addEventListener("mousedown", onPointerDown);
//     document.addEventListener("touchstart", onPointerDown);
//     return () => {
//       document.removeEventListener("mousedown", onPointerDown);
//       document.removeEventListener("touchstart", onPointerDown);
//     };
//   }, [mobileMenuOpen]);

//   // Close on Escape
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setMobileMenuOpen(false);
//         setFurnitureAccordion(false);
//         setFurnitureOpen(false);
//         setUserOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;

//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });

//         setFurnitureLinks([
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ]);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setCartCount(0);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         /* ignore */
//       }

//       setUser({ name, email });

//       try {
//         const cart = await getCart(firebaseUser.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     });

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const loadCount = async () => {
//       const u = auth.currentUser;
//       if (!u) {
//         setCartCount(0);
//         return;
//       }
//       try {
//         const cart = await getCart(u.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setCartCount(0);
//     setUserOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureAccordion(false);
//     setFurnitureOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white pt-[env(safe-area-inset-top,0px)]">
//       <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
//         <div className="flex h-14 items-center justify-between gap-2 sm:h-20 sm:gap-3">
//           {/* Brand */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
//               <span className="text-base font-bold text-white sm:text-lg">A</span>
//             </div>
//             <div className="min-w-0">
//               <div className="truncate text-base font-bold leading-none text-[#17352f] sm:text-xl">
//                 Akrish
//               </div>
//               <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#9a5b18] sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {(user.name || user.email || "U")
//                         .charAt(0)
//                         .toUpperCase()}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         My Account
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         My Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           {/* Mobile actions */}
//           <div className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 lg:hidden">
//             <Link
//               href="/wishlist"
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href={user ? "/account" : "/sign-in"}
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label={user ? "My account" : "Sign in"}
//             >
//               {user ? (
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#176b5b] text-[11px] font-bold text-white">
//                   {(user.name || user.email || "U").charAt(0).toUpperCase()}
//                 </span>
//               ) : (
//                 <User className="h-5 w-5" />
//               )}
//             </Link>

//             <Link
//               href="/cart"
//               className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <button
//               id="mobile-menu-toggle"
//               type="button"
//               onClick={() => {
//                 setMobileMenuOpen((v) => !v);
//                 if (mobileMenuOpen) setFurnitureAccordion(false);
//               }}
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-[#f7f7f4]"
//               aria-label="Toggle menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>

//             {/* Compact top-right dropdown */}
//             {mobileMenuOpen && (
//               <div
//                 ref={mobileMenuRef}
//                 className="absolute right-0 top-[calc(100%+8px)] z-[60] w-[min(18rem,calc(100vw-1.5rem))] origin-top-right animate-in fade-in zoom-in-95 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5"
//                 style={{
//                   animation: "akrishMenuIn 0.18s ease-out",
//                 }}
//               >
//                 <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain py-2">
//                   <nav className="px-2">
//                     <Link
//                       href="/"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
//                     >
//                       Home
//                     </Link>

//                     {/* Furniture accordion */}
//                     <div>
//                       <button
//                         type="button"
//                         onClick={() => setFurnitureAccordion((v) => !v)}
//                         className="flex min-h-[42px] w-full items-center justify-between rounded-lg px-3 text-left text-sm font-medium text-slate-800 active:bg-slate-50"
//                         aria-expanded={furnitureAccordion}
//                       >
//                         Furniture
//                         <ChevronDown
//                           className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
//                             furnitureAccordion ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       {furnitureAccordion && (
//                         <div className="mb-1 ml-2 space-y-0.5 border-l border-slate-100 pl-2">
//                           {furnitureLinks.map((link) => (
//                             <Link
//                               key={`${link.label}-${link.href}`}
//                               href={link.href}
//                               onClick={closeMobileMenu}
//                               className="flex min-h-[36px] items-center rounded-md px-2.5 text-[13px] text-slate-600 active:bg-[#e8f5ef] active:text-[#176b5b]"
//                             >
//                               {link.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     {[
//                       { href: "/products", label: "Products" },
//                       { href: "/services", label: "Services" },
//                       { href: "/about", label: "About" },
//                       { href: "/contact", label: "Contact" },
//                     ].map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         onClick={closeMobileMenu}
//                         className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </nav>

//                   <div className="my-2 border-t border-slate-100" />

//                   <div className="px-2">
//                     <p className="px-3 pb-1 pt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
//                       Account
//                     </p>
//                     {user ? (
//                       <>
//                         <Link
//                           href="/account"
//                           onClick={closeMobileMenu}
//                           className="flex min-h-[40px] items-center gap-2.5 rounded-lg px-3 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                         >
//                           <User className="h-4 w-4 text-[#176b5b]" />
//                           My Account
//                         </Link>
//                         <Link
//                           href="/account/orders"
//                           onClick={closeMobileMenu}
//                           className="flex min-h-[40px] items-center gap-2.5 rounded-lg px-3 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                         >
//                           <Package className="h-4 w-4 text-[#176b5b]" />
//                           My Orders
//                         </Link>
//                         <Link
//                           href="/wishlist"
//                           onClick={closeMobileMenu}
//                           className="flex min-h-[40px] items-center gap-2.5 rounded-lg px-3 text-sm text-slate-700 active:bg-[#e8f5ef]"
//                         >
//                           <Heart className="h-4 w-4 text-[#176b5b]" />
//                           Wishlist
//                         </Link>
//                         <button
//                           type="button"
//                           onClick={handleLogout}
//                           className="flex min-h-[40px] w-full items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-red-600 active:bg-red-50"
//                         >
//                           <LogOut className="h-4 w-4" />
//                           Logout
//                         </button>
//                       </>
//                     ) : (
//                       <Link
//                         href="/sign-in"
//                         onClick={closeMobileMenu}
//                         className="mx-1 flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-[#176b5b] text-sm font-semibold text-[#176b5b] active:bg-[#f0f9f6]"
//                       >
//                         <User className="h-4 w-4" />
//                         Customer Login
//                       </Link>
//                     )}
//                   </div>

//                   <div className="mt-2 border-t border-slate-100 px-3 pt-2 pb-1">
//                     <a
//                       href={ERP_LOGIN_URL}
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] text-sm font-semibold text-white active:bg-[#7d4a14]"
//                     >
//                       <Lock className="h-4 w-4" />
//                       Super Admin Login
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes akrishMenuIn {
//           from {
//             opacity: 0;
//             transform: translateY(-6px) scale(0.96);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//       `}</style>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   User,
//   ChevronDown,
//   LogOut,
//   Package,
//   Heart,
//   Lock,
// } from "lucide-react";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { getCart, getCartItemCount } from "@/services/cartService";

// interface UserInfo {
//   name?: string;
//   email?: string;
// }

// interface NavLink {
//   label: string;
//   href: string;
// }

// // const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_URL
// //   ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
// //   : "http://localhost:3001/login";

// const ERP_LOGIN_URL = "/erp/login";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [accountPanelOpen, setAccountPanelOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);
//   const [userOpen, setUserOpen] = useState(false);
//   const [furnitureAccordion, setFurnitureAccordion] = useState(false);

//   const [user, setUser] = useState<UserInfo | null>(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
//     { label: "All Furniture", href: "/products" },
//   ]);

//   const mobileMenuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mobileMenuOpen) return;

//     function onPointerDown(e: MouseEvent | TouchEvent) {
//       const target = e.target as Node;
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
//         const toggle = document.getElementById("mobile-menu-toggle");
//         if (toggle && toggle.contains(target)) return;
//         setMobileMenuOpen(false);
//         setFurnitureAccordion(false);
//       }
//     }

//     document.addEventListener("mousedown", onPointerDown);
//     document.addEventListener("touchstart", onPointerDown);
//     return () => {
//       document.removeEventListener("mousedown", onPointerDown);
//       document.removeEventListener("touchstart", onPointerDown);
//     };
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setMobileMenuOpen(false);
//         setAccountPanelOpen(false);
//         setFurnitureAccordion(false);
//         setFurnitureOpen(false);
//         setUserOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (!accountPanelOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [accountPanelOpen]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "furniture_products"));
//         const categorySet = new Set<string>();
//         snapshot.docs.forEach((docSnap) => {
//           const data = docSnap.data();
//           const status = String(data.status || "In Stock");
//           const active = data.active !== false && status !== "Inactive";
//           if (!active) return;
//           const category = data.category;
//           if (category && typeof category === "string" && category.trim()) {
//             categorySet.add(category.trim());
//           }
//         });
//         setFurnitureLinks([
//           { label: "All Furniture", href: "/products" },
//           ...Array.from(categorySet)
//             .sort()
//             .map((cat) => ({
//               label: cat,
//               href: `/products?category=${encodeURIComponent(cat)}`,
//             })),
//         ]);
//       } catch (err) {
//         console.error("Failed to load furniture categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (!firebaseUser) {
//         setUser(null);
//         setCartCount(0);
//         return;
//       }

//       let name = firebaseUser.displayName || "";
//       let email = firebaseUser.email || "";

//       try {
//         const snap = await getDoc(
//           doc(db, "furniture_customers", firebaseUser.uid)
//         );
//         if (snap.exists()) {
//           const data = snap.data();
//           if (data.name) name = String(data.name);
//           if (data.email) email = String(data.email);
//         }
//       } catch {
//         /* ignore */
//       }

//       setUser({ name, email });

//       try {
//         const cart = await getCart(firebaseUser.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     });

//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const loadCount = async () => {
//       const u = auth.currentUser;
//       if (!u) {
//         setCartCount(0);
//         return;
//       }
//       try {
//         const cart = await getCart(u.uid);
//         setCartCount(cart ? getCartItemCount(cart.items) : 0);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     window.addEventListener("cartUpdated", loadCount);
//     return () => window.removeEventListener("cartUpdated", loadCount);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setCartCount(0);
//     setUserOpen(false);
//     setAccountPanelOpen(false);
//     setMobileMenuOpen(false);
//     window.location.href = "/";
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setFurnitureAccordion(false);
//     setFurnitureOpen(false);
//   };

//   const userInitial = (user?.name || user?.email || "U").charAt(0).toUpperCase();

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white pt-[env(safe-area-inset-top,0px)]">
//       <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
//         <div className="flex h-14 items-center justify-between gap-2 sm:h-20 sm:gap-3">
//           {/* Brand */}
//           <Link
//             href="/"
//             onClick={closeMobileMenu}
//             className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
//           >
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
//               <span className="text-base font-bold text-white sm:text-lg">A</span>
//             </div>
//             <div className="min-w-0">
//               <div className="truncate text-base font-bold leading-none text-[#17352f] sm:text-xl">
//                 Akrish
//               </div>
//               <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#9a5b18] sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
//                 Furniture & Interior
//               </div>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Home
//             </Link>

//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setFurnitureOpen((v) => !v)}
//                 className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//               >
//                 Furniture
//                 <ChevronDown
//                   className={`h-4 w-4 transition ${
//                     furnitureOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {furnitureOpen && (
//                 <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                   {furnitureLinks.map((link) => (
//                     <Link
//                       key={`${link.label}-${link.href}`}
//                       href={link.href}
//                       onClick={() => setFurnitureOpen(false)}
//                       className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <Link
//               href="/wishlist"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             <Link
//               href="/cart"
//               className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <div className="relative ml-1">
//               {user ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setUserOpen((v) => !v)}
//                     className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
//                       {userInitial}
//                     </div>
//                     <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
//                       {user.name || "Account"}
//                     </span>
//                     <ChevronDown
//                       className={`h-4 w-4 text-gray-500 transition ${
//                         userOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {userOpen && (
//                     <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#e4e2da] px-3 py-3">
//                         <p className="truncate text-sm font-semibold text-[#17352f]">
//                           {user.name || "User"}
//                         </p>
//                         {user.email && (
//                           <p className="mt-1 truncate text-xs text-gray-500">
//                             {user.email}
//                           </p>
//                         )}
//                       </div>
//                       <Link
//                         href="/account/profile"
//                         onClick={() => setUserOpen(false)}
//                         className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <User className="h-4 w-4" />
//                         Profile
//                       </Link>
//                       <Link
//                         href="/account/orders"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Package className="h-4 w-4" />
//                         Orders
//                       </Link>
//                       <Link
//                         href="/wishlist"
//                         onClick={() => setUserOpen(false)}
//                         className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
//                       >
//                         <Heart className="h-4 w-4" />
//                         Wishlist
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={handleLogout}
//                         className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                       >
//                         <LogOut className="h-4 w-4" />
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href="/sign-in"
//                   className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
//                 >
//                   <User className="h-4 w-4" />
//                   Login
//                 </Link>
//               )}
//             </div>

//             <a
//               href={ERP_LOGIN_URL}
//               className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
//             >
//               <Lock className="h-4 w-4" />
//               Staff Login
//             </a>
//           </div>

//           {/* Mobile actions */}
//           <div className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 lg:hidden">
//             <Link
//               href="/wishlist"
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>

//             {/* Avatar R → opens account panel */}
//             {user ? (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setAccountPanelOpen(true);
//                   setMobileMenuOpen(false);
//                 }}
//                 className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f7f7f4]"
//                 aria-label="My account"
//               >
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#176b5b] text-[11px] font-bold text-white">
//                   {userInitial}
//                 </span>
//               </button>
//             ) : (
//               <Link
//                 href="/sign-in"
//                 className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//                 aria-label="Sign in"
//               >
//                 <User className="h-5 w-5" />
//               </Link>
//             )}

//             <Link
//               href="/cart"
//               className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </Link>

//             <button
//               id="mobile-menu-toggle"
//               type="button"
//               onClick={() => {
//                 setMobileMenuOpen((v) => !v);
//                 if (mobileMenuOpen) setFurnitureAccordion(false);
//                 setAccountPanelOpen(false);
//               }}
//               className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-[#f7f7f4]"
//               aria-label="Toggle menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>

//             {/* Site nav dropdown (hamburger) */}
//             {mobileMenuOpen && (
//               <div
//                 ref={mobileMenuRef}
//                 className="absolute right-0 top-[calc(100%+8px)] z-[60] w-[min(18rem,calc(100vw-1.5rem))] origin-top-right overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5"
//                 style={{ animation: "akrishMenuIn 0.18s ease-out" }}
//               >
//                 <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain py-2">
//                   <nav className="px-2">
//                     <Link
//                       href="/"
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
//                     >
//                       Home
//                     </Link>

//                     <div>
//                       <button
//                         type="button"
//                         onClick={() => setFurnitureAccordion((v) => !v)}
//                         className="flex min-h-[42px] w-full items-center justify-between rounded-lg px-3 text-left text-sm font-medium text-slate-800 active:bg-slate-50"
//                         aria-expanded={furnitureAccordion}
//                       >
//                         Furniture
//                         <ChevronDown
//                           className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
//                             furnitureAccordion ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       {furnitureAccordion && (
//                         <div className="mb-1 ml-2 space-y-0.5 border-l border-slate-100 pl-2">
//                           {furnitureLinks.map((link) => (
//                             <Link
//                               key={`${link.label}-${link.href}`}
//                               href={link.href}
//                               onClick={closeMobileMenu}
//                               className="flex min-h-[36px] items-center rounded-md px-2.5 text-[13px] text-slate-600 active:bg-[#e8f5ef] active:text-[#176b5b]"
//                             >
//                               {link.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     {[
//                       { href: "/products", label: "Products" },
//                       { href: "/services", label: "Services" },
//                       { href: "/about", label: "About" },
//                       { href: "/contact", label: "Contact" },
//                     ].map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         onClick={closeMobileMenu}
//                         className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </nav>

//                   <div className="my-2 border-t border-slate-100" />

//                   <div className="mt-2 border-t border-slate-100 px-3 pt-2 pb-1">
//                     <a
//                       href={ERP_LOGIN_URL}
//                       onClick={closeMobileMenu}
//                       className="flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] text-sm font-semibold text-white active:bg-[#7d4a14]"
//                     >
//                       <Lock className="h-4 w-4" />
//                       Super Admin Login
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Compact account panel — opens from R avatar */}
//       {accountPanelOpen && user && (
//         <div className="fixed inset-0 z-[70] lg:hidden">
//           <button
//             type="button"
//             className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
//             aria-label="Close account menu"
//             onClick={() => setAccountPanelOpen(false)}
//           />
//           <aside
//             className="absolute left-3 top-3 w-[min(18rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5"
//             style={{ animation: "akrishMenuIn 0.2s ease-out" }}
//           >
//             <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
//               <div className="flex min-w-0 items-center gap-2.5">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
//                   {userInitial}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-sm font-semibold text-slate-900">
//                     My Account
//                   </p>
//                   <p className="truncate text-xs text-slate-500">
//                     {user.name || user.email || "User"}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setAccountPanelOpen(false)}
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
//                 aria-label="Close"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <nav className="flex flex-col gap-0.5 p-2">
//               <Link
//                 href="/account/profile"
//                 onClick={() => setAccountPanelOpen(false)}
//                 className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
//               >
//                 <User size={17} className="shrink-0" />
//                 Profile
//               </Link>
//               <Link
//                 href="/account/orders"
//                 onClick={() => setAccountPanelOpen(false)}
//                 className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
//               >
//                 <Package size={17} className="shrink-0" />
//                 Orders
//               </Link>
//               <Link
//                 href="/wishlist"
//                 onClick={() => setAccountPanelOpen(false)}
//                 className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
//               >
//                 <Heart size={17} className="shrink-0" />
//                 Wishlist
//               </Link>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 <LogOut size={17} className="shrink-0" />
//                 Logout
//               </button>
//             </nav>

//             <div className="border-t border-slate-100 p-2.5">
//               <Link
//                 href="/products"
//                 onClick={() => setAccountPanelOpen(false)}
//                 className="block rounded-xl bg-[#f4fbf8] py-2 text-center text-sm font-semibold text-[#176b5b]"
//               >
//                 Back to store
//               </Link>
//             </div>
//           </aside>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes akrishMenuIn {
//           from {
//             opacity: 0;
//             transform: translateY(-6px) scale(0.96);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//       `}</style>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  ChevronDown,
  LogOut,
  Package,
  Heart,
  Lock,
} from "lucide-react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { getCart, getCartItemCount } from "@/services/cartService";

interface UserInfo {
  name?: string;
  email?: string;
}

interface NavLink {
  label: string;
  href: string;
}

// const ERP_LOGIN_URL =
//   process.env.NEXT_PUBLIC_ERP_URL
//     ? `${process.env.NEXT_PUBLIC_ERP_URL}/login`
//     : "http://localhost:3001/login";

const ERP_LOGIN_URL =
  process.env.NEXT_PUBLIC_ERP_URL
    ? `${process.env.NEXT_PUBLIC_ERP_URL.replace(/\/$/, "")}/login`
    : "http://localhost:3000/erp/login";

const STAFF_ROLES = new Set([
  "admin",
  "manager",
  "sales",
  "designer",
  "accountant",
  "hr",
  "employee",
]);

async function isStaffOnlyUser(
  uid: string,
  email: string | null
): Promise<boolean> {
  const normalizedEmail = (email || "").toLowerCase();
  if (normalizedEmail === "admin@akrish.in") return true;

  try {
    const staffSnap = await getDoc(doc(db, "users", uid));
    if (!staffSnap.exists()) return false;

    const role = String(staffSnap.data()?.role || "").toLowerCase();
    if (!STAFF_ROLES.has(role)) return false;

    // Staff with a real customer profile may still shop as customers
    const customerSnap = await getDoc(doc(db, "furniture_customers", uid));
    return !customerSnap.exists();
  } catch {
    return false;
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountPanelOpen, setAccountPanelOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [furnitureAccordion, setFurnitureAccordion] = useState(false);

  const [user, setUser] = useState<UserInfo | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [furnitureLinks, setFurnitureLinks] = useState<NavLink[]>([
    { label: "All Furniture", href: "/products" },
  ]);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function onPointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        const toggle = document.getElementById("mobile-menu-toggle");
        if (toggle && toggle.contains(target)) return;
        setMobileMenuOpen(false);
        setFurnitureAccordion(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setAccountPanelOpen(false);
        setFurnitureAccordion(false);
        setFurnitureOpen(false);
        setUserOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!accountPanelOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [accountPanelOpen]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "furniture_products"));
        const categorySet = new Set<string>();
        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          const status = String(data.status || "In Stock");
          const active = data.active !== false && status !== "Inactive";
          if (!active) return;
          const category = data.category;
          if (category && typeof category === "string" && category.trim()) {
            categorySet.add(category.trim());
          }
        });
        setFurnitureLinks([
          { label: "All Furniture", href: "/products" },
          ...Array.from(categorySet)
            .sort()
            .map((cat) => ({
              label: cat,
              href: `/products?category=${encodeURIComponent(cat)}`,
            })),
        ]);
      } catch (err) {
        console.error("Failed to load furniture categories:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setCartCount(0);
        return;
      }

      // ERP staff session must not appear as a storefront customer
      if (await isStaffOnlyUser(firebaseUser.uid, firebaseUser.email)) {
        try {
          await signOut(auth);
        } catch {
          /* ignore */
        }
        setUser(null);
        setCartCount(0);
        return;
      }

      let name = firebaseUser.displayName || "";
      let email = firebaseUser.email || "";

      try {
        const snap = await getDoc(
          doc(db, "furniture_customers", firebaseUser.uid)
        );
        if (snap.exists()) {
          const data = snap.data();
          if (data.name) name = String(data.name);
          if (data.email) email = String(data.email);
        }
      } catch {
        /* ignore */
      }

      setUser({ name, email });

      try {
        const cart = await getCart(firebaseUser.uid);
        setCartCount(cart ? getCartItemCount(cart.items) : 0);
      } catch {
        setCartCount(0);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const loadCount = async () => {
      const u = auth.currentUser;
      if (!u) {
        setCartCount(0);
        return;
      }
      try {
        if (await isStaffOnlyUser(u.uid, u.email)) {
          setCartCount(0);
          return;
        }
        const cart = await getCart(u.uid);
        setCartCount(cart ? getCartItemCount(cart.items) : 0);
      } catch {
        setCartCount(0);
      }
    };

    window.addEventListener("cartUpdated", loadCount);
    return () => window.removeEventListener("cartUpdated", loadCount);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setCartCount(0);
    setUserOpen(false);
    setAccountPanelOpen(false);
    setMobileMenuOpen(false);
    window.location.href = "/";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setFurnitureAccordion(false);
    setFurnitureOpen(false);
  };

  const userInitial = (user?.name || user?.email || "U")
    .charAt(0)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e2da] bg-white pt-[env(safe-area-inset-top,0px)]">
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-20 sm:gap-3">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#176b5b] sm:h-11 sm:w-11">
              <span className="text-base font-bold text-white sm:text-lg">
                A
              </span>
            </div>
            <div className="min-w-0">
              <div className="truncate text-base font-bold leading-none text-[#17352f] sm:text-xl">
                Akrish
              </div>
              <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#9a5b18] sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
                Furniture & Interior
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
            >
              Home
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setFurnitureOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
              >
                Furniture
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    furnitureOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {furnitureOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-4 max-h-80 w-56 -translate-x-1/2 overflow-y-auto rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
                  {furnitureLinks.map((link) => (
                    <Link
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      onClick={() => setFurnitureOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-[#176b5b]"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/wishlist"
              className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              href="/cart"
              className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-[#f7f7f4] hover:text-[#176b5b]"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <div className="relative ml-1">
              {user ? (
                <>
                  <button
                    type="button"
                    onClick={() => setUserOpen((v) => !v)}
                    className="flex items-center gap-2 rounded-xl border border-[#e4e2da] px-3 py-2 transition hover:bg-[#f7f7f4]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#176b5b] text-xs font-bold text-white">
                      {userInitial}
                    </div>
                    <span className="max-w-24 truncate text-sm font-medium text-[#17352f]">
                      {user.name || "Account"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition ${
                        userOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {userOpen && (
                    <div className="absolute right-0 top-full mt-3 w-60 rounded-xl border border-[#e4e2da] bg-white p-2 shadow-lg">
                      <div className="border-b border-[#e4e2da] px-3 py-3">
                        <p className="truncate text-sm font-semibold text-[#17352f]">
                          {user.name || "User"}
                        </p>
                        {user.email && (
                          <p className="mt-1 truncate text-xs text-gray-500">
                            {user.email}
                          </p>
                        )}
                      </div>
                      <Link
                        href="/account/profile"
                        onClick={() => setUserOpen(false)}
                        className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/account/orders"
                        onClick={() => setUserOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
                      >
                        <Package className="h-4 w-4" />
                        Orders
                      </Link>
                      <Link
                        href="/wishlist"
                        onClick={() => setUserOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#f7f7f4]"
                      >
                        <Heart className="h-4 w-4" />
                        Wishlist
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 rounded-xl border border-[#176b5b] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#f0f9f6]"
                >
                  <User className="h-4 w-4" />
                  Login
                </Link>
              )}
            </div>

            <a
              href={ERP_LOGIN_URL}
              className="ml-1 flex items-center gap-2 rounded-xl bg-[#9a5b18] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7d4a14]"
            >
              <Lock className="h-4 w-4" />
              Staff Login
            </a>
          </div>

          <div className="relative flex shrink-0 items-center gap-0.5 sm:gap-1 lg:hidden">
            <Link
              href="/wishlist"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            {user ? (
              <button
                type="button"
                onClick={() => {
                  setAccountPanelOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#f7f7f4]"
                aria-label="My account"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#176b5b] text-[11px] font-bold text-white">
                  {userInitial}
                </span>
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
                aria-label="Sign in"
              >
                <User className="h-5 w-5" />
              </Link>
            )}

            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-[#f7f7f4]"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9a5b18] px-1 text-[9px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => {
                setMobileMenuOpen((v) => !v);
                if (mobileMenuOpen) setFurnitureAccordion(false);
                setAccountPanelOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-[#f7f7f4]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {mobileMenuOpen && (
              <div
                ref={mobileMenuRef}
                className="absolute right-0 top-[calc(100%+8px)] z-[60] w-[min(18rem,calc(100vw-1.5rem))] origin-top-right overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5"
                style={{ animation: "akrishMenuIn 0.18s ease-out" }}
              >
                <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain py-2">
                  <nav className="px-2">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
                    >
                      Home
                    </Link>

                    <div>
                      <button
                        type="button"
                        onClick={() => setFurnitureAccordion((v) => !v)}
                        className="flex min-h-[42px] w-full items-center justify-between rounded-lg px-3 text-left text-sm font-medium text-slate-800 active:bg-slate-50"
                        aria-expanded={furnitureAccordion}
                      >
                        Furniture
                        <ChevronDown
                          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                            furnitureAccordion ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {furnitureAccordion && (
                        <div className="mb-1 ml-2 space-y-0.5 border-l border-slate-100 pl-2">
                          {furnitureLinks.map((link) => (
                            <Link
                              key={`${link.label}-${link.href}`}
                              href={link.href}
                              onClick={closeMobileMenu}
                              className="flex min-h-[36px] items-center rounded-md px-2.5 text-[13px] text-slate-600 active:bg-[#e8f5ef] active:text-[#176b5b]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {[
                      { href: "/products", label: "Products" },
                      { href: "/services", label: "Services" },
                      { href: "/about", label: "About" },
                      { href: "/contact", label: "Contact" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex min-h-[42px] items-center rounded-lg px-3 text-sm font-medium text-slate-800 active:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="my-2 border-t border-slate-100" />

                  <div className="px-3 pt-2 pb-1">
                    <a
                      href={ERP_LOGIN_URL}
                      onClick={closeMobileMenu}
                      className="flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-[#9a5b18] text-sm font-semibold text-white active:bg-[#7d4a14]"
                    >
                      <Lock className="h-4 w-4" />
                      Staff Login
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {accountPanelOpen && user && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            aria-label="Close account menu"
            onClick={() => setAccountPanelOpen(false)}
          />
          <aside
            className="absolute left-3 top-3 w-[min(18rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5"
            style={{ animation: "akrishMenuIn 0.2s ease-out" }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#176b5b] text-sm font-bold text-white">
                  {userInitial}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    My Account
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {user.name || user.email || "User"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAccountPanelOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-0.5 p-2">
              <Link
                href="/account/profile"
                onClick={() => setAccountPanelOpen(false)}
                className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
              >
                <User size={17} className="shrink-0" />
                Profile
              </Link>
              <Link
                href="/account/orders"
                onClick={() => setAccountPanelOpen(false)}
                className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
              >
                <Package size={17} className="shrink-0" />
                Orders
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setAccountPanelOpen(false)}
                className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-[#e8f5ef] hover:text-[#176b5b]"
              >
                <Heart size={17} className="shrink-0" />
                Wishlist
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex min-h-[40px] items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <LogOut size={17} className="shrink-0" />
                Logout
              </button>
            </nav>

            <div className="border-t border-slate-100 p-2.5">
              <Link
                href="/products"
                onClick={() => setAccountPanelOpen(false)}
                className="block rounded-xl bg-[#f4fbf8] py-2 text-center text-sm font-semibold text-[#176b5b]"
              >
                Back to store
              </Link>
            </div>
          </aside>
        </div>
      )}

      <style jsx>{`
        @keyframes akrishMenuIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </header>
  );
}
