# اسکریپت رفع مشکل تصاویر
Write-Host "در حال پاک کردن کش Next.js..." -ForegroundColor Yellow

# پاک کردن پوشه .next
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "پوشه .next پاک شد ✓" -ForegroundColor Green
} else {
    Write-Host "پوشه .next موجود نیست" -ForegroundColor Gray
}

# پاک کردن پوشه node_modules/.cache
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache"
    Write-Host "کش node_modules پاک شد ✓" -ForegroundColor Green
}

Write-Host "`nلطفاً سرور را مجدداً اجرا کنید:" -ForegroundColor Cyan
Write-Host "npm run dev" -ForegroundColor White










