import { Header } from "@/components/homepage/header";
import { HeroCarousel } from "@/components/homepage/hero-carousel";
import { CategoriesSection } from "@/components/homepage/categories-section";
import { TopDeals } from "@/components/homepage/top-deals";
import { TopRanking } from "@/components/homepage/top-ranking";
import { FeaturedProducts } from "@/components/homepage/featured-products";
import { FeaturedSuppliers } from "@/components/homepage/featured-suppliers";
import { RFQCTA } from "@/components/homepage/rfq-cta";
import { Footer } from "@/components/homepage/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" role="main">
        {/* Hero Carousel */}
        <section aria-label="Hero banner" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
          <HeroCarousel />
        </section>
        
        {/* Categories Section */}
        <CategoriesSection />
        
        {/* Top Deals - Alibaba Style */}
        <TopDeals />
        
        {/* Top Ranking - Alibaba Style */}
        <TopRanking />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Featured Suppliers */}
        <FeaturedSuppliers />
        
        {/* RFQ CTA */}
        <RFQCTA />
      </main>
      <Footer />
    </div>
  );
}

