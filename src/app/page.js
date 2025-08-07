"use client";
import React from "react";
import { useTab } from "../context/TabContext";
import Link from "next/link";

export default function Home() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="space-y-16">
      {/* بخش اول */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-snug">عیب‌یابی خودرو</h1>
          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            Issue Diagnostic
          </h2>
          <p className="mt-4 text-gray-300">
            مشخصات خودرو خود را وارد کنید تا عیب‌یابی انجام شود یا به صداهای
            تشخیصی گوش دهید.
          </p>
          <div className="mt-6">
            <Link
              href="/issues"
              onClick={() => {
                setActiveTab("issues");
              }}
            >
              <span className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">
                شروع کنید
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/bmw-png.png"
            alt="تکنسین خودرو"
            className="w-full h-full object-cover w-164 h-74"
          />
        </div>
      </section>

      {/* بخش دوم */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold">مشکلات خودرو</h2>
        <p className="text-gray-300 max-w-xl">
          با وارد کردن اطلاعات خودرو، می‌توانید مشکلات احتمالی را بررسی کنید یا
          به صداهای عیب‌یابی گوش دهید.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="text-xl font-bold mb-2">کدهای احتمالی</div>
            <p className="text-gray-400">
              بررسی مشکلات مکانیکی عمومی یا عملکرد اجزای خودرو.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              بیشتر بخوانید
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔊</span>
              <span className="text-xl font-bold">صداهای تشخیصی</span>
            </div>
            <p className="text-gray-400">
              به صداهای استاندارد یا اختصاصی هر مشکل گوش دهید.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              بیشتر بخوانید
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
