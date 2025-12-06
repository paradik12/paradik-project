# فایل .env.example

این فایل باید به نام `.env.example` ذخیره شود. از این فایل به عنوان template برای ایجاد `.env` استفاده کنید.

```env
# ============================================
# Database Configuration
# ============================================
# PostgreSQL connection string
# Format: postgresql://user:password@host:port/database?schema=public
# For Docker Compose: postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public
DATABASE_URL="postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public"

# ============================================
# Redis Configuration
# ============================================
# Redis connection string
# For Docker Compose: redis://localhost:6379
# With password: redis://:paradik_redis_password@localhost:6379
REDIS_URL="redis://localhost:6379"

# ============================================
# Next.js Configuration
# ============================================
# Environment: development | production | test
NODE_ENV=production

# Public app URL (for server-side redirects and API calls)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# ============================================
# NextAuth.js Configuration
# ============================================
# Base URL for NextAuth.js callbacks
NEXTAUTH_URL=http://localhost:3000

# Secret key for JWT encryption (GENERATE A RANDOM SECRET!)
# You can generate one using: openssl rand -base64 32
NEXTAUTH_SECRET=change-this-to-a-random-secret-key-in-production

# ============================================
# Optional: External API Keys
# ============================================
# Example: Stripe, SendGrid, etc.
# STRIPE_SECRET_KEY=sk_test_...
# SENDGRID_API_KEY=SG....

# ============================================
# Optional: Analytics & Monitoring
# ============================================
# SENTRY_DSN=https://...
# GOOGLE_ANALYTICS_ID=G-...

# ============================================
# Notes
# ============================================
# 1. NEVER commit this file with real secrets
# 2. Copy this file to .env and fill in your values
# 3. Generate strong secrets for production
# 4. Use different values for development and production
# 5. Variables starting with NEXT_PUBLIC_ are exposed to the browser
```

## دستورات برای ایجاد فایل

### Windows (PowerShell):
```powershell
Copy-Item ENV_EXAMPLE.md .env.example
```

### macOS/Linux:
```bash
cp ENV_EXAMPLE.md .env.example
```

یا می‌توانید محتوای بالا را مستقیماً در فایل `.env.example` کپی کنید.

