#!/bin/bash
# Bash Script for Setting Up Local Production Environment
# این اسکریپت برای macOS و Linux است

echo "🚀 Setting up Paradik Project for Local Production Environment"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Step 1: Check if .env exists
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}📝 Creating .env file from .env.example...${NC}"
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${GREEN}✅ .env file created. Please edit it with your configuration.${NC}"
    else
        echo -e "${YELLOW}⚠️  .env.example not found. Creating basic .env file...${NC}"
        cat > .env << EOF
DATABASE_URL="postgresql://paradik_user:paradik_password@localhost:5432/paradik_db?schema=public"
REDIS_URL="redis://localhost:6379"
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change-this-to-a-random-secret-key
EOF
        echo -e "${GREEN}✅ Basic .env file created. Please edit it with your configuration.${NC}"
    fi
    echo ""
    echo -e "${RED}⚠️  IMPORTANT: Edit .env file before continuing!${NC}"
    echo ""
    read -p "Press Enter to continue after editing .env file..."
fi

# Step 2: Check Docker
echo -e "${CYAN}🐳 Checking Docker...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Please install Docker Desktop from https://www.docker.com/products/docker-desktop${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker is installed${NC}"

if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ docker-compose is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ docker-compose is installed${NC}"
echo ""

# Step 3: Start Docker services
echo -e "${CYAN}🐳 Starting Docker services (PostgreSQL and Redis)...${NC}"
docker-compose up -d
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to start Docker services${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker services started${NC}"
echo ""

# Step 4: Wait for services to be ready
echo -e "${CYAN}⏳ Waiting for services to be ready...${NC}"
sleep 5

# Step 5: Install dependencies
echo -e "${CYAN}📦 Installing dependencies...${NC}"
npm ci
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 6: Generate Prisma Client
echo -e "${CYAN}🔧 Generating Prisma Client...${NC}"
npm run db:generate
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to generate Prisma Client${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Prisma Client generated${NC}"
echo ""

# Step 7: Push database schema
echo -e "${CYAN}🗄️  Pushing database schema...${NC}"
npm run db:push
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Warning: Database push failed. Make sure PostgreSQL is running and DATABASE_URL is correct.${NC}"
fi
echo ""

# Step 8: Build project
echo -e "${CYAN}🏗️  Building project for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build successful${NC}"
echo ""

# Step 9: Summary
echo -e "${CYAN}================================${NC}"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${CYAN}================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Make sure .env file is configured correctly"
echo "2. Start the production server: npm run start"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo -e "${YELLOW}Useful commands:${NC}"
echo "  npm run start          - Start production server"
echo "  npm run docker:logs    - View Docker logs"
echo "  npm run docker:ps      - Check Docker services status"
echo "  npm run docker:down    - Stop Docker services"
echo "  npm run db:studio      - Open Prisma Studio"
echo ""

