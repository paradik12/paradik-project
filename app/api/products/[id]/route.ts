import { NextResponse } from "next/server";
import type { Product } from "@/types";

// Mock data - same as parent route
const mockProducts: Product[] = [
  {
    id: "1",
    title: "پسته درجه یک",
    titleEn: "Premium Pistachios",
    description: "پسته درجه یک ایرانی با کیفیت عالی و طعم بی‌نظیر، مناسب برای صادرات و مصرف داخلی، بسته‌بندی بهداشتی و استاندارد",
    shortDescription: "پسته درجه یک ایرانی با کیفیت عالی",
    shortDescriptionEn: "Premium Iranian pistachios with excellent quality",
    price: 25,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=800&fit=crop",
    ],
    moq: 100,
    sold: 1250,
    supplierId: "s1",
    supplierName: "Iranian Nuts Co.",
    supplierNameFa: "شرکت خشکبار ایرانی",
    supplierLogo: "https://images.unsplash.com/photo-1606312619070-d48b4bdc6e3c?w=200&h=200&fit=crop",
    supplierCountry: "ایران",
    supplierYearsActive: 15,
    supplierProductCount: 1250,
    supplierResponseRate: 98,
    supplierRating: 4.8,
    supplierMainCategories: ["غذا", "خشکبار"],
    supplierDescription: "شرکت خشکبار ایرانی یک تولیدکننده و صادرکننده معتبر پسته و سایر خشکبار با بیش از 15 سال تجربه در صنعت است. ما با کیفیت‌ترین محصولات را با بسته‌بندی استاندارد و بهداشتی به مشتریان داخلی و خارجی ارائه می‌دهیم.",
    supplierDescriptionEn: "Iranian Nuts Company is a trusted producer and exporter of pistachios and other nuts with over 15 years of experience in the industry. We provide the highest quality products with standard and hygienic packaging to domestic and international customers.",
    supplierAddress: "تهران، میدان ونک، خیابان ملاصدرا، خیابان شیخ بهایی شمالی، کوچه سلمان، پلاک 9، واحد 3",
    supplierPhone: "021-5864257  021-5864258",
    supplierWebsite: "irannutsco.com",
    verified: true,
    categoryId: "3",
    rating: 4.8,
    reviewCount: 156,
    pricingTiers: [
      { min: 1, max: 10, price: 25 },
      { min: 11, max: 100, price: 22 },
      { min: 101, price: 20 },
    ],
    variations: [
      {
        name: "مدل",
        nameEn: "Model",
        options: [
          { value: "پسته درجه یک", valueEn: "Premium Grade", selected: true },
          { value: "پسته درجه دو", valueEn: "Standard Grade", selected: false },
        ],
      },
    ],
    shipping: [
      {
        method: "حمل دریایی",
        methodEn: "Ocean freight",
        fee: "از 0.84 دلار به ازای هر کیلوگرم (حداقل 50 کیلوگرم)",
        feeEn: "Starts from US $0.84/kg (min. 50kg)",
        transitTime: "17-24 روز",
        transitTimeEn: "Est. 17-24 days",
        discount: "50 دلار تخفیف برای اولین سفارش",
        discountEn: "$50 off first shipping order",
      },
    ],
    attributes: [
      { name: "وزن", nameEn: "Weight", value: "100 گرم", valueEn: "100g" },
      { name: "مبدا", nameEn: "Origin", value: "ایران", valueEn: "Iran" },
    ],
    fullDescription: `پسته درجه یک ایرانی محصولی با کیفیت عالی و طعم بی‌نظیر است که مناسب برای صادرات و مصرف داخلی می‌باشد.

این محصول با بسته‌بندی بهداشتی و استاندارد ارائه می‌شود و دارای گواهی‌نامه‌های لازم برای صادرات است.

ویژگی‌های محصول:
• کیفیت درجه یک
• طعم عالی
• بسته‌بندی بهداشتی
• مناسب برای صادرات
• دارای گواهی‌نامه‌های لازم`,
    fullDescriptionEn: `Premium Iranian pistachios with excellent quality and unique taste, suitable for export and domestic consumption.

This product comes with hygienic and standard packaging and has the necessary certificates for export.

Product Features:
• Premium quality
• Excellent taste
• Hygienic packaging
• Suitable for export
• With necessary certificates`,
    services: [
      {
        name: "پشتیبانی 24 ساعته",
        nameEn: "24/7 Support",
        description: "پشتیبانی کامل 24 ساعته برای مشتریان",
        descriptionEn: "Full 24/7 support for customers",
        icon: "📞",
      },
      {
        name: "ارسال رایگان",
        nameEn: "Free Shipping",
        description: "ارسال رایگان برای سفارشات بالای 1000 دلار",
        descriptionEn: "Free shipping for orders above $1000",
        icon: "🚚",
      },
      {
        name: "گارانتی کیفیت",
        nameEn: "Quality Guarantee",
        description: "گارانتی 100% کیفیت محصول",
        descriptionEn: "100% quality guarantee",
        icon: "✅",
      },
    ],
    features: [
      {
        title: "کیفیت درجه یک",
        titleEn: "Premium Quality",
        description: "پسته با کیفیت درجه یک و استانداردهای بین‌المللی",
        descriptionEn: "Premium quality pistachios with international standards",
      },
      {
        title: "بسته‌بندی بهداشتی",
        titleEn: "Hygienic Packaging",
        description: "بسته‌بندی بهداشتی و استاندارد مطابق با استانداردهای بین‌المللی",
        descriptionEn: "Hygienic and standard packaging according to international standards",
      },
      {
        title: "قابل اعتماد",
        titleEn: "Reliable",
        description: "تأمین‌کننده معتبر با سابقه طولانی در صادرات",
        descriptionEn: "Reliable supplier with long export history",
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "احمد محمدی",
        rating: 5,
        comment: "کیفیت عالی و طعم بی‌نظیر. کاملاً راضی هستم.",
        commentEn: "Excellent quality and unique taste. Very satisfied.",
        date: "1403/09/15",
        verified: true,
      },
      {
        id: "r2",
        author: "سارا احمدی",
        rating: 4,
        comment: "محصول خوبی بود. قیمت مناسب است.",
        commentEn: "Good product. Price is reasonable.",
        date: "1403/09/10",
        verified: true,
      },
    ],
  },
  {
    id: "7",
    title: "دستگاه برش متالوگرافی اتوماتیک بتا ۲۵۰",
    titleEn: "Beta 250 High Precision Automatic Metallographic Cutting Machine",
    description: "دستگاه برش متالوگرافی اتوماتیک بتا ۲۵۰ با دقت بالا به همراه موتور و پمپ یاتاقانی، تجهیزات متالورژیکی سه محوره",
    shortDescription: "دستگاه برش متالوگرافی اتوماتیک بتا ۲۵۰ با دقت بالا",
    shortDescriptionEn: "Beta 250 High Precision Automatic Metallographic Cutting Machine",
    price: 17350,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop&q=80",
    ],
    moq: 1,
    sold: 45,
    supplierId: "s7",
    supplierName: "Tech Manufacturing Co.",
    supplierNameFa: "شرکت تولیدات فناوری",
    supplierLogo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=200&fit=crop",
    supplierCountry: "ایران",
    supplierYearsActive: 10,
    supplierProductCount: 850,
    supplierResponseRate: 95,
    supplierRating: 4.8,
    supplierMainCategories: ["ماشین‌آلات", "تجهیزات صنعتی"],
    supplierDescription: "شرکت تولیدات فناوری تولیدکننده و توزیع‌کننده ماشین‌آلات و تجهیزات صنعتی پیشرفته است. ما با استفاده از آخرین فناوری‌ها، محصولاتی با کیفیت و دقت بالا تولید می‌کنیم.",
    supplierDescriptionEn: "Tech Manufacturing Co. is a manufacturer and distributor of advanced machinery and industrial equipment. Using the latest technologies, we produce high-quality and high-precision products.",
    supplierAddress: "اصفهان، شهرک صنعتی، خیابان صنعت، بلوک 45، واحد 12",
    supplierPhone: "031-98765432  031-98765433",
    supplierWebsite: "techmanufacturing.com",
    verified: true,
    categoryId: "4",
    rating: 4.8,
    reviewCount: 89,
    pricingTiers: [
      { min: 1, max: 10, price: 17350 },
      { min: 11, max: 100, price: 13880 },
      { min: 101, price: 12150 },
    ],
    variations: [
      {
        name: "شماره مدل",
        nameEn: "Model number",
        options: [
          { value: "Beta250", valueEn: "Beta250", selected: true },
        ],
      },
      {
        name: "محدوده برش مؤثر (میلی‌متر)",
        nameEn: "Effective cutting range (mm)",
        options: [
          { value: "85*250mm", valueEn: "85*250mm", selected: true },
        ],
      },
    ],
    shipping: [
      {
        method: "حمل دریایی",
        methodEn: "Ocean freight via Maersk",
        fee: "از 0.84 دلار به ازای هر کیلوگرم (حداقل 50 کیلوگرم)",
        feeEn: "Starts from US $0.84/kg (min. 50kg), subjected to final delivery",
        transitTime: "17-24 روز",
        transitTimeEn: "Est. 17-24 days",
        discount: "50 دلار تخفیف برای اولین سفارش حمل و نقل",
        discountEn: "$50 off first shipping order",
      },
    ],
    attributes: [
      { name: "قدرت برش", nameEn: "Cutting Power", value: "30 میلی‌متر", valueEn: "30mm" },
      { name: "دقت", nameEn: "Precision", value: "بالا", valueEn: "High" },
      { name: "کنترل", nameEn: "Control", value: "CNC", valueEn: "CNC" },
    ],
    fullDescription: `دستگاه برش متالوگرافی اتوماتیک بتا ۲۵۰ با دقت بالا به همراه موتور و پمپ یاتاقانی، تجهیزات متالورژیکی سه محوره.

این دستگاه با سیستم کنترل CNC پیشرفته و دقت بالای برش تا 30 میلی‌متر طراحی شده است. دستگاه مجهز به سیستم خنک‌کننده خودکار و موتور قدرتمند است.

ویژگی‌های اصلی:
• دقت بالا در برش
• سیستم کنترل CNC
• موتور قدرتمند
• پمپ یاتاقانی
• سیستم خنک‌کننده خودکار
• سه محوره

کاربردها:
• صنایع متالورژی
• آزمایشگاه‌های تحقیقاتی
• صنایع خودروسازی
• صنایع هوافضا`,
    fullDescriptionEn: `Beta 250 High Precision Automatic Metallographic Cutting Machine with bearing motor & pump, 3-axis metallurgical equipment.

This machine is designed with advanced CNC control system and high cutting precision up to 30mm. The machine is equipped with automatic cooling system and powerful motor.

Main Features:
• High cutting precision
• CNC control system
• Powerful motor
• Bearing pump
• Automatic cooling system
• 3-axis

Applications:
• Metallurgical industries
• Research laboratories
• Automotive industries
• Aerospace industries`,
    services: [
      {
        name: "نصب و راه‌اندازی",
        nameEn: "Installation & Setup",
        description: "خدمات نصب و راه‌اندازی توسط کارشناسان ما",
        descriptionEn: "Installation and setup services by our experts",
        icon: "🔧",
      },
      {
        name: "آموزش اپراتور",
        nameEn: "Operator Training",
        description: "آموزش کامل اپراتور برای استفاده از دستگاه",
        descriptionEn: "Complete operator training for device operation",
        icon: "📚",
      },
      {
        name: "خدمات پس از فروش",
        nameEn: "After-Sales Service",
        description: "پشتیبانی کامل و خدمات پس از فروش 24 ماهه",
        descriptionEn: "Full support and 24-month after-sales service",
        icon: "🛠️",
      },
      {
        name: "تضمین کیفیت",
        nameEn: "Quality Warranty",
        description: "گارانتی یکساله و تضمین کیفیت",
        descriptionEn: "One-year warranty and quality guarantee",
        icon: "✅",
      },
    ],
    features: [
      {
        title: "دقت بالا",
        titleEn: "High Precision",
        description: "دقت برش تا 30 میلی‌متر با سیستم کنترل CNC پیشرفته",
        descriptionEn: "Cutting precision up to 30mm with advanced CNC control system",
      },
      {
        title: "سیستم خنک‌کننده",
        titleEn: "Cooling System",
        description: "سیستم خنک‌کننده خودکار برای عملکرد بهتر",
        descriptionEn: "Automatic cooling system for better performance",
      },
      {
        title: "سه محوره",
        titleEn: "3-Axis",
        description: "حرکت سه محوره برای برش در تمام جهات",
        descriptionEn: "3-axis movement for cutting in all directions",
      },
      {
        title: "موتور قدرتمند",
        titleEn: "Powerful Motor",
        description: "موتور قدرتمند و پمپ یاتاقانی برای عملکرد بهتر",
        descriptionEn: "Powerful motor and bearing pump for better performance",
      },
    ],
    reviews: [
      {
        id: "r3",
        author: "محمد رضایی",
        rating: 5,
        comment: "دستگاه عالی است. دقت برش فوق‌العاده است و عملکرد خوبی دارد.",
        commentEn: "Excellent machine. Cutting precision is superb and performance is great.",
        date: "1403/09/12",
        verified: true,
      },
      {
        id: "r4",
        author: "علی کریمی",
        rating: 4,
        comment: "کیفیت خوبی دارد. نصب و راه‌اندازی سریع بود.",
        commentEn: "Good quality. Installation and setup were quick.",
        date: "1403/09/05",
        verified: true,
      },
    ],
  },
  {
    id: "2",
    title: "زعفران اصل",
    titleEn: "Authentic Saffron",
    description: "زعفران اصل قائنات با عیار بالا و رنگ طبیعی، مناسب برای مصارف غذایی و دارویی، بسته‌بندی در ظروف شیشه‌ای محافظ",
    shortDescription: "زعفران اصل قائنات با عیار بالا",
    shortDescriptionEn: "Authentic Qaen saffron with high grade",
    price: 45,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop",
    ],
    moq: 50,
    sold: 890,
    supplierId: "s2",
    supplierName: "Saffron Export",
    supplierNameFa: "صادرات زعفران",
    supplierLogo: "https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=200&h=200&fit=crop",
    supplierCountry: "ایران",
    supplierYearsActive: 12,
    supplierProductCount: 890,
    supplierResponseRate: 95,
    supplierRating: 4.9,
    supplierMainCategories: ["غذا", "ادویه‌جات"],
    supplierDescription: "شرکت صادرات زعفران یکی از معتبرترین تولیدکنندگان و صادرکنندگان زعفران اصل قائنات در ایران است. با بیش از 12 سال تجربه در تولید و صادرات زعفران با کیفیت، ما بهترین محصولات را به مشتریان جهانی ارائه می‌دهیم.",
    supplierDescriptionEn: "Saffron Export Company is one of the most trusted producers and exporters of authentic Qaen saffron in Iran. With over 12 years of experience in producing and exporting quality saffron, we provide the best products to global customers.",
    supplierAddress: "مشهد، بلوار وکیل‌آباد، خیابان زعفران، پلاک 456، طبقه 2",
    supplierPhone: "051-23456789  051-23456790",
    supplierWebsite: "saffronexport.ir",
    verified: true,
    categoryId: "3",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "3",
    title: "فرش دستباف",
    titleEn: "Handmade Carpet",
    description: "فرش دستباف ایرانی با طرح‌های اصیل و رنگ‌های طبیعی، بافت با پشم مرغوب و گره‌های محکم، مناسب برای دکوراسیون لوکس",
    shortDescription: "فرش دستباف ایرانی با طرح‌های اصیل",
    shortDescriptionEn: "Iranian handmade carpet with authentic designs",
    price: 350,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586076421003-69cc3ae32d0d?w=800&h=800&fit=crop",
    ],
    moq: 1,
    sold: 45,
    supplierId: "s3",
    supplierName: "Persian Carpets",
    supplierNameFa: "فرش‌های دستباف ایرانی",
    supplierLogo: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=200&fit=crop",
    supplierCountry: "ایران",
    supplierYearsActive: 20,
    supplierProductCount: 450,
    supplierResponseRate: 92,
    supplierRating: 5.0,
    supplierMainCategories: ["خانه", "فرش"],
    supplierDescription: "کارگاه فرش‌های دستباف ایرانی با بیش از 20 سال سابقه در تولید و بافت فرش‌های دستباف اصیل ایرانی. ما با استفاده از پشم مرغوب و رنگ‌های طبیعی، فرش‌هایی با کیفیت و ماندگاری بالا تولید می‌کنیم که نشان‌دهنده هنر و فرهنگ غنی ایرانی است.",
    supplierDescriptionEn: "Persian Handmade Carpets Workshop has over 20 years of experience in producing and weaving authentic Iranian handmade carpets. Using premium wool and natural dyes, we produce high-quality and durable carpets that represent the rich art and culture of Iran.",
    supplierAddress: "کاشان، خیابان فاضل نراقی، کارگاه فرش دستباف، پلاک 789",
    supplierPhone: "036-34567890",
    supplierWebsite: "persiancarpets.ir",
    verified: true,
    categoryId: "6",
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: "4",
    title: "عسل طبیعی",
    titleEn: "Natural Honey",
    description: "عسل طبیعی خالص بدون افزودنی و شکر، استخراج شده از کندوهای ارگانیک، سرشار از ویتامین و آنزیم‌های مفید برای سلامت",
    shortDescription: "عسل طبیعی خالص بدون افزودنی",
    shortDescriptionEn: "Pure natural honey without additives",
    price: 18,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587047006747-5e68712c7d5a?w=800&h=800&fit=crop",
    ],
    moq: 24,
    sold: 670,
    supplierId: "s4",
    supplierName: "Honey Farm",
    supplierNameFa: "مزرعه عسل",
    supplierLogo: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop",
    supplierCountry: "ایران",
    supplierYearsActive: 8,
    supplierProductCount: 320,
    supplierResponseRate: 88,
    supplierRating: 4.6,
    supplierMainCategories: ["غذا", "عسل"],
    supplierDescription: "مزرعه عسل یک تولیدکننده عسل طبیعی و ارگانیک با بیش از 8 سال تجربه است. ما عسل را به صورت سنتی و بدون استفاده از مواد شیمیایی تولید می‌کنیم و کیفیت و خلوص محصولات خود را تضمین می‌کنیم.",
    supplierDescriptionEn: "Honey Farm is a producer of natural and organic honey with over 8 years of experience. We produce honey traditionally without using chemicals and guarantee the quality and purity of our products.",
    supplierAddress: "اردبیل، شهرستان نمین، روستای کندوان، مزرعه عسل",
    supplierPhone: "045-45678901",
    supplierWebsite: "honeyfarm.ir",
    verified: false,
    categoryId: "3",
    rating: 4.6,
    reviewCount: 89,
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get product from mock data or fetch from route.ts
    const product = mockProducts.find((p) => p.id === params.id);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

