"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, ShoppingCart, User, Menu, Globe, ChevronDown, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguageStore } from "@/store/language-store";
import Link from "next/link";

const categories = [
  { id: "all", name: "همه دسته‌بندی‌ها", nameEn: "All Categories" },
  { id: "electronics", name: "الکترونیک", nameEn: "Electronics" },
  { id: "apparel", name: "پوشاک", nameEn: "Apparel" },
  { id: "food", name: "مواد غذایی", nameEn: "Food & Beverage" },
  { id: "machinery", name: "ماشین‌آلات", nameEn: "Machinery" },
  { id: "chemicals", name: "مواد شیمیایی", nameEn: "Chemicals" },
  { id: "construction", name: "ساختمان", nameEn: "Construction" },
  { id: "beauty", name: "بهداشت و زیبایی", nameEn: "Beauty & Health" },
];

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, direction } = useLanguageStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleLanguageChange = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Navigate to products page (not created yet)
    console.log("Search:", searchQuery, "Category:", selectedCategory);
  };

  const isRTL = direction === "rtl";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" role="banner">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold text-primary font-heading">Paradik</div>
          </Link>

          {/* Mega Search Bar - Alibaba Style */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-3xl mx-4"
          >
            <div className="relative flex w-full items-center gap-0">
              {/* Category Dropdown */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger
                  className={`h-12 w-40 rounded-none border-r-0 ${
                    isRTL ? "rounded-l-md" : "rounded-r-md"
                  }`}
                >
                  <SelectValue>
                    {categories.find((c) => c.id === selectedCategory)?.[
                      language === "fa" ? "name" : "nameEn"
                    ] || t("header.allCategories")}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {language === "fa" ? cat.name : cat.nameEn}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Input */}
              <div className="relative flex-1">
              <Input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 md:h-14 rounded-none border-x-0 pr-12 text-base md:text-lg"
                dir={direction}
                aria-label="Search products and suppliers"
              />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={`absolute top-0 h-12 w-12 ${
                    isRTL ? "left-0" : "right-0"
                  }`}
                  onClick={() => {
                    // Image search placeholder
                    console.log("Image search");
                  }}
                >
                  <Camera className="h-5 w-5" />
                </Button>
              </div>

              {/* Search Button */}
              <Button
                type="submit"
                className={`h-12 md:h-14 px-8 md:px-10 rounded-none text-base md:text-lg font-semibold ${
                  isRTL ? "rounded-l-md" : "rounded-r-md"
                }`}
                aria-label="Submit search"
              >
                <Search className="h-5 w-5 md:h-6 md:w-6" />
                <span className="ml-2 hidden lg:inline">{t("common.search")}</span>
              </Button>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageChange}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "fa" ? "EN" : "FA"}</span>
            </Button>

            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                  <span>USD</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
                <DropdownMenuItem>IRR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Deliver To */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <span>{t("common.deliverTo")}: IR</span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                0
              </span>
            </Button>

            {/* Sign In */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              {t("common.signIn")}
            </Button>

            {/* Create Account */}
            <Button size="sm" className="hidden sm:flex">
              {t("common.createAccount")}
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="flex w-full items-center gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-10 w-32 rounded-r-none">
                <SelectValue>
                  {categories.find((c) => c.id === selectedCategory)?.[
                    language === "fa" ? "name" : "nameEn"
                  ] || t("header.allCategories")}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {language === "fa" ? cat.name : cat.nameEn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder={t("header.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 flex-1 rounded-none border-x-0"
              dir={direction}
            />
            <Button type="submit" size="icon" className="h-10 w-12 rounded-l-none">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}

