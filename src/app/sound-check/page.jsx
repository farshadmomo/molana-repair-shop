import React from "react";
import fs from "fs";
import path from "path";
import AudioGridClient from "@/components/AudioGridClient";
import Script from "next/script";

export const metadata = {
  title: "صداهای تشخیصی خودرو - شنیدن صداهای مشکلات ماشین | کار فیکس",
  description:
    "گوش دادن به نمونه صداهای مشکلات خودرو برای تشخیص دقیق عیب. صداهای موتور، گیربکس، ترمز و سایر اجزای خودرو.",
  keywords: [
    "صداهای خودرو",
    "صداهای مشکلات ماشین",
    "تشخیص صدا خودرو",
    "صداهای موتور",
    "صداهای گیربکس",
    "صداهای ترمز",
    "کار فیکس",
  ],
  alternates: { canonical: "/sound-check" },
  openGraph: {
    title: "صداهای تشخیصی خودرو - شنیدن صداهای مشکلات ماشین | کار فیکس",
    description: "گوش دادن به نمونه صداهای مشکلات خودرو برای تشخیص دقیق عیب",
    type: "website",
    url: "/sound-check",
  },
  twitter: {
    card: "summary",
    title: "صداهای تشخیصی خودرو - شنیدن صداهای مشکلات ماشین | کار فیکس",
    description: "گوش دادن به نمونه صداهای مشکلات خودرو برای تشخیص دقیق عیب",
  },
};

const AUDIO_DIR = path.join(process.cwd(), "public", "audio");
const SUPPORTED_EXTENSIONS = [".mp3"]; // user provided .mp3 files only

function getMimeTypeByExt(ext) {
  return "audio/mpeg";
}

export default function SoundsPage() {
  let audioFiles = [];
  try {
    const exists = fs.existsSync(AUDIO_DIR);
    if (exists) {
      audioFiles = fs
        .readdirSync(AUDIO_DIR)
        .filter((fileName) => {
          const ext = path.extname(fileName).toLowerCase();
          return SUPPORTED_EXTENSIONS.includes(ext);
        })
        .map((fileName) => {
          const base = path.basename(fileName, path.extname(fileName));
          const title = base.replace(/[-_]+/g, " ").trim();
          const ext = path.extname(fileName).toLowerCase();
          return {
            fileName,
            title: title.length ? title : fileName,
            src: `/audio/${encodeURIComponent(fileName)}`,
            type: getMimeTypeByExt(ext),
          };
        });
    }
  } catch (e) {
    // Ignore errors and show empty state
  }

  const isEmpty = !audioFiles || audioFiles.length === 0;

  const audioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "صداهای تشخیصی خودرو",
    description: "مجموعه صداهای مشکلات خودرو برای تشخیص عیب",
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
      "/sound-check",
    mainEntity: {
      "@type": "ItemList",
      name: "صداهای مشکلات خودرو",
      numberOfItems: audioFiles.length,
      itemListElement: audioFiles.map((file, index) => ({
        "@type": "AudioObject",
        position: index + 1,
        name: file.title,
        contentUrl:
          (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
          file.src,
        encodingFormat: "audio/mpeg",
        description: `صداهای مربوط به ${file.title}`,
      })),
    },
  };

  return (
    <div className="w-full">
      <Script
        id="jsonld-audio"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(audioJsonLd)}
      </Script>
      <h1 className="text-3xl font-bold mb-6">نمونه صداهای مشکلات خودرو</h1>

      {isEmpty ? (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-zinc-100">
          <p className="mb-2">هیچ فایلی یافت نشد.</p>
        </div>
      ) : (
        <AudioGridClient audioFiles={audioFiles} />
      )}
    </div>
  );
}
