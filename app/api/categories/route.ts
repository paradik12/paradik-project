import { NextResponse } from "next/server";
import type { Category } from "@/types";

// Mock data - will be replaced with database queries after homepage approval
const mockCategories: Category[] = [
  {
    id: "1",
    name: "الکترونیک",
    nameEn: "Electronics",
    slug: "electronics",
    icon: "📱",
    productCount: 1250,
  },
  {
    id: "2",
    name: "پوشاک",
    nameEn: "Apparel",
    slug: "apparel",
    icon: "👕",
    productCount: 890,
  },
  {
    id: "3",
    name: "مواد غذایی",
    nameEn: "Food & Beverage",
    slug: "food",
    icon: "🍎",
    productCount: 650,
  },
  {
    id: "4",
    name: "ماشین‌آلات",
    nameEn: "Machinery",
    slug: "machinery",
    icon: "⚙️",
    productCount: 420,
  },
  {
    id: "5",
    name: "مواد شیمیایی",
    nameEn: "Chemicals",
    slug: "chemicals",
    icon: "🧪",
    productCount: 380,
  },
  {
    id: "6",
    name: "ساختمان",
    nameEn: "Construction",
    slug: "construction",
    icon: "🏗️",
    productCount: 720,
  },
  {
    id: "7",
    name: "بهداشت و زیبایی",
    nameEn: "Beauty & Health",
    slug: "beauty",
    icon: "💄",
    productCount: 540,
  },
  {
    id: "8",
    name: "ورزشی",
    nameEn: "Sports",
    slug: "sports",
    icon: "⚽",
    productCount: 310,
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      categories: mockCategories,
      total: mockCategories.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

