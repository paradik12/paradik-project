import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradik - Iranian B2B Marketplace",
  description: "Connecting Iranian manufacturers with global buyers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} font-iran`}>
        <LanguageProvider>
          <I18nProvider>{children}</I18nProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

