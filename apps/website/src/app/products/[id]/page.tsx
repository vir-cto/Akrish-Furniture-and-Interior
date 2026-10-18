// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   Check,
//   Heart,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   rating: number;
//   reviews: number;
//   material: string;
//   dimensions: string;
//   stock: number;
// }

// const PRODUCTS: Record<string, Product> = {
//   "product-001": {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     description:
//       "A contemporary modular sofa designed for comfortable everyday living with a refined interior aesthetic.",
//     price: 54900,
//     rating: 4.8,
//     reviews: 24,
//     material: "Premium fabric",
//     dimensions: "220 × 90 × 85 cm",
//     stock: 8,
//   },
//   "product-002": {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     description:
//       "A clean and modern coffee table that brings a balanced look to contemporary living spaces.",
//     price: 30000,
//     rating: 4.7,
//     reviews: 18,
//     material: "Engineered wood",
//     dimensions: "120 × 60 × 42 cm",
//     stock: 12,
//   },
//   "product-003": {
//     id: "product-003",
//     name: "Solid Wood Dining Table",
//     category: "Dining Room",
//     description:
//       "A timeless dining table crafted for family meals, gatherings and elegant dining spaces.",
//     price: 72500,
//     rating: 4.9,
//     reviews: 31,
//     material: "Solid wood",
//     dimensions: "180 × 90 × 76 cm",
//     stock: 5,
//   },
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// interface ProductPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default function ProductDetailPage({
//   params,
// }: ProductPageProps) {
//   const [productId] = useState<string>(() => {
//     /*
//      * The App Router supplies params asynchronously in current
//      * Next.js versions. A fallback product keeps this page
//      * usable even when the requested demo product is unknown.
//      */
//     return "product-001";
//   });

//   const product = useMemo(
//     () => PRODUCTS[productId] ?? PRODUCTS["product-001"],
//     [productId]
//   );

//   const [quantity, setQuantity] = useState(1);
//   const [added, setAdded] = useState(false);
//   const [wishlist, setWishlist] = useState(false);

//   const total = product.price * quantity;

//   const addToCart = () => {
//     /*
//      * Connect this section to the shared cart store/API
//      * when backend cart functionality is available.
//      */
//     console.log("Added to cart:", {
//       productId: product.id,
//       quantity,
//     });

//     setAdded(true);

//     window.setTimeout(() => {
//       setAdded(false);
//     }, 2500);
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link
//             href="/products"
//             className="transition hover:text-slate-900"
//           >
//             Products
//           </Link>

//           <span>/</span>

//           <span>{product.category}</span>

//           <span>/</span>

//           <span className="font-medium text-slate-800">
//             {product.name}
//           </span>
//         </div>

//         {/* Product */}
//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             {/* Image area */}
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               <div className="flex h-full min-h-[340px] w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
//                 <div className="text-center">
//                   <ShoppingBag
//                     size={58}
//                     strokeWidth={1.2}
//                     className="mx-auto text-slate-300"
//                   />

//                   <p className="mt-4 text-sm font-medium text-slate-400">
//                     Product image
//                   </p>

//                   <p className="mt-1 text-xs text-slate-400">
//                     {product.name}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setWishlist(!wishlist)}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900"
//                 aria-label={
//                   wishlist
//                     ? "Remove from wishlist"
//                     : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={18}
//                   className={
//                     wishlist
//                       ? "fill-current text-red-500"
//                       : ""
//                   }
//                 />
//               </button>
//             </div>

//             {/* Details */}
//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 {product.category}
//               </p>

//               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               {/* Rating */}
//               <div className="mt-4 flex items-center gap-3">
//                 <div className="flex items-center gap-1">
//                   <Star
//                     size={16}
//                     className="fill-amber-400 text-amber-400"
//                   />

//                   <span className="text-sm font-bold text-slate-800">
//                     {product.rating}
//                   </span>
//                 </div>

//                 <span className="text-sm text-slate-400">
//                   ({product.reviews} reviews)
//                 </span>
//               </div>

//               <div className="mt-6">
//                 <p className="text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>

//                 <p className="mt-1 text-xs text-slate-400">
//                   Inclusive of applicable taxes
//                 </p>
//               </div>

//               <div className="mt-7 border-t border-slate-100 pt-6">
//                 <p className="text-sm leading-7 text-slate-600">
//                   {product.description}
//                 </p>
//               </div>

//               {/* Specifications */}
//               <div className="mt-7 grid grid-cols-2 gap-3">
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                     Material
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.material}
//                   </p>
//                 </div>

//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                     Dimensions
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               {/* Stock */}
//               <div className="mt-5 flex items-center gap-2 text-xs">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />

//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               {/* Quantity */}
//               <div className="mt-7">
//                 <p className="mb-2 text-xs font-semibold text-slate-700">
//                   Quantity
//                 </p>

//                 <div className="flex items-center rounded-lg border border-slate-200 w-fit">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQuantity((value) =>
//                         Math.max(1, value - 1)
//                       )
//                     }
//                     disabled={quantity <= 1}
//                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                     aria-label="Decrease quantity"
//                   >
//                     <Minus size={15} />
//                   </button>

//                   <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 text-sm font-bold text-slate-800">
//                     {quantity}
//                   </span>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQuantity((value) =>
//                         Math.min(
//                           product.stock,
//                           value + 1
//                         )
//                       )
//                     }
//                     disabled={quantity >= product.stock}
//                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                     aria-label="Increase quantity"
//                   >
//                     <Plus size={15} />
//                   </button>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   onClick={addToCart}
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   {added ? (
//                     <>
//                       <Check size={17} />
//                       Added to cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/checkout"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
//                 >
//                   Buy now
//                   <ArrowRightIcon />
//                 </Link>
//               </div>

//               {/* Delivery info */}
//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck
//                     size={19}
//                     className="mt-0.5 shrink-0 text-slate-600"
//                   />

//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>

//                     <p className="mt-1 text-xs leading-5 text-slate-500">
//                       Delivery availability and estimated
//                       delivery dates will be confirmed during
//                       checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
//                 <span className="text-sm text-slate-500">
//                   {quantity} item
//                   {quantity !== 1 ? "s" : ""} total
//                 </span>

//                 <span className="text-lg font-bold text-slate-900">
//                   {formatCurrency(total)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Bottom information */}
//         <section className="mt-6 grid gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <ShoppingBag
//               size={20}
//               className="text-slate-600"
//             />

//             <h2 className="mt-3 text-sm font-bold text-slate-900">
//               Quality furniture
//             </h2>

//             <p className="mt-1 text-xs leading-5 text-slate-500">
//               Thoughtfully selected furniture for modern
//               interior spaces.
//             </p>
//           </div>

//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <Truck size={20} className="text-slate-600" />

//             <h2 className="mt-3 text-sm font-bold text-slate-900">
//               Reliable delivery
//             </h2>

//             <p className="mt-1 text-xs leading-5 text-slate-500">
//               Delivery details are confirmed as part of the
//               checkout process.
//             </p>
//           </div>

//           <div className="rounded-xl border border-slate-200 bg-white p-5">
//             <Check size={20} className="text-slate-600" />

//             <h2 className="mt-3 text-sm font-bold text-slate-900">
//               Customer support
//             </h2>

//             <p className="mt-1 text-xs leading-5 text-slate-500">
//               Contact the VIP Interior team for product and
//               order assistance.
//             </p>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// function ArrowRightIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M5 12h14" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   Check,
//   Heart,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Star,
//   Truck,
// } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   rating: number;
//   reviews: number;
//   material: string;
//   dimensions: string;
//   stock: number;
// }

// const PRODUCTS: Record<string, Product> = {
//   "product-001": {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     description:
//       "A contemporary modular sofa designed for comfortable everyday living with a refined interior aesthetic.",
//     price: 54900,
//     rating: 4.8,
//     reviews: 24,
//     material: "Premium fabric",
//     dimensions: "220 × 90 × 85 cm",
//     stock: 8,
//   },
//   "product-002": {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     description:
//       "A clean and modern coffee table that brings a balanced look to contemporary living spaces.",
//     price: 30000,
//     rating: 4.7,
//     reviews: 18,
//     material: "Engineered wood",
//     dimensions: "120 × 60 × 42 cm",
//     stock: 12,
//   },
//   "product-003": {
//     id: "product-003",
//     name: "Solid Wood Dining Table",
//     category: "Dining Room",
//     description:
//       "A timeless dining table crafted for family meals, gatherings and elegant dining spaces.",
//     price: 72500,
//     rating: 4.9,
//     reviews: 31,
//     material: "Solid wood",
//     dimensions: "180 × 90 × 76 cm",
//     stock: 5,
//   },
//   "product-004": {
//     id: "product-004",
//     name: "Modern Dining Chair",
//     category: "Dining Room",
//     description: "A comfortable dining chair with a simple contemporary profile.",
//     price: 8900,
//     rating: 4.5,
//     reviews: 12,
//     material: "Wood & fabric",
//     dimensions: "45 × 50 × 90 cm",
//     stock: 24,
//   },
//   "product-005": {
//     id: "product-005",
//     name: "Luxury TV Unit",
//     category: "Living Room",
//     description: "A sophisticated TV unit with practical storage and a modern finish.",
//     price: 45900,
//     rating: 4.6,
//     reviews: 15,
//     material: "Engineered wood",
//     dimensions: "180 × 40 × 55 cm",
//     stock: 7,
//   },
//   "product-006": {
//     id: "product-006",
//     name: "King Size Bed",
//     category: "Bedroom",
//     description: "A spacious bed designed to create a refined and comfortable bedroom.",
//     price: 68500,
//     rating: 4.8,
//     reviews: 22,
//     material: "Solid wood",
//     dimensions: "210 × 180 × 110 cm",
//     stock: 6,
//   },
//   "product-007": {
//     id: "product-007",
//     name: "Bedside Table",
//     category: "Bedroom",
//     description: "A compact bedside table with convenient everyday storage.",
//     price: 12500,
//     rating: 4.4,
//     reviews: 9,
//     material: "Engineered wood",
//     dimensions: "50 × 40 × 55 cm",
//     stock: 18,
//   },
//   "product-008": {
//     id: "product-008",
//     name: "Executive Office Chair",
//     category: "Office",
//     description: "An ergonomic executive chair suitable for premium workspaces.",
//     price: 24900,
//     rating: 4.7,
//     reviews: 19,
//     material: "Leatherette",
//     dimensions: "70 × 70 × 120 cm",
//     stock: 10,
//   },
// };

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const productId = (params?.id as string) || "product-001";

//   const product = useMemo(
//     () => PRODUCTS[productId] ?? PRODUCTS["product-001"],
//     [productId]
//   );

//   const [quantity, setQuantity] = useState(1);
//   const [added, setAdded] = useState(false);
//   const [wishlist, setWishlist] = useState(false);

//   const total = product.price * quantity;

//   const addToCart = () => {
//     try {
//       const existingCart = localStorage.getItem("cart");
//       let cart = existingCart ? JSON.parse(existingCart) : [];

//       const existingIndex = cart.findIndex(
//         (item: any) => item.id === product.id
//       );

//       if (existingIndex >= 0) {
//         cart[existingIndex].quantity += quantity;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAdded(true);
//       setTimeout(() => setAdded(false), 2500);
//     } catch (err) {
//       console.error("Failed to add to cart", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span>{product.category}</span>
//           <span>/</span>
//           <span className="font-medium text-slate-800">{product.name}</span>
//         </div>

//         {/* Product */}
//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             {/* Image */}
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               <div className="flex h-full min-h-[340px] w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
//                 <div className="text-center">
//                   <ShoppingBag
//                     size={58}
//                     strokeWidth={1.2}
//                     className="mx-auto text-slate-300"
//                   />
//                   <p className="mt-4 text-sm font-medium text-slate-400">
//                     {product.name}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setWishlist(!wishlist)}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900"
//               >
//                 <Heart
//                   size={18}
//                   className={wishlist ? "fill-current text-red-500" : ""}
//                 />
//               </button>
//             </div>

//             {/* Details */}
//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 {product.category}
//               </p>

//               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               {/* Rating */}
//               <div className="mt-4 flex items-center gap-3">
//                 <div className="flex items-center gap-1">
//                   <Star size={16} className="fill-amber-400 text-amber-400" />
//                   <span className="text-sm font-bold text-slate-800">
//                     {product.rating}
//                   </span>
//                 </div>
//                 <span className="text-sm text-slate-400">
//                   ({product.reviews} reviews)
//                 </span>
//               </div>

//               <div className="mt-6">
//                 <p className="text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Inclusive of applicable taxes
//                 </p>
//               </div>

//               <div className="mt-7 border-t border-slate-100 pt-6">
//                 <p className="text-sm leading-7 text-slate-600">
//                   {product.description}
//                 </p>
//               </div>

//               {/* Specs */}
//               <div className="mt-7 grid grid-cols-2 gap-3">
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                     Material
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               {/* Stock */}
//               <div className="mt-5 flex items-center gap-2 text-xs">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               {/* Quantity */}
//               <div className="mt-7">
//                 <p className="mb-2 text-xs font-semibold text-slate-700">
//                   Quantity
//                 </p>
//                 <div className="flex w-fit items-center rounded-lg border border-slate-200">
//                   <button
//                     type="button"
//                     onClick={() => setQuantity((v) => Math.max(1, v - 1))}
//                     disabled={quantity <= 1}
//                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
//                   >
//                     <Minus size={15} />
//                   </button>
//                   <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 text-sm font-bold text-slate-800">
//                     {quantity}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQuantity((v) => Math.min(product.stock, v + 1))
//                     }
//                     disabled={quantity >= product.stock}
//                     className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
//                   >
//                     <Plus size={15} />
//                   </button>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   onClick={addToCart}
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
//                 >
//                   {added ? (
//                     <>
//                       <Check size={17} />
//                       Added to cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {/* Delivery */}
//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck size={19} className="mt-0.5 shrink-0 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-slate-500">
//                       Delivery availability and estimated delivery dates will be
//                       confirmed during checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
//                 <span className="text-sm text-slate-500">
//                   {quantity} item{quantity !== 1 ? "s" : ""} total
//                 </span>
//                 <span className="text-lg font-bold text-slate-900">
//                   {formatCurrency(total)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Star,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
// } from "@/services/cartService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// function isInLocalCart(productId: string): boolean {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return false;
//     const cart = JSON.parse(raw);
//     if (!Array.isArray(cart)) return false;
//     return cart.some(
//       (item: { id?: string; productId?: string }) =>
//         String(item.productId || item.id) === productId
//     );
//   } catch {
//     return false;
//   }
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [inCart, setInCart] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishlist, setWishlist] = useState(false);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;
//     const sync = () => setInCart(isInLocalCart(productId));
//     sync();
//     window.addEventListener("cartUpdated", sync);
//     return () => window.removeEventListener("cartUpdated", sync);
//   }, [productId]);

//   const toggleCart = async () => {
//     if (!product) return;
//     setBusy(true);

//     try {
//       const email = getLoggedInEmail();
//       const raw = localStorage.getItem("cart");
//       let cart = raw ? JSON.parse(raw) : [];
//       if (!Array.isArray(cart)) cart = [];

//       if (inCart) {
//         cart = cart.filter(
//           (item: { id?: string; productId?: string }) =>
//             String(item.productId || item.id) !== product.id
//         );
//         localStorage.setItem("cart", JSON.stringify(cart));
//         window.dispatchEvent(new Event("cartUpdated"));
//         setInCart(false);

//         if (email) {
//           try {
//             await removeFromFirebaseCart(email, product.id);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//       } else {
//         cart.push({
//           id: product.id,
//           productId: product.id,
//           name: product.name,
//           category: product.category,
//           price: product.price,
//           quantity: 1,
//           image: product.image || "",
//         });
//         localStorage.setItem("cart", JSON.stringify(cart));
//         window.dispatchEvent(new Event("cartUpdated"));
//         setInCart(true);

//         if (email) {
//           try {
//             await addToFirebaseCart(email, {
//               productId: product.id,
//               name: product.name,
//               price: product.price,
//               quantity: 1,
//               image: product.image || "",
//               category: product.category,
//             });
//           } catch (err) {
//             console.error(err);
//           }
//         }
//       }
//     } finally {
//       setBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link href="/products" className="mt-4 inline-block font-semibold text-[#176b5b]">
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span>{product.category}</span>
//           <span>/</span>
//           <span className="font-medium text-slate-800">{product.name}</span>
//         </div>

//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               {product.image ? (
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
//                 />
//               ) : (
//                 <div className="text-center">
//                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
//                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 onClick={() => setWishlist(!wishlist)}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//               >
//                 <Heart
//                   size={18}
//                   className={wishlist ? "fill-current text-red-500" : "text-slate-600"}
//                 />
//               </button>
//             </div>

//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 {product.category}
//               </p>
//               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-6">
//                 <p className="text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-600">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-7 grid grid-cols-2 gap-3">
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">Material</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">Dimensions</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex items-center gap-2 text-xs">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-6 text-xs text-slate-500">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck size={19} className="mt-0.5 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [inCart, setInCart] = useState(false);
//   const [wishlisted, setWishlisted] = useState(false);
//   const [busy, setBusy] = useState(false);

//   // Load product
//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   // Sync cart from Firebase
//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function syncCart() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setInCart(false);
//         return;
//       }
//       try {
//         const cart = await getCart(email);
//         const has = Boolean(
//           cart?.items?.some((i) => i.productId === productId)
//         );
//         if (!cancelled) setInCart(has);
//       } catch {
//         if (!cancelled) setInCart(false);
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [productId]);

//   // Sync wishlist from Firebase (shared with /products list)
//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function syncWishlist() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setWishlisted(false);
//         return;
//       }
//       try {
//         const list = await getWishlist(email);
//         const has = Boolean(
//           list?.items?.some((i) => i.productId === productId)
//         );
//         if (!cancelled) setWishlisted(has);
//       } catch {
//         if (!cancelled) setWishlisted(false);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [productId]);

//   const toggleWishlist = async () => {
//     if (!product) return;

//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push(`/sign-in?redirect=/products/${product.id}`);
//       return;
//     }

//     setBusy(true);
//     try {
//       if (wishlisted) {
//         await removeFromWishlist(email, product.id);
//         setWishlisted(false);
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setWishlisted(true);
//       }
//       // Products list page listens to this event
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleCart = async () => {
//     if (!product) return;

//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push(`/sign-in?redirect=/products/${product.id}`);
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f9f8] px-4">
//         <p className="text-lg font-semibold text-slate-800">Product not found</p>
//         <Link
//           href="/products"
//           className="inline-flex items-center gap-2 text-sm font-semibold text-[#176b5b]"
//         >
//           <ArrowLeft size={14} />
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span>{product.category}</span>
//           <span>/</span>
//           <span className="font-medium text-slate-800">{product.name}</span>
//         </div>

//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
//                 />
//               ) : (
//                 <div className="text-center">
//                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
//                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={busy}
//                 onClick={toggleWishlist}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
//                 aria-label={
//                   wishlisted ? "Remove from wishlist" : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={18}
//                   className={
//                     wishlisted
//                       ? "fill-current text-red-500"
//                       : "text-slate-600"
//                   }
//                 />
//               </button>
//             </div>

//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
//                 {product.category}
//               </p>
//               <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
//                 {product.name}
//               </h1>
//               <p className="mt-4 text-3xl font-bold text-slate-900">
//                 {formatCurrency(product.price)}
//               </p>

//               <p className="mt-5 text-sm leading-6 text-slate-600">
//                 {product.description || "No description available."}
//               </p>

//               <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <dt className="text-xs text-slate-400">Material</dt>
//                   <dd className="mt-1 font-medium text-slate-800">
//                     {product.material}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-xs text-slate-400">Dimensions</dt>
//                   <dd className="mt-1 font-medium text-slate-800">
//                     {product.dimensions}
//                   </dd>
//                 </div>
//               </dl>

//               <div className="mt-5 flex items-center gap-2 text-sm">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-6 text-xs text-slate-500">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck size={19} className="mt-0.5 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// function getLoggedInEmail(): string | null {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;
//     const user = JSON.parse(raw);
//     return user?.email ? String(user.email).toLowerCase() : null;
//   } catch {
//     return null;
//   }
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   // Cart + wishlist from Firebase
//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(email),
//           getWishlist(email),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId]);

//   const toggleCart = async () => {
//     if (!product) return;
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(email, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span>{product.category}</span>
//           <span>/</span>
//           <span className="font-medium text-slate-800">{product.name}</span>
//         </div>

//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               {product.image ? (
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
//                 />
//               ) : (
//                 <div className="text-center">
//                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
//                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50"
//               >
//                 <Heart
//                   size={18}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500"
//                       : "text-slate-600"
//                   }
//                 />
//               </button>
//             </div>

//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 {product.category}
//               </p>
//               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-6">
//                 <p className="text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-600">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-7 grid grid-cols-2 gap-3">
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">Material</p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex items-center gap-2 text-xs">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-6 text-xs text-slate-500">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck size={19} className="mt-0.5 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   // Auth UID only (no localStorage)
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   // Cart + wishlist from Firebase by Auth UID
//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span>{product.category}</span>
//           <span>/</span>
//           <span className="font-medium text-slate-800">{product.name}</span>
//         </div>

//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
//           <div className="grid lg:grid-cols-2">
//             <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 p-8 sm:min-h-[520px]">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full max-h-[480px] w-full rounded-xl object-cover"
//                 />
//               ) : (
//                 <div className="text-center">
//                   <ShoppingBag size={58} className="mx-auto text-slate-300" />
//                   <p className="mt-4 text-sm text-slate-400">{product.name}</p>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50"
//               >
//                 <Heart
//                   size={18}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500"
//                       : "text-slate-600"
//                   }
//                 />
//               </button>
//             </div>

//             <div className="p-6 sm:p-8 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                 {product.category}
//               </p>
//               <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-6">
//                 <p className="text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-600">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-7 grid grid-cols-2 gap-3">
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">
//                     Material
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-4">
//                   <p className="text-[11px] uppercase text-slate-400">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-sm font-semibold text-slate-800">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-5 flex items-center gap-2 text-xs">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-6 text-xs text-slate-500">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-4 flex flex-col gap-3 sm:flex-row">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-white transition disabled:opacity-60 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">
//                 <div className="flex gap-3">
//                   <Truck size={19} className="mt-0.5 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span className="truncate">{product.category}</span>
//           <span className="hidden sm:inline">/</span>
//           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
//             {product.name}
//           </span>
//         </div>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           {/* Mobile: image left + summary right · Desktop: 2 columns */}
//           <div className="grid grid-cols-[110px_1fr] gap-0 sm:grid-cols-[180px_1fr] lg:grid-cols-2">
//             {/* Image — left on all breakpoints */}
//             <div className="relative flex aspect-square items-center justify-center bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                 />
//               ) : (
//                 <div className="p-2 text-center">
//                   <ShoppingBag
//                     size={32}
//                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                   />
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-10 sm:w-10 lg:right-6 lg:top-6"
//                 aria-label={
//                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={14}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500 sm:h-[18px] sm:w-[18px]"
//                       : "text-slate-600 sm:h-[18px] sm:w-[18px]"
//                   }
//                 />
//               </button>
//             </div>

//             {/* Top summary (mobile/tablet) — sits right of image */}
//             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>
//               <p className="mt-2 text-base font-bold text-slate-900 sm:text-xl">
//                 {formatCurrency(product.price)}
//               </p>
//               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Full details column */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               {/* Desktop title block (hidden on mobile — already shown beside image) */}
//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>
//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 <p className="mt-6 text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="mt-0 text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60 sm:px-5 sm:py-3.5 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:px-5 sm:py-3.5"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
//           <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span className="truncate">{product.category}</span>
//           <span className="hidden sm:inline">/</span>
//           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
//             {product.name}
//           </span>
//         </div>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           {/* Mobile: small image left · Desktop: half-width gallery */}
//           <div className="grid grid-cols-[88px_1fr] gap-0 sm:grid-cols-[140px_1fr] lg:grid-cols-2">
//             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                 />
//               ) : (
//                 <div className="p-1.5 text-center">
//                   <ShoppingBag
//                     size={24}
//                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                   />
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-2.5 sm:top-2.5 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
//                 aria-label={
//                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={12}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
//                       : "text-slate-600 sm:h-4 sm:w-4"
//                   }
//                 />
//               </button>
//             </div>

//             {/* Compact summary beside image (mobile / tablet only) */}
//             <div className="flex flex-col justify-center p-2.5 sm:p-4 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>
//               <p className="mt-1.5 text-base font-bold text-slate-900 sm:mt-2 sm:text-xl">
//                 {formatCurrency(product.price)}
//               </p>
//               <div className="mt-1.5 flex items-center gap-1.5 text-[10px] sm:mt-2 sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
//               <Link
//                 href="/products"
//                 className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
//               >
//                 <ArrowLeft size={14} />
//                 Back to products
//               </Link>

//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>
//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 <p className="mt-6 text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//               </p>

//               <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition disabled:opacity-60 sm:px-5 sm:py-3.5 ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={17} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={17} />
//                       Remove from cart
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={17} />
//                       Add to cart
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:px-5 sm:py-3.5"
//                 >
//                   Go to Cart
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Heart,
//   Loader2,
//   ShoppingBag,
//   Trash2,
//   Truck,
// } from "lucide-react";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   material: string;
//   dimensions: string;
//   stock: number;
//   image?: string;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = (params?.id as string) || "";

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [authUid, setAuthUid] = useState<string | null>(null);
//   const [inCart, setInCart] = useState(false);
//   const [inWishlist, setInWishlist] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [wishBusy, setWishBusy] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     if (!productId) return;

//     async function load() {
//       setLoading(true);
//       try {
//         const snap = await getDoc(doc(db, "furniture_products", productId));
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct({
//             id: snap.id,
//             name: data.name || "Product",
//             category: data.category || "Other",
//             description: data.description || "",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             material: data.material || "—",
//             dimensions: data.dimensions || "—",
//             stock: Number(data.stock ?? 0),
//             image: data.imageUrl || data.image || "",
//           });
//         } else {
//           setProduct(null);
//         }
//       } catch (err) {
//         console.error(err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [productId]);

//   useEffect(() => {
//     if (!productId) return;
//     let cancelled = false;

//     async function sync() {
//       if (!authUid) {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//         return;
//       }
//       try {
//         const [cart, wish] = await Promise.all([
//           getCart(authUid),
//           getWishlist(authUid),
//         ]);
//         if (cancelled) return;
//         setInCart(
//           Boolean(cart?.items?.some((i) => i.productId === productId))
//         );
//         setInWishlist(
//           Boolean(wish?.items?.some((i) => i.productId === productId))
//         );
//       } catch {
//         if (!cancelled) {
//           setInCart(false);
//           setInWishlist(false);
//         }
//       }
//     }

//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("wishlistUpdated", sync);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("wishlistUpdated", sync);
//     };
//   }, [productId, authUid]);

//   const toggleCart = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setBusy(true);
//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setInCart(false);
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || "",
//             category: product.category,
//           });
//         }
//         setInCart(true);
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const toggleWishlist = async () => {
//     if (!product) return;
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     setWishBusy(true);
//     try {
//       if (inWishlist) {
//         await removeFromWishlist(authUid, product.id);
//         setInWishlist(false);
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || "",
//           category: product.category,
//         });
//         setInWishlist(true);
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setWishBusy(false);
//     }
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
//         <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
//       </main>
//     );
//   }

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
//         <p className="text-slate-600">Product not found.</p>
//         <Link
//           href="/products"
//           className="mt-4 inline-block font-semibold text-[#176b5b]"
//         >
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
//         <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
//           {/* <Link href="/products" className="transition hover:text-slate-900">
//             Products
//           </Link>
//           <span>/</span>
//           <span className="truncate">{product.category}</span> */}
//           {/* <Link
//             href="/products"
//             className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 lg:mb-6"
//           >
//             <ArrowLeft size={14} />
//             Back to products
//           </Link> */}

// <Link
//   href="/products"
//   className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
// >
//   <ArrowLeft size={14} className="shrink-0" />
//   Back to products
// </Link>
//           <span className="hidden sm:inline">/</span>
//           <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
//             {product.name}
//           </span>
//         </div>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
//           {/* Larger image on mobile: ~42% width */}
//           <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
//             <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
//               {product.image ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
//                 />
//               ) : (
//                 <div className="p-2 text-center">
//                   <ShoppingBag
//                     size={36}
//                     className="mx-auto text-slate-300 lg:h-14 lg:w-14"
//                   />
//                 </div>
//               )}

//               <button
//                 type="button"
//                 disabled={wishBusy}
//                 onClick={toggleWishlist}
//                 className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
//                 aria-label={
//                   inWishlist ? "Remove from wishlist" : "Add to wishlist"
//                 }
//               >
//                 <Heart
//                   size={14}
//                   className={
//                     inWishlist
//                       ? "fill-current text-red-500 sm:h-4 sm:w-4"
//                       : "text-slate-600 sm:h-4 sm:w-4"
//                   }
//                 />
//               </button>
//             </div>

//             {/* Summary beside image (mobile / tablet) */}
//             <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
//               <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
//                 {product.category}
//               </p>
//               <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
//                 {product.name}
//               </h1>
//               <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
//                 {formatCurrency(product.price)}
//               </p>
//               <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} in stock
//                 </span>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">


//               <div className="hidden lg:block">
//                 <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
//                   {product.category}
//                 </p>
//                 <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 <p className="mt-6 text-3xl font-bold text-slate-900">
//                   {formatCurrency(product.price)}
//                 </p>
//               </div>

//               <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Material
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.material}
//                   </p>
//                 </div>
//                 <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
//                   <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
//                     Dimensions
//                   </p>
//                   <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
//                     {product.dimensions}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 <span className="font-medium text-emerald-700">
//                   {product.stock} units available
//                 </span>
//               </div>

//               <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
//                 Change quantity on the cart page after adding.
//               </p>

//               {/* Always one row: 2 buttons side by side */}
//               <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
//                 <button
//                   type="button"
//                   disabled={busy}
//                   onClick={toggleCart}
//                   className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
//                     inCart
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-slate-900 hover:bg-slate-800"
//                   }`}
//                 >
//                   {busy ? (
//                     <Loader2 size={16} className="animate-spin" />
//                   ) : inCart ? (
//                     <>
//                       <Trash2 size={15} className="shrink-0" />
//                       <span className="truncate">Remove</span>
//                     </>
//                   ) : (
//                     <>
//                       <ShoppingBag size={15} className="shrink-0" />
//                       <span className="truncate">Add to cart</span>
//                     </>
//                   )}
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
//                 >
//                   <span className="truncate">Go to Cart</span>
//                 </Link>
//               </div>

//               {!authUid && (
//                 <p className="mt-3 text-xs text-slate-500">
//                   <Link
//                     href="/sign-in"
//                     className="font-semibold text-[#176b5b] hover:underline"
//                   >
//                     Sign in
//                   </Link>{" "}
//                   to add this product to your cart.
//                 </p>
//               )}

//               <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
//                 <div className="flex gap-3">
//                   <Truck size={18} className="mt-0.5 shrink-0 text-slate-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">
//                       Delivery information
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Delivery details are confirmed at checkout.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Loader2,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  addToCart as addToFirebaseCart,
  removeFromCart as removeFromFirebaseCart,
  getCart,
} from "@/services/cartService";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "@/services/wishlistService";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  material: string;
  dimensions: string;
  stock: number;
  image?: string;
  leadTime?: string;
  leadTimeDays: number;
}

/** Parse "7", "7 days", "5-7 days" → number of days (uses highest number). */
function parseLeadTimeDays(value: unknown, fallback = 7): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.min(365, Math.floor(value));
  }
  const s = String(value ?? "").trim();
  if (!s || s === "—") return fallback;
  const nums = s.match(/\d+/g);
  if (!nums?.length) return fallback;
  const max = Math.max(...nums.map((n) => parseInt(n, 10)).filter((n) => n > 0));
  return Number.isFinite(max) ? Math.min(365, max) : fallback;
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDeliveryDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = (params?.id as string) || "";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [busy, setBusy] = useState(false);
  const [wishBusy, setWishBusy] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!productId) return;

    async function load() {
      setLoading(true);
      try {
        const snap = await getDoc(doc(db, "furniture_products", productId));
        if (snap.exists()) {
          const data = snap.data();
          const leadRaw = data.leadTime ?? data.leadTimeDays ?? "";
          const leadTimeDays = parseLeadTimeDays(leadRaw, 7);
          setProduct({
            id: snap.id,
            name: data.name || "Product",
            category: data.category || "Other",
            description: data.description || "",
            price: Number(data.sellingPrice ?? data.price ?? 0),
            material: data.material || "—",
            dimensions: data.dimensions || "—",
            stock: Number(data.stock ?? 0),
            image: data.imageUrl || data.image || "",
            leadTime: String(leadRaw || "").trim() || undefined,
            leadTimeDays,
          });
        } else {
          setProduct(null);
        }
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [productId]);

  const expectedDelivery = useMemo(() => {
    if (!product) return null;
    return addDays(new Date(), product.leadTimeDays);
  }, [product]);

  useEffect(() => {
    if (!productId) return;
    let cancelled = false;

    async function sync() {
      if (!authUid) {
        if (!cancelled) {
          setInCart(false);
          setInWishlist(false);
        }
        return;
      }
      try {
        const [cart, wish] = await Promise.all([
          getCart(authUid),
          getWishlist(authUid),
        ]);
        if (cancelled) return;
        setInCart(
          Boolean(cart?.items?.some((i) => i.productId === productId))
        );
        setInWishlist(
          Boolean(wish?.items?.some((i) => i.productId === productId))
        );
      } catch {
        if (!cancelled) {
          setInCart(false);
          setInWishlist(false);
        }
      }
    }

    sync();
    window.addEventListener("cartUpdated", sync);
    window.addEventListener("wishlistUpdated", sync);
    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", sync);
      window.removeEventListener("wishlistUpdated", sync);
    };
  }, [productId, authUid]);

  const toggleCart = async () => {
    if (!product) return;
    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    setBusy(true);
    try {
      if (inCart) {
        await removeFromFirebaseCart(authUid, product.id);
        setInCart(false);
      } else {
        const cart = await getCart(authUid);
        const already = cart?.items?.some((i) => i.productId === product.id);
        if (!already) {
          await addToFirebaseCart(authUid, {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image || "",
            category: product.category,
            leadTimeDays: product.leadTimeDays,
          });
        }
        setInCart(true);
      }
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Cart toggle failed", err);
    } finally {
      setBusy(false);
    }
  };

  const toggleWishlist = async () => {
    if (!product) return;
    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    setWishBusy(true);
    try {
      if (inWishlist) {
        await removeFromWishlist(authUid, product.id);
        setInWishlist(false);
      } else {
        await addToWishlist(authUid, {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image || "",
          category: product.category,
        });
        setInWishlist(true);
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist toggle failed", err);
    } finally {
      setWishBusy(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
        <Loader2 className="h-8 w-8 animate-spin text-[#176b5b]" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f7f9f8] px-4 py-16 text-center">
        <p className="text-slate-600">Product not found.</p>
        <Link
          href="/products"
          className="mt-4 inline-block font-semibold text-[#176b5b]"
        >
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <div className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 sm:mb-6 sm:gap-2 sm:text-sm">
          <Link
            href="/products"
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 lg:mb-6"
          >
            <ArrowLeft size={14} className="shrink-0" />
            Back to products
          </Link>
          <span className="hidden sm:inline">/</span>
          <span className="hidden max-w-[12rem] truncate font-medium text-slate-800 sm:inline">
            {product.name}
          </span>
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
          <div className="grid grid-cols-[minmax(140px,42%)_1fr] gap-0 sm:grid-cols-[minmax(200px,40%)_1fr] lg:grid-cols-2">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[480px] lg:p-8">
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover lg:max-h-[480px] lg:rounded-xl"
                />
              ) : (
                <div className="p-2 text-center">
                  <ShoppingBag
                    size={36}
                    className="mx-auto text-slate-300 lg:h-14 lg:w-14"
                  />
                </div>
              )}

              <button
                type="button"
                disabled={wishBusy}
                onClick={toggleWishlist}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-50 sm:right-3 sm:top-3 sm:h-9 sm:w-9 lg:right-6 lg:top-6 lg:h-10 lg:w-10"
                aria-label={
                  inWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={14}
                  className={
                    inWishlist
                      ? "fill-current text-red-500 sm:h-4 sm:w-4"
                      : "text-slate-600 sm:h-4 sm:w-4"
                  }
                />
              </button>
            </div>

            <div className="flex flex-col justify-center p-3 sm:p-5 lg:hidden">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                {product.category}
              </p>
              <h1 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-lg">
                {product.name}
              </h1>
              <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                {formatCurrency(product.price)}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-emerald-700">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            <div className="col-span-2 border-t border-slate-100 p-4 sm:p-6 lg:col-span-1 lg:border-t-0 lg:p-10">
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {product.category}
                </p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-3xl font-bold text-slate-900">
                  {formatCurrency(product.price)}
                </p>
              </div>

              <p className="text-sm leading-6 text-slate-600 lg:mt-6 lg:leading-7">
                {product.description || "No description available."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
                <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
                  <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
                    Material
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                    {product.material}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
                  <p className="text-[10px] uppercase text-slate-400 sm:text-[11px]">
                    Dimensions
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
                    {product.dimensions}
                  </p>
                </div>
              </div>

              <div className="mt-4 hidden items-center gap-2 text-xs lg:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-emerald-700">
                  {product.stock} units available
                </span>
              </div>

              <p className="mt-4 text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
                Change quantity on the cart page after adding.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                <button
                  type="button"
                  disabled={busy}
                  onClick={toggleCart}
                  className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-xs font-semibold text-white transition disabled:opacity-60 sm:gap-2 sm:px-4 sm:text-sm ${
                    inCart
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {busy ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : inCart ? (
                    <>
                      <Trash2 size={15} className="shrink-0" />
                      <span className="truncate">Remove</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={15} className="shrink-0" />
                      <span className="truncate">Add to cart</span>
                    </>
                  )}
                </button>

                <Link
                  href="/cart"
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2 py-3 text-xs font-semibold text-slate-800 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:text-sm"
                >
                  <span className="truncate">Go to Cart</span>
                </Link>
              </div>

              {!authUid && (
                <p className="mt-3 text-xs text-slate-500">
                  <Link
                    href="/sign-in"
                    className="font-semibold text-[#176b5b] hover:underline"
                  >
                    Sign in
                  </Link>{" "}
                  to add this product to your cart.
                </p>
              )}

              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:mt-7 sm:p-4">
                <div className="flex gap-3">
                  <Truck size={18} className="mt-0.5 shrink-0 text-[#176b5b]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Estimated delivery
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {expectedDelivery
                        ? (
                          <>
                            By{" "}
                            <span className="font-semibold text-slate-800">
                              {formatDeliveryDate(expectedDelivery)}
                            </span>
                            {" · "}
                            {product.leadTimeDays} day
                            {product.leadTimeDays === 1 ? "" : "s"} lead time
                            {product.leadTime
                              ? ` (${product.leadTime})`
                              : ""}
                          </>
                        )
                        : "Delivery date confirmed at checkout."}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Exact date may vary by location and order volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
