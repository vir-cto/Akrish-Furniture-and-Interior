// "use client";

// import { useState } from "react";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock";

// type Product = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// const product: Product = {
//   id: "1",
//   code: "SOFA-001",
//   name: "Modern L-Shape Sofa",
//   category: "Sofa",
//   subCategory: "L-Shape Sofa",
//   description:
//     "Premium L-shape sofa designed for modern living rooms with comfortable seating, durable construction and a modern finish.",
//   material: "Engineered Wood + Fabric",
//   finish: "Matte Finish",
//   color: "Light Grey",
//   dimensions: "280 × 180 × 85 cm",
//   sellingPrice: 85000,
//   costPrice: 62000,
//   stock: 8,
//   unit: "Nos",
//   reorderLevel: 3,
//   status: "In Stock",
//   leadTime: "7–10 Days",
//   warranty: "2 Years",
//   supplier: "Akrish Furniture Suppliers",
//   location: "Main Warehouse",
//   createdAt: "2026-08-15",
//   updatedAt: "2026-10-05",
//   image:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
// };

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
// };

// export default function ProductDetailsPage() {
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);

//   const [currentStock, setCurrentStock] = useState(product.stock);

//   const [stockForm, setStockForm] = useState({
//     type: "Add",
//     quantity: "",
//     reason: "",
//   });

//   const [editForm, setEditForm] = useState({
//     name: product.name,
//     category: product.category,
//     subCategory: product.subCategory,
//     description: product.description,
//     material: product.material,
//     finish: product.finish,
//     color: product.color,
//     dimensions: product.dimensions,
//     sellingPrice: product.sellingPrice.toString(),
//     costPrice: product.costPrice.toString(),
//     reorderLevel: product.reorderLevel.toString(),
//     leadTime: product.leadTime,
//     warranty: product.warranty,
//     supplier: product.supplier,
//     location: product.location,
//   });

//   const profit = product.sellingPrice - product.costPrice;
//   const margin = (profit / product.sellingPrice) * 100;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//         ? "Low Stock"
//         : "In Stock";

//   const handleStockUpdate = (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);

//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid quantity.");
//       return;
//     }

//     if (stockForm.type === "Add") {
//       setCurrentStock((stock) => stock + quantity);
//     } else {
//       setCurrentStock((stock) => Math.max(stock - quantity, 0));
//     }

//     setStockForm({
//       type: "Add",
//       quantity: "",
//       reason: "",
//     });

//     setShowStock(false);
//   };

//   const handleSaveEdit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowEdit(false);
//     alert("Product details updated successfully.");
//   };

//   const handleDelete = () => {
//     setShowDelete(false);
//     alert("Product deleted successfully.");
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <span className="font-semibold text-[#9a5b18]">
//               Akrish / Furniture and Interior
//             </span>
//             <span>/</span>
//             <span>Products</span>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>

//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>

//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.code}
//                 </span>
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>

//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>

//               <button
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Product Card */}
//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             {/* Image */}
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>

//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo
//                   label="Category"
//                   value={product.category}
//                 />

//                 <MiniInfo
//                   label="Stock"
//                   value={`${currentStock} ${product.unit}`}
//                 />

//                 <MiniInfo
//                   label="Warranty"
//                   value={product.warranty}
//                 />
//               </div>
//             </div>

//             {/* Product Summary */}
//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>

//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>

//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description}
//                   </p>
//                 </div>

//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>

//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>

//                   <p className="mt-1 text-xs text-gray-400">
//                     per {product.unit}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem
//                   label="Material"
//                   value={product.material}
//                 />

//                 <DetailItem
//                   label="Finish"
//                   value={product.finish}
//                 />

//                 <DetailItem
//                   label="Color"
//                   value={product.color}
//                 />

//                 <DetailItem
//                   label="Dimensions"
//                   value={product.dimensions}
//                 />

//                 <DetailItem
//                   label="Lead Time"
//                   value={product.leadTime}
//                 />

//                 <DetailItem
//                   label="Warranty"
//                   value={product.warranty}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />

//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />

//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />

//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                   ? "text-red-700"
//                   : "text-[#176b5b]"
//             }
//           />
//         </div>

//         {/* Tabs */}
//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton
//               active={activeTab === "overview"}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </TabButton>

//             <TabButton
//               active={activeTab === "inventory"}
//               onClick={() => setActiveTab("inventory")}
//             >
//               Inventory
//             </TabButton>

//             <TabButton
//               active={activeTab === "pricing"}
//               onClick={() => setActiveTab("pricing")}
//             >
//               Pricing
//             </TabButton>

//             <TabButton
//               active={activeTab === "history"}
//               onClick={() => setActiveTab("history")}
//             >
//               History
//             </TabButton>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "overview" && (
//           <OverviewSection
//             product={product}
//             currentStock={currentStock}
//           />
//         )}

//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}

//         {activeTab === "pricing" && (
//           <PricingSection
//             product={product}
//             profit={profit}
//             margin={margin}
//           />
//         )}

//         {activeTab === "history" && <HistorySection />}

//         {/* Danger Zone */}
//         <div className="mt-6 rounded-xl border border-red-200 bg-white p-5">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <h2 className="font-semibold text-red-700">
//                 Product Management
//               </h2>

//               <p className="mt-1 text-sm text-gray-500">
//                 Delete this product from the furniture product catalogue.
//               </p>
//             </div>

//             <button
//               onClick={() => setShowDelete(true)}
//               className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//             >
//               Delete Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Edit Product Modal */}
//       {showEdit && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-[#1d2723]">
//                   Edit Product
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Update product master information.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowEdit(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleSaveEdit} className="p-6">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <FormInput
//                   label="Product Name"
//                   value={editForm.name}
//                   onChange={(value) =>
//                     setEditForm((p) => ({ ...p, name: value }))
//                   }
//                 />

//                 <FormInput
//                   label="Category"
//                   value={editForm.category}
//                   onChange={(value) =>
//                     setEditForm((p) => ({ ...p, category: value }))
//                   }
//                 />

//                 <FormInput
//                   label="Sub Category"
//                   value={editForm.subCategory}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       subCategory: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Material"
//                   value={editForm.material}
//                   onChange={(value) =>
//                     setEditForm((p) => ({ ...p, material: value }))
//                   }
//                 />

//                 <FormInput
//                   label="Finish"
//                   value={editForm.finish}
//                   onChange={(value) =>
//                     setEditForm((p) => ({ ...p, finish: value }))
//                   }
//                 />

//                 <FormInput
//                   label="Color"
//                   value={editForm.color}
//                   onChange={(value) =>
//                     setEditForm((p) => ({ ...p, color: value }))
//                   }
//                 />

//                 <FormInput
//                   label="Dimensions"
//                   value={editForm.dimensions}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       dimensions: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Lead Time"
//                   value={editForm.leadTime}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       leadTime: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Warranty"
//                   value={editForm.warranty}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       warranty: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Supplier"
//                   value={editForm.supplier}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       supplier: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Warehouse Location"
//                   value={editForm.location}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       location: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Selling Price"
//                   type="number"
//                   value={editForm.sellingPrice}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       sellingPrice: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Cost Price"
//                   type="number"
//                   value={editForm.costPrice}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       costPrice: value,
//                     }))
//                   }
//                 />

//                 <FormInput
//                   label="Reorder Level"
//                   type="number"
//                   value={editForm.reorderLevel}
//                   onChange={(value) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       reorderLevel: value,
//                     }))
//                   }
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Description
//                 </label>

//                 <textarea
//                   value={editForm.description}
//                   onChange={(e) =>
//                     setEditForm((p) => ({
//                       ...p,
//                       description: e.target.value,
//                     }))
//                   }
//                   rows={4}
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                 />
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Stock Modal */}
//       {showStock && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//               <div>
//                 <h2 className="font-bold text-[#1d2723]">
//                   Update Stock
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Current stock: {currentStock} {product.unit}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowStock(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleStockUpdate} className="p-6">
//               <div className="mb-4 grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setStockForm((p) => ({
//                       ...p,
//                       type: "Add",
//                     }))
//                   }
//                   className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                     stockForm.type === "Add"
//                       ? "border-green-300 bg-green-50 text-green-700"
//                       : "border-gray-200 text-gray-600"
//                   }`}
//                 >
//                   + Add Stock
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setStockForm((p) => ({
//                       ...p,
//                       type: "Remove",
//                     }))
//                   }
//                   className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                     stockForm.type === "Remove"
//                       ? "border-red-300 bg-red-50 text-red-700"
//                       : "border-gray-200 text-gray-600"
//                   }`}
//                 >
//                   − Remove Stock
//                 </button>
//               </div>

//               <FormInput
//                 label="Quantity"
//                 type="number"
//                 value={stockForm.quantity}
//                 onChange={(value) =>
//                   setStockForm((p) => ({
//                     ...p,
//                     quantity: value,
//                   }))
//                 }
//                 placeholder="Enter quantity"
//               />

//               <div className="mt-4">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Reason
//                 </label>

//                 <textarea
//                   value={stockForm.reason}
//                   onChange={(e) =>
//                     setStockForm((p) => ({
//                       ...p,
//                       reason: e.target.value,
//                     }))
//                   }
//                   rows={3}
//                   placeholder="Example: New stock received"
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                 />
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//                 >
//                   Update Stock
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Delete Modal */}
//       {showDelete && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//               !
//             </div>

//             <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//               Delete Product?
//             </h2>

//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Are you sure you want to delete{" "}
//               <span className="font-semibold text-gray-700">
//                 {product.name}
//               </span>
//               ? This action cannot be undone.
//             </p>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setShowDelete(false)}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleDelete}
//                 className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
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

// /* ---------------- Components ---------------- */

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>

//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>
//             {value}
//           </p>

//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>

//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">
//         {label}
//       </p>

//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function DetailItem({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>

//       <p className="mt-1 text-sm font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>

//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// /* ---------------- Overview ---------------- */

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: Product;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">
//           Product Information
//         </h2>

//         <p className="mt-1 text-xs text-gray-500">
//           Complete product master information
//         </p>

//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">
//             Stock Summary
//           </h2>

//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">
//               {currentStock}
//             </p>

//             <p className="mt-1 text-sm text-gray-500">
//               {product.unit} available
//             </p>
//           </div>

//           <div className="mt-5">
//             <div className="mb-2 flex justify-between text-xs">
//               <span className="text-gray-500">Stock level</span>
//               <span className="font-semibold text-gray-700">
//                 {currentStock} / 20
//               </span>
//             </div>

//             <div className="h-2 rounded-full bg-gray-100">
//               <div
//                 className="h-full rounded-full bg-[#176b5b]"
//                 style={{
//                   width: `${Math.min((currentStock / 20) * 100, 100)}%`,
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">
//             Product Dates
//           </h2>

//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Inventory ---------------- */

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   onUpdateStock,
// }: {
//   product: Product;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   onUpdateStock: () => void;
// }) {
//   const movements = [
//     {
//       date: "2026-10-05",
//       type: "Stock Added",
//       quantity: "+5",
//       reason: "New production received",
//     },
//     {
//       date: "2026-10-02",
//       type: "Stock Removed",
//       quantity: "-2",
//       reason: "Order ORD-1004",
//     },
//     {
//       date: "2026-09-28",
//       type: "Stock Added",
//       quantity: "+5",
//       reason: "New production received",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-1">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">
//             Current Inventory
//           </h2>

//           <button
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">
//             {currentStock}
//           </p>

//           <p className="mt-2 text-sm text-gray-500">
//             {product.unit} available
//           </p>

//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>

//         <div className="mt-8 space-y-4">
//           <InfoRow
//             label="Reorder Level"
//             value={`${product.reorderLevel} ${product.unit}`}
//           />

//           <InfoRow
//             label="Warehouse"
//             value={product.location}
//           />

//           <InfoRow
//             label="Supplier"
//             value={product.supplier}
//           />

//           <InfoRow
//             label="Lead Time"
//             value={product.leadTime}
//           />
//         </div>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <div>
//           <h2 className="font-semibold text-[#1d2723]">
//             Stock Movement
//           </h2>

//           <p className="mt-1 text-xs text-gray-500">
//             Recent inventory transactions
//           </p>
//         </div>

//         <div className="mt-5 overflow-x-auto">
//           <table className="w-full min-w-[600px] text-left text-sm">
//             <thead className="border-b border-[#e4e2da] text-xs uppercase text-gray-400">
//               <tr>
//                 <th className="px-3 py-3">Date</th>
//                 <th className="px-3 py-3">Movement</th>
//                 <th className="px-3 py-3">Quantity</th>
//                 <th className="px-3 py-3">Reason</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-[#eeece6]">
//               {movements.map((movement) => (
//                 <tr key={`${movement.date}-${movement.reason}`}>
//                   <td className="px-3 py-4 text-gray-500">
//                     {movement.date}
//                   </td>

//                   <td className="px-3 py-4 font-medium text-gray-700">
//                     {movement.type}
//                   </td>

//                   <td
//                     className={`px-3 py-4 font-bold ${
//                       movement.quantity.startsWith("+")
//                         ? "text-green-700"
//                         : "text-red-700"
//                     }`}
//                   >
//                     {movement.quantity}
//                   </td>

//                   <td className="px-3 py-4 text-gray-500">
//                     {movement.reason}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Pricing ---------------- */

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: Product;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>

//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>

//         <p className="mt-2 text-xs text-gray-400">
//           Current customer selling price
//         </p>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>

//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>

//         <p className="mt-2 text-xs text-gray-400">
//           Estimated product cost
//         </p>
//       </div>

//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>

//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>

//         <p className="mt-2 text-xs text-green-600">
//           Estimated margin: {margin.toFixed(1)}%
//         </p>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-3">
//         <h2 className="font-semibold text-[#1d2723]">
//           Pricing Breakdown
//         </h2>

//         <div className="mt-5 overflow-hidden rounded-lg border border-[#e4e2da]">
//           <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4">
//             <span className="text-sm text-gray-500">
//               Selling Price
//             </span>

//             <span className="font-semibold text-gray-800">
//               {formatCurrency(product.sellingPrice)}
//             </span>
//           </div>

//           <div className="flex items-center justify-between border-b border-[#e4e2da] px-4 py-4">
//             <span className="text-sm text-gray-500">
//               Cost Price
//             </span>

//             <span className="font-semibold text-gray-800">
//               - {formatCurrency(product.costPrice)}
//             </span>
//           </div>

//           <div className="flex items-center justify-between bg-[#fafaf8] px-4 py-4">
//             <span className="font-semibold text-gray-700">
//               Estimated Profit
//             </span>

//             <span className="font-bold text-green-700">
//               {formatCurrency(profit)}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- History ---------------- */

// function HistorySection() {
//   const history = [
//     {
//       date: "2026-10-05",
//       title: "Product Updated",
//       description:
//         "Product inventory and product information were updated.",
//       user: "Admin",
//     },
//     {
//       date: "2026-10-02",
//       title: "Stock Removed",
//       description:
//         "2 units were removed against customer order ORD-1004.",
//       user: "Sales Team",
//     },
//     {
//       date: "2026-09-28",
//       title: "Stock Added",
//       description:
//         "5 new units were added to the main warehouse.",
//       user: "Inventory Team",
//     },
//     {
//       date: "2026-08-15",
//       title: "Product Created",
//       description:
//         "Product was added to the furniture product catalogue.",
//       user: "Admin",
//     },
//   ];

//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <div>
//         <h2 className="font-semibold text-[#1d2723]">
//           Product History
//         </h2>

//         <p className="mt-1 text-xs text-gray-500">
//           Recent product and inventory activities
//         </p>
//       </div>

//       <div className="mt-7">
//         {history.map((item, index) => (
//           <div key={`${item.date}-${item.title}`} className="flex gap-4">
//             <div className="flex flex-col items-center">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef7f4] text-sm font-bold text-[#176b5b]">
//                 {index + 1}
//               </div>

//               {index !== history.length - 1 && (
//                 <div className="h-16 w-px bg-[#e4e2da]" />
//               )}
//             </div>

//             <div className="pb-7">
//               <div className="flex flex-wrap items-center gap-2">
//                 <h3 className="font-semibold text-gray-800">
//                   {item.title}
//                 </h3>

//                 <span className="text-xs text-gray-400">
//                   {item.date}
//                 </span>
//               </div>

//               <p className="mt-1 text-sm leading-6 text-gray-500">
//                 {item.description}
//               </p>

//               <p className="mt-1 text-xs font-medium text-[#176b5b]">
//                 By {item.user}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function InfoRow({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>

//       <span className="text-right text-sm font-semibold text-gray-700">
//         {value}
//       </span>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = "In Stock";
//   if (stock === 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subCategory: p.subcategory || "",
//     description: p.description || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     dimensions: p.dimensions || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     createdAt: p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   };
// }

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
//   Inactive: "bg-gray-100 text-gray-500 border-gray-200",
// };

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const [editForm, setEditForm] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     sellingPrice: "",
//     costPrice: "",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     location: "",
//   });

//   const [stockForm, setStockForm] = useState({
//     type: "Add" as "Add" | "Remove",
//     quantity: "",
//     reason: "",
//   });

//   // Load product from Firebase
//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           alert("Product not found");
//           router.push("/furniture/products");
//           return;
//         }

//         const ui = mapToUi(data);
//         setProduct(ui);

//         // Pre-fill edit form
//         setEditForm({
//           name: ui.name,
//           category: ui.category,
//           subCategory: ui.subCategory,
//           description: ui.description,
//           material: ui.material,
//           finish: ui.finish,
//           color: ui.color,
//           dimensions: ui.dimensions,
//           sellingPrice: String(ui.sellingPrice),
//           costPrice: String(ui.costPrice),
//           reorderLevel: String(ui.reorderLevel),
//           leadTime: ui.leadTime,
//           warranty: ui.warranty,
//           supplier: ui.supplier,
//           location: ui.location,
//         });
//       } catch (err) {
//         console.error("Failed to load product:", err);
//         alert("Failed to load product");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (productId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router]);

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const currentStock = product.stock;
//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//       ? "Low Stock"
//       : "In Stock";

//   // ========== SAVE EDIT ==========
//   const handleSaveEdit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await updateProduct(product.id, {
//         name: editForm.name.trim(),
//         category: editForm.category,
//         subcategory: editForm.subCategory,
//         description: editForm.description,
//         material: editForm.material,
//         finish: editForm.finish,
//         color: editForm.color,
//         dimensions: editForm.dimensions,
//         sellingPrice: Number(editForm.sellingPrice) || 0,
//         price: Number(editForm.sellingPrice) || 0,
//         costPrice: Number(editForm.costPrice) || 0,
//         reorderLevel: Number(editForm.reorderLevel) || 0,
//         minStock: Number(editForm.reorderLevel) || 0,
//         leadTime: editForm.leadTime,
//         warranty: editForm.warranty,
//         supplier: editForm.supplier,
//         location: editForm.location,
//         warehouseLocation: editForm.location,
//       });

//       // Refresh local state
//       setProduct((prev) =>
//         prev
//           ? {
//               ...prev,
//               name: editForm.name.trim(),
//               category: editForm.category,
//               subCategory: editForm.subCategory,
//               description: editForm.description,
//               material: editForm.material,
//               finish: editForm.finish,
//               color: editForm.color,
//               dimensions: editForm.dimensions,
//               sellingPrice: Number(editForm.sellingPrice) || 0,
//               costPrice: Number(editForm.costPrice) || 0,
//               reorderLevel: Number(editForm.reorderLevel) || 0,
//               leadTime: editForm.leadTime,
//               warranty: editForm.warranty,
//               supplier: editForm.supplier,
//               location: editForm.location,
//             }
//           : prev
//       );

//       setShowEdit(false);
//       alert("Product updated successfully!");
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Failed to update product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ========== UPDATE STOCK ==========
//   const handleStockUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);
//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid quantity.");
//       return;
//     }

//     const newStock =
//       stockForm.type === "Add"
//         ? currentStock + quantity
//         : Math.max(currentStock - quantity, 0);

//     setSaving(true);
//     try {
//       await updateProduct(product.id, {
//         stock: newStock,
//       });

//       setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
//       setStockForm({ type: "Add", quantity: "", reason: "" });
//       setShowStock(false);
//       alert("Stock updated successfully!");
//     } catch (err) {
//       console.error("Stock update failed:", err);
//       alert("Failed to update stock. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ========== DELETE ==========
//   const handleDelete = async () => {
//     setSaving(true);
//     try {
//       await deleteProduct(product.id);
//       setShowDelete(false);
//       alert("Product deleted successfully!");
//       router.push("/furniture/products");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product. Please try again.");
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <button
//               onClick={() => router.push("/furniture/products")}
//               className="font-semibold text-[#9a5b18] hover:underline"
//             >
//               Products
//             </button>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">{product.code}</span>
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>

//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>

//               <button
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Product Card */}
//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo label="Category" value={product.category} />
//                 <MiniInfo label="Stock" value={`${currentStock} ${product.unit}`} />
//                 <MiniInfo label="Warranty" value={product.warranty} />
//               </div>
//             </div>

//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description || "No description available."}
//                   </p>
//                 </div>
//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>
//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-400">per {product.unit}</p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem label="Material" value={product.material} />
//                 <DetailItem label="Finish" value={product.finish} />
//                 <DetailItem label="Color" value={product.color} />
//                 <DetailItem label="Dimensions" value={product.dimensions} />
//                 <DetailItem label="Lead Time" value={product.leadTime} />
//                 <DetailItem label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />
//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />
//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />
//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                 ? "text-red-700"
//                 : "text-[#176b5b]"
//             }
//           />
//         </div>

//         {/* Tabs */}
//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
//               Overview
//             </TabButton>
//             <TabButton active={activeTab === "inventory"} onClick={() => setActiveTab("inventory")}>
//               Inventory
//             </TabButton>
//             <TabButton active={activeTab === "pricing"} onClick={() => setActiveTab("pricing")}>
//               Pricing
//             </TabButton>
//             <TabButton active={activeTab === "history"} onClick={() => setActiveTab("history")}>
//               History
//             </TabButton>
//           </div>
//         </div>

//         {activeTab === "overview" && (
//           <OverviewSection product={product} currentStock={currentStock} />
//         )}
//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}
//         {activeTab === "pricing" && (
//           <PricingSection product={product} profit={profit} margin={margin} />
//         )}
//         {activeTab === "history" && <HistorySection />}

//         {/* Danger Zone */}
//         <div className="mt-6 rounded-xl border border-red-200 bg-white p-5">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <h2 className="font-semibold text-red-700">Product Management</h2>
//               <p className="mt-1 text-sm text-gray-500">
//                 Delete this product from the furniture product catalogue.
//               </p>
//             </div>
//             <button
//               onClick={() => setShowDelete(true)}
//               className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//             >
//               Delete Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ========== EDIT MODAL ========== */}
//       {showEdit && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//               <div>
//                 <h2 className="text-lg font-bold text-[#1d2723]">Edit Product</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Update product master information.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowEdit(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleSaveEdit} className="p-6">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <FormInput
//                   label="Product Name"
//                   value={editForm.name}
//                   onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
//                 />
//                 <FormInput
//                   label="Category"
//                   value={editForm.category}
//                   onChange={(v) => setEditForm((p) => ({ ...p, category: v }))}
//                 />
//                 <FormInput
//                   label="Sub Category"
//                   value={editForm.subCategory}
//                   onChange={(v) => setEditForm((p) => ({ ...p, subCategory: v }))}
//                 />
//                 <FormInput
//                   label="Material"
//                   value={editForm.material}
//                   onChange={(v) => setEditForm((p) => ({ ...p, material: v }))}
//                 />
//                 <FormInput
//                   label="Finish"
//                   value={editForm.finish}
//                   onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
//                 />
//                 <FormInput
//                   label="Color"
//                   value={editForm.color}
//                   onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
//                 />
//                 <FormInput
//                   label="Dimensions"
//                   value={editForm.dimensions}
//                   onChange={(v) => setEditForm((p) => ({ ...p, dimensions: v }))}
//                 />
//                 <FormInput
//                   label="Lead Time"
//                   value={editForm.leadTime}
//                   onChange={(v) => setEditForm((p) => ({ ...p, leadTime: v }))}
//                 />
//                 <FormInput
//                   label="Warranty"
//                   value={editForm.warranty}
//                   onChange={(v) => setEditForm((p) => ({ ...p, warranty: v }))}
//                 />
//                 <FormInput
//                   label="Supplier"
//                   value={editForm.supplier}
//                   onChange={(v) => setEditForm((p) => ({ ...p, supplier: v }))}
//                 />
//                 <FormInput
//                   label="Warehouse Location"
//                   value={editForm.location}
//                   onChange={(v) => setEditForm((p) => ({ ...p, location: v }))}
//                 />
//                 <FormInput
//                   label="Selling Price"
//                   type="number"
//                   value={editForm.sellingPrice}
//                   onChange={(v) => setEditForm((p) => ({ ...p, sellingPrice: v }))}
//                 />
//                 <FormInput
//                   label="Cost Price"
//                   type="number"
//                   value={editForm.costPrice}
//                   onChange={(v) => setEditForm((p) => ({ ...p, costPrice: v }))}
//                 />
//                 <FormInput
//                   label="Reorder Level"
//                   type="number"
//                   value={editForm.reorderLevel}
//                   onChange={(v) => setEditForm((p) => ({ ...p, reorderLevel: v }))}
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   value={editForm.description}
//                   onChange={(e) =>
//                     setEditForm((p) => ({ ...p, description: e.target.value }))
//                   }
//                   rows={4}
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                 />
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Saving..." : "Save Changes"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ========== STOCK MODAL ========== */}
//       {showStock && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//               <div>
//                 <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Current stock: {currentStock} {product.unit}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowStock(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleStockUpdate} className="p-6">
//               <div className="mb-4 grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setStockForm((p) => ({ ...p, type: "Add" }))}
//                   className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                     stockForm.type === "Add"
//                       ? "border-green-300 bg-green-50 text-green-700"
//                       : "border-gray-200 text-gray-600"
//                   }`}
//                 >
//                   + Add Stock
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStockForm((p) => ({ ...p, type: "Remove" }))}
//                   className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                     stockForm.type === "Remove"
//                       ? "border-red-300 bg-red-50 text-red-700"
//                       : "border-gray-200 text-gray-600"
//                   }`}
//                 >
//                   − Remove Stock
//                 </button>
//               </div>

//               <FormInput
//                 label="Quantity"
//                 type="number"
//                 value={stockForm.quantity}
//                 onChange={(v) => setStockForm((p) => ({ ...p, quantity: v }))}
//                 placeholder="Enter quantity"
//               />

//               <div className="mt-4">
//                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                   Reason
//                 </label>
//                 <textarea
//                   value={stockForm.reason}
//                   onChange={(e) =>
//                     setStockForm((p) => ({ ...p, reason: e.target.value }))
//                   }
//                   rows={3}
//                   placeholder="Example: New stock received"
//                   className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                 />
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                 >
//                   {saving ? "Updating..." : "Update Stock"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ========== DELETE MODAL ========== */}
//       {showDelete && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//               !
//             </div>
//             <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//               Delete Product?
//             </h2>
//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Are you sure you want to delete{" "}
//               <span className="font-semibold text-gray-700">{product.name}</span>?
//               This action cannot be undone.
//             </p>
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setShowDelete(false)}
//                 className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 disabled={saving}
//                 className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//               >
//                 {saving ? "Deleting..." : "Delete Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- Reusable Components (same as before) ---------------- */

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>
//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">{label}</p>
//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
//         <p className="mt-1 text-xs text-gray-500">Complete product master information</p>
//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">{currentStock}</p>
//             <p className="mt-1 text-sm text-gray-500">{product.unit} available</p>
//           </div>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   onUpdateStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   onUpdateStock: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
//           <button
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">{currentStock}</p>
//           <p className="mt-2 text-sm text-gray-500">{product.unit} available</p>
//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>
//         <div className="mt-8 space-y-4">
//           <InfoRow label="Reorder Level" value={`${product.reorderLevel} ${product.unit}`} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//         </div>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Stock history will appear here once you start recording movements.
//         </p>
//       </div>
//     </div>
//   );
// }

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: UiProduct;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>
//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>
//         <p className="mt-2 text-xs text-green-600">
//           Margin: {margin.toFixed(1)}%
//         </p>
//       </div>
//     </div>
//   );
// }

// function HistorySection() {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <h2 className="font-semibold text-[#1d2723]">Product History</h2>
//       <p className="mt-1 text-xs text-gray-500">
//         Activity history will be available once audit logging is enabled.
//       </p>
//     </div>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>
//       <span className="text-right text-sm font-semibold text-gray-700">{value}</span>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = "In Stock";
//   if (stock === 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subCategory: p.subcategory || "",
//     description: p.description || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     dimensions: p.dimensions || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     createdAt: p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   };
// }

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
//   Inactive: "bg-gray-100 text-gray-500 border-gray-200",
// };

// /** Renders children on document.body so fixed centering is always viewport-relative */
// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const [editForm, setEditForm] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     sellingPrice: "",
//     costPrice: "",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     location: "",
//   });

//   const [stockForm, setStockForm] = useState({
//     type: "Add" as "Add" | "Remove",
//     quantity: "",
//     reason: "",
//   });

//   // Lock body scroll while any modal is open
//   useEffect(() => {
//     const open = showEdit || showStock || showDelete;
//     if (open) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [showEdit, showStock, showDelete]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           alert("Product not found");
//           router.push("/furniture/products");
//           return;
//         }

//         const ui = mapToUi(data);
//         setProduct(ui);

//         setEditForm({
//           name: ui.name,
//           category: ui.category,
//           subCategory: ui.subCategory,
//           description: ui.description,
//           material: ui.material,
//           finish: ui.finish,
//           color: ui.color,
//           dimensions: ui.dimensions,
//           sellingPrice: String(ui.sellingPrice),
//           costPrice: String(ui.costPrice),
//           reorderLevel: String(ui.reorderLevel),
//           leadTime: ui.leadTime,
//           warranty: ui.warranty,
//           supplier: ui.supplier,
//           location: ui.location,
//         });
//       } catch (err) {
//         console.error("Failed to load product:", err);
//         alert("Failed to load product");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (productId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router]);

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const currentStock = product.stock;
//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//       ? "Low Stock"
//       : "In Stock";

//   const handleSaveEdit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await updateProduct(product.id, {
//         name: editForm.name.trim(),
//         category: editForm.category,
//         subcategory: editForm.subCategory,
//         description: editForm.description,
//         material: editForm.material,
//         finish: editForm.finish,
//         color: editForm.color,
//         dimensions: editForm.dimensions,
//         sellingPrice: Number(editForm.sellingPrice) || 0,
//         price: Number(editForm.sellingPrice) || 0,
//         costPrice: Number(editForm.costPrice) || 0,
//         reorderLevel: Number(editForm.reorderLevel) || 0,
//         minStock: Number(editForm.reorderLevel) || 0,
//         leadTime: editForm.leadTime,
//         warranty: editForm.warranty,
//         supplier: editForm.supplier,
//         location: editForm.location,
//         warehouseLocation: editForm.location,
//       });

//       setProduct((prev) =>
//         prev
//           ? {
//               ...prev,
//               name: editForm.name.trim(),
//               category: editForm.category,
//               subCategory: editForm.subCategory,
//               description: editForm.description,
//               material: editForm.material,
//               finish: editForm.finish,
//               color: editForm.color,
//               dimensions: editForm.dimensions,
//               sellingPrice: Number(editForm.sellingPrice) || 0,
//               costPrice: Number(editForm.costPrice) || 0,
//               reorderLevel: Number(editForm.reorderLevel) || 0,
//               leadTime: editForm.leadTime,
//               warranty: editForm.warranty,
//               supplier: editForm.supplier,
//               location: editForm.location,
//             }
//           : prev
//       );

//       setShowEdit(false);
//       alert("Product updated successfully!");
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Failed to update product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleStockUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);
//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid quantity.");
//       return;
//     }

//     const newStock =
//       stockForm.type === "Add"
//         ? currentStock + quantity
//         : Math.max(currentStock - quantity, 0);

//     setSaving(true);
//     try {
//       await updateProduct(product.id, {
//         stock: newStock,
//       });

//       setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
//       setStockForm({ type: "Add", quantity: "", reason: "" });
//       setShowStock(false);
//       alert("Stock updated successfully!");
//     } catch (err) {
//       console.error("Stock update failed:", err);
//       alert("Failed to update stock. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     setSaving(true);
//     try {
//       await deleteProduct(product.id);
//       setShowDelete(false);
//       alert("Product deleted successfully!");
//       router.push("/furniture/products");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product. Please try again.");
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <button
//               onClick={() => router.push("/furniture/products")}
//               className="font-semibold text-[#9a5b18] hover:underline"
//             >
//               Products
//             </button>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">{product.code}</span>
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>

//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>

//               <button
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo label="Category" value={product.category} />
//                 <MiniInfo
//                   label="Stock"
//                   value={`${currentStock} ${product.unit}`}
//                 />
//                 <MiniInfo label="Warranty" value={product.warranty} />
//               </div>
//             </div>

//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description || "No description available."}
//                   </p>
//                 </div>
//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>
//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-400">
//                     per {product.unit}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem label="Material" value={product.material} />
//                 <DetailItem label="Finish" value={product.finish} />
//                 <DetailItem label="Color" value={product.color} />
//                 <DetailItem label="Dimensions" value={product.dimensions} />
//                 <DetailItem label="Lead Time" value={product.leadTime} />
//                 <DetailItem label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />
//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />
//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />
//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                 ? "text-red-700"
//                 : "text-[#176b5b]"
//             }
//           />
//         </div>

//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton
//               active={activeTab === "overview"}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </TabButton>
//             <TabButton
//               active={activeTab === "inventory"}
//               onClick={() => setActiveTab("inventory")}
//             >
//               Inventory
//             </TabButton>
//             <TabButton
//               active={activeTab === "pricing"}
//               onClick={() => setActiveTab("pricing")}
//             >
//               Pricing
//             </TabButton>
//             <TabButton
//               active={activeTab === "history"}
//               onClick={() => setActiveTab("history")}
//             >
//               History
//             </TabButton>
//           </div>
//         </div>

//         {activeTab === "overview" && (
//           <OverviewSection product={product} currentStock={currentStock} />
//         )}
//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}
//         {activeTab === "pricing" && (
//           <PricingSection product={product} profit={profit} margin={margin} />
//         )}
//         {activeTab === "history" && <HistorySection />}

//         <div className="mt-6 rounded-xl border border-red-200 bg-white p-5">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <h2 className="font-semibold text-red-700">Product Management</h2>
//               <p className="mt-1 text-sm text-gray-500">
//                 Delete this product from the furniture product catalogue.
//               </p>
//             </div>
//             <button
//               onClick={() => setShowDelete(true)}
//               className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//             >
//               Delete Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ========== EDIT MODAL (viewport-centered) ========== */}
//       {showEdit && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowEdit(false)}
//           >
//             <div
//               className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
//                 <div>
//                   <h2 className="text-lg font-bold text-[#1d2723]">
//                     Edit Product
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Update product master information.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleSaveEdit} className="p-6">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <FormInput
//                     label="Product Name"
//                     value={editForm.name}
//                     onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
//                   />
//                   <FormInput
//                     label="Category"
//                     value={editForm.category}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, category: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Sub Category"
//                     value={editForm.subCategory}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, subCategory: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Material"
//                     value={editForm.material}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, material: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Finish"
//                     value={editForm.finish}
//                     onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
//                   />
//                   <FormInput
//                     label="Color"
//                     value={editForm.color}
//                     onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
//                   />
//                   <FormInput
//                     label="Dimensions"
//                     value={editForm.dimensions}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, dimensions: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Lead Time"
//                     value={editForm.leadTime}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, leadTime: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warranty"
//                     value={editForm.warranty}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, warranty: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Supplier"
//                     value={editForm.supplier}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, supplier: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warehouse Location"
//                     value={editForm.location}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, location: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Selling Price"
//                     type="number"
//                     value={editForm.sellingPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, sellingPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Cost Price"
//                     type="number"
//                     value={editForm.costPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, costPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Reorder Level"
//                     type="number"
//                     value={editForm.reorderLevel}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, reorderLevel: v }))
//                     }
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     value={editForm.description}
//                     onChange={(e) =>
//                       setEditForm((p) => ({
//                         ...p,
//                         description: e.target.value,
//                       }))
//                     }
//                     rows={4}
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowEdit(false)}
//                     className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== STOCK MODAL (viewport-centered) ========== */}
//       {showStock && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowStock(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                 <div>
//                   <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Current stock: {currentStock} {product.unit}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleStockUpdate} className="p-6">
//                 <div className="mb-4 grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Add" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Add"
//                         ? "border-green-300 bg-green-50 text-green-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     + Add Stock
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Remove" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Remove"
//                         ? "border-red-300 bg-red-50 text-red-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     − Remove Stock
//                   </button>
//                 </div>

//                 <FormInput
//                   label="Quantity"
//                   type="number"
//                   value={stockForm.quantity}
//                   onChange={(v) =>
//                     setStockForm((p) => ({ ...p, quantity: v }))
//                   }
//                   placeholder="Enter quantity"
//                 />

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Reason
//                   </label>
//                   <textarea
//                     value={stockForm.reason}
//                     onChange={(e) =>
//                       setStockForm((p) => ({ ...p, reason: e.target.value }))
//                     }
//                     rows={3}
//                     placeholder="Example: New stock received"
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowStock(false)}
//                     className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Updating..." : "Update Stock"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== DELETE MODAL (viewport-centered) ========== */}
//       {showDelete && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowDelete(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//                 !
//               </div>
//               <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//                 Delete Product?
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.name}
//                 </span>
//                 ? This action cannot be undone.
//               </p>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowDelete(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleDelete}
//                   disabled={saving}
//                   className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//                 >
//                   {saving ? "Deleting..." : "Delete Product"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>
//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">
//         {label}
//       </p>
//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Complete product master information
//         </p>
//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">{currentStock}</p>
//             <p className="mt-1 text-sm text-gray-500">
//               {product.unit} available
//             </p>
//           </div>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   onUpdateStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   onUpdateStock: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
//           <button
//             type="button"
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">{currentStock}</p>
//           <p className="mt-2 text-sm text-gray-500">
//             {product.unit} available
//           </p>
//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>
//         <div className="mt-8 space-y-4">
//           <InfoRow
//             label="Reorder Level"
//             value={`${product.reorderLevel} ${product.unit}`}
//           />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//         </div>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Stock history will appear here once you start recording movements.
//         </p>
//       </div>
//     </div>
//   );
// }

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: UiProduct;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>
//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>
//         <p className="mt-2 text-xs text-green-600">
//           Margin: {margin.toFixed(1)}%
//         </p>
//       </div>
//     </div>
//   );
// }

// function HistorySection() {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <h2 className="font-semibold text-[#1d2723]">Product History</h2>
//       <p className="mt-1 text-xs text-gray-500">
//         Activity history will be available once audit logging is enabled.
//       </p>
//     </div>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>
//       <span className="text-right text-sm font-semibold text-gray-700">
//         {value}
//       </span>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = "In Stock";
//   if (stock === 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subCategory: p.subcategory || "",
//     description: p.description || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     dimensions: p.dimensions || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     createdAt: p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   };
// }

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
//   Inactive: "bg-gray-100 text-gray-500 border-gray-200",
// };

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const [editForm, setEditForm] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     sellingPrice: "",
//     costPrice: "",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     location: "",
//   });

//   const [stockForm, setStockForm] = useState({
//     type: "Add" as "Add" | "Remove",
//     quantity: "",
//     reason: "",
//   });

//   useEffect(() => {
//     const open = showEdit || showStock || showDelete;
//     if (open) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [showEdit, showStock, showDelete]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           alert("Product not found");
//           router.push("/furniture/products");
//           return;
//         }

//         const ui = mapToUi(data);
//         setProduct(ui);

//         setEditForm({
//           name: ui.name,
//           category: ui.category,
//           subCategory: ui.subCategory,
//           description: ui.description,
//           material: ui.material,
//           finish: ui.finish,
//           color: ui.color,
//           dimensions: ui.dimensions,
//           sellingPrice: String(ui.sellingPrice),
//           costPrice: String(ui.costPrice),
//           reorderLevel: String(ui.reorderLevel),
//           leadTime: ui.leadTime,
//           warranty: ui.warranty,
//           supplier: ui.supplier,
//           location: ui.location,
//         });
//       } catch (err) {
//         console.error("Failed to load product:", err);
//         alert("Failed to load product");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (productId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router]);

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const currentStock = product.stock;
//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//       ? "Low Stock"
//       : "In Stock";

//   const handleSaveEdit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await updateProduct(product.id, {
//         name: editForm.name.trim(),
//         category: editForm.category,
//         subcategory: editForm.subCategory,
//         description: editForm.description,
//         material: editForm.material,
//         finish: editForm.finish,
//         color: editForm.color,
//         dimensions: editForm.dimensions,
//         sellingPrice: Number(editForm.sellingPrice) || 0,
//         price: Number(editForm.sellingPrice) || 0,
//         costPrice: Number(editForm.costPrice) || 0,
//         reorderLevel: Number(editForm.reorderLevel) || 0,
//         minStock: Number(editForm.reorderLevel) || 0,
//         leadTime: editForm.leadTime,
//         warranty: editForm.warranty,
//         supplier: editForm.supplier,
//         location: editForm.location,
//         warehouseLocation: editForm.location,
//       });

//       setProduct((prev) =>
//         prev
//           ? {
//               ...prev,
//               name: editForm.name.trim(),
//               category: editForm.category,
//               subCategory: editForm.subCategory,
//               description: editForm.description,
//               material: editForm.material,
//               finish: editForm.finish,
//               color: editForm.color,
//               dimensions: editForm.dimensions,
//               sellingPrice: Number(editForm.sellingPrice) || 0,
//               costPrice: Number(editForm.costPrice) || 0,
//               reorderLevel: Number(editForm.reorderLevel) || 0,
//               leadTime: editForm.leadTime,
//               warranty: editForm.warranty,
//               supplier: editForm.supplier,
//               location: editForm.location,
//             }
//           : prev
//       );

//       setShowEdit(false);
//       alert("Product updated successfully!");
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Failed to update product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleStockUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);
//     if (!quantity || quantity <= 0) {
//       alert("Please enter a valid quantity.");
//       return;
//     }

//     const newStock =
//       stockForm.type === "Add"
//         ? currentStock + quantity
//         : Math.max(currentStock - quantity, 0);

//     setSaving(true);
//     try {
//       await updateProduct(product.id, {
//         stock: newStock,
//       });

//       setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
//       setStockForm({ type: "Add", quantity: "", reason: "" });
//       setShowStock(false);
//       alert("Stock updated successfully!");
//     } catch (err) {
//       console.error("Stock update failed:", err);
//       alert("Failed to update stock. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     setSaving(true);
//     try {
//       await deleteProduct(product.id);
//       setShowDelete(false);
//       alert("Product deleted successfully!");
//       router.push("/furniture/products");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product. Please try again.");
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <button
//               type="button"
//               onClick={() => router.push("/furniture/products")}
//               className="font-semibold text-[#9a5b18] hover:underline"
//             >
//               Products
//             </button>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.code}
//                 </span>
//               </p>
//             </div>

//             {/* Action row: Update Stock | Product PDF | Edit | Delete */}
//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>

//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>

//               <button
//                 type="button"
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setShowDelete(true)}
//                 className="rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo label="Category" value={product.category} />
//                 <MiniInfo
//                   label="Stock"
//                   value={`${currentStock} ${product.unit}`}
//                 />
//                 <MiniInfo label="Warranty" value={product.warranty} />
//               </div>
//             </div>

//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description || "No description available."}
//                   </p>
//                 </div>
//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>
//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-400">
//                     per {product.unit}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem label="Material" value={product.material} />
//                 <DetailItem label="Finish" value={product.finish} />
//                 <DetailItem label="Color" value={product.color} />
//                 <DetailItem label="Dimensions" value={product.dimensions} />
//                 <DetailItem label="Lead Time" value={product.leadTime} />
//                 <DetailItem label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />
//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />
//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />
//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                 ? "text-red-700"
//                 : "text-[#176b5b]"
//             }
//           />
//         </div>

//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton
//               active={activeTab === "overview"}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </TabButton>
//             <TabButton
//               active={activeTab === "inventory"}
//               onClick={() => setActiveTab("inventory")}
//             >
//               Inventory
//             </TabButton>
//             <TabButton
//               active={activeTab === "pricing"}
//               onClick={() => setActiveTab("pricing")}
//             >
//               Pricing
//             </TabButton>
//             <TabButton
//               active={activeTab === "history"}
//               onClick={() => setActiveTab("history")}
//             >
//               History
//             </TabButton>
//           </div>
//         </div>

//         {activeTab === "overview" && (
//           <OverviewSection product={product} currentStock={currentStock} />
//         )}
//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}
//         {activeTab === "pricing" && (
//           <PricingSection product={product} profit={profit} margin={margin} />
//         )}
//         {activeTab === "history" && <HistorySection />}
//       </div>

//       {/* ========== EDIT MODAL ========== */}
//       {showEdit && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowEdit(false)}
//           >
//             <div
//               className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
//                 <div>
//                   <h2 className="text-lg font-bold text-[#1d2723]">
//                     Edit Product
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Update product master information.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleSaveEdit} className="p-6">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <FormInput
//                     label="Product Name"
//                     value={editForm.name}
//                     onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
//                   />
//                   <FormInput
//                     label="Category"
//                     value={editForm.category}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, category: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Sub Category"
//                     value={editForm.subCategory}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, subCategory: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Material"
//                     value={editForm.material}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, material: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Finish"
//                     value={editForm.finish}
//                     onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
//                   />
//                   <FormInput
//                     label="Color"
//                     value={editForm.color}
//                     onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
//                   />
//                   <FormInput
//                     label="Dimensions"
//                     value={editForm.dimensions}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, dimensions: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Lead Time"
//                     value={editForm.leadTime}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, leadTime: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warranty"
//                     value={editForm.warranty}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, warranty: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Supplier"
//                     value={editForm.supplier}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, supplier: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warehouse Location"
//                     value={editForm.location}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, location: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Selling Price"
//                     type="number"
//                     value={editForm.sellingPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, sellingPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Cost Price"
//                     type="number"
//                     value={editForm.costPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, costPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Reorder Level"
//                     type="number"
//                     value={editForm.reorderLevel}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, reorderLevel: v }))
//                     }
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     value={editForm.description}
//                     onChange={(e) =>
//                       setEditForm((p) => ({
//                         ...p,
//                         description: e.target.value,
//                       }))
//                     }
//                     rows={4}
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowEdit(false)}
//                     className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== STOCK MODAL ========== */}
//       {showStock && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowStock(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                 <div>
//                   <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Current stock: {currentStock} {product.unit}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleStockUpdate} className="p-6">
//                 <div className="mb-4 grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Add" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Add"
//                         ? "border-green-300 bg-green-50 text-green-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     + Add Stock
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Remove" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Remove"
//                         ? "border-red-300 bg-red-50 text-red-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     − Remove Stock
//                   </button>
//                 </div>

//                 <FormInput
//                   label="Quantity"
//                   type="number"
//                   value={stockForm.quantity}
//                   onChange={(v) =>
//                     setStockForm((p) => ({ ...p, quantity: v }))
//                   }
//                   placeholder="Enter quantity"
//                 />

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Reason
//                   </label>
//                   <textarea
//                     value={stockForm.reason}
//                     onChange={(e) =>
//                       setStockForm((p) => ({ ...p, reason: e.target.value }))
//                     }
//                     rows={3}
//                     placeholder="Example: New stock received"
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowStock(false)}
//                     className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Updating..." : "Update Stock"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== DELETE MODAL ========== */}
//       {showDelete && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowDelete(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//                 !
//               </div>
//               <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//                 Delete Product?
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.name}
//                 </span>
//                 ? This action cannot be undone.
//               </p>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowDelete(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleDelete}
//                   disabled={saving}
//                   className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//                 >
//                   {saving ? "Deleting..." : "Delete Product"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>
//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">
//         {label}
//       </p>
//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Complete product master information
//         </p>
//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">{currentStock}</p>
//             <p className="mt-1 text-sm text-gray-500">
//               {product.unit} available
//             </p>
//           </div>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   onUpdateStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   onUpdateStock: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
//           <button
//             type="button"
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">{currentStock}</p>
//           <p className="mt-2 text-sm text-gray-500">
//             {product.unit} available
//           </p>
//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>
//         <div className="mt-8 space-y-4">
//           <InfoRow
//             label="Reorder Level"
//             value={`${product.reorderLevel} ${product.unit}`}
//           />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//         </div>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Stock history will appear here once you start recording movements.
//         </p>
//       </div>
//     </div>
//   );
// }

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: UiProduct;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>
//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>
//         <p className="mt-2 text-xs text-green-600">
//           Margin: {margin.toFixed(1)}%
//         </p>
//       </div>
//     </div>
//   );
// }

// function HistorySection() {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <h2 className="font-semibold text-[#1d2723]">Product History</h2>
//       <p className="mt-1 text-xs text-gray-500">
//         Activity history will be available once audit logging is enabled.
//       </p>
//     </div>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>
//       <span className="text-right text-sm font-semibold text-gray-700">
//         {value}
//       </span>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   type FurnitureProduct,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// type ToastState = {
//   type: "success" | "error";
//   message: string;
// } | null;

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = "In Stock";
//   if (stock === 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subCategory: p.subcategory || "",
//     description: p.description || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     dimensions: p.dimensions || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     createdAt: p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   };
// }

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
//   Inactive: "bg-gray-100 text-gray-500 border-gray-200",
// };

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// function Toast({
//   toast,
//   onClose,
// }: {
//   toast: NonNullable<ToastState>;
//   onClose: () => void;
// }) {
//   useEffect(() => {
//     const t = setTimeout(onClose, 3500);
//     return () => clearTimeout(t);
//   }, [onClose, toast.message]);

//   const isSuccess = toast.type === "success";

//   return (
//     <ModalPortal>
//       <div className="pointer-events-none fixed inset-x-0 top-4 z-[300] flex justify-center px-4 sm:justify-end sm:pr-6">
//         <div
//           className={`pointer-events-auto flex max-w-md items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${
//             isSuccess
//               ? "border-emerald-200 bg-white text-emerald-900"
//               : "border-red-200 bg-white text-red-900"
//           }`}
//           role="status"
//         >
//           <span
//             className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
//               isSuccess ? "bg-emerald-600" : "bg-red-600"
//             }`}
//           >
//             {isSuccess ? "✓" : "!"}
//           </span>
//           <div className="min-w-0 flex-1 pt-0.5">
//             <p className="text-sm font-semibold">
//               {isSuccess ? "Success" : "Something went wrong"}
//             </p>
//             <p className="mt-0.5 text-sm text-gray-600">{toast.message}</p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="shrink-0 rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
//             aria-label="Dismiss"
//           >
//             ✕
//           </button>
//         </div>
//       </div>
//     </ModalPortal>
//   );
// }

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [toast, setToast] = useState<ToastState>(null);

//   const showToast = (type: "success" | "error", message: string) => {
//     setToast({ type, message });
//   };

//   const [editForm, setEditForm] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     sellingPrice: "",
//     costPrice: "",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     location: "",
//   });

//   const [stockForm, setStockForm] = useState({
//     type: "Add" as "Add" | "Remove",
//     quantity: "",
//     reason: "",
//   });

//   useEffect(() => {
//     const open = showEdit || showStock || showDelete;
//     if (open) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [showEdit, showStock, showDelete]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           showToast("error", "Product not found.");
//           router.push("/furniture/products");
//           return;
//         }

//         const ui = mapToUi(data);
//         setProduct(ui);

//         setEditForm({
//           name: ui.name,
//           category: ui.category,
//           subCategory: ui.subCategory,
//           description: ui.description,
//           material: ui.material,
//           finish: ui.finish,
//           color: ui.color,
//           dimensions: ui.dimensions,
//           sellingPrice: String(ui.sellingPrice),
//           costPrice: String(ui.costPrice),
//           reorderLevel: String(ui.reorderLevel),
//           leadTime: ui.leadTime,
//           warranty: ui.warranty,
//           supplier: ui.supplier,
//           location: ui.location,
//         });
//       } catch (err) {
//         console.error("Failed to load product:", err);
//         showToast("error", "Failed to load product. Please try again.");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (productId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router]);

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const currentStock = product.stock;
//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//       ? "Low Stock"
//       : "In Stock";

//   const handleSaveEdit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await updateProduct(product.id, {
//         name: editForm.name.trim(),
//         category: editForm.category,
//         subcategory: editForm.subCategory,
//         description: editForm.description,
//         material: editForm.material,
//         finish: editForm.finish,
//         color: editForm.color,
//         dimensions: editForm.dimensions,
//         sellingPrice: Number(editForm.sellingPrice) || 0,
//         price: Number(editForm.sellingPrice) || 0,
//         costPrice: Number(editForm.costPrice) || 0,
//         reorderLevel: Number(editForm.reorderLevel) || 0,
//         minStock: Number(editForm.reorderLevel) || 0,
//         leadTime: editForm.leadTime,
//         warranty: editForm.warranty,
//         supplier: editForm.supplier,
//         location: editForm.location,
//         warehouseLocation: editForm.location,
//       });

//       setProduct((prev) =>
//         prev
//           ? {
//               ...prev,
//               name: editForm.name.trim(),
//               category: editForm.category,
//               subCategory: editForm.subCategory,
//               description: editForm.description,
//               material: editForm.material,
//               finish: editForm.finish,
//               color: editForm.color,
//               dimensions: editForm.dimensions,
//               sellingPrice: Number(editForm.sellingPrice) || 0,
//               costPrice: Number(editForm.costPrice) || 0,
//               reorderLevel: Number(editForm.reorderLevel) || 0,
//               leadTime: editForm.leadTime,
//               warranty: editForm.warranty,
//               supplier: editForm.supplier,
//               location: editForm.location,
//             }
//           : prev
//       );

//       setShowEdit(false);
//       showToast("success", "Product updated successfully.");
//     } catch (err) {
//       console.error("Update failed:", err);
//       showToast("error", "Failed to update product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleStockUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);
//     if (!quantity || quantity <= 0) {
//       showToast("error", "Please enter a valid quantity.");
//       return;
//     }

//     const newStock =
//       stockForm.type === "Add"
//         ? currentStock + quantity
//         : Math.max(currentStock - quantity, 0);

//     setSaving(true);
//     try {
//       await updateProduct(product.id, {
//         stock: newStock,
//       });

//       setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
//       setStockForm({ type: "Add", quantity: "", reason: "" });
//       setShowStock(false);
//       showToast(
//         "success",
//         stockForm.type === "Add"
//           ? `Added ${quantity} ${product.unit}. Stock is now ${newStock}.`
//           : `Removed ${quantity} ${product.unit}. Stock is now ${newStock}.`
//       );
//     } catch (err) {
//       console.error("Stock update failed:", err);
//       showToast("error", "Failed to update stock. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     setSaving(true);
//     try {
//       await deleteProduct(product.id);
//       setShowDelete(false);
//       showToast("success", "Product deleted successfully.");
//       setTimeout(() => router.push("/furniture/products"), 800);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       showToast("error", "Failed to delete product. Please try again.");
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       {toast && (
//         <Toast toast={toast} onClose={() => setToast(null)} />
//       )}

//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <button
//               type="button"
//               onClick={() => router.push("/furniture/products")}
//               className="font-semibold text-[#9a5b18] hover:underline"
//             >
//               Products
//             </button>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.code}
//                 </span>
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>

//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>

//               <button
//                 type="button"
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setShowDelete(true)}
//                 className="rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo label="Category" value={product.category} />
//                 <MiniInfo
//                   label="Stock"
//                   value={`${currentStock} ${product.unit}`}
//                 />
//                 <MiniInfo label="Warranty" value={product.warranty} />
//               </div>
//             </div>

//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description || "No description available."}
//                   </p>
//                 </div>
//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>
//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-400">
//                     per {product.unit}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem label="Material" value={product.material} />
//                 <DetailItem label="Finish" value={product.finish} />
//                 <DetailItem label="Color" value={product.color} />
//                 <DetailItem label="Dimensions" value={product.dimensions} />
//                 <DetailItem label="Lead Time" value={product.leadTime} />
//                 <DetailItem label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />
//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />
//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />
//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                 ? "text-red-700"
//                 : "text-[#176b5b]"
//             }
//           />
//         </div>

//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton
//               active={activeTab === "overview"}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </TabButton>
//             <TabButton
//               active={activeTab === "inventory"}
//               onClick={() => setActiveTab("inventory")}
//             >
//               Inventory
//             </TabButton>
//             <TabButton
//               active={activeTab === "pricing"}
//               onClick={() => setActiveTab("pricing")}
//             >
//               Pricing
//             </TabButton>
//             <TabButton
//               active={activeTab === "history"}
//               onClick={() => setActiveTab("history")}
//             >
//               History
//             </TabButton>
//           </div>
//         </div>

//         {activeTab === "overview" && (
//           <OverviewSection product={product} currentStock={currentStock} />
//         )}
//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}
//         {activeTab === "pricing" && (
//           <PricingSection product={product} profit={profit} margin={margin} />
//         )}
//         {activeTab === "history" && <HistorySection />}
//       </div>

//       {/* EDIT MODAL */}
//       {showEdit && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowEdit(false)}
//           >
//             <div
//               className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
//                 <div>
//                   <h2 className="text-lg font-bold text-[#1d2723]">
//                     Edit Product
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Update product master information.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleSaveEdit} className="p-6">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <FormInput
//                     label="Product Name"
//                     value={editForm.name}
//                     onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
//                   />
//                   <FormInput
//                     label="Category"
//                     value={editForm.category}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, category: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Sub Category"
//                     value={editForm.subCategory}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, subCategory: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Material"
//                     value={editForm.material}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, material: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Finish"
//                     value={editForm.finish}
//                     onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
//                   />
//                   <FormInput
//                     label="Color"
//                     value={editForm.color}
//                     onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
//                   />
//                   <FormInput
//                     label="Dimensions"
//                     value={editForm.dimensions}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, dimensions: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Lead Time"
//                     value={editForm.leadTime}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, leadTime: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warranty"
//                     value={editForm.warranty}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, warranty: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Supplier"
//                     value={editForm.supplier}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, supplier: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warehouse Location"
//                     value={editForm.location}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, location: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Selling Price"
//                     type="number"
//                     value={editForm.sellingPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, sellingPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Cost Price"
//                     type="number"
//                     value={editForm.costPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, costPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Reorder Level"
//                     type="number"
//                     value={editForm.reorderLevel}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, reorderLevel: v }))
//                     }
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     value={editForm.description}
//                     onChange={(e) =>
//                       setEditForm((p) => ({
//                         ...p,
//                         description: e.target.value,
//                       }))
//                     }
//                     rows={4}
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowEdit(false)}
//                     className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* STOCK MODAL */}
//       {showStock && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowStock(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                 <div>
//                   <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Current stock: {currentStock} {product.unit}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleStockUpdate} className="p-6">
//                 <div className="mb-4 grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Add" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Add"
//                         ? "border-green-300 bg-green-50 text-green-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     + Add Stock
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Remove" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Remove"
//                         ? "border-red-300 bg-red-50 text-red-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     − Remove Stock
//                   </button>
//                 </div>

//                 <FormInput
//                   label="Quantity"
//                   type="number"
//                   value={stockForm.quantity}
//                   onChange={(v) =>
//                     setStockForm((p) => ({ ...p, quantity: v }))
//                   }
//                   placeholder="Enter quantity"
//                 />

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Reason
//                   </label>
//                   <textarea
//                     value={stockForm.reason}
//                     onChange={(e) =>
//                       setStockForm((p) => ({ ...p, reason: e.target.value }))
//                     }
//                     rows={3}
//                     placeholder="Example: New stock received"
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowStock(false)}
//                     className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Updating..." : "Update Stock"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* DELETE MODAL */}
//       {showDelete && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowDelete(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//                 !
//               </div>
//               <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//                 Delete Product?
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.name}
//                 </span>
//                 ? This action cannot be undone.
//               </p>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowDelete(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleDelete}
//                   disabled={saving}
//                   className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//                 >
//                   {saving ? "Deleting..." : "Delete Product"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>
//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">
//         {label}
//       </p>
//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Complete product master information
//         </p>
//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">{currentStock}</p>
//             <p className="mt-1 text-sm text-gray-500">
//               {product.unit} available
//             </p>
//           </div>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   onUpdateStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   onUpdateStock: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
//           <button
//             type="button"
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">{currentStock}</p>
//           <p className="mt-2 text-sm text-gray-500">
//             {product.unit} available
//           </p>
//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>
//         <div className="mt-8 space-y-4">
//           <InfoRow
//             label="Reorder Level"
//             value={`${product.reorderLevel} ${product.unit}`}
//           />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//         </div>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Stock history will appear here once you start recording movements.
//         </p>
//       </div>
//     </div>
//   );
// }

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: UiProduct;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>
//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>
//         <p className="mt-2 text-xs text-green-600">
//           Margin: {margin.toFixed(1)}%
//         </p>
//       </div>
//     </div>
//   );
// }

// function HistorySection() {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <h2 className="font-semibold text-[#1d2723]">Product History</h2>
//       <p className="mt-1 text-xs text-gray-500">
//         Activity history will be available once audit logging is enabled.
//       </p>
//     </div>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>
//       <span className="text-right text-sm font-semibold text-gray-700">
//         {value}
//       </span>
//     </div>
//   );
// }

// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   recordStockMovement,
//   recordProductUpdateActivity,
//   getStockMovements,
//   getProductActivity,
//   type FurnitureProduct,
//   type StockMovement,
//   type ProductActivity,
// } from "@/modules/furniture/services/productService";

// type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

// type UiProduct = {
//   id: string;
//   code: string;
//   name: string;
//   category: string;
//   subCategory: string;
//   description: string;
//   material: string;
//   finish: string;
//   color: string;
//   dimensions: string;
//   sellingPrice: number;
//   costPrice: number;
//   stock: number;
//   unit: string;
//   reorderLevel: number;
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
//   supplier: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
//   image: string;
// };

// type ToastState = {
//   type: "success" | "error";
//   message: string;
// } | null;

// function mapToUi(p: FurnitureProduct): UiProduct {
//   const stock = p.stock ?? 0;
//   const reorder = p.reorderLevel ?? p.minStock ?? 3;

//   let status: ProductStatus = "In Stock";
//   if (stock === 0) status = "Out of Stock";
//   else if (stock <= reorder) status = "Low Stock";

//   return {
//     id: p.id,
//     code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
//     name: p.name || "Untitled Product",
//     category: p.category || "—",
//     subCategory: p.subcategory || "",
//     description: p.description || "",
//     material: p.material || "—",
//     finish: p.finish || "—",
//     color: p.color || "—",
//     dimensions: p.dimensions || "—",
//     sellingPrice: p.sellingPrice ?? p.price ?? 0,
//     costPrice: p.costPrice ?? 0,
//     stock,
//     unit: p.unit || "Nos",
//     reorderLevel: reorder,
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
//     supplier: p.supplier || "—",
//     location: p.location || p.warehouseLocation || "—",
//     createdAt: p.createdAt?.toDate
//       ? p.createdAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     updatedAt: p.updatedAt?.toDate
//       ? p.updatedAt.toDate().toISOString().slice(0, 10)
//       : "—",
//     image:
//       p.imageUrl ||
//       p.image ||
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   };
// }

// function formatDateTime(ts?: { toDate?: () => Date } | null) {
//   if (!ts?.toDate) return "—";
//   try {
//     return ts.toDate().toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   } catch {
//     return "—";
//   }
// }

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// const statusClasses: Record<ProductStatus, string> = {
//   "In Stock": "bg-green-50 text-green-700 border-green-200",
//   "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
//   "Out of Stock": "bg-red-50 text-red-700 border-red-200",
//   Inactive: "bg-gray-100 text-gray-500 border-gray-200",
// };

// function ModalPortal({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;
//   return createPortal(children, document.body);
// }

// function Toast({
//   toast,
//   onClose,
// }: {
//   toast: NonNullable<ToastState>;
//   onClose: () => void;
// }) {
//   useEffect(() => {
//     const t = setTimeout(onClose, 3500);
//     return () => clearTimeout(t);
//   }, [onClose, toast.message]);

//   const isSuccess = toast.type === "success";

//   return (
//     <ModalPortal>
//       <div className="pointer-events-none fixed inset-x-0 top-4 z-[300] flex justify-center px-4 sm:justify-end sm:pr-6">
//         <div
//           className={`pointer-events-auto flex max-w-md items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${
//             isSuccess
//               ? "border-emerald-200 bg-white text-emerald-900"
//               : "border-red-200 bg-white text-red-900"
//           }`}
//           role="status"
//         >
//           <span
//             className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
//               isSuccess ? "bg-emerald-600" : "bg-red-600"
//             }`}
//           >
//             {isSuccess ? "✓" : "!"}
//           </span>
//           <div className="min-w-0 flex-1 pt-0.5">
//             <p className="text-sm font-semibold">
//               {isSuccess ? "Success" : "Something went wrong"}
//             </p>
//             <p className="mt-0.5 text-sm text-gray-600">{toast.message}</p>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="shrink-0 rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
//             aria-label="Dismiss"
//           >
//             ✕
//           </button>
//         </div>
//       </div>
//     </ModalPortal>
//   );
// }

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "inventory" | "pricing" | "history"
//   >("overview");

//   const [movements, setMovements] = useState<StockMovement[]>([]);
//   const [activity, setActivity] = useState<ProductActivity[]>([]);
//   const [logsLoading, setLogsLoading] = useState(false);

//   const [showEdit, setShowEdit] = useState(false);
//   const [showStock, setShowStock] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [toast, setToast] = useState<ToastState>(null);

//   const showToast = (type: "success" | "error", message: string) => {
//     setToast({ type, message });
//   };

//   const [editForm, setEditForm] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     sellingPrice: "",
//     costPrice: "",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     location: "",
//   });

//   const [stockForm, setStockForm] = useState({
//     type: "Add" as "Add" | "Remove",
//     quantity: "",
//     reason: "",
//   });

//   const loadLogs = useCallback(async (id: string) => {
//     setLogsLoading(true);
//     try {
//       const [m, a] = await Promise.all([
//         getStockMovements(id),
//         getProductActivity(id),
//       ]);
//       setMovements(m);
//       setActivity(a);
//     } catch (err) {
//       console.error("Failed to load product logs:", err);
//     } finally {
//       setLogsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const open = showEdit || showStock || showDelete;
//     if (open) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [showEdit, showStock, showDelete]);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           showToast("error", "Product not found.");
//           router.push("/furniture/products");
//           return;
//         }

//         const ui = mapToUi(data);
//         setProduct(ui);

//         setEditForm({
//           name: ui.name,
//           category: ui.category,
//           subCategory: ui.subCategory,
//           description: ui.description,
//           material: ui.material,
//           finish: ui.finish,
//           color: ui.color,
//           dimensions: ui.dimensions,
//           sellingPrice: String(ui.sellingPrice),
//           costPrice: String(ui.costPrice),
//           reorderLevel: String(ui.reorderLevel),
//           leadTime: ui.leadTime,
//           warranty: ui.warranty,
//           supplier: ui.supplier,
//           location: ui.location,
//         });

//         await loadLogs(productId);
//       } catch (err) {
//         console.error("Failed to load product:", err);
//         showToast("error", "Failed to load product. Please try again.");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (productId) load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router, loadLogs]);

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const currentStock = product.stock;
//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

//   const stockStatus: ProductStatus =
//     currentStock === 0
//       ? "Out of Stock"
//       : currentStock <= product.reorderLevel
//       ? "Low Stock"
//       : "In Stock";

//   const handleSaveEdit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await updateProduct(product.id, {
//         name: editForm.name.trim(),
//         category: editForm.category,
//         subcategory: editForm.subCategory,
//         description: editForm.description,
//         material: editForm.material,
//         finish: editForm.finish,
//         color: editForm.color,
//         dimensions: editForm.dimensions,
//         sellingPrice: Number(editForm.sellingPrice) || 0,
//         price: Number(editForm.sellingPrice) || 0,
//         costPrice: Number(editForm.costPrice) || 0,
//         reorderLevel: Number(editForm.reorderLevel) || 0,
//         minStock: Number(editForm.reorderLevel) || 0,
//         leadTime: editForm.leadTime,
//         warranty: editForm.warranty,
//         supplier: editForm.supplier,
//         location: editForm.location,
//         warehouseLocation: editForm.location,
//       });

//       await recordProductUpdateActivity(
//         product.id,
//         "Product details updated",
//         `Name: ${editForm.name.trim()}`
//       );

//       setProduct((prev) =>
//         prev
//           ? {
//               ...prev,
//               name: editForm.name.trim(),
//               category: editForm.category,
//               subCategory: editForm.subCategory,
//               description: editForm.description,
//               material: editForm.material,
//               finish: editForm.finish,
//               color: editForm.color,
//               dimensions: editForm.dimensions,
//               sellingPrice: Number(editForm.sellingPrice) || 0,
//               costPrice: Number(editForm.costPrice) || 0,
//               reorderLevel: Number(editForm.reorderLevel) || 0,
//               leadTime: editForm.leadTime,
//               warranty: editForm.warranty,
//               supplier: editForm.supplier,
//               location: editForm.location,
//             }
//           : prev
//       );

//       setShowEdit(false);
//       showToast("success", "Product updated successfully.");
//       loadLogs(product.id);
//     } catch (err) {
//       console.error("Update failed:", err);
//       showToast("error", "Failed to update product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleStockUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const quantity = Number(stockForm.quantity);
//     if (!quantity || quantity <= 0) {
//       showToast("error", "Please enter a valid quantity.");
//       return;
//     }

//     const type = stockForm.type;
//     const previousStock = currentStock;
//     const newStock =
//       type === "Add"
//         ? currentStock + quantity
//         : Math.max(currentStock - quantity, 0);

//     setSaving(true);
//     try {
//       await updateProduct(product.id, { stock: newStock });
//       await recordStockMovement({
//         productId: product.id,
//         type,
//         quantity,
//         previousStock,
//         newStock,
//         reason: stockForm.reason.trim(),
//       });

//       setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
//       setStockForm({ type: "Add", quantity: "", reason: "" });
//       setShowStock(false);
//       showToast(
//         "success",
//         type === "Add"
//           ? `Added ${quantity} ${product.unit}. Stock is now ${newStock}.`
//           : `Removed ${quantity} ${product.unit}. Stock is now ${newStock}.`
//       );
//       loadLogs(product.id);
//     } catch (err) {
//       console.error("Stock update failed:", err);
//       showToast("error", "Failed to update stock. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     setSaving(true);
//     try {
//       await deleteProduct(product.id);
//       setShowDelete(false);
//       showToast("success", "Product deleted successfully.");
//       setTimeout(() => router.push("/furniture/products"), 800);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       showToast("error", "Failed to delete product. Please try again.");
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       {toast && <Toast toast={toast} onClose={() => setToast(null)} />}

//       <div className="mx-auto max-w-[1450px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="mb-6">
//           <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
//             <button
//               type="button"
//               onClick={() => router.push("/furniture/products")}
//               className="font-semibold text-[#9a5b18] hover:underline"
//             >
//               Products
//             </button>
//             <span>/</span>
//             <span className="text-gray-700">{product.name}</span>
//           </div>

//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h1 className="text-2xl font-bold tracking-tight text-[#1d2723]">
//                   {product.name}
//                 </h1>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//                 >
//                   {stockStatus}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">
//                 Product Code:{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.code}
//                 </span>
//               </p>
//             </div>

//             {/* <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowStock(true)}
//                 className="rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4]"
//               >
//                 Update Stock
//               </button>
//               <a
//                 href={`/furniture/products/${product.id}/pdf`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Product PDF
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setShowEdit(true)}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Edit Product
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowDelete(true)}
//                 className="rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
//               >
//                 Delete Product
//               </button>
//             </div> */}

//             <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
//               <button type="button" onClick={() => setShowStock(true)}
//                 className="min-h-[44px] w-full rounded-lg border border-[#176b5b] bg-white px-4 py-2.5 text-sm font-semibold text-[#176b5b] hover:bg-[#eef7f4] sm:w-auto">
//                 Update Stock
//               </button>
//               <a href={`/furniture/products/${product.id}/pdf`}
//                 className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto">
//                 Product PDF
//               </a>
//               <button type="button" onClick={() => setShowEdit(true)}
//                 className="min-h-[44px] w-full rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] sm:w-auto">
//                 Edit Product
//               </button>
//               <button type="button" onClick={() => setShowDelete(true)}
//                 className="min-h-[44px] w-full rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 sm:w-auto">
//                 Delete Product
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 overflow-hidden rounded-xl border border-[#e4e2da] bg-white">
//           <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//             <div className="bg-[#f3f2ed] p-5">
//               <div className="overflow-hidden rounded-xl bg-white">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[360px] w-full object-cover"
//                 />
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <MiniInfo label="Category" value={product.category} />
//                 <MiniInfo
//                   label="Stock"
//                   value={`${currentStock} ${product.unit}`}
//                 />
//                 <MiniInfo label="Warranty" value={product.warranty} />
//               </div>
//             </div>

//             <div className="p-6 lg:p-8">
//               <div className="flex flex-col justify-between gap-5 sm:flex-row">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     {product.category} / {product.subCategory}
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                   <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
//                     {product.description || "No description available."}
//                   </p>
//                 </div>
//                 <div className="sm:text-right">
//                   <p className="text-xs text-gray-400">Selling Price</p>
//                   <p className="mt-1 text-3xl font-bold text-[#176b5b]">
//                     {formatCurrency(product.sellingPrice)}
//                   </p>
//                   <p className="mt-1 text-xs text-gray-400">
//                     per {product.unit}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-7 h-px bg-[#e4e2da]" />

//               <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
//                 <DetailItem label="Material" value={product.material} />
//                 <DetailItem label="Finish" value={product.finish} />
//                 <DetailItem label="Color" value={product.color} />
//                 <DetailItem label="Dimensions" value={product.dimensions} />
//                 <DetailItem label="Lead Time" value={product.leadTime} />
//                 <DetailItem label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <KpiCard
//             label="Selling Price"
//             value={formatCurrency(product.sellingPrice)}
//             subtitle="Current selling price"
//             icon="₹"
//           />
//           <KpiCard
//             label="Cost Price"
//             value={formatCurrency(product.costPrice)}
//             subtitle="Product cost"
//             icon="C"
//           />
//           <KpiCard
//             label="Estimated Profit"
//             value={formatCurrency(profit)}
//             subtitle={`${margin.toFixed(1)}% margin`}
//             icon="↗"
//             valueClass="text-green-700"
//           />
//           <KpiCard
//             label="Available Stock"
//             value={`${currentStock} ${product.unit}`}
//             subtitle={`Reorder level: ${product.reorderLevel}`}
//             icon="▣"
//             valueClass={
//               stockStatus === "Low Stock"
//                 ? "text-yellow-700"
//                 : stockStatus === "Out of Stock"
//                 ? "text-red-700"
//                 : "text-[#176b5b]"
//             }
//           />
//         </div>

//         <div className="mb-5 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white">
//           <div className="flex min-w-max border-b border-[#e4e2da]">
//             <TabButton
//               active={activeTab === "overview"}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </TabButton>
//             <TabButton
//               active={activeTab === "inventory"}
//               onClick={() => setActiveTab("inventory")}
//             >
//               Inventory
//             </TabButton>
//             <TabButton
//               active={activeTab === "pricing"}
//               onClick={() => setActiveTab("pricing")}
//             >
//               Pricing
//             </TabButton>
//             <TabButton
//               active={activeTab === "history"}
//               onClick={() => setActiveTab("history")}
//             >
//               History
//             </TabButton>
//           </div>
//         </div>

//         {activeTab === "overview" && (
//           <OverviewSection product={product} currentStock={currentStock} />
//         )}
//         {activeTab === "inventory" && (
//           <InventorySection
//             product={product}
//             currentStock={currentStock}
//             stockStatus={stockStatus}
//             movements={movements}
//             logsLoading={logsLoading}
//             onUpdateStock={() => setShowStock(true)}
//           />
//         )}
//         {activeTab === "pricing" && (
//           <PricingSection product={product} profit={profit} margin={margin} />
//         )}
//         {activeTab === "history" && (
//           <HistorySection activity={activity} logsLoading={logsLoading} />
//         )}
//       </div>

//       {/* ========== EDIT MODAL ========== */}
//       {showEdit && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowEdit(false)}
//           >
//             <div
//               className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
//                 <div>
//                   <h2 className="text-lg font-bold text-[#1d2723]">
//                     Edit Product
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Update product master information.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowEdit(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleSaveEdit} className="p-6">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <FormInput
//                     label="Product Name"
//                     value={editForm.name}
//                     onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
//                   />
//                   <FormInput
//                     label="Category"
//                     value={editForm.category}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, category: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Sub Category"
//                     value={editForm.subCategory}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, subCategory: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Material"
//                     value={editForm.material}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, material: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Finish"
//                     value={editForm.finish}
//                     onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
//                   />
//                   <FormInput
//                     label="Color"
//                     value={editForm.color}
//                     onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
//                   />
//                   <FormInput
//                     label="Dimensions"
//                     value={editForm.dimensions}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, dimensions: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Lead Time"
//                     value={editForm.leadTime}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, leadTime: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warranty"
//                     value={editForm.warranty}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, warranty: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Supplier"
//                     value={editForm.supplier}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, supplier: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Warehouse Location"
//                     value={editForm.location}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, location: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Selling Price"
//                     type="number"
//                     value={editForm.sellingPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, sellingPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Cost Price"
//                     type="number"
//                     value={editForm.costPrice}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, costPrice: v }))
//                     }
//                   />
//                   <FormInput
//                     label="Reorder Level"
//                     type="number"
//                     value={editForm.reorderLevel}
//                     onChange={(v) =>
//                       setEditForm((p) => ({ ...p, reorderLevel: v }))
//                     }
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     value={editForm.description}
//                     onChange={(e) =>
//                       setEditForm((p) => ({
//                         ...p,
//                         description: e.target.value,
//                       }))
//                     }
//                     rows={4}
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowEdit(false)}
//                     className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== STOCK MODAL ========== */}
//       {showStock && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowStock(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                 <div>
//                   <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
//                   <p className="mt-1 text-xs text-gray-500">
//                     Current stock: {currentStock} {product.unit}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setShowStock(false)}
//                   className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <form onSubmit={handleStockUpdate} className="p-6">
//                 <div className="mb-4 grid grid-cols-2 gap-3">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Add" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Add"
//                         ? "border-green-300 bg-green-50 text-green-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     + Add Stock
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setStockForm((p) => ({ ...p, type: "Remove" }))
//                     }
//                     className={`rounded-lg border px-4 py-3 text-sm font-semibold ${
//                       stockForm.type === "Remove"
//                         ? "border-red-300 bg-red-50 text-red-700"
//                         : "border-gray-200 text-gray-600"
//                     }`}
//                   >
//                     − Remove Stock
//                   </button>
//                 </div>

//                 <FormInput
//                   label="Quantity"
//                   type="number"
//                   value={stockForm.quantity}
//                   onChange={(v) =>
//                     setStockForm((p) => ({ ...p, quantity: v }))
//                   }
//                   placeholder="Enter quantity"
//                 />

//                 <div className="mt-4">
//                   <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                     Reason
//                   </label>
//                   <textarea
//                     value={stockForm.reason}
//                     onChange={(e) =>
//                       setStockForm((p) => ({ ...p, reason: e.target.value }))
//                     }
//                     rows={3}
//                     placeholder="Example: New stock received"
//                     className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//                   />
//                 </div>

//                 <div className="mt-6 flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowStock(false)}
//                     className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={saving}
//                     className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#125848] disabled:opacity-60"
//                   >
//                     {saving ? "Updating..." : "Update Stock"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </ModalPortal>
//       )}

//       {/* ========== DELETE MODAL ========== */}
//       {showDelete && (
//         <ModalPortal>
//           <div
//             className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
//             onClick={() => setShowDelete(false)}
//           >
//             <div
//               className="relative my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
//                 !
//               </div>
//               <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
//                 Delete Product?
//               </h2>
//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Are you sure you want to delete{" "}
//                 <span className="font-semibold text-gray-700">
//                   {product.name}
//                 </span>
//                 ? This action cannot be undone.
//               </p>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowDelete(false)}
//                   className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleDelete}
//                   disabled={saving}
//                   className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
//                 >
//                   {saving ? "Deleting..." : "Delete Product"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ModalPortal>
//       )}
//     </div>
//   );
// }

// function KpiCard({
//   label,
//   value,
//   subtitle,
//   icon,
//   valueClass = "text-[#1d2723]",
// }: {
//   label: string;
//   value: string;
//   subtitle: string;
//   icon: string;
//   valueClass?: string;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500">{label}</p>
//           <p className={`mt-2 text-2xl font-bold ${valueClass}`}>{value}</p>
//           <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
//         </div>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7f4] font-bold text-[#176b5b]">
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MiniInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-white p-3 text-center">
//       <p className="text-[10px] uppercase tracking-wide text-gray-400">
//         {label}
//       </p>
//       <p className="mt-1 truncate text-xs font-semibold text-gray-700">
//         {value}
//       </p>
//     </div>
//   );
// }

// function DetailItem({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function TabButton({
//   active,
//   onClick,
//   children,
// }: {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
//         active
//           ? "border-[#176b5b] text-[#176b5b]"
//           : "border-transparent text-gray-500 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function FormInput({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
// }: {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   type?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
//       />
//     </div>
//   );
// }

// function OverviewSection({
//   product,
//   currentStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-5 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Complete product master information
//         </p>
//         <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <InfoRow label="Product Code" value={product.code} />
//           <InfoRow label="Category" value={product.category} />
//           <InfoRow label="Sub Category" value={product.subCategory} />
//           <InfoRow label="Material" value={product.material} />
//           <InfoRow label="Finish" value={product.finish} />
//           <InfoRow label="Color" value={product.color} />
//           <InfoRow label="Dimensions" value={product.dimensions} />
//           <InfoRow label="Unit" value={product.unit} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//           <InfoRow label="Warranty" value={product.warranty} />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
//           <div className="mt-5 text-center">
//             <p className="text-4xl font-bold text-[#176b5b]">{currentStock}</p>
//             <p className="mt-1 text-sm text-gray-500">
//               {product.unit} available
//             </p>
//           </div>
//         </div>
//         <div className="rounded-xl border border-[#e4e2da] bg-white p-5">
//           <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
//           <div className="mt-4 space-y-4">
//             <InfoRow label="Created" value={product.createdAt} />
//             <InfoRow label="Last Updated" value={product.updatedAt} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InventorySection({
//   product,
//   currentStock,
//   stockStatus,
//   movements,
//   logsLoading,
//   onUpdateStock,
// }: {
//   product: UiProduct;
//   currentStock: number;
//   stockStatus: ProductStatus;
//   movements: StockMovement[];
//   logsLoading: boolean;
//   onUpdateStock: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
//           <button
//             type="button"
//             onClick={onUpdateStock}
//             className="rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#125848]"
//           >
//             Update
//           </button>
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-5xl font-bold text-[#176b5b]">{currentStock}</p>
//           <p className="mt-2 text-sm text-gray-500">
//             {product.unit} available
//           </p>
//           <span
//             className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[stockStatus]}`}
//           >
//             {stockStatus}
//           </span>
//         </div>
//         <div className="mt-8 space-y-4">
//           <InfoRow
//             label="Reorder Level"
//             value={`${product.reorderLevel} ${product.unit}`}
//           />
//           <InfoRow label="Warehouse" value={product.location} />
//           <InfoRow label="Supplier" value={product.supplier} />
//           <InfoRow label="Lead Time" value={product.leadTime} />
//         </div>
//       </div>

//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6 lg:col-span-2">
//         <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
//         <p className="mt-1 text-xs text-gray-500">
//           Add / remove history for this product
//         </p>

//         {logsLoading ? (
//           <div className="mt-8 flex justify-center py-10">
//             <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//           </div>
//         ) : movements.length === 0 ? (
//           <p className="mt-8 rounded-lg bg-[#fafaf8] px-4 py-8 text-center text-sm text-gray-500">
//             No stock movements yet. Use <strong>Update Stock</strong> to record
//             the first one.
//           </p>
//         ) : (
//           <div className="mt-5 overflow-x-auto">
//             <table className="w-full min-w-[520px] text-left text-sm">
//               <thead>
//                 <tr className="border-b border-[#e4e2da] text-xs uppercase tracking-wide text-gray-400">
//                   <th className="pb-3 pr-3 font-semibold">Date</th>
//                   <th className="pb-3 pr-3 font-semibold">Type</th>
//                   <th className="pb-3 pr-3 font-semibold">Qty</th>
//                   <th className="pb-3 pr-3 font-semibold">Before → After</th>
//                   <th className="pb-3 font-semibold">Reason</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {movements.map((m) => (
//                   <tr
//                     key={m.id}
//                     className="border-b border-[#eeece6] last:border-0"
//                   >
//                     <td className="py-3 pr-3 text-gray-600">
//                       {formatDateTime(m.createdAt)}
//                     </td>
//                     <td className="py-3 pr-3">
//                       <span
//                         className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
//                           m.type === "Add"
//                             ? "bg-green-50 text-green-700"
//                             : "bg-red-50 text-red-700"
//                         }`}
//                       >
//                         {m.type}
//                       </span>
//                     </td>
//                     <td className="py-3 pr-3 font-semibold text-gray-800">
//                       {m.type === "Add" ? "+" : "−"}
//                       {m.quantity}
//                     </td>
//                     <td className="py-3 pr-3 text-gray-600">
//                       {m.previousStock} → {m.newStock}
//                     </td>
//                     <td className="py-3 text-gray-500">{m.reason || "—"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function PricingSection({
//   product,
//   profit,
//   margin,
// }: {
//   product: UiProduct;
//   profit: number;
//   margin: number;
// }) {
//   return (
//     <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Selling Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#176b5b]">
//           {formatCurrency(product.sellingPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//         <p className="text-sm text-gray-500">Cost Price</p>
//         <p className="mt-3 text-3xl font-bold text-[#1d2723]">
//           {formatCurrency(product.costPrice)}
//         </p>
//       </div>
//       <div className="rounded-xl border border-green-200 bg-green-50 p-6">
//         <p className="text-sm text-green-700">Estimated Profit</p>
//         <p className="mt-3 text-3xl font-bold text-green-700">
//           {formatCurrency(profit)}
//         </p>
//         <p className="mt-2 text-xs text-green-600">
//           Margin: {margin.toFixed(1)}%
//         </p>
//       </div>
//     </div>
//   );
// }

// function HistorySection({
//   activity,
//   logsLoading,
// }: {
//   activity: ProductActivity[];
//   logsLoading: boolean;
// }) {
//   return (
//     <div className="rounded-xl border border-[#e4e2da] bg-white p-6">
//       <h2 className="font-semibold text-[#1d2723]">Product History</h2>
//       <p className="mt-1 text-xs text-gray-500">
//         Edits and stock changes for this product
//       </p>

//       {logsLoading ? (
//         <div className="mt-8 flex justify-center py-10">
//           <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//         </div>
//       ) : activity.length === 0 ? (
//         <p className="mt-8 rounded-lg bg-[#fafaf8] px-4 py-8 text-center text-sm text-gray-500">
//           No activity yet. Editing the product or updating stock will appear
//           here.
//         </p>
//       ) : (
//         <ul className="mt-6 space-y-0">
//           {activity.map((item) => (
//             <li
//               key={item.id}
//               className="flex gap-4 border-b border-[#eeece6] py-4 last:border-0"
//             >
//               <div
//                 className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
//                   item.action === "stock_add"
//                     ? "bg-emerald-600"
//                     : item.action === "stock_remove"
//                     ? "bg-red-500"
//                     : item.action === "updated"
//                     ? "bg-[#176b5b]"
//                     : "bg-slate-500"
//                 }`}
//               >
//                 {item.action === "stock_add"
//                   ? "+"
//                   : item.action === "stock_remove"
//                   ? "−"
//                   : item.action === "updated"
//                   ? "✎"
//                   : "•"}
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="text-sm font-semibold text-gray-800">
//                   {item.summary}
//                 </p>
//                 {item.details ? (
//                   <p className="mt-0.5 text-xs text-gray-500">{item.details}</p>
//                 ) : null}
//                 <p className="mt-1 text-xs text-gray-400">
//                   {formatDateTime(item.createdAt)}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-start justify-between gap-4 border-b border-[#eeece6] pb-3 last:border-0 last:pb-0">
//       <span className="text-xs text-gray-400">{label}</span>
//       <span className="text-right text-sm font-semibold text-gray-700">
//         {value}
//       </span>
//     </div>
//   );
// }


"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, useRouter } from "next/navigation";
import {
  getProductById,
  updateProduct,
  deleteProduct,
  recordStockMovement,
  recordProductUpdateActivity,
  getStockMovements,
  getProductActivity,
  type FurnitureProduct,
  type StockMovement,
  type ProductActivity,
} from "@/modules/furniture/services/productService";

type ProductStatus = "In Stock" | "Low Stock" | "Out of Stock" | "Inactive";

type UiProduct = {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  material: string;
  finish: string;
  color: string;
  dimensions: string;
  sellingPrice: number;
  costPrice: number;
  stock: number;
  unit: string;
  reorderLevel: number;
  status: ProductStatus;
  leadTime: string;
  warranty: string;
  supplier: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  image: string;
};

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

function mapToUi(p: FurnitureProduct): UiProduct {
  const stock = p.stock ?? 0;
  const reorder = p.reorderLevel ?? p.minStock ?? 3;

  let status: ProductStatus = "In Stock";
  if (stock === 0) status = "Out of Stock";
  else if (stock <= reorder) status = "Low Stock";
  if (p.status === "Inactive") status = "Inactive";

  return {
    id: p.id,
    code: p.sku || p.code || p.id.slice(0, 8).toUpperCase(),
    name: p.name || "Untitled Product",
    category: p.category || "—",
    subCategory: p.subcategory || "",
    description: p.description || "",
    material: p.material || "—",
    finish: p.finish || "—",
    color: p.color || "—",
    dimensions: p.dimensions || "—",
    sellingPrice: p.sellingPrice ?? p.price ?? 0,
    costPrice: p.costPrice ?? 0,
    stock,
    unit: p.unit || "Nos",
    reorderLevel: reorder,
    status,
    leadTime: p.leadTime || "—",
    warranty: p.warranty || "—",
    supplier: p.supplier || "—",
    location: p.location || p.warehouseLocation || "—",
    createdAt: p.createdAt?.toDate
      ? p.createdAt.toDate().toISOString().slice(0, 10)
      : "—",
    updatedAt: p.updatedAt?.toDate
      ? p.updatedAt.toDate().toISOString().slice(0, 10)
      : "—",
    image:
      p.imageUrl ||
      p.image ||
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  };
}

function formatDateTime(ts?: { toDate?: () => Date } | null) {
  if (!ts?.toDate) return "—";
  try {
    return ts.toDate().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const statusClasses: Record<ProductStatus, string> = {
  "In Stock": "bg-green-50 text-green-700 border-green-200",
  "Low Stock": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Out of Stock": "bg-red-50 text-red-700 border-red-200",
  Inactive: "bg-gray-100 text-gray-500 border-gray-200",
};

function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

function Toast({
  toast,
  onClose,
}: {
  toast: NonNullable<ToastState>;
  onClose: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose, toast.message]);

  const isSuccess = toast.type === "success";

  return (
    <ModalPortal>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[300] flex justify-center px-3 sm:justify-end sm:pr-6">
        <div
          className={`pointer-events-auto flex max-w-md items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${
            isSuccess
              ? "border-emerald-200 bg-white text-emerald-900"
              : "border-red-200 bg-white text-red-900"
          }`}
          role="status"
        >
          <span
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
              isSuccess ? "bg-emerald-600" : "bg-red-600"
            }`}
          >
            {isSuccess ? "✓" : "!"}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm font-semibold">
              {isSuccess ? "Success" : "Something went wrong"}
            </p>
            <p className="mt-0.5 text-sm text-gray-600">{toast.message}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-100"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const [product, setProduct] = useState<UiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "inventory" | "pricing" | "history"
  >("overview");

  const [movements, setMovements] = useState<StockMovement[]>([]);
  const [activity, setActivity] = useState<ProductActivity[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
  };

  const [editForm, setEditForm] = useState({
    name: "",
    category: "",
    subCategory: "",
    description: "",
    material: "",
    finish: "",
    color: "",
    dimensions: "",
    sellingPrice: "",
    costPrice: "",
    reorderLevel: "",
    leadTime: "",
    warranty: "",
    supplier: "",
    location: "",
  });

  const [stockForm, setStockForm] = useState({
    type: "Add" as "Add" | "Remove",
    quantity: "",
    reason: "",
  });

  const loadLogs = useCallback(async (id: string) => {
    setLogsLoading(true);
    try {
      const [m, a] = await Promise.all([
        getStockMovements(id),
        getProductActivity(id),
      ]);
      setMovements(m);
      setActivity(a);
    } catch (err) {
      console.error("Failed to load product logs:", err);
    } finally {
      setLogsLoading(false);
    }
  }, []);

  useEffect(() => {
    const open = showEdit || showStock || showDelete;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showEdit, showStock, showDelete]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getProductById(productId);
        if (cancelled) return;

        if (!data) {
          showToast("error", "Product not found.");
          router.push("/furniture/products");
          return;
        }

        const ui = mapToUi(data);
        setProduct(ui);

        setEditForm({
          name: ui.name,
          category: ui.category,
          subCategory: ui.subCategory,
          description: ui.description,
          material: ui.material,
          finish: ui.finish,
          color: ui.color,
          dimensions: ui.dimensions,
          sellingPrice: String(ui.sellingPrice),
          costPrice: String(ui.costPrice),
          reorderLevel: String(ui.reorderLevel),
          leadTime: ui.leadTime === "—" ? "" : ui.leadTime,
          warranty: ui.warranty === "—" ? "" : ui.warranty,
          supplier: ui.supplier === "—" ? "" : ui.supplier,
          location: ui.location === "—" ? "" : ui.location,
        });

        await loadLogs(productId);
      } catch (err) {
        console.error("Failed to load product:", err);
        showToast("error", "Failed to load product. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (productId) load();
    return () => {
      cancelled = true;
    };
  }, [productId, router, loadLogs]);

  if (loading || !product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  const currentStock = product.stock;
  const profit = product.sellingPrice - product.costPrice;
  const margin =
    product.sellingPrice > 0 ? (profit / product.sellingPrice) * 100 : 0;

  const stockStatus: ProductStatus =
    product.status === "Inactive"
      ? "Inactive"
      : currentStock === 0
        ? "Out of Stock"
        : currentStock <= product.reorderLevel
          ? "Low Stock"
          : "In Stock";

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await updateProduct(product.id, {
        name: editForm.name.trim(),
        category: editForm.category,
        subcategory: editForm.subCategory,
        description: editForm.description,
        material: editForm.material,
        finish: editForm.finish,
        color: editForm.color,
        dimensions: editForm.dimensions,
        sellingPrice: Number(editForm.sellingPrice) || 0,
        price: Number(editForm.sellingPrice) || 0,
        costPrice: Number(editForm.costPrice) || 0,
        reorderLevel: Number(editForm.reorderLevel) || 0,
        minStock: Number(editForm.reorderLevel) || 0,
        leadTime: editForm.leadTime,
        warranty: editForm.warranty,
        supplier: editForm.supplier,
        location: editForm.location,
        warehouseLocation: editForm.location,
      });

      await recordProductUpdateActivity(
        product.id,
        "Product details updated",
        `Name: ${editForm.name.trim()}`
      );

      setProduct((prev) =>
        prev
          ? {
              ...prev,
              name: editForm.name.trim(),
              category: editForm.category,
              subCategory: editForm.subCategory,
              description: editForm.description,
              material: editForm.material,
              finish: editForm.finish,
              color: editForm.color,
              dimensions: editForm.dimensions,
              sellingPrice: Number(editForm.sellingPrice) || 0,
              costPrice: Number(editForm.costPrice) || 0,
              reorderLevel: Number(editForm.reorderLevel) || 0,
              leadTime: editForm.leadTime || "—",
              warranty: editForm.warranty || "—",
              supplier: editForm.supplier || "—",
              location: editForm.location || "—",
            }
          : prev
      );

      setShowEdit(false);
      showToast("success", "Product updated successfully.");
      loadLogs(product.id);
    } catch (err) {
      console.error("Update failed:", err);
      showToast("error", "Failed to update product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleStockUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const quantity = Number(stockForm.quantity);
    if (!quantity || quantity <= 0) {
      showToast("error", "Please enter a valid quantity.");
      return;
    }

    const type = stockForm.type;
    const previousStock = currentStock;
    const newStock =
      type === "Add"
        ? currentStock + quantity
        : Math.max(currentStock - quantity, 0);

    setSaving(true);
    try {
      await updateProduct(product.id, { stock: newStock });
      await recordStockMovement({
        productId: product.id,
        type,
        quantity,
        previousStock,
        newStock,
        reason: stockForm.reason.trim(),
      });

      setProduct((prev) => (prev ? { ...prev, stock: newStock } : prev));
      setStockForm({ type: "Add", quantity: "", reason: "" });
      setShowStock(false);
      showToast(
        "success",
        type === "Add"
          ? `Added ${quantity} ${product.unit}. Stock is now ${newStock}.`
          : `Removed ${quantity} ${product.unit}. Stock is now ${newStock}.`
      );
      loadLogs(product.id);
    } catch (err) {
      console.error("Stock update failed:", err);
      showToast("error", "Failed to update stock. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setSaving(true);
    try {
      await deleteProduct(product.id);
      setShowDelete(false);
      showToast("success", "Product deleted successfully.");
      setTimeout(() => router.push("/furniture/products"), 800);
    } catch (err) {
      console.error("Delete failed:", err);
      showToast("error", "Failed to delete product. Please try again.");
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
      {toast && <Toast toast={toast} onClose={() => setToast(null)} />}

      <div className="mx-auto max-w-[1450px] px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="mb-4 sm:mb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:mb-4 sm:text-sm">
            <button
              type="button"
              onClick={() => router.push("/furniture/products")}
              className="font-semibold text-[#9a5b18] hover:underline"
            >
              Products
            </button>
            <span>/</span>
            <span className="truncate text-gray-700">{product.name}</span>
          </div>

          <div className="flex flex-col justify-between gap-3 sm:gap-4 lg:flex-row lg:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-xl font-bold tracking-tight text-[#1d2723] sm:text-2xl">
                  {product.name}
                </h1>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold sm:px-3 sm:text-xs ${statusClasses[stockStatus]}`}
                >
                  {stockStatus}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                Code:{" "}
                <span className="font-semibold text-gray-700">
                  {product.code}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={() => setShowStock(true)}
                className="min-h-[44px] rounded-lg border border-[#176b5b] bg-white px-3 py-2.5 text-xs font-semibold text-[#176b5b] hover:bg-[#eef7f4] sm:px-4 sm:text-sm"
              >
                Update Stock
              </button>
              <a
                href={`/furniture/products/${product.id}/pdf`}
                className="flex min-h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:px-4 sm:text-sm"
              >
                Product PDF
              </a>
              <button
                type="button"
                onClick={() => setShowEdit(true)}
                className="min-h-[44px] rounded-lg bg-[#176b5b] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#125848] sm:px-5 sm:text-sm"
              >
                Edit Product
              </button>
              <button
                type="button"
                onClick={() => setShowDelete(true)}
                className="min-h-[44px] rounded-lg border border-red-200 bg-white px-3 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 sm:px-4 sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-4 overflow-hidden rounded-xl border border-[#e4e2da] bg-white sm:mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr]">
            <div className="bg-[#f3f2ed] p-3 sm:p-5">
              <div className="overflow-hidden rounded-xl bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[360px]"
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                <MiniInfo label="Category" value={product.category} />
                <MiniInfo
                  label="Stock"
                  value={`${currentStock} ${product.unit}`}
                />
                <MiniInfo label="Warranty" value={product.warranty} />
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-5">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9a5b18] sm:text-xs">
                    {product.category}
                    {product.subCategory ? ` / ${product.subCategory}` : ""}
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-[#1d2723] sm:mt-2 sm:text-2xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4">
                    {product.description || "No description available."}
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="text-xs text-gray-400">Selling Price</p>
                  <p className="mt-1 text-2xl font-bold text-[#176b5b] sm:text-3xl">
                    {formatCurrency(product.sellingPrice)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    per {product.unit}
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-[#e4e2da] sm:my-7" />

              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:grid-cols-3">
                <DetailItem label="Material" value={product.material} />
                <DetailItem label="Finish" value={product.finish} />
                <DetailItem label="Color" value={product.color} />
                <DetailItem label="Dimensions" value={product.dimensions} />
                <DetailItem label="Lead Time" value={product.leadTime} />
                <DetailItem label="Warranty" value={product.warranty} />
              </div>
            </div>
          </div>
        </div>

        {/* KPIs — 2 per row mobile */}
        <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-6 sm:gap-4 xl:grid-cols-4">
          <KpiCard
            label="Selling Price"
            value={formatCurrency(product.sellingPrice)}
            subtitle="Current selling price"
            icon="₹"
          />
          <KpiCard
            label="Cost Price"
            value={formatCurrency(product.costPrice)}
            subtitle="Product cost"
            icon="C"
          />
          <KpiCard
            label="Est. Profit"
            value={formatCurrency(profit)}
            subtitle={`${margin.toFixed(1)}% margin`}
            icon="↗"
            valueClass="text-green-700"
          />
          <KpiCard
            label="Available Stock"
            value={`${currentStock} ${product.unit}`}
            subtitle={`Reorder: ${product.reorderLevel}`}
            icon="▣"
            valueClass={
              stockStatus === "Low Stock"
                ? "text-yellow-700"
                : stockStatus === "Out of Stock"
                  ? "text-red-700"
                  : "text-[#176b5b]"
            }
          />
        </div>

        {/* Tabs */}
        <div className="mb-4 overflow-x-auto rounded-xl border border-[#e4e2da] bg-white sm:mb-5">
          <div className="flex min-w-max border-b border-[#e4e2da]">
            <TabButton
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === "inventory"}
              onClick={() => setActiveTab("inventory")}
            >
              Inventory
            </TabButton>
            <TabButton
              active={activeTab === "pricing"}
              onClick={() => setActiveTab("pricing")}
            >
              Pricing
            </TabButton>
            <TabButton
              active={activeTab === "history"}
              onClick={() => setActiveTab("history")}
            >
              History
            </TabButton>
          </div>
        </div>

        {activeTab === "overview" && (
          <OverviewSection product={product} currentStock={currentStock} />
        )}
        {activeTab === "inventory" && (
          <InventorySection
            product={product}
            currentStock={currentStock}
            stockStatus={stockStatus}
            movements={movements}
            logsLoading={logsLoading}
            onUpdateStock={() => setShowStock(true)}
          />
        )}
        {activeTab === "pricing" && (
          <PricingSection product={product} profit={profit} margin={margin} />
        )}
        {activeTab === "history" && (
          <HistorySection activity={activity} logsLoading={logsLoading} />
        )}
      </div>

      {/* EDIT */}
      {showEdit && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center overflow-y-auto bg-black/40 p-0 sm:items-center sm:p-4"
            onClick={() => setShowEdit(false)}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:my-auto sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
                <div>
                  <h2 className="text-base font-bold text-[#1d2723] sm:text-lg">
                    Edit Product
                  </h2>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Update product master information.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <FormInput
                    label="Product Name"
                    value={editForm.name}
                    onChange={(v) => setEditForm((p) => ({ ...p, name: v }))}
                  />
                  <FormInput
                    label="Category"
                    value={editForm.category}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, category: v }))
                    }
                  />
                  <FormInput
                    label="Sub Category"
                    value={editForm.subCategory}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, subCategory: v }))
                    }
                  />
                  <FormInput
                    label="Material"
                    value={editForm.material}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, material: v }))
                    }
                  />
                  <FormInput
                    label="Finish"
                    value={editForm.finish}
                    onChange={(v) => setEditForm((p) => ({ ...p, finish: v }))}
                  />
                  <FormInput
                    label="Color"
                    value={editForm.color}
                    onChange={(v) => setEditForm((p) => ({ ...p, color: v }))}
                  />
                  <FormInput
                    label="Dimensions"
                    value={editForm.dimensions}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, dimensions: v }))
                    }
                  />
                  <FormInput
                    label="Lead Time"
                    value={editForm.leadTime}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, leadTime: v }))
                    }
                  />
                  <FormInput
                    label="Warranty"
                    value={editForm.warranty}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, warranty: v }))
                    }
                  />
                  <FormInput
                    label="Supplier"
                    value={editForm.supplier}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, supplier: v }))
                    }
                  />
                  <FormInput
                    label="Warehouse Location"
                    value={editForm.location}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, location: v }))
                    }
                  />
                  <FormInput
                    label="Selling Price"
                    type="number"
                    value={editForm.sellingPrice}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, sellingPrice: v }))
                    }
                  />
                  <FormInput
                    label="Cost Price"
                    type="number"
                    value={editForm.costPrice}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, costPrice: v }))
                    }
                  />
                  <FormInput
                    label="Reorder Level"
                    type="number"
                    value={editForm.reorderLevel}
                    onChange={(v) =>
                      setEditForm((p) => ({ ...p, reorderLevel: v }))
                    }
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm((p) => ({
                        ...p,
                        description: e.target.value,
                      }))
                    }
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
                  />
                </div>

                <div className="mt-5 flex flex-col-reverse gap-2 sm:mt-6 sm:flex-row sm:justify-end sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setShowEdit(false)}
                    className="min-h-[44px] rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="min-h-[44px] rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalPortal>
      )}

      {/* STOCK */}
      {showStock && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center overflow-y-auto bg-black/40 p-0 sm:items-center sm:p-4"
            onClick={() => setShowStock(false)}
          >
            <div
              className="relative w-full max-w-md rounded-t-2xl bg-white shadow-2xl sm:my-auto sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4">
                <div>
                  <h2 className="font-bold text-[#1d2723]">Update Stock</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Current: {currentStock} {product.unit}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowStock(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleStockUpdate} className="p-4 sm:p-6">
                <div className="mb-4 grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setStockForm((p) => ({ ...p, type: "Add" }))
                    }
                    className={`min-h-[44px] rounded-lg border px-3 py-3 text-sm font-semibold ${
                      stockForm.type === "Add"
                        ? "border-green-300 bg-green-50 text-green-700"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    + Add
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setStockForm((p) => ({ ...p, type: "Remove" }))
                    }
                    className={`min-h-[44px] rounded-lg border px-3 py-3 text-sm font-semibold ${
                      stockForm.type === "Remove"
                        ? "border-red-300 bg-red-50 text-red-700"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    − Remove
                  </button>
                </div>

                <FormInput
                  label="Quantity"
                  type="number"
                  value={stockForm.quantity}
                  onChange={(v) =>
                    setStockForm((p) => ({ ...p, quantity: v }))
                  }
                  placeholder="Enter quantity"
                />

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Reason
                  </label>
                  <textarea
                    value={stockForm.reason}
                    onChange={(e) =>
                      setStockForm((p) => ({ ...p, reason: e.target.value }))
                    }
                    rows={3}
                    placeholder="Example: New stock received"
                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#176b5b]"
                  />
                </div>

                <div className="mt-5 flex flex-col-reverse gap-2 sm:mt-6 sm:flex-row sm:justify-end sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setShowStock(false)}
                    className="min-h-[44px] rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="min-h-[44px] rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                  >
                    {saving ? "Updating..." : "Update Stock"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalPortal>
      )}

      {/* DELETE */}
      {showDelete && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center overflow-y-auto bg-black/40 p-0 sm:items-center sm:p-4"
            onClick={() => setShowDelete(false)}
          >
            <div
              className="relative w-full max-w-md rounded-t-2xl bg-white p-5 shadow-2xl sm:my-auto sm:rounded-2xl sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-600">
                !
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#1d2723]">
                Delete Product?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Delete{" "}
                <span className="font-semibold text-gray-700">
                  {product.name}
                </span>
                ? This cannot be undone.
              </p>
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowDelete(false)}
                  className="min-h-[44px] rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={saving}
                  className="min-h-[44px] rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {saving ? "Deleting..." : "Delete Product"}
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}

function KpiCard({
  label,
  value,
  subtitle,
  icon,
  valueClass = "text-[#1d2723]",
}: {
  label: string;
  value: string;
  subtitle: string;
  icon: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-3 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] text-gray-500 sm:text-sm">
            {label}
          </p>
          <p
            className={`mt-1 truncate text-base font-bold sm:mt-2 sm:text-2xl ${valueClass}`}
          >
            {value}
          </p>
          <p className="mt-0.5 truncate text-[10px] text-gray-400 sm:mt-1 sm:text-xs">
            {subtitle}
          </p>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef7f4] text-xs font-bold text-[#176b5b] sm:h-10 sm:w-10 sm:text-sm">
          {icon}
        </div>
      </div>
    </div>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#e4e2da] bg-white p-2 text-center sm:p-3">
      <p className="text-[9px] uppercase tracking-wide text-gray-400 sm:text-[10px]">
        {label}
      </p>
      <p className="mt-0.5 truncate text-[11px] font-semibold text-gray-700 sm:mt-1 sm:text-xs">
        {value}
      </p>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[44px] border-b-2 px-4 py-2.5 text-sm font-semibold transition sm:px-5 sm:py-3 ${
        active
          ? "border-[#176b5b] text-[#176b5b]"
          : "border-transparent text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-[#176b5b] focus:ring-1 focus:ring-[#176b5b]"
      />
    </div>
  );
}

function OverviewSection({
  product,
  currentStock,
}: {
  product: UiProduct;
  currentStock: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
      <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5 lg:col-span-2">
        <h2 className="font-semibold text-[#1d2723]">Product Information</h2>
        <p className="mt-1 text-xs text-gray-500">Master details</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
          <InfoRow label="Product Code" value={product.code} />
          <InfoRow label="Category" value={product.category} />
          <InfoRow label="Sub Category" value={product.subCategory || "—"} />
          <InfoRow label="Material" value={product.material} />
          <InfoRow label="Finish" value={product.finish} />
          <InfoRow label="Color" value={product.color} />
          <InfoRow label="Dimensions" value={product.dimensions} />
          <InfoRow label="Unit" value={product.unit} />
          <InfoRow label="Supplier" value={product.supplier} />
          <InfoRow label="Warehouse" value={product.location} />
          <InfoRow label="Lead Time" value={product.leadTime} />
          <InfoRow label="Warranty" value={product.warranty} />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
          <h2 className="font-semibold text-[#1d2723]">Stock Summary</h2>
          <div className="mt-5 text-center sm:mt-8">
            <p className="text-3xl font-bold text-[#176b5b] sm:text-4xl">
              {currentStock}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {product.unit} available
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-5">
          <h2 className="font-semibold text-[#1d2723]">Product Dates</h2>
          <div className="mt-4 space-y-3 sm:space-y-4">
            <InfoRow label="Created" value={product.createdAt} />
            <InfoRow label="Last Updated" value={product.updatedAt} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InventorySection({
  product,
  currentStock,
  stockStatus,
  movements,
  logsLoading,
  onUpdateStock,
}: {
  product: UiProduct;
  currentStock: number;
  stockStatus: ProductStatus;
  movements: StockMovement[];
  logsLoading: boolean;
  onUpdateStock: () => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
      <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold text-[#1d2723]">Current Inventory</h2>
          <button
            type="button"
            onClick={onUpdateStock}
            className="min-h-[36px] rounded-lg bg-[#176b5b] px-3 py-2 text-xs font-semibold text-white"
          >
            Update
          </button>
        </div>
        <div className="mt-6 text-center sm:mt-8">
          <p className="text-4xl font-bold text-[#176b5b] sm:text-5xl">
            {currentStock}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {product.unit} available
          </p>
          <span
            className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold sm:mt-4 ${statusClasses[stockStatus]}`}
          >
            {stockStatus}
          </span>
        </div>
        <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
          <InfoRow
            label="Reorder Level"
            value={`${product.reorderLevel} ${product.unit}`}
          />
          <InfoRow label="Warehouse" value={product.location} />
          <InfoRow label="Supplier" value={product.supplier} />
          <InfoRow label="Lead Time" value={product.leadTime} />
        </div>
      </div>

      <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-6 lg:col-span-2">
        <h2 className="font-semibold text-[#1d2723]">Stock Movement</h2>
        <p className="mt-1 text-xs text-gray-500">Add / remove history</p>

        {logsLoading ? (
          <div className="mt-8 flex justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
          </div>
        ) : movements.length === 0 ? (
          <p className="mt-6 rounded-lg bg-[#fafaf8] px-4 py-8 text-center text-sm text-gray-500 sm:mt-8">
            No stock movements yet.
          </p>
        ) : (
          <div className="mt-4 -mx-1 overflow-x-auto sm:mt-5 sm:mx-0">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#e4e2da] text-xs uppercase tracking-wide text-gray-400">
                  <th className="pb-3 pr-3 font-semibold">Date</th>
                  <th className="pb-3 pr-3 font-semibold">Type</th>
                  <th className="pb-3 pr-3 font-semibold">Qty</th>
                  <th className="pb-3 pr-3 font-semibold">Before → After</th>
                  <th className="pb-3 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody>
                {movements.map((m) => (
                  <tr
                    key={m.id}
                    className="border-b border-[#eeece6] last:border-0"
                  >
                    <td className="py-3 pr-3 text-gray-600">
                      {formatDateTime(m.createdAt)}
                    </td>
                    <td className="py-3 pr-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          m.type === "Add"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {m.type}
                      </span>
                    </td>
                    <td className="py-3 pr-3 font-semibold text-gray-800">
                      {m.type === "Add" ? "+" : "−"}
                      {m.quantity}
                    </td>
                    <td className="py-3 pr-3 text-gray-600">
                      {m.previousStock} → {m.newStock}
                    </td>
                    <td className="py-3 text-gray-500">{m.reason || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function PricingSection({
  product,
  profit,
  margin,
}: {
  product: UiProduct;
  profit: number;
  margin: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
      <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-6">
        <p className="text-sm text-gray-500">Selling Price</p>
        <p className="mt-2 text-2xl font-bold text-[#176b5b] sm:mt-3 sm:text-3xl">
          {formatCurrency(product.sellingPrice)}
        </p>
      </div>
      <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-6">
        <p className="text-sm text-gray-500">Cost Price</p>
        <p className="mt-2 text-2xl font-bold text-[#1d2723] sm:mt-3 sm:text-3xl">
          {formatCurrency(product.costPrice)}
        </p>
      </div>
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 sm:p-6">
        <p className="text-sm text-green-700">Estimated Profit</p>
        <p className="mt-2 text-2xl font-bold text-green-700 sm:mt-3 sm:text-3xl">
          {formatCurrency(profit)}
        </p>
        <p className="mt-2 text-xs text-green-600">
          Margin: {margin.toFixed(1)}%
        </p>
      </div>
    </div>
  );
}

function HistorySection({
  activity,
  logsLoading,
}: {
  activity: ProductActivity[];
  logsLoading: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#e4e2da] bg-white p-4 sm:p-6">
      <h2 className="font-semibold text-[#1d2723]">Product History</h2>
      <p className="mt-1 text-xs text-gray-500">Edits and stock changes</p>

      {logsLoading ? (
        <div className="mt-8 flex justify-center py-10">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
        </div>
      ) : activity.length === 0 ? (
        <p className="mt-6 rounded-lg bg-[#fafaf8] px-4 py-8 text-center text-sm text-gray-500 sm:mt-8">
          No activity yet.
        </p>
      ) : (
        <ul className="mt-4 space-y-0 sm:mt-6">
          {activity.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 border-b border-[#eeece6] py-3 last:border-0 sm:gap-4 sm:py-4"
            >
              <div
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                  item.action === "stock_add"
                    ? "bg-emerald-600"
                    : item.action === "stock_remove"
                      ? "bg-red-500"
                      : item.action === "updated"
                        ? "bg-[#176b5b]"
                        : "bg-slate-500"
                }`}
              >
                {item.action === "stock_add"
                  ? "+"
                  : item.action === "stock_remove"
                    ? "−"
                    : item.action === "updated"
                      ? "✎"
                      : "•"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  {item.summary}
                </p>
                {item.details ? (
                  <p className="mt-0.5 text-xs text-gray-500">{item.details}</p>
                ) : null}
                <p className="mt-1 text-xs text-gray-400">
                  {formatDateTime(item.createdAt)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-[#eeece6] pb-2.5 last:border-0 last:pb-0 sm:gap-4 sm:pb-3">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-right text-sm font-semibold text-gray-700">
        {value}
      </span>
    </div>
  );
}
