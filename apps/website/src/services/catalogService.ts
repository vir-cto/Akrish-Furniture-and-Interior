import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

export interface CatalogProduct {
  id: string;
  name: string;
  code: string;
  category: string;
  subcategory?: string;
  description?: string;
  price: number;
  salePrice?: number;
  costPrice?: number;
  image?: string;
  images?: string[];
  material?: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  unit?: string;
  stock?: number;
  status?: string;
  featured?: boolean;
  active?: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
}

const CATALOG_COLLECTION = "catalog";

/**
 * Get all products from the catalog.
 */
export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  const catalogRef = collection(db, CATALOG_COLLECTION);

  const snapshot = await getDocs(catalogRef);

  return snapshot.docs.map((productDoc) => {
    const data = productDoc.data();

    return {
      id: productDoc.id,
      name: data.name || "",
      code: data.code || "",
      category: data.category || "",
      subcategory: data.subcategory || "",
      description: data.description || "",
      price: Number(data.price || 0),
      salePrice:
        data.salePrice !== undefined
          ? Number(data.salePrice)
          : undefined,
      costPrice:
        data.costPrice !== undefined
          ? Number(data.costPrice)
          : undefined,
      image: data.image || "",
      images: Array.isArray(data.images) ? data.images : [],
      material: data.material || "",
      finish: data.finish || "",
      color: data.color || "",
      dimensions: data.dimensions || "",
      unit: data.unit || "Nos",
      stock:
        data.stock !== undefined
          ? Number(data.stock)
          : 0,
      status: data.status || "In Stock",
      featured: Boolean(data.featured),
      active: data.active !== false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });
}

/**
 * Get only active products.
 */
export async function getActiveCatalogProducts(): Promise<
  CatalogProduct[]
> {
  const catalogRef = collection(db, CATALOG_COLLECTION);

  const productQuery = query(
    catalogRef,
    where("active", "==", true)
  );

  const snapshot = await getDocs(productQuery);

  return snapshot.docs.map((productDoc) => {
    const data = productDoc.data();

    return {
      id: productDoc.id,
      name: data.name || "",
      code: data.code || "",
      category: data.category || "",
      subcategory: data.subcategory || "",
      description: data.description || "",
      price: Number(data.price || 0),
      salePrice:
        data.salePrice !== undefined
          ? Number(data.salePrice)
          : undefined,
      image: data.image || "",
      images: Array.isArray(data.images) ? data.images : [],
      material: data.material || "",
      finish: data.finish || "",
      color: data.color || "",
      dimensions: data.dimensions || "",
      unit: data.unit || "Nos",
      stock:
        data.stock !== undefined
          ? Number(data.stock)
          : 0,
      status: data.status || "In Stock",
      featured: Boolean(data.featured),
      active: data.active !== false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });
}

/**
 * Get a single product by product ID.
 */
export async function getCatalogProduct(
  productId: string
): Promise<CatalogProduct | null> {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const productRef = doc(
    db,
    CATALOG_COLLECTION,
    productId
  );

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    id: snapshot.id,
    name: data.name || "",
    code: data.code || "",
    category: data.category || "",
    subcategory: data.subcategory || "",
    description: data.description || "",
    price: Number(data.price || 0),
    salePrice:
      data.salePrice !== undefined
        ? Number(data.salePrice)
        : undefined,
    costPrice:
      data.costPrice !== undefined
        ? Number(data.costPrice)
        : undefined,
    image: data.image || "",
    images: Array.isArray(data.images) ? data.images : [],
    material: data.material || "",
    finish: data.finish || "",
    color: data.color || "",
    dimensions: data.dimensions || "",
    unit: data.unit || "Nos",
    stock:
      data.stock !== undefined
        ? Number(data.stock)
        : 0,
    status: data.status || "In Stock",
    featured: Boolean(data.featured),
    active: data.active !== false,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

/**
 * Get a product using its product code.
 */
export async function getCatalogProductByCode(
  code: string
): Promise<CatalogProduct | null> {
  if (!code) {
    throw new Error("Product code is required");
  }

  const catalogRef = collection(db, CATALOG_COLLECTION);

  const productQuery = query(
    catalogRef,
    where("code", "==", code),
    limit(1)
  );

  const snapshot = await getDocs(productQuery);

  if (snapshot.empty) {
    return null;
  }

  const productDoc = snapshot.docs[0];
  const data = productDoc.data();

  return {
    id: productDoc.id,
    name: data.name || "",
    code: data.code || "",
    category: data.category || "",
    subcategory: data.subcategory || "",
    description: data.description || "",
    price: Number(data.price || 0),
    salePrice:
      data.salePrice !== undefined
        ? Number(data.salePrice)
        : undefined,
    costPrice:
      data.costPrice !== undefined
        ? Number(data.costPrice)
        : undefined,
    image: data.image || "",
    images: Array.isArray(data.images) ? data.images : [],
    material: data.material || "",
    finish: data.finish || "",
    color: data.color || "",
    dimensions: data.dimensions || "",
    unit: data.unit || "Nos",
    stock:
      data.stock !== undefined
        ? Number(data.stock)
        : 0,
    status: data.status || "In Stock",
    featured: Boolean(data.featured),
    active: data.active !== false,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

/**
 * Get products by category.
 */
export async function getProductsByCategory(
  category: string
): Promise<CatalogProduct[]> {
  if (!category) {
    return getCatalogProducts();
  }

  const catalogRef = collection(db, CATALOG_COLLECTION);

  const productQuery = query(
    catalogRef,
    where("category", "==", category),
    where("active", "==", true)
  );

  const snapshot = await getDocs(productQuery);

  return snapshot.docs.map((productDoc) => {
    const data = productDoc.data();

    return {
      id: productDoc.id,
      name: data.name || "",
      code: data.code || "",
      category: data.category || "",
      subcategory: data.subcategory || "",
      description: data.description || "",
      price: Number(data.price || 0),
      salePrice:
        data.salePrice !== undefined
          ? Number(data.salePrice)
          : undefined,
      image: data.image || "",
      images: Array.isArray(data.images) ? data.images : [],
      material: data.material || "",
      finish: data.finish || "",
      color: data.color || "",
      dimensions: data.dimensions || "",
      unit: data.unit || "Nos",
      stock:
        data.stock !== undefined
          ? Number(data.stock)
          : 0,
      status: data.status || "In Stock",
      featured: Boolean(data.featured),
      active: data.active !== false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });
}

/**
 * Get featured products.
 */
export async function getFeaturedProducts(): Promise<
  CatalogProduct[]
> {
  const catalogRef = collection(db, CATALOG_COLLECTION);

  const productQuery = query(
    catalogRef,
    where("featured", "==", true),
    where("active", "==", true),
    limit(12)
  );

  const snapshot = await getDocs(productQuery);

  return snapshot.docs.map((productDoc) => {
    const data = productDoc.data();

    return {
      id: productDoc.id,
      name: data.name || "",
      code: data.code || "",
      category: data.category || "",
      subcategory: data.subcategory || "",
      description: data.description || "",
      price: Number(data.price || 0),
      salePrice:
        data.salePrice !== undefined
          ? Number(data.salePrice)
          : undefined,
      image: data.image || "",
      images: Array.isArray(data.images) ? data.images : [],
      material: data.material || "",
      finish: data.finish || "",
      color: data.color || "",
      dimensions: data.dimensions || "",
      unit: data.unit || "Nos",
      stock:
        data.stock !== undefined
          ? Number(data.stock)
          : 0,
      status: data.status || "In Stock",
      featured: Boolean(data.featured),
      active: data.active !== false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });
}

/**
 * Search products by name, code or category.
 *
 * Firestore does not provide a simple contains search,
 * so this function retrieves active products and filters
 * them on the client.
 */
export async function searchCatalogProducts(
  searchTerm: string
): Promise<CatalogProduct[]> {
  const products = await getActiveCatalogProducts();

  const search = searchTerm.trim().toLowerCase();

  if (!search) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search) ||
      product.code.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.subcategory?.toLowerCase().includes(search) ||
      product.material?.toLowerCase().includes(search)
    );
  });
}

/**
 * Create a new catalog product.
 */
export async function createCatalogProduct(
  product: Omit<CatalogProduct, "id">
): Promise<string> {
  const catalogRef = collection(db, CATALOG_COLLECTION);

  const productData = {
    ...product,
    price: Number(product.price || 0),
    salePrice:
      product.salePrice !== undefined
        ? Number(product.salePrice)
        : null,
    costPrice:
      product.costPrice !== undefined
        ? Number(product.costPrice)
        : null,
    stock: Number(product.stock || 0),
    featured: Boolean(product.featured),
    active: product.active !== false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };

  const productRef = await addDoc(
    catalogRef,
    productData
  );

  return productRef.id;
}

/**
 * Update an existing catalog product.
 */
export async function updateCatalogProduct(
  productId: string,
  updates: Partial<CatalogProduct>
): Promise<void> {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const productRef = doc(
    db,
    CATALOG_COLLECTION,
    productId
  );

  const updateData = {
    ...updates,
    updatedAt: Timestamp.now(),
  };

  delete (updateData as Partial<CatalogProduct>).id;

  await updateDoc(productRef, updateData);
}

/**
 * Delete a catalog product.
 */
export async function deleteCatalogProduct(
  productId: string
): Promise<void> {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const productRef = doc(
    db,
    CATALOG_COLLECTION,
    productId
  );

  await deleteDoc(productRef);
}

/**
 * Activate a product.
 */
export async function activateCatalogProduct(
  productId: string
): Promise<void> {
  await updateCatalogProduct(productId, {
    active: true,
  });
}

/**
 * Deactivate a product.
 */
export async function deactivateCatalogProduct(
  productId: string
): Promise<void> {
  await updateCatalogProduct(productId, {
    active: false,
  });
}

/**
 * Update product stock.
 */
export async function updateCatalogStock(
  productId: string,
  stock: number
): Promise<void> {
  if (stock < 0) {
    throw new Error("Stock cannot be negative");
  }

  await updateCatalogProduct(productId, {
    stock,
  });
}