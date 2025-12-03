"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const { language, direction } = useLanguageStore();
  const isRTL = direction === "rtl";
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav className={cn("flex items-center gap-2 text-sm mb-6", className)} aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-600 hover:text-[var(--color-primary)] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>{language === "fa" ? "خانه" : "Home"}</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronIcon className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

