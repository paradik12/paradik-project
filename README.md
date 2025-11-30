# Paradik - Iranian B2B Marketplace

A modern B2B marketplace platform connecting Iranian manufacturers with global buyers, inspired by Alibaba.com and MadeInChina.com.

## 🎯 Current Status

**Milestone: Homepage Development**

This project is currently in the **homepage development phase**. Only the homepage has been built and is ready for review. All internal pages are placeholders and will be developed after homepage approval.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript 5.6+** - Type safety
- **TailwindCSS 3.4+** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Zustand** - State management
- **i18next** - Internationalization
- **Lucide Icons** - Icon library

### Backend
- **Next.js 15 API Routes** - Server endpoints
- **Prisma 5+** - ORM
- **PostgreSQL 16** - Database
- **Redis 7.2** - Caching
- **BullMQ** - Job queue
- **NextAuth.js v5** - Authentication

## 📁 Project Structure

```
paradik-project/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (mock data for homepage)
│   ├── products/          # Placeholder pages (not built yet)
│   ├── suppliers/         # Placeholder pages (not built yet)
│   ├── rfq/               # Placeholder pages (not built yet)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage (✅ Built)
│   └── globals.css        # Global styles
├── components/
│   ├── homepage/          # Homepage components
│   │   ├── header.tsx
│   │   ├── hero-carousel.tsx
│   │   ├── categories-section.tsx
│   │   ├── featured-products.tsx
│   │   ├── featured-suppliers.tsx
│   │   ├── rfq-cta.tsx
│   │   └── footer.tsx
│   ├── providers/         # Context providers
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities
│   ├── utils.ts
│   ├── i18n.ts
│   └── prisma.ts
├── locales/               # Translation files
│   ├── fa.json           # Farsi (RTL)
│   └── en.json           # English (LTR)
├── prisma/
│   └── schema.prisma     # Database schema (placeholder)
├── store/                 # Zustand stores
│   └── language-store.ts
└── types/                 # TypeScript types
    └── index.ts
```

## 🌐 Features

### Homepage (✅ Implemented)
- **Header** with mega search bar, language switcher, currency selector
- **Hero Carousel** with auto-rotation and navigation
- **Categories Section** with 8 main categories
- **Featured Products** grid with product cards
- **Featured Suppliers** with supplier profiles
- **RFQ CTA** section for quotation requests
- **Footer** with all future page links

### Internationalization
- **Farsi (RTL)** - Primary language
- **English (LTR)** - Secondary language
- Full RTL/LTR support with automatic direction switching
- Language persistence in localStorage

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Touch-friendly interactions

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 20+ LTS
- npm 9+
- PostgreSQL 16 (for future database setup)
- Redis 7.2 (for future caching)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paradik-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration values.

4. **Set up Prisma (for future use)**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🔗 Internal Pages (Placeholders)

The following pages are referenced in the homepage but **not yet built**:

- `/products` - Product listing page
- `/products/[id]` - Product detail page
- `/suppliers` - Supplier listing page
- `/suppliers/[id]` - Supplier profile page
- `/rfq` - RFQ form page
- `/dashboard` - User dashboard
- `/subscription` - Subscription page
- `/about` - About us page
- `/contact` - Contact page

These pages will be developed after homepage approval.

## 🎨 Design System

The homepage follows an Alibaba-style enterprise B2B design with:
- Modern Persian and English fonts (Vazirmatn)
- Full RTL support for Farsi
- Smooth animations and transitions
- High-quality product images
- Professional color scheme

## 📊 API Endpoints (Mock Data)

Currently using mock data for homepage:

- `GET /api/products` - Get products list
- `GET /api/categories` - Get categories list
- `GET /api/suppliers` - Get suppliers list

These will be replaced with real database queries after homepage approval.

## 🔒 Security Notes

- Environment variables are not committed
- Database credentials should be kept secure
- API routes will include authentication after homepage approval

## 📄 License

Private project - All rights reserved

## 👥 Development Team

This project follows a structured workflow:
1. **Sonnet** - UI/UX planning and QA
2. **v0** - Component generation
3. **Cursor** - Integration and implementation
4. **Sonnet** - Final QA and review

## 🚧 Next Steps (After Homepage Approval)

1. Build internal pages (products, suppliers, RFQ, etc.)
2. Implement authentication system
3. Set up real database connections
4. Add admin dashboard
5. Implement subscription system
6. Add payment integration
7. Set up email notifications
8. Add search functionality
9. Implement user reviews and ratings
10. Add analytics and reporting

---

**Note**: This is a milestone-based development. The homepage must be fully approved before proceeding to internal pages development.

