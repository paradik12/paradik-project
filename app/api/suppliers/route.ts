import { NextResponse } from "next/server";
import type { Supplier } from "@/types";

// Mock data - will be replaced with database queries after homepage approval
const mockSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "شرکت پسته ایرانی",
    nameEn: "Iranian Nuts Company",
    logo: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 15,
    country: "Iran",
    productCount: 1250,
    responseRate: 98,
    rating: 4.8,
    mainCategories: ["Food", "Nuts"],
  },
  {
    id: "s2",
    name: "صادرات زعفران",
    nameEn: "Saffron Export",
    logo: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 12,
    country: "Iran",
    productCount: 890,
    responseRate: 95,
    rating: 4.9,
    mainCategories: ["Food", "Spices"],
  },
  {
    id: "s3",
    name: "فرش‌های دستباف ایرانی",
    nameEn: "Persian Handmade Carpets",
    logo: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 20,
    country: "Iran",
    productCount: 450,
    responseRate: 92,
    rating: 5.0,
    mainCategories: ["Home", "Carpets"],
  },
  {
    id: "s4",
    name: "مزرعه عسل",
    nameEn: "Honey Farm",
    logo: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop",
    verified: false,
    yearsActive: 8,
    country: "Iran",
    productCount: 320,
    responseRate: 88,
    rating: 4.6,
    mainCategories: ["Food", "Honey"],
  },
  {
    id: "s5",
    name: "کارگاه چرم",
    nameEn: "Leather Workshop",
    logo: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 10,
    country: "Iran",
    productCount: 680,
    responseRate: 96,
    rating: 4.7,
    mainCategories: ["Apparel", "Leather"],
  },
  {
    id: "s6",
    name: "محصولات زیبایی",
    nameEn: "Beauty Products",
    logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
    verified: true,
    yearsActive: 6,
    country: "Iran",
    productCount: 540,
    responseRate: 94,
    rating: 4.5,
    mainCategories: ["Beauty", "Health"],
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");
    const verified = searchParams.get("verified");

    let suppliers = [...mockSuppliers];

    if (verified === "true") {
      suppliers = suppliers.filter((s) => s.verified);
    }

    // Pagination
    const paginatedSuppliers = suppliers.slice(offset, offset + limit);

    return NextResponse.json({
      suppliers: paginatedSuppliers,
      total: suppliers.length,
      limit,
      offset,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch suppliers" },
      { status: 500 }
    );
  }
}

