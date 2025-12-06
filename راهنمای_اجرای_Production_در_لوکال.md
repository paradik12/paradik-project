# 🚀 راهنمای اجرای Production در محیط لوکال

این راهنما به شما کمک می‌کند تا پروژه را در محیط لوکال دقیقاً با همان شرایط production سرور اجرا کنید.

---

## 📋 فهرست مطالب

1. [پیش‌نیازها](#پیش‌نیازها)
2. [روش 1: استفاده از Docker Compose (پیشنهادی)](#روش-1-استفاده-از-docker-compose-پیشنهادی)
3. [روش 2: نصب دستی PostgreSQL و Redis](#روش-2-نصب-دستی-postgresql-و-redis)
4. [تنظیم Environment Variables](#تنظیم-environment-variables)
5. [اجرای Production Build](#اجرای-production-build)
6. [بررسی و تایید](#بررسی-و-تایید)
7. [مشکلات رایج و راه حل](#مشکلات-رایج-و-راه-حل)

---

## 🔧 پیش‌نیازها

قبل از شروع، مطمئن شوید که موارد زیر نصب شده باشند:

- ✅ **Node.js 20+** (LTS recommended)
- ✅ **npm 9+** یا **yarn** یا **pnpm**
- ✅ **Docker Desktop** (اگر از روش Docker استفاده می‌کنید)
- ✅ **Git**

---

## 🐳 روش 1: استفاده از Docker Compose (پیشنهادی)

این روش ساده‌ترین و قابل اعتمادترین روش است و محیطی مشابه production ایجاد می‌کند.

### گام 1: ایجاد فایل `docker-compose.yml`

فایل `docker-compose.yml` در ریشه پروژه ایجاد شده است. این فایل شامل:
- PostgreSQL 16
- Redis 7.2

### گام 2: راه‌اندازی سرویس‌ها

```bash
# راه‌اندازی PostgreSQL و Redis
docker-compose up -d

# بررسی وضعیت سرویس‌ها
docker-compose ps

# مشاهده لاگ‌ها
docker-compose logs -f
```

### گام 3: تنظیم Environment Variables

فایل `.env` را در ریشه پروژه ایجاد کنید:

```bash
cp .env.example .env
```

محتویات فایل `.env` را مطابق با تنظیمات Docker تنظیم کنید:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public"

# Redis
REDIS_URL="redis://localhost:6379"

# Next.js
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://localhost:3000

# NextAuth.js (اگر استفاده می‌کنید)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# سایر متغیرهای محیطی
```

### گام 4: راه‌اندازی Database

```bash
# تولید Prisma Client
npm run db:generate

# ایجاد جداول در دیتابیس
npm run db:push

# (اختیاری) مشاهده دیتابیس
npm run db:studio
```

### گام 5: Build و اجرای Production

```bash
# ساخت پروژه برای production
npm run build

# اجرای production server
npm run start
```

پروژه در `http://localhost:3000` در دسترس خواهد بود.

---

## 💻 روش 2: نصب دستی PostgreSQL و Redis

اگر Docker ندارید یا ترجیح می‌دهید سرویس‌ها را دستی نصب کنید:

### نصب PostgreSQL

**Windows:**
```powershell
# دانلود از https://www.postgresql.org/download/windows/
# یا استفاده از Chocolatey
choco install postgresql16

# راه‌اندازی سرویس
net start postgresql-x64-16
```

**macOS:**
```bash
# استفاده از Homebrew
brew install postgresql@16
brew services start postgresql@16
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql-16 postgresql-contrib-16
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

**ایجاد دیتابیس:**
```bash
# ورود به PostgreSQL
sudo -u postgres psql

# در PostgreSQL shell:
CREATE DATABASE paradik_db;
CREATE USER paradik_user WITH PASSWORD 'paradik_password';
GRANT ALL PRIVILEGES ON DATABASE paradik_db TO paradik_user;
\q
```

### نصب Redis

**Windows:**
```powershell
# استفاده از Chocolatey
choco install redis-64

# یا دانلود از https://github.com/microsoftarchive/redis/releases
# راه‌اندازی Redis
redis-server
```

**macOS:**
```bash
brew install redis
brew services start redis
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt install redis-server
sudo systemctl start redis
sudo systemctl enable redis
```

### تنظیم Environment Variables

فایل `.env` را مطابق با تنظیمات محلی خود ایجاد کنید:

```env
DATABASE_URL="postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public"
REDIS_URL="redis://localhost:6379"
NODE_ENV=production
# ...
```

---

## ⚙️ تنظیم Environment Variables

### فایل `.env.example`

برای کمک به دیگران، یک فایل `.env.example` ایجاد کنید:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"

# Redis
REDIS_URL="redis://localhost:6379"

# Next.js
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://localhost:3000

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# API Keys (اگر نیاز دارید)
# API_KEY=your-api-key
```

### تفاوت بین Development و Production

**Development (`NODE_ENV=development`):**
- Hot reload فعال است
- Error overlay نمایش داده می‌شود
- Logging کامل
- Source maps

**Production (`NODE_ENV=production`):**
- کد minify شده
- Optimized images
- Compression فعال
- Security headers
- Performance optimizations

---

## 🏗️ اجرای Production Build

### گام 1: نصب Dependencies

```bash
npm ci  # استفاده از package-lock.json دقیق
```

**تفاوت `npm install` و `npm ci`:**
- `npm ci`: دقیقاً مطابق `package-lock.json` نصب می‌کند (production-like)
- `npm install`: ممکن است نسخه‌ها را به‌روز کند

### گام 2: Type Checking

```bash
npm run type-check
```

### گام 3: Linting

```bash
npm run lint
```

### گام 4: Build

```bash
npm run build
```

این دستور:
- TypeScript را compile می‌کند
- کد را minify می‌کند
- تصاویر را optimize می‌کند
- Static pages را generate می‌کند
- Production bundle ایجاد می‌کند

### گام 5: اجرای Production Server

```bash
npm run start
```

یا برای اجرای روی پورت خاص:

```bash
PORT=3000 npm run start
```

### مشاهده خروجی

```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.1.100:3000

✓ Ready in 2.5s
```

---

## ✅ بررسی و تایید

### 1. بررسی Performance

مرورگر را باز کنید و Developer Tools را فعال کنید:

**Chrome DevTools:**
```
F12 → Network Tab → Disable cache → Reload
```

**بررسی‌ها:**
- ✅ First Contentful Paint (FCP) < 2s
- ✅ Largest Contentful Paint (LCP) < 2.5s
- ✅ Time to Interactive (TTI) < 3.5s
- ✅ Images به صورت WebP/AVIF
- ✅ JavaScript minified شده

### 2. بررسی Security Headers

```bash
# استفاده از curl
curl -I http://localhost:3000
```

بررسی کنید که headers زیر وجود دارند:
- ✅ `X-Frame-Options: SAMEORIGIN`
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `Referrer-Policy: origin-when-cross-origin`

### 3. بررسی Database Connection

```bash
# استفاده از Prisma Studio
npm run db:studio
```

یا از طریق PostgreSQL:

```bash
psql -U paradik_user -d paradik_db -h localhost
```

### 4. بررسی Redis Connection

```bash
redis-cli ping
# باید "PONG" برگرداند
```

### 5. بررسی Environment

در کد، بررسی کنید که `NODE_ENV` به درستی تنظیم شده:

```typescript
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
```

---

## 🔍 مشکلات رایج و راه حل

### مشکل 1: خطای اتصال به Database

```
Error: P1001: Can't reach database server
```

**راه حل:**
1. مطمئن شوید PostgreSQL اجرا شده: `docker-compose ps` یا `systemctl status postgresql`
2. بررسی کنید `DATABASE_URL` در `.env` صحیح است
3. بررسی کنید پورت 5432 باز است
4. در Docker: `docker-compose logs postgres`

### مشکل 2: خطای اتصال به Redis

```
Error: connect ECONNREFUSED 127.0.0.1:6379
```

**راه حل:**
1. مطمئن شوید Redis اجرا شده: `redis-cli ping`
2. بررسی کنید `REDIS_URL` در `.env` صحیح است
3. در Docker: `docker-compose logs redis`

### مشکل 3: Build Fails

```
Error: Module not found
```

**راه حل:**
1. Dependencies را مجدداً نصب کنید: `rm -rf node_modules && npm ci`
2. بررسی کنید همه imports صحیح هستند
3. Type checking را اجرا کنید: `npm run type-check`

### مشکل 4: Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::3000
```

**راه حل:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

یا از پورت دیگر استفاده کنید:
```bash
PORT=3001 npm run start
```

### مشکل 5: Prisma Client Out of Sync

```
Error: PrismaClient is not generated
```

**راه حل:**
```bash
npm run db:generate
```

### مشکل 6: Environment Variables Not Loaded

**راه حل:**
1. مطمئن شوید فایل `.env` در ریشه پروژه است
2. بعد از تغییر `.env`، سرور را restart کنید
3. بررسی کنید متغیرها با `NEXT_PUBLIC_` شروع می‌شوند اگر در client استفاده می‌شوند

---

## 📊 مقایسه Development vs Production

| ویژگی | Development | Production |
|-------|-------------|------------|
| **Hot Reload** | ✅ فعال | ❌ غیرفعال |
| **Source Maps** | ✅ کامل | ⚠️ فقط برای errors |
| **Minification** | ❌ | ✅ فعال |
| **Image Optimization** | ⚠️ محدود | ✅ کامل |
| **Error Overlay** | ✅ نمایش داده می‌شود | ❌ لاگ فقط |
| **Logging** | ✅ verbose | ⚠️ minimal |
| **Caching** | ⚠️ محدود | ✅ کامل |
| **Compression** | ❌ | ✅ فعال |
| **Security Headers** | ⚠️ محدود | ✅ کامل |

---

## 🎯 Best Practices

### 1. همیشه از Production Build برای Testing استفاده کنید

```bash
# قبل از deploy، همیشه در لوکال تست کنید
npm run build && npm run start
```

### 2. Environment Variables را Version Control نکنید

```gitignore
.env
.env.local
.env.production
.env*.local
```

### 3. از `.env.example` استفاده کنید

این فایل باید در Git commit شود و template برای دیگران باشد.

### 4. بررسی Type Safety

```bash
npm run type-check
```

### 5. بررسی Code Quality

```bash
npm run lint
npm run format
```

### 6. Monitoring در Production

برای production واقعی، از ابزارهای monitoring استفاده کنید:
- **Vercel Analytics** (اگر روی Vercel deploy شود)
- **Sentry** برای error tracking
- **LogRocket** برای session replay

---

## 📝 Checklist قبل از Deploy

- [ ] `.env` به درستی تنظیم شده
- [ ] Database schema به‌روز است (`npm run db:push`)
- [ ] Prisma Client generate شده (`npm run db:generate`)
- [ ] Build موفق است (`npm run build`)
- [ ] Production server اجرا می‌شود (`npm run start`)
- [ ] همه صفحات load می‌شوند
- [ ] Images به درستی نمایش داده می‌شوند
- [ ] API routes کار می‌کنند
- [ ] Database queries موفق هستند
- [ ] Redis connection برقرار است
- [ ] Security headers بررسی شده
- [ ] Performance قابل قبول است
- [ ] No console errors

---

## 🔗 منابع بیشتر

- [Next.js Production Deployment](https://nextjs.org/docs/deployment)
- [Prisma Production Guide](https://www.prisma.io/docs/guides/performance-and-optimization)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/docs/)

---

**تهیه شده:** 2024  
**آخرین به‌روزرسانی:** 2024

