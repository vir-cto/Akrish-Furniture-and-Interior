// "use client";

// import { useMemo, useState } from "react";

// type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

// type Product = {
//   id: number;
//   code: string;
//   name: string;
//   category: string;
//   material: string;
//   price: number;
//   stock: number;
//   reorderLevel: number;
//   unit: string;
//   location: string;
//   status: StockStatus;
//   updatedAt: string;
// };

// const categories = [
//   "All Categories",
//   "Sofas",
//   "Beds",
//   "Dining",
//   "Wardrobes",
//   "Chairs",
//   "Tables",
//   "Kitchen",
//   "Office Furniture",
//   "Other",
// ];

// const locations = [
//   "Main Warehouse",
//   "Showroom",
//   "Workshop",
//   "Kitchen Unit",
// ];

// const initialProducts: Product[] = [
//   {
//     id: 1,
//     code: "SOF-001",
//     name: "Modern 3 Seater Sofa",
//     category: "Sofas",
//     material: "Fabric",
//     price: 42000,
//     stock: 12,
//     reorderLevel: 5,
//     unit: "pcs",
//     location: "Showroom",
//     status: "In Stock",
//     updatedAt: "2026-10-06",
//   },
//   {
//     id: 2,
//     code: "BED-002",
//     name: "King Size Wooden Bed",
//     category: "Beds",
//     material: "Teak Wood",
//     price: 58000,
//     stock: 4,
//     reorderLevel: 5,
//     unit: "pcs",
//     location: "Main Warehouse",
//     status: "Low Stock",
//     updatedAt: "2026-10-05",
//   },
//   {
//     id: 3,
//     code: "DIN-003",
//     name: "6 Seater Dining Table",
//     category: "Dining",
//     material: "Engineered Wood",
//     price: 35000,
//     stock: 0,
//     reorderLevel: 3,
//     unit: "pcs",
//     location: "Main Warehouse",
//     status: "Out of Stock",
//     updatedAt: "2026-10-04",
//   },
//   {
//     id: 4,
//     code: "WRD-004",
//     name: "Sliding Door Wardrobe",
//     category: "Wardrobes",
//     material: "MDF",
//     price: 46000,
//     stock: 7,
//     reorderLevel: 4,
//     unit: "pcs",
//     location: "Showroom",
//     status: "In Stock",
//     updatedAt: "2026-10-04",
//   },
//   {
//     id: 5,
//     code: "CHR-005",
//     name: "Accent Lounge Chair",
//     category: "Chairs",
//     material: "Fabric",
//     price: 12500,
//     stock: 18,
//     reorderLevel: 6,
//     unit: "pcs",
//     location: "Showroom",
//     status: "In Stock",
//     updatedAt: "2026-10-03",
//   },
//   {
//     id: 6,
//     code: "TBL-006",
//     name: "Executive Office Table",
//     category: "Tables",
//     material: "Oak Wood",
//     price: 28000,
//     stock: 3,
//     reorderLevel: 5,
//     unit: "pcs",
//     location: "Main Warehouse",
//     status: "Low Stock",
//     updatedAt: "2026-10-02",
//   },
//   {
//     id: 7,
//     code: "KIT-007",
//     name: "Modular Kitchen Unit",
//     category: "Kitchen",
//     material: "Plywood + Laminate",
//     price: 95000,
//     stock: 5,
//     reorderLevel: 2,
//     unit: "sets",
//     location: "Kitchen Unit",
//     status: "In Stock",
//     updatedAt: "2026-10-01",
//   },
//   {
//     id: 8,
//     code: "OFF-008",
//     name: "Ergonomic Office Chair",
//     category: "Office Furniture",
//     material: "Mesh + Metal",
//     price: 16500,
//     stock: 2,
//     reorderLevel: 4,
//     unit: "pcs",
//     location: "Main Warehouse",
//     status: "Low Stock",
//     updatedAt: "2026-09-30",
//   },
//   {
//     id: 9,
//     code: "SOF-009",
//     name: "L Shape Corner Sofa",
//     category: "Sofas",
//     material: "Leatherette",
//     price: 62000,
//     stock: 6,
//     reorderLevel: 3,
//     unit: "pcs",
//     location: "Showroom",
//     status: "In Stock",
//     updatedAt: "2026-09-29",
//   },
//   {
//     id: 10,
//     code: "TBL-010",
//     name: "Center Coffee Table",
//     category: "Tables",
//     material: "Solid Wood",
//     price: 14500,
//     stock: 0,
//     reorderLevel: 3,
//     unit: "pcs",
//     location: "Workshop",
//     status: "Out of Stock",
//     updatedAt: "2026-09-28",
//   },
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getStatusClasses(status: StockStatus) {
//   if (status === "In Stock") {
//     return "border-emerald-200 bg-emerald-50 text-emerald-700";
//   }

//   if (status === "Low Stock") {
//     return "border-amber-200 bg-amber-50 text-amber-700";
//   }

//   return "border-red-200 bg-red-50 text-red-700";
// }

// function getStockBarWidth(stock: number, reorderLevel: number) {
//   const max = Math.max(reorderLevel * 3, 10);

//   return Math.min((stock / max) * 100, 100);
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>

//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>

//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>

//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function InventoryPage() {
//   const [products, setProducts] = useState<Product[]>(initialProducts);

//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(
//     null
//   );

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     code: "",
//     category: "Sofas",
//     material: "",
//     price: "",
//     stock: "",
//     reorderLevel: "5",
//     unit: "pcs",
//     location: "Main Warehouse",
//   });

//   const totalProducts = products.length;

//   const totalUnits = products.reduce(
//     (total, product) => total + product.stock,
//     0
//   );

//   const inventoryValue = products.reduce(
//     (total, product) => total + product.price * product.stock,
//     0
//   );

//   const lowStockCount = products.filter(
//     (product) => product.status === "Low Stock"
//   ).length;

//   const outOfStockCount = products.filter(
//     (product) => product.status === "Out of Stock"
//   ).length;

//   const inStockCount = products.filter(
//     (product) => product.status === "In Stock"
//   ).length;

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         product.category === categoryFilter;

//       const matchesStatus =
//         statusFilter === "All" || product.status === statusFilter;

//       const matchesLocation =
//         locationFilter === "All" || product.location === locationFilter;

//       return (
//         matchesSearch &&
//         matchesCategory &&
//         matchesStatus &&
//         matchesLocation
//       );
//     });
//   }, [
//     products,
//     search,
//     categoryFilter,
//     statusFilter,
//     locationFilter,
//   ]);

//   const categorySummary = categories
//     .filter((category) => category !== "All Categories")
//     .map((category) => {
//       const categoryProducts = products.filter(
//         (product) => product.category === category
//       );

//       return {
//         category,
//         products: categoryProducts.length,
//         units: categoryProducts.reduce(
//           (total, product) => total + product.stock,
//           0
//         ),
//         value: categoryProducts.reduce(
//           (total, product) => total + product.price * product.stock,
//           0
//         ),
//       };
//     })
//     .filter((item) => item.products > 0);

//   const attentionProducts = products.filter(
//     (product) =>
//       product.status === "Low Stock" || product.status === "Out of Stock"
//   );

//   function calculateStatus(
//     stock: number,
//     reorderLevel: number
//   ): StockStatus {
//     if (stock <= 0) return "Out of Stock";
//     if (stock <= reorderLevel) return "Low Stock";
//     return "In Stock";
//   }

//   function handleAddProduct() {
//     const stock = Number(newProduct.stock);
//     const reorderLevel = Number(newProduct.reorderLevel);
//     const price = Number(newProduct.price);

//     if (
//       !newProduct.name.trim() ||
//       !newProduct.code.trim() ||
//       !newProduct.material.trim() ||
//       !price ||
//       price < 0
//     ) {
//       alert("Please enter all required product details.");
//       return;
//     }

//     if (stock < 0 || reorderLevel < 0) {
//       alert("Stock values cannot be negative.");
//       return;
//     }

//     const nextId =
//       products.length > 0
//         ? Math.max(...products.map((product) => product.id)) + 1
//         : 1;

//     const product: Product = {
//       id: nextId,
//       code: newProduct.code.trim().toUpperCase(),
//       name: newProduct.name.trim(),
//       category: newProduct.category,
//       material: newProduct.material.trim(),
//       price,
//       stock,
//       reorderLevel,
//       unit: newProduct.unit,
//       location: newProduct.location,
//       status: calculateStatus(stock, reorderLevel),
//       updatedAt: "2026-10-06",
//     };

//     setProducts((current) => [product, ...current]);

//     setNewProduct({
//       name: "",
//       code: "",
//       category: "Sofas",
//       material: "",
//       price: "",
//       stock: "",
//       reorderLevel: "5",
//       unit: "pcs",
//       location: "Main Warehouse",
//     });

//     setShowAddModal(false);
//   }

//   function increaseStock(productId: number) {
//     setProducts((current) =>
//       current.map((product) => {
//         if (product.id !== productId) return product;

//         const stock = product.stock + 1;

//         return {
//           ...product,
//           stock,
//           status: calculateStatus(stock, product.reorderLevel),
//           updatedAt: "2026-10-06",
//         };
//       })
//     );

//     setSelectedProduct((current) => {
//       if (!current || current.id !== productId) return current;

//       const stock = current.stock + 1;

//       return {
//         ...current,
//         stock,
//         status: calculateStatus(stock, current.reorderLevel),
//         updatedAt: "2026-10-06",
//       };
//     });
//   }

//   function decreaseStock(productId: number) {
//     setProducts((current) =>
//       current.map((product) => {
//         if (product.id !== productId) return product;

//         const stock = Math.max(product.stock - 1, 0);

//         return {
//           ...product,
//           stock,
//           status: calculateStatus(stock, product.reorderLevel),
//           updatedAt: "2026-10-06",
//         };
//       })
//     );

//     setSelectedProduct((current) => {
//       if (!current || current.id !== productId) return current;

//       const stock = Math.max(current.stock - 1, 0);

//       return {
//         ...current,
//         stock,
//         status: calculateStatus(stock, current.reorderLevel),
//         updatedAt: "2026-10-06",
//       };
//     });
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       {/* Header */}
//       <header className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9a5b18] text-lg font-bold text-white">
//               A
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-gray-900">
//                 Akrish
//               </p>

//               <p className="text-xs text-gray-500">
//                 Furniture and Interior
//               </p>
//             </div>
//           </div>

//           <div className="hidden items-center gap-2 rounded-xl bg-[#f7f7f4] px-4 py-2 text-sm text-gray-600 sm:flex">
//             <span>▣</span>
//             <span>Inventory</span>
//             <span className="text-gray-400">/</span>
//             <span className="font-medium text-gray-900">Stock</span>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         {/* Page heading */}
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Inventory Management
//             </p>

//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Inventory
//             </h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture products, stock levels and warehouse inventory.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             Add Product
//           </button>
//         </div>

//         {/* Summary cards */}
//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Products in catalog"
//             icon="▦"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />

//           <SummaryCard
//             title="Total Units"
//             value={totalUnits.toLocaleString("en-IN")}
//             subtitle="Available stock units"
//             icon="□"
//             iconClass="bg-blue-50 text-blue-700"
//           />

//           <SummaryCard
//             title="Inventory Value"
//             value={formatCurrency(inventoryValue)}
//             subtitle="Current stock value"
//             icon="₹"
//             iconClass="bg-purple-50 text-purple-700"
//           />

//           <SummaryCard
//             title="Low Stock"
//             value={String(lowStockCount)}
//             subtitle="Need replenishment"
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />

//           <SummaryCard
//             title="Out of Stock"
//             value={String(outOfStockCount)}
//             subtitle="Currently unavailable"
//             icon="×"
//             iconClass="bg-red-50 text-red-700"
//           />
//         </div>

//         {/* Main area */}
//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           {/* Products */}
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             {/* Filters */}
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>

//                   <input
//                     value={search}
//                     onChange={(event) => setSearch(event.target.value)}
//                     placeholder="Search product, code, category or material..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={categoryFilter}
//                     onChange={(event) =>
//                       setCategoryFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>

//                   <select
//                     value={statusFilter}
//                     onChange={(event) =>
//                       setStatusFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Stock Status</option>
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                   </select>

//                   <select
//                     value={locationFilter}
//                     onChange={(event) =>
//                       setLocationFilter(event.target.value)
//                     }
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Locations</option>

//                     {locations.map((location) => (
//                       <option key={location}>{location}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1050px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Product
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Category
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Material
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Price
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Stock
//                     </th>

//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Location
//                     </th>

//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Status
//                     </th>

//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div>
//                           <p className="text-xs font-semibold text-[#176b5b]">
//                             {product.code}
//                           </p>

//                           <p className="mt-1 font-medium text-gray-900">
//                             {product.name}
//                           </p>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4">
//                         <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
//                           {product.category}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-600">
//                         {product.material}
//                       </td>

//                       <td className="px-5 py-4 text-right text-sm font-semibold text-gray-900">
//                         {formatCurrency(product.price)}
//                       </td>

//                       <td className="px-5 py-4">
//                         <div className="min-w-[130px]">
//                           <div className="flex items-center justify-between gap-3">
//                             <span className="text-sm font-semibold text-gray-900">
//                               {product.stock} {product.unit}
//                             </span>

//                             <span className="text-xs text-gray-400">
//                               Min {product.reorderLevel}
//                             </span>
//                           </div>

//                           <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
//                             <div
//                               className={`h-full rounded-full ${
//                                 product.status === "Out of Stock"
//                                   ? "bg-red-500"
//                                   : product.status === "Low Stock"
//                                   ? "bg-amber-500"
//                                   : "bg-[#176b5b]"
//                               }`}
//                               style={{
//                                 width: `${getStockBarWidth(
//                                   product.stock,
//                                   product.reorderLevel
//                                 )}%`,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-5 py-4 text-sm text-gray-600">
//                         {product.location}
//                       </td>

//                       <td className="px-5 py-4 text-center">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>

//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => setSelectedProduct(product)}
//                           className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredProducts.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="px-5 py-14 text-center">
//                         <div className="text-3xl">⌕</div>

//                         <p className="mt-3 font-semibold text-gray-900">
//                           No products found
//                         </p>

//                         <p className="mt-1 text-sm text-gray-500">
//                           Try changing your search or filters.
//                         </p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Footer */}
//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-5 py-4">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {products.length}
//                 </span>{" "}
//                 products
//               </p>

//               <p className="hidden text-sm text-gray-500 sm:block">
//                 In stock:{" "}
//                 <span className="font-semibold text-emerald-700">
//                   {inStockCount}
//                 </span>
//               </p>
//             </div>
//           </section>

//           {/* Right sidebar */}
//           <aside className="space-y-6">
//             {/* Attention */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5 flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">
//                     Attention Needed
//                   </h2>

//                   <p className="mt-1 text-xs text-gray-500">
//                     Products requiring stock action
//                   </p>
//                 </div>

//                 <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
//                   {attentionProducts.length}
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {attentionProducts.map((product) => (
//                   <button
//                     key={product.id}
//                     onClick={() => setSelectedProduct(product)}
//                     className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                   >
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-medium text-gray-900">
//                           {product.name}
//                         </p>

//                         <p className="mt-1 text-xs text-gray-500">
//                           {product.code} · {product.location}
//                         </p>
//                       </div>

//                       <span
//                         className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${
//                           product.status === "Out of Stock"
//                             ? "bg-red-50 text-red-700"
//                             : "bg-amber-50 text-amber-700"
//                         }`}
//                       >
//                         {product.status === "Out of Stock"
//                           ? "Reorder"
//                           : "Low"}
//                       </span>
//                     </div>

//                     <div className="mt-3 flex items-center justify-between">
//                       <span className="text-xs text-gray-500">
//                         Current: {product.stock} {product.unit}
//                       </span>

//                       <span className="text-xs font-medium text-[#176b5b]">
//                         Min: {product.reorderLevel}
//                       </span>
//                     </div>
//                   </button>
//                 ))}

//                 {attentionProducts.length === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       Inventory levels look good.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Category summary */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">
//                   Category Summary
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Stock by furniture category
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {categorySummary.map((item) => (
//                   <div key={item.category}>
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-800">
//                           {item.category}
//                         </p>

//                         <p className="mt-0.5 text-xs text-gray-500">
//                           {item.products} product
//                           {item.products !== 1 ? "s" : ""} · {item.units} units
//                         </p>
//                       </div>

//                       <p className="text-sm font-semibold text-gray-900">
//                         {formatCurrency(item.value)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stock status */}
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">
//                 Stock Status
//               </h2>

//               <div className="mt-5 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//                     <span className="text-sm text-gray-600">
//                       In Stock
//                     </span>
//                   </div>

//                   <span className="font-semibold text-gray-900">
//                     {inStockCount}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
//                     <span className="text-sm text-gray-600">
//                       Low Stock
//                     </span>
//                   </div>

//                   <span className="font-semibold text-gray-900">
//                     {lowStockCount}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
//                     <span className="text-sm text-gray-600">
//                       Out of Stock
//                     </span>
//                   </div>

//                   <span className="font-semibold text-gray-900">
//                     {outOfStockCount}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Add Product Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Add Product
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Add a new furniture product to inventory.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product Name
//                 </label>

//                 <input
//                   value={newProduct.name}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       name: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product Code
//                 </label>

//                 <input
//                   value={newProduct.code}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       code: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. SOF-011"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>

//                 <select
//                   value={newProduct.category}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       category: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter((category) => category !== "All Categories")
//                     .map((category) => (
//                       <option key={category}>{category}</option>
//                     ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Material
//                 </label>

//                 <input
//                   value={newProduct.material}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       material: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Teak Wood"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Selling Price
//                 </label>

//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>

//                   <input
//                     type="number"
//                     min="0"
//                     value={newProduct.price}
//                     onChange={(event) =>
//                       setNewProduct({
//                         ...newProduct,
//                         price: event.target.value,
//                       })
//                     }
//                     placeholder="0"
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Current Stock
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.stock}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       stock: event.target.value,
//                     })
//                   }
//                   placeholder="0"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Reorder Level
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.reorderLevel}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       reorderLevel: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Unit
//                 </label>

//                 <select
//                   value={newProduct.unit}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       unit: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="pcs">Pieces</option>
//                   <option value="sets">Sets</option>
//                   <option value="units">Units</option>
//                   <option value="sqft">Sq.ft</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Location
//                 </label>

//                 <select
//                   value={newProduct.location}
//                   onChange={(event) =>
//                     setNewProduct({
//                       ...newProduct,
//                       location: event.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {locations.map((location) => (
//                     <option key={location}>{location}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAddProduct}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748]"
//               >
//                 Save Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Product Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedProduct.code}
//                 </p>

//                 <h2 className="mt-1 text-xl font-bold text-gray-900">
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

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Category</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.category}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Material</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.material}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Selling Price</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {formatCurrency(selectedProduct.price)}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Location</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.location}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Current Stock</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.stock} {selectedProduct.unit}
//                 </p>
//               </div>

//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Reorder Level</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.reorderLevel} {selectedProduct.unit}
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-gray-500">Stock Status</p>

//                       <span
//                         className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                           selectedProduct.status
//                         )}`}
//                       >
//                         {selectedProduct.status}
//                       </span>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-xs text-gray-500">
//                         Last Updated
//                       </p>

//                       <p className="mt-1 text-sm font-medium text-gray-900">
//                         {formatDate(selectedProduct.updatedAt)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Stock controls */}
//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="mb-3 text-sm font-semibold text-gray-900">
//                     Quick Stock Update
//                   </p>

//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() =>
//                         decreaseStock(selectedProduct.id)
//                       }
//                       disabled={selectedProduct.stock === 0}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
//                     >
//                       −
//                     </button>

//                     <div className="flex-1 rounded-xl bg-[#fafaf8] py-2.5 text-center">
//                       <p className="text-sm font-bold text-gray-900">
//                         {selectedProduct.stock}{" "}
//                         {selectedProduct.unit}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() =>
//                         increaseStock(selectedProduct.id)
//                       }
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
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
//   updateProduct,
//   createProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   material: string;
//   price: number;
//   stock: number;
//   reorderLevel: number;
//   unit: string;
//   location: string;
//   status: StockStatus;
//   updatedAt: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: StockStatus = "In Stock";
//   if (stock <= 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled",
//     category: p.category || "Other",
//     material: p.material || "—",
//     price: p.sellingPrice ?? p.price ?? 0,
//     stock,
//     reorderLevel: reorder,
//     unit: p.unit || "pcs",
//     location: p.location || p.warehouseLocation || "Main Warehouse",
//     status,
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
//   "Other",
// ];

// const locations = [
//   "Main Warehouse",
//   "Showroom",
//   "Workshop",
//   "Kitchen Unit",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getStatusClasses(status: StockStatus) {
//   if (status === "In Stock") {
//     return "border-emerald-200 bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Low Stock") {
//     return "border-amber-200 bg-amber-50 text-amber-700";
//   }
//   return "border-red-200 bg-red-50 text-red-700";
// }

// function getStockBarWidth(stock: number, reorderLevel: number) {
//   const max = Math.max(reorderLevel * 3, 10);
//   return Math.min((stock / max) * 100, 100);
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
//           <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function InventoryPage() {
//   const router = useRouter();

//   const [products, setProducts] = useState<UiProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(null);
//   const [saving, setSaving] = useState(false);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     code: "",
//     category: "Sofa",
//     material: "",
//     price: "",
//     stock: "",
//     reorderLevel: "5",
//     unit: "pcs",
//     location: "Main Warehouse",
//   });

//   // Load from Firebase
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
//         console.error("Failed to load inventory:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalProducts = products.length;
//   const totalUnits = products.reduce((t, p) => t + p.stock, 0);
//   const inventoryValue = products.reduce((t, p) => t + p.price * p.stock, 0);
//   const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
//   const outOfStockCount = products.filter((p) => p.status === "Out of Stock").length;
//   const inStockCount = products.filter((p) => p.status === "In Stock").length;

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         categoryFilter === "All Categories" || product.category === categoryFilter;

//       const matchesStatus =
//         statusFilter === "All" || product.status === statusFilter;

//       const matchesLocation =
//         locationFilter === "All" || product.location === locationFilter;

//       return matchesSearch && matchesCategory && matchesStatus && matchesLocation;
//     });
//   }, [products, search, categoryFilter, statusFilter, locationFilter]);

//   const categorySummary = categories
//     .filter((c) => c !== "All Categories")
//     .map((category) => {
//       const items = products.filter((p) => p.category === category);
//       return {
//         category,
//         products: items.length,
//         units: items.reduce((t, p) => t + p.stock, 0),
//         value: items.reduce((t, p) => t + p.price * p.stock, 0),
//       };
//     })
//     .filter((item) => item.products > 0);

//   const attentionProducts = products.filter(
//     (p) => p.status === "Low Stock" || p.status === "Out of Stock"
//   );

//   function calculateStatus(stock: number, reorderLevel: number): StockStatus {
//     if (stock <= 0) return "Out of Stock";
//     if (stock <= reorderLevel) return "Low Stock";
//     return "In Stock";
//   }

//   // Add product → Firebase
//   async function handleAddProduct() {
//     const stock = Number(newProduct.stock);
//     const reorderLevel = Number(newProduct.reorderLevel);
//     const price = Number(newProduct.price);

//     if (
//       !newProduct.name.trim() ||
//       !newProduct.code.trim() ||
//       !newProduct.material.trim() ||
//       !price ||
//       price < 0
//     ) {
//       alert("Please enter all required product details.");
//       return;
//     }

//     if (stock < 0 || reorderLevel < 0) {
//       alert("Stock values cannot be negative.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const id = await createProduct({
//         name: newProduct.name.trim(),
//         sku: newProduct.code.trim().toUpperCase(),
//         code: newProduct.code.trim().toUpperCase(),
//         category: newProduct.category,
//         material: newProduct.material.trim(),
//         sellingPrice: price,
//         price,
//         stock,
//         reorderLevel,
//         minStock: reorderLevel,
//         unit: newProduct.unit,
//         location: newProduct.location,
//         warehouseLocation: newProduct.location,
//         status: "In Stock",
//       });

//       const ui: UiProduct = {
//         id,
//         code: newProduct.code.trim().toUpperCase(),
//         name: newProduct.name.trim(),
//         category: newProduct.category,
//         material: newProduct.material.trim(),
//         price,
//         stock,
//         reorderLevel,
//         unit: newProduct.unit,
//         location: newProduct.location,
//         status: calculateStatus(stock, reorderLevel),
//         updatedAt: new Date().toISOString().slice(0, 10),
//       };

//       setProducts((current) => [ui, ...current]);
//       setNewProduct({
//         name: "",
//         code: "",
//         category: "Sofa",
//         material: "",
//         price: "",
//         stock: "",
//         reorderLevel: "5",
//         unit: "pcs",
//         location: "Main Warehouse",
//       });
//       setShowAddModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add product.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   // Increase / Decrease stock → Firebase
//   async function changeStock(productId: string, delta: number) {
//     const product = products.find((p) => p.id === productId);
//     if (!product) return;

//     const newStock = Math.max(product.stock + delta, 0);
//     const newStatus = calculateStatus(newStock, product.reorderLevel);

//     // Optimistic UI update
//     setProducts((current) =>
//       current.map((p) =>
//         p.id === productId
//           ? { ...p, stock: newStock, status: newStatus, updatedAt: new Date().toISOString().slice(0, 10) }
//           : p
//       )
//     );
//     setSelectedProduct((current) =>
//       current && current.id === productId
//         ? { ...current, stock: newStock, status: newStatus, updatedAt: new Date().toISOString().slice(0, 10) }
//         : current
//     );

//     try {
//       await updateProduct(productId, { stock: newStock });
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update stock. Please refresh.");
//       // Reload on failure
//       const data = await getAllProducts();
//       setProducts(data.map(mapToUi));
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <main className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
//         {/* Page heading */}
//         <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//           <div>
//             <p className="mb-1 text-sm font-medium text-[#176b5b]">
//               Inventory Management
//             </p>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               Inventory
//             </h1>
//             <p className="mt-1 text-sm text-gray-500">
//               Manage furniture products, stock levels and warehouse inventory.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748]"
//           >
//             <span className="text-lg">+</span>
//             Add Product
//           </button>
//         </div>

//         {/* Summary cards */}
//         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Products in catalog"
//             icon="▦"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Total Units"
//             value={totalUnits.toLocaleString("en-IN")}
//             subtitle="Available stock units"
//             icon="□"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Inventory Value"
//             value={formatCurrency(inventoryValue)}
//             subtitle="Current stock value"
//             icon="₹"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//           <SummaryCard
//             title="Low Stock"
//             value={String(lowStockCount)}
//             subtitle="Need replenishment"
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Out of Stock"
//             value={String(outOfStockCount)}
//             subtitle="Currently unavailable"
//             icon="×"
//             iconClass="bg-red-50 text-red-700"
//           />
//         </div>

//         {/* Main area */}
//         <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           {/* Products table */}
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-5">
//               <div className="flex flex-col gap-4">
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search product, code, category or material..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <select
//                     value={categoryFilter}
//                     onChange={(e) => setCategoryFilter(e.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {categories.map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                   </select>

//                   <select
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Stock Status</option>
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                   </select>

//                   <select
//                     value={locationFilter}
//                     onChange={(e) => setLocationFilter(e.target.value)}
//                     className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="All">All Locations</option>
//                     {locations.map((l) => (
//                       <option key={l}>{l}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[1050px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Product</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Category</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Material</th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Price</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Stock</th>
//                     <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Location</th>
//                     <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
//                     <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-5 py-4">
//                         <div>
//                           <p className="text-xs font-semibold text-[#176b5b]">{product.code}</p>
//                           <p className="mt-1 font-medium text-gray-900">{product.name}</p>
//                         </div>
//                       </td>
//                       <td className="px-5 py-4">
//                         <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
//                           {product.category}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-sm text-gray-600">{product.material}</td>
//                       <td className="px-5 py-4 text-right text-sm font-semibold text-gray-900">
//                         {formatCurrency(product.price)}
//                       </td>
//                       <td className="px-5 py-4">
//                         <div className="min-w-[130px]">
//                           <div className="flex items-center justify-between gap-3">
//                             <span className="text-sm font-semibold text-gray-900">
//                               {product.stock} {product.unit}
//                             </span>
//                             <span className="text-xs text-gray-400">Min {product.reorderLevel}</span>
//                           </div>
//                           <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
//                             <div
//                               className={`h-full rounded-full ${
//                                 product.status === "Out of Stock"
//                                   ? "bg-red-500"
//                                   : product.status === "Low Stock"
//                                   ? "bg-amber-500"
//                                   : "bg-[#176b5b]"
//                               }`}
//                               style={{
//                                 width: `${getStockBarWidth(product.stock, product.reorderLevel)}%`,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-5 py-4 text-sm text-gray-600">{product.location}</td>
//                       <td className="px-5 py-4 text-center">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 text-right">
//                         <button
//                           onClick={() => setSelectedProduct(product)}
//                           className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredProducts.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="px-5 py-14 text-center">
//                         <p className="mt-3 font-semibold text-gray-900">No products found</p>
//                         <p className="mt-1 text-sm text-gray-500">
//                           {products.length === 0
//                             ? "No products in the database yet."
//                             : "Try changing your search or filters."}
//                         </p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-5 py-4">
//               <p className="text-sm text-gray-500">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">{filteredProducts.length}</span> of{" "}
//                 <span className="font-semibold text-gray-900">{products.length}</span> products
//               </p>
//               <p className="hidden text-sm text-gray-500 sm:block">
//                 In stock:{" "}
//                 <span className="font-semibold text-emerald-700">{inStockCount}</span>
//               </p>
//             </div>
//           </section>

//           {/* Right sidebar */}
//           <aside className="space-y-6">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5 flex items-center justify-between">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">Attention Needed</h2>
//                   <p className="mt-1 text-xs text-gray-500">Products requiring stock action</p>
//                 </div>
//                 <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
//                   {attentionProducts.length}
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {attentionProducts.map((product) => (
//                   <button
//                     key={product.id}
//                     onClick={() => setSelectedProduct(product)}
//                     className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                   >
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-medium text-gray-900">{product.name}</p>
//                         <p className="mt-1 text-xs text-gray-500">
//                           {product.code} · {product.location}
//                         </p>
//                       </div>
//                       <span
//                         className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${
//                           product.status === "Out of Stock"
//                             ? "bg-red-50 text-red-700"
//                             : "bg-amber-50 text-amber-700"
//                         }`}
//                       >
//                         {product.status === "Out of Stock" ? "Reorder" : "Low"}
//                       </span>
//                     </div>
//                     <div className="mt-3 flex items-center justify-between">
//                       <span className="text-xs text-gray-500">
//                         Current: {product.stock} {product.unit}
//                       </span>
//                       <span className="text-xs font-medium text-[#176b5b]">
//                         Min: {product.reorderLevel}
//                       </span>
//                     </div>
//                   </button>
//                 ))}

//                 {attentionProducts.length === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       Inventory levels look good.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <div className="mb-5">
//                 <h2 className="font-semibold text-gray-900">Category Summary</h2>
//                 <p className="mt-1 text-xs text-gray-500">Stock by furniture category</p>
//               </div>
//               <div className="space-y-4">
//                 {categorySummary.map((item) => (
//                   <div key={item.category}>
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-800">{item.category}</p>
//                         <p className="mt-0.5 text-xs text-gray-500">
//                           {item.products} product{item.products !== 1 ? "s" : ""} · {item.units} units
//                         </p>
//                       </div>
//                       <p className="text-sm font-semibold text-gray-900">
//                         {formatCurrency(item.value)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//                 {categorySummary.length === 0 && (
//                   <p className="text-sm text-gray-500">No categories yet.</p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-5 shadow-sm">
//               <h2 className="font-semibold text-gray-900">Stock Status</h2>
//               <div className="mt-5 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//                     <span className="text-sm text-gray-600">In Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">{inStockCount}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
//                     <span className="text-sm text-gray-600">Low Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">{lowStockCount}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
//                     <span className="text-sm text-gray-600">Out of Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">{outOfStockCount}</span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Add Product Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">Add Product</h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Add a new furniture product to inventory.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Product Name</label>
//                 <input
//                   value={newProduct.name}
//                   onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Product Code</label>
//                 <input
//                   value={newProduct.code}
//                   onChange={(e) => setNewProduct({ ...newProduct, code: e.target.value })}
//                   placeholder="e.g. SOF-011"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Category</label>
//                 <select
//                   value={newProduct.category}
//                   onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories.filter((c) => c !== "All Categories").map((c) => (
//                     <option key={c}>{c}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Material</label>
//                 <input
//                   value={newProduct.material}
//                   onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
//                   placeholder="e.g. Teak Wood"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Selling Price</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">₹</span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newProduct.price}
//                     onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Current Stock</label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.stock}
//                   onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Reorder Level</label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.reorderLevel}
//                   onChange={(e) => setNewProduct({ ...newProduct, reorderLevel: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Unit</label>
//                 <select
//                   value={newProduct.unit}
//                   onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="pcs">Pieces</option>
//                   <option value="sets">Sets</option>
//                   <option value="units">Units</option>
//                   <option value="sqft">Sq.ft</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">Location</label>
//                 <select
//                   value={newProduct.location}
//                   onChange={(e) => setNewProduct({ ...newProduct, location: e.target.value })}
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {locations.map((l) => (
//                     <option key={l}>{l}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddProduct}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Product Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-6 py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">{selectedProduct.code}</p>
//                 <h2 className="mt-1 text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
//               </div>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-6 sm:grid-cols-2">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Category</p>
//                 <p className="mt-1 font-medium text-gray-900">{selectedProduct.category}</p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Material</p>
//                 <p className="mt-1 font-medium text-gray-900">{selectedProduct.material}</p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Selling Price</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {formatCurrency(selectedProduct.price)}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Location</p>
//                 <p className="mt-1 font-medium text-gray-900">{selectedProduct.location}</p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Current Stock</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.stock} {selectedProduct.unit}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Reorder Level</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.reorderLevel} {selectedProduct.unit}
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-gray-500">Stock Status</p>
//                       <span
//                         className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                           selectedProduct.status
//                         )}`}
//                       >
//                         {selectedProduct.status}
//                       </span>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-xs text-gray-500">Last Updated</p>
//                       <p className="mt-1 text-sm font-medium text-gray-900">
//                         {formatDate(selectedProduct.updatedAt)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick stock update */}
//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="mb-3 text-sm font-semibold text-gray-900">Quick Stock Update</p>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => changeStock(selectedProduct.id, -1)}
//                       disabled={selectedProduct.stock === 0}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
//                     >
//                       −
//                     </button>
//                     <div className="flex-1 rounded-xl bg-[#fafaf8] py-2.5 text-center">
//                       <p className="text-sm font-bold text-gray-900">
//                         {selectedProduct.stock} {selectedProduct.unit}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => changeStock(selectedProduct.id, 1)}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-between border-t border-[#e4e2da] bg-[#fafaf8] px-6 py-4">
//               <button
//                 onClick={() => {
//                   setSelectedProduct(null);
//                   router.push(`/furniture/products/${selectedProduct.id}`);
//                 }}
//                 className="rounded-xl border border-[#176b5b] bg-white px-5 py-2.5 text-sm font-medium text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Open Full Details
//               </button>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
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
//   updateProduct,
//   createProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   material: string;
//   price: number;
//   stock: number;
//   reorderLevel: number;
//   unit: string;
//   location: string;
//   status: StockStatus;
//   updatedAt: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: StockStatus = "In Stock";
//   if (stock <= 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled",
//     category: p.category || "Other",
//     material: p.material || "—",
//     price: p.sellingPrice ?? p.price ?? 0,
//     stock,
//     reorderLevel: reorder,
//     unit: p.unit || "pcs",
//     location: p.location || p.warehouseLocation || "Main Warehouse",
//     status,
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
//   "Other",
// ];

// const locations = [
//   "Main Warehouse",
//   "Showroom",
//   "Workshop",
//   "Kitchen Unit",
// ];

// function formatCurrency(value: number) {
//   return `₹${value.toLocaleString("en-IN")}`;
// }

// function formatDate(date: string) {
//   if (!date || date === "—") return "—";
//   return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function getStatusClasses(status: StockStatus) {
//   if (status === "In Stock") {
//     return "border-emerald-200 bg-emerald-50 text-emerald-700";
//   }
//   if (status === "Low Stock") {
//     return "border-amber-200 bg-amber-50 text-amber-700";
//   }
//   return "border-red-200 bg-red-50 text-red-700";
// }

// function getStockBarWidth(stock: number, reorderLevel: number) {
//   const max = Math.max(reorderLevel * 3, 10);
//   return Math.min((stock / max) * 100, 100);
// }

// function SummaryCard({
//   title,
//   value,
//   subtitle,
//   icon,
//   iconClass,
// }: {
//   title: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   iconClass: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <p className="text-xs font-medium text-gray-500 sm:text-sm">{title}</p>
//           <p className="mt-1.5 truncate text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl">
//             {value}
//           </p>
//           <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">{subtitle}</p>
//         </div>
//         <div
//           className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold sm:h-11 sm:w-11 sm:text-lg ${iconClass}`}
//         >
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function InventoryPage() {
//   const router = useRouter();

//   const [products, setProducts] = useState<UiProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("All");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(null);
//   const [saving, setSaving] = useState(false);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     code: "",
//     category: "Sofa",
//     material: "",
//     price: "",
//     stock: "",
//     reorderLevel: "5",
//     unit: "pcs",
//     location: "Main Warehouse",
//   });

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
//         console.error("Failed to load inventory:", err);
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const totalProducts = products.length;
//   const totalUnits = products.reduce((t, p) => t + p.stock, 0);
//   const inventoryValue = products.reduce((t, p) => t + p.price * p.stock, 0);
//   const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
//   const outOfStockCount = products.filter(
//     (p) => p.status === "Out of Stock"
//   ).length;
//   const inStockCount = products.filter((p) => p.status === "In Stock").length;

//   const filteredProducts = useMemo(() => {
//     const searchValue = search.toLowerCase().trim();

//     return products.filter((product) => {
//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.code.toLowerCase().includes(searchValue) ||
//         product.category.toLowerCase().includes(searchValue) ||
//         product.material.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         categoryFilter === "All Categories" ||
//         product.category === categoryFilter;

//       const matchesStatus =
//         statusFilter === "All" || product.status === statusFilter;

//       const matchesLocation =
//         locationFilter === "All" || product.location === locationFilter;

//       return (
//         matchesSearch && matchesCategory && matchesStatus && matchesLocation
//       );
//     });
//   }, [products, search, categoryFilter, statusFilter, locationFilter]);

//   const categorySummary = categories
//     .filter((c) => c !== "All Categories")
//     .map((category) => {
//       const items = products.filter((p) => p.category === category);
//       return {
//         category,
//         products: items.length,
//         units: items.reduce((t, p) => t + p.stock, 0),
//         value: items.reduce((t, p) => t + p.price * p.stock, 0),
//       };
//     })
//     .filter((item) => item.products > 0);

//   const attentionProducts = products.filter(
//     (p) => p.status === "Low Stock" || p.status === "Out of Stock"
//   );

//   function calculateStatus(stock: number, reorderLevel: number): StockStatus {
//     if (stock <= 0) return "Out of Stock";
//     if (stock <= reorderLevel) return "Low Stock";
//     return "In Stock";
//   }

//   async function handleAddProduct() {
//     const stock = Number(newProduct.stock);
//     const reorderLevel = Number(newProduct.reorderLevel);
//     const price = Number(newProduct.price);

//     if (
//       !newProduct.name.trim() ||
//       !newProduct.code.trim() ||
//       !newProduct.material.trim() ||
//       !price ||
//       price < 0
//     ) {
//       alert("Please enter all required product details.");
//       return;
//     }

//     if (stock < 0 || reorderLevel < 0) {
//       alert("Stock values cannot be negative.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const id = await createProduct({
//         name: newProduct.name.trim(),
//         sku: newProduct.code.trim().toUpperCase(),
//         code: newProduct.code.trim().toUpperCase(),
//         category: newProduct.category,
//         material: newProduct.material.trim(),
//         sellingPrice: price,
//         price,
//         stock,
//         reorderLevel,
//         minStock: reorderLevel,
//         unit: newProduct.unit,
//         location: newProduct.location,
//         warehouseLocation: newProduct.location,
//         status: "In Stock",
//       });

//       const ui: UiProduct = {
//         id,
//         code: newProduct.code.trim().toUpperCase(),
//         name: newProduct.name.trim(),
//         category: newProduct.category,
//         material: newProduct.material.trim(),
//         price,
//         stock,
//         reorderLevel,
//         unit: newProduct.unit,
//         location: newProduct.location,
//         status: calculateStatus(stock, reorderLevel),
//         updatedAt: new Date().toISOString().slice(0, 10),
//       };

//       setProducts((current) => [ui, ...current]);
//       setNewProduct({
//         name: "",
//         code: "",
//         category: "Sofa",
//         material: "",
//         price: "",
//         stock: "",
//         reorderLevel: "5",
//         unit: "pcs",
//         location: "Main Warehouse",
//       });
//       setShowAddModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add product.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   async function changeStock(productId: string, delta: number) {
//     const product = products.find((p) => p.id === productId);
//     if (!product) return;

//     const newStock = Math.max(product.stock + delta, 0);
//     const newStatus = calculateStatus(newStock, product.reorderLevel);

//     setProducts((current) =>
//       current.map((p) =>
//         p.id === productId
//           ? {
//               ...p,
//               stock: newStock,
//               status: newStatus,
//               updatedAt: new Date().toISOString().slice(0, 10),
//             }
//           : p
//       )
//     );
//     setSelectedProduct((current) =>
//       current && current.id === productId
//         ? {
//             ...current,
//             stock: newStock,
//             status: newStatus,
//             updatedAt: new Date().toISOString().slice(0, 10),
//           }
//         : current
//     );

//     try {
//       await updateProduct(productId, { stock: newStock });
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update stock. Please refresh.");
//       const data = await getAllProducts();
//       setProducts(data.map(mapToUi));
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
//       <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
//         {/* Heading */}
//         {/* <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-7 sm:flex-row sm:items-center">
//           <div className="min-w-0">
//             <p className="mb-1 text-xs font-medium text-[#176b5b] sm:text-sm">
//               Inventory Management
//             </p>
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//               Inventory
//             </h1>
//             <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//               Manage furniture products, stock levels and warehouse inventory.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#125748] sm:px-5 sm:py-3"
//           >
//             <span className="text-lg">+</span>
//             Add Product
//           </button>
//         </div> */}

//         <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
//           <div className="min-w-0 flex-1">
//             <p className="mb-1 text-xs font-medium text-[#176b5b] sm:text-sm">
//               Inventory Management
//             </p>
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//               Inventory
//             </h1>
//             <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//               Manage furniture products, stock levels and warehouse inventory.
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125748] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
//           >
//             <span className="text-base sm:text-lg">+</span>
//             Add Product
//           </button>
//         </div>

//         {/* Summary cards */}
//         <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-5">
//           <SummaryCard
//             title="Total Products"
//             value={String(totalProducts)}
//             subtitle="Products in catalog"
//             icon="▦"
//             iconClass="bg-[#eef7f4] text-[#176b5b]"
//           />
//           <SummaryCard
//             title="Total Units"
//             value={totalUnits.toLocaleString("en-IN")}
//             subtitle="Available stock units"
//             icon="□"
//             iconClass="bg-blue-50 text-blue-700"
//           />
//           <SummaryCard
//             title="Inventory Value"
//             value={formatCurrency(inventoryValue)}
//             subtitle="Current stock value"
//             icon="₹"
//             iconClass="bg-purple-50 text-purple-700"
//           />
//           <SummaryCard
//             title="Low Stock"
//             value={String(lowStockCount)}
//             subtitle="Need replenishment"
//             icon="!"
//             iconClass="bg-amber-50 text-amber-700"
//           />
//           <SummaryCard
//             title="Out of Stock"
//             value={String(outOfStockCount)}
//             subtitle="Currently unavailable"
//             icon="×"
//             iconClass="bg-red-50 text-red-700"
//           />
//         </div>

//         {/* Main area */}
//         <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
//           <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
//             <div className="border-b border-[#e4e2da] p-3 sm:p-5">
//               <div className="flex flex-col gap-3">
//                 {/* Search */}
//                 <div className="relative">
//                   <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4">
//                     ⌕
//                   </span>
//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search product, code, category..."
//                     className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 sm:py-3 sm:pl-11 sm:pr-4"
//                   />
//                 </div>

//                 {/* 3 filters — always one line */}
//                 <div className="flex w-full gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                   <select
//                     value={categoryFilter}
//                     onChange={(e) => setCategoryFilter(e.target.value)}
//                     className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//                   >
//                     {categories.map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                   </select>

//                   <select
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                     className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//                   >
//                     <option value="All">All Stock Status</option>
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                   </select>

//                   <select
//                     value={locationFilter}
//                     onChange={(e) => setLocationFilter(e.target.value)}
//                     className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
//                   >
//                     <option value="All">All Locations</option>
//                     {locations.map((l) => (
//                       <option key={l}>{l}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Table — card list on mobile, table on md+ */}
//             <div className="hidden overflow-x-auto md:block">
//               <table className="w-full min-w-[900px]">
//                 <thead>
//                   <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Product
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Category
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Material
//                     </th>
//                     <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Price
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Stock
//                     </th>
//                     <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Location
//                     </th>
//                     <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Status
//                     </th>
//                     <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
//                     >
//                       <td className="px-4 py-3 sm:px-5 sm:py-4">
//                         <p className="text-xs font-semibold text-[#176b5b]">
//                           {product.code}
//                         </p>
//                         <p className="mt-1 font-medium text-gray-900">
//                           {product.name}
//                         </p>
//                       </td>
//                       <td className="px-4 py-3 sm:px-5 sm:py-4">
//                         <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
//                           {product.category}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                         {product.material}
//                       </td>
//                       <td className="px-4 py-3 text-right text-sm font-semibold text-gray-900 sm:px-5 sm:py-4">
//                         {formatCurrency(product.price)}
//                       </td>
//                       <td className="px-4 py-3 sm:px-5 sm:py-4">
//                         <div className="min-w-[120px]">
//                           <div className="flex items-center justify-between gap-2">
//                             <span className="text-sm font-semibold text-gray-900">
//                               {product.stock} {product.unit}
//                             </span>
//                             <span className="text-xs text-gray-400">
//                               Min {product.reorderLevel}
//                             </span>
//                           </div>
//                           <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
//                             <div
//                               className={`h-full rounded-full ${
//                                 product.status === "Out of Stock"
//                                   ? "bg-red-500"
//                                   : product.status === "Low Stock"
//                                   ? "bg-amber-500"
//                                   : "bg-[#176b5b]"
//                               }`}
//                               style={{
//                                 width: `${getStockBarWidth(
//                                   product.stock,
//                                   product.reorderLevel
//                                 )}%`,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
//                         {product.location}
//                       </td>
//                       <td className="px-4 py-3 text-center sm:px-5 sm:py-4">
//                         <span
//                           className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                             product.status
//                           )}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
//                         <button
//                           onClick={() => setSelectedProduct(product)}
//                           className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredProducts.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="px-5 py-14 text-center">
//                         <p className="font-semibold text-gray-900">
//                           No products found
//                         </p>
//                         <p className="mt-1 text-sm text-gray-500">
//                           {products.length === 0
//                             ? "No products in the database yet."
//                             : "Try changing your search or filters."}
//                         </p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile cards */}
//             <div className="space-y-3 p-3 md:hidden">
//               {filteredProducts.map((product) => (
//                 <button
//                   key={product.id}
//                   type="button"
//                   onClick={() => setSelectedProduct(product)}
//                   className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className="text-xs font-semibold text-[#176b5b]">
//                         {product.code}
//                       </p>
//                       <p className="mt-0.5 truncate font-medium text-gray-900">
//                         {product.name}
//                       </p>
//                       <p className="mt-1 text-xs text-gray-500">
//                         {product.category} · {product.location}
//                       </p>
//                     </div>
//                     <span
//                       className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${getStatusClasses(
//                         product.status
//                       )}`}
//                     >
//                       {product.status}
//                     </span>
//                   </div>
//                   <div className="mt-2 flex items-center justify-between text-sm">
//                     <span className="font-semibold text-gray-900">
//                       {formatCurrency(product.price)}
//                     </span>
//                     <span className="text-gray-600">
//                       {product.stock} {product.unit}
//                     </span>
//                   </div>
//                 </button>
//               ))}
//               {filteredProducts.length === 0 && (
//                 <p className="py-10 text-center text-sm text-gray-500">
//                   No products found
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center justify-between border-t border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
//               <p className="text-xs text-gray-500 sm:text-sm">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {products.length}
//                 </span>{" "}
//                 products
//               </p>
//               <p className="text-xs text-gray-500 sm:text-sm">
//                 In stock:{" "}
//                 <span className="font-semibold text-emerald-700">
//                   {inStockCount}
//                 </span>
//               </p>
//             </div>
//           </section>

//           {/* Right sidebar */}
//           <aside className="space-y-5 sm:space-y-6">
//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
//               <div className="mb-4 flex items-center justify-between sm:mb-5">
//                 <div>
//                   <h2 className="font-semibold text-gray-900">
//                     Attention Needed
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Products requiring stock action
//                   </p>
//                 </div>
//                 <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
//                   {attentionProducts.length}
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {attentionProducts.map((product) => (
//                   <button
//                     key={product.id}
//                     onClick={() => setSelectedProduct(product)}
//                     className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
//                   >
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-medium text-gray-900">
//                           {product.name}
//                         </p>
//                         <p className="mt-1 text-xs text-gray-500">
//                           {product.code} · {product.location}
//                         </p>
//                       </div>
//                       <span
//                         className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${
//                           product.status === "Out of Stock"
//                             ? "bg-red-50 text-red-700"
//                             : "bg-amber-50 text-amber-700"
//                         }`}
//                       >
//                         {product.status === "Out of Stock" ? "Reorder" : "Low"}
//                       </span>
//                     </div>
//                     <div className="mt-3 flex items-center justify-between">
//                       <span className="text-xs text-gray-500">
//                         Current: {product.stock} {product.unit}
//                       </span>
//                       <span className="text-xs font-medium text-[#176b5b]">
//                         Min: {product.reorderLevel}
//                       </span>
//                     </div>
//                   </button>
//                 ))}

//                 {attentionProducts.length === 0 && (
//                   <div className="rounded-xl bg-emerald-50 p-4 text-center">
//                     <p className="text-sm font-medium text-emerald-700">
//                       Inventory levels look good.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
//               <div className="mb-4 sm:mb-5">
//                 <h2 className="font-semibold text-gray-900">Category Summary</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Stock by furniture category
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 {categorySummary.map((item) => (
//                   <div key={item.category}>
//                     <div className="flex items-center justify-between gap-3">
//                       <div>
//                         <p className="text-sm font-medium text-gray-800">
//                           {item.category}
//                         </p>
//                         <p className="mt-0.5 text-xs text-gray-500">
//                           {item.products} product
//                           {item.products !== 1 ? "s" : ""} · {item.units} units
//                         </p>
//                       </div>
//                       <p className="text-sm font-semibold text-gray-900">
//                         {formatCurrency(item.value)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//                 {categorySummary.length === 0 && (
//                   <p className="text-sm text-gray-500">No categories yet.</p>
//                 )}
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
//               <h2 className="font-semibold text-gray-900">Stock Status</h2>
//               <div className="mt-4 space-y-4 sm:mt-5">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
//                     <span className="text-sm text-gray-600">In Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">
//                     {inStockCount}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
//                     <span className="text-sm text-gray-600">Low Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">
//                     {lowStockCount}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
//                     <span className="text-sm text-gray-600">Out of Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">
//                     {outOfStockCount}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Add Product Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
//               <div>
//                 <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
//                   Add Product
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Add a new furniture product to inventory.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product Name
//                 </label>
//                 <input
//                   value={newProduct.name}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, name: e.target.value })
//                   }
//                   placeholder="e.g. Modern 3 Seater Sofa"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Product Code
//                 </label>
//                 <input
//                   value={newProduct.code}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, code: e.target.value })
//                   }
//                   placeholder="e.g. SOF-011"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Category
//                 </label>
//                 <select
//                   value={newProduct.category}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, category: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {categories
//                     .filter((c) => c !== "All Categories")
//                     .map((c) => (
//                       <option key={c}>{c}</option>
//                     ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Material
//                 </label>
//                 <input
//                   value={newProduct.material}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, material: e.target.value })
//                   }
//                   placeholder="e.g. Teak Wood"
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Selling Price
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     min="0"
//                     value={newProduct.price}
//                     onChange={(e) =>
//                       setNewProduct({ ...newProduct, price: e.target.value })
//                     }
//                     className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Current Stock
//                 </label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.stock}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, stock: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Reorder Level
//                 </label>
//                 <input
//                   type="number"
//                   min="0"
//                   value={newProduct.reorderLevel}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       reorderLevel: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Unit
//                 </label>
//                 <select
//                   value={newProduct.unit}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, unit: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   <option value="pcs">Pieces</option>
//                   <option value="sets">Sets</option>
//                   <option value="units">Units</option>
//                   <option value="sqft">Sq.ft</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Location
//                 </label>
//                 <select
//                   value={newProduct.location}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, location: e.target.value })
//                   }
//                   className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 >
//                   {locations.map((l) => (
//                     <option key={l}>{l}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddProduct}
//                 disabled={saving}
//                 className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Product Details Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
//               <div>
//                 <p className="text-xs font-semibold text-[#176b5b]">
//                   {selectedProduct.code}
//                 </p>
//                 <h2 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
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

//             <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Category</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.category}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Material</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.material}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Selling Price</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {formatCurrency(selectedProduct.price)}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Location</p>
//                 <p className="mt-1 font-medium text-gray-900">
//                   {selectedProduct.location}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Current Stock</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.stock} {selectedProduct.unit}
//                 </p>
//               </div>
//               <div className="rounded-xl bg-[#fafaf8] p-4">
//                 <p className="text-xs text-gray-500">Reorder Level</p>
//                 <p className="mt-1 text-lg font-bold text-gray-900">
//                   {selectedProduct.reorderLevel} {selectedProduct.unit}
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-gray-500">Stock Status</p>
//                       <span
//                         className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
//                           selectedProduct.status
//                         )}`}
//                       >
//                         {selectedProduct.status}
//                       </span>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-xs text-gray-500">Last Updated</p>
//                       <p className="mt-1 text-sm font-medium text-gray-900">
//                         {formatDate(selectedProduct.updatedAt)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="rounded-xl border border-gray-100 p-4">
//                   <p className="mb-3 text-sm font-semibold text-gray-900">
//                     Quick Stock Update
//                   </p>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => changeStock(selectedProduct.id, -1)}
//                       disabled={selectedProduct.stock === 0}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
//                     >
//                       −
//                     </button>
//                     <div className="flex-1 rounded-xl bg-[#fafaf8] py-2.5 text-center">
//                       <p className="text-sm font-bold text-gray-900">
//                         {selectedProduct.stock} {selectedProduct.unit}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => changeStock(selectedProduct.id, 1)}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-between sm:px-6">
//               <button
//                 onClick={() => {
//                   setSelectedProduct(null);
//                   router.push(`/furniture/products/${selectedProduct.id}`);
//                 }}
//                 className="rounded-xl border border-[#176b5b] bg-white px-5 py-2.5 text-sm font-medium text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Open Full Details
//               </button>
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Close
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
  updateProduct,
  createProduct,
  type FurnitureProduct,
} from "@/modules/furniture/services/productService";

type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

type UiProduct = {
  id: string;
  code: string;
  name: string;
  category: string;
  material: string;
  price: number;
  stock: number;
  reorderLevel: number;
  unit: string;
  location: string;
  status: StockStatus;
  updatedAt: string;
};

/** Only products that belong in live inventory / catalog */
function isActiveCatalogProduct(p: FurnitureProduct): boolean {
  const status = String(p.status || "").toLowerCase().trim();
  if (
    status === "draft" ||
    status === "archived" ||
    status === "deleted" ||
    status === "inactive"
  ) {
    return false;
  }
  if ((p as { deleted?: boolean }).deleted === true) return false;
  return true;
}

function mapToUi(p: FurnitureProduct): UiProduct {
  const stock = p.stock ?? 0;
  const reorder = p.reorderLevel ?? p.minStock ?? 3;

  let status: StockStatus = "In Stock";
  if (stock <= 0) status = "Out of Stock";
  else if (stock <= reorder) status = "Low Stock";

  return {
    id: p.id,
    code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
    name: p.name || "Untitled",
    category: p.category || "Other",
    material: p.material || "—",
    price: p.sellingPrice ?? p.price ?? 0,
    stock,
    reorderLevel: reorder,
    unit: p.unit || "pcs",
    location: p.location || p.warehouseLocation || "Main Warehouse",
    status,
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
  "Other",
];

const locations = [
  "Main Warehouse",
  "Showroom",
  "Workshop",
  "Kitchen Unit",
];

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatDate(date: string) {
  if (!date || date === "—") return "—";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusClasses(status: StockStatus) {
  if (status === "In Stock") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }
  if (status === "Low Stock") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }
  return "border-red-200 bg-red-50 text-red-700";
}

function getStockBarWidth(stock: number, reorderLevel: number) {
  const max = Math.max(reorderLevel * 3, 10);
  return Math.min((stock / max) * 100, 100);
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">{title}</p>
          <p className="mt-1.5 truncate text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl">
            {value}
          </p>
          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">{subtitle}</p>
        </div>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold sm:h-11 sm:w-11 sm:text-lg ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function InventoryPage() {
  const router = useRouter();

  const [products, setProducts] = useState<UiProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<UiProduct | null>(null);
  const [saving, setSaving] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    code: "",
    category: "Sofa",
    material: "",
    price: "",
    stock: "",
    reorderLevel: "5",
    unit: "pcs",
    location: "Main Warehouse",
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getAllProducts();
        if (!cancelled) {
          setProducts(
            data.filter(isActiveCatalogProduct).map(mapToUi)
          );
        }
      } catch (err) {
        console.error("Failed to load inventory:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalProducts = products.length;
  const totalUnits = products.reduce((t, p) => t + p.stock, 0);
  const inventoryValue = products.reduce((t, p) => t + p.price * p.stock, 0);
  const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
  const outOfStockCount = products.filter(
    (p) => p.status === "Out of Stock"
  ).length;
  const inStockCount = products.filter((p) => p.status === "In Stock").length;

  const filteredProducts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.code.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.material.toLowerCase().includes(searchValue);

      const matchesCategory =
        categoryFilter === "All Categories" ||
        product.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" || product.status === statusFilter;

      const matchesLocation =
        locationFilter === "All" || product.location === locationFilter;

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesLocation
      );
    });
  }, [products, search, categoryFilter, statusFilter, locationFilter]);

  const categorySummary = categories
    .filter((c) => c !== "All Categories")
    .map((category) => {
      const items = products.filter((p) => p.category === category);
      return {
        category,
        products: items.length,
        units: items.reduce((t, p) => t + p.stock, 0),
        value: items.reduce((t, p) => t + p.price * p.stock, 0),
      };
    })
    .filter((item) => item.products > 0);

  const attentionProducts = products.filter(
    (p) => p.status === "Low Stock" || p.status === "Out of Stock"
  );

  function calculateStatus(stock: number, reorderLevel: number): StockStatus {
    if (stock <= 0) return "Out of Stock";
    if (stock <= reorderLevel) return "Low Stock";
    return "In Stock";
  }

  async function handleAddProduct() {
    const stock = Number(newProduct.stock);
    const reorderLevel = Number(newProduct.reorderLevel);
    const price = Number(newProduct.price);

    if (
      !newProduct.name.trim() ||
      !newProduct.code.trim() ||
      !newProduct.material.trim() ||
      !price ||
      price < 0
    ) {
      alert("Please enter all required product details.");
      return;
    }

    if (stock < 0 || reorderLevel < 0) {
      alert("Stock values cannot be negative.");
      return;
    }

    setSaving(true);
    try {
      const id = await createProduct({
        name: newProduct.name.trim(),
        sku: newProduct.code.trim().toUpperCase(),
        code: newProduct.code.trim().toUpperCase(),
        category: newProduct.category,
        material: newProduct.material.trim(),
        sellingPrice: price,
        price,
        stock,
        reorderLevel,
        minStock: reorderLevel,
        unit: newProduct.unit,
        location: newProduct.location,
        warehouseLocation: newProduct.location,
        status: "Published",
      });

      const ui: UiProduct = {
        id,
        code: newProduct.code.trim().toUpperCase(),
        name: newProduct.name.trim(),
        category: newProduct.category,
        material: newProduct.material.trim(),
        price,
        stock,
        reorderLevel,
        unit: newProduct.unit,
        location: newProduct.location,
        status: calculateStatus(stock, reorderLevel),
        updatedAt: new Date().toISOString().slice(0, 10),
      };

      setProducts((current) => [ui, ...current]);
      setNewProduct({
        name: "",
        code: "",
        category: "Sofa",
        material: "",
        price: "",
        stock: "",
        reorderLevel: "5",
        unit: "pcs",
        location: "Main Warehouse",
      });
      setShowAddModal(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add product.");
    } finally {
      setSaving(false);
    }
  }

  async function changeStock(productId: string, delta: number) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const newStock = Math.max(product.stock + delta, 0);
    const newStatus = calculateStatus(newStock, product.reorderLevel);

    setProducts((current) =>
      current.map((p) =>
        p.id === productId
          ? {
              ...p,
              stock: newStock,
              status: newStatus,
              updatedAt: new Date().toISOString().slice(0, 10),
            }
          : p
      )
    );
    setSelectedProduct((current) =>
      current && current.id === productId
        ? {
            ...current,
            stock: newStock,
            status: newStatus,
            updatedAt: new Date().toISOString().slice(0, 10),
          }
        : current
    );

    try {
      await updateProduct(productId, { stock: newStock });
    } catch (err) {
      console.error(err);
      alert("Failed to update stock. Please refresh.");
      const data = await getAllProducts();
      setProducts(data.filter(isActiveCatalogProduct).map(mapToUi));
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-gray-900">
      <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-7">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#176b5b] sm:text-sm">
              Inventory Management
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Inventory
            </h1>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Active catalog only — draft, archived and deleted products are hidden.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#125748] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="text-base sm:text-lg">+</span>
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-5">
          <SummaryCard
            title="Total Products"
            value={String(totalProducts)}
            subtitle="Active products in catalog"
            icon="▦"
            iconClass="bg-[#eef7f4] text-[#176b5b]"
          />
          <SummaryCard
            title="Total Units"
            value={totalUnits.toLocaleString("en-IN")}
            subtitle="Available stock units"
            icon="□"
            iconClass="bg-blue-50 text-blue-700"
          />
          <SummaryCard
            title="Inventory Value"
            value={formatCurrency(inventoryValue)}
            subtitle="Current stock value"
            icon="₹"
            iconClass="bg-purple-50 text-purple-700"
          />
          <SummaryCard
            title="Low Stock"
            value={String(lowStockCount)}
            subtitle="Need replenishment"
            icon="!"
            iconClass="bg-amber-50 text-amber-700"
          />
          <SummaryCard
            title="Out of Stock"
            value={String(outOfStockCount)}
            subtitle="Currently unavailable"
            icon="×"
            iconClass="bg-red-50 text-red-700"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0 rounded-2xl border border-[#e4e2da] bg-white shadow-sm">
            <div className="border-b border-[#e4e2da] p-3 sm:p-5">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4">
                    ⌕
                  </span>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search product, code, category..."
                    className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 sm:py-3 sm:pl-11 sm:pr-4"
                  />
                </div>

                <div className="flex w-full gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Stock Status</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>

                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs outline-none focus:border-[#176b5b] sm:px-3 sm:text-sm"
                  >
                    <option value="All">All Locations</option>
                    {locations.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#e4e2da] bg-[#fafaf8] text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Product
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Category
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Material
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Price
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Stock
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Location
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5 sm:py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-[#efeee9] transition hover:bg-[#fafaf8]"
                    >
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <p className="text-xs font-semibold text-[#176b5b]">
                          {product.code}
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          {product.name}
                        </p>
                      </td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                        {product.material}
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-semibold text-gray-900 sm:px-5 sm:py-4">
                        {formatCurrency(product.price)}
                      </td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">
                        <div className="min-w-[120px]">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-gray-900">
                              {product.stock} {product.unit}
                            </span>
                            <span className="text-xs text-gray-400">
                              Min {product.reorderLevel}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                            <div
                              className={`h-full rounded-full ${
                                product.status === "Out of Stock"
                                  ? "bg-red-500"
                                  : product.status === "Low Stock"
                                  ? "bg-amber-500"
                                  : "bg-[#176b5b]"
                              }`}
                              style={{
                                width: `${getStockBarWidth(
                                  product.stock,
                                  product.reorderLevel
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 sm:px-5 sm:py-4">
                        {product.location}
                      </td>
                      <td className="px-4 py-3 text-center sm:px-5 sm:py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right sm:px-5 sm:py-4">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-[#176b5b] hover:text-[#176b5b]"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-5 py-14 text-center">
                        <p className="font-semibold text-gray-900">
                          No products found
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {products.length === 0
                            ? "No active products in the database yet."
                            : "Try changing your search or filters."}
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 p-3 md:hidden">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="w-full rounded-xl border border-[#e4e2da] bg-[#fafaf8] p-3 text-left"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#176b5b]">
                        {product.code}
                      </p>
                      <p className="mt-0.5 truncate font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {product.category} · {product.location}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${getStatusClasses(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="text-gray-600">
                      {product.stock} {product.unit}
                    </span>
                  </div>
                </button>
              ))}
              {filteredProducts.length === 0 && (
                <p className="py-10 text-center text-sm text-gray-500">
                  No products found
                </p>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[#e4e2da] px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-xs text-gray-500 sm:text-sm">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {products.length}
                </span>{" "}
                products
              </p>
              <p className="text-xs text-gray-500 sm:text-sm">
                In stock:{" "}
                <span className="font-semibold text-emerald-700">
                  {inStockCount}
                </span>
              </p>
            </div>
          </section>

          <aside className="space-y-5 sm:space-y-6">
            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4 flex items-center justify-between sm:mb-5">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Attention Needed
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Products requiring stock action
                  </p>
                </div>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                  {attentionProducts.length}
                </span>
              </div>

              <div className="space-y-3">
                {attentionProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="w-full rounded-xl border border-gray-100 bg-[#fafaf8] p-3 text-left transition hover:border-[#d7ddd9] hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {product.code} · {product.location}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${
                          product.status === "Out of Stock"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {product.status === "Out of Stock" ? "Reorder" : "Low"}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Current: {product.stock} {product.unit}
                      </span>
                      <span className="text-xs font-medium text-[#176b5b]">
                        Min: {product.reorderLevel}
                      </span>
                    </div>
                  </button>
                ))}

                {attentionProducts.length === 0 && (
                  <div className="rounded-xl bg-emerald-50 p-4 text-center">
                    <p className="text-sm font-medium text-emerald-700">
                      Inventory levels look good.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4 sm:mb-5">
                <h2 className="font-semibold text-gray-900">Category Summary</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Stock by furniture category
                </p>
              </div>
              <div className="space-y-4">
                {categorySummary.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {item.category}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {item.products} product
                          {item.products !== 1 ? "s" : ""} · {item.units} units
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                  </div>
                ))}
                {categorySummary.length === 0 && (
                  <p className="text-sm text-gray-500">No categories yet.</p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e4e2da] bg-white p-4 shadow-sm sm:p-5">
              <h2 className="font-semibold text-gray-900">Stock Status</h2>
              <div className="mt-4 space-y-4 sm:mt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#176b5b]" />
                    <span className="text-sm text-gray-600">In Stock</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {inStockCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="text-sm text-gray-600">Low Stock</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {lowStockCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="text-sm text-gray-600">Out of Stock</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {outOfStockCount}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Add Product
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Add a new furniture product to inventory.
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  placeholder="e.g. Modern 3 Seater Sofa"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Product Code
                </label>
                <input
                  value={newProduct.code}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, code: e.target.value })
                  }
                  placeholder="e.g. SOF-011"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm uppercase outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {categories
                    .filter((c) => c !== "All Categories")
                    .map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Material
                </label>
                <input
                  value={newProduct.material}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, material: e.target.value })
                  }
                  placeholder="e.g. Teak Wood"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Selling Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 py-2.5 pl-8 pr-3 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Current Stock
                </label>
                <input
                  type="number"
                  min="0"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Reorder Level
                </label>
                <input
                  type="number"
                  min="0"
                  value={newProduct.reorderLevel}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      reorderLevel: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Unit
                </label>
                <select
                  value={newProduct.unit}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, unit: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  <option value="pcs">Pieces</option>
                  <option value="sets">Sets</option>
                  <option value="units">Units</option>
                  <option value="sqft">Sq.ft</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <select
                  value={newProduct.location}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, location: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                >
                  {locations.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:px-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                disabled={saving}
                className="rounded-xl bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125748] disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Product"}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-xs font-semibold text-[#176b5b]">
                  {selectedProduct.code}
                </p>
                <h2 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Category</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedProduct.category}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Material</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedProduct.material}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Selling Price</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatCurrency(selectedProduct.price)}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Location</p>
                <p className="mt-1 font-medium text-gray-900">
                  {selectedProduct.location}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Current Stock</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {selectedProduct.stock} {selectedProduct.unit}
                </p>
              </div>
              <div className="rounded-xl bg-[#fafaf8] p-4">
                <p className="text-xs text-gray-500">Reorder Level</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {selectedProduct.reorderLevel} {selectedProduct.unit}
                </p>
              </div>

              <div className="sm:col-span-2">
                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Stock Status</p>
                      <span
                        className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                          selectedProduct.status
                        )}`}
                      >
                        {selectedProduct.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Last Updated</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {formatDate(selectedProduct.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="mb-3 text-sm font-semibold text-gray-900">
                    Quick Stock Update
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => changeStock(selectedProduct.id, -1)}
                      disabled={selectedProduct.stock === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>
                    <div className="flex-1 rounded-xl bg-[#fafaf8] py-2.5 text-center">
                      <p className="text-sm font-bold text-gray-900">
                        {selectedProduct.stock} {selectedProduct.unit}
                      </p>
                    </div>
                    <button
                      onClick={() => changeStock(selectedProduct.id, 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-lg font-semibold text-gray-700 hover:border-[#176b5b] hover:text-[#176b5b]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-[#e4e2da] bg-[#fafaf8] px-4 py-4 sm:flex-row sm:justify-between sm:px-6">
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  router.push(`/furniture/products/${selectedProduct.id}`);
                }}
                className="rounded-xl border border-[#176b5b] bg-white px-5 py-2.5 text-sm font-medium text-[#176b5b] hover:bg-[#eef7f4]"
              >
                Open Full Details
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
