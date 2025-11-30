import type { Metadata } from "next";
import { Roboto, Lato } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { StructuredData } from "./structured-data";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradik - Iranian B2B Marketplace | Connect with Iranian Manufacturers",
  description: "Paradik is the leading B2B marketplace connecting global buyers with verified Iranian manufacturers. Discover premium products including pistachios, saffron, carpets, and more.",
  keywords: "B2B marketplace, Iranian products, manufacturers, pistachios, saffron, Persian carpets, wholesale, suppliers, Iran trade, Persian goods",
  authors: [{ name: "Paradik" }],
  creator: "Paradik",
  publisher: "Paradik",
  openGraph: {
    title: "Paradik - Iranian B2B Marketplace",
    description: "Connecting Iranian manufacturers with global buyers",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradik - Iranian B2B Marketplace",
    description: "Connecting Iranian manufacturers with global buyers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "fa": "/fa",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="canonical" href="https://paradik.com" />
        <StructuredData />
      </head>
      <body className={`${roboto.variable} ${lato.variable} font-sans antialiased`}>
        <LanguageProvider>
          <I18nProvider>{children}</I18nProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

