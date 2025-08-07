import React from "react";

export default function SoundsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold  mb-6">
        نمونه صداهای مشکلات خودرو
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">صدای موتور مشکل‌دار</h2>
          <audio controls className="w-full">
            <source src="/sounds/bad-engine.mp3" type="audio/mpeg" />
            مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
          </audio>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-2">صدای خرابی بلبرینگ چرخ</h2>
          <audio controls className="w-full">
            <source src="/sounds/wheel-bearing.mp3" type="audio/mpeg" />
            مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
          </audio>
        </div>
      </div>
    </div>
  );
}
