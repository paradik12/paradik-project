import { Product, Manufacturer, Category } from '@/types'

export const categories: Category[] = [
  {
    id: '1',
    slug: 'plastic',
    name: { fa: 'پلاستیک', ar: 'بلاستيك' },
    icon: '🧴',
    productCount: 245,
    description: {
      fa: 'محصولات پلاستیکی صنعتی و خانگی با کیفیت بالا',
      ar: 'منتجات بلاستيكية صناعية ومنزلية عالية الجودة',
    },
  },
  {
    id: '2',
    slug: 'home-appliances',
    name: { fa: 'لوازم خانگی', ar: 'أدوات منزلية' },
    icon: '🏠',
    productCount: 189,
    description: {
      fa: 'تجهیزات و لوازم خانگی مدرن و با کیفیت',
      ar: 'معدات وأدوات منزلية حديثة وعالية الجودة',
    },
  },
  {
    id: '3',
    slug: 'apparel',
    name: { fa: 'پوشاک', ar: 'ملابس' },
    icon: '👕',
    productCount: 156,
    description: {
      fa: 'پوشاک و منسوجات برای تمام سنین',
      ar: 'ملابس ومنسوجات لجميع الأعمار',
    },
  },
  {
    id: '4',
    slug: 'food',
    name: { fa: 'مواد غذایی', ar: 'مواد غذائية' },
    icon: '🍎',
    productCount: 203,
    description: {
      fa: 'مواد غذایی و نوشیدنی با استانداردهای بهداشتی',
      ar: 'مواد غذائية ومشروبات بمعايير صحية',
    },
  },
  {
    id: '5',
    slug: 'machinery',
    name: { fa: 'ماشین‌آلات', ar: 'آلات' },
    icon: '⚙️',
    productCount: 167,
    description: {
      fa: 'ماشین‌آلات صنعتی و تجهیزات تولیدی',
      ar: 'آلات صناعية ومعدات إنتاجية',
    },
  },
  {
    id: '6',
    slug: 'electronics',
    name: { fa: 'الکترونیک', ar: 'إلكترونيات' },
    icon: '⚡',
    productCount: 298,
    description: {
      fa: 'تجهیزات الکترونیکی و دیجیتال',
      ar: 'معدات إلكترونية ورقمية',
    },
  },
  {
    id: '7',
    slug: 'construction',
    name: { fa: 'ساختمان', ar: 'بناء' },
    icon: '🏗️',
    productCount: 234,
    description: {
      fa: 'مصالح ساختمانی و تجهیزات ساخت و ساز',
      ar: 'مواد بناء ومعدات البناء',
    },
  },
  {
    id: '8',
    slug: 'textiles',
    name: { fa: 'منسوجات', ar: 'منسوجات' },
    icon: '🧵',
    productCount: 178,
    description: {
      fa: 'پارچه و منسوجات صنعتی',
      ar: 'أقمشة ومنسوجات صناعية',
    },
  },
  {
    id: '9',
    slug: 'chemicals',
    name: { fa: 'مواد شیمیایی', ar: 'مواد كيميائية' },
    icon: '🧪',
    productCount: 145,
    description: {
      fa: 'مواد شیمیایی صنعتی و آزمایشگاهی',
      ar: 'مواد كيميائية صناعية ومخبرية',
    },
  },
  {
    id: '10',
    slug: 'automotive',
    name: { fa: 'خودرو', ar: 'سيارات' },
    icon: '🚗',
    productCount: 267,
    description: {
      fa: 'قطعات و لوازم یدکی خودرو',
      ar: 'قطع غيار ولوازم سيارات',
    },
  },
  {
    id: '11',
    slug: 'packaging',
    name: { fa: 'بسته‌بندی', ar: 'تغليف' },
    icon: '📦',
    productCount: 198,
    description: {
      fa: 'مواد و تجهیزات بسته‌بندی',
      ar: 'مواد ومعدات التغليف',
    },
  },
  {
    id: '12',
    slug: 'tools',
    name: { fa: 'ابزار', ar: 'أدوات' },
    icon: '🔧',
    productCount: 312,
    description: {
      fa: 'ابزار و تجهیزات صنعتی',
      ar: 'أدوات ومعدات صناعية',
    },
  },
]

export const manufacturers: Manufacturer[] = [
  {
    id: 'm1',
    name: { fa: 'صنایع الکترونیک تهران', ar: 'صناعات إلكترونيات طهران' },
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    description: {
      fa: 'تولیدکننده پیشرو در زمینه تجهیزات الکترونیکی با بیش از 20 سال تجربه',
      ar: 'مصنع رائد في مجال المعدات الإلكترونية مع أكثر من 20 عامًا من الخبرة',
    },
    category: ['الکترونیک', 'ماشین‌آلات'],
    location: { city: 'تهران', country: 'ایران' },
    rating: 4.8,
    reviewCount: 324,
    productCount: 45,
    verified: true,
    badges: ['Verified', 'Top Seller', 'Fast Shipping'],
    contact: {
      email: 'info@tehran-electronics.com',
      phone: '+98-21-12345678',
      website: 'https://tehran-electronics.com',
    },
    trustIndicators: {
      yearsInBusiness: 20,
      totalOrders: 15420,
      responseRate: 98,
    },
  },
  {
    id: 'm2',
    name: { fa: 'کارخانه پوشاک اصفهان', ar: 'مصنع الملابس أصفهان' },
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200',
    description: {
      fa: 'تولیدکننده پوشاک با کیفیت بالا برای بازارهای داخلی و خارجی',
      ar: 'مصنع ملابس عالية الجودة للأسواق المحلية والدولية',
    },
    category: ['پوشاک'],
    location: { city: 'اصفهان', country: 'ایران' },
    rating: 4.6,
    reviewCount: 189,
    productCount: 32,
    verified: true,
    badges: ['Verified', 'Quality Assured'],
    contact: {
      email: 'contact@isfahan-apparel.com',
      phone: '+98-31-98765432',
    },
    trustIndicators: {
      yearsInBusiness: 15,
      totalOrders: 8920,
      responseRate: 95,
    },
  },
  {
    id: 'm3',
    name: { fa: 'شرکت پلاستیک پارس', ar: 'شركة البلاستيك فارس' },
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200',
    description: {
      fa: 'تولیدکننده محصولات پلاستیکی صنعتی و خانگی با استانداردهای بین‌المللی',
      ar: 'مصنع المنتجات البلاستيكية الصناعية والمنزلية بمعايير دولية',
    },
    category: ['پلاستیک', 'لوازم خانگی'],
    location: { city: 'شیراز', country: 'ایران' },
    rating: 4.7,
    reviewCount: 267,
    productCount: 58,
    verified: true,
    badges: ['Verified', 'ISO Certified'],
    contact: {
      email: 'sales@pars-plastic.com',
      phone: '+98-71-12345678',
      website: 'https://pars-plastic.com',
    },
    trustIndicators: {
      yearsInBusiness: 18,
      totalOrders: 12350,
      responseRate: 97,
    },
  },
  {
    id: 'm4',
    name: { fa: 'کارخانه مواد غذایی کیمیا', ar: 'مصنع المواد الغذائية كيميا' },
    logo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200',
    description: {
      fa: 'تولیدکننده مواد غذایی با کیفیت و بهداشتی برای بازارهای داخلی و صادراتی',
      ar: 'مصنع مواد غذائية عالية الجودة والصحية للأسواق المحلية والتصدير',
    },
    category: ['مواد غذایی'],
    location: { city: 'مشهد', country: 'ایران' },
    rating: 4.9,
    reviewCount: 412,
    productCount: 67,
    verified: true,
    badges: ['Verified', 'Halal Certified', 'Top Seller'],
    contact: {
      email: 'info@kimia-food.com',
      phone: '+98-51-12345678',
    },
    trustIndicators: {
      yearsInBusiness: 25,
      totalOrders: 18920,
      responseRate: 99,
    },
  },
  {
    id: 'm5',
    name: { fa: 'صنایع ماشین‌آلات صنعتی', ar: 'صناعات الآلات الصناعية' },
    logo: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200',
    description: {
      fa: 'تولیدکننده ماشین‌آلات صنعتی و تجهیزات تولیدی با تکنولوژی روز',
      ar: 'مصنع الآلات الصناعية ومعدات الإنتاج بتكنولوجيا حديثة',
    },
    category: ['ماشین‌آلات'],
    location: { city: 'تبریز', country: 'ایران' },
    rating: 4.8,
    reviewCount: 298,
    productCount: 42,
    verified: true,
    badges: ['Verified', 'Innovation Award'],
    contact: {
      email: 'sales@industrial-machinery.com',
      phone: '+98-41-12345678',
      website: 'https://industrial-machinery.com',
    },
    trustIndicators: {
      yearsInBusiness: 22,
      totalOrders: 11230,
      responseRate: 96,
    },
  },
  {
    id: 'm6',
    name: { fa: 'کارخانه لوازم خانگی سینا', ar: 'مصنع الأدوات المنزلية سينا' },
    logo: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200',
    description: {
      fa: 'تولیدکننده لوازم خانگی مدرن و با کیفیت برای زندگی روزمره',
      ar: 'مصنع أدوات منزلية حديثة وعالية الجودة للحياة اليومية',
    },
    category: ['لوازم خانگی'],
    location: { city: 'قم', country: 'ایران' },
    rating: 4.5,
    reviewCount: 156,
    productCount: 28,
    verified: true,
    badges: ['Verified'],
    contact: {
      email: 'info@sina-home.com',
      phone: '+98-25-12345678',
    },
    trustIndicators: {
      yearsInBusiness: 12,
      totalOrders: 6540,
      responseRate: 94,
    },
  },
]

export const products: Product[] = [
  {
    id: 'p1',
    name: {
      fa: 'برد الکترونیکی هوشمند',
      ar: 'لوحة إلكترونية ذكية',
      en: 'Smart Electronic Board',
    },
    description: {
      fa: 'برد الکترونیکی پیشرفته با قابلیت‌های هوشمند برای استفاده در صنایع مختلف',
      ar: 'لوحة إلكترونية متقدمة مع إمكانيات ذكية للاستخدام في الصناعات المختلفة',
      en: 'Advanced electronic board with smart capabilities for various industries',
    },
    price: {
      irr: 1500000,
      aed: 150,
      sar: 150,
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    ],
    category: 'الکترونیک',
    manufacturerId: 'm1',
    manufacturerName: { fa: 'صنایع الکترونیک تهران', ar: 'صناعات إلكترونيات طهران' },
    moq: 10,
    rating: 4.7,
    reviewCount: 89,
    specifications: {
      'ولتاژ': '12V',
      'جریان': '5A',
      'ابعاد': '10x15cm',
    },
    inStock: true,
    createdAt: '2024-01-15',
  },
  {
    id: 'p2',
    name: {
      fa: 'تی‌شرت پنبه‌ای با کیفیت',
      ar: 'قميص قطني عالي الجودة',
      en: 'Premium Cotton T-Shirt',
    },
    description: {
      fa: 'تی‌شرت 100% پنبه با طراحی مدرن و دوخت با کیفیت',
      ar: 'قميص 100% قطن بتصميم عصري وخياطة عالية الجودة',
      en: '100% cotton t-shirt with modern design and quality stitching',
    },
    price: {
      irr: 250000,
      aed: 25,
      sar: 25,
    },
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'پوشاک',
    manufacturerId: 'm2',
    manufacturerName: { fa: 'کارخانه پوشاک اصفهان', ar: 'مصنع الملابس أصفهان' },
    moq: 50,
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    createdAt: '2024-01-20',
  },
  {
    id: 'p3',
    name: {
      fa: 'بطری پلاستیکی صنعتی',
      ar: 'زجاجة بلاستيكية صناعية',
      en: 'Industrial Plastic Bottle',
    },
    description: {
      fa: 'بطری پلاستیکی مقاوم و با کیفیت برای استفاده در صنایع غذایی و شیمیایی',
      ar: 'زجاجة بلاستيكية مقاومة وعالية الجودة للاستخدام في الصناعات الغذائية والكيميائية',
      en: 'Durable and high-quality plastic bottle for food and chemical industries',
    },
    price: {
      irr: 85000,
      aed: 8.5,
      sar: 8.5,
    },
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'پلاستیک',
    manufacturerId: 'm3',
    manufacturerName: { fa: 'شرکت پلاستیک پارس', ar: 'شركة البلاستيك فارس' },
    moq: 100,
    rating: 4.6,
    reviewCount: 124,
    inStock: true,
    createdAt: '2024-01-18',
  },
  {
    id: 'p4',
    name: {
      fa: 'موتور الکتریکی صنعتی',
      ar: 'محرك كهربائي صناعي',
      en: 'Industrial Electric Motor',
    },
    description: {
      fa: 'موتور الکتریکی قدرتمند برای استفاده در صنایع سنگین',
      ar: 'محرك كهربائي قوي للاستخدام في الصناعات الثقيلة',
      en: 'Powerful electric motor for heavy industry use',
    },
    price: {
      irr: 8500000,
      aed: 850,
      sar: 850,
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
    category: 'ماشین‌آلات',
    manufacturerId: 'm5',
    manufacturerName: { fa: 'صنایع ماشین‌آلات صنعتی', ar: 'صناعات الآلات الصناعية' },
    moq: 5,
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    createdAt: '2024-01-18',
  },
  {
    id: 'p5',
    name: {
      fa: 'کفش چرمی مردانه',
      ar: 'حذاء جلدي رجالي',
      en: 'Men Leather Shoes',
    },
    description: {
      fa: 'کفش چرمی با کیفیت بالا و طراحی کلاسیک',
      ar: 'حذاء جلدي عالي الجودة بتصميم كلاسيكي',
      en: 'High quality leather shoes with classic design',
    },
    price: {
      irr: 1200000,
      aed: 120,
      sar: 120,
    },
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    category: 'پوشاک',
    manufacturerId: 'm2',
    manufacturerName: { fa: 'کارخانه پوشاک اصفهان', ar: 'مصنع الملابس أصفهان' },
    moq: 20,
    rating: 4.4,
    reviewCount: 98,
    inStock: true,
    createdAt: '2024-01-22',
  },
  {
    id: 'p6',
    name: {
      fa: 'روغن خوراکی صنعتی',
      ar: 'زيت طعامي صناعي',
      en: 'Industrial Cooking Oil',
    },
    description: {
      fa: 'روغن خوراکی با کیفیت بالا و استانداردهای بهداشتی برای استفاده در صنایع غذایی',
      ar: 'زيت طعامي عالي الجودة ومعايير صحية للاستخدام في الصناعات الغذائية',
      en: 'High-quality cooking oil with health standards for food industries',
    },
    price: {
      irr: 450000,
      aed: 45,
      sar: 45,
    },
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd8692?w=500',
    category: 'مواد غذایی',
    manufacturerId: 'm4',
    manufacturerName: { fa: 'کارخانه مواد غذایی کیمیا', ar: 'مصنع المواد الغذائية كيميا' },
    moq: 50,
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
    createdAt: '2024-01-25',
  },
  {
    id: 'p7',
    name: {
      fa: 'ماشین ظرفشویی صنعتی',
      ar: 'غسالة أطباق صناعية',
      en: 'Industrial Dishwasher',
    },
    description: {
      fa: 'ماشین ظرفشویی صنعتی با ظرفیت بالا برای رستوران‌ها و هتل‌ها',
      ar: 'غسالة أطباق صناعية عالية السعة للمطاعم والفنادق',
      en: 'High-capacity industrial dishwasher for restaurants and hotels',
    },
    price: {
      irr: 12500000,
      aed: 1250,
      sar: 1250,
    },
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
    category: 'لوازم خانگی',
    manufacturerId: 'm6',
    manufacturerName: { fa: 'کارخانه لوازم خانگی سینا', ar: 'مصنع الأدوات المنزلية سينا' },
    moq: 2,
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    createdAt: '2024-01-28',
  },
  {
    id: 'p8',
    name: {
      fa: 'کیسه پلاستیکی زباله',
      ar: 'كيس بلاستيكي للنفايات',
      en: 'Plastic Garbage Bag',
    },
    description: {
      fa: 'کیسه پلاستیکی مقاوم و با کیفیت برای جمع‌آوری زباله',
      ar: 'كيس بلاستيكي مقاوم وعالي الجودة لجمع النفايات',
      en: 'Durable and high-quality plastic bag for waste collection',
    },
    price: {
      irr: 120000,
      aed: 12,
      sar: 12,
    },
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'پلاستیک',
    manufacturerId: 'm3',
    manufacturerName: { fa: 'شرکت پلاستیک پارس', ar: 'شركة البلاستيك فارس' },
    moq: 200,
    rating: 4.3,
    reviewCount: 145,
    inStock: true,
    createdAt: '2024-02-01',
  },
  {
    id: 'p9',
    name: {
      fa: 'شیر برقی صنعتی',
      ar: 'صمام كهربائي صناعي',
      en: 'Industrial Solenoid Valve',
    },
    description: {
      fa: 'شیر برقی صنعتی با عملکرد سریع و دقیق برای سیستم‌های هیدرولیک',
      ar: 'صمام كهربائي صناعي بأداء سريع ودقيق لأنظمة هيدروليكية',
      en: 'Industrial solenoid valve with fast and precise operation for hydraulic systems',
    },
    price: {
      irr: 3200000,
      aed: 320,
      sar: 320,
    },
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500',
    category: 'ماشین‌آلات',
    manufacturerId: 'm5',
    manufacturerName: { fa: 'صنایع ماشین‌آلات صنعتی', ar: 'صناعات الآلات الصناعية' },
    moq: 10,
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    createdAt: '2024-02-05',
  },
  {
    id: 'p10',
    name: {
      fa: 'یخچال صنعتی',
      ar: 'ثلاجة صناعية',
      en: 'Industrial Refrigerator',
    },
    description: {
      fa: 'یخچال صنعتی با ظرفیت بالا و مصرف انرژی بهینه برای رستوران‌ها',
      ar: 'ثلاجة صناعية عالية السعة واستهلاك طاقة محسّن للمطاعم',
      en: 'High-capacity industrial refrigerator with optimized energy consumption for restaurants',
    },
    price: {
      irr: 18500000,
      aed: 1850,
      sar: 1850,
    },
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
    category: 'لوازم خانگی',
    manufacturerId: 'm6',
    manufacturerName: { fa: 'کارخانه لوازم خانگی سینا', ar: 'مصنع الأدوات المنزلية سينا' },
    moq: 1,
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
    createdAt: '2024-02-10',
  },
]
