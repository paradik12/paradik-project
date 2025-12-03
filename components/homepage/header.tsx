"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Search, ShoppingCart, Menu, Globe, ChevronDown, Camera, X, ChevronRight, User, MapPin, DollarSign, Store, FileText } from "lucide-react";
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
  { id: "categories", name: "دسته‌بندی‌ها", nameEn: "Categories", href: "/categories" },
];

// Mock search suggestions
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
  const searchRef = useRef<HTMLDivElement>(null);
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
    console.log("Search:", searchQuery, "Category:", selectedCategory);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm" 
      role="banner"
      dir={direction}
    >
      {/* Top Utility Bar - Similar to Global Sources */}
      <div className="hidden lg:block border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 text-sm">
            <div className="flex items-center gap-6">
              {/* Deliver To */}
              <div className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <MapPin className="h-3.5 w-3.5" />
                <span className="font-medium">{t("common.deliverTo")}: Iran</span>
              </div>
              
              {/* Currency */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                    <DollarSign className="h-3.5 w-3.5" />
                    <span>USD</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRTL ? "start" : "end"} className="min-w-[100px]">
                  <DropdownMenuItem>USD</DropdownMenuItem>
                  <DropdownMenuItem>EUR</DropdownMenuItem>
                  <DropdownMenuItem>IRR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={handleLanguageChange}
                className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{language === "fa" ? "English" : "فارسی"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Global Sources Style with RTL Layout */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Right Side - Logo and Navigation (RTL: سمت راست) */}
            <div className="flex items-center gap-6 flex-shrink-0">
              {/* Logo - Right Side (RTL) */}
              <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="relative">
                  <div 
                    className="font-heading text-2xl md:text-3xl font-bold text-primary transition-all duration-300 group-hover:text-primary/90" 
                    style={{ fontWeight: 900 }}
                  >
                    Paradik
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>

              {/* Categories Navigation Menu - Desktop */}
              <nav className="hidden lg:flex items-center gap-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="font-semibold text-gray-700 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {language === "fa" ? item.name : item.nameEn}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
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

            {/* Center - Search Bar (Global Sources Style) */}
            <div className="hidden lg:flex flex-1 mx-2" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative flex w-full items-center border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:border-primary focus-within:shadow-md transition-all duration-200">
                {/* Category Dropdown */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger
                    className={cn(
                      "h-12 w-40 rounded-l-lg rounded-r-none border-0 bg-gray-50 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors",
                      isRTL && "rounded-l-none rounded-r-lg"
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
                      "h-12 rounded-none border-0 pr-12 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0",
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
                      "absolute top-0 h-12 w-12 hover:bg-gray-50 text-gray-500 hover:text-gray-700",
                      isRTL ? "left-0" : "right-0"
                    )}
                    onClick={() => console.log("Image search")}
                    aria-label="Image search"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                  
                  {/* Auto-suggest Dropdown */}
                  {showSearchSuggestions && searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="py-2">
                        {searchSuggestions.map((suggestion) => (
                          <button
                            key={suggestion.id}
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion.text)}
                            className="w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors duration-150 flex items-center justify-between group"
                          >
                            <div className="flex-1">
                              <div className="text-gray-900 font-medium group-hover:text-primary transition-colors text-sm">
                                {suggestion.text}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {suggestion.category}
                              </div>
                            </div>
                            <Search className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
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
                    "h-12 px-8 rounded-none text-sm font-semibold bg-primary hover:bg-primary/90 text-white transition-all duration-200",
                    isRTL ? "rounded-l-lg rounded-r-none" : "rounded-r-lg rounded-l-none"
                  )}
                  aria-label="Submit search"
                >
                  <Search className="h-4 w-4" />
                  <span className="ml-2">{t("common.search")}</span>
                </Button>
              </form>
            </div>

            {/* Left Side Actions - جستجو، تامین‌کننده شوید، درخواست قیمت، سبد خرید، ورود و ثبت‌نام (RTL: سمت چپ) */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Search Icon/Button for Mobile */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Become a Supplier - Desktop */}
              <Link href="/become-supplier">
                <Button 
                  variant="ghost" 
                  size="default" 
                  className="hidden lg:flex items-center gap-2 font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                >
                  <Store className="h-4 w-4" />
                  <span>{language === "fa" ? "تامین‌کننده شوید" : "Become a Supplier"}</span>
                </Button>
              </Link>

              {/* Request for Quotation - Desktop */}
              <Link href="/rfq">
                <Button 
                  variant="ghost" 
                  size="default" 
                  className="hidden lg:flex items-center gap-2 font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                >
                  <FileText className="h-4 w-4" />
                  <span>{language === "fa" ? "درخواست قیمت" : "Request for Quotation"}</span>
                </Button>
              </Link>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold shadow-sm">
                  0
                </span>
              </Button>

              {/* Sign In / Register - Desktop */}
              <Button 
                variant="ghost" 
                size="default" 
                className="hidden md:flex items-center gap-2 font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>{language === "fa" ? "ورود / ثبت نام" : "Sign In / Register"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-gray-700 font-semibold text-base hover:text-primary hover:bg-gray-50 transition-all duration-200 py-3 px-3 rounded-lg"
                >
                  <span>{language === "fa" ? item.name : item.nameEn}</span>
                  <ChevronRight className={cn("h-5 w-5 text-gray-400", isRTL && "rotate-180")} />
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <div ref={searchRef}>
              <form onSubmit={handleSearch} className="space-y-2">
                <div className="flex w-full items-center gap-0 rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-11 w-28 rounded-none border-r border-gray-300 bg-gray-50 text-sm">
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
                    className="h-11 flex-1 rounded-none border-0 text-sm"
                    dir={direction}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="h-11 w-12 rounded-none bg-primary hover:bg-primary/90"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mobile Auto-suggest Dropdown */}
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="py-2">
                      {searchSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.id}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion.text)}
                          className="w-full text-left px-4 py-2.5 hover:bg-primary/5 transition-colors duration-150 flex items-center justify-between group text-sm"
                        >
                          <div className="flex-1">
                            <div className="text-gray-900 font-medium group-hover:text-primary transition-colors">
                              {suggestion.text}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {suggestion.category}
                            </div>
                          </div>
                          <Search className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-200"
              >
                <User className="h-4 w-4 mr-2" />
                {language === "fa" ? "ورود / ثبت نام" : "Sign In / Register"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search Bar - Always Visible */}
      <div className="lg:hidden border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-3">
          <div ref={searchRef}>
            <form onSubmit={handleSearch}>
              <div className="flex w-full items-center gap-0 rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-10 w-24 rounded-none border-r border-gray-300 bg-gray-50 text-xs">
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
                  className="h-10 w-10 rounded-none bg-primary hover:bg-primary/90"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Auto-suggest Dropdown */}
              {showSearchSuggestions && searchSuggestions.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="py-2">
                    {searchSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion.text)}
                        className="w-full text-left px-4 py-2.5 hover:bg-primary/5 transition-colors duration-150 flex items-center justify-between group text-sm"
                      >
                        <div className="flex-1">
                          <div className="text-gray-900 font-medium group-hover:text-primary transition-colors">
                            {suggestion.text}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {suggestion.category}
                          </div>
                        </div>
                        <Search className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}