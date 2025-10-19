import "../app/globals.css";
import { TabProvider } from "../context/TabContext";
import localFont from "next/font/local";
import Script from "next/script";
import {
  Navbar,
  Footer,
  ScrollToTop,
  PerformanceMonitor,
} from "../components/ClientLayoutWrapper";

const farhang = localFont({
  variable: "--font-farhang",
  src: [
    {
      path: "../../public/fonts/Farhang2-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Farhang2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Farhang2-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "عیب‌یابی خودرو | تشخیص مشکلات ماشین | تعمیرگاه مولانا",
    template: "%s | تعمیرگاه مولانا - عیب‌یابی خودرو",
  },
  description:
    "سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه خودروها و راهنمای جامع تعمیرات. تشخیص دقیق مشکلات مکانیکی و ارائه راه‌حل‌های کاربردی.",
  keywords: [
    "عیب یابی خودرو",
    "تشخیص مشکلات ماشین",
    "تعمیر خودرو",
    "مشکلات مکانیکی",
    "صداهای خودرو",
    "مقایسه خودرو",
    "تعمیرگاه مولانا",
    "تعمیرگاه",
    "مشکلات موتور",
    "عیب یابی ماشین",
    "راهنمای تعمیر خودرو",
    "تشخیص عیب خودرو",
  ],
  authors: [{ name: "تعمیرگاه مولانا" }],
  creator: "تعمیرگاه مولانا",
  publisher: "تعمیرگاه مولانا",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: "تعمیرگاه مولانا - عیب‌یابی خودرو",
    title: "عیب‌یابی خودرو | تشخیص مشکلات ماشین | تعمیرگاه مولانا",
    description:
      "سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه خودروها و راهنمای جامع تعمیرات. تشخیص دقیق مشکلات مکانیکی و ارائه راه‌حل‌های کاربردی.",
    images: [
      {
        url: "/bmw-png6.png",
        width: 1200,
        height: 630,
        alt: "عیب‌یابی خودرو - تشخیص مشکلات ماشین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عیب‌یابی خودرو | تشخیص مشکلات ماشین | تعمیرگاه مولانا",
    description:
      "سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه خودروها و راهنمای جامع تعمیرات.",
    images: ["/bmw-png6.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const manifest = "/site.webmanifest";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`scroll-smooth pt-12 ${farhang.variable}`}
    >
      <body className="bg-black text-white">
        <Script
          id="jsonld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveRepairShop",
            name: "تعمیرگاه مولانا - تعمیرگاه مولانا",
            alternateName: "تعمیرگاه مولانا",
            description:
              "تعمیرگاه تخصصی خودرو با خدمات عیب‌یابی، تعمیر و نگهداری انواع خودرو",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            telephone: "+989360936223",
            image: [
              (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
                "/bmw-png6.png",
            ],
            logo:
              (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
              "/bmw-png6.png",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IR",
              addressRegion: "البرز",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.835495,
              longitude: 50.987583,
            },
            areaServed: {
              "@type": "Country",
              name: "Iran",
            },
            serviceType: [
              "عیب‌یابی خودرو",
              "تعمیر موتور",
              "تعمیر گیربکس",
              "تعمیر سیستم ترمز",
              "تعمیر سیستم فرمان",
              "تعمیر سیستم تهویه",
              "تعمیر سیستم برق",
            ],
            priceRange: "$$",
            openingHours: "Mo-Su 08:00-20:00",
            sameAs: [],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدمات تعمیر خودرو",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "عیب‌یابی خودرو",
                    description: "تشخیص و عیب‌یابی مشکلات مکانیکی خودرو",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تعمیر موتور",
                    description: "تعمیر و سرویس موتور خودرو",
                  },
                },
              ],
            },
          })}
        </Script>
        <Script
          id="jsonld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "تعمیرگاه مولانا - عیب‌یابی خودرو",
            alternateName: "تعمیرگاه مولانا",
            description:
              "سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه خودروها و راهنمای جامع تعمیرات",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            inLanguage: "fa-IR",
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") +
                    "/issues?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") +
                    "/compare?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            ],
            mainEntity: {
              "@type": "ItemList",
              name: "صفحات اصلی سایت",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  name: "عیب‌یابی خودرو",
                  url:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") + "/issueCheck",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "راهنمای مشکلات",
                  url:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") + "/issues",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "صداهای تشخیصی",
                  url:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") + "/sound-check",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "مقایسه خودروها",
                  url:
                    (process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000") + "/compare",
                },
              ],
            },
          })}
        </Script>
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "تعمیرگاه مولانا",
            alternateName: "تعمیرگاه مولانا",
            description:
              "تعمیرگاه تخصصی خودرو با بیش از 10 سال تجربه در عیب‌یابی و تعمیر انواع خودرو",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            logo:
              (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
              "/bmw-png6.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+989360936223",
              contactType: "customer service",
              availableLanguage: "Persian",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "IR",
            },
            sameAs: [],
          })}
        </Script>
        <TabProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 containera mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <PerformanceMonitor />
          </div>
        </TabProvider>
      </body>
    </html>
  );
}
