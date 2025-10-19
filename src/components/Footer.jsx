"use client";
import { useTab } from "@/context/TabContext";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { activeTab, setActiveTab } = useTab();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">درباره ما</h3>
            <p className="text-sm text-gray-400 leading-6">
              تعمیرگاه مولانا ارائه دهنده خدمات تخصصی تعمیر و عیب‌یابی خودرو با
              تاکید بر کیفیت و رضایت مشتری.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:09360936223"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 transition"
              >
                تماس: 09360936223
              </a>
              <a
                href="https://www.google.com/maps/place/35%C2%B050'07.8%22N+50%C2%B059'15.3%22E/@35.835495,50.987583,16z/data=!4m4!3m3!8m2!3d35.835495!4d50.987583?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-700 hover:border-blue-600 text-blue-300 hover:text-white text-xs px-3 py-1.5 transition"
              >
                موقعیت روی نقشه
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-gray-700 hover:border-blue-600 text-gray-300 hover:text-white text-xs px-3 py-1.5 transition"
                onClick={() => setActiveTab("about")}
              >
                درباره بیشتر
              </Link>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <h3 className="text-white text-lg font-semibold">نقشه سریع</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
                onClick={() => setActiveTab("")}
              >
                صفحه اصلی
              </Link>
              <Link
                href="/issueCheck"
                className="text-gray-400 hover:text-white transition"
                onClick={() => setActiveTab("issueCheck")}
              >
                بررسی مشکلات
              </Link>
              <Link
                href="/sound-check"
                className="text-gray-400 hover:text-white transition"
                onClick={() => setActiveTab("sound-check")}
              >
                بررسی صدا
              </Link>
              <Link
                href="/issues"
                className="text-gray-400 hover:text-white transition"
                onClick={() => setActiveTab("issues")}
              >
                لیست مشکلات
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
                onClick={() => setActiveTab("about")}
              >
                درباره ما
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-center text-[12px]">
          <p className="text-white">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است. طراحی توسط
            Farshad Momtaz
          </p>
        </div>
      </div>
    </footer>
  );
}
