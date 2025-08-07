"use client";
import React from "react";
import Link from "next/link";
import { useTab } from "../context/TabContext";

export default function Navbar() {
  const { setActiveTab, activeTab } = useTab();
  const [burger, setBurger] = React.useState(false);

  const tabs = [
    { id: "", label: "کار فیکس" },
    { id: "sound-check", label: "بررسی صدا" },
    { id: "about", label: "درباره ما" },
    { id: "contact", label: "تماس با ما" },
    { id: "issues", label: "لیست مشکلات" },
  ];

  return (
    <>
      {/* دسکتاپ */}
      <nav className="bg-black shadow-md py-4 px-6 hidden sm:flex justify-between items-center fixed top-0 w-full z-50">
        <div className="flex gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <Link
              href={`/${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span
                className={`relative cursor-pointer transition-all duration-300 pb-1
                  ${
                    activeTab === tab.id
                      ? "text-blue-500 font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {tab.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-500 transition-transform duration-300 ease-in-out
                    ${activeTab === tab.id ? "scale-x-100" : "scale-x-0"}
                  origin-right group-hover:origin-left`}
                ></span>
              </span>
            </Link>
          ))}
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded">
          ضروری
        </button>
      </nav>

      {/* موبایل */}
      <nav className="sm:hidden bg-black shadow-md py-4 px-6 flex justify-right items-center gap-5">
        <button onClick={() => setBurger(!burger)} className="text-white">
          {/* آیکون همبرگری */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="font-bold text-lg text-white">کار فیکس</h1>
      </nav>

      {/* منوی موبایل */}
      {burger && (
        <div className="sm:hidden bg-black text-white px-6 py-4 space-y-4">
          {tabs.map((tab) => (
            <Link
              href={`/${tab.id}`}
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setBurger(false); // بستن منو بعد از کلیک
              }}
              className={`block py-1 ${
                activeTab === tab.id
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          ))}

          <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded w-full">
            ضروری
          </button>
        </div>
      )}
    </>
  );
}
