// SEO utility functions and configurations
export const seoConfig = {
  siteName: "کار فیکس - عیب‌یابی خودرو",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  defaultTitle: "عیب‌یابی خودرو | تشخیص مشکلات ماشین | کار فیکس",
  defaultDescription:
    "سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه خودروها و راهنمای جامع تعمیرات. تشخیص دقیق مشکلات مکانیکی و ارائه راه‌حل‌های کاربردی.",
  defaultKeywords: [
    "عیب یابی خودرو",
    "تشخیص مشکلات ماشین",
    "تعمیر خودرو",
    "مشکلات مکانیکی",
    "صداهای خودرو",
    "مقایسه خودرو",
    "کار فیکس",
    "تعمیرگاه",
    "مشکلات موتور",
    "عیب یابی ماشین",
    "راهنمای تعمیر خودرو",
    "تشخیص عیب خودرو",
  ],
  author: "کار فیکس",
  locale: "fa_IR",
  twitterHandle: "@karfix",
  contactInfo: {
    phone: "+989360936223",
    address: "ایران، البرز",
    coordinates: {
      latitude: 35.835495,
      longitude: 50.987583,
    },
  },
};

// Generate structured data for different page types
export const generateStructuredData = (type, data = {}) => {
  const baseUrl = seoConfig.siteUrl;

  switch (type) {
    case "homepage":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: seoConfig.siteName,
        url: baseUrl,
        description: seoConfig.defaultDescription,
        inLanguage: seoConfig.locale,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/issues?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name || "عیب‌یابی خودرو",
        description: data.description || "خدمات تخصصی عیب‌یابی و تعمیر خودرو",
        provider: {
          "@type": "AutomotiveRepairShop",
          name: "تعمیرگاه مولانا - کار فیکس",
          telephone: seoConfig.contactInfo.phone,
          address: {
            "@type": "PostalAddress",
            addressCountry: "IR",
            addressRegion: "البرز",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Iran",
        },
      };

    case "faq":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          data.questions?.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })) || [],
      };

    default:
      return null;
  }
};

// Generate meta tags for different page types
export const generateMetaTags = (pageData = {}) => {
  const {
    title,
    description,
    keywords = [],
    image,
    url,
    type = "website",
  } = pageData;

  const fullTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullKeywords = [...seoConfig.defaultKeywords, ...keywords].join(", ");
  const fullImage = image || `${seoConfig.siteUrl}/bmw-png6.png`;
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type,
      url: fullUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || "کار فیکس - عیب‌یابی خودرو",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
};

// Common SEO keywords for different sections
export const seoKeywords = {
  homepage: ["عیب یابی خودرو", "تشخیص مشکلات ماشین", "تعمیر خودرو", "کار فیکس"],
  issues: [
    "راهنمای عیب‌یابی خودرو",
    "مشکلات خودرو",
    "راه‌حل مشکلات ماشین",
    "عیب‌یابی موتور",
    "مشکلات گیربکس",
  ],
  compare: [
    "مقایسه خودرو",
    "مقایسه ماشین",
    "ویژگی‌های فنی خودرو",
    "مقایسه موتور خودرو",
  ],
  sound: [
    "صداهای خودرو",
    "صداهای مشکلات ماشین",
    "تشخیص صدا خودرو",
    "صداهای موتور",
  ],
  about: ["درباره تعمیرگاه مولانا", "اطلاعات تماس تعمیرگاه", "آدرس تعمیرگاه"],
};

// Performance optimization helpers
export const performanceConfig = {
  imageOptimization: {
    formats: ["image/avif", "image/webp"],
    quality: 85,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },
  fontOptimization: {
    display: "swap",
    preload: true,
  },
  cacheHeaders: {
    static: "public, max-age=31536000, immutable",
    dynamic: "public, max-age=3600, s-maxage=86400",
  },
};
