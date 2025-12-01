export type Language = "fa" | "en";
export type Direction = "rtl" | "ltr";

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  icon: any;
  image?: string;
  productCount?: number;
}

export interface Product {
  id: string;
  title: string;
  titleEn: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  images?: string[];
  moq: number;
  sold: number;
  supplierId: string;
  supplierName: string;
  verified: boolean;
  categoryId: string;
  rating?: number;
  reviewCount?: number;
}

export interface Supplier {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  verified: boolean;
  yearsActive: number;
  country: string;
  productCount: number;
  responseRate: number;
  rating: number;
  mainCategories: string[];
}

export interface HeroSlide {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  image: string;
  ctaText: string;
  ctaTextEn: string;
  link: string;
}

