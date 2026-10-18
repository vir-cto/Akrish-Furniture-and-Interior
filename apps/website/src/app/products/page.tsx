// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
// } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
// }

// const PRODUCTS: Product[] = [
//   {
//     id: "product-001",
//     name: "Premium Modular Sofa",
//     category: "Living Room",
//     price: 54900,
//     description:
//       "A contemporary modular sofa designed for comfortable everyday living.",
//     material: "Premium fabric",
//     badge: "Featured",
//     stock: 8,
//   },
//   {
//     id: "product-002",
//     name: "Designer Coffee Table",
//     category: "Living Room",
//     price: 30000,
//     description:
//       "A clean and modern coffee table for contemporary living spaces.",
//     material: "Engineered wood",
//     stock: 12,
//   },
//   {
//     id: "product-003",
//     name: "Solid Wood Dining Table",
//     category: "Dining Room",
//     price: 72500,
//     description:
//       "A timeless dining table designed for family meals and gatherings.",
//     material: "Solid wood",
//     badge: "Popular",
//     stock: 5,
//   },
//   {
//     id: "product-004",
//     name: "Modern Dining Chair",
//     category: "Dining Room",
//     price: 8900,
//     description:
//       "A comfortable dining chair with a simple contemporary profile.",
//     material: "Wood & fabric",
//     stock: 24,
//   },
//   {
//     id: "product-005",
//     name: "Luxury TV Unit",
//     category: "Living Room",
//     price: 45900,
//     description:
//       "A sophisticated TV unit with practical storage and a modern finish.",
//     material: "Engineered wood",
//     badge: "New",
//     stock: 7,
//   },
//   {
//     id: "product-006",
//     name: "King Size Bed",
//     category: "Bedroom",
//     price: 68500,
//     description:
//       "A spacious bed designed to create a refined and comfortable bedroom.",
//     material: "Solid wood",
//     stock: 6,
//   },
//   {
//     id: "product-007",
//     name: "Bedside Table",
//     category: "Bedroom",
//     price: 12500,
//     description:
//       "A compact bedside table with convenient everyday storage.",
//     material: "Engineered wood",
//     stock: 18,
//   },
//   {
//     id: "product-008",
//     name: "Executive Office Chair",
//     category: "Office",
//     price: 24900,
//     description:
//       "An ergonomic executive chair suitable for premium workspaces.",
//     material: "Leatherette",
//     badge: "Best Seller",
//     stock: 10,
//   },
// ];

// const CATEGORIES = [
//   "All",
//   "Living Room",
//   "Dining Room",
//   "Bedroom",
//   "Office",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   const filteredProducts = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     const filtered = PRODUCTS.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !query ||
//         product.name.toLowerCase().includes(query) ||
//         product.category.toLowerCase().includes(query) ||
//         product.material.toLowerCase().includes(query);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") {
//         return a.price - b.price;
//       }

//       if (sort === "price-high") {
//         return b.price - a.price;
//       }

//       if (sort === "name") {
//         return a.name.localeCompare(b.name);
//       }

//       return 0;
//     });
//   }, [search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     /*
//      * Connect this section to the shared cart store/API
//      * when backend cart functionality is available.
//      */
//     console.log("Added to cart:", product.id);

//     setAddedProduct(product.id);

//     window.setTimeout(() => {
//       setAddedProduct(null);
//     }, 1800);
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               VIP Interior
//             </p>

//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living,
//               dining, bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
//               />

//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
//                   aria-label="Clear search"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">
//                   Sort
//                 </span>

//                 <select
//                   value={sort}
//                   onChange={(event) => setSort(event.target.value)}
//                   className="bg-transparent text-sm font-semibold text-slate-700 outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           {/* Category filters */}
//           <div
//             className={`mt-4 ${
//               showFilters ? "block" : "hidden"
//             } lg:block`}
//           >
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {CATEGORIES.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Result header */}
//         <div className="mt-8 flex items-center justify-between">
//           <div>
//             <p className="text-sm font-semibold text-slate-900">
//               {filteredProducts.length} products
//             </p>

//             {(search || category !== "All") && (
//               <p className="mt-1 text-xs text-slate-400">
//                 Showing filtered results
//               </p>
//             )}
//           </div>

//           {(search || category !== "All") && (
//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setCategory("All");
//                 setSort("featured");
//               }}
//               className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//             >
//               <Filter size={14} />
//               Clear filters
//             </button>
//           )}
//         </div>

//         {/* Products */}
//         {filteredProducts.length > 0 ? (
//           <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {filteredProducts.map((product) => {
//               const isWishlisted = wishlist.includes(product.id);
//               const isAdded = addedProduct === product.id;

//               return (
//                 <article
//                   key={product.id}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   {/* Image */}
//                   <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                     <Link
//                       href={`/products/${product.id}`}
//                       className="flex h-full w-full items-center justify-center"
//                     >
//                       <div className="text-center">
//                         <ShoppingBag
//                           size={48}
//                           strokeWidth={1.1}
//                           className="mx-auto text-slate-300 transition group-hover:text-slate-400"
//                         />

//                         <p className="mt-3 px-4 text-xs font-medium text-slate-400">
//                           {product.name}
//                         </p>
//                       </div>
//                     </Link>

//                     {product.badge && (
//                       <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                         {product.badge}
//                       </span>
//                     )}

//                     <button
//                       type="button"
//                       onClick={() => toggleWishlist(product.id)}
//                       className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50"
//                       aria-label={
//                         isWishlisted
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                     >
//                       <Heart
//                         size={16}
//                         className={
//                           isWishlisted
//                             ? "fill-current text-red-500"
//                             : "text-slate-600"
//                         }
//                       />
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                       {product.category}
//                     </p>

//                     <Link href={`/products/${product.id}`}>
//                       <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900 hover:text-slate-600">
//                         {product.name}
//                       </h2>
//                     </Link>

//                     <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                       {product.description}
//                     </p>

//                     <div className="mt-4 flex items-end justify-between gap-3">
//                       <div>
//                         <p className="text-lg font-bold text-slate-900">
//                           {formatCurrency(product.price)}
//                         </p>

//                         <p className="mt-0.5 text-[10px] text-slate-400">
//                           {product.stock} in stock
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => addToCart(product)}
//                         className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                           isAdded
//                             ? "bg-emerald-600 text-white"
//                             : "bg-slate-900 text-white hover:bg-slate-800"
//                         }`}
//                       >
//                         {isAdded ? (
//                           <>
//                             <Check size={14} />
//                             Added
//                           </>
//                         ) : (
//                           <>
//                             <ShoppingBag size={14} />
//                             Add
//                           </>
//                         )}
//                       </button>
//                     </div>

//                     <Link
//                       href={`/products/${product.id}`}
//                       className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
//                     >
//                       View details
//                       <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//             <Search
//               size={32}
//               className="mx-auto text-slate-300"
//             />

//             <h2 className="mt-4 text-lg font-bold text-slate-900">
//               No products found
//             </h2>

//             <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//               Try another search term or choose a different
//               category.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setCategory("All");
//               }}
//               className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
//             >
//               Show all products
//             </button>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// const CATEGORIES = [
//   "All",
//   "Living Room",
//   "Dining Room",
//   "Bedroom",
//   "Office",
// ];

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Fetch products from Firebase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // Fetch only active products from catalog collection
//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );

//         const snapshot = await getDocs(q);

//         const list: Product[] = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             name: data.name || "Unnamed Product",
//             category: data.category || "Other",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             description: data.description || "",
//             material: data.material || "",
//             badge: data.featured ? "Featured" : data.badge || undefined,
//             stock: Number(data.stock ?? 0),
//             image: data.image || data.imageUrl || "",
//             imageUrl: data.imageUrl || data.image || "",
//             featured: data.featured ?? false,
//             active: data.active ?? true,
//           };
//         });

//         setProducts(list);
//       } catch (err: any) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       // featured first
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: any) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {CATEGORIES.map((item) => (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => setCategory(item)}
//                   className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                     category === item
//                       ? "bg-slate-900 text-white"
//                       : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Loading / Error */}
//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {/* Results */}
//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/core/config/firebaseClient";
// import { useSearchParams } from "next/navigation";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Fetch products + build categories from Firebase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const q = query(
//           collection(db, "catalog"),
//           where("active", "==", true)
//         );

//         const snapshot = await getDocs(q);

//         const list: Product[] = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             name: data.name || "Unnamed Product",
//             category: data.category || "Other",
//             price: Number(data.sellingPrice ?? data.price ?? 0),
//             description: data.description || "",
//             material: data.material || "",
//             badge: data.featured ? "Featured" : data.badge || undefined,
//             stock: Number(data.stock ?? 0),
//             image: data.image || data.imageUrl || "",
//             imageUrl: data.imageUrl || data.image || "",
//             featured: data.featured ?? false,
//             active: data.active ?? true,
//           };
//         });

//         setProducts(list);

//         // Build unique categories dynamically
//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: any) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Keep category in sync with URL
//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) {
//       setCategory(urlCategory);
//     }
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       // featured first
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: any) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       {/* Hero */}
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search and controls */}
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           {/* Dynamic Categories */}
//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Loading */}
//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {/* Error */}
//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {/* Results */}
//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//                 {(search || category !== "All") && (
//                   <p className="mt-1 text-xs text-slate-400">
//                     Showing filtered results
//                   </p>
//                 )}
//               </div>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                   }}
//                   className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white"
//                 >
//                   Show all products
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams } from "next/navigation";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [addedProduct, setAddedProduct] = useState<string | null>(null);

//   // Load from same collection as ERP
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) {
//       setCategory(urlCategory);
//     }
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const addToCart = (product: Product) => {
//     try {
//       const existing = localStorage.getItem("cart");
//       let cart = existing ? JSON.parse(existing) : [];

//       const index = cart.findIndex((item: { id: string }) => item.id === product.id);

//       if (index >= 0) {
//         cart[index].quantity += 1;
//       } else {
//         cart.push({
//           id: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       setAddedProduct(product.id);
//       setTimeout(() => setAddedProduct(null), 1800);
//     } catch (err) {
//       console.error("Add to cart failed", err);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//                 {(search || category !== "All") && (
//                   <p className="mt-1 text-xs text-slate-400">
//                     Showing filtered results
//                   </p>
//                 )}
//               </div>

//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const isAdded = addedProduct === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => addToCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
//                               isAdded
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {isAdded ? (
//                               <>
//                                 <Check size={14} />
//                                 Added
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                   }}
//                   className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white"
//                 >
//                   Show all products
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams } from "next/navigation";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
// } from "@/services/cartService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
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

// function readLocalCartIds(): Set<string> {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return new Set();
//     const cart = JSON.parse(raw);
//     if (!Array.isArray(cart)) return new Set();
//     return new Set(
//       cart.map((item: { id?: string; productId?: string }) =>
//         String(item.productId || item.id || "")
//       ).filter(Boolean)
//     );
//   } catch {
//     return new Set();
//   }
// }

// function readLocalCart(): Array<Record<string, unknown>> {
//   try {
//     const raw = localStorage.getItem("cart");
//     if (!raw) return [];
//     const cart = JSON.parse(raw);
//     return Array.isArray(cart) ? cart : [];
//   } catch {
//     return [];
//   }
// }

// function writeLocalCart(cart: Array<Record<string, unknown>>) {
//   localStorage.setItem("cart", JSON.stringify(cart));
//   window.dispatchEvent(new Event("cartUpdated"));
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Keep cart button state in sync with localStorage / cart page
//   useEffect(() => {
//     const sync = () => setCartIds(readLocalCartIds());
//     sync();
//     window.addEventListener("cartUpdated", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("cartUpdated", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = (id: string) => {
//     setWishlist((current) =>
//       current.includes(id)
//         ? current.filter((item) => item !== id)
//         : [...current, id]
//     );
//   };

//   const toggleCart = async (product: Product) => {
//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       let cart = readLocalCart();
//       const email = getLoggedInEmail();

//       if (inCart) {
//         // Remove from localStorage
//         cart = cart.filter(
//           (item) =>
//             String(item.productId || item.id || "") !== product.id
//         );
//         writeLocalCart(cart);
//         setCartIds(readLocalCartIds());

//         // Remove from Firebase if logged in
//         if (email) {
//           try {
//             await removeFromFirebaseCart(email, product.id);
//           } catch (err) {
//             console.error("Firebase remove failed:", err);
//           }
//         }
//       } else {
//         // Add once (quantity = 1; change qty on cart page)
//         cart.push({
//           id: product.id,
//           productId: product.id,
//           name: product.name,
//           category: product.category,
//           price: product.price,
//           quantity: 1,
//           image: product.image || product.imageUrl || "",
//         });
//         writeLocalCart(cart);
//         setCartIds(readLocalCartIds());

//         if (email) {
//           try {
//             await addToFirebaseCart(email, {
//               productId: product.id,
//               name: product.name,
//               price: product.price,
//               quantity: 1,
//               image: product.image || product.imageUrl || "",
//               category: product.category,
//             });
//           } catch (err) {
//             console.error("Firebase add failed:", err);
//           }
//         }
//       }
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">
//                   {filteredProducts.length} products
//                 </p>
//               </div>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
// // import {
// //   addToCart as addToFirebaseCart,
// //   removeFromCart as removeFromFirebaseCart,
// //   getCart,
// // } from "@/services/cartService";
// import {
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist,
// } from "@/services/wishlistService";
// import {
//   addToCart as addToFirebaseCart,
//   removeFromCart as removeFromFirebaseCart,
//   getCart,
// } from "@/services/cartService";

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
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

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids from Firebase only
//   // useEffect(() => {
//   //   let cancelled = false;

//   //   async function syncCart() {
//   //     const email = getLoggedInEmail();
//   //     if (!email) {
//   //       if (!cancelled) setCartIds(new Set());
//   //       return;
//   //     }
//   //     try {
//   //       const cart = await getCart(email);
//   //       const ids = new Set((cart?.items || []).map((i) => i.productId));
//   //       if (!cancelled) setCartIds(ids);
//   //     } catch {
//   //       if (!cancelled) setCartIds(new Set());
//   //     }
//   //   }

//   //   syncCart();
//   //   window.addEventListener("cartUpdated", syncCart);
//   //   return () => {
//   //     cancelled = true;
//   //     window.removeEventListener("cartUpdated", syncCart);
//   //   };
//   // }, []);

//     // Wishlist ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   // const toggleWishlist = (id: string) => {
//   //   setWishlist((current) =>
//   //     current.includes(id)
//   //       ? current.filter((item) => item !== id)
//   //       : [...current, id]
//   //   );
//   // };

//     const toggleWishlist = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(email, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           onClick={() => toggleWishlist(product.id)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
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
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
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

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(email);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, []);

//   // Wishlist ids from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       const email = getLoggedInEmail();
//       if (!email) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(email);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, []);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(email, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(email, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     const email = getLoggedInEmail();
//     if (!email) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(email, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(email);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(email, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   SlidersHorizontal,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
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
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Cart ids — Auth UID
//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   // Wishlist ids — Auth UID
//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="relative w-full lg:max-w-md">
//               <Search
//                 size={18}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search furniture..."
//                 className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <button
//                 type="button"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold lg:hidden"
//               >
//                 <SlidersHorizontal size={16} />
//                 Filters
//               </button>

//               <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-3">
//                 <span className="text-xs font-medium text-slate-400">Sort</span>
//                 <select
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                   className="bg-transparent text-sm font-semibold outline-none"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={`mt-4 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-8 flex items-center justify-between">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={48}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300"
//                               />
//                               <p className="mt-3 px-4 text-xs text-slate-400">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={16}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-4">
//                         <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
//                           {product.description}
//                         </p>

//                         <div className="mt-4 flex items-end justify-between gap-3">
//                           <div>
//                             <p className="text-lg font-bold text-slate-900">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[10px] text-slate-400">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:opacity-60 ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={14} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={14} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={14} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         <Link
//                           href={`/products/${product.id}`}
//                           className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500"
//                         >
//                           View details
//                           <ArrowRight size={14} />
//                         </Link>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Filter,
//   Heart,
//   Search,
//   ShoppingBag,
//   Trash2,
//   X,
//   Loader2,
// } from "lucide-react";
// import { collection, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { useSearchParams, useRouter } from "next/navigation";
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
//   price: number;
//   description: string;
//   material: string;
//   badge?: string;
//   stock: number;
//   image?: string;
//   imageUrl?: string;
//   featured?: boolean;
//   active?: boolean;
// }

// function formatCurrency(value: number) {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }

// export default function ProductsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "All";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(initialCategory);
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [cartIds, setCartIds] = useState<Set<string>>(new Set());
//   const [busyId, setBusyId] = useState<string | null>(null);
//   const [authUid, setAuthUid] = useState<string | null>(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setAuthUid(user?.uid ?? null);
//     });
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const snapshot = await getDocs(collection(db, "furniture_products"));

//         const list: Product[] = snapshot.docs
//           .map((docSnap) => {
//             const data = docSnap.data();
//             const status = String(data.status || "In Stock");

//             return {
//               id: docSnap.id,
//               name: data.name || "Unnamed Product",
//               category: data.category || "Other",
//               price: Number(data.sellingPrice ?? data.price ?? 0),
//               description: data.description || "",
//               material: data.material || "",
//               badge: data.featured ? "Featured" : data.badge || undefined,
//               stock: Number(data.stock ?? 0),
//               image: data.imageUrl || data.image || "",
//               imageUrl: data.imageUrl || data.image || "",
//               featured: Boolean(data.featured),
//               active: data.active !== false && status !== "Inactive",
//             };
//           })
//           .filter((p) => p.active !== false);

//         setProducts(list);

//         const uniqueCategories = Array.from(
//           new Set(list.map((p) => p.category).filter(Boolean))
//         ).sort();

//         setCategories(["All", ...uniqueCategories]);
//       } catch (err: unknown) {
//         console.error("Failed to load products:", err);
//         setError("Unable to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncCart() {
//       if (!authUid) {
//         if (!cancelled) setCartIds(new Set());
//         return;
//       }
//       try {
//         const cart = await getCart(authUid);
//         const ids = new Set((cart?.items || []).map((i) => i.productId));
//         if (!cancelled) setCartIds(ids);
//       } catch {
//         if (!cancelled) setCartIds(new Set());
//       }
//     }

//     syncCart();
//     window.addEventListener("cartUpdated", syncCart);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("cartUpdated", syncCart);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     let cancelled = false;

//     async function syncWishlist() {
//       if (!authUid) {
//         if (!cancelled) setWishlist([]);
//         return;
//       }
//       try {
//         const list = await getWishlist(authUid);
//         if (!cancelled) {
//           setWishlist((list?.items || []).map((i) => i.productId));
//         }
//       } catch {
//         if (!cancelled) setWishlist([]);
//       }
//     }

//     syncWishlist();
//     window.addEventListener("wishlistUpdated", syncWishlist);
//     return () => {
//       cancelled = true;
//       window.removeEventListener("wishlistUpdated", syncWishlist);
//     };
//   }, [authUid]);

//   useEffect(() => {
//     const urlCategory = searchParams.get("category");
//     if (urlCategory) setCategory(urlCategory);
//   }, [searchParams]);

//   const filteredProducts = useMemo(() => {
//     const queryText = search.trim().toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesCategory =
//         category === "All" || product.category === category;

//       const matchesSearch =
//         !queryText ||
//         product.name.toLowerCase().includes(queryText) ||
//         product.category.toLowerCase().includes(queryText) ||
//         product.material.toLowerCase().includes(queryText);

//       return matchesCategory && matchesSearch;
//     });

//     return [...filtered].sort((a, b) => {
//       if (sort === "price-low") return a.price - b.price;
//       if (sort === "price-high") return b.price - a.price;
//       if (sort === "name") return a.name.localeCompare(b.name);
//       if (a.featured && !b.featured) return -1;
//       if (!a.featured && b.featured) return 1;
//       return 0;
//     });
//   }, [products, search, category, sort]);

//   const toggleWishlist = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const isWishlisted = wishlist.includes(product.id);
//     setBusyId(product.id);

//     try {
//       if (isWishlisted) {
//         await removeFromWishlist(authUid, product.id);
//         setWishlist((current) => current.filter((id) => id !== product.id));
//       } else {
//         await addToWishlist(authUid, {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           image: product.image || product.imageUrl || "",
//           category: product.category,
//         });
//         setWishlist((current) =>
//           current.includes(product.id) ? current : [...current, product.id]
//         );
//       }
//       window.dispatchEvent(new Event("wishlistUpdated"));
//     } catch (err) {
//       console.error("Wishlist toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   const toggleCart = async (product: Product) => {
//     if (!authUid) {
//       router.push("/sign-in");
//       return;
//     }

//     const inCart = cartIds.has(product.id);
//     setBusyId(product.id);

//     try {
//       if (inCart) {
//         await removeFromFirebaseCart(authUid, product.id);
//         setCartIds((prev) => {
//           const next = new Set(prev);
//           next.delete(product.id);
//           return next;
//         });
//       } else {
//         const cart = await getCart(authUid);
//         const already = cart?.items?.some((i) => i.productId === product.id);
//         if (!already) {
//           await addToFirebaseCart(authUid, {
//             productId: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1,
//             image: product.image || product.imageUrl || "",
//             category: product.category,
//           });
//         }
//         setCartIds((prev) => new Set(prev).add(product.id));
//       }
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (err) {
//       console.error("Cart toggle failed", err);
//     } finally {
//       setBusyId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f9f8]">
//       <section className="border-b border-slate-200 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="max-w-2xl">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
//               Akrish Furniture
//             </p>
//             <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl lg:text-5xl">
//               Furniture collection
//             </h1>
//             <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
//               Explore thoughtfully selected furniture for living, dining,
//               bedroom and office spaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
//         {/* Toolbar — single row on mobile */}
//         <section className="rounded-xl border border-slate-200 bg-white p-3 sm:rounded-2xl sm:p-5">
//           <div className="flex items-center gap-2">
//             {/* Search — grows */}
//             <div className="relative min-w-0 flex-1">
//               <Search
//                 size={16}
//                 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
//               />
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search..."
//                 className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-8 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:h-11 sm:pl-10 sm:pr-10"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 sm:right-3"
//                 >
//                   <X size={14} />
//                 </button>
//               )}
//             </div>

//             {/* Filters — compact on mobile */}
//             <button
//               type="button"
//               onClick={() => setShowFilters(!showFilters)}
//               className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-11 sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${
//                 showFilters
//                   ? "border-slate-900 bg-slate-900 text-white"
//                   : "border-slate-200 text-slate-800"
//               }`}
//             >
//               <Filter size={15} />
//               <span className="hidden xs:inline sm:inline">Filters</span>
//             </button>

//             {/* Sort — compact on mobile */}
//             <label className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 sm:h-11 sm:gap-2 sm:px-3">
//               <span className="hidden text-xs font-medium text-slate-400 sm:inline">
//                 Sort
//               </span>
//               <select
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//                 className="max-w-[7.5rem] bg-transparent text-xs font-semibold outline-none sm:max-w-none sm:text-sm"
//                 aria-label="Sort products"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-low">Price ↑</option>
//                 <option value="price-high">Price ↓</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>
//           </div>

//           {/* Category chips */}
//           <div className={`mt-3 ${showFilters ? "block" : "hidden"} lg:block`}>
//             <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 sm:gap-2 sm:pt-4">
//               {categories.map((item) => {
//                 const active = category === item;
//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setCategory(item)}
//                     className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
//                       active
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
//             <Loader2 className="h-8 w-8 animate-spin" />
//             <p className="text-sm">Loading products...</p>
//           </div>
//         )}

//         {error && !loading && (
//           <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         {!loading && !error && (
//           <>
//             <div className="mt-5 flex items-center justify-between sm:mt-8">
//               <p className="text-sm font-semibold text-slate-900">
//                 {filteredProducts.length} products
//               </p>
//               {(search || category !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("All");
//                     setSort("featured");
//                   }}
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
//                 >
//                   <Filter size={14} />
//                   Clear filters
//                 </button>
//               )}
//             </div>

//             {filteredProducts.length > 0 ? (
//               /* 2 per row on mobile */
//               <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredProducts.map((product) => {
//                   const isWishlisted = wishlist.includes(product.id);
//                   const inCart = cartIds.has(product.id);
//                   const busy = busyId === product.id;

//                   return (
//                     <article
//                       key={product.id}
//                       className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl"
//                     >
//                       <div className="relative flex aspect-square items-center justify-center bg-slate-100">
//                         <Link
//                           href={`/products/${product.id}`}
//                           className="flex h-full w-full items-center justify-center"
//                         >
//                           {product.image || product.imageUrl ? (
//                             // eslint-disable-next-line @next/next/no-img-element
//                             <img
//                               src={product.image || product.imageUrl}
//                               alt={product.name}
//                               className="h-full w-full object-cover"
//                             />
//                           ) : (
//                             <div className="text-center">
//                               <ShoppingBag
//                                 size={36}
//                                 strokeWidth={1.1}
//                                 className="mx-auto text-slate-300 sm:h-12 sm:w-12"
//                               />
//                               <p className="mt-2 px-2 text-[10px] text-slate-400 sm:mt-3 sm:px-4 sm:text-xs">
//                                 {product.name}
//                               </p>
//                             </div>
//                           )}
//                         </Link>

//                         {product.badge && (
//                           <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           disabled={busy}
//                           onClick={() => toggleWishlist(product)}
//                           className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
//                           aria-label={
//                             isWishlisted
//                               ? "Remove from wishlist"
//                               : "Add to wishlist"
//                           }
//                         >
//                           <Heart
//                             size={14}
//                             className={
//                               isWishlisted
//                                 ? "fill-current text-red-500"
//                                 : "text-slate-600"
//                             }
//                           />
//                         </button>
//                       </div>

//                       <div className="p-2.5 sm:p-4">
//                         <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
//                           {product.category}
//                         </p>

//                         <Link href={`/products/${product.id}`}>
//                           <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:line-clamp-1 sm:text-base">
//                             {product.name}
//                           </h2>
//                         </Link>

//                         {/* <p className="mt-1.5 hidden line-clamp-2 min-h-10 text-xs leading-5 text-slate-500 sm:mt-2 sm:block">
//                           {product.description}
//                         </p> */}

//                         <div className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
//                           <div>
//                             <p className="text-sm font-bold text-slate-900 sm:text-lg">
//                               {formatCurrency(product.price)}
//                             </p>
//                             <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
//                               {product.stock} in stock
//                             </p>
//                           </div>

//                           <button
//                             type="button"
//                             disabled={busy}
//                             onClick={() => toggleCart(product)}
//                             className={`flex h-8 w-full items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition disabled:opacity-60 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
//                               inCart
//                                 ? "bg-red-600 text-white hover:bg-red-700"
//                                 : "bg-slate-900 text-white hover:bg-slate-800"
//                             }`}
//                           >
//                             {busy ? (
//                               <Loader2 size={13} className="animate-spin" />
//                             ) : inCart ? (
//                               <>
//                                 <Trash2 size={13} />
//                                 Remove
//                               </>
//                             ) : (
//                               <>
//                                 <ShoppingBag size={13} />
//                                 Add
//                               </>
//                             )}
//                           </button>
//                         </div>


//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//                 <Search size={32} className="mx-auto text-slate-300" />
//                 <h2 className="mt-4 text-lg font-bold text-slate-900">
//                   No products found
//                 </h2>
//                 <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
//                   {products.length === 0
//                     ? "No products have been published yet."
//                     : "Try another search term or category."}
//                 </p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Filter,
  Heart,
  Search,
  ShoppingBag,
  Trash2,
  X,
  Loader2,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useSearchParams, useRouter } from "next/navigation";
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
  price: number;
  description: string;
  material: string;
  badge?: string;
  stock: number;
  image?: string;
  imageUrl?: string;
  featured?: boolean;
  active?: boolean;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartIds, setCartIds] = useState<Set<string>>(new Set());
  const [busyId, setBusyId] = useState<string | null>(null);
  const [authUid, setAuthUid] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUid(user?.uid ?? null);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const snapshot = await getDocs(collection(db, "furniture_products"));

        const list: Product[] = snapshot.docs
          .map((docSnap) => {
            const data = docSnap.data();
            const status = String(data.status || "In Stock");

            return {
              id: docSnap.id,
              name: data.name || "Unnamed Product",
              category: data.category || "Other",
              price: Number(data.sellingPrice ?? data.price ?? 0),
              description: data.description || "",
              material: data.material || "",
              badge: data.featured ? "Featured" : data.badge || undefined,
              stock: Number(data.stock ?? 0),
              image: data.imageUrl || data.image || "",
              imageUrl: data.imageUrl || data.image || "",
              featured: Boolean(data.featured),
              active: data.active !== false && status !== "Inactive",
            };
          })
          .filter((p) => p.active !== false);

        setProducts(list);

        const uniqueCategories = Array.from(
          new Set(list.map((p) => p.category).filter(Boolean))
        ).sort();

        setCategories(["All", ...uniqueCategories]);
      } catch (err: unknown) {
        console.error("Failed to load products:", err);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function syncCart() {
      if (!authUid) {
        if (!cancelled) setCartIds(new Set());
        return;
      }
      try {
        const cart = await getCart(authUid);
        const ids = new Set((cart?.items || []).map((i) => i.productId));
        if (!cancelled) setCartIds(ids);
      } catch {
        if (!cancelled) setCartIds(new Set());
      }
    }

    syncCart();
    window.addEventListener("cartUpdated", syncCart);
    return () => {
      cancelled = true;
      window.removeEventListener("cartUpdated", syncCart);
    };
  }, [authUid]);

  useEffect(() => {
    let cancelled = false;

    async function syncWishlist() {
      if (!authUid) {
        if (!cancelled) setWishlist([]);
        return;
      }
      try {
        const list = await getWishlist(authUid);
        if (!cancelled) {
          setWishlist((list?.items || []).map((i) => i.productId));
        }
      } catch {
        if (!cancelled) setWishlist([]);
      }
    }

    syncWishlist();
    window.addEventListener("wishlistUpdated", syncWishlist);
    return () => {
      cancelled = true;
      window.removeEventListener("wishlistUpdated", syncWishlist);
    };
  }, [authUid]);

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) setCategory(urlCategory);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const queryText = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        !queryText ||
        product.name.toLowerCase().includes(queryText) ||
        product.category.toLowerCase().includes(queryText) ||
        product.material.toLowerCase().includes(queryText);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [products, search, category, sort]);

  const toggleWishlist = async (product: Product) => {
    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    const isWishlisted = wishlist.includes(product.id);
    setBusyId(product.id);

    try {
      if (isWishlisted) {
        await removeFromWishlist(authUid, product.id);
        setWishlist((current) => current.filter((id) => id !== product.id));
      } else {
        await addToWishlist(authUid, {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image || product.imageUrl || "",
          category: product.category,
        });
        setWishlist((current) =>
          current.includes(product.id) ? current : [...current, product.id]
        );
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist toggle failed", err);
    } finally {
      setBusyId(null);
    }
  };

  const toggleCart = async (product: Product) => {
    if (!authUid) {
      router.push("/sign-in");
      return;
    }

    const inCart = cartIds.has(product.id);
    setBusyId(product.id);

    try {
      if (inCart) {
        await removeFromFirebaseCart(authUid, product.id);
        setCartIds((prev) => {
          const next = new Set(prev);
          next.delete(product.id);
          return next;
        });
      } else {
        const cart = await getCart(authUid);
        const already = cart?.items?.some((i) => i.productId === product.id);
        if (!already) {
          await addToFirebaseCart(authUid, {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image || product.imageUrl || "",
            category: product.category,
          });
        }
        setCartIds((prev) => new Set(prev).add(product.id));
      }
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("Cart toggle failed", err);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9f8]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
              Akrish Furniture
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl lg:text-5xl">
              Furniture collection
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
              Explore thoughtfully selected furniture for living, dining,
              bedroom and office spaces.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
        <section className="rounded-xl border border-slate-200 bg-white p-3 sm:rounded-2xl sm:p-5">
          <div className="flex items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search
                size={16}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-8 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:h-11 sm:pl-10 sm:pr-10"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 sm:right-3"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold transition sm:h-11 sm:gap-2 sm:px-4 sm:text-sm lg:hidden ${
                showFilters
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-800"
              }`}
            >
              <Filter size={15} />
              <span className="hidden xs:inline sm:inline">Filters</span>
            </button>

            <label className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 sm:h-11 sm:gap-2 sm:px-3">
              <span className="hidden text-xs font-medium text-slate-400 sm:inline">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="max-w-[7.5rem] bg-transparent text-xs font-semibold outline-none sm:max-w-none sm:text-sm"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          <div className={`mt-3 ${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 sm:gap-2 sm:pt-4">
              {categories.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-xs ${
                      active
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {loading && (
          <div className="mt-16 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm">Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mt-5 flex items-center justify-between sm:mt-8">
              <p className="text-sm font-semibold text-slate-900">
                {filteredProducts.length} products
              </p>
              {(search || category !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setSort("featured");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  <Filter size={14} />
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlist.includes(product.id);
                  const inCart = cartIds.has(product.id);
                  const busy = busyId === product.id;

                  return (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-lg sm:rounded-2xl"
                    >
                      <div className="relative flex aspect-square items-center justify-center bg-slate-100">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex h-full w-full items-center justify-center"
                        >
                          {product.image || product.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={product.image || product.imageUrl}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="text-center">
                              <ShoppingBag
                                size={36}
                                strokeWidth={1.1}
                                className="mx-auto text-slate-300 sm:h-12 sm:w-12"
                              />
                              <p className="mt-2 px-2 text-[10px] text-slate-400 sm:mt-3 sm:px-4 sm:text-xs">
                                {product.name}
                              </p>
                            </div>
                          )}
                        </Link>

                        {product.badge && (
                          <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-700 shadow-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                            {product.badge}
                          </span>
                        )}

                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => toggleWishlist(product)}
                          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm disabled:opacity-60 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
                          aria-label={
                            isWishlisted
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        >
                          <Heart
                            size={14}
                            className={
                              isWishlisted
                                ? "fill-current text-red-500"
                                : "text-slate-600"
                            }
                          />
                        </button>
                      </div>

                      <div className="p-2.5 sm:p-4">
                        <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
                          {product.category}
                        </p>

                        <Link href={`/products/${product.id}`}>
                          <h2 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-slate-900 sm:mt-1.5 sm:line-clamp-1 sm:text-base">
                            {product.name}
                          </h2>
                        </Link>

                        <div className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                          <div>
                            <p className="text-sm font-bold text-slate-900 sm:text-lg">
                              {formatCurrency(product.price)}
                            </p>
                            <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
                              {product.stock} in stock
                            </p>
                          </div>

                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => toggleCart(product)}
                            className={`flex h-8 w-full items-center justify-center gap-1 rounded-lg px-2 text-[11px] font-semibold transition disabled:opacity-60 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
                              inCart
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "bg-slate-900 text-white hover:bg-slate-800"
                            }`}
                          >
                            {busy ? (
                              <Loader2 size={13} className="animate-spin" />
                            ) : inCart ? (
                              <>
                                <Trash2 size={13} />
                                Remove
                              </>
                            ) : (
                              <>
                                <ShoppingBag size={13} />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <Search size={32} className="mx-auto text-slate-300" />
                <h2 className="mt-4 text-lg font-bold text-slate-900">
                  No products found
                </h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                  {products.length === 0
                    ? "No products have been published yet."
                    : "Try another search term or category."}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#f7f9f8]">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
