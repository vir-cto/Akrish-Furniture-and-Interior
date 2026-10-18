"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  ShoppingBag,
} from "lucide-react";

export interface ProductCardProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  material?: string;
  image?: string;
  badge?: string;
  stock?: number;
}

interface ProductCardProps {
  product: ProductCardProduct;
  onAddToCart?: (product: ProductCardProduct) => void;
  onWishlistChange?: (
    product: ProductCardProduct,
    wishlisted: boolean
  ) => void;
  initialWishlisted?: boolean;
  showDescription?: boolean;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductCard({
  product,
  onAddToCart,
  onWishlistChange,
  initialWishlisted = false,
  showDescription = true,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] =
    useState(initialWishlisted);

  const [added, setAdded] = useState(false);

  const toggleWishlist = () => {
    const nextValue = !wishlisted;

    setWishlisted(nextValue);
    onWishlistChange?.(product, nextValue);
  };

  const handleAddToCart = () => {
    if (product.stock === 0) return;

    if (onAddToCart) {
      onAddToCart(product);
    } else {
      /*
       * Connect this section to the shared cart store/API
       * when backend cart functionality is available.
       */
      console.log("Added to cart:", product.id);
    }

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Link
          href={`/products/${product.id}`}
          className="flex h-full w-full items-center justify-center"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center justify-center px-5 text-center">
              <ShoppingBag
                size={50}
                strokeWidth={1.1}
                className="text-slate-300 transition group-hover:text-slate-400"
              />

              <p className="mt-3 text-xs font-medium text-slate-400">
                {product.name}
              </p>
            </div>
          )}
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={toggleWishlist}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50"
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
        >
          <Heart
            size={16}
            className={
              wishlisted
                ? "fill-current text-red-500"
                : "text-slate-600"
            }
          />
        </button>

        {/* Out of stock */}
        {product.stock === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/45">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-900">
              Out of stock
            </span>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h2 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-900 transition hover:text-slate-600">
            {product.name}
          </h2>
        </Link>

        {showDescription && product.description && (
          <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
            {product.description}
          </p>
        )}

        {product.material && (
          <p className="mt-2 text-[11px] text-slate-400">
            Material:{" "}
            <span className="font-medium text-slate-500">
              {product.material}
            </span>
          </p>
        )}

        {/* Price and stock */}
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-slate-900">
              {formatCurrency(product.price)}
            </p>

            {typeof product.stock === "number" && (
              <p
                className={`mt-0.5 text-[10px] font-medium ${
                  product.stock === 0
                    ? "text-red-500"
                    : product.stock <= 5
                      ? "text-amber-600"
                      : "text-slate-400"
                }`}
              >
                {product.stock === 0
                  ? "Out of stock"
                  : `${product.stock} in stock`}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition ${
              product.stock === 0
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : added
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {added ? (
              <>
                <Check size={14} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                Add
              </>
            )}
          </button>
        </div>

        {/* Details link */}
        <Link
          href={`/products/${product.id}`}
          className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500 transition hover:text-slate-900"
        >
          View details
          <ArrowRight
            size={14}
            className="transition group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}