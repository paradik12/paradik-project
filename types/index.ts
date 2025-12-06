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

export interface ProductVariation {
  name: string;
  nameEn: string;
  options: {
    value: string;
    valueEn: string;
    selected?: boolean;
  }[];
}

export interface ProductPricingTier {
  min: number;
  max?: number;
  price: number;
}

export interface ProductShipping {
  method: string;
  methodEn: string;
  fee: string;
  feeEn: string;
  transitTime: string;
  transitTimeEn: string;
  discount?: string;
  discountEn?: string;
}

export interface ProductAttribute {
  name: string;
  nameEn: string;
  value: string;
  valueEn: string;
}

export interface ProductService {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon?: string;
}

export interface ProductFeature {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  commentEn?: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  titleEn: string;
  description?: string;
  shortDescription?: string;
  shortDescriptionEn?: string;
  price: number;
  currency: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  moq: number;
  sold: number;
  supplierId: string;
  supplierName: string;
  supplierNameFa?: string;
  supplierLogo?: string;
  supplierCountry?: string;
  supplierYearsActive?: number;
  supplierProductCount?: number;
  supplierResponseRate?: number;
  supplierRating?: number;
  supplierMainCategories?: string[];
  supplierDescription?: string;
  supplierDescriptionEn?: string;
  supplierAddress?: string;
  supplierPhone?: string;
  supplierWebsite?: string;
  verified: boolean;
  categoryId: string;
  rating?: number;
  reviewCount?: number;
  variations?: ProductVariation[];
  pricingTiers?: ProductPricingTier[];
  shipping?: ProductShipping[];
  attributes?: ProductAttribute[];
  services?: ProductService[];
  features?: ProductFeature[];
  reviews?: ProductReview[];
  fullDescription?: string;
  fullDescriptionEn?: string;
  modelNumber?: string;
  brand?: string;
  brandEn?: string;
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

