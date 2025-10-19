"use client";
import React from "react";
import { useTab } from "../context/TabContext";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="space-y-16 px-8 md:px-16 lg:px-20 xl:px-24">
      <section className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-snug">
            عیب‌یابی خودرو - تشخیص مشکلات ماشین
          </h1>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            Issue Diagnostic
          </h2>
          <p className="mt-4 text-gray-300">
            سایت تخصصی عیب‌یابی خودرو با امکان شنیدن صداهای مشکلات، مقایسه
            خودروها و راهنمای جامع تعمیرات. مشخصات خودرو خود را وارد کنید تا
            عیب‌یابی دقیق انجام شود.
          </p>
          <div className="mt-6">
            <Link
              href="/issueCheck"
              onClick={() => {
                setActiveTab("issueCheck");
              }}
            >
              <span className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">
                شروع کنید
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/bmw-png6.png"
            alt="تکنسین خودرو"
            width={640}
            height={360}
            priority
            sizes="(max-width: 768px) 100vw, 640px"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-bold">راهنمای جامع مشکلات خودرو</h2>
        <p className="text-gray-300 max-w-xl">
          با وارد کردن اطلاعات خودرو، می‌توانید مشکلات احتمالی را بررسی کنید یا
          به صداهای عیب‌یابی گوش دهید. راهنمای کامل تعمیر و نگهداری خودرو با
          راه‌حل‌های کاربردی.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">راهنمای مشکلات خودرو</h3>
            <p className="text-gray-400">
              بررسی مشکلات مکانیکی عمومی یا عملکرد اجزای خودرو. راهنمای کامل
              عیب‌یابی موتور، گیربکس، ترمز و سایر اجزا.
            </p>
            <Link
              href="/issues"
              className="text-blue-400 hover:underline mt-4 inline-block"
              onClick={() => setActiveTab("issues")}
              aria-label="مشاهده راهنمای مشکلات خودرو"
            >
              بیشتر بخوانید
            </Link>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔊</span>
              <h3 className="text-xl font-bold">صداهای تشخیصی خودرو</h3>
            </div>
            <p className="text-gray-400">
              به صداهای استاندارد یا اختصاصی هر مشکل گوش دهید. تشخیص عیب از طریق
              شنیدن صداهای موتور، گیربکس و سایر اجزا.
            </p>
            <Link
              href="/sound-check"
              className="text-blue-400 hover:underline mt-4 inline-block"
              onClick={() => setActiveTab("sound-check")}
              aria-label="شنیدن صداهای تشخیصی خودرو"
            >
              بیشتر بخوانید
            </Link>
          </article>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">خدمات تخصصی عیب‌یابی خودرو</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              عیب‌یابی موتور
            </h3>
            <p className="text-gray-300">
              تشخیص مشکلات موتور، بررسی صداهای غیرعادی، عیب‌یابی سیستم سوخت و
              احتراق
            </p>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              عیب‌یابی گیربکس
            </h3>
            <p className="text-gray-300">
              بررسی عملکرد گیربکس، تشخیص مشکلات تعویض دنده و عیب‌یابی سیستم
              انتقال قدرت
            </p>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              عیب‌یابی سیستم ترمز
            </h3>
            <p className="text-gray-300">
              بررسی سیستم ترمز، تشخیص مشکلات لنت و دیسک ترمز و عیب‌یابی سیستم
              ABS
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">
          چرا تعمیرگاه مولانا را انتخاب کنید؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">تخصص و تجربه</h3>
            <p className="text-gray-300 leading-relaxed">
              با بیش از 10 سال تجربه در زمینه عیب‌یابی و تعمیر خودرو، تیم متخصص
              ما قادر به تشخیص دقیق و حل مشکلات پیچیده خودروهای مختلف است.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تکنولوژی پیشرفته</h3>
            <p className="text-gray-300 leading-relaxed">
              استفاده از جدیدترین تجهیزات تشخیصی و نرم‌افزارهای تخصصی برای
              عیب‌یابی دقیق و ارائه راه‌حل‌های بهینه.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
