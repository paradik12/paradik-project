"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useLanguageStore } from "@/store/language-store";
import type { Product, ProductAttribute } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star, CheckCircle2, MapPin, Phone, Globe } from "lucide-react";

// Anti-scraping utility: Split text into parts
const splitTextIntoParts = (text: string): string[] => {
  const parts: string[] = [];
  for (let i = 0; i < text.length; i += 3) {
    parts.push(text.slice(i, i + 3));
  }
  return parts;
};

// Combine split parts back to original text
const combineTextParts = (parts: string[]): string => {
  return parts.join('');
};

interface ProductTabsProps {
  product: Product;
  images: string[];
}

export function ProductTabs({ product, images }: ProductTabsProps) {
  const { language } = useLanguageStore();
  const isRTL = language === "fa";
  const [activeTab, setActiveTab] = useState("description");
  const categoriesWrapperRef = useRef<HTMLDivElement>(null);
  
  // Force categories RTL layout after mount
  useEffect(() => {
    if (categoriesWrapperRef.current && isRTL && typeof window !== 'undefined') {
      const wrapper = categoriesWrapperRef.current;
      const flexContainer = wrapper.querySelector('div[dir="ltr"]') as HTMLElement;
      
      if (flexContainer) {
        // Force the layout to be right-to-left
        const applyStyles = () => {
          flexContainer.style.setProperty('direction', 'ltr', 'important');
          flexContainer.style.setProperty('flex-direction', 'row-reverse', 'important');
          flexContainer.style.setProperty('justify-content', 'flex-end', 'important');
        };
        
        applyStyles();
        
        // Apply after a short delay to ensure DOM is ready
        setTimeout(applyStyles, 0);
        setTimeout(applyStyles, 100);
        
        // Use MutationObserver to maintain styles
        const observer = new MutationObserver(() => {
          applyStyles();
        });
        
        observer.observe(flexContainer, {
          attributes: true,
          attributeFilter: ['style', 'dir', 'class']
        });
        
        return () => observer.disconnect();
      }
    }
  }, [isRTL, activeTab, product.supplierMainCategories]);
  
  // Protected content - split and combine on client side only
  const protectedAddress = useMemo(() => {
    if (typeof window === "undefined" || !product.supplierAddress) return "";
    const parts = splitTextIntoParts(product.supplierAddress);
    return combineTextParts(parts);
  }, [product.supplierAddress]);
  
  const protectedPhone = useMemo(() => {
    if (typeof window === "undefined" || !product.supplierPhone) return "";
    const parts = splitTextIntoParts(product.supplierPhone);
    return combineTextParts(parts);
  }, [product.supplierPhone]);
  
  
  
  
  // Prevent extraction via developer tools and right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-protected-content]')) {
        e.preventDefault();
        return false;
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-protected-content]')) {
        // Prevent common developer tool shortcuts
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
          (e.ctrlKey && e.key.toLowerCase() === 'u')
        ) {
          e.preventDefault();
          return false;
        }
      }
    };
    
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-protected-content]')) {
        e.preventDefault();
        return false;
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <div className="mt-8" dir={isRTL ? "rtl" : "ltr"}>
      <Tabs value={activeTab} onValueChange={setActiveTab} dir={isRTL ? "rtl" : "ltr"}>
        <TabsList className={cn(
          "w-full",
          isRTL ? "justify-end flex-row-reverse" : "justify-start"
        )}>
          {product.attributes && product.attributes.length > 0 && (
            <TabsTrigger value="attributes">
              {language === "fa" ? "مشخصات" : "Attributes"}
            </TabsTrigger>
          )}
          {product.videoUrl && (
            <TabsTrigger value="video">
              {language === "fa" ? "ویدیو" : "Video"}
            </TabsTrigger>
          )}
          <TabsTrigger value="supplier">
            {language === "fa" ? "تامین‌کننده" : "Supplier"}
          </TabsTrigger>
          {product.services && product.services.length > 0 && (
            <TabsTrigger value="services">
              {language === "fa" ? "خدمات" : "Services"}
            </TabsTrigger>
          )}
          {product.features && product.features.length > 0 && (
            <TabsTrigger value="features">
              {language === "fa" ? "ویژگی‌ها" : "Features"}
            </TabsTrigger>
          )}
          {product.reviews && product.reviews.length > 0 && (
            <TabsTrigger value="reviews">
              {language === "fa" ? "نقد و بررسی‌ها" : "Reviews"}
            </TabsTrigger>
          )}
          <TabsTrigger value="description">
            {language === "fa" ? "توضیحات" : "Description"}
          </TabsTrigger>
        </TabsList>

        {/* Description Tab */}
        <TabsContent value="description">
          <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg" dir={isRTL ? "rtl" : "ltr"}>
            <div className="prose prose-sm max-w-none text-right">
              <div
                className="text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: language === "fa"
                    ? (product.fullDescription || product.description || "")
                        .split("\n")
                        .map((line) => `<p>${line}</p>`)
                        .join("")
                    : (product.fullDescriptionEn || product.description || "")
                        .split("\n")
                        .map((line) => `<p>${line}</p>`)
                        .join(""),
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Reviews Tab */}
        {product.reviews && product.reviews.length > 0 && (
          <TabsContent value="reviews">
            <div className="mt-4 space-y-4" dir={isRTL ? "rtl" : "ltr"}>
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-6 bg-white border border-gray-200 rounded-lg"
                >
                  <div className={cn(
                    "flex items-start mb-3",
                    isRTL ? "flex-row-reverse justify-between" : "justify-between"
                  )}>
                    <div className={cn(
                      "flex items-center gap-3",
                      isRTL && "flex-row-reverse"
                    )}>
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">
                          {review.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className={isRTL ? "text-right" : "text-left"}>
                        <div className={cn(
                          "flex items-center gap-2",
                          isRTL && "flex-row-reverse"
                        )}>
                          <span className="font-semibold text-gray-900">{review.author}</span>
                          {review.verified && (
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <div className={cn(
                          "flex items-center gap-1 mt-1",
                          isRTL && "flex-row-reverse"
                        )}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className={cn(
                      "text-sm text-gray-500",
                      isRTL ? "text-left" : "text-right"
                    )}>{review.date}</span>
                  </div>
                  <p className={cn(
                    "text-gray-700 leading-relaxed",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {language === "fa" ? review.comment : (review.commentEn || review.comment)}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        )}

        {/* Features Tab */}
        {product.features && product.features.length > 0 && (
          <TabsContent value="features">
            <div className="mt-4 space-y-4" dir={isRTL ? "rtl" : "ltr"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg"
                  >
                    <h3 className={cn(
                      "font-semibold text-lg text-gray-900 mb-2",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {language === "fa" ? feature.title : feature.titleEn}
                    </h3>
                    <p className={cn(
                      "text-gray-700 leading-relaxed",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {language === "fa" ? feature.description : feature.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        )}

        {/* Services Tab */}
        {product.services && product.services.length > 0 && (
          <TabsContent value="services">
            <div className="mt-4 space-y-4" dir={isRTL ? "rtl" : "ltr"}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.services.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg hover:border-[var(--color-primary)] transition-colors"
                  >
                    {service.icon && (
                      <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    )}
                    <h3 className={cn(
                      "font-semibold text-lg text-gray-900 mb-2",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {language === "fa" ? service.name : service.nameEn}
                    </h3>
                    <p className={cn(
                      "text-gray-700 leading-relaxed text-sm",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {language === "fa" ? service.description : service.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        )}

        {/* Supplier Tab */}
        <TabsContent value="supplier">
          <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg">
            <div className="space-y-6">
              {/* Supplier Header */}
              {isRTL ? (
                <div 
                  className="flex items-start gap-4 pb-6 border-b border-gray-200 flex-row justify-end"
                  dir="rtl"
                >
                  {/* Content - In RTL, this comes first and is aligned to right */}
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-3 mb-2 flex-row-reverse justify-end">
                      <h3 className="text-2xl font-bold text-gray-900 text-right">
                        {language === "fa" ? product.supplierNameFa || product.supplierName : product.supplierName}
                      </h3>
                      {product.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-full flex-row-reverse">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-semibold">
                            {language === "fa" ? "تأیید شده" : "Verified"}
                          </span>
                        </div>
                      )}
                    </div>
                    {product.supplierCountry && (
                      <p className="text-sm text-gray-600 text-right">
                        {language === "fa" ? "کشور" : "Country"}: {product.supplierCountry}
                      </p>
                    )}
                  </div>
                  {/* Logo - In RTL, this comes after content and is on the right */}
                  {product.supplierLogo && (
                    <div className="w-20 h-20 rounded-lg border border-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={product.supplierLogo}
                        alt={language === "fa" ? product.supplierNameFa || product.supplierName : product.supplierName}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="flex items-start gap-4 pb-6 border-b border-gray-200 flex-row justify-start"
                  dir="ltr"
                >
                  {/* Logo - In LTR, this comes first */}
                  {product.supplierLogo && (
                    <div className="w-20 h-20 rounded-lg border border-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={product.supplierLogo}
                        alt={language === "fa" ? product.supplierNameFa || product.supplierName : product.supplierName}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* Content - In LTR, this comes after logo */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2 flex-row justify-start">
                      <h3 className="text-2xl font-bold text-gray-900 text-left">
                        {language === "fa" ? product.supplierNameFa || product.supplierName : product.supplierName}
                      </h3>
                      {product.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-semibold">
                            {language === "fa" ? "تأیید شده" : "Verified"}
                          </span>
                        </div>
                      )}
                    </div>
                    {product.supplierCountry && (
                      <p className="text-sm text-gray-600 text-left">
                        {language === "fa" ? "کشور" : "Country"}: {product.supplierCountry}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Supplier Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.supplierYearsActive && (
                  <div className={cn(
                    "p-4 bg-gray-50 rounded-lg",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === "fa" ? "سال فعالیت" : "Years Active"}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{product.supplierYearsActive}</p>
                  </div>
                )}
                {product.supplierProductCount && (
                  <div className={cn(
                    "p-4 bg-gray-50 rounded-lg",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === "fa" ? "تعداد محصولات" : "Products"}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{product.supplierProductCount}</p>
                  </div>
                )}
                {product.supplierResponseRate && (
                  <div className={cn(
                    "p-4 bg-gray-50 rounded-lg",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === "fa" ? "نرخ پاسخ" : "Response Rate"}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{product.supplierResponseRate}%</p>
                  </div>
                )}
                {product.supplierRating && (
                  <div className={cn(
                    "p-4 bg-gray-50 rounded-lg",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    <p className="text-sm text-gray-600 mb-1">
                      {language === "fa" ? "امتیاز" : "Rating"}
                    </p>
                    <div className={cn(
                      "flex items-center gap-1",
                      isRTL && "flex-row-reverse"
                    )}>
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <p className="text-2xl font-bold text-gray-900">{product.supplierRating}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Supplier Categories */}
              {product.supplierMainCategories && product.supplierMainCategories.length > 0 && (
                <div>
                  <h4 className={cn(
                    "text-lg font-semibold text-gray-900 mb-3",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {language === "fa" ? "دسته‌بندی‌های اصلی" : "Main Categories"}
                  </h4>
                  <div ref={categoriesWrapperRef} className="categories-rtl-wrapper">
                    <div className="flex flex-wrap gap-2 w-full" dir="ltr">
                      {(isRTL ? [...product.supplierMainCategories].reverse() : product.supplierMainCategories).map((category, index) => (
                        <span
                          key={`category-${category}-${index}`}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Supplier Description */}
              {product.supplierDescription && (
                <div>
                  <h4 className={cn(
                    "text-lg font-semibold text-gray-900 mb-3",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {language === "fa" ? "درباره تامین‌کننده" : "About Supplier"}
                  </h4>
                  <p className={cn(
                    "text-gray-700 leading-relaxed",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {language === "fa" ? product.supplierDescription : (product.supplierDescriptionEn || product.supplierDescription)}
                  </p>
                </div>
              )}

              {/* Contact Information */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className={cn(
                  "text-lg font-semibold text-gray-900 mb-4",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {language === "fa" ? "آدرس و تلفن" : "Address & Phone"}
                </h4>
                <div className="space-y-3">
                  {product.supplierAddress && (
                    <div className={cn(
                      "flex items-start gap-2",
                      isRTL ? "flex-row-reverse text-right" : "text-left"
                    )}>
                      <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1" data-protected-content>
                        <p 
                          className={cn("text-gray-900 leading-relaxed select-none pointer-events-none", isRTL ? "text-right" : "text-left")}
                          onCopy={(e) => e.preventDefault()}
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{ 
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            WebkitTouchCallout: 'none',
                            KhtmlUserSelect: 'none'
                          }}
                          suppressContentEditableWarning
                        >
                          <span className="font-semibold text-gray-700">
                            {language === "fa" ? "آدرس:" : "Address:"}
                          </span>{" "}
                          <span data-no-copy>{protectedAddress || product.supplierAddress}</span>
                        </p>
                      </div>
                    </div>
                  )}
                  {product.supplierPhone && (
                    <div className={cn(
                      "flex items-start gap-2",
                      isRTL ? "flex-row-reverse text-right" : "text-left"
                    )}>
                      <Phone className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1" data-protected-content>
                        <p 
                          className={cn("text-gray-900 leading-relaxed select-none", isRTL ? "text-right" : "text-left")}
                          onCopy={(e) => e.preventDefault()}
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{ 
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            WebkitTouchCallout: 'none',
                            KhtmlUserSelect: 'none'
                          }}
                          suppressContentEditableWarning
                        >
                          <span className="font-semibold text-gray-700">
                            {language === "fa" ? "تلفن:" : "Phone:"}
                          </span>{" "}
                          <span 
                            className="text-gray-900"
                            onCopy={(e) => e.preventDefault()}
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            data-no-copy
                            style={{ 
                              userSelect: 'none',
                              WebkitUserSelect: 'none',
                              MozUserSelect: 'none',
                              msUserSelect: 'none',
                              WebkitTouchCallout: 'none',
                              KhtmlUserSelect: 'none'
                            }}
                          >
                            {protectedPhone || product.supplierPhone}
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                  {product.supplierWebsite && (
                    <div className={cn(
                      "flex items-start gap-2",
                      isRTL ? "flex-row-reverse text-right" : "text-left"
                    )}>
                      <Globe className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className={cn("text-gray-900 leading-relaxed", isRTL ? "text-right" : "text-left")}>
                          <span className="font-semibold text-gray-700">
                            {language === "fa" ? "سایت:" : "Website:"}
                          </span>{" "}
                          <a 
                            href={product.supplierWebsite.startsWith('http') ? product.supplierWebsite : `https://${product.supplierWebsite}`}
                            target="_blank"
                            rel="noopener"
                            className="text-[var(--color-primary)] hover:underline"
                            title={language === "fa" ? `بازدید از سایت ${product.supplierNameFa || product.supplierName}` : `Visit ${product.supplierName} website`}
                          >
                            {product.supplierWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Supplier Button */}
              <div className={cn(
                "pt-4 border-t border-gray-200",
                isRTL ? "text-right" : "text-left"
              )}>
                <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary)]/90 transition-colors">
                  {language === "fa" ? "تماس با تامین‌کننده" : "Contact Supplier"}
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        {product.videoUrl && (
          <TabsContent value="video">
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
              <div className="relative aspect-video bg-gray-100">
                <iframe
                  src={product.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </TabsContent>
        )}

        {product.attributes && product.attributes.length > 0 && (
          <TabsContent value="attributes">
            <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
              <table className="w-full">
                <tbody>
                  {product.attributes.map((attr, index) => (
                    <tr
                      key={index}
                      className={cn(
                        "border-b border-gray-200 last:border-b-0",
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      )}
                    >
                      <td className={cn(
                        "px-4 py-3 text-sm font-semibold text-gray-700 w-1/3",
                        isRTL ? "text-right" : "text-left"
                      )}>
                        {language === "fa" ? attr.name : attr.nameEn}
                      </td>
                      <td className={cn(
                        "px-4 py-3 text-sm text-gray-600",
                        isRTL ? "text-right" : "text-left"
                      )}>
                        {language === "fa" ? attr.value : attr.valueEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}

