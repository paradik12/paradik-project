# راهنمای استقرار Paradik

## استقرار در Vercel

### مراحل استقرار:

1. **آماده‌سازی پروژه:**
   ```bash
   npm install
   npm run build
   ```

2. **اتصال به GitHub:**
   - پروژه را در GitHub push کنید
   - به [Vercel](https://vercel.com) بروید
   - روی "New Project" کلیک کنید
   - Repository خود را انتخاب کنید

3. **پیکربندی Vercel:**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **متغیرهای محیطی (اختیاری):**
   - `NEXT_PUBLIC_API_URL`: آدرس API (در صورت نیاز)
   - `NEXT_PUBLIC_APP_NAME`: نام برنامه

5. **Deploy:**
   - روی "Deploy" کلیک کنید
   - Vercel به صورت خودکار پروژه را build و deploy می‌کند

### GitHub Actions برای Preview

Vercel به صورت خودکار برای هر Pull Request یک preview deployment ایجاد می‌کند.

## استقرار دستی

### با Docker:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### با PM2:

```bash
npm install -g pm2
npm run build
pm2 start npm --name "paradik" -- start
```

## نکات مهم:

1. **Environment Variables:** تمام متغیرهای محیطی را در Vercel تنظیم کنید
2. **Build Optimization:** از `next/image` برای تصاویر استفاده کنید
3. **API Routes:** در صورت نیاز، API routes را در `app/api/` ایجاد کنید
4. **Database:** برای production، یک دیتابیس واقعی اضافه کنید

## پشتیبانی:

برای سوالات و مشکلات، به [GitHub Issues](https://github.com/your-repo/issues) مراجعه کنید.

