// "use client";

// import { useState } from "react";

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
//   status: "In Stock" | "Low Stock" | "Out of Stock";
//   leadTime: string;
//   warranty: string;
//   image: string;
// };

// const product: Product = {
//   id: "1",
//   code: "SOFA-001",
//   name: "Modern L-Shape Sofa",
//   category: "Sofa",
//   subCategory: "L-Shape Sofa",
//   description:
//     "Premium L-shape sofa designed for modern living rooms with comfortable seating and durable construction.",
//   material: "Engineered Wood + Fabric",
//   finish: "Matte Finish",
//   color: "Light Grey",
//   dimensions: "280 × 180 × 85 cm",
//   sellingPrice: 85000,
//   costPrice: 62000,
//   stock: 8,
//   unit: "Nos",
//   status: "In Stock",
//   leadTime: "7–10 Days",
//   warranty: "2 Years",
//   image:
//     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
// };

// const formatCurrency = (value: number) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);

// export default function ProductPdfPage() {
//   const [showPreview, setShowPreview] = useState(false);

//   const profit = product.sellingPrice - product.costPrice;
//   const margin = (profit / product.sellingPrice) * 100;

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       {/* Screen Header */}
//       <div className="print:hidden">
//         <div className="mx-auto max-w-[1100px] px-4 py-6 sm:px-6">
//           <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <div className="mb-1 text-sm font-semibold text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div>

//               <h1 className="text-2xl font-bold text-[#1d2723]">
//                 Product PDF
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Product catalogue and pricing document.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setShowPreview(true)}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Preview
//               </button>

//               <button
//                 onClick={handlePrint}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//               >
//                 Print / Save PDF
//               </button>
//             </div>
//           </div>

//           {/* Product Summary */}
//           <div className="mb-5 rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-40"
//               />

//               <div className="flex-1">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {product.category}
//                   </span>

//                   <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
//                     {product.status}
//                   </span>
//                 </div>

//                 <h2 className="mt-2 text-xl font-bold text-[#1d2723]">
//                   {product.name}
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Product Code:{" "}
//                   <span className="font-semibold text-gray-700">
//                     {product.code}
//                   </span>
//                 </p>
//               </div>

//               <div className="sm:text-right">
//                 <p className="text-xs text-gray-500">Selling Price</p>
//                 <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                   {formatCurrency(product.sellingPrice)}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Printable Document */}
//       <main className="mx-auto max-w-[900px] px-4 pb-10 sm:px-6 print:max-w-none print:px-0 print:pb-0">
//         <div className="overflow-hidden rounded-xl border border-[#dedbd2] bg-white shadow-sm print:rounded-none print:border-0 print:shadow-none">
//           {/* PDF Header */}
//           <div className="border-b-2 border-[#176b5b] px-8 py-7 sm:px-10">
//             <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
//               <div>
//                 <p className="text-sm font-bold tracking-wide text-[#9a5b18]">
//                   AKRISH
//                 </p>

//                 <h1 className="mt-1 text-2xl font-bold text-[#1d2723]">
//                   Furniture & Interior
//                 </h1>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Product Specification & Pricing Sheet
//                 </p>
//               </div>

//               <div className="sm:text-right">
//                 <p className="text-xs uppercase tracking-wide text-gray-400">
//                   Product Code
//                 </p>

//                 <p className="mt-1 text-lg font-bold text-[#176b5b]">
//                   {product.code}
//                 </p>

//                 <p className="mt-1 text-xs text-gray-400">
//                   Generated: 06 October 2026
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Product Image + Basic Details */}
//           <div className="grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-[280px_1fr] sm:px-10">
//             <div>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-[250px] w-full rounded-lg object-cover"
//               />

//               <div className="mt-3 rounded-lg bg-[#f7f7f4] p-3 text-center">
//                 <p className="text-xs text-gray-400">Product Category</p>
//                 <p className="mt-1 text-sm font-semibold text-[#1d2723]">
//                   {product.category} / {product.subCategory}
//                 </p>
//               </div>
//             </div>

//             <div>
//               <div className="flex flex-wrap items-start justify-between gap-3">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     Product
//                   </p>

//                   <h2 className="mt-1 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                 </div>

//                 <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
//                   {product.status}
//                 </span>
//               </div>

//               <p className="mt-5 text-sm leading-6 text-gray-600">
//                 {product.description}
//               </p>

//               <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
//                 <Specification
//                   label="Material"
//                   value={product.material}
//                 />

//                 <Specification
//                   label="Finish"
//                   value={product.finish}
//                 />

//                 <Specification
//                   label="Color"
//                   value={product.color}
//                 />

//                 <Specification
//                   label="Dimensions"
//                   value={product.dimensions}
//                 />

//                 <Specification
//                   label="Lead Time"
//                   value={product.leadTime}
//                 />

//                 <Specification
//                   label="Warranty"
//                   value={product.warranty}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Pricing Section */}
//           <section className="border-y border-[#e4e2da] bg-[#fafaf8] px-8 py-7 sm:px-10">
//             <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//               Pricing Information
//             </h3>

//             <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <PriceCard
//                 label="Selling Price"
//                 value={formatCurrency(product.sellingPrice)}
//                 highlight
//               />

//               <PriceCard
//                 label="Cost Price"
//                 value={formatCurrency(product.costPrice)}
//               />

//               <PriceCard
//                 label="Estimated Margin"
//                 value={`${formatCurrency(profit)} (${margin.toFixed(1)}%)`}
//               />
//             </div>
//           </section>

//           {/* Inventory Section */}
//           <section className="px-8 py-7 sm:px-10">
//             <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//               <div>
//                 <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//                   Inventory Information
//                 </h3>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Current product availability
//                 </p>
//               </div>

//               <div className="rounded-lg bg-[#eef7f4] px-4 py-2 text-center">
//                 <p className="text-xs text-gray-500">Available Stock</p>
//                 <p className="text-lg font-bold text-[#176b5b]">
//                   {product.stock} {product.unit}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
//               <InventoryBox
//                 label="Stock"
//                 value={`${product.stock}`}
//               />

//               <InventoryBox
//                 label="Unit"
//                 value={product.unit}
//               />

//               <InventoryBox
//                 label="Status"
//                 value={product.status}
//               />

//               <InventoryBox
//                 label="Lead Time"
//                 value={product.leadTime}
//               />
//             </div>
//           </section>

//           {/* Product Details Table */}
//           <section className="px-8 pb-7 sm:px-10">
//             <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//               Product Specifications
//             </h3>

//             <div className="mt-4 overflow-hidden rounded-lg border border-[#e4e2da]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   <TableRow label="Product Name" value={product.name} />
//                   <TableRow label="Product Code" value={product.code} />
//                   <TableRow label="Category" value={product.category} />
//                   <TableRow
//                     label="Sub Category"
//                     value={product.subCategory}
//                   />
//                   <TableRow label="Material" value={product.material} />
//                   <TableRow label="Finish" value={product.finish} />
//                   <TableRow label="Color" value={product.color} />
//                   <TableRow
//                     label="Dimensions"
//                     value={product.dimensions}
//                   />
//                   <TableRow label="Warranty" value={product.warranty} />
//                   <TableRow label="Lead Time" value={product.leadTime} />
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* Terms */}
//           <section className="border-t border-[#e4e2da] bg-[#fafaf8] px-8 py-6 sm:px-10">
//             <h3 className="text-sm font-bold text-[#1d2723]">
//               Notes & Terms
//             </h3>

//             <ul className="mt-3 space-y-2 text-xs leading-5 text-gray-500">
//               <li>
//                 • Prices shown are based on the current product master data.
//               </li>
//               <li>
//                 • Final pricing may vary for custom dimensions, materials or
//                 finishes.
//               </li>
//               <li>
//                 • Lead time depends on production schedule and material
//                 availability.
//               </li>
//               <li>
//                 • Product images are for representation and may vary slightly
//                 from the actual finish.
//               </li>
//             </ul>
//           </section>

//           {/* Footer */}
//           <footer className="border-t border-[#e4e2da] px-8 py-5 sm:px-10">
//             <div className="flex flex-col justify-between gap-2 text-xs text-gray-400 sm:flex-row">
//               <p>
//                 Akrish Furniture & Interior — Product Information Document
//               </p>

//               <p>Product Code: {product.code}</p>
//             </div>
//           </footer>
//         </div>
//       </main>

//       {/* Preview Modal */}
//       {showPreview && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 print:hidden">
//           <div className="flex max-h-[92vh] w-full max-w-[950px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
//               <div>
//                 <h2 className="font-bold text-[#1d2723]">
//                   Product PDF Preview
//                 </h2>

//                 <p className="mt-1 text-xs text-gray-500">
//                   Review the document before printing.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowPreview(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="overflow-y-auto bg-gray-100 p-4">
//               <div className="mx-auto max-w-[850px] bg-white shadow-sm">
//                 <div className="p-6">
//                   <div className="mb-5 border-b-2 border-[#176b5b] pb-5">
//                     <div className="flex justify-between">
//                       <div>
//                         <p className="font-bold text-[#9a5b18]">AKRISH</p>
//                         <h3 className="text-xl font-bold">
//                           Furniture & Interior
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Product Specification & Pricing Sheet
//                         </p>
//                       </div>

//                       <div className="text-right">
//                         <p className="text-xs text-gray-400">
//                           Product Code
//                         </p>
//                         <p className="font-bold text-[#176b5b]">
//                           {product.code}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-[180px_1fr] gap-6">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-40 w-full rounded object-cover"
//                     />

//                     <div>
//                       <p className="text-xs text-[#9a5b18]">
//                         {product.category}
//                       </p>

//                       <h3 className="mt-1 text-xl font-bold">
//                         {product.name}
//                       </h3>

//                       <p className="mt-3 text-xs leading-5 text-gray-500">
//                         {product.description}
//                       </p>

//                       <div className="mt-4 grid grid-cols-2 gap-2">
//                         <MiniSpec
//                           label="Material"
//                           value={product.material}
//                         />

//                         <MiniSpec
//                           label="Finish"
//                           value={product.finish}
//                         />

//                         <MiniSpec
//                           label="Color"
//                           value={product.color}
//                         />

//                         <MiniSpec
//                           label="Dimensions"
//                           value={product.dimensions}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 border-t pt-5">
//                     <p className="text-xs font-bold uppercase text-gray-500">
//                       Pricing
//                     </p>

//                     <div className="mt-3 grid grid-cols-3 gap-3">
//                       <div className="rounded bg-[#eef7f4] p-3">
//                         <p className="text-xs text-gray-500">
//                           Selling Price
//                         </p>
//                         <p className="mt-1 font-bold text-[#176b5b]">
//                           {formatCurrency(product.sellingPrice)}
//                         </p>
//                       </div>

//                       <div className="rounded bg-gray-50 p-3">
//                         <p className="text-xs text-gray-500">Cost Price</p>
//                         <p className="mt-1 font-bold">
//                           {formatCurrency(product.costPrice)}
//                         </p>
//                       </div>

//                       <div className="rounded bg-gray-50 p-3">
//                         <p className="text-xs text-gray-500">Margin</p>
//                         <p className="mt-1 font-bold">
//                           {margin.toFixed(1)}%
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-4">
//               <button
//                 onClick={() => setShowPreview(false)}
//                 className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
//               >
//                 Close
//               </button>

//               <button
//                 onClick={handlePrint}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Print / Save PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Print CSS */}
//       <style jsx global>{`
//         @media print {
//           @page {
//             size: A4;
//             margin: 12mm;
//           }

//           body {
//             background: white !important;
//           }

//           * {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// /* ---------- Components ---------- */

// function Specification({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function PriceCard({
//   label,
//   value,
//   highlight = false,
// }: {
//   label: string;
//   value: string;
//   highlight?: boolean;
// }) {
//   return (
//     <div
//       className={`rounded-lg border p-4 ${
//         highlight
//           ? "border-[#b8dcd3] bg-[#eef7f4]"
//           : "border-[#e4e2da] bg-white"
//       }`}
//     >
//       <p className="text-xs text-gray-500">{label}</p>

//       <p
//         className={`mt-2 text-lg font-bold ${
//           highlight ? "text-[#176b5b]" : "text-[#1d2723]"
//         }`}
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

// function InventoryBox({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-bold text-[#1d2723]">{value}</p>
//     </div>
//   );
// }

// function TableRow({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <tr className="border-b border-[#e4e2da] last:border-b-0">
//       <td className="w-1/3 bg-[#fafaf8] px-4 py-3 text-xs font-semibold text-gray-500">
//         {label}
//       </td>

//       <td className="px-4 py-3 text-sm font-medium text-gray-700">
//         {value}
//       </td>
//     </tr>
//   );
// }

// function MiniSpec({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded bg-gray-50 p-2">
//       <p className="text-[10px] text-gray-400">{label}</p>
//       <p className="mt-0.5 text-xs font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import {
//   getProductById,
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
//   status: ProductStatus;
//   leadTime: string;
//   warranty: string;
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
//     status,
//     leadTime: p.leadTime || "—",
//     warranty: p.warranty || "—",
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
//   "In Stock": "border-green-200 bg-green-50 text-green-700",
//   "Low Stock": "border-yellow-200 bg-yellow-50 text-yellow-700",
//   "Out of Stock": "border-red-200 bg-red-50 text-red-700",
//   Inactive: "border-gray-200 bg-gray-100 text-gray-500",
// };

// export default function ProductPdfPage() {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;

//   const [product, setProduct] = useState<UiProduct | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [showPreview, setShowPreview] = useState(false);
//   const [generatedAt, setGeneratedAt] = useState("");

//   useEffect(() => {
//     setGeneratedAt(
//       new Date().toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "long",
//         year: "numeric",
//       })
//     );
//   }, []);

//   useEffect(() => {
//     let cancelled = false;

//     async function load() {
//       if (!productId) return;
//       setLoading(true);
//       try {
//         const data = await getProductById(productId);
//         if (cancelled) return;

//         if (!data) {
//           alert("Product not found");
//           router.push("/furniture/products");
//           return;
//         }

//         setProduct(mapToUi(data));
//       } catch (err) {
//         console.error("Failed to load product PDF data:", err);
//         alert("Failed to load product");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     load();
//     return () => {
//       cancelled = true;
//     };
//   }, [productId, router]);

//   const handlePrint = () => {
//     window.print();
//   };

//   if (loading || !product) {
//     return (
//       <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
//       </div>
//     );
//   }

//   const profit = product.sellingPrice - product.costPrice;
//   const margin =
//     product.sellingPrice > 0
//       ? (profit / product.sellingPrice) * 100
//       : 0;

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
//       {/* Screen Header */}
//       <div className="print:hidden">
//         <div className="mx-auto max-w-[1100px] px-4 py-6 sm:px-6">
//           <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <button
//                 type="button"
//                 onClick={() =>
//                   router.push(`/furniture/products/${product.id}`)
//                 }
//                 className="mb-2 text-sm font-semibold text-[#9a5b18] hover:underline"
//               >
//                 ← Back to product
//               </button>
//               <div className="mb-1 text-sm font-semibold text-[#9a5b18]">
//                 Akrish / Furniture and Interior
//               </div>
//               <h1 className="text-2xl font-bold text-[#1d2723]">
//                 Product PDF
//               </h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Product catalogue and pricing document.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => setShowPreview(true)}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
//               >
//                 Preview
//               </button>
//               <button
//                 type="button"
//                 onClick={handlePrint}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
//               >
//                 Print / Save PDF
//               </button>
//             </div>
//           </div>

//           {/* Product Summary */}
//           <div className="mb-5 rounded-xl border border-[#e4e2da] bg-white p-5">
//             <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-40"
//               />

//               <div className="flex-1">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {product.category}
//                   </span>
//                   <span
//                     className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[product.status]}`}
//                   >
//                     {product.status}
//                   </span>
//                 </div>

//                 <h2 className="mt-2 text-xl font-bold text-[#1d2723]">
//                   {product.name}
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Product Code:{" "}
//                   <span className="font-semibold text-gray-700">
//                     {product.code}
//                   </span>
//                 </p>
//               </div>

//               <div className="sm:text-right">
//                 <p className="text-xs text-gray-500">Selling Price</p>
//                 <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                   {formatCurrency(product.sellingPrice)}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Printable Document */}
//       <main className="mx-auto max-w-[900px] px-4 pb-10 sm:px-6 print:max-w-none print:px-0 print:pb-0">
//         <div className="overflow-hidden rounded-xl border border-[#dedbd2] bg-white shadow-sm print:rounded-none print:border-0 print:shadow-none">
//           <div className="border-b-2 border-[#176b5b] px-8 py-7 sm:px-10">
//             <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
//               <div>
//                 <p className="text-sm font-bold tracking-wide text-[#9a5b18]">
//                   AKRISH
//                 </p>
//                 <h1 className="mt-1 text-2xl font-bold text-[#1d2723]">
//                   Furniture & Interior
//                 </h1>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Product Specification & Pricing Sheet
//                 </p>
//               </div>
//               <div className="sm:text-right">
//                 <p className="text-xs uppercase tracking-wide text-gray-400">
//                   Product Code
//                 </p>
//                 <p className="mt-1 text-lg font-bold text-[#176b5b]">
//                   {product.code}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-400">
//                   Generated: {generatedAt || "—"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-[280px_1fr] sm:px-10">
//             <div>
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-[250px] w-full rounded-lg object-cover"
//               />
//               <div className="mt-3 rounded-lg bg-[#f7f7f4] p-3 text-center">
//                 <p className="text-xs text-gray-400">Product Category</p>
//                 <p className="mt-1 text-sm font-semibold text-[#1d2723]">
//                   {product.category}
//                   {product.subCategory ? ` / ${product.subCategory}` : ""}
//                 </p>
//               </div>
//             </div>

//             <div>
//               <div className="flex flex-wrap items-start justify-between gap-3">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
//                     Product
//                   </p>
//                   <h2 className="mt-1 text-2xl font-bold text-[#1d2723]">
//                     {product.name}
//                   </h2>
//                 </div>
//                 <span
//                   className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[product.status]}`}
//                 >
//                   {product.status}
//                 </span>
//               </div>

//               <p className="mt-5 text-sm leading-6 text-gray-600">
//                 {product.description || "No description available."}
//               </p>

//               <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
//                 <Specification label="Material" value={product.material} />
//                 <Specification label="Finish" value={product.finish} />
//                 <Specification label="Color" value={product.color} />
//                 <Specification label="Dimensions" value={product.dimensions} />
//                 <Specification label="Lead Time" value={product.leadTime} />
//                 <Specification label="Warranty" value={product.warranty} />
//               </div>
//             </div>
//           </div>

//           <section className="border-y border-[#e4e2da] bg-[#fafaf8] px-8 py-7 sm:px-10">
//             <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//               Pricing Information
//             </h3>
//             <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <PriceCard
//                 label="Selling Price"
//                 value={formatCurrency(product.sellingPrice)}
//                 highlight
//               />
//               <PriceCard
//                 label="Cost Price"
//                 value={formatCurrency(product.costPrice)}
//               />
//               <PriceCard
//                 label="Estimated Margin"
//                 value={`${formatCurrency(profit)} (${margin.toFixed(1)}%)`}
//               />
//             </div>
//           </section>

//           <section className="px-8 py-7 sm:px-10">
//             <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//               <div>
//                 <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//                   Inventory Information
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Current product availability
//                 </p>
//               </div>
//               <div className="rounded-lg bg-[#eef7f4] px-4 py-2 text-center">
//                 <p className="text-xs text-gray-500">Available Stock</p>
//                 <p className="text-lg font-bold text-[#176b5b]">
//                   {product.stock} {product.unit}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
//               <InventoryBox label="Stock" value={`${product.stock}`} />
//               <InventoryBox label="Unit" value={product.unit} />
//               <InventoryBox label="Status" value={product.status} />
//               <InventoryBox label="Lead Time" value={product.leadTime} />
//             </div>
//           </section>

//           <section className="px-8 pb-7 sm:px-10">
//             <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
//               Product Specifications
//             </h3>
//             <div className="mt-4 overflow-hidden rounded-lg border border-[#e4e2da]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   <TableRow label="Product Name" value={product.name} />
//                   <TableRow label="Product Code" value={product.code} />
//                   <TableRow label="Category" value={product.category} />
//                   <TableRow
//                     label="Sub Category"
//                     value={product.subCategory || "—"}
//                   />
//                   <TableRow label="Material" value={product.material} />
//                   <TableRow label="Finish" value={product.finish} />
//                   <TableRow label="Color" value={product.color} />
//                   <TableRow label="Dimensions" value={product.dimensions} />
//                   <TableRow label="Warranty" value={product.warranty} />
//                   <TableRow label="Lead Time" value={product.leadTime} />
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <section className="border-t border-[#e4e2da] bg-[#fafaf8] px-8 py-6 sm:px-10">
//             <h3 className="text-sm font-bold text-[#1d2723]">Notes & Terms</h3>
//             <ul className="mt-3 space-y-2 text-xs leading-5 text-gray-500">
//               <li>
//                 • Prices shown are based on the current product master data.
//               </li>
//               <li>
//                 • Final pricing may vary for custom dimensions, materials or
//                 finishes.
//               </li>
//               <li>
//                 • Lead time depends on production schedule and material
//                 availability.
//               </li>
//               <li>
//                 • Product images are for representation and may vary slightly
//                 from the actual finish.
//               </li>
//             </ul>
//           </section>

//           <footer className="border-t border-[#e4e2da] px-8 py-5 sm:px-10">
//             <div className="flex flex-col justify-between gap-2 text-xs text-gray-400 sm:flex-row">
//               <p>
//                 Akrish Furniture & Interior — Product Information Document
//               </p>
//               <p>Product Code: {product.code}</p>
//             </div>
//           </footer>
//         </div>
//       </main>

//       {/* Preview Modal */}
//       {showPreview && (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 print:hidden">
//           <div className="flex max-h-[92vh] w-full max-w-[950px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
//               <div>
//                 <h2 className="font-bold text-[#1d2723]">
//                   Product PDF Preview
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Review the document before printing.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowPreview(false)}
//                 className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="overflow-y-auto bg-gray-100 p-4">
//               <div className="mx-auto max-w-[850px] bg-white shadow-sm">
//                 <div className="p-6">
//                   <div className="mb-5 border-b-2 border-[#176b5b] pb-5">
//                     <div className="flex justify-between">
//                       <div>
//                         <p className="font-bold text-[#9a5b18]">AKRISH</p>
//                         <h3 className="text-xl font-bold">
//                           Furniture & Interior
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Product Specification & Pricing Sheet
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs text-gray-400">Product Code</p>
//                         <p className="font-bold text-[#176b5b]">
//                           {product.code}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-[180px_1fr] gap-6">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-40 w-full rounded object-cover"
//                     />
//                     <div>
//                       <p className="text-xs text-[#9a5b18]">
//                         {product.category}
//                       </p>
//                       <h3 className="mt-1 text-xl font-bold">{product.name}</h3>
//                       <p className="mt-3 text-xs leading-5 text-gray-500">
//                         {product.description || "No description available."}
//                       </p>
//                       <div className="mt-4 grid grid-cols-2 gap-2">
//                         <MiniSpec label="Material" value={product.material} />
//                         <MiniSpec label="Finish" value={product.finish} />
//                         <MiniSpec label="Color" value={product.color} />
//                         <MiniSpec
//                           label="Dimensions"
//                           value={product.dimensions}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 border-t pt-5">
//                     <p className="text-xs font-bold uppercase text-gray-500">
//                       Pricing
//                     </p>
//                     <div className="mt-3 grid grid-cols-3 gap-3">
//                       <div className="rounded bg-[#eef7f4] p-3">
//                         <p className="text-xs text-gray-500">Selling Price</p>
//                         <p className="mt-1 font-bold text-[#176b5b]">
//                           {formatCurrency(product.sellingPrice)}
//                         </p>
//                       </div>
//                       <div className="rounded bg-gray-50 p-3">
//                         <p className="text-xs text-gray-500">Cost Price</p>
//                         <p className="mt-1 font-bold">
//                           {formatCurrency(product.costPrice)}
//                         </p>
//                       </div>
//                       <div className="rounded bg-gray-50 p-3">
//                         <p className="text-xs text-gray-500">Margin</p>
//                         <p className="mt-1 font-bold">{margin.toFixed(1)}%</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-4">
//               <button
//                 type="button"
//                 onClick={() => setShowPreview(false)}
//                 className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 onClick={handlePrint}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125848]"
//               >
//                 Print / Save PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @media print {
//           @page {
//             size: A4;
//             margin: 12mm;
//           }
//           body {
//             background: white !important;
//           }
//           * {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function Specification({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

// function PriceCard({
//   label,
//   value,
//   highlight = false,
// }: {
//   label: string;
//   value: string;
//   highlight?: boolean;
// }) {
//   return (
//     <div
//       className={`rounded-lg border p-4 ${
//         highlight
//           ? "border-[#b8dcd3] bg-[#eef7f4]"
//           : "border-[#e4e2da] bg-white"
//       }`}
//     >
//       <p className="text-xs text-gray-500">{label}</p>
//       <p
//         className={`mt-2 text-lg font-bold ${
//           highlight ? "text-[#176b5b]" : "text-[#1d2723]"
//         }`}
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

// function InventoryBox({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
//       <p className="text-xs text-gray-400">{label}</p>
//       <p className="mt-1 text-sm font-bold text-[#1d2723]">{value}</p>
//     </div>
//   );
// }

// function TableRow({ label, value }: { label: string; value: string }) {
//   return (
//     <tr className="border-b border-[#e4e2da] last:border-b-0">
//       <td className="w-1/3 bg-[#fafaf8] px-4 py-3 text-xs font-semibold text-gray-500">
//         {label}
//       </td>
//       <td className="px-4 py-3 text-sm font-medium text-gray-700">{value}</td>
//     </tr>
//   );
// }

// function MiniSpec({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded bg-gray-50 p-2">
//       <p className="text-[10px] text-gray-400">{label}</p>
//       <p className="mt-0.5 text-xs font-semibold text-gray-700">{value}</p>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, useRouter } from "next/navigation";
import {
  getProductById,
  type FurnitureProduct,
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
  status: ProductStatus;
  leadTime: string;
  warranty: string;
  image: string;
};

function mapToUi(p: FurnitureProduct): UiProduct {
  const stock = p.stock ?? 0;
  const reorder = p.reorderLevel ?? p.minStock ?? 3;

  let status: ProductStatus = "In Stock";
  if (stock === 0) status = "Out of Stock";
  else if (stock <= reorder) status = "Low Stock";

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
    status,
    leadTime: p.leadTime || "—",
    warranty: p.warranty || "—",
    image:
      p.imageUrl ||
      p.image ||
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  };
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const statusClasses: Record<ProductStatus, string> = {
  "In Stock": "border-green-200 bg-green-50 text-green-700",
  "Low Stock": "border-yellow-200 bg-yellow-50 text-yellow-700",
  "Out of Stock": "border-red-200 bg-red-50 text-red-700",
  Inactive: "border-gray-200 bg-gray-100 text-gray-500",
};

function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function ProductPdfPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const [product, setProduct] = useState<UiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedAt, setGeneratedAt] = useState("");

  useEffect(() => {
    setGeneratedAt(
      new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!productId) return;
      setLoading(true);
      try {
        const data = await getProductById(productId);
        if (cancelled) return;

        if (!data) {
          alert("Product not found");
          router.push("/furniture/products");
          return;
        }

        setProduct(mapToUi(data));
      } catch (err) {
        console.error("Failed to load product PDF data:", err);
        alert("Failed to load product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [productId, router]);

  // Lock body scroll while preview is open
  useEffect(() => {
    if (!showPreview) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showPreview]);

  const handlePrint = () => {
    window.print();
  };

  if (loading || !product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f7f7f4]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#176b5b]" />
      </div>
    );
  }

  const profit = product.sellingPrice - product.costPrice;
  const margin =
    product.sellingPrice > 0
      ? (profit / product.sellingPrice) * 100
      : 0;

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#202522]">
      {/* Screen Header */}
      <div className="print:hidden">
        <div className="mx-auto max-w-[1100px] px-4 py-6 sm:px-6">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <button
                type="button"
                onClick={() =>
                  router.push(`/furniture/products/${product.id}`)
                }
                className="mb-2 text-sm font-semibold text-[#9a5b18] hover:underline"
              >
                ← Back to product
              </button>
              <div className="mb-1 text-sm font-semibold text-[#9a5b18]">
                Akrish / Furniture and Interior
              </div>
              <h1 className="text-2xl font-bold text-[#1d2723]">
                Product PDF
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Product catalogue and pricing document.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Preview
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#125848]"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          <div className="mb-5 rounded-xl border border-[#e4e2da] bg-white p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-40"
              />

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-semibold text-[#176b5b]">
                    {product.category}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[product.status]}`}
                  >
                    {product.status}
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-bold text-[#1d2723]">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Product Code:{" "}
                  <span className="font-semibold text-gray-700">
                    {product.code}
                  </span>
                </p>
              </div>

              <div className="sm:text-right">
                <p className="text-xs text-gray-500">Selling Price</p>
                <p className="mt-1 text-2xl font-bold text-[#176b5b]">
                  {formatCurrency(product.sellingPrice)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Document */}
      <main className="mx-auto max-w-[900px] px-4 pb-10 sm:px-6 print:max-w-none print:px-0 print:pb-0">
        <div className="overflow-hidden rounded-xl border border-[#dedbd2] bg-white shadow-sm print:rounded-none print:border-0 print:shadow-none">
          <div className="border-b-2 border-[#176b5b] px-8 py-7 sm:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-bold tracking-wide text-[#9a5b18]">
                  AKRISH
                </p>
                <h1 className="mt-1 text-2xl font-bold text-[#1d2723]">
                  Furniture & Interior
                </h1>
                <p className="mt-1 text-xs text-gray-500">
                  Product Specification & Pricing Sheet
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Product Code
                </p>
                <p className="mt-1 text-lg font-bold text-[#176b5b]">
                  {product.code}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Generated: {generatedAt || "—"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-[280px_1fr] sm:px-10">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-[250px] w-full rounded-lg object-cover"
              />
              <div className="mt-3 rounded-lg bg-[#f7f7f4] p-3 text-center">
                <p className="text-xs text-gray-400">Product Category</p>
                <p className="mt-1 text-sm font-semibold text-[#1d2723]">
                  {product.category}
                  {product.subCategory ? ` / ${product.subCategory}` : ""}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9a5b18]">
                    Product
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[#1d2723]">
                    {product.name}
                  </h2>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[product.status]}`}
                >
                  {product.status}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-600">
                {product.description || "No description available."}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
                <Specification label="Material" value={product.material} />
                <Specification label="Finish" value={product.finish} />
                <Specification label="Color" value={product.color} />
                <Specification label="Dimensions" value={product.dimensions} />
                <Specification label="Lead Time" value={product.leadTime} />
                <Specification label="Warranty" value={product.warranty} />
              </div>
            </div>
          </div>

          <section className="border-y border-[#e4e2da] bg-[#fafaf8] px-8 py-7 sm:px-10">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
              Pricing Information
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <PriceCard
                label="Selling Price"
                value={formatCurrency(product.sellingPrice)}
                highlight
              />
              <PriceCard
                label="Cost Price"
                value={formatCurrency(product.costPrice)}
              />
              <PriceCard
                label="Estimated Margin"
                value={`${formatCurrency(profit)} (${margin.toFixed(1)}%)`}
              />
            </div>
          </section>

          <section className="px-8 py-7 sm:px-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
                  Inventory Information
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Current product availability
                </p>
              </div>
              <div className="rounded-lg bg-[#eef7f4] px-4 py-2 text-center">
                <p className="text-xs text-gray-500">Available Stock</p>
                <p className="text-lg font-bold text-[#176b5b]">
                  {product.stock} {product.unit}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <InventoryBox label="Stock" value={`${product.stock}`} />
              <InventoryBox label="Unit" value={product.unit} />
              <InventoryBox label="Status" value={product.status} />
              <InventoryBox label="Lead Time" value={product.leadTime} />
            </div>
          </section>

          <section className="px-8 pb-7 sm:px-10">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1d2723]">
              Product Specifications
            </h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#e4e2da]">
              <table className="w-full text-sm">
                <tbody>
                  <TableRow label="Product Name" value={product.name} />
                  <TableRow label="Product Code" value={product.code} />
                  <TableRow label="Category" value={product.category} />
                  <TableRow
                    label="Sub Category"
                    value={product.subCategory || "—"}
                  />
                  <TableRow label="Material" value={product.material} />
                  <TableRow label="Finish" value={product.finish} />
                  <TableRow label="Color" value={product.color} />
                  <TableRow label="Dimensions" value={product.dimensions} />
                  <TableRow label="Warranty" value={product.warranty} />
                  <TableRow label="Lead Time" value={product.leadTime} />
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-[#e4e2da] bg-[#fafaf8] px-8 py-6 sm:px-10">
            <h3 className="text-sm font-bold text-[#1d2723]">Notes & Terms</h3>
            <ul className="mt-3 space-y-2 text-xs leading-5 text-gray-500">
              <li>
                • Prices shown are based on the current product master data.
              </li>
              <li>
                • Final pricing may vary for custom dimensions, materials or
                finishes.
              </li>
              <li>
                • Lead time depends on production schedule and material
                availability.
              </li>
              <li>
                • Product images are for representation and may vary slightly
                from the actual finish.
              </li>
            </ul>
          </section>

          <footer className="border-t border-[#e4e2da] px-8 py-5 sm:px-10">
            <div className="flex flex-col justify-between gap-2 text-xs text-gray-400 sm:flex-row">
              <p>
                Akrish Furniture & Interior — Product Information Document
              </p>
              <p>Product Code: {product.code}</p>
            </div>
          </footer>
        </div>
      </main>

      {/* Preview Modal — viewport center via portal */}
      {showPreview && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/50 p-4 print:hidden"
            onClick={() => setShowPreview(false)}
          >
            <div
              className="relative my-auto flex max-h-[92vh] w-full max-w-[950px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-4">
                <div>
                  <h2 className="font-bold text-[#1d2723]">
                    Product PDF Preview
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Review the document before printing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto bg-gray-100 p-4">
                <div className="mx-auto max-w-[850px] bg-white shadow-sm">
                  <div className="p-6">
                    <div className="mb-5 border-b-2 border-[#176b5b] pb-5">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-bold text-[#9a5b18]">AKRISH</p>
                          <h3 className="text-xl font-bold">
                            Furniture & Interior
                          </h3>
                          <p className="text-xs text-gray-500">
                            Product Specification & Pricing Sheet
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Product Code</p>
                          <p className="font-bold text-[#176b5b]">
                            {product.code}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-[180px_1fr] gap-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-40 w-full rounded object-cover"
                      />
                      <div>
                        <p className="text-xs text-[#9a5b18]">
                          {product.category}
                        </p>
                        <h3 className="mt-1 text-xl font-bold">
                          {product.name}
                        </h3>
                        <p className="mt-3 text-xs leading-5 text-gray-500">
                          {product.description || "No description available."}
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <MiniSpec label="Material" value={product.material} />
                          <MiniSpec label="Finish" value={product.finish} />
                          <MiniSpec label="Color" value={product.color} />
                          <MiniSpec
                            label="Dimensions"
                            value={product.dimensions}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t pt-5">
                      <p className="text-xs font-bold uppercase text-gray-500">
                        Pricing
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        <div className="rounded bg-[#eef7f4] p-3">
                          <p className="text-xs text-gray-500">Selling Price</p>
                          <p className="mt-1 font-bold text-[#176b5b]">
                            {formatCurrency(product.sellingPrice)}
                          </p>
                        </div>
                        <div className="rounded bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">Cost Price</p>
                          <p className="mt-1 font-bold">
                            {formatCurrency(product.costPrice)}
                          </p>
                        </div>
                        <div className="rounded bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">Margin</p>
                          <p className="mt-1 font-bold">
                            {margin.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 justify-end gap-3 border-t border-gray-200 px-5 py-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded-lg bg-[#176b5b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125848]"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }
          body {
            background: white !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

function Specification({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-700">{value}</p>
    </div>
  );
}

function PriceCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        highlight
          ? "border-[#b8dcd3] bg-[#eef7f4]"
          : "border-[#e4e2da] bg-white"
      }`}
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p
        className={`mt-2 text-lg font-bold ${
          highlight ? "text-[#176b5b]" : "text-[#1d2723]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function InventoryBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#e4e2da] bg-[#fafaf8] p-4">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-bold text-[#1d2723]">{value}</p>
    </div>
  );
}

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-[#e4e2da] last:border-b-0">
      <td className="w-1/3 bg-[#fafaf8] px-4 py-3 text-xs font-semibold text-gray-500">
        {label}
      </td>
      <td className="px-4 py-3 text-sm font-medium text-gray-700">{value}</td>
    </tr>
  );
}

function MiniSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded bg-gray-50 p-2">
      <p className="text-[10px] text-gray-400">{label}</p>
      <p className="mt-0.5 text-xs font-semibold text-gray-700">{value}</p>
    </div>
  );
}