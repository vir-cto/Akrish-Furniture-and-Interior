export type ProductStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock"
  | "Coming Soon";

export type CatalogItemType =
  | "Furniture"
  | "Interior"
  | "Custom";

export interface PublicCatalogProduct {
  id: string;

  productId?: string;

  code: string;

  name: string;

  category: string;

  subcategory?: string;

  type: CatalogItemType;

  description?: string;

  shortDescription?: string;

  price: number;

  salePrice?: number;

  currency?: string;

  image?: string;

  images?: string[];

  material?: string;

  finish?: string;

  color?: string;

  dimensions?: string;

  width?: number;

  height?: number;

  depth?: number;

  unit?: string;

  stock?: number;

  status: ProductStatus;

  featured?: boolean;

  active: boolean;

  availableForSale?: boolean;

  customizable?: boolean;

  warranty?: string;

  leadTime?: string;

  supplier?: string;

  tags?: string[];

  createdAt?: unknown;

  updatedAt?: unknown;
}

export interface PublicCatalogCategory {
  id: string;

  name: string;

  slug: string;

  description?: string;

  image?: string;

  type?: CatalogItemType;

  productCount?: number;

  active: boolean;

  displayOrder?: number;
}

export interface PublicCatalogFilter {
  search?: string;

  category?: string;

  subcategory?: string;

  type?: CatalogItemType;

  status?: ProductStatus;

  featured?: boolean;

  minPrice?: number;

  maxPrice?: number;

  activeOnly?: boolean;
}

export interface PublicCatalogResponse {
  products: PublicCatalogProduct[];

  categories: PublicCatalogCategory[];

  totalProducts: number;

  totalCategories: number;
}

export interface PublicProductCard {
  id: string;

  code: string;

  name: string;

  category: string;

  price: number;

  salePrice?: number;

  image?: string;

  status: ProductStatus;

  featured?: boolean;

  customizable?: boolean;
}

export interface PublicProductDetails
  extends PublicCatalogProduct {
  relatedProducts?: PublicProductCard[];
}

export interface CatalogSortOption {
  value:
    | "name-asc"
    | "name-desc"
    | "price-low"
    | "price-high"
    | "newest"
    | "featured";

  label: string;
}

export const CATALOG_SORT_OPTIONS: CatalogSortOption[] = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "name-asc",
    label: "Name: A to Z",
  },
  {
    value: "name-desc",
    label: "Name: Z to A",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
];

/**
 * Calculate the final selling price.
 */
export function getProductPrice(
  product: PublicCatalogProduct
): number {
  if (
    product.salePrice !== undefined &&
    product.salePrice >= 0
  ) {
    return product.salePrice;
  }

  return product.price;
}

/**
 * Check whether a product has a discount.
 */
export function hasDiscount(
  product: PublicCatalogProduct
): boolean {
  return (
    product.salePrice !== undefined &&
    product.salePrice < product.price
  );
}

/**
 * Calculate discount percentage.
 */
export function getDiscountPercentage(
  product: PublicCatalogProduct
): number {
  if (!hasDiscount(product)) {
    return 0;
  }

  const discount =
    ((product.price - (product.salePrice || 0)) /
      product.price) *
    100;

  return Math.round(discount);
}

/**
 * Format price in Indian Rupees.
 */
export function formatCatalogPrice(
  amount: number
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Check whether a product is available.
 */
export function isProductAvailable(
  product: PublicCatalogProduct
): boolean {
  if (!product.active) {
    return false;
  }

  if (product.availableForSale === false) {
    return false;
  }

  if (product.status === "Out of Stock") {
    return false;
  }

  return true;
}

/**
 * Convert a full catalog product into a small
 * product-card object for listing pages.
 */
export function toPublicProductCard(
  product: PublicCatalogProduct
): PublicProductCard {
  return {
    id: product.id,
    code: product.code,
    name: product.name,
    category: product.category,
    price: product.price,
    salePrice: product.salePrice,
    image: product.image,
    status: product.status,
    featured: product.featured,
    customizable: product.customizable,
  };
}