"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Search, ShoppingCart, Menu, Globe, ChevronDown, Camera, X, ChevronRight } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

const navigationItems = [
  { id: "products", name: "محصولات", nameEn: "Products", href: "/products" },
  { id: "suppliers", name: "تامین‌کنندگان", nameEn: "Suppliers", href: "/suppliers" },
  { id: "categories", name: "دسته‌بندی‌ها", nameEn: "Categories", href: "/categories" },
];

// Mock search suggestions - in production, this would come from an API
const getSearchSuggestions = (query: string, language: string) => {
  if (!query || query.length < 2) return [];
  
  const suggestions = [
    { id: 1, text: language === "fa" ? "پسته" : "Pistachio nuts", category: "Food" },
    { id: 2, text: language === "fa" ? "گردو" : "Walnuts", category: "Food" },
    { id: 3, text: language === "fa" ? "گوشی موبایل" : "Mobile phones", category: "Electronics" },
    { id: 4, text: language === "fa" ? "لباس" : "Clothing", category: "Apparel" },
    { id: 5, text: language === "fa" ? "ماشین‌آلات" : "Machinery", category: "Machinery" },
  ];
  
  return suggestions.filter(item =>
    item.text.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
};

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, direction } = useLanguageStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<Array<{id: number, text: string, category: string}>>([]);
  const searchRef = useRef<HTMLFormElement>(null); //
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isRTL = direction === "rtl";

  // Handle search suggestions
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const suggestions = getSearchSuggestions(searchQuery, language);
      setSearchSuggestions(suggestions);
      setShowSearchSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSearchSuggestions(false);
    }
  }, [searchQuery, language]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchSuggestions(false);
    // Navigate to products page with search query
    console.log("Search:", searchQuery, "Category:", selectedCategory);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
    // Navigate to search results
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full shadow-md" 
      role="banner"
      dir={direction}
    >
      {/* Header with Orange/Yellow Gradient Background */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo - Left Aligned */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <div 
                className="font-heading text-2xl md:text-3xl font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105" 
                style={{ fontWeight: 900 }}
              >
                Paradik
              </div>
            </Link>

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 max-w-md mx-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-white font-semibold text-base hover:text-yellow-100 transition-colors duration-200 relative group"
                >
                  {language === "fa" ? item.name : item.nameEn}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mega Search Bar - Alibaba Style */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-2xl"
              ref={searchRef}
            >
              <div className="relative flex w-full items-center gap-0">
                {/* Category Dropdown */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger
                    className={cn(
                      "h-12 w-40 rounded-none border-r-0 bg-white text-gray-800 font-medium",
                      isRTL ? "rounded-l-lg" : "rounded-r-lg"
                    )}
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
                    ref={searchInputRef}
                    type="text"
                    placeholder={t("header.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.length >= 2 && setShowSearchSuggestions(true)}
                    className={cn(
                      "h-12 rounded-none border-x-0 pr-12 text-base bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-300",
                      isRTL && "text-right"
                    )}
                    dir={direction}
                    aria-label="Search products and suppliers"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "absolute top-0 h-12 w-12 hover:bg-gray-100",
                      isRTL ? "left-0" : "right-0"
                    )}
                    onClick={() => {
                      console.log("Image search");
                    }}
                    aria-label="Image search"
                  >
                    <Camera className="h-5 w-5 text-gray-600" />
                  </Button>
                  
                  {/* Auto-suggest Dropdown */}
                  {showSearchSuggestions && searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="py-2">
                        {searchSuggestions.map((suggestion) => (
                          <button
                            key={suggestion.id}
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion.text)}
                            className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors duration-150 flex items-center justify-between group"
                          >
                            <div className="flex-1">
                              <div className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors">
                                {suggestion.text}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {suggestion.category}
                              </div>
                            </div>
                            <Search className="h-4 w-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <Button
                  type="submit"
                  className={cn(
                    "h-12 px-8 rounded-none text-base font-bold bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl",
                    isRTL ? "rounded-l-lg" : "rounded-r-lg"
                  )}
                  aria-label="Submit search"
                >
                  <Search className="h-5 w-5" />
                  <span className="ml-2 hidden xl:inline">{t("common.search")}</span>
                </Button>
              </div>
            </form>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              {/* Language Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLanguageChange}
                className="hidden sm:flex items-center gap-2 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className="font-semibold">{language === "fa" ? "EN" : "FA"}</span>
              </Button>

              {/* Currency Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hidden sm:flex items-center gap-2 text-white hover:bg-white/20 transition-colors duration-200 font-semibold"
                  >
                    <span>USD</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRTL ? "start" : "end"} className="min-w-[120px]">
                  <DropdownMenuItem>USD</DropdownMenuItem>
                  <DropdownMenuItem>EUR</DropdownMenuItem>
                  <DropdownMenuItem>IRR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Deliver To */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden md:flex items-center gap-2 text-white hover:bg-white/20 transition-colors duration-200 font-semibold"
              >
                <span>{t("common.deliverTo")}: IR</span>
              </Button>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-white hover:bg-white/20 transition-colors duration-200"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-orange-600 text-xs font-bold">
                  0
                </span>
              </Button>

              {/* Sign In - Large Bold Button */}
              <Button 
                variant="ghost" 
                size="lg" 
                className="hidden sm:flex font-bold text-white hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-100 px-4"
              >
                {t("common.signIn")}
              </Button>

              {/* Create Account - Large Bold Button */}
              <Button 
                size="lg" 
                className="hidden sm:flex font-bold bg-white text-orange-600 hover:bg-yellow-50 transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl px-6"
              >
                {t("common.createAccount")}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-white hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4 mb-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-gray-800 font-semibold text-base hover:text-orange-600 transition-colors duration-200 py-2 border-b border-gray-100 last:border-0"
                >
                  <span>{language === "fa" ? item.name : item.nameEn}</span>
                  <ChevronRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex w-full items-center gap-0 rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-orange-500">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 w-32 rounded-none border-r border-gray-300 bg-white">
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
                  className="h-12 flex-1 rounded-none border-0"
                  dir={direction}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="h-12 w-12 rounded-none bg-orange-600 hover:bg-orange-700"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full font-bold border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-200"
              >
                {t("common.signIn")}
              </Button>
              <Button 
                size="lg" 
                className="w-full font-bold bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 shadow-lg"
              >
                {t("common.createAccount")}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search - Always Visible on Mobile */}
      <div className="md:hidden bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <form onSubmit={handleSearch} ref={searchRef}>
            <div className="flex w-full items-center gap-0 rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-orange-500">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-10 w-28 rounded-none border-r border-gray-300 bg-white text-sm">
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
                onFocus={() => searchQuery.length >= 2 && setShowSearchSuggestions(true)}
                className="h-10 flex-1 rounded-none border-0 text-sm"
                dir={direction}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="h-10 w-10 rounded-none bg-orange-600 hover:bg-orange-700"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Auto-suggest Dropdown */}
            {showSearchSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute left-4 right-4 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="py-2">
                  {searchSuggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="w-full text-left px-4 py-2 hover:bg-orange-50 transition-colors duration-150 flex items-center justify-between group text-sm"
                    >
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors">
                          {suggestion.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {suggestion.category}
                        </div>
                      </div>
                      <Search className="h-4 w-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
}