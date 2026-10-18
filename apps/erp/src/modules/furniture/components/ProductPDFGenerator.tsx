"use client";

import { useState } from "react";
import { Download, FileText, Loader2, Printer } from "lucide-react";

export interface ProductPDFData {
  id?: string;
  name: string;
  sku?: string;
  category?: string;
  description?: string;
  price?: number;
  mrp?: number;
  stock?: number;
  unit?: string;
  material?: string;
  dimensions?: string;
  color?: string;
  brand?: string;
  status?: string;
  imageUrl?: string;
}

interface ProductPDFGeneratorProps {
  product?: ProductPDFData;
  products?: ProductPDFData[];
  buttonText?: string;
  className?: string;
  variant?: "button" | "icon";
}

function formatCurrency(value?: number) {
  if (value === undefined || value === null) return "—";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createProductHTML(product: ProductPDFData) {
  const rows = [
    ["Product Name", product.name],
    ["SKU", product.sku || "—"],
    ["Category", product.category || "—"],
    ["Brand", product.brand || "—"],
    ["Material", product.material || "—"],
    ["Dimensions", product.dimensions || "—"],
    ["Color", product.color || "—"],
    ["Selling Price", formatCurrency(product.price)],
    ["MRP", formatCurrency(product.mrp)],
    [
      "Stock",
      product.stock !== undefined
        ? `${product.stock}${product.unit ? ` ${product.unit}` : ""}`
        : "—",
    ],
    ["Status", product.status || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td class="label">${escapeHtml(label)}</td>
          <td>${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="product-card">
      <div class="product-header">
        <div>
          <div class="company-name">VIP INTERIOR</div>
          <div class="document-title">Product Details</div>
        </div>

        <div class="document-meta">
          <strong>${escapeHtml(product.sku || "PRODUCT")}</strong>
          <span>${new Date().toLocaleDateString("en-IN")}</span>
        </div>
      </div>

      ${
        product.imageUrl
          ? `
            <div class="image-container">
              <img
                src="${escapeHtml(product.imageUrl)}"
                alt="${escapeHtml(product.name)}"
              />
            </div>
          `
          : ""
      }

      <h1>${escapeHtml(product.name)}</h1>

      ${
        product.description
          ? `<p class="description">${escapeHtml(product.description)}</p>`
          : ""
      }

      <table>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <div class="footer">
        <span>VIP Interior ERP</span>
        <span>Generated on ${new Date().toLocaleDateString("en-IN")}</span>
      </div>
    </div>
  `;
}

function createProductsHTML(products: ProductPDFData[]) {
  return products
    .map((product) => createProductHTML(product))
    .join("");
}

function createPrintDocument(
  content: string,
  title: string
) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(title)}</title>

        <style>
          * {
            box-sizing: border-box;
          }

          @page {
            size: A4;
            margin: 16mm;
          }

          body {
            margin: 0;
            background: #ffffff;
            color: #1e293b;
            font-family:
              Arial,
              Helvetica,
              sans-serif;
          }

          .product-card {
            width: 100%;
            page-break-after: always;
          }

          .product-card:last-child {
            page-break-after: auto;
          }

          .product-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-bottom: 16px;
            border-bottom: 2px solid #0f172a;
          }

          .company-name {
            font-size: 20px;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: #0f172a;
          }

          .document-title {
            margin-top: 4px;
            font-size: 12px;
            color: #64748b;
          }

          .document-meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
            font-size: 10px;
            color: #64748b;
          }

          h1 {
            margin: 20px 0 8px;
            font-size: 24px;
            line-height: 1.2;
            color: #0f172a;
          }

          .description {
            margin: 0 0 18px;
            color: #64748b;
            font-size: 12px;
            line-height: 1.6;
          }

          .image-container {
            width: 100%;
            height: 190px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #f8fafc;
          }

          .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 18px;
            font-size: 12px;
          }

          td {
            padding: 10px 12px;
            border: 1px solid #e2e8f0;
          }

          td.label {
            width: 34%;
            font-weight: 700;
            color: #475569;
            background: #f8fafc;
          }

          .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 28px;
            padding-top: 10px;
            border-top: 1px solid #e2e8f0;
            color: #94a3b8;
            font-size: 9px;
          }

          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>

      <body>
        ${content}
      </body>
    </html>
  `;
}

export default function ProductPDFGenerator({
  product,
  products,
  buttonText = "Generate PDF",
  className = "",
  variant = "button",
}: ProductPDFGeneratorProps) {
  const [loading, setLoading] = useState(false);

  const items = products?.length
    ? products
    : product
      ? [product]
      : [];

  const handleGeneratePDF = () => {
    if (items.length === 0) {
      return;
    }

    setLoading(true);

    try {
      const html = createPrintDocument(
        createProductsHTML(items),
        items.length === 1
          ? `${items[0].name} - Product Details`
          : "VIP Interior - Product Catalogue"
      );

      const printWindow = window.open(
        "",
        "_blank",
        "width=900,height=700"
      );

      if (!printWindow) {
        window.alert(
          "Unable to open the print window. Please allow pop-ups and try again."
        );
        return;
      }

      printWindow.document.open();
      printWindow.document.write(html);
      printWindow.document.close();

      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
      };
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleGeneratePDF}
        disabled={loading || items.length === 0}
        title="Generate product PDF"
        className={`flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      >
        {loading ? (
          <Loader2 size={17} className="animate-spin" />
        ) : (
          <Download size={17} />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleGeneratePDF}
      disabled={loading || items.length === 0}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {loading ? (
        <Loader2 size={17} className="animate-spin" />
      ) : (
        <FileText size={17} />
      )}

      <span>{loading ? "Preparing..." : buttonText}</span>
    </button>
  );
}

export function ProductPrintButton({
  product,
  className = "",
}: {
  product: ProductPDFData;
  className?: string;
}) {
  return (
    <ProductPDFGenerator
      product={product}
      buttonText="Print Product"
      className={className}
    />
  );
}

export function ProductCatalogueButton({
  products,
  className = "",
}: {
  products: ProductPDFData[];
  className?: string;
}) {
  return (
    <ProductPDFGenerator
      products={products}
      buttonText="Export Catalogue"
      className={className}
    />
  );
}

export function ProductPDFIcon({
  product,
  className = "",
}: {
  product: ProductPDFData;
  className?: string;
}) {
  return (
    <ProductPDFGenerator
      product={product}
      variant="icon"
      className={className}
    />
  );
}