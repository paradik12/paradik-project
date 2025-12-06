import { NextResponse } from "next/server";
import type { Product } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    
    // Fetch all products from the main API
    let allProducts: Product[] = [];
    
    try {
      const response = await fetch(`${baseUrl}/api/products?limit=1000&offset=0`, {
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        allProducts = data.products || [];
      }
    } catch (error) {
      console.error("[Related Products] Fetch error:", error);
      return NextResponse.json({ products: [] });
    }
    
    if (allProducts.length === 0) {
      console.error(`[Related Products] No products fetched for ${productId}`);
      return NextResponse.json({ products: [] });
    }
    
    // Find current product
    const currentProduct = allProducts.find((p: Product) => p.id === productId);
    
    if (!currentProduct) {
      console.error(`[Related Products] Product ${productId} not found`);
      return NextResponse.json({ products: [] });
    }

    // Filter out current product and score by relevance
    const otherProducts = allProducts.filter((p: Product) => p.id !== productId);
    
    if (otherProducts.length === 0) {
      return NextResponse.json({ products: [] });
    }
    
    // Score all products (even with score 0 will be included)
    const scoredProducts = otherProducts
      .map((p: Product) => ({
        product: p,
        score: (p.supplierId === currentProduct.supplierId ? 2 : 0) + 
               (p.categoryId === currentProduct.categoryId ? 1 : 0)
      }))
      .sort((a, b) => {
        // Sort by score first (highest first)
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // Then by rating
        const ratingDiff = (b.product.rating || 0) - (a.product.rating || 0);
        if (ratingDiff !== 0) {
          return ratingDiff;
        }
        // Finally by sold count
        return (b.product.sold || 0) - (a.product.sold || 0);
      });

    // Always return exactly 4 products
    const finalProducts = scoredProducts
      .slice(0, Math.min(4, scoredProducts.length))
      .map(item => item.product);
    
    console.log(`[Related Products] ${productId}: ${allProducts.length} total, ${otherProducts.length} others, returning ${finalProducts.length} products`);

    return NextResponse.json({ products: finalProducts });
  } catch (error) {
    console.error("[Related Products] Error:", error);
    return NextResponse.json({ products: [] });
  }
}