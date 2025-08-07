import React from "react";
import { FaCarCrash, FaWrench, FaList, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col min-h-screen p-4">
      <h2 className="text-xl font-bold mb-8">مکانیک خودرو</h2>
      <nav className="flex flex-col space-y-4">
        <a
          href="/"
          className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"
        >
          <FaHome /> خانه
        </a>
        <a
          href="/diagnostics"
          className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"
        >
          <FaCarCrash /> تشخیص
        </a>
        <a
          href="/issues"
          className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"
        >
          <FaList /> لیست مشکلات
        </a>
        <a
          href="/repairs"
          className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"
        >
          <FaWrench /> تعمیرات
        </a>
      </nav>
    </div>
  );
}
