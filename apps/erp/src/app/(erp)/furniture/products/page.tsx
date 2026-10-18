// "use client";

// import { useMemo, useState } from "react";
// import { useRouter } from "next/navigation";

// type ProductStatus =
//   | "In Stock"
//   | "Low Stock"
//   | "Out of Stock"
//   | "Inactive";

// type Product = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   material: string;
//   finish: string;
//   color: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   supplier: string;
//   location: string;
//   image: string;
//   updatedAt: string;
// };

// const initialProducts: Product[] = [
//   {
//     id: "1",
//     code: "SOFA-001",
//     name: "Modern L-Shape Sofa",
//     category: "Sofa",
//     subcategory: "L-Shape Sofa",
//     material: "Engineered Wood + Fabric",
//     finish: "Matte Finish",
//     color: "Light Grey",
//     sellingPrice: 85000,
//     costPrice: 62000,
//     stock: 8,
//     unit: "Nos",
//     reorderLevel: 3,
//     status: "In Stock",
//     supplier: "Akrish Furniture Suppliers",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-10-05",
//   },
//   {
//     id: "2",
//     code: "BED-002",
//     name: "Premium King Size Bed",
//     category: "Bed",
//     subcategory: "King Size Bed",
//     material: "Solid Wood",
//     finish: "Natural Wood",
//     color: "Walnut",
//     sellingPrice: 72000,
//     costPrice: 51000,
//     stock: 5,
//     unit: "Nos",
//     reorderLevel: 2,
//     status: "In Stock",
//     supplier: "Akrish Furniture Suppliers",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-10-04",
//   },
//   {
//     id: "3",
//     code: "DIN-003",
//     name: "6 Seater Dining Table",
//     category: "Dining Table",
//     subcategory: "Dining Set",
//     material: "Solid Wood",
//     finish: "PU Finish",
//     color: "Brown",
//     sellingPrice: 58000,
//     costPrice: 41000,
//     stock: 2,
//     unit: "Set",
//     reorderLevel: 3,
//     status: "Low Stock",
//     supplier: "Local Supplier",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-10-03",
//   },
//   {
//     id: "4",
//     code: "CHR-004",
//     name: "Luxury Accent Chair",
//     category: "Chair",
//     subcategory: "Accent Chair",
//     material: "Wood + Fabric",
//     finish: "Matte Finish",
//     color: "Beige",
//     sellingPrice: 18500,
//     costPrice: 12000,
//     stock: 14,
//     unit: "Nos",
//     reorderLevel: 5,
//     status: "In Stock",
//     supplier: "ABC Furniture Supplier",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-10-02",
//   },
//   {
//     id: "5",
//     code: "WARD-005",
//     name: "3 Door Sliding Wardrobe",
//     category: "Wardrobe",
//     subcategory: "Sliding Wardrobe",
//     material: "Engineered Wood",
//     finish: "Laminate",
//     color: "White + Oak",
//     sellingPrice: 65000,
//     costPrice: 45000,
//     stock: 0,
//     unit: "Nos",
//     reorderLevel: 2,
//     status: "Out of Stock",
//     supplier: "Direct Manufacturer",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-10-01",
//   },
//   {
//     id: "6",
//     code: "TVU-006",
//     name: "Modern Floating TV Unit",
//     category: "TV Unit",
//     subcategory: "Wall Mounted TV Unit",
//     material: "MDF",
//     finish: "Glossy Finish",
//     color: "White",
//     sellingPrice: 32000,
//     costPrice: 21000,
//     stock: 7,
//     unit: "Nos",
//     reorderLevel: 3,
//     status: "In Stock",
//     supplier: "Akrish Furniture Suppliers",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-09-30",
//   },
//   {
//     id: "7",
//     code: "STU-007",
//     name: "Executive Study Table",
//     category: "Study Table",
//     subcategory: "Office Study Table",
//     material: "Plywood",
//     finish: "Melamine",
//     color: "Dark Brown",
//     sellingPrice: 27500,
//     costPrice: 18000,
//     stock: 3,
//     unit: "Nos",
//     reorderLevel: 3,
//     status: "Low Stock",
//     supplier: "Local Supplier",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-09-28",
//   },
//   {
//     id: "8",
//     code: "OFF-008",
//     name: "Premium Office Workstation",
//     category: "Office Furniture",
//     subcategory: "Workstation",
//     material: "Engineered Wood + Metal",
//     finish: "Matte Finish",
//     color: "Oak + Black",
//     sellingPrice: 42000,
//     costPrice: 29500,
//     stock: 6,
//     unit: "Set",
//     reorderLevel: 2,
//     status: "In Stock",
//     supplier: "Direct Manufacturer",
//     location: "Main Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
//     updatedAt: "2026-09-26",
//   },
// ];

// const categories = [
//   "All Categories",
//   "Sofa",
//   "Bed",
//   "Dining Table",
//   "Chair",
//   "Wardrobe",
//   "TV Unit",
//   "Study Table",
//   "Office Furniture",
//   "Kitchen",
// ];

// const statuses = [
//   "All Status",
//   "In Stock",
//   "Low Stock",
//   "Out of Stock",
//   "Inactive",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function getStatusClasses(status: ProductStatus) {
//   switch (status) {
//     case "In Stock":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Low Stock":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Out of Stock":
//       return "bg-[#fdecec] text-[#b42318]";
//     case "Inactive":
//       return "bg-gray-100 text-gray-500";
//     default:
//       return "bg-gray-100 text-gray-500";
//   }
// }

// export default function ProductsPage() {
//   const router = useRouter();

//   const [products, setProducts] = useState<Product[]>(initialProducts);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Categories");
//   const [status, setStatus] = useState("All Status");
//   const [viewMode, setViewMode] = useState<"table" | "grid">("table");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         category === "All Categories" || product.category === category;

//       const matchesStatus =
//         status === "All Status" || product.status === status;

//       return matchesSearch && matchesCategory && matchesStatus;
//     });
//   }, [products, search, category, status]);

//   const totalProducts = products.length;
//   const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
//   const lowStockCount = products.filter(
//     (product) => product.status === "Low Stock"
//   ).length;
//   const outOfStockCount = products.filter(
//     (product) => product.status === "Out of Stock"
//   ).length;

//   const inventoryValue = products.reduce(
//     (sum, product) => sum + product.costPrice * product.stock,
//     0
//   );

//   const handleDelete = () => {
//     if (!deleteProduct) return;

//     setProducts((current) =>
//       current.filter((product) => product.id !== deleteProduct.id)
//     );

//     setDeleteProduct(null);
//     setSelectedProduct(null);
//   };

//   const clearFilters = () => {
//     setSearch("");
//     setCategory("All Categories");
//     setStatus("All Status");
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1550px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/dashboard")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Furniture
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">Products</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">
//                 Products & Inventory
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage furniture products, stock, pricing and inventory.
//               </p>
//             </div>

//             <button
//               onClick={() => router.push("/furniture/products/new")}
//               className="flex items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548]"
//             >
//               <span className="text-lg leading-none">+</span>
//               Add Product
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-4 py-6 sm:px-6 lg:px-8">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Total Products</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">
//                   {totalProducts}
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.7"
//                 >
//                   <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
//                   <path d="M12 21V12" />
//                   <path d="m3 7.5 9 4.5 9-4.5" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Total Stock</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">
//                   {totalStock}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-400">Units available</p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.7"
//                 >
//                   <path d="M4 19V5" />
//                   <path d="M4 19h16" />
//                   <path d="m7 15 3-4 3 2 5-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Low Stock</p>
//                 <p className="mt-2 text-2xl font-bold text-[#a36a00]">
//                   {lowStockCount}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-400">
//                   Products need attention
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff5df] text-[#a36a00]">
//                 <span className="text-xl font-bold">!</span>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Inventory Value</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">
//                   {formatCurrency(inventoryValue)}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-400">
//                   At cost price
//                 </p>
//               </div>

//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 ₹
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mt-6 rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//             <div className="flex flex-1 flex-col gap-3 md:flex-row">
//               <div className="relative flex-1">
//                 <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                   >
//                     <circle cx="11" cy="11" r="7" />
//                     <path d="m20 20-4-4" />
//                   </svg>
//                 </span>

//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search product name, code, category..."
//                   className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {categories.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {statuses.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-center justify-between gap-3">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-700">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 of {products.length}
//               </p>

//               <div className="flex rounded-lg border border-[#d9d7cf] bg-white p-1">
//                 <button
//                   onClick={() => setViewMode("table")}
//                   className={`rounded-md px-3 py-1.5 text-xs font-medium ${
//                     viewMode === "table"
//                       ? "bg-[#176b5b] text-white"
//                       : "text-gray-500 hover:bg-gray-50"
//                   }`}
//                 >
//                   Table
//                 </button>

//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`rounded-md px-3 py-1.5 text-xs font-medium ${
//                     viewMode === "grid"
//                       ? "bg-[#176b5b] text-white"
//                       : "text-gray-500 hover:bg-gray-50"
//                   }`}
//                 >
//                   Grid
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Empty Filter Result */}
//         {filteredProducts.length === 0 && (
//           <div className="mt-6 rounded-xl border border-[#e4e2da] bg-white px-6 py-14 text-center">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//               <svg
//                 width="26"
//                 height="26"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.7"
//               >
//                 <circle cx="11" cy="11" r="7" />
//                 <path d="m20 20-4-4" />
//               </svg>
//             </div>

//             <h3 className="mt-4 text-lg font-bold text-[#222]">
//               No products found
//             </h3>

//             <p className="mt-1 text-sm text-gray-500">
//               Try changing your search or filters.
//             </p>

//             <button
//               onClick={clearFilters}
//               className="mt-5 rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}

//         {/* Table View */}
//         {viewMode === "table" && filteredProducts.length > 0 && (
//           <div className="mt-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1100px] text-left">
//                 <thead className="border-b border-[#e4e2da] bg-[#fafaf8]">
//                   <tr>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Category
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Material
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Price
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Stock
//                     </th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-[#eeece5]">
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="h-12 w-12 rounded-lg border border-[#e4e2da] object-cover"
//                           />

//                           <div>
//                             <button
//                               onClick={() =>
//                                 router.push(
//                                   `/furniture/products/${product.id}`
//                                 )
//                               }
//                               className="text-sm font-semibold text-[#222] hover:text-[#176b5b]"
//                             >
//                               {product.name}
//                             </button>

//                             <p className="mt-0.5 text-xs text-gray-400">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="text-sm font-medium text-gray-700">
//                           {product.category}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {product.subcategory}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="text-sm text-gray-700">
//                           {product.material}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {product.finish}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold text-gray-800">
//                           {formatCurrency(product.sellingPrice)}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Cost {formatCurrency(product.costPrice)}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <p
//                           className={`text-sm font-semibold ${
//                             product.stock === 0
//                               ? "text-red-600"
//                               : product.stock <= product.reorderLevel
//                                 ? "text-[#a36a00]"
//                                 : "text-gray-800"
//                           }`}
//                         >
//                           {product.stock} {product.unit}
//                         </p>

//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Reorder at {product.reorderLevel}
//                         </p>
//                       </td>

//                       <td className="px-5 py-4">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() =>
//                               router.push(
//                                 `/furniture/products/${product.id}`
//                               )
//                             }
//                             className="rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             View
//                           </button>

//                           <button
//                             onClick={() => setSelectedProduct(product)}
//                             className="rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             More
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t border-[#e4e2da] px-5 py-4">
//               <div className="flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
//                 <span>
//                   {filteredProducts.length} product
//                   {filteredProducts.length !== 1 ? "s" : ""} displayed
//                 </span>

//                 <span>
//                   {outOfStockCount} out of stock • {lowStockCount} low stock
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Grid View */}
//         {viewMode === "grid" && filteredProducts.length > 0 && (
//           <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
//               >
//                 <div className="relative h-52 bg-[#f3f3ef]">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover"
//                   />

//                   <span
//                     className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                       product.status
//                     )}`}
//                   >
//                     {product.status}
//                   </span>
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-start justify-between gap-3">
//                     <div>
//                       <p className="text-xs font-medium text-gray-400">
//                         {product.code}
//                       </p>

//                       <button
//                         onClick={() =>
//                           router.push(`/furniture/products/${product.id}`)
//                         }
//                         className="mt-1 text-left text-base font-bold text-[#222] hover:text-[#176b5b]"
//                       >
//                         {product.name}
//                       </button>
//                     </div>

//                     <p className="whitespace-nowrap text-base font-bold text-[#176b5b]">
//                       {formatCurrency(product.sellingPrice)}
//                     </p>
//                   </div>

//                   <p className="mt-2 text-sm text-gray-500">
//                     {product.category} • {product.subcategory}
//                   </p>

//                   <div className="mt-4 grid grid-cols-2 gap-3">
//                     <div className="rounded-lg bg-[#fafaf8] p-3">
//                       <p className="text-xs text-gray-400">Stock</p>
//                       <p className="mt-1 text-sm font-semibold text-gray-800">
//                         {product.stock} {product.unit}
//                       </p>
//                     </div>

//                     <div className="rounded-lg bg-[#fafaf8] p-3">
//                       <p className="text-xs text-gray-400">Material</p>
//                       <p className="mt-1 truncate text-sm font-semibold text-gray-800">
//                         {product.material}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() =>
//                         router.push(`/furniture/products/${product.id}`)
//                       }
//                       className="flex-1 rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
//                     >
//                       View Product
//                     </button>

//                     <button
//                       onClick={() => setSelectedProduct(product)}
//                       className="rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* More Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-5 py-4">
//               <div>
//                 <p className="text-xs text-gray-400">
//                   {selectedProduct.code}
//                 </p>

//                 <h2 className="mt-1 text-lg font-bold text-[#222]">
//                   {selectedProduct.name}
//                 </h2>
//               </div>

//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-[180px_1fr]">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="h-44 w-full rounded-xl border border-[#e4e2da] object-cover"
//               />

//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span
//                     className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                       selectedProduct.status
//                     )}`}
//                   >
//                     {selectedProduct.status}
//                   </span>

//                   <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
//                     {selectedProduct.category}
//                   </span>
//                 </div>

//                 <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
//                   <div>
//                     <p className="text-xs text-gray-400">Selling Price</p>
//                     <p className="mt-1 text-sm font-bold text-[#176b5b]">
//                       {formatCurrency(selectedProduct.sellingPrice)}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Cost Price</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {formatCurrency(selectedProduct.costPrice)}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Stock</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {selectedProduct.stock} {selectedProduct.unit}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Material</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.material}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Finish</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.finish}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Color</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.color}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Supplier</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.supplier}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Location</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.location}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">Reorder Level</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.reorderLevel}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:justify-end">
//               <button
//                 onClick={() => setDeleteProduct(selectedProduct)}
//                 className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>

//               <button
//                 onClick={() =>
//                   router.push(`/furniture/products/${selectedProduct.id}`)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
//               >
//                 Open Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation */}
//       {deleteProduct && (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//               >
//                 <path d="M3 6h18" />
//                 <path d="M8 6V4h8v2" />
//                 <path d="m19 6-1 15H6L5 6" />
//                 <path d="M10 11v6M14 11v6" />
//               </svg>
//             </div>

//             <h2 className="mt-4 text-lg font-bold text-[#222]">
//               Delete Product?
//             </h2>

//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Are you sure you want to delete{" "}
//               <span className="font-semibold text-gray-700">
//                 {deleteProduct.name}
//               </span>
//               ? This action cannot be undone.
//             </p>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setDeleteProduct(null)}
//                 className="rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleDelete}
//                 className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
//               >
//                 Delete Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   deleteProduct as deleteProductFromDb,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive" | "Published" | "Draft" | "Archived";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   material: string;
//   finish: string;
//   color: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   supplier: string;
//   location: string;
//   image: string;
//   updatedAt: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = (p.status as ProductStatus) || "In Stock";
//   if (!p.status || p.status === "Published") {
//     if (stock === 0) status = "Out of Stock";
//     else if (stock <= reorder) status = "Low Stock";
//     else status = "In Stock";
//   }

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subcategory: p.subcategory || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=60",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//   };
// }

// const categories = [
//   "All Categories",
//   "Sofa",
//   "Bed",
//   "Dining Table",
//   "Chair",
//   "Wardrobe",
//   "TV Unit",
//   "Study Table",
//   "Office Furniture",
//   "Kitchen",
// ];

// const statuses = [
//   "All Status",
//   "In Stock",
//   "Low Stock",
//   "Out of Stock",
//   "Inactive",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function getStatusClasses(status: ProductStatus) {
//   switch (status) {
//     case "In Stock":
//     case "Published":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Low Stock":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Out of Stock":
//       return "bg-[#fdecec] text-[#b42318]";
//     case "Inactive":
//     case "Draft":
//     case "Archived":
//       return "bg-gray-100 text-gray-500";
//     default:
//       return "bg-gray-100 text-gray-500";
//   }
// }

// export default function ProductsPage() {
//   const router = useRouter();

//   const [products, setProducts] = useState<UiProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Categories");
//   const [status, setStatus] = useState("All Status");
//   const [viewMode, setViewMode] = useState<"table" | "grid">("table");
//   const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(null);
//   const [deleteProduct, setDeleteProduct] = useState<UiProduct | null>(null);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllProducts();
//         if (!cancelled) {
//           setProducts(data.map(mapToUi));
//         }
//       } catch (err) {
//         console.error("Failed to load products:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         category === "All Categories" || product.category === category;

//       const matchesStatus =
//         status === "All Status" || product.status === status;

//       return matchesSearch && matchesCategory && matchesStatus;
//     });
//   }, [products, search, category, status]);

//   const totalProducts = products.length;
//   const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
//   const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
//   const outOfStockCount = products.filter((p) => p.status === "Out of Stock").length;
//   const inventoryValue = products.reduce(
//     (sum, p) => sum + p.costPrice * p.stock,
//     0
//   );

//   const handleDelete = async () => {
//     if (!deleteProduct) return;
//     setDeleting(true);
//     try {
//       await deleteProductFromDb(deleteProduct.id);
//       setProducts((current) =>
//         current.filter((p) => p.id !== deleteProduct.id)
//       );
//       setDeleteProduct(null);
//       setSelectedProduct(null);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product. Please try again.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const clearFilters = () => {
//     setSearch("");
//     setCategory("All Categories");
//     setStatus("All Status");
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1550px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/dashboard")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Furniture
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">Products</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">
//                 Products & Inventory
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Manage furniture products, stock, pricing and inventory.
//               </p>
//             </div>

//             <button
//               onClick={() => router.push("/furniture/products/new")}
//               className="flex items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548]"
//             >
//               <span className="text-lg leading-none">+</span>
//               Add Product
//             </button>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1550px] px-4 py-6 sm:px-6 lg:px-8">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Total Products</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">{totalProducts}</p>
//               </div>
//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 P
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Total Stock</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">{totalStock}</p>
//                 <p className="mt-1 text-xs text-gray-400">Units available</p>
//               </div>
//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 S
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Low Stock</p>
//                 <p className="mt-2 text-2xl font-bold text-[#a36a00]">{lowStockCount}</p>
//                 <p className="mt-1 text-xs text-gray-400">Products need attention</p>
//               </div>
//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff5df] text-[#a36a00]">
//                 !
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-500">Inventory Value</p>
//                 <p className="mt-2 text-2xl font-bold text-[#222]">
//                   {formatCurrency(inventoryValue)}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-400">At cost price</p>
//               </div>
//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5f2] text-[#176b5b]">
//                 ₹
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mt-6 rounded-xl border border-[#e4e2da] bg-white p-4">
//           <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//             <div className="flex flex-1 flex-col gap-3 md:flex-row">
//               <div className="relative flex-1">
//                 <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   ⌕
//                 </span>
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search product name, code, category..."
//                   className="w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                 />
//               </div>

//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {categories.map((item) => (
//                   <option key={item} value={item}>{item}</option>
//                 ))}
//               </select>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {statuses.map((item) => (
//                   <option key={item} value={item}>{item}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-center justify-between gap-3">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-700">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 of {products.length}
//               </p>

//               <div className="flex rounded-lg border border-[#d9d7cf] bg-white p-1">
//                 <button
//                   onClick={() => setViewMode("table")}
//                   className={`rounded-md px-3 py-1.5 text-xs font-medium ${
//                     viewMode === "table"
//                       ? "bg-[#176b5b] text-white"
//                       : "text-gray-500 hover:bg-gray-50"
//                   }`}
//                 >
//                   Table
//                 </button>
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`rounded-md px-3 py-1.5 text-xs font-medium ${
//                     viewMode === "grid"
//                       ? "bg-[#176b5b] text-white"
//                       : "text-gray-500 hover:bg-gray-50"
//                   }`}
//                 >
//                   Grid
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Empty */}
//         {filteredProducts.length === 0 && (
//           <div className="mt-6 rounded-xl border border-[#e4e2da] bg-white px-6 py-14 text-center">
//             <h3 className="mt-4 text-lg font-bold text-[#222]">No products found</h3>
//             <p className="mt-1 text-sm text-gray-500">
//               {products.length === 0
//                 ? "No products in the database yet. Click “Add Product” to create one."
//                 : "Try changing your search or filters."}
//             </p>
//             {products.length > 0 && (
//               <button
//                 onClick={clearFilters}
//                 className="mt-5 rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>
//         )}

//         {/* Table View */}
//         {viewMode === "table" && filteredProducts.length > 0 && (
//           <div className="mt-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1100px] text-left">
//                 <thead className="border-b border-[#e4e2da] bg-[#fafaf8]">
//                   <tr>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Product</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Category</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Material</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Price</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Stock</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-[#eeece5]">
//                   {filteredProducts.map((product) => (
//                     <tr key={product.id} className="transition hover:bg-[#fafaf8]">
//                       <td className="px-5 py-4">
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="h-12 w-12 rounded-lg border border-[#e4e2da] object-cover"
//                           />
//                           <div>
//                             <button
//                               onClick={() => router.push(`/furniture/products/${product.id}`)}
//                               className="text-sm font-semibold text-[#222] hover:text-[#176b5b]"
//                             >
//                               {product.name}
//                             </button>
//                             <p className="mt-0.5 text-xs text-gray-400">{product.code}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <p className="text-sm font-medium text-gray-700">{product.category}</p>
//                         <p className="mt-0.5 text-xs text-gray-400">{product.subcategory}</p>
//                       </td>
//                       <td className="px-5 py-4">
//                         <p className="text-sm text-gray-700">{product.material}</p>
//                         <p className="mt-0.5 text-xs text-gray-400">{product.finish}</p>
//                       </td>
//                       <td className="px-5 py-4">
//                         <p className="text-sm font-semibold text-gray-800">
//                           {formatCurrency(product.sellingPrice)}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Cost {formatCurrency(product.costPrice)}
//                         </p>
//                       </td>
//                       <td className="px-5 py-4">
//                         <p
//                           className={`text-sm font-semibold ${
//                             product.stock === 0
//                               ? "text-red-600"
//                               : product.stock <= product.reorderLevel
//                               ? "text-[#a36a00]"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {product.stock} {product.unit}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Reorder at {product.reorderLevel}
//                         </p>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() => router.push(`/furniture/products/${product.id}`)}
//                             className="rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             View
//                           </button>
//                           <button
//                             onClick={() => setSelectedProduct(product)}
//                             className="rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             More
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t border-[#e4e2da] px-5 py-4">
//               <div className="flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
//                 <span>
//                   {filteredProducts.length} product
//                   {filteredProducts.length !== 1 ? "s" : ""} displayed
//                 </span>
//                 <span>
//                   {outOfStockCount} out of stock • {lowStockCount} low stock
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Grid View */}
//         {viewMode === "grid" && filteredProducts.length > 0 && (
//           <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
//               >
//                 <div className="relative h-52 bg-[#f3f3ef]">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover"
//                   />
//                   <span
//                     className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                       product.status
//                     )}`}
//                   >
//                     {product.status}
//                   </span>
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-start justify-between gap-3">
//                     <div>
//                       <p className="text-xs font-medium text-gray-400">{product.code}</p>
//                       <button
//                         onClick={() => router.push(`/furniture/products/${product.id}`)}
//                         className="mt-1 text-left text-base font-bold text-[#222] hover:text-[#176b5b]"
//                       >
//                         {product.name}
//                       </button>
//                     </div>
//                     <p className="whitespace-nowrap text-base font-bold text-[#176b5b]">
//                       {formatCurrency(product.sellingPrice)}
//                     </p>
//                   </div>

//                   <p className="mt-2 text-sm text-gray-500">
//                     {product.category} • {product.subcategory}
//                   </p>

//                   <div className="mt-4 grid grid-cols-2 gap-3">
//                     <div className="rounded-lg bg-[#fafaf8] p-3">
//                       <p className="text-xs text-gray-400">Stock</p>
//                       <p className="mt-1 text-sm font-semibold text-gray-800">
//                         {product.stock} {product.unit}
//                       </p>
//                     </div>
//                     <div className="rounded-lg bg-[#fafaf8] p-3">
//                       <p className="text-xs text-gray-400">Material</p>
//                       <p className="mt-1 truncate text-sm font-semibold text-gray-800">
//                         {product.material}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() => router.push(`/furniture/products/${product.id}`)}
//                       className="flex-1 rounded-lg bg-[#176b5b] px-3 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
//                     >
//                       View Product
//                     </button>
//                     <button
//                       onClick={() => setSelectedProduct(product)}
//                       className="rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* More Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-5 py-4">
//               <div>
//                 <p className="text-xs text-gray-400">{selectedProduct.code}</p>
//                 <h2 className="mt-1 text-lg font-bold text-[#222]">
//                   {selectedProduct.name}
//                 </h2>
//               </div>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-[180px_1fr]">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="h-44 w-full rounded-xl border border-[#e4e2da] object-cover"
//               />
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span
//                     className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                       selectedProduct.status
//                     )}`}
//                   >
//                     {selectedProduct.status}
//                   </span>
//                   <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
//                     {selectedProduct.category}
//                   </span>
//                 </div>

//                 <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
//                   <div>
//                     <p className="text-xs text-gray-400">Selling Price</p>
//                     <p className="mt-1 text-sm font-bold text-[#176b5b]">
//                       {formatCurrency(selectedProduct.sellingPrice)}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Cost Price</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {formatCurrency(selectedProduct.costPrice)}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Stock</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {selectedProduct.stock} {selectedProduct.unit}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Material</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.material}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Finish</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.finish}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Color</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.color}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Supplier</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.supplier}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Location</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.location}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Reorder Level</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.reorderLevel}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-5 py-4 sm:flex-row sm:justify-end">
//               <button
//                 onClick={() => setDeleteProduct(selectedProduct)}
//                 className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>
//               <button
//                 onClick={() =>
//                   router.push(`/furniture/products/${selectedProduct.id}`)
//                 }
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
//               >
//                 Open Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation */}
//       {deleteProduct && (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
//               !
//             </div>

//             <h2 className="mt-4 text-lg font-bold text-[#222]">Delete Product?</h2>

//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Are you sure you want to delete{" "}
//               <span className="font-semibold text-gray-700">
//                 {deleteProduct.name}
//               </span>
//               ? This action cannot be undone.
//             </p>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setDeleteProduct(null)}
//                 className="rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 disabled={deleting}
//                 className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//               >
//                 {deleting ? "Deleting..." : "Delete Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   getAllProducts,
//   deleteProduct as deleteProductFromDb,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus =
//   | "In Stock"
//   | "Low Stock"
//   | "Out of Stock"
//   | "Inactive"
//   | "Published"
//   | "Draft"
//   | "Archived";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subcategory: string;
//   material: string;
//   finish: string;
//   color: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   supplier: string;
//   location: string;
//   image: string;
//   updatedAt: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = (p.status as ProductStatus) || "In Stock";
//   if (!p.status || p.status === "Published") {
//     if (stock === 0) status = "Out of Stock";
//     else if (stock <= reorder) status = "Low Stock";
//     else status = "In Stock";
//   }

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subcategory: p.subcategory || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=60",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : p.createdAt?.toDate
//         ? p.createdAt.toDate().toISOString().slice(0, 10)
//         : "—",
//   };
// }

// const categories = [
//   "All Categories",
//   "Sofa",
//   "Bed",
//   "Dining Table",
//   "Chair",
//   "Wardrobe",
//   "TV Unit",
//   "Study Table",
//   "Office Furniture",
//   "Kitchen",
// ];

// const statuses = [
//   "All Status",
//   "In Stock",
//   "Low Stock",
//   "Out of Stock",
//   "Inactive",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function getStatusClasses(status: ProductStatus) {
//   switch (status) {
//     case "In Stock":
//     case "Published":
//       return "bg-[#eaf5f1] text-[#176b5b]";
//     case "Low Stock":
//       return "bg-[#fff5df] text-[#a36a00]";
//     case "Out of Stock":
//       return "bg-[#fdecec] text-[#b42318]";
//     case "Inactive":
//     case "Draft":
//     case "Archived":
//       return "bg-gray-100 text-gray-500";
//     default:
//       return "bg-gray-100 text-gray-500";
//   }
// }

// export default function ProductsPage() {
//   const router = useRouter();

//   const [products, setProducts] = useState<UiProduct[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Categories");
//   const [status, setStatus] = useState("All Status");
//   const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
//   const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(
//     null
//   );
//   const [deleteProduct, setDeleteProduct] = useState<UiProduct | null>(null);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getAllProducts();
//         if (!cancelled) setProducts(data.map(mapToUi));
//       } catch (err) {
//         console.error("Failed to load products:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // Prefer grid on small screens
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 1023px)");
//     const apply = () => {
//       if (mq.matches) setViewMode("grid");
//     };
//     apply();
//     mq.addEventListener("change", apply);
//     return () => mq.removeEventListener("change", apply);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         category === "All Categories" || product.category === category;

//       const matchesStatus =
//         status === "All Status" || product.status === status;

//       return matchesSearch && matchesCategory && matchesStatus;
//     });
//   }, [products, search, category, status]);

//   const totalProducts = products.length;
//   const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
//   const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
//   const outOfStockCount = products.filter(
//     (p) => p.status === "Out of Stock"
//   ).length;
//   const inventoryValue = products.reduce(
//     (sum, p) => sum + p.costPrice * p.stock,
//     0
//   );

//   const handleDelete = async () => {
//     if (!deleteProduct) return;
//     setDeleting(true);
//     try {
//       await deleteProductFromDb(deleteProduct.id);
//       setProducts((current) =>
//         current.filter((p) => p.id !== deleteProduct.id)
//       );
//       setDeleteProduct(null);
//       setSelectedProduct(null);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product. Please try again.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const clearFilters = () => {
//     setSearch("");
//     setCategory("All Categories");
//     setStatus("All Status");
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       {/* <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
//           <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <div className="min-w-0">
//               <div className="mb-1 flex items-center gap-2 text-xs text-gray-500 sm:mb-2 sm:text-sm">
//                 <button
//                   type="button"
//                   onClick={() => router.push("/furniture/dashboard")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Furniture
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">Products</span>
//               </div>

//               <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
//                 Products & Inventory
//               </h1>

//               <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                 Manage furniture products, stock, pricing and inventory.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={() => router.push("/furniture/products/new")}
//               className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548] sm:w-auto"
//             >
//               <span className="text-lg leading-none">+</span>
//               Add Product
//             </button>
//           </div>
//         </div>
//       </div> */}

//       <div className="border-b border-[#e4e2da] bg-white">
//   <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
//     <div className="mb-1 flex items-center gap-2 text-xs text-gray-500 sm:mb-2 sm:text-sm">
//       <button
//         type="button"
//         onClick={() => router.push("/furniture/dashboard")}
//         className="hover:text-[#176b5b]"
//       >
//         Furniture
//       </button>
//       <span>/</span>
//       <span className="text-gray-700">Products</span>
//     </div>

//     {/* Title + button on the same row */}
//     <div className="flex items-start justify-between gap-3">
//       <div className="min-w-0 flex-1">
//         <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
//           Products & Inventory
//         </h1>
//         <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//           Manage furniture products, stock, pricing and inventory.
//         </p>
//       </div>

//       <button
//         type="button"
//         onClick={() => router.push("/furniture/products/new")}
//         className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125548] sm:gap-2 sm:px-5 sm:text-sm"
//       >
//         <span className="text-base leading-none sm:text-lg">+</span>
//         <span className="hidden xs:inline sm:inline">Add Product</span>
//         {/* <span className="sm:hidden">Add</span> */}
//       </button>
//     </div>
//   </div>
// </div>

//       <main className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
//         {/* Summary — 2 per row on mobile */}
//         <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-4">
//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//             <div className="flex items-center justify-between gap-2">
//               <div className="min-w-0">
//                 <p className="truncate text-[11px] text-gray-500 sm:text-sm">
//                   Total Products
//                 </p>
//                 <p className="mt-1 text-lg font-bold text-[#222] sm:mt-2 sm:text-2xl">
//                   {totalProducts}
//                 </p>
//               </div>
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
//                 P
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//             <div className="flex items-center justify-between gap-2">
//               <div className="min-w-0">
//                 <p className="truncate text-[11px] text-gray-500 sm:text-sm">
//                   Total Stock
//                 </p>
//                 <p className="mt-1 text-lg font-bold text-[#222] sm:mt-2 sm:text-2xl">
//                   {totalStock}
//                 </p>
//                 <p className="mt-0.5 hidden text-xs text-gray-400 sm:block">
//                   Units available
//                 </p>
//               </div>
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
//                 S
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//             <div className="flex items-center justify-between gap-2">
//               <div className="min-w-0">
//                 <p className="truncate text-[11px] text-gray-500 sm:text-sm">
//                   Low Stock
//                 </p>
//                 <p className="mt-1 text-lg font-bold text-[#a36a00] sm:mt-2 sm:text-2xl">
//                   {lowStockCount}
//                 </p>
//                 <p className="mt-0.5 hidden text-xs text-gray-400 sm:block">
//                   Need attention
//                 </p>
//               </div>
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff5df] text-sm text-[#a36a00] sm:h-11 sm:w-11">
//                 !
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
//             <div className="flex items-center justify-between gap-2">
//               <div className="min-w-0">
//                 <p className="truncate text-[11px] text-gray-500 sm:text-sm">
//                   Inventory Value
//                 </p>
//                 <p className="mt-1 truncate text-base font-bold text-[#222] sm:mt-2 sm:text-2xl">
//                   {formatCurrency(inventoryValue)}
//                 </p>
//                 <p className="mt-0.5 hidden text-xs text-gray-400 sm:block">
//                   At cost price
//                 </p>
//               </div>
//               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
//                 ₹
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white p-3 sm:mt-6 sm:p-4">
//           <div className="flex flex-col gap-3">
//             <div className="relative">
//               <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 ⌕
//               </span>
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search name, code, category..."
//                 className="h-11 w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="h-11 rounded-lg border border-[#d9d7cf] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {categories.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="h-11 rounded-lg border border-[#d9d7cf] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
//               >
//                 {statuses.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               <div className="col-span-2 flex items-center justify-between gap-2 sm:col-span-1">
//                 <p className="text-xs text-gray-500 sm:text-sm">
//                   <span className="font-semibold text-gray-700">
//                     {filteredProducts.length}
//                   </span>
//                   /{products.length}
//                 </p>

//                 <div className="flex rounded-lg border border-[#d9d7cf] bg-white p-1">
//                   <button
//                     type="button"
//                     onClick={() => setViewMode("table")}
//                     className={`min-h-[32px] rounded-md px-3 py-1.5 text-xs font-medium ${
//                       viewMode === "table"
//                         ? "bg-[#176b5b] text-white"
//                         : "text-gray-500 hover:bg-gray-50"
//                     }`}
//                   >
//                     Table
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setViewMode("grid")}
//                     className={`min-h-[32px] rounded-md px-3 py-1.5 text-xs font-medium ${
//                       viewMode === "grid"
//                         ? "bg-[#176b5b] text-white"
//                         : "text-gray-500 hover:bg-gray-50"
//                     }`}
//                   >
//                     Grid
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Empty */}
//         {filteredProducts.length === 0 && (
//           <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white px-4 py-12 text-center sm:mt-6 sm:px-6 sm:py-14">
//             <h3 className="text-base font-bold text-[#222] sm:text-lg">
//               No products found
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">
//               {products.length === 0
//                 ? "No products yet. Tap Add Product to create one."
//                 : "Try changing search or filters."}
//             </p>
//             {products.length > 0 && (
//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="mt-5 min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>
//         )}

//         {/* Table View — horizontal scroll on mobile */}
//         {viewMode === "table" && filteredProducts.length > 0 && (
//           <div className="mt-4 overflow-hidden rounded-xl border border-[#e4e2da] bg-white sm:mt-6">
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[900px] text-left">
//                 <thead className="border-b border-[#e4e2da] bg-[#fafaf8]">
//                   <tr>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Product
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Category
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Material
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Price
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Stock
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Status
//                     </th>
//                     <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-[#eeece5]">
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-4 py-3 sm:px-5 sm:py-4">
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="h-11 w-11 rounded-lg border border-[#e4e2da] object-cover sm:h-12 sm:w-12"
//                           />
//                           <div className="min-w-0">
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 router.push(
//                                   `/furniture/products/${product.id}`
//                                 )
//                               }
//                               className="text-left text-sm font-semibold text-[#222] hover:text-[#176b5b]"
//                             >
//                               {product.name}
//                             </button>
//                             <p className="mt-0.5 text-xs text-gray-400">
//                               {product.code}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5">
//                         <p className="text-sm font-medium text-gray-700">
//                           {product.category}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {product.subcategory}
//                         </p>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5">
//                         <p className="text-sm text-gray-700">
//                           {product.material}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           {product.finish}
//                         </p>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5">
//                         <p className="text-sm font-semibold text-gray-800">
//                           {formatCurrency(product.sellingPrice)}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Cost {formatCurrency(product.costPrice)}
//                         </p>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5">
//                         <p
//                           className={`text-sm font-semibold ${
//                             product.stock === 0
//                               ? "text-red-600"
//                               : product.stock <= product.reorderLevel
//                                 ? "text-[#a36a00]"
//                                 : "text-gray-800"
//                           }`}
//                         >
//                           {product.stock} {product.unit}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-400">
//                           Reorder at {product.reorderLevel}
//                         </p>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5">
//                         <span
//                           className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>
//                       {/* <td className="px-4 py-3 sm:px-5">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             type="button"
//                             onClick={() =>
//                               router.push(`/furniture/products/${product.id}`)
//                             }
//                             className="min-h-[36px] rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             View
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => setSelectedProduct(product)}
//                             className="min-h-[36px] rounded-lg border border-[#d9d7cf] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             More
//                           </button>
//                         </div>
//                       </td> */}

//                       <td className="px-4 py-3 sm:px-5">
//                         <div className="flex flex-nowrap items-center justify-end gap-1.5 sm:gap-2">
//                           <button
//                             type="button"
//                             onClick={() =>
//                               router.push(`/furniture/products/${product.id}`)
//                             }
//                             className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-[#d9d7cf] px-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 sm:h-9 sm:px-3"
//                           >
//                             View
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => setSelectedProduct(product)}
//                             className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-[#d9d7cf] px-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 sm:h-9 sm:px-3"
//                           >
//                             More
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
//               <div className="flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:justify-between">
//                 <span>
//                   {filteredProducts.length} product
//                   {filteredProducts.length !== 1 ? "s" : ""}
//                 </span>
//                 <span>
//                   {outOfStockCount} out of stock · {lowStockCount} low stock
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Grid View — always 2 per row on mobile */}
//         {viewMode === "grid" && filteredProducts.length > 0 && (
//           <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="overflow-hidden rounded-xl border border-[#e4e2da] bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
//               >
//                 <div className="relative aspect-[4/3] bg-[#f3f3ef] sm:h-44 sm:aspect-auto">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover"
//                   />
//                   <span
//                     className={`absolute right-1.5 top-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs ${getStatusClasses(
//                       product.status
//                     )}`}
//                   >
//                     {product.status}
//                   </span>
//                 </div>

//                 <div className="p-2.5 sm:p-4">
//                   <p className="truncate text-[10px] font-medium text-gray-400 sm:text-xs">
//                     {product.code}
//                   </p>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       router.push(`/furniture/products/${product.id}`)
//                     }
//                     className="mt-0.5 line-clamp-2 text-left text-[13px] font-bold leading-snug text-[#222] hover:text-[#176b5b] sm:mt-1 sm:text-base"
//                   >
//                     {product.name}
//                   </button>

//                   <p className="mt-1 truncate text-[11px] font-semibold text-[#176b5b] sm:mt-2 sm:text-base">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>

//                   <p className="mt-0.5 truncate text-[10px] text-gray-500 sm:mt-1 sm:text-sm">
//                     {product.category}
//                     {product.subcategory ? ` · ${product.subcategory}` : ""}
//                   </p>

//                   <div className="mt-2 grid grid-cols-1 gap-1.5 sm:mt-3 sm:grid-cols-2 sm:gap-2">
//                     <div className="rounded-lg bg-[#fafaf8] px-2 py-1.5 sm:p-2.5">
//                       <p className="text-[10px] text-gray-400">Stock</p>
//                       <p className="mt-0.5 text-xs font-semibold text-gray-800 sm:text-sm">
//                         {product.stock} {product.unit}
//                       </p>
//                     </div>
//                     <div className="hidden rounded-lg bg-[#fafaf8] p-2.5 sm:block">
//                       <p className="text-[10px] text-gray-400">Material</p>
//                       <p className="mt-0.5 truncate text-xs font-semibold text-gray-800 sm:text-sm">
//                         {product.material}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-2 flex flex-col gap-1.5 sm:mt-3 sm:flex-row sm:gap-2">
//                     <button
//                       type="button"
//                       onClick={() =>
//                         router.push(`/furniture/products/${product.id}`)
//                       }
//                       className="min-h-[36px] flex-1 rounded-lg bg-[#176b5b] px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-[#125548] sm:min-h-[40px] sm:text-sm"
//                     >
//                       View
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setSelectedProduct(product)}
//                       className="min-h-[36px] rounded-lg border border-[#d9d7cf] px-2 py-1.5 text-[11px] font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[40px] sm:px-3 sm:text-sm"
//                     >
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* More Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4">
//           <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-xl sm:rounded-2xl">
//             <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-3 sm:px-5 sm:py-4">
//               <div className="min-w-0 pr-2">
//                 <p className="text-xs text-gray-400">{selectedProduct.code}</p>
//                 <h2 className="mt-0.5 truncate text-base font-bold text-[#222] sm:text-lg">
//                   {selectedProduct.name}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-4 p-4 sm:gap-6 sm:p-5 md:grid-cols-[180px_1fr]">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="h-40 w-full rounded-xl border border-[#e4e2da] object-cover sm:h-44"
//               />
//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span
//                     className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
//                       selectedProduct.status
//                     )}`}
//                   >
//                     {selectedProduct.status}
//                   </span>
//                   <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
//                     {selectedProduct.category}
//                   </span>
//                 </div>

//                 <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
//                   <div>
//                     <p className="text-xs text-gray-400">Selling Price</p>
//                     <p className="mt-1 text-sm font-bold text-[#176b5b]">
//                       {formatCurrency(selectedProduct.sellingPrice)}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Cost Price</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {formatCurrency(selectedProduct.costPrice)}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Stock</p>
//                     <p className="mt-1 text-sm font-semibold text-gray-800">
//                       {selectedProduct.stock} {selectedProduct.unit}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Material</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.material}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Finish</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.finish}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400">Color</p>
//                     <p className="mt-1 text-sm font-medium text-gray-800">
//                       {selectedProduct.color}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-3 sm:flex-row sm:justify-end sm:gap-3 sm:px-5 sm:py-4">
//               <button
//                 type="button"
//                 onClick={() => setDeleteProduct(selectedProduct)}
//                 className="min-h-[44px] rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>
//               <button
//                 type="button"
//                 onClick={() =>
//                   router.push(`/furniture/products/${selectedProduct.id}`)
//                 }
//                 className="min-h-[44px] rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
//               >
//                 Open Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation */}
//       {deleteProduct && (
//         <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4">
//           <div className="w-full max-w-md rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl sm:p-6">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
//               !
//             </div>
//             <h2 className="mt-4 text-lg font-bold text-[#222]">
//               Delete Product?
//             </h2>
//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Delete{" "}
//               <span className="font-semibold text-gray-700">
//                 {deleteProduct.name}
//               </span>
//               ? This cannot be undone.
//             </p>
//             <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => setDeleteProduct(null)}
//                 className="min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleDelete}
//                 disabled={deleting}
//                 className="min-h-[44px] rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//               >
//                 {deleting ? "Deleting..." : "Delete Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAllProducts,
  deleteProduct as deleteProductFromDb,
  type FurnitureProduct,
} from "@/modules/furniture/services/productService";

type ProductStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock"
  | "Inactive"
  | "Published"
  | "Draft"
  | "Archived";

type UiProduct = {
  id: string;
  code: string;
  name: string;
  category: string;
  subcategory: string;
  material: string;
  finish: string;
  color: string;
  sellingPrice: number;
  costPrice: number;
  stock: number;
  unit: string;
  reorderLevel: number;
  status: ProductStatus;
  supplier: string;
  location: string;
  image: string;
  updatedAt: string;
};

function mapToUi(p: FurnitureProduct): UiProduct {
  const stock = p.stock ?? 0;
  const reorder = p.reorderLevel ?? p.minStock ?? 3;
  let status: ProductStatus = (p.status as ProductStatus) || "In Stock";
  if (!p.status || p.status === "Published") {
    if (stock === 0) status = "Out of Stock";
    else if (stock <= reorder) status = "Low Stock";
    else status = "In Stock";
  }
  return {
    id: p.id,
    code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
    name: p.name || "Untitled Product",
    category: p.category || "—",
    subcategory: p.subcategory || "",
    material: p.material || "—",
    finish: p.finish || "—",
    color: p.color || "—",
    sellingPrice: p.sellingPrice ?? p.price ?? 0,
    costPrice: p.costPrice ?? 0,
    stock,
    unit: p.unit || "Nos",
    reorderLevel: reorder,
    status,
    supplier: p.supplier || "—",
    location: p.location || p.warehouseLocation || "—",
    image:
      p.imageUrl ||
      p.image ||
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=60",
    updatedAt: p.updatedAt?.toDate
      ? p.updatedAt.toDate().toISOString().slice(0, 10)
      : p.createdAt?.toDate
        ? p.createdAt.toDate().toISOString().slice(0, 10)
        : "—",
  };
}

const categories = [
  "All Categories",
  "Sofa",
  "Bed",
  "Dining Table",
  "Chair",
  "Wardrobe",
  "TV Unit",
  "Study Table",
  "Office Furniture",
  "Kitchen",
];

const statuses = [
  "All Status",
  "In Stock",
  "Low Stock",
  "Out of Stock",
  "Inactive",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function getStatusClasses(status: ProductStatus) {
  switch (status) {
    case "In Stock":
    case "Published":
      return "bg-[#eaf5f1] text-[#176b5b]";
    case "Low Stock":
      return "bg-[#fff5df] text-[#a36a00]";
    case "Out of Stock":
      return "bg-[#fdecec] text-[#b42318]";
    case "Inactive":
    case "Draft":
    case "Archived":
      return "bg-gray-100 text-gray-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
}

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<UiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
  const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(
    null
  );
  const [deleteProduct, setDeleteProduct] = useState<UiProduct | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const data = await getAllProducts();
        if (!cancelled) setProducts(data.map(mapToUi));
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const apply = () => {
      if (mq.matches) setViewMode("grid");
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const filteredProducts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.code.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.material.toLowerCase().includes(searchValue);
      const matchesCategory =
        category === "All Categories" || product.category === category;
      const matchesStatus =
        status === "All Status" || product.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, search, category, status]);

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
  const outOfStockCount = products.filter(
    (p) => p.status === "Out of Stock"
  ).length;
  const inventoryValue = products.reduce(
    (sum, p) => sum + p.costPrice * p.stock,
    0
  );

  const handleDelete = async () => {
    if (!deleteProduct) return;
    setDeleting(true);
    try {
      await deleteProductFromDb(deleteProduct.id);
      setProducts((current) =>
        current.filter((p) => p.id !== deleteProduct.id)
      );
      setDeleteProduct(null);
      setSelectedProduct(null);
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete product. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setStatus("All Status");
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="mb-1 flex items-center gap-2 text-xs text-gray-500 sm:mb-2 sm:text-sm">
            <button
              type="button"
              onClick={() => router.push("/furniture/dashboard")}
              className="hover:text-[#176b5b]"
            >
              Furniture
            </button>
            <span>/</span>
            <span className="text-gray-700">Products</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
                Products & Inventory
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Manage furniture products, stock, pricing and inventory.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/furniture/products/new")}
              className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#125548] sm:gap-2 sm:px-5 sm:text-sm"
            >
              <span className="text-base leading-none sm:text-lg">+</span>
              <span className="hidden xs:inline sm:inline">Add Product</span>
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1550px] px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-4">
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-[11px] text-gray-500 sm:text-sm">
                  Total Products
                </p>
                <p className="mt-1 text-lg font-bold text-[#222] sm:mt-2 sm:text-2xl">
                  {totalProducts}
                </p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
                P
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-[11px] text-gray-500 sm:text-sm">
                  Total Stock
                </p>
                <p className="mt-1 text-lg font-bold text-[#222] sm:mt-2 sm:text-2xl">
                  {totalStock}
                </p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
                S
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-[11px] text-gray-500 sm:text-sm">
                  Low Stock
                </p>
                <p className="mt-1 text-lg font-bold text-[#a36a00] sm:mt-2 sm:text-2xl">
                  {lowStockCount}
                </p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff5df] text-sm text-[#a36a00] sm:h-11 sm:w-11">
                !
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-[11px] text-gray-500 sm:text-sm">
                  Inventory Value
                </p>
                <p className="mt-1 truncate text-base font-bold text-[#222] sm:mt-2 sm:text-2xl">
                  {formatCurrency(inventoryValue)}
                </p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef5f2] text-sm text-[#176b5b] sm:h-11 sm:w-11">
                ₹
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white p-3 sm:mt-6 sm:p-4">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, code, category..."
                className="h-11 w-full rounded-lg border border-[#d9d7cf] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 rounded-lg border border-[#d9d7cf] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-11 rounded-lg border border-[#d9d7cf] bg-white px-3 text-sm outline-none focus:border-[#176b5b]"
              >
                {statuses.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="col-span-2 flex items-center justify-between gap-2 sm:col-span-1">
                <p className="text-xs text-gray-500 sm:text-sm">
                  <span className="font-semibold text-gray-700">
                    {filteredProducts.length}
                  </span>
                  /{products.length}
                </p>
                <div className="flex rounded-lg border border-[#d9d7cf] bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("table")}
                    className={`min-h-[32px] rounded-md px-3 py-1.5 text-xs font-medium ${
                      viewMode === "table"
                        ? "bg-[#176b5b] text-white"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Table
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`min-h-[32px] rounded-md px-3 py-1.5 text-xs font-medium ${
                      viewMode === "grid"
                        ? "bg-[#176b5b] text-white"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Grid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-4 rounded-xl border border-[#e4e2da] bg-white px-4 py-12 text-center sm:mt-6 sm:px-6 sm:py-14">
            <h3 className="text-base font-bold text-[#222] sm:text-lg">
              No products found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {products.length === 0
                ? "No products yet. Tap Add Product to create one."
                : "Try changing search or filters."}
            </p>
            {products.length > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {viewMode === "table" && filteredProducts.length > 0 && (
          <div className="mt-4 overflow-hidden rounded-xl border border-[#e4e2da] bg-white sm:mt-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="border-b border-[#e4e2da] bg-[#fafaf8]">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Product
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Category
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Material
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Price
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Stock
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eeece5]">
                  {filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="transition hover:bg-[#fafaf8]"
                    >
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-11 w-11 rounded-lg border border-[#e4e2da] object-cover sm:h-12 sm:w-12"
                          />
                          <div className="min-w-0">
                            <button
                              type="button"
                              onClick={() =>
                                router.push(
                                  `/furniture/products/${product.id}`
                                )
                              }
                              className="text-left text-sm font-semibold text-[#222] hover:text-[#176b5b]"
                            >
                              {product.name}
                            </button>
                            <p className="mt-0.5 text-xs text-gray-400">
                              {product.code}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <p className="text-sm font-medium text-gray-700">
                          {product.category}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {product.subcategory}
                        </p>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <p className="text-sm text-gray-700">
                          {product.material}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {product.finish}
                        </p>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <p className="text-sm font-semibold text-gray-800">
                          {formatCurrency(product.sellingPrice)}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          Cost {formatCurrency(product.costPrice)}
                        </p>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <p
                          className={`text-sm font-semibold ${
                            product.stock === 0
                              ? "text-red-600"
                              : product.stock <= product.reorderLevel
                                ? "text-[#a36a00]"
                                : "text-gray-800"
                          }`}
                        >
                          {product.stock} {product.unit}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          Reorder at {product.reorderLevel}
                        </p>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <div className="flex flex-nowrap items-center justify-end gap-1.5 sm:gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              router.push(`/furniture/products/${product.id}`)
                            }
                            className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-[#d9d7cf] px-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 sm:h-9 sm:px-3"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                            className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-[#d9d7cf] px-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 sm:h-9 sm:px-3"
                          >
                            More
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:justify-between">
                <span>
                  {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </span>
                <span>
                  {outOfStockCount} out of stock · {lowStockCount} low stock
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Grid — 2 per row on mobile */}
        {viewMode === "grid" && filteredProducts.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-0 overflow-hidden rounded-xl border border-[#e4e2da] bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-[#f3f3ef]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <span
                    className={`absolute right-1.5 top-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs ${getStatusClasses(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="p-2.5 sm:p-4">
                  <p className="truncate text-[10px] font-medium text-gray-400 sm:text-xs">
                    {product.code}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/furniture/products/${product.id}`)
                    }
                    className="mt-0.5 line-clamp-2 w-full text-left text-[13px] font-bold leading-snug text-[#222] hover:text-[#176b5b] sm:mt-1 sm:text-base"
                  >
                    {product.name}
                  </button>
                  <p className="mt-1 truncate text-[11px] font-semibold text-[#176b5b] sm:mt-2 sm:text-base">
                    {formatCurrency(product.sellingPrice)}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-gray-500 sm:mt-1 sm:text-sm">
                    {product.category}
                    {product.subcategory ? ` · ${product.subcategory}` : ""}
                  </p>
                  <div className="mt-2 rounded-lg bg-[#fafaf8] px-2 py-1.5 sm:mt-3">
                    <p className="text-[10px] text-gray-400">Stock</p>
                    <p className="mt-0.5 truncate text-xs font-semibold text-gray-800 sm:text-sm">
                      {product.stock} {product.unit}
                    </p>
                  </div>
                  {/* <div className="mt-2 flex flex-col gap-1.5 sm:mt-3 sm:flex-row sm:gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        router.push(`/furniture/products/${product.id}`)
                      }
                      className="min-h-[36px] w-full flex-1 rounded-lg bg-[#176b5b] px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-[#125548] sm:min-h-[40px] sm:text-sm"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="min-h-[36px] w-full rounded-lg border border-[#d9d7cf] px-2 py-1.5 text-[11px] font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[40px] sm:w-auto sm:px-3 sm:text-sm"
                    >
                      More
                    </button>
                  </div> */}

                  <div className="mt-2 flex flex-row gap-1.5 sm:mt-3 sm:gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        router.push(`/furniture/products/${product.id}`)
                      }
                      className="min-h-[36px] min-w-0 flex-1 rounded-lg bg-[#176b5b] px-2 py-1.5 text-[11px] font-semibold text-white hover:bg-[#125548] sm:min-h-[40px] sm:text-sm"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="min-h-[36px] min-w-0 flex-1 rounded-lg border border-[#d9d7cf] px-2 py-1.5 text-[11px] font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[40px] sm:text-sm"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-xl sm:rounded-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[#e4e2da] bg-white px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0 pr-2">
                <p className="text-xs text-gray-400">{selectedProduct.code}</p>
                <h2 className="mt-0.5 truncate text-base font-bold text-[#222] sm:text-lg">
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 sm:gap-6 sm:p-5 md:grid-cols-[180px_1fr]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-40 w-full rounded-xl border border-[#e4e2da] object-cover sm:h-44"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClasses(
                      selectedProduct.status
                    )}`}
                  >
                    {selectedProduct.status}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                    {selectedProduct.category}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-gray-400">Selling Price</p>
                    <p className="mt-1 text-sm font-bold text-[#176b5b]">
                      {formatCurrency(selectedProduct.sellingPrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Cost Price</p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      {formatCurrency(selectedProduct.costPrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Stock</p>
                    <p className="mt-1 text-sm font-semibold text-gray-800">
                      {selectedProduct.stock} {selectedProduct.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Material</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {selectedProduct.material}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Finish</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {selectedProduct.finish}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Color</p>
                    <p className="mt-1 text-sm font-medium text-gray-800">
                      {selectedProduct.color}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-3 sm:flex-row sm:justify-end sm:gap-3 sm:px-5 sm:py-4">
              <button
                type="button"
                onClick={() => setDeleteProduct(selectedProduct)}
                className="min-h-[44px] rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                Delete Product
              </button>
              <button
                type="button"
                onClick={() =>
                  router.push(`/furniture/products/${selectedProduct.id}`)
                }
                className="min-h-[44px] rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125548]"
              >
                Open Product
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteProduct && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4">
          <div className="w-full max-w-md rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              !
            </div>
            <h2 className="mt-4 text-lg font-bold text-[#222]">
              Delete Product?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Delete{" "}
              <span className="font-semibold text-gray-700">
                {deleteProduct.name}
              </span>
              ? This cannot be undone.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                type="button"
                onClick={() => setDeleteProduct(null)}
                className="min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="min-h-[44px] rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Delete Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
