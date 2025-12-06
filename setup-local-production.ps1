# PowerShell Script for Setting Up Local Production Environment
# این اسکریپت برای Windows PowerShell است

Write-Host "🚀 Setting up Paradik Project for Local Production Environment" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "📝 Creating .env file from .env.example..." -ForegroundColor Yellow
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "✅ .env file created. Please edit it with your configuration." -ForegroundColor Green
    } else {
        Write-Host "⚠️  .env.example not found. Creating basic .env file..." -ForegroundColor Yellow
        @"
DATABASE_URL="postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public"
REDIS_URL="redis://localhost:6379"
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change-this-to-a-random-secret-key
"@ | Out-File -FilePath ".env" -Encoding utf8
        Write-Host "✅ Basic .env file created. Please edit it with your configuration." -ForegroundColor Green
    }
    Write-Host ""
    Write-Host "⚠️  IMPORTANT: Edit .env file before continuing!" -ForegroundColor Red
    Write-Host ""
    $continue = Read-Host "Press Enter to continue after editing .env file"
}

# Step 2: Check Docker
Write-Host "🐳 Checking Docker..." -ForegroundColor Cyan
$dockerInstalled = Get-Command docker -ErrorAction SilentlyContinue
if (-not $dockerInstalled) {
    Write-Host "❌ Docker is not installed. Please install Docker Desktop from https://www.docker.com/products/docker-desktop" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Docker is installed" -ForegroundColor Green

$dockerComposeInstalled = Get-Command docker-compose -ErrorAction SilentlyContinue
if (-not $dockerComposeInstalled) {
    Write-Host "❌ docker-compose is not installed." -ForegroundColor Red
    exit 1
}
Write-Host "✅ docker-compose is installed" -ForegroundColor Green
Write-Host ""

# Step 3: Start Docker services
Write-Host "🐳 Starting Docker services (PostgreSQL and Redis)..." -ForegroundColor Cyan
docker-compose up -d
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to start Docker services" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Docker services started" -ForegroundColor Green
Write-Host ""

# Step 4: Wait for services to be ready
Write-Host "⏳ Waiting for services to be ready..." -ForegroundColor Cyan
Start-Sleep -Seconds 5

# Step 5: Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Step 6: Generate Prisma Client
Write-Host "🔧 Generating Prisma Client..." -ForegroundColor Cyan
npm run db:generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to generate Prisma Client" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Prisma Client generated" -ForegroundColor Green
Write-Host ""

# Step 7: Push database schema
Write-Host "🗄️  Pushing database schema..." -ForegroundColor Cyan
npm run db:push
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Warning: Database push failed. Make sure PostgreSQL is running and DATABASE_URL is correct." -ForegroundColor Yellow
}
Write-Host ""

# Step 8: Build project
Write-Host "🏗️  Building project for production..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Step 9: Summary
Write-Host "=" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "=" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Make sure .env file is configured correctly" -ForegroundColor White
Write-Host "2. Start the production server: npm run start" -ForegroundColor White
Write-Host "3. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Yellow
Write-Host "  npm run start          - Start production server" -ForegroundColor White
Write-Host "  npm run docker:logs    - View Docker logs" -ForegroundColor White
Write-Host "  npm run docker:ps      - Check Docker services status" -ForegroundColor White
Write-Host "  npm run docker:down    - Stop Docker services" -ForegroundColor White
Write-Host "  npm run db:studio      - Open Prisma Studio" -ForegroundColor White
Write-Host ""

