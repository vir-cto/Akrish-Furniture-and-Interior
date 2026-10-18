// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const categories = [
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

// const subcategories = [
//   "L-Shape Sofa",
//   "3 Seater Sofa",
//   "2 Seater Sofa",
//   "King Size Bed",
//   "Queen Size Bed",
//   "Dining Set",
//   "Recliner",
//   "Wardrobe",
//   "TV Unit",
//   "Other",
// ];

// const materials = [
//   "Engineered Wood",
//   "Solid Wood",
//   "Plywood",
//   "MDF",
//   "Metal",
//   "Fabric",
//   "Leather",
//   "Glass",
//   "Wood + Fabric",
//   "Other",
// ];

// const finishes = [
//   "Matte Finish",
//   "Glossy Finish",
//   "Natural Wood",
//   "Laminate",
//   "PU Finish",
//   "Melamine",
//   "Other",
// ];

// const units = ["Nos", "Set", "Sq.Ft", "Meter", "Piece"];

// const suppliers = [
//   "Akrish Furniture Suppliers",
//   "Local Supplier",
//   "ABC Furniture Supplier",
//   "Direct Manufacturer",
// ];

// export default function NewProductPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     productName: "",
//     productCode: "",
//     category: "",
//     subcategory: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     description: "",
//     sellingPrice: "",
//     costPrice: "",
//     stock: "",
//     unit: "Nos",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     warehouseLocation: "Main Warehouse",
//     imageUrl: "",
//     status: "In Stock",
//   });

//   const [imagePreview, setImagePreview] = useState("");
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [saving, setSaving] = useState(false);

//   const updateField = (field: string, value: string) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     if (errors[field]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   const calculateProfit = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;

//     return selling - cost;
//   };

//   const calculateMargin = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;

//     if (!selling) return 0;

//     return ((selling - cost) / selling) * 100;
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.productName.trim()) {
//       newErrors.productName = "Product name is required";
//     }

//     if (!form.productCode.trim()) {
//       newErrors.productCode = "Product code is required";
//     }

//     if (!form.category) {
//       newErrors.category = "Please select a category";
//     }

//     if (!form.material) {
//       newErrors.material = "Please select material";
//     }

//     if (!form.sellingPrice) {
//       newErrors.sellingPrice = "Selling price is required";
//     }

//     if (!form.costPrice) {
//       newErrors.costPrice = "Cost price is required";
//     }

//     if (!form.stock) {
//       newErrors.stock = "Opening stock is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleImageUrl = (value: string) => {
//     updateField("imageUrl", value);
//     setImagePreview(value);
//   };

//   const handleSave = () => {
//     if (!validateForm()) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//       return;
//     }

//     setSaving(true);

//     // Local demo save.
//     // Replace this with your API/database call later.
//     const product = {
//       ...form,
//       sellingPrice: Number(form.sellingPrice),
//       costPrice: Number(form.costPrice),
//       stock: Number(form.stock),
//       reorderLevel: Number(form.reorderLevel || 0),
//       profit: calculateProfit(),
//       margin: calculateMargin(),
//       createdAt: new Date().toISOString(),
//     };

//     console.log("New Product:", product);

//     setTimeout(() => {
//       setSaving(false);
//       alert("Product created successfully!");
//       router.push("/furniture/products");
//     }, 700);
//   };

//   const handleCancel = () => {
//     router.push("/furniture/products");
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/products")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Products
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">New Product</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">
//                 Add New Product
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Create a new furniture product in your inventory.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleCancel}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={saving}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main */}
//       <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
//           {/* Left */}
//           <div className="space-y-6">
//             {/* Basic Information */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Basic Information
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Enter the basic details of the furniture product.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Name <span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     value={form.productName}
//                     onChange={(e) =>
//                       updateField("productName", e.target.value)
//                     }
//                     placeholder="e.g. Modern L-Shape Sofa"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productName
//                         ? "border-red-400"
//                         : "border-[#d9d7cf]"
//                     }`}
//                   />

//                   {errors.productName && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Code <span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     value={form.productCode}
//                     onChange={(e) =>
//                       updateField("productCode", e.target.value.toUpperCase())
//                     }
//                     placeholder="e.g. SOFA-001"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm uppercase outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productCode
//                         ? "border-red-400"
//                         : "border-[#d9d7cf]"
//                     }`}
//                   />

//                   {errors.productCode && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productCode}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Category <span className="text-red-500">*</span>
//                   </label>

//                   <select
//                     value={form.category}
//                     onChange={(e) => updateField("category", e.target.value)}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.category
//                         ? "border-red-400"
//                         : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">Select category</option>

//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>

//                   {errors.category && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.category}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Subcategory
//                   </label>

//                   <select
//                     value={form.subcategory}
//                     onChange={(e) =>
//                       updateField("subcategory", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select subcategory</option>

//                     {subcategories.map((subcategory) => (
//                       <option key={subcategory} value={subcategory}>
//                         {subcategory}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Material <span className="text-red-500">*</span>
//                   </label>

//                   <select
//                     value={form.material}
//                     onChange={(e) => updateField("material", e.target.value)}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.material
//                         ? "border-red-400"
//                         : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">Select material</option>

//                     {materials.map((material) => (
//                       <option key={material} value={material}>
//                         {material}
//                       </option>
//                     ))}
//                   </select>

//                   {errors.material && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.material}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Finish
//                   </label>

//                   <select
//                     value={form.finish}
//                     onChange={(e) => updateField("finish", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select finish</option>

//                     {finishes.map((finish) => (
//                       <option key={finish} value={finish}>
//                         {finish}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Color
//                   </label>

//                   <input
//                     value={form.color}
//                     onChange={(e) => updateField("color", e.target.value)}
//                     placeholder="e.g. Light Grey"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Dimensions
//                   </label>

//                   <input
//                     value={form.dimensions}
//                     onChange={(e) =>
//                       updateField("dimensions", e.target.value)
//                     }
//                     placeholder="e.g. 280 × 180 × 85 cm"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>

//                   <textarea
//                     rows={4}
//                     value={form.description}
//                     onChange={(e) =>
//                       updateField("description", e.target.value)
//                     }
//                     placeholder="Enter product description..."
//                     className="w-full resize-none rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Pricing */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Pricing
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Set your selling price and product cost.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Selling Price <span className="text-red-500">*</span>
//                   </label>

//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>

//                     <input
//                       type="number"
//                       min="0"
//                       value={form.sellingPrice}
//                       onChange={(e) =>
//                         updateField("sellingPrice", e.target.value)
//                       }
//                       placeholder="85000"
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.sellingPrice
//                           ? "border-red-400"
//                           : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>

//                   {errors.sellingPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.sellingPrice}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Cost Price <span className="text-red-500">*</span>
//                   </label>

//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>

//                     <input
//                       type="number"
//                       min="0"
//                       value={form.costPrice}
//                       onChange={(e) =>
//                         updateField("costPrice", e.target.value)
//                       }
//                       placeholder="62000"
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.costPrice
//                           ? "border-red-400"
//                           : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>

//                   {errors.costPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.costPrice}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4 border-t border-[#e4e2da] bg-[#fafaf8] p-5 sm:grid-cols-2">
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Profit</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     ₹{calculateProfit().toLocaleString("en-IN")}
//                   </p>
//                 </div>

//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Margin</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     {calculateMargin().toFixed(1)}%
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Inventory */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Inventory
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Configure opening stock and inventory settings.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Opening Stock <span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="number"
//                     min="0"
//                     value={form.stock}
//                     onChange={(e) => updateField("stock", e.target.value)}
//                     placeholder="8"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.stock ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />

//                   {errors.stock && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.stock}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Unit
//                   </label>

//                   <select
//                     value={form.unit}
//                     onChange={(e) => updateField("unit", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {units.map((unit) => (
//                       <option key={unit} value={unit}>
//                         {unit}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Reorder Level
//                   </label>

//                   <input
//                     type="number"
//                     min="0"
//                     value={form.reorderLevel}
//                     onChange={(e) =>
//                       updateField("reorderLevel", e.target.value)
//                     }
//                     placeholder="3"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warehouse Location
//                   </label>

//                   <input
//                     value={form.warehouseLocation}
//                     onChange={(e) =>
//                       updateField("warehouseLocation", e.target.value)
//                     }
//                     placeholder="Main Warehouse"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Status
//                   </label>

//                   <select
//                     value={form.status}
//                     onChange={(e) => updateField("status", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Lead Time
//                   </label>

//                   <input
//                     value={form.leadTime}
//                     onChange={(e) => updateField("leadTime", e.target.value)}
//                     placeholder="e.g. 7–10 Days"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Supplier & Warranty */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Supplier & Warranty
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Supplier
//                   </label>

//                   <select
//                     value={form.supplier}
//                     onChange={(e) => updateField("supplier", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select supplier</option>

//                     {suppliers.map((supplier) => (
//                       <option key={supplier} value={supplier}>
//                         {supplier}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warranty
//                   </label>

//                   <input
//                     value={form.warranty}
//                     onChange={(e) => updateField("warranty", e.target.value)}
//                     placeholder="e.g. 2 Years"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-6">
//             {/* Image */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Image
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Add an image URL for the product.
//                 </p>
//               </div>

//               <div className="p-5">
//                 <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfcdbf] bg-[#fafaf8]">
//                   {imagePreview ? (
//                     <img
//                       src={imagePreview}
//                       alt="Product preview"
//                       className="h-full w-full object-cover"
//                       onError={() => setImagePreview("")}
//                     />
//                   ) : (
//                     <div className="px-5 text-center">
//                       <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                         <svg
//                           width="28"
//                           height="28"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="1.7"
//                         >
//                           <rect
//                             x="3"
//                             y="3"
//                             width="18"
//                             height="18"
//                             rx="2"
//                           />
//                           <circle cx="8.5" cy="8.5" r="1.5" />
//                           <path d="m21 15-5-5L5 21" />
//                         </svg>
//                       </div>

//                       <p className="text-sm font-medium text-gray-700">
//                         No image added
//                       </p>

//                       <p className="mt-1 text-xs text-gray-400">
//                         Paste an image URL below
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <label className="mb-2 block text-sm font-medium text-gray-700">
//                   Image URL
//                 </label>

//                 <input
//                   value={form.imageUrl}
//                   onChange={(e) => handleImageUrl(e.target.value)}
//                   placeholder="https://..."
//                   className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                 />
//               </div>
//             </section>

//             {/* Product Preview */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Preview
//                 </h2>
//               </div>

//               <div className="p-5">
//                 <div className="mb-4 flex items-center justify-between">
//                   <span className="rounded-full bg-[#eaf5f1] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {form.status}
//                   </span>

//                   <span className="text-xs text-gray-400">
//                     {form.productCode || "PRODUCT-CODE"}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#222]">
//                   {form.productName || "Product Name"}
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-500">
//                   {form.category || "Category"}
//                   {form.subcategory ? ` • ${form.subcategory}` : ""}
//                 </p>

//                 <div className="my-4 border-t border-[#e4e2da]" />

//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Material</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.material || "—"}
//                     </span>
//                   </div>

//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Finish</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.finish || "—"}
//                     </span>
//                   </div>

//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Color</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.color || "—"}
//                     </span>
//                   </div>

//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Stock</span>
//                     <span className="font-medium text-gray-800">
//                       {form.stock || "0"} {form.unit}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-5 rounded-lg bg-[#f7f7f4] p-4">
//                   <p className="text-xs text-gray-500">Selling Price</p>

//                   <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                     ₹
//                     {Number(form.sellingPrice || 0).toLocaleString("en-IN")}
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Quick Info */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white p-5">
//               <h2 className="text-sm font-bold text-[#222]">
//                 Before saving
//               </h2>

//               <ul className="mt-3 space-y-2.5 text-xs text-gray-500">
//                 <li className="flex gap-2">
//                   <span className="text-[#176b5b]">✓</span>
//                   Make sure the product code is unique.
//                 </li>

//                 <li className="flex gap-2">
//                   <span className="text-[#176b5b]">✓</span>
//                   Verify selling and cost prices.
//                 </li>

//                 <li className="flex gap-2">
//                   <span className="text-[#176b5b]">✓</span>
//                   Set the correct opening stock.
//                 </li>

//                 <li className="flex gap-2">
//                   <span className="text-[#176b5b]">✓</span>
//                   Add an image URL if available.
//                 </li>
//               </ul>
//             </section>
//           </div>
//         </div>

//         {/* Bottom Actions */}
//         <div className="mt-6 flex flex-col-reverse gap-3 rounded-xl border border-[#e4e2da] bg-white p-4 sm:flex-row sm:items-center sm:justify-end">
//           <button
//             onClick={handleCancel}
//             className="rounded-lg border border-[#d9d7cf] px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {saving ? "Saving..." : "Create Product"}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "@/core/config/firebaseClient";
// import { createProduct } from "@/modules/furniture/services/productService";

// const categories = [
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

// const subcategories = [
//   "L-Shape Sofa",
//   "3 Seater Sofa",
//   "2 Seater Sofa",
//   "King Size Bed",
//   "Queen Size Bed",
//   "Dining Set",
//   "Recliner",
//   "Wardrobe",
//   "TV Unit",
//   "Other",
// ];

// const materials = [
//   "Engineered Wood",
//   "Solid Wood",
//   "Plywood",
//   "MDF",
//   "Metal",
//   "Fabric",
//   "Leather",
//   "Glass",
//   "Wood + Fabric",
//   "Other",
// ];

// const finishes = [
//   "Matte Finish",
//   "Glossy Finish",
//   "Natural Wood",
//   "Laminate",
//   "PU Finish",
//   "Melamine",
//   "Other",
// ];

// const units = ["Nos", "Set", "Sq.Ft", "Meter", "Piece"];

// const suppliers = [
//   "Akrish Furniture Suppliers",
//   "Local Supplier",
//   "ABC Furniture Supplier",
//   "Direct Manufacturer",
// ];

// export default function NewProductPage() {
//   const router = useRouter();
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [form, setForm] = useState({
//     productName: "",
//     productCode: "",
//     category: "",
//     subcategory: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     description: "",
//     sellingPrice: "",
//     costPrice: "",
//     stock: "",
//     unit: "Nos",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     warehouseLocation: "Main Warehouse",
//     imageUrl: "",
//     status: "In Stock",
//   });

//   const [imagePreview, setImagePreview] = useState("");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [saving, setSaving] = useState(false);

//   const updateField = (field: string, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const calculateProfit = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     return selling - cost;
//   };

//   const calculateMargin = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     if (!selling) return 0;
//     return ((selling - cost) / selling) * 100;
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.productName.trim()) newErrors.productName = "Product name is required";
//     if (!form.productCode.trim()) newErrors.productCode = "Product code is required";
//     if (!form.category) newErrors.category = "Please select a category";
//     if (!form.material) newErrors.material = "Please select material";
//     if (!form.sellingPrice) newErrors.sellingPrice = "Selling price is required";
//     if (!form.costPrice) newErrors.costPrice = "Cost price is required";
//     if (!form.stock) newErrors.stock = "Opening stock is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate type
//     if (!file.type.startsWith("image/")) {
//       alert("Please select an image file (JPG, PNG, WebP, etc.)");
//       return;
//     }

//     // Validate size (max 5 MB)
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image must be less than 5 MB");
//       return;
//     }

//     setImageFile(file);
//     setForm((prev) => ({ ...prev, imageUrl: "" })); // clear URL if file chosen

//     // Local preview
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   // Handle URL input
//   const handleImageUrl = (value: string) => {
//     updateField("imageUrl", value);
//     setImageFile(null);
//     setImagePreview(value);
//   };

//   // Upload to Firebase Storage
//   const uploadImage = async (): Promise<string | null> => {
//     if (!imageFile) return form.imageUrl || null;

//     setUploadingImage(true);
//     try {
//       const timestamp = Date.now();
//       const safeName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_");
//       const storageRef = ref(
//         storage,
//         `furniture/products/${timestamp}_${safeName}`
//       );

//       await uploadBytes(storageRef, imageFile);
//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (err) {
//       console.error("Image upload failed:", err);
//       alert("Failed to upload image. Please try again.");
//       return null;
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleSave = async () => {
//     if (!validateForm()) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     setSaving(true);

//     try {
//       // 1. Upload image if a file was selected
//       const finalImageUrl = await uploadImage();

//       // 2. Create product in Firestore
//       const productData = {
//         name: form.productName.trim(),
//         sku: form.productCode.trim().toUpperCase(),
//         code: form.productCode.trim().toUpperCase(),
//         category: form.category,
//         subcategory: form.subcategory || "",
//         material: form.material,
//         finish: form.finish || "",
//         color: form.color || "",
//         dimensions: form.dimensions || "",
//         description: form.description || "",
//         sellingPrice: Number(form.sellingPrice),
//         price: Number(form.sellingPrice),
//         costPrice: Number(form.costPrice),
//         stock: Number(form.stock),
//         unit: form.unit,
//         reorderLevel: Number(form.reorderLevel || 0),
//         minStock: Number(form.reorderLevel || 0),
//         leadTime: form.leadTime || "",
//         warranty: form.warranty || "",
//         supplier: form.supplier || "",
//         location: form.warehouseLocation || "Main Warehouse",
//         warehouseLocation: form.warehouseLocation || "Main Warehouse",
//         imageUrl: finalImageUrl || "",
//         image: finalImageUrl || "",
//         status: form.status,
//       };

//       await createProduct(productData);

//       alert("Product created successfully!");
//       router.push("/furniture/products");
//     } catch (err) {
//       console.error("Create product failed:", err);
//       alert("Failed to create product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     router.push("/furniture/products");
//   };

//   const removeImage = () => {
//     setImageFile(null);
//     setImagePreview("");
//     setForm((prev) => ({ ...prev, imageUrl: "" }));
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       {/* Header */}
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/products")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Products
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">New Product</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">Add New Product</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Create a new furniture product in your inventory.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleCancel}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={saving || uploadingImage}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {uploadingImage
//                   ? "Uploading image..."
//                   : saving
//                   ? "Saving..."
//                   : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main */}
//       <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
//           {/* Left column – form fields (same as before) */}
//           <div className="space-y-6">
//             {/* Basic Information */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Basic Information</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Enter the basic details of the furniture product.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productName}
//                     onChange={(e) => updateField("productName", e.target.value)}
//                     placeholder="e.g. Modern L-Shape Sofa"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productName ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productName && (
//                     <p className="mt-1 text-xs text-red-500">{errors.productName}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Code <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productCode}
//                     onChange={(e) =>
//                       updateField("productCode", e.target.value.toUpperCase())
//                     }
//                     placeholder="e.g. SOFA-001"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm uppercase outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productCode ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productCode && (
//                     <p className="mt-1 text-xs text-red-500">{errors.productCode}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Category <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.category}
//                     onChange={(e) => updateField("category", e.target.value)}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.category ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">Select category</option>
//                     {categories.map((c) => (
//                       <option key={c} value={c}>{c}</option>
//                     ))}
//                   </select>
//                   {errors.category && (
//                     <p className="mt-1 text-xs text-red-500">{errors.category}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Subcategory
//                   </label>
//                   <select
//                     value={form.subcategory}
//                     onChange={(e) => updateField("subcategory", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select subcategory</option>
//                     {subcategories.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Material <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.material}
//                     onChange={(e) => updateField("material", e.target.value)}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.material ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">Select material</option>
//                     {materials.map((m) => (
//                       <option key={m} value={m}>{m}</option>
//                     ))}
//                   </select>
//                   {errors.material && (
//                     <p className="mt-1 text-xs text-red-500">{errors.material}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Finish
//                   </label>
//                   <select
//                     value={form.finish}
//                     onChange={(e) => updateField("finish", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select finish</option>
//                     {finishes.map((f) => (
//                       <option key={f} value={f}>{f}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Color
//                   </label>
//                   <input
//                     value={form.color}
//                     onChange={(e) => updateField("color", e.target.value)}
//                     placeholder="e.g. Light Grey"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Dimensions
//                   </label>
//                   <input
//                     value={form.dimensions}
//                     onChange={(e) => updateField("dimensions", e.target.value)}
//                     placeholder="e.g. 280 × 180 × 85 cm"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     rows={4}
//                     value={form.description}
//                     onChange={(e) => updateField("description", e.target.value)}
//                     placeholder="Enter product description..."
//                     className="w-full resize-none rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Pricing */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Pricing</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Selling Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.sellingPrice}
//                       onChange={(e) => updateField("sellingPrice", e.target.value)}
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.sellingPrice ? "border-red-400" : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.sellingPrice && (
//                     <p className="mt-1 text-xs text-red-500">{errors.sellingPrice}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Cost Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.costPrice}
//                       onChange={(e) => updateField("costPrice", e.target.value)}
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.costPrice ? "border-red-400" : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.costPrice && (
//                     <p className="mt-1 text-xs text-red-500">{errors.costPrice}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4 border-t border-[#e4e2da] bg-[#fafaf8] p-5 sm:grid-cols-2">
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Profit</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     ₹{calculateProfit().toLocaleString("en-IN")}
//                   </p>
//                 </div>
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Margin</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     {calculateMargin().toFixed(1)}%
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Inventory */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Inventory</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Opening Stock <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.stock}
//                     onChange={(e) => updateField("stock", e.target.value)}
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.stock ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.stock && (
//                     <p className="mt-1 text-xs text-red-500">{errors.stock}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Unit
//                   </label>
//                   <select
//                     value={form.unit}
//                     onChange={(e) => updateField("unit", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {units.map((u) => (
//                       <option key={u} value={u}>{u}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Reorder Level
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.reorderLevel}
//                     onChange={(e) => updateField("reorderLevel", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warehouse Location
//                   </label>
//                   <input
//                     value={form.warehouseLocation}
//                     onChange={(e) =>
//                       updateField("warehouseLocation", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Status
//                   </label>
//                   <select
//                     value={form.status}
//                     onChange={(e) => updateField("status", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Lead Time
//                   </label>
//                   <input
//                     value={form.leadTime}
//                     onChange={(e) => updateField("leadTime", e.target.value)}
//                     placeholder="e.g. 7–10 Days"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Supplier & Warranty */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Supplier & Warranty
//                 </h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Supplier
//                   </label>
//                   <select
//                     value={form.supplier}
//                     onChange={(e) => updateField("supplier", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select supplier</option>
//                     {suppliers.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warranty
//                   </label>
//                   <input
//                     value={form.warranty}
//                     onChange={(e) => updateField("warranty", e.target.value)}
//                     placeholder="e.g. 2 Years"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Right Sidebar – Image Upload */}
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Product Image</h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Upload an image or paste an image URL.
//                 </p>
//               </div>

//               <div className="p-5">
//                 {/* Preview */}
//                 <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfcdbf] bg-[#fafaf8]">
//                   {imagePreview ? (
//                     <div className="relative h-full w-full">
//                       <img
//                         src={imagePreview}
//                         alt="Product preview"
//                         className="h-full w-full object-cover"
//                         onError={() => setImagePreview("")}
//                       />
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="px-5 text-center">
//                       <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                         📷
//                       </div>
//                       <p className="text-sm font-medium text-gray-700">
//                         No image added
//                       </p>
//                       <p className="mt-1 text-xs text-gray-400">
//                         Upload a file or paste a URL
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Upload button */}
//                 <div className="mb-4">
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     id="product-image-upload"
//                   />
//                   <label
//                     htmlFor="product-image-upload"
//                     className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#176b5b] bg-[#eef7f4] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#e0f2ec]"
//                   >
//                     {imageFile ? "Change Image" : "Upload Image"}
//                   </label>
//                   <p className="mt-1.5 text-center text-[11px] text-gray-400">
//                     JPG, PNG, WebP • Max 5 MB
//                   </p>
//                 </div>

//                 {/* OR divider */}
//                 <div className="relative my-4">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-[#e4e2da]" />
//                   </div>
//                   <div className="relative flex justify-center text-xs">
//                     <span className="bg-white px-2 text-gray-400">OR</span>
//                   </div>
//                 </div>

//                 {/* URL input */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Image URL
//                   </label>
//                   <input
//                     value={form.imageUrl}
//                     onChange={(e) => handleImageUrl(e.target.value)}
//                     placeholder="https://..."
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Product Preview card (same as before) */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Product Preview</h2>
//               </div>
//               <div className="p-5">
//                 <div className="mb-4 flex items-center justify-between">
//                   <span className="rounded-full bg-[#eaf5f1] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {form.status}
//                   </span>
//                   <span className="text-xs text-gray-400">
//                     {form.productCode || "PRODUCT-CODE"}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#222]">
//                   {form.productName || "Product Name"}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   {form.category || "Category"}
//                   {form.subcategory ? ` • ${form.subcategory}` : ""}
//                 </p>

//                 <div className="my-4 border-t border-[#e4e2da]" />

//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Material</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.material || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Finish</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.finish || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Color</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.color || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Stock</span>
//                     <span className="font-medium text-gray-800">
//                       {form.stock || "0"} {form.unit}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-5 rounded-lg bg-[#f7f7f4] p-4">
//                   <p className="text-xs text-gray-500">Selling Price</p>
//                   <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                     ₹{Number(form.sellingPrice || 0).toLocaleString("en-IN")}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* Bottom Actions */}
//         <div className="mt-6 flex flex-col-reverse gap-3 rounded-xl border border-[#e4e2da] bg-white p-4 sm:flex-row sm:items-center sm:justify-end">
//           <button
//             onClick={handleCancel}
//             className="rounded-lg border border-[#d9d7cf] px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={saving || uploadingImage}
//             className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {uploadingImage
//               ? "Uploading image..."
//               : saving
//               ? "Saving..."
//               : "Create Product"}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "@/core/config/firebaseClient";
// import { createProduct } from "@/modules/furniture/services/productService";
// import {
//   getAllCategories,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";
// import {
//   getAllSubCategories,
//   type FurnitureSubCategory,
// } from "@/modules/furniture/services/subCategoryService";
// import {
//   getAllMaterials,
//   type FurnitureMaterial,
// } from "@/modules/furniture/services/materialService";
// import {
//   getAllFinishes,
//   type FurnitureFinish,
// } from "@/modules/furniture/services/finishService";

// const units = ["Nos", "Set", "Sq.Ft", "Meter", "Piece"];

// const suppliers = [
//   "Akrish Furniture Suppliers",
//   "Local Supplier",
//   "ABC Furniture Supplier",
//   "Direct Manufacturer",
// ];

// export default function NewProductPage() {
//   const router = useRouter();
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [categories, setCategories] = useState<FurnitureCategory[]>([]);
//   const [subCategories, setSubCategories] = useState<FurnitureSubCategory[]>([]);
//   const [materials, setMaterials] = useState<FurnitureMaterial[]>([]);
//   const [finishes, setFinishes] = useState<FurnitureFinish[]>([]);
//   const [optionsLoading, setOptionsLoading] = useState(true);
//   const [successOpen, setSuccessOpen] = useState(false);
//   const [createdProductName, setCreatedProductName] = useState("");

//   const [form, setForm] = useState({
//     productName: "",
//     productCode: "",
//     category: "", // stores category name
//     subcategory: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     description: "",
//     sellingPrice: "",
//     costPrice: "",
//     stock: "",
//     unit: "Nos",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     warehouseLocation: "Main Warehouse",
//     imageUrl: "",
//     status: "In Stock",
//   });

//   const [imagePreview, setImagePreview] = useState("");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [saving, setSaving] = useState(false);

//   // Load catalog options from Firestore
//   useEffect(() => {
//     let cancelled = false;

//     async function loadOptions() {
//       setOptionsLoading(true);
//       try {
//         const [cats, subs, mats, fins] = await Promise.all([
//           getAllCategories(),
//           getAllSubCategories(),
//           getAllMaterials(),
//           getAllFinishes(),
//         ]);
//         if (cancelled) return;

//         setCategories(
//           cats.filter((c) => (c.status || "Active") === "Active")
//         );
//         setSubCategories(
//           subs.filter((s) => (s.status || "Active") === "Active")
//         );
//         setMaterials(
//           mats.filter((m) => (m.status || "Active") === "Active")
//         );
//         setFinishes(
//           fins.filter((f) => (f.status || "Active") === "Active")
//         );
//       } catch (err) {
//         console.error("Failed to load product options:", err);
//       } finally {
//         if (!cancelled) setOptionsLoading(false);
//       }
//     }

//     loadOptions();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   // Sub-categories for the selected parent category
//   const filteredSubCategories = useMemo(() => {
//     if (!form.category) return [];
//     const parent = categories.find((c) => c.name === form.category);
//     if (!parent) {
//       // fallback: match by categoryName string
//       return subCategories.filter(
//         (s) => s.categoryName === form.category
//       );
//     }
//     return subCategories.filter((s) => s.categoryId === parent.id);
//   }, [form.category, categories, subCategories]);

//   const updateField = (field: string, value: string) => {
//     setForm((prev) => {
//       const next = { ...prev, [field]: value };
//       // Reset subcategory when category changes
//       if (field === "category") {
//         next.subcategory = "";
//       }
//       return next;
//     });
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const calculateProfit = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     return selling - cost;
//   };

//   const calculateMargin = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     if (!selling) return 0;
//     return ((selling - cost) / selling) * 100;
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.productName.trim())
//       newErrors.productName = "Product name is required";
//     if (!form.productCode.trim())
//       newErrors.productCode = "Product code is required";
//     if (!form.category) newErrors.category = "Please select a category";
//     if (!form.material) newErrors.material = "Please select material";
//     if (!form.sellingPrice)
//       newErrors.sellingPrice = "Selling price is required";
//     if (!form.costPrice) newErrors.costPrice = "Cost price is required";
//     if (!form.stock) newErrors.stock = "Opening stock is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       alert("Please select an image file (JPG, PNG, WebP, etc.)");
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image must be less than 5 MB");
//       return;
//     }

//     setImageFile(file);
//     setForm((prev) => ({ ...prev, imageUrl: "" }));

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrl = (value: string) => {
//     updateField("imageUrl", value);
//     setImageFile(null);
//     setImagePreview(value);
//   };

//   const uploadImage = async (): Promise<string | null> => {
//     if (!imageFile) return form.imageUrl || null;

//     setUploadingImage(true);
//     try {
//       const timestamp = Date.now();
//       const safeName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_");
//       const storageRef = ref(
//         storage,
//         `furniture/products/${timestamp}_${safeName}`
//       );

//       await uploadBytes(storageRef, imageFile);
//       return await getDownloadURL(storageRef);
//     } catch (err) {
//       console.error("Image upload failed:", err);
//       alert("Failed to upload image. Please try again.");
//       return null;
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleSave = async () => {
//     if (!validateForm()) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     setSaving(true);

//     try {
//       const finalImageUrl = await uploadImage();

//       const productData = {
//         name: form.productName.trim(),
//         sku: form.productCode.trim().toUpperCase(),
//         code: form.productCode.trim().toUpperCase(),
//         category: form.category,
//         subcategory: form.subcategory || "",
//         material: form.material,
//         finish: form.finish || "",
//         color: form.color || "",
//         dimensions: form.dimensions || "",
//         description: form.description || "",
//         sellingPrice: Number(form.sellingPrice),
//         price: Number(form.sellingPrice),
//         costPrice: Number(form.costPrice),
//         stock: Number(form.stock),
//         unit: form.unit,
//         reorderLevel: Number(form.reorderLevel || 0),
//         minStock: Number(form.reorderLevel || 0),
//         leadTime: form.leadTime || "",
//         warranty: form.warranty || "",
//         supplier: form.supplier || "",
//         location: form.warehouseLocation || "Main Warehouse",
//         warehouseLocation: form.warehouseLocation || "Main Warehouse",
//         imageUrl: finalImageUrl || "",
//         image: finalImageUrl || "",
//         status: form.status,
//       };

//       await createProduct(productData);

//       alert("Product created successfully!");
//       router.push("/furniture/products");
//     } catch (err) {
//       console.error("Create product failed:", err);
//       alert("Failed to create product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     router.push("/furniture/products");
//   };

//   const removeImage = () => {
//     setImageFile(null);
//     setImagePreview("");
//     setForm((prev) => ({ ...prev, imageUrl: "" }));
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/products")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Products
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">New Product</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">Add New Product</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Create a new furniture product in your inventory.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleCancel}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={saving || uploadingImage}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {uploadingImage
//                   ? "Uploading image..."
//                   : saving
//                     ? "Saving..."
//                     : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Basic Information
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Enter the basic details of the furniture product.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productName}
//                     onChange={(e) => updateField("productName", e.target.value)}
//                     placeholder="e.g. Modern L-Shape Sofa"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productName ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productName && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Code <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productCode}
//                     onChange={(e) =>
//                       updateField("productCode", e.target.value.toUpperCase())
//                     }
//                     placeholder="e.g. SOFA-001"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm uppercase outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productCode ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productCode && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productCode}
//                     </p>
//                   )}
//                 </div>

//                 {/* Category — from Firestore */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Category <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.category}
//                     onChange={(e) => updateField("category", e.target.value)}
//                     disabled={optionsLoading}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60 ${
//                       errors.category ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select category"}
//                     </option>
//                     {categories.map((c) => (
//                       <option key={c.id} value={c.name}>
//                         {c.name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.category && (
//                     <p className="mt-1 text-xs text-red-500">{errors.category}</p>
//                   )}
//                   {!optionsLoading && categories.length === 0 && (
//                     <p className="mt-1 text-xs text-amber-600">
//                       No categories yet. Add them under Furniture → Categories.
//                     </p>
//                   )}
//                 </div>

//                 {/* Subcategory — filtered by category */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Subcategory
//                   </label>
//                   <select
//                     value={form.subcategory}
//                     onChange={(e) => updateField("subcategory", e.target.value)}
//                     disabled={!form.category || optionsLoading}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60"
//                   >
//                     <option value="">
//                       {!form.category
//                         ? "Select category first"
//                         : filteredSubCategories.length === 0
//                           ? "No sub categories"
//                           : "Select subcategory"}
//                     </option>
//                     {filteredSubCategories.map((s) => (
//                       <option key={s.id} value={s.name}>
//                         {s.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Material — from Firestore */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Material <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.material}
//                     onChange={(e) => updateField("material", e.target.value)}
//                     disabled={optionsLoading}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60 ${
//                       errors.material ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select material"}
//                     </option>
//                     {materials.map((m) => (
//                       <option key={m.id} value={m.name}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.material && (
//                     <p className="mt-1 text-xs text-red-500">{errors.material}</p>
//                   )}
//                   {!optionsLoading && materials.length === 0 && (
//                     <p className="mt-1 text-xs text-amber-600">
//                       No materials yet. Add them under Furniture → Materials.
//                     </p>
//                   )}
//                 </div>

//                 {/* Finish — from Firestore */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Finish
//                   </label>
//                   <select
//                     value={form.finish}
//                     onChange={(e) => updateField("finish", e.target.value)}
//                     disabled={optionsLoading}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60"
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select finish"}
//                     </option>
//                     {finishes.map((f) => (
//                       <option key={f.id} value={f.name}>
//                         {f.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Color
//                   </label>
//                   <input
//                     value={form.color}
//                     onChange={(e) => updateField("color", e.target.value)}
//                     placeholder="e.g. Light Grey"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Dimensions
//                   </label>
//                   <input
//                     value={form.dimensions}
//                     onChange={(e) => updateField("dimensions", e.target.value)}
//                     placeholder="e.g. 280 × 180 × 85 cm"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     rows={4}
//                     value={form.description}
//                     onChange={(e) => updateField("description", e.target.value)}
//                     placeholder="Enter product description..."
//                     className="w-full resize-none rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Pricing, Inventory, Supplier sections — unchanged from your file */}
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Pricing</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Selling Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.sellingPrice}
//                       onChange={(e) =>
//                         updateField("sellingPrice", e.target.value)
//                       }
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.sellingPrice
//                           ? "border-red-400"
//                           : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.sellingPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.sellingPrice}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Cost Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.costPrice}
//                       onChange={(e) => updateField("costPrice", e.target.value)}
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.costPrice ? "border-red-400" : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.costPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.costPrice}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4 border-t border-[#e4e2da] bg-[#fafaf8] p-5 sm:grid-cols-2">
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Profit</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     ₹{calculateProfit().toLocaleString("en-IN")}
//                   </p>
//                 </div>
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Margin</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     {calculateMargin().toFixed(1)}%
//                   </p>
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Inventory</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Opening Stock <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.stock}
//                     onChange={(e) => updateField("stock", e.target.value)}
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.stock ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.stock && (
//                     <p className="mt-1 text-xs text-red-500">{errors.stock}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Unit
//                   </label>
//                   <select
//                     value={form.unit}
//                     onChange={(e) => updateField("unit", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {units.map((u) => (
//                       <option key={u} value={u}>
//                         {u}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Reorder Level
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.reorderLevel}
//                     onChange={(e) =>
//                       updateField("reorderLevel", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warehouse Location
//                   </label>
//                   <input
//                     value={form.warehouseLocation}
//                     onChange={(e) =>
//                       updateField("warehouseLocation", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Status
//                   </label>
//                   <select
//                     value={form.status}
//                     onChange={(e) => updateField("status", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Lead Time
//                   </label>
//                   <input
//                     value={form.leadTime}
//                     onChange={(e) => updateField("leadTime", e.target.value)}
//                     placeholder="e.g. 7–10 Days"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Supplier & Warranty
//                 </h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Supplier
//                   </label>
//                   <select
//                     value={form.supplier}
//                     onChange={(e) => updateField("supplier", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select supplier</option>
//                     {suppliers.map((s) => (
//                       <option key={s} value={s}>
//                         {s}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warranty
//                   </label>
//                   <input
//                     value={form.warranty}
//                     onChange={(e) => updateField("warranty", e.target.value)}
//                     placeholder="e.g. 2 Years"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Right sidebar — image + preview (unchanged logic) */}
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Image
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Upload an image or paste an image URL.
//                 </p>
//               </div>

//               <div className="p-5">
//                 <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfcdbf] bg-[#fafaf8]">
//                   {imagePreview ? (
//                     <div className="relative h-full w-full">
//                       <img
//                         src={imagePreview}
//                         alt="Product preview"
//                         className="h-full w-full object-cover"
//                         onError={() => setImagePreview("")}
//                       />
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="px-5 text-center">
//                       <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                         📷
//                       </div>
//                       <p className="text-sm font-medium text-gray-700">
//                         No image added
//                       </p>
//                       <p className="mt-1 text-xs text-gray-400">
//                         Upload a file or paste a URL
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     id="product-image-upload"
//                   />
//                   <label
//                     htmlFor="product-image-upload"
//                     className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#176b5b] bg-[#eef7f4] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#e0f2ec]"
//                   >
//                     {imageFile ? "Change Image" : "Upload Image"}
//                   </label>
//                   <p className="mt-1.5 text-center text-[11px] text-gray-400">
//                     JPG, PNG, WebP • Max 5 MB
//                   </p>
//                 </div>

//                 <div className="relative my-4">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-[#e4e2da]" />
//                   </div>
//                   <div className="relative flex justify-center text-xs">
//                     <span className="bg-white px-2 text-gray-400">OR</span>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Image URL
//                   </label>
//                   <input
//                     value={form.imageUrl}
//                     onChange={(e) => handleImageUrl(e.target.value)}
//                     placeholder="https://..."
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Preview
//                 </h2>
//               </div>
//               <div className="p-5">
//                 <div className="mb-4 flex items-center justify-between">
//                   <span className="rounded-full bg-[#eaf5f1] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {form.status}
//                   </span>
//                   <span className="text-xs text-gray-400">
//                     {form.productCode || "PRODUCT-CODE"}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#222]">
//                   {form.productName || "Product Name"}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   {form.category || "Category"}
//                   {form.subcategory ? ` • ${form.subcategory}` : ""}
//                 </p>

//                 <div className="my-4 border-t border-[#e4e2da]" />

//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Material</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.material || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Finish</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.finish || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Color</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.color || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Stock</span>
//                     <span className="font-medium text-gray-800">
//                       {form.stock || "0"} {form.unit}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-5 rounded-lg bg-[#f7f7f4] p-4">
//                   <p className="text-xs text-gray-500">Selling Price</p>
//                   <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                     ₹{Number(form.sellingPrice || 0).toLocaleString("en-IN")}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <div className="mt-6 flex flex-col-reverse gap-3 rounded-xl border border-[#e4e2da] bg-white p-4 sm:flex-row sm:items-center sm:justify-end">
//           <button
//             onClick={handleCancel}
//             className="rounded-lg border border-[#d9d7cf] px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={saving || uploadingImage}
//             className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {uploadingImage
//               ? "Uploading image..."
//               : saving
//                 ? "Saving..."
//                 : "Create Product"}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "@/core/config/firebaseClient";
// import { createProduct } from "@/modules/furniture/services/productService";
// import {
//   getAllCategories,
//   type FurnitureCategory,
// } from "@/modules/furniture/services/categoryService";
// import {
//   getAllSubCategories,
//   type FurnitureSubCategory,
// } from "@/modules/furniture/services/subCategoryService";
// import {
//   getAllMaterials,
//   type FurnitureMaterial,
// } from "@/modules/furniture/services/materialService";
// import {
//   getAllFinishes,
//   type FurnitureFinish,
// } from "@/modules/furniture/services/finishService";

// const units = ["Nos", "Set", "Sq.Ft", "Meter", "Piece"];

// const suppliers = [
//   "Akrish Furniture Suppliers",
//   "Local Supplier",
//   "ABC Furniture Supplier",
//   "Direct Manufacturer",
// ];

// export default function NewProductPage() {
//   const router = useRouter();
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [categories, setCategories] = useState<FurnitureCategory[]>([]);
//   const [subCategories, setSubCategories] = useState<FurnitureSubCategory[]>([]);
//   const [materials, setMaterials] = useState<FurnitureMaterial[]>([]);
//   const [finishes, setFinishes] = useState<FurnitureFinish[]>([]);
//   const [optionsLoading, setOptionsLoading] = useState(true);

//   const [form, setForm] = useState({
//     productName: "",
//     productCode: "",
//     category: "",
//     subcategory: "",
//     material: "",
//     finish: "",
//     color: "",
//     dimensions: "",
//     description: "",
//     sellingPrice: "",
//     costPrice: "",
//     stock: "",
//     unit: "Nos",
//     reorderLevel: "",
//     leadTime: "",
//     warranty: "",
//     supplier: "",
//     warehouseLocation: "Main Warehouse",
//     imageUrl: "",
//     status: "In Stock",
//   });

//   const [imagePreview, setImagePreview] = useState("");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [saving, setSaving] = useState(false);
//   const [successOpen, setSuccessOpen] = useState(false);
//   const [createdProductName, setCreatedProductName] = useState("");
//   const [saveError, setSaveError] = useState("");

//   useEffect(() => {
//     let cancelled = false;

//     async function loadOptions() {
//       setOptionsLoading(true);
//       try {
//         const [cats, subs, mats, fins] = await Promise.all([
//           getAllCategories(),
//           getAllSubCategories(),
//           getAllMaterials(),
//           getAllFinishes(),
//         ]);
//         if (cancelled) return;

//         setCategories(cats.filter((c) => (c.status || "Active") === "Active"));
//         setSubCategories(
//           subs.filter((s) => (s.status || "Active") === "Active")
//         );
//         setMaterials(mats.filter((m) => (m.status || "Active") === "Active"));
//         setFinishes(fins.filter((f) => (f.status || "Active") === "Active"));
//       } catch (err) {
//         console.error("Failed to load product options:", err);
//       } finally {
//         if (!cancelled) setOptionsLoading(false);
//       }
//     }

//     loadOptions();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const filteredSubCategories = useMemo(() => {
//     if (!form.category) return [];
//     const parent = categories.find((c) => c.name === form.category);
//     if (!parent) {
//       return subCategories.filter((s) => s.categoryName === form.category);
//     }
//     return subCategories.filter((s) => s.categoryId === parent.id);
//   }, [form.category, categories, subCategories]);

//   const updateField = (field: string, value: string) => {
//     setForm((prev) => {
//       const next = { ...prev, [field]: value };
//       if (field === "category") {
//         next.subcategory = "";
//       }
//       return next;
//     });
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const calculateProfit = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     return selling - cost;
//   };

//   const calculateMargin = () => {
//     const selling = Number(form.sellingPrice) || 0;
//     const cost = Number(form.costPrice) || 0;
//     if (!selling) return 0;
//     return ((selling - cost) / selling) * 100;
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.productName.trim())
//       newErrors.productName = "Product name is required";
//     if (!form.productCode.trim())
//       newErrors.productCode = "Product code is required";
//     if (!form.category) newErrors.category = "Please select a category";
//     if (!form.material) newErrors.material = "Please select material";
//     if (!form.sellingPrice)
//       newErrors.sellingPrice = "Selling price is required";
//     if (!form.costPrice) newErrors.costPrice = "Cost price is required";
//     if (!form.stock) newErrors.stock = "Opening stock is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       setSaveError("Please select an image file (JPG, PNG, WebP, etc.)");
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setSaveError("Image must be less than 5 MB");
//       return;
//     }

//     setSaveError("");
//     setImageFile(file);
//     setForm((prev) => ({ ...prev, imageUrl: "" }));

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrl = (value: string) => {
//     updateField("imageUrl", value);
//     setImageFile(null);
//     setImagePreview(value);
//   };

//   const uploadImage = async (): Promise<string | null> => {
//     if (!imageFile) return form.imageUrl || null;

//     setUploadingImage(true);
//     try {
//       const timestamp = Date.now();
//       const safeName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_");
//       const storageRef = ref(
//         storage,
//         `furniture/products/${timestamp}_${safeName}`
//       );

//       await uploadBytes(storageRef, imageFile);
//       return await getDownloadURL(storageRef);
//     } catch (err) {
//       console.error("Image upload failed:", err);
//       setSaveError("Failed to upload image. Please try again.");
//       return null;
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const resetForm = () => {
//     setForm({
//       productName: "",
//       productCode: "",
//       category: "",
//       subcategory: "",
//       material: "",
//       finish: "",
//       color: "",
//       dimensions: "",
//       description: "",
//       sellingPrice: "",
//       costPrice: "",
//       stock: "",
//       unit: "Nos",
//       reorderLevel: "",
//       leadTime: "",
//       warranty: "",
//       supplier: "",
//       warehouseLocation: "Main Warehouse",
//       imageUrl: "",
//       status: "In Stock",
//     });
//     setImageFile(null);
//     setImagePreview("");
//     setErrors({});
//     setSaveError("");
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSave = async () => {
//     setSaveError("");
//     if (!validateForm()) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     setSaving(true);

//     try {
//       const finalImageUrl = await uploadImage();
//       if (imageFile && !finalImageUrl) {
//         setSaving(false);
//         return;
//       }

//       const productData = {
//         name: form.productName.trim(),
//         sku: form.productCode.trim().toUpperCase(),
//         code: form.productCode.trim().toUpperCase(),
//         category: form.category,
//         subcategory: form.subcategory || "",
//         material: form.material,
//         finish: form.finish || "",
//         color: form.color || "",
//         dimensions: form.dimensions || "",
//         description: form.description || "",
//         sellingPrice: Number(form.sellingPrice),
//         price: Number(form.sellingPrice),
//         costPrice: Number(form.costPrice),
//         stock: Number(form.stock),
//         unit: form.unit,
//         reorderLevel: Number(form.reorderLevel || 0),
//         minStock: Number(form.reorderLevel || 0),
//         leadTime: form.leadTime || "",
//         warranty: form.warranty || "",
//         supplier: form.supplier || "",
//         location: form.warehouseLocation || "Main Warehouse",
//         warehouseLocation: form.warehouseLocation || "Main Warehouse",
//         imageUrl: finalImageUrl || "",
//         image: finalImageUrl || "",
//         status: form.status,
//         active: form.status !== "Inactive",
//       };

//       await createProduct(productData);

//       setCreatedProductName(form.productName.trim());
//       setSuccessOpen(true);
//     } catch (err) {
//       console.error("Create product failed:", err);
//       setSaveError("Failed to create product. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     router.push("/furniture/products");
//   };

//   const removeImage = () => {
//     setImageFile(null);
//     setImagePreview("");
//     setForm((prev) => ({ ...prev, imageUrl: "" }));
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
//       <div className="border-b border-[#e4e2da] bg-white">
//         <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
//                 <button
//                   onClick={() => router.push("/furniture/products")}
//                   className="hover:text-[#176b5b]"
//                 >
//                   Products
//                 </button>
//                 <span>/</span>
//                 <span className="text-gray-700">New Product</span>
//               </div>

//               <h1 className="text-2xl font-bold text-[#222]">Add New Product</h1>
//               <p className="mt-1 text-sm text-gray-500">
//                 Create a new furniture product in your inventory.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={handleCancel}
//                 className="rounded-lg border border-[#d9d7cf] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={saving || uploadingImage}
//                 className="rounded-lg bg-[#176b5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {uploadingImage
//                   ? "Uploading image..."
//                   : saving
//                     ? "Saving..."
//                     : "Save Product"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
//         {saveError && (
//           <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//             {saveError}
//           </div>
//         )}

//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Basic Information
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Enter the basic details of the furniture product.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productName}
//                     onChange={(e) => updateField("productName", e.target.value)}
//                     placeholder="e.g. Modern L-Shape Sofa"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productName ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productName && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Code <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     value={form.productCode}
//                     onChange={(e) =>
//                       updateField("productCode", e.target.value.toUpperCase())
//                     }
//                     placeholder="e.g. SOFA-001"
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm uppercase outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
//                       errors.productCode ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.productCode && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.productCode}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Category <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.category}
//                     onChange={(e) => updateField("category", e.target.value)}
//                     disabled={optionsLoading}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60 ${
//                       errors.category ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select category"}
//                     </option>
//                     {categories.map((c) => (
//                       <option key={c.id} value={c.name}>
//                         {c.name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.category && (
//                     <p className="mt-1 text-xs text-red-500">{errors.category}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Subcategory
//                   </label>
//                   <select
//                     value={form.subcategory}
//                     onChange={(e) => updateField("subcategory", e.target.value)}
//                     disabled={!form.category || optionsLoading}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60"
//                   >
//                     <option value="">
//                       {!form.category
//                         ? "Select category first"
//                         : filteredSubCategories.length === 0
//                           ? "No sub categories"
//                           : "Select subcategory"}
//                     </option>
//                     {filteredSubCategories.map((s) => (
//                       <option key={s.id} value={s.name}>
//                         {s.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Material <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     value={form.material}
//                     onChange={(e) => updateField("material", e.target.value)}
//                     disabled={optionsLoading}
//                     className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60 ${
//                       errors.material ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select material"}
//                     </option>
//                     {materials.map((m) => (
//                       <option key={m.id} value={m.name}>
//                         {m.name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.material && (
//                     <p className="mt-1 text-xs text-red-500">{errors.material}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Finish
//                   </label>
//                   <select
//                     value={form.finish}
//                     onChange={(e) => updateField("finish", e.target.value)}
//                     disabled={optionsLoading}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] disabled:opacity-60"
//                   >
//                     <option value="">
//                       {optionsLoading ? "Loading…" : "Select finish"}
//                     </option>
//                     {finishes.map((f) => (
//                       <option key={f.id} value={f.name}>
//                         {f.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Color
//                   </label>
//                   <input
//                     value={form.color}
//                     onChange={(e) => updateField("color", e.target.value)}
//                     placeholder="e.g. Light Grey"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Dimensions
//                   </label>
//                   <input
//                     value={form.dimensions}
//                     onChange={(e) => updateField("dimensions", e.target.value)}
//                     placeholder="e.g. 280 × 180 × 85 cm"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     rows={4}
//                     value={form.description}
//                     onChange={(e) => updateField("description", e.target.value)}
//                     placeholder="Enter product description..."
//                     className="w-full resize-none rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Pricing</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Selling Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.sellingPrice}
//                       onChange={(e) =>
//                         updateField("sellingPrice", e.target.value)
//                       }
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.sellingPrice
//                           ? "border-red-400"
//                           : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.sellingPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.sellingPrice}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Cost Price <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                       ₹
//                     </span>
//                     <input
//                       type="number"
//                       min="0"
//                       value={form.costPrice}
//                       onChange={(e) => updateField("costPrice", e.target.value)}
//                       className={`w-full rounded-lg border py-2.5 pl-8 pr-3.5 text-sm outline-none focus:border-[#176b5b] ${
//                         errors.costPrice ? "border-red-400" : "border-[#d9d7cf]"
//                       }`}
//                     />
//                   </div>
//                   {errors.costPrice && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {errors.costPrice}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4 border-t border-[#e4e2da] bg-[#fafaf8] p-5 sm:grid-cols-2">
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Profit</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     ₹{calculateProfit().toLocaleString("en-IN")}
//                   </p>
//                 </div>
//                 <div className="rounded-lg border border-[#e4e2da] bg-white p-4">
//                   <p className="text-xs text-gray-500">Estimated Margin</p>
//                   <p className="mt-1 text-xl font-bold text-[#176b5b]">
//                     {calculateMargin().toFixed(1)}%
//                   </p>
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">Inventory</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Opening Stock <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.stock}
//                     onChange={(e) => updateField("stock", e.target.value)}
//                     className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] ${
//                       errors.stock ? "border-red-400" : "border-[#d9d7cf]"
//                     }`}
//                   />
//                   {errors.stock && (
//                     <p className="mt-1 text-xs text-red-500">{errors.stock}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Unit
//                   </label>
//                   <select
//                     value={form.unit}
//                     onChange={(e) => updateField("unit", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     {units.map((u) => (
//                       <option key={u} value={u}>
//                         {u}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Reorder Level
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={form.reorderLevel}
//                     onChange={(e) =>
//                       updateField("reorderLevel", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warehouse Location
//                   </label>
//                   <input
//                     value={form.warehouseLocation}
//                     onChange={(e) =>
//                       updateField("warehouseLocation", e.target.value)
//                     }
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Product Status
//                   </label>
//                   <select
//                     value={form.status}
//                     onChange={(e) => updateField("status", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Lead Time
//                   </label>
//                   <input
//                     value={form.leadTime}
//                     onChange={(e) => updateField("leadTime", e.target.value)}
//                     placeholder="e.g. 7–10 Days"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Supplier & Warranty
//                 </h2>
//               </div>
//               <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Supplier
//                   </label>
//                   <select
//                     value={form.supplier}
//                     onChange={(e) => updateField("supplier", e.target.value)}
//                     className="w-full rounded-lg border border-[#d9d7cf] bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   >
//                     <option value="">Select supplier</option>
//                     {suppliers.map((s) => (
//                       <option key={s} value={s}>
//                         {s}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Warranty
//                   </label>
//                   <input
//                     value={form.warranty}
//                     onChange={(e) => updateField("warranty", e.target.value)}
//                     placeholder="e.g. 2 Years"
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="space-y-6">
//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Image
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   Upload an image or paste an image URL.
//                 </p>
//               </div>

//               <div className="p-5">
//                 <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfcdbf] bg-[#fafaf8]">
//                   {imagePreview ? (
//                     <div className="relative h-full w-full">
//                       <img
//                         src={imagePreview}
//                         alt="Product preview"
//                         className="h-full w-full object-cover"
//                         onError={() => setImagePreview("")}
//                       />
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="px-5 text-center">
//                       <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5f2] text-[#176b5b]">
//                         📷
//                       </div>
//                       <p className="text-sm font-medium text-gray-700">
//                         No image added
//                       </p>
//                       <p className="mt-1 text-xs text-gray-400">
//                         Upload a file or paste a URL
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     id="product-image-upload"
//                   />
//                   <label
//                     htmlFor="product-image-upload"
//                     className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#176b5b] bg-[#eef7f4] px-4 py-2.5 text-sm font-semibold text-[#176b5b] transition hover:bg-[#e0f2ec]"
//                   >
//                     {imageFile ? "Change Image" : "Upload Image"}
//                   </label>
//                   <p className="mt-1.5 text-center text-[11px] text-gray-400">
//                     JPG, PNG, WebP • Max 5 MB
//                   </p>
//                 </div>

//                 <div className="relative my-4">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-[#e4e2da]" />
//                   </div>
//                   <div className="relative flex justify-center text-xs">
//                     <span className="bg-white px-2 text-gray-400">OR</span>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-gray-700">
//                     Image URL
//                   </label>
//                   <input
//                     value={form.imageUrl}
//                     onChange={(e) => handleImageUrl(e.target.value)}
//                     placeholder="https://..."
//                     className="w-full rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b]"
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="rounded-xl border border-[#e4e2da] bg-white">
//               <div className="border-b border-[#e4e2da] px-5 py-4">
//                 <h2 className="text-base font-bold text-[#222]">
//                   Product Preview
//                 </h2>
//               </div>
//               <div className="p-5">
//                 <div className="mb-4 flex items-center justify-between">
//                   <span className="rounded-full bg-[#eaf5f1] px-3 py-1 text-xs font-semibold text-[#176b5b]">
//                     {form.status}
//                   </span>
//                   <span className="text-xs text-gray-400">
//                     {form.productCode || "PRODUCT-CODE"}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-[#222]">
//                   {form.productName || "Product Name"}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   {form.category || "Category"}
//                   {form.subcategory ? ` • ${form.subcategory}` : ""}
//                 </p>

//                 <div className="my-4 border-t border-[#e4e2da]" />

//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Material</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.material || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Finish</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.finish || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Color</span>
//                     <span className="text-right font-medium text-gray-800">
//                       {form.color || "—"}
//                     </span>
//                   </div>
//                   <div className="flex justify-between gap-4">
//                     <span className="text-gray-500">Stock</span>
//                     <span className="font-medium text-gray-800">
//                       {form.stock || "0"} {form.unit}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-5 rounded-lg bg-[#f7f7f4] p-4">
//                   <p className="text-xs text-gray-500">Selling Price</p>
//                   <p className="mt-1 text-2xl font-bold text-[#176b5b]">
//                     ₹{Number(form.sellingPrice || 0).toLocaleString("en-IN")}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <div className="mt-6 flex flex-col-reverse gap-3 rounded-xl border border-[#e4e2da] bg-white p-4 sm:flex-row sm:items-center sm:justify-end">
//           <button
//             onClick={handleCancel}
//             className="rounded-lg border border-[#d9d7cf] px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={saving || uploadingImage}
//             className="rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {uploadingImage
//               ? "Uploading image..."
//               : saving
//                 ? "Saving..."
//                 : "Create Product"}
//           </button>
//         </div>
//       </main>

//       {/* Success modal */}
//       {successOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
//           <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
//             <div className="bg-[#eef7f4] px-6 pb-6 pt-8 text-center">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#176b5b] text-3xl text-white">
//                 ✓
//               </div>
//               <h2 className="mt-4 text-xl font-bold text-[#222]">
//                 Product created successfully
//               </h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 <span className="font-semibold text-[#176b5b]">
//                   {createdProductName}
//                 </span>{" "}
//                 has been added to inventory and will appear on the website
//                 catalog.
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 p-5 sm:flex-row sm:justify-end">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSuccessOpen(false);
//                   resetForm();
//                 }}
//                 className="rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 Add another
//               </button>
//               <button
//                 type="button"
//                 onClick={() => router.push("/furniture/products")}
//                 className="rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125548]"
//               >
//                 View products
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/core/config/firebaseClient";
import { createProduct } from "@/modules/furniture/services/productService";
import {
  getAllCategories,
  type FurnitureCategory,
} from "@/modules/furniture/services/categoryService";
import {
  getAllSubCategories,
  type FurnitureSubCategory,
} from "@/modules/furniture/services/subCategoryService";
import {
  getAllMaterials,
  type FurnitureMaterial,
} from "@/modules/furniture/services/materialService";
import {
  getAllFinishes,
  type FurnitureFinish,
} from "@/modules/furniture/services/finishService";

const units = ["Nos", "Set", "Sq.Ft", "Meter", "Piece"];

const suppliers = [
  "Akrish Furniture Suppliers",
  "Local Supplier",
  "ABC Furniture Supplier",
  "Direct Manufacturer",
];

export default function NewProductPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [categories, setCategories] = useState<FurnitureCategory[]>([]);
  const [subCategories, setSubCategories] = useState<FurnitureSubCategory[]>([]);
  const [materials, setMaterials] = useState<FurnitureMaterial[]>([]);
  const [finishes, setFinishes] = useState<FurnitureFinish[]>([]);
  const [optionsLoading, setOptionsLoading] = useState(true);

  const [form, setForm] = useState({
    productName: "",
    productCode: "",
    category: "",
    subcategory: "",
    material: "",
    finish: "",
    color: "",
    dimensions: "",
    description: "",
    sellingPrice: "",
    costPrice: "",
    stock: "",
    unit: "Nos",
    reorderLevel: "",
    leadTime: "",
    warranty: "",
    supplier: "",
    warehouseLocation: "Main Warehouse",
    imageUrl: "",
    status: "In Stock",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [createdProductName, setCreatedProductName] = useState("");
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadOptions() {
      setOptionsLoading(true);
      try {
        const [cats, subs, mats, fins] = await Promise.all([
          getAllCategories(),
          getAllSubCategories(),
          getAllMaterials(),
          getAllFinishes(),
        ]);
        if (cancelled) return;

        setCategories(cats.filter((c) => (c.status || "Active") === "Active"));
        setSubCategories(
          subs.filter((s) => (s.status || "Active") === "Active")
        );
        setMaterials(mats.filter((m) => (m.status || "Active") === "Active"));
        setFinishes(fins.filter((f) => (f.status || "Active") === "Active"));
      } catch (err) {
        console.error("Failed to load product options:", err);
      } finally {
        if (!cancelled) setOptionsLoading(false);
      }
    }

    loadOptions();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredSubCategories = useMemo(() => {
    if (!form.category) return [];
    const parent = categories.find((c) => c.name === form.category);
    if (!parent) {
      return subCategories.filter((s) => s.categoryName === form.category);
    }
    return subCategories.filter((s) => s.categoryId === parent.id);
  }, [form.category, categories, subCategories]);

  const updateField = (field: string, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "category") next.subcategory = "";
      return next;
    });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const calculateProfit = () => {
    const selling = Number(form.sellingPrice) || 0;
    const cost = Number(form.costPrice) || 0;
    return selling - cost;
  };

  const calculateMargin = () => {
    const selling = Number(form.sellingPrice) || 0;
    const cost = Number(form.costPrice) || 0;
    if (!selling) return 0;
    return ((selling - cost) / selling) * 100;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.productName.trim())
      newErrors.productName = "Product name is required";
    if (!form.productCode.trim())
      newErrors.productCode = "Product code is required";
    if (!form.category) newErrors.category = "Please select a category";
    if (!form.material) newErrors.material = "Please select material";
    if (!form.sellingPrice)
      newErrors.sellingPrice = "Selling price is required";
    if (!form.costPrice) newErrors.costPrice = "Cost price is required";
    if (!form.stock) newErrors.stock = "Opening stock is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setSaveError("Please select an image file (JPG, PNG, WebP, etc.)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setSaveError("Image must be less than 5 MB");
      return;
    }
    setSaveError("");
    setImageFile(file);
    setForm((prev) => ({ ...prev, imageUrl: "" }));
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleImageUrl = (value: string) => {
    updateField("imageUrl", value);
    setImageFile(null);
    setImagePreview(value);
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return form.imageUrl || null;
    setUploadingImage(true);
    try {
      const timestamp = Date.now();
      const safeName = imageFile.name.replace(/[^a-zA-Z0-9.]/g, "_");
      const storageRef = ref(
        storage,
        `furniture/products/${timestamp}_${safeName}`
      );
      await uploadBytes(storageRef, imageFile);
      return await getDownloadURL(storageRef);
    } catch (err) {
      console.error("Image upload failed:", err);
      setSaveError("Failed to upload image. Please try again.");
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const resetForm = () => {
    setForm({
      productName: "",
      productCode: "",
      category: "",
      subcategory: "",
      material: "",
      finish: "",
      color: "",
      dimensions: "",
      description: "",
      sellingPrice: "",
      costPrice: "",
      stock: "",
      unit: "Nos",
      reorderLevel: "",
      leadTime: "",
      warranty: "",
      supplier: "",
      warehouseLocation: "Main Warehouse",
      imageUrl: "",
      status: "In Stock",
    });
    setImageFile(null);
    setImagePreview("");
    setErrors({});
    setSaveError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // const handleSave = async () => {
  //   setSaveError("");
  //   if (!validateForm()) {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     return;
  //   }
  //   setSaving(true);
  //   try {
  //     const finalImageUrl = await uploadImage();
  //     if (imageFile && !finalImageUrl) {
  //       setSaving(false);
  //       return;
  //     }
  //     await createProduct({
  //       name: form.productName.trim(),
  //       sku: form.productCode.trim().toUpperCase(),
  //       code: form.productCode.trim().toUpperCase(),
  //       category: form.category,
  //       subcategory: form.subcategory || "",
  //       material: form.material,
  //       finish: form.finish || "",
  //       color: form.color || "",
  //       dimensions: form.dimensions || "",
  //       description: form.description || "",
  //       sellingPrice: Number(form.sellingPrice),
  //       price: Number(form.sellingPrice),
  //       costPrice: Number(form.costPrice),
  //       stock: Number(form.stock),
  //       unit: form.unit,
  //       reorderLevel: Number(form.reorderLevel || 0),
  //       minStock: Number(form.reorderLevel || 0),
  //       leadTime: form.leadTime || "",
  //       warranty: form.warranty || "",
  //       supplier: form.supplier || "",
  //       location: form.warehouseLocation || "Main Warehouse",
  //       warehouseLocation: form.warehouseLocation || "Main Warehouse",
  //       imageUrl: finalImageUrl || "",
  //       image: finalImageUrl || "",
  //       status: form.status,
  //       active: form.status !== "Inactive",
  //     });
  //     setCreatedProductName(form.productName.trim());
  //     setSuccessOpen(true);
  //   } catch (err) {
  //     console.error("Create product failed:", err);
  //     setSaveError("Failed to create product. Please try again.");
  //   } finally {
  //     setSaving(false);
  //   }
  // };


const handleSave = async () => {
  setSaveError("");

  if (!validateForm()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  setSaving(true);

  try {
    const finalImageUrl = await uploadImage();

    if (imageFile && !finalImageUrl) {
      return;
    }

    const productData = {
      name: form.productName.trim(),
      sku: form.productCode.trim().toUpperCase(),
      code: form.productCode.trim().toUpperCase(),
      category: form.category,
      subcategory: form.subcategory || "",
      material: form.material,
      finish: form.finish || "",
      color: form.color || "",
      dimensions: form.dimensions || "",
      description: form.description || "",
      sellingPrice: Number(form.sellingPrice),
      price: Number(form.sellingPrice),
      costPrice: Number(form.costPrice),
      stock: Number(form.stock),
      unit: form.unit,
      reorderLevel: Number(form.reorderLevel || 0),
      minStock: Number(form.reorderLevel || 0),
      leadTime: form.leadTime || "",
      warranty: form.warranty || "",
      supplier: form.supplier || "",
      location: form.warehouseLocation || "Main Warehouse",
      warehouseLocation:
        form.warehouseLocation || "Main Warehouse",
      imageUrl: finalImageUrl || "",
      image: finalImageUrl || "",
      status: form.status as
        | "In Stock"
        | "Low Stock"
        | "Out of Stock"
        | "Inactive",
    };

    await createProduct(productData);

    setCreatedProductName(form.productName.trim());
    setSuccessOpen(true);
  } catch (err) {
    console.error("Create product failed:", err);
    setSaveError("Failed to create product. Please try again.");
  } finally {
    setSaving(false);
  }
};


  const handleCancel = () => router.push("/furniture/products");

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    setForm((prev) => ({ ...prev, imageUrl: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const fieldClass = (hasError?: boolean) =>
    `h-11 w-full rounded-lg border px-3.5 text-sm outline-none transition focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10 ${
      hasError ? "border-red-400" : "border-[#d9d7cf]"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#252525]">
      <div className="border-b border-[#e4e2da] bg-white">
        <div className="mx-auto max-w-[1500px] px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-2 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                <button
                  type="button"
                  onClick={() => router.push("/furniture/products")}
                  className="hover:text-[#176b5b]"
                >
                  Products
                </button>
                <span>/</span>
                <span className="text-gray-700">New Product</span>
              </div>
              <h1 className="text-xl font-bold text-[#222] sm:text-2xl">
                Add New Product
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Create a new furniture product in your inventory.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="min-h-[44px] flex-1 rounded-lg border border-[#d9d7cf] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:flex-none sm:px-5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving || uploadingImage}
                className="min-h-[44px] flex-1 rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60 sm:flex-none sm:px-5"
              >
                {uploadingImage
                  ? "Uploading…"
                  : saving
                    ? "Saving…"
                    : "Save Product"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
        {saveError && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {saveError}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-[1fr_320px]">
          <div className="space-y-4 sm:space-y-6">
            {/* Basic */}
            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">
                  Basic Information
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  Product name, code, category and description.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-2">
                <div className="md:col-span-2 md:col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.productName}
                    onChange={(e) => updateField("productName", e.target.value)}
                    placeholder="e.g. Modern L-Shape Sofa"
                    className={fieldClass(!!errors.productName)}
                  />
                  {errors.productName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.productName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Product Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.productCode}
                    onChange={(e) =>
                      updateField("productCode", e.target.value.toUpperCase())
                    }
                    placeholder="e.g. SOFA-001"
                    className={`${fieldClass(!!errors.productCode)} uppercase`}
                  />
                  {errors.productCode && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.productCode}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    disabled={optionsLoading}
                    className={`${fieldClass(!!errors.category)} bg-white disabled:opacity-60`}
                  >
                    <option value="">
                      {optionsLoading ? "Loading…" : "Select category"}
                    </option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-xs text-red-500">{errors.category}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Subcategory
                  </label>
                  <select
                    value={form.subcategory}
                    onChange={(e) => updateField("subcategory", e.target.value)}
                    disabled={!form.category || optionsLoading}
                    className={`${fieldClass()} bg-white disabled:opacity-60`}
                  >
                    <option value="">
                      {!form.category
                        ? "Select category first"
                        : filteredSubCategories.length === 0
                          ? "No sub categories"
                          : "Select subcategory"}
                    </option>
                    {filteredSubCategories.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Material <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.material}
                    onChange={(e) => updateField("material", e.target.value)}
                    disabled={optionsLoading}
                    className={`${fieldClass(!!errors.material)} bg-white disabled:opacity-60`}
                  >
                    <option value="">
                      {optionsLoading ? "Loading…" : "Select material"}
                    </option>
                    {materials.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                  {errors.material && (
                    <p className="mt-1 text-xs text-red-500">{errors.material}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Finish
                  </label>
                  <select
                    value={form.finish}
                    onChange={(e) => updateField("finish", e.target.value)}
                    disabled={optionsLoading}
                    className={`${fieldClass()} bg-white disabled:opacity-60`}
                  >
                    <option value="">
                      {optionsLoading ? "Loading…" : "Select finish"}
                    </option>
                    {finishes.map((f) => (
                      <option key={f.id} value={f.name}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Color
                  </label>
                  <input
                    value={form.color}
                    onChange={(e) => updateField("color", e.target.value)}
                    placeholder="e.g. Light Grey"
                    className={fieldClass()}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Dimensions
                  </label>
                  <input
                    value={form.dimensions}
                    onChange={(e) => updateField("dimensions", e.target.value)}
                    placeholder="e.g. 280 × 180 × 85 cm"
                    className={fieldClass()}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    placeholder="Enter product description..."
                    className="w-full resize-none rounded-lg border border-[#d9d7cf] px-3.5 py-2.5 text-sm outline-none focus:border-[#176b5b] focus:ring-2 focus:ring-[#176b5b]/10"
                  />
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">Pricing</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Selling Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={form.sellingPrice}
                      onChange={(e) =>
                        updateField("sellingPrice", e.target.value)
                      }
                      className={`${fieldClass(!!errors.sellingPrice)} pl-8`}
                    />
                  </div>
                  {errors.sellingPrice && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.sellingPrice}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Cost Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={form.costPrice}
                      onChange={(e) => updateField("costPrice", e.target.value)}
                      className={`${fieldClass(!!errors.costPrice)} pl-8`}
                    />
                  </div>
                  {errors.costPrice && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.costPrice}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-[#e4e2da] bg-[#fafaf8] p-4 sm:gap-4 sm:p-5">
                <div className="rounded-lg border border-[#e4e2da] bg-white p-3 sm:p-4">
                  <p className="text-xs text-gray-500">Est. Profit</p>
                  <p className="mt-1 text-lg font-bold text-[#176b5b] sm:text-xl">
                    ₹{calculateProfit().toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-lg border border-[#e4e2da] bg-white p-3 sm:p-4">
                  <p className="text-xs text-gray-500">Est. Margin</p>
                  <p className="mt-1 text-lg font-bold text-[#176b5b] sm:text-xl">
                    {calculateMargin().toFixed(1)}%
                  </p>
                </div>
              </div>
            </section>

            {/* Inventory */}
            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">Inventory</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5 md:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Opening Stock <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={form.stock}
                    onChange={(e) => updateField("stock", e.target.value)}
                    className={fieldClass(!!errors.stock)}
                  />
                  {errors.stock && (
                    <p className="mt-1 text-xs text-red-500">{errors.stock}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Unit
                  </label>
                  <select
                    value={form.unit}
                    onChange={(e) => updateField("unit", e.target.value)}
                    className={`${fieldClass()} bg-white`}
                  >
                    {units.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Reorder Level
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={form.reorderLevel}
                    onChange={(e) =>
                      updateField("reorderLevel", e.target.value)
                    }
                    className={fieldClass()}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Warehouse
                  </label>
                  <input
                    value={form.warehouseLocation}
                    onChange={(e) =>
                      updateField("warehouseLocation", e.target.value)
                    }
                    className={fieldClass()}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) => updateField("status", e.target.value)}
                    className={`${fieldClass()} bg-white`}
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Lead Time
                  </label>
                  <input
                    value={form.leadTime}
                    onChange={(e) => updateField("leadTime", e.target.value)}
                    placeholder="e.g. 7–10 Days"
                    className={fieldClass()}
                  />
                </div>
              </div>
            </section>

            {/* Supplier */}
            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">
                  Supplier & Warranty
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Supplier
                  </label>
                  <select
                    value={form.supplier}
                    onChange={(e) => updateField("supplier", e.target.value)}
                    className={`${fieldClass()} bg-white`}
                  >
                    <option value="">Select supplier</option>
                    {suppliers.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Warranty
                  </label>
                  <input
                    value={form.warranty}
                    onChange={(e) => updateField("warranty", e.target.value)}
                    placeholder="e.g. 2 Years"
                    className={fieldClass()}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">
                  Product Image
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  Upload or paste an image URL.
                </p>
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfcdbf] bg-[#fafaf8] sm:aspect-square">
                  {imagePreview ? (
                    <div className="relative h-full w-full">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        onError={() => setImagePreview("")}
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="px-4 text-center">
                      <p className="text-sm font-medium text-gray-700">
                        No image
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Upload or paste URL
                      </p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="product-image-upload"
                />
                <label
                  htmlFor="product-image-upload"
                  className="flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-lg border border-[#176b5b] bg-[#eef7f4] px-4 text-sm font-semibold text-[#176b5b]"
                >
                  {imageFile ? "Change Image" : "Upload Image"}
                </label>
                <p className="mt-1.5 text-center text-[11px] text-gray-400">
                  JPG, PNG, WebP · Max 5 MB
                </p>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#e4e2da]" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-400">OR</span>
                  </div>
                </div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  value={form.imageUrl}
                  onChange={(e) => handleImageUrl(e.target.value)}
                  placeholder="https://..."
                  className={fieldClass()}
                />
              </div>
            </section>

            <section className="rounded-xl border border-[#e4e2da] bg-white">
              <div className="border-b border-[#e4e2da] px-4 py-3 sm:px-5 sm:py-4">
                <h2 className="text-base font-bold text-[#222]">Preview</h2>
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#eaf5f1] px-2.5 py-1 text-xs font-semibold text-[#176b5b]">
                    {form.status}
                  </span>
                  <span className="truncate text-xs text-gray-400">
                    {form.productCode || "CODE"}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#222] sm:text-lg">
                  {form.productName || "Product Name"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {form.category || "Category"}
                  {form.subcategory ? ` · ${form.subcategory}` : ""}
                </p>
                <div className="my-3 border-t border-[#e4e2da] sm:my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">Material</span>
                    <span className="text-right font-medium">
                      {form.material || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">Stock</span>
                    <span className="font-medium">
                      {form.stock || "0"} {form.unit}
                    </span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-[#f7f7f4] p-3 sm:p-4">
                  <p className="text-xs text-gray-500">Selling Price</p>
                  <p className="mt-1 text-xl font-bold text-[#176b5b] sm:text-2xl">
                    ₹{Number(form.sellingPrice || 0).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-4 flex flex-col-reverse gap-2 rounded-xl border border-[#e4e2da] bg-white p-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-end sm:gap-3 sm:p-4">
          <button
            type="button"
            onClick={handleCancel}
            className="min-h-[44px] rounded-lg border border-[#d9d7cf] px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || uploadingImage}
            className="min-h-[44px] rounded-lg bg-[#176b5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#125548] disabled:opacity-60"
          >
            {uploadingImage
              ? "Uploading image..."
              : saving
                ? "Saving..."
                : "Create Product"}
          </button>
        </div>
      </main>

      {/* {successOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSuccessOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
            <div className="bg-[#eef7f4] px-5 pb-5 pt-7 text-center sm:px-6 sm:pb-6 sm:pt-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#176b5b] text-2xl text-white sm:h-16 sm:w-16 sm:text-3xl">
                ✓
              </div>
              <h2 className="mt-3 text-lg font-bold text-[#222] sm:mt-4 sm:text-xl">
                Product created
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold text-[#176b5b]">
                  {createdProductName}
                </span>{" "}
                is in inventory and the website catalog.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-end sm:p-5">
              <button
                type="button"
                onClick={() => {
                  setSuccessOpen(false);
                  resetForm();
                }}
                className="min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700"
              >
                Add another
              </button>
              <button
                type="button"
                onClick={() => router.push("/furniture/products")}
                className="min-h-[44px] rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white"
              >
                View products
              </button>
            </div>
          </div>
        </div>
      )} */}

            {successOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-created-title"
        >
          {/* Background overlay */}
          <button
            type="button"
            aria-label="Close success message"
            className="absolute inset-0 bg-black/40"
            onClick={() => setSuccessOpen(false)}
          />

          {/* Centered success popup */}
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-[#eef7f4] px-5 pb-5 pt-7 text-center sm:px-6 sm:pb-6 sm:pt-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#176b5b] text-2xl text-white sm:h-16 sm:w-16 sm:text-3xl">
                ✓
              </div>

              <h2
                id="product-created-title"
                className="mt-3 text-lg font-bold text-[#222] sm:mt-4 sm:text-xl"
              >
                Product created
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold text-[#176b5b]">
                  {createdProductName}
                </span>{" "}
                is in inventory and the website catalog.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-end sm:p-5">
              <button
                type="button"
                onClick={() => {
                  setSuccessOpen(false);
                  resetForm();
                }}
                className="min-h-[44px] rounded-lg border border-[#d9d7cf] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Add another
              </button>

              <button
                type="button"
                onClick={() => router.push("/furniture/products")}
                className="min-h-[44px] rounded-lg bg-[#176b5b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#125548]"
              >
                View products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
