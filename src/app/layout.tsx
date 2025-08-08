import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MEMI Trading PLC - Tigray's Global Platform for Youth Empowerment & Local Products",
  description:
    "MEMI Trading PLC is a fast-growing company based in Tigray, Ethiopia, creating a global platform for transforming local products, services, and youth potential into sustainable economic opportunities. Empowering 300,000+ youth jobs by 2033.",
  keywords: [
    "MEMI Trading PLC",
    "Tigray Ethiopia",
    "youth empowerment",
    "local products",
    "global platform",
    "sustainable development",
    "Ethiopian business",
    "youth jobs",
    "economic opportunities",
    "Tigray business",
    "African entrepreneurship",
    "local product transformation",
    "youth training programs",
    "Ethiopian exports",
    "Tigray development",
  ],
  authors: [{ name: "MEMI Trading PLC" }],
  creator: "MEMI Trading PLC",
  publisher: "MEMI Trading PLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.memiplc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEMI Trading PLC - Tigray's Global Platform for Youth Empowerment",
    description:
      "Empowering Tigray's youth and transforming local products into global opportunities. Creating 300,000+ jobs by 2033.",
    url: "https://www.memiplc.com",
    siteName: "MEMI Trading PLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEMI Trading PLC - Tigray's Global Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMI Trading PLC - Tigray's Global Platform",
    description:
      "Empowering Tigray's youth and transforming local products into global opportunities.",
    images: ["/twitter-image.jpg"],
    creator: "@memitradingplc",
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
  verification: {
    google: "google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  category: "Business",
  classification: "Business Services",
  other: {
    "geo.region": "ET-TI",
    "geo.placename": "Tigray, Ethiopia",
    "geo.position": "13.4966;39.4733",
    ICBM: "13.4966, 39.4733",
  },
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEMI Trading PLC",
  url: "https://www.memiplc.com",
  logo: "https://www.memiplc.com/logo.png",
  description:
    "MEMI Trading PLC is a fast-growing company based in Tigray, Ethiopia, creating a global platform for transforming local products, services, and youth potential into sustainable economic opportunities.",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tigray",
    addressCountry: "Ethiopia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Amharic"],
  },
  sameAs: [
    "https://twitter.com/memitradingplc",
    "https://linkedin.com/company/memi-trading-plc",
    "https://facebook.com/memitradingplc",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Youth Empowerment Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Youth Training Programs",
          description: "Comprehensive training programs for Tigray's youth",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Product Transformation",
          description: "Transforming local Tigray products for global markets",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="var(--accent)" />
        <meta name="msapplication-TileColor" content="var(--accent)" />
        <meta name="application-name" content="MEMI Trading PLC" />
        <meta name="apple-mobile-web-app-title" content="MEMI Trading PLC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://www.memiplc.com" />
        <link rel="alternate" hrefLang="am" href="https://www.memiplc.com/am" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
