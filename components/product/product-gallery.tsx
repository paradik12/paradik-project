"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, Heart } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  title: string;
  titleEn: string;
}

export function ProductGallery({ images, title, titleEn }: ProductGalleryProps) {
  const { language } = useLanguageStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const mainImage = images[selectedImageIndex] || images[0];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4" dir="rtl">
      {/* Thumbnail Images - Right side in RTL */}
      <div className="hidden lg:flex flex-col gap-2 max-h-[600px] overflow-y-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={cn(
              "relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-all",
              selectedImageIndex === index
                ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <Image
              src={image}
              alt={`${language === "fa" ? title : titleEn} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Main Image - Center */}
      <div className="flex-1 relative bg-gray-50 rounded-lg overflow-hidden group">
        <div className="relative aspect-square w-full">
          <Image
            src={mainImage}
            alt={language === "fa" ? title : titleEn}
            fill
            className={cn(
              "object-contain transition-transform duration-300",
              isZoomed && "scale-150"
            )}
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white shadow-lg"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Zoom"
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white shadow-lg"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}



