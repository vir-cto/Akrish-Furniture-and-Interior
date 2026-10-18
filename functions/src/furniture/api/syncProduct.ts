import { Request, Response } from "express";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "../../core/firebaseAdmin";

type ProductStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock"
  | "Coming Soon";

interface ProductData {
  id?: string;
  code?: string;
  name?: string;
  category?: string;
  subcategory?: string;
  description?: string;
  material?: string;
  finish?: string;
  color?: string;
  dimensions?: string;
  sellingPrice?: number;
  costPrice?: number;
  price?: number;
  stock?: number;
  reorderLevel?: number;
  unit?: string;
  status?: ProductStatus;
  image?: string;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
  active?: boolean;
  leadTime?: string;
  warranty?: string;
  supplier?: string;
  location?: string;
  tags?: string[];
  createdAt?: unknown;
  updatedAt?: unknown;
}

interface SyncProductRequest
  extends ProductData {
  productId?: string;
  delete?: boolean;
}

/**
 * Determine product stock status.
 */
function getProductStatus(
  stock: number,
  reorderLevel: number
): ProductStatus {
  if (stock <= 0) {
    return "Out of Stock";
  }

  if (stock <= reorderLevel) {
    return "Low Stock";
  }

  return "In Stock";
}

/**
 * Generate a product ID if one was not supplied.
 */
function generateProductId(): string {
  return `PROD-${Date.now()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
}

/**
 * Clean optional string values.
 */
function cleanString(
  value: unknown
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

/**
 * Validate product data.
 */
function validateProduct(
  product: SyncProductRequest
): string | null {
  if (!cleanString(product.name)) {
    return "Product name is required.";
  }

  if (!cleanString(product.category)) {
    return "Product category is required.";
  }

  const sellingPrice =
    Number(
      product.sellingPrice ??
        product.price ??
        0
    );

  if (
    !Number.isFinite(sellingPrice) ||
    sellingPrice < 0
  ) {
    return "Invalid selling price.";
  }

  const stock =
    Number(product.stock ?? 0);

  if (
    !Number.isFinite(stock) ||
    stock < 0
  ) {
    return "Invalid stock quantity.";
  }

  const reorderLevel =
    Number(
      product.reorderLevel ?? 0
    );

  if (
    !Number.isFinite(reorderLevel) ||
    reorderLevel < 0
  ) {
    return "Invalid reorder level.";
  }

  return null;
}

/**
 * Build the Firestore product document.
 */
function buildProductData(
  product: SyncProductRequest,
  productId: string,
  existingData?: ProductData
): ProductData & {
  id: string;
  updatedAt: unknown;
} {
  const stock =
    Number(
      product.stock ??
        existingData?.stock ??
        0
    );

  const reorderLevel =
    Number(
      product.reorderLevel ??
        existingData?.reorderLevel ??
        0
    );

  const sellingPrice =
    Number(
      product.sellingPrice ??
        product.price ??
        existingData?.sellingPrice ??
        existingData?.price ??
        0
    );

  const costPrice =
    Number(
      product.costPrice ??
        existingData?.costPrice ??
        0
    );

  const status =
    product.status ||
    getProductStatus(
      stock,
      reorderLevel
    );

  return {
    ...(existingData || {}),

    id: productId,

    code:
      cleanString(
        product.code ??
          existingData?.code
      ),

    name:
      cleanString(
        product.name ??
          existingData?.name
      ),

    category:
      cleanString(
        product.category ??
          existingData?.category
      ),

    subcategory:
      cleanString(
        product.subcategory ??
          existingData?.subcategory
      ),

    description:
      cleanString(
        product.description ??
          existingData?.description
      ),

    material:
      cleanString(
        product.material ??
          existingData?.material
      ),

    finish:
      cleanString(
        product.finish ??
          existingData?.finish
      ),

    color:
      cleanString(
        product.color ??
          existingData?.color
      ),

    dimensions:
      cleanString(
        product.dimensions ??
          existingData?.dimensions
      ),

    sellingPrice,

    costPrice,

    // Keep price for compatibility with
    // website catalog code.
    price:
      sellingPrice,

    stock,

    reorderLevel,

    unit:
      cleanString(
        product.unit ??
          existingData?.unit
      ) || "Nos",

    status,

    image:
      cleanString(
        product.image ??
          existingData?.image
      ),

    imageUrl:
      cleanString(
        product.imageUrl ??
          existingData?.imageUrl
      ),

    images:
      Array.isArray(product.images)
        ? product.images
        : existingData?.images ||
          [],

    featured:
      product.featured ??
      existingData?.featured ??
      false,

    active:
      product.active ??
      existingData?.active ??
      true,

    leadTime:
      cleanString(
        product.leadTime ??
          existingData?.leadTime
      ),

    warranty:
      cleanString(
        product.warranty ??
          existingData?.warranty
      ),

    supplier:
      cleanString(
        product.supplier ??
          existingData?.supplier
      ),

    location:
      cleanString(
        product.location ??
          existingData?.location
      ),

    tags:
      Array.isArray(product.tags)
        ? product.tags
        : existingData?.tags ||
          [],

    updatedAt:
      FieldValue.serverTimestamp(),
  };
}

/**
 * Sync a product to the main products collection
 * and the public catalog collection.
 */
async function syncProduct(
  product: SyncProductRequest
) {
  const productId =
    cleanString(
      product.productId ||
        product.id
    ) || generateProductId();

  const productRef =
    adminDb
      .collection("products")
      .doc(productId);

  const catalogRef =
    adminDb
      .collection("catalog")
      .doc(productId);

  const existingSnapshot =
    await productRef.get();

  const existingData =
    existingSnapshot.exists
      ? (existingSnapshot.data() as ProductData)
      : undefined;

  const productData =
    buildProductData(
      product,
      productId,
      existingData
    );

  const batch =
    adminDb.batch();

  /**
   * If this is a new product, add createdAt.
   * Existing products keep their original value.
   */
  if (!existingSnapshot.exists) {
    // (
    //   productData as Record<
    //     string,
    //     unknown
    //   >
    // ).createdAt =
    //   FieldValue.serverTimestamp();
    (productData as any).createdAt = FieldValue.serverTimestamp();
  }

  batch.set(
    productRef,
    productData,
    {
      merge: true,
    }
  );

  /**
   * Public catalog document.
   *
   * Only fields required by the website catalog
   * are copied here.
   */
  const catalogData = {
    id: productId,

    productId,

    code:
      productData.code || "",

    name:
      productData.name || "",

    category:
      productData.category || "",

    subcategory:
      productData.subcategory || "",

    description:
      productData.description || "",

    material:
      productData.material || "",

    finish:
      productData.finish || "",

    color:
      productData.color || "",

    dimensions:
      productData.dimensions || "",

    price:
      productData.sellingPrice || 0,

    sellingPrice:
      productData.sellingPrice || 0,

    costPrice:
      productData.costPrice || 0,

    stock:
      productData.stock || 0,

    reorderLevel:
      productData.reorderLevel || 0,

    status:
      productData.status,

    image:
      productData.image ||
      productData.imageUrl ||
      "",

    imageUrl:
      productData.imageUrl ||
      productData.image ||
      "",

    images:
      productData.images || [],

    featured:
      productData.featured ?? false,

    active:
      productData.active ?? true,

    unit:
      productData.unit || "Nos",

    leadTime:
      productData.leadTime || "",

    warranty:
      productData.warranty || "",

    supplier:
      productData.supplier || "",

    location:
      productData.location || "",

    tags:
      productData.tags || [],

    updatedAt:
      FieldValue.serverTimestamp(),
  };

  if (!existingSnapshot.exists) {
    // (
    //   catalogData as Record<
    //     string,
    //     unknown
    //   >
    // ).createdAt =
    //   FieldValue.serverTimestamp();
    (catalogData as any).createdAt = FieldValue.serverTimestamp();
  }

  batch.set(
    catalogRef,
    catalogData,
    {
      merge: true,
    }
  );

  await batch.commit();

  return {
    productId,

    product: {
      ...productData,
      id: productId,
    },

    catalog: {
      ...catalogData,
      id: productId,
    },
  };
}

/**
 * Delete a product from both collections.
 */
async function deleteProduct(
  productId: string
): Promise<void> {
  if (!productId) {
    throw new Error(
      "Product ID is required."
    );
  }

  const productRef =
    adminDb
      .collection("products")
      .doc(productId);

  const catalogRef =
    adminDb
      .collection("catalog")
      .doc(productId);

  const productSnapshot =
    await productRef.get();

  if (!productSnapshot.exists) {
    throw new Error(
      "Product was not found."
    );
  }

  const batch =
    adminDb.batch();

  batch.delete(productRef);
  batch.delete(catalogRef);

  await batch.commit();
}

/**
 * GET product.
 */
async function getProduct(
  productId: string
) {
  if (!productId) {
    throw new Error(
      "Product ID is required."
    );
  }

  const snapshot =
    await adminDb
      .collection("products")
      .doc(productId)
      .get();

  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

/**
 * Main Product Sync API.
 *
 * POST   /syncProduct
 * PUT    /syncProduct?id=PRODUCT_ID
 * PATCH  /syncProduct?id=PRODUCT_ID
 * GET    /syncProduct?id=PRODUCT_ID
 * DELETE /syncProduct?id=PRODUCT_ID
 */
export async function syncProductHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (
      ![
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
      ].includes(req.method)
    ) {
      res.status(405).json({
        success: false,
        message:
          "Method not allowed.",
      });

      return;
    }

    /**
     * GET
     */
    if (req.method === "GET") {
      const productId =
        cleanString(
          req.query.id ||
            req.query.productId
        );

      if (!productId) {
        res.status(400).json({
          success: false,
          message:
            "Product ID is required.",
        });

        return;
      }

      const product =
        await getProduct(
          productId
        );

      if (!product) {
        res.status(404).json({
          success: false,
          message:
            "Product was not found.",
        });

        return;
      }

      res.status(200).json({
        success: true,
        product,
      });

      return;
    }

    /**
     * DELETE
     */
    if (req.method === "DELETE") {
      const productId =
        cleanString(
          req.query.id ||
            req.query.productId ||
            req.body?.productId ||
            req.body?.id
        );

      if (!productId) {
        res.status(400).json({
          success: false,
          message:
            "Product ID is required.",
        });

        return;
      }

      await deleteProduct(
        productId
      );

      res.status(200).json({
        success: true,
        message:
          "Product deleted successfully.",
        productId,
      });

      return;
    }

    /**
     * POST / PUT / PATCH
     */
    const body =
      req.body as SyncProductRequest;

    const validationError =
      validateProduct(body);

    if (validationError) {
      res.status(400).json({
        success: false,
        message:
          validationError,
      });

      return;
    }

    const productId =
      cleanString(
        body.productId ||
          body.id ||
          req.query.id ||
          req.query.productId
      );

    const existingProduct =
      productId
        ? await getProduct(
            productId
          )
        : null;

    const result =
      await syncProduct({
        ...body,
        ...(productId
          ? {
              productId,
            }
          : {}),
      });

    res.status(
      existingProduct
        ? 200
        : 201
    ).json({
      success: true,

      message:
        existingProduct
          ? "Product synchronized successfully."
          : "Product created and synchronized successfully.",

      productId:
        result.productId,

      product:
        result.product,

      catalog:
        result.catalog,
    });
  } catch (error: unknown) {
    console.error(
      "Furniture product sync error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to synchronize product.";

    res.status(500).json({
      success: false,
      message,
    });
  }
}

export default syncProductHandler;