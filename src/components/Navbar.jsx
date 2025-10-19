"use client";
import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useTab } from "../context/TabContext";

// Memoized tab data to prevent unnecessary re-renders
const TABS = [
  { id: "", label: "کار فیکس" },
  { id: "sound-check", label: "بررسی صدا" },
  { id: "issueCheck", label: "عیب یابی خودرو خارجی" },
  { id: "issues", label: "لیست مشکلات" },
  { id: "compare", label: "مقایسه خودروها" },
  { id: "about", label: "درباره ما" },
];

// Memoized hamburger icon component
const HamburgerIcon = React.memo(() => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
));

HamburgerIcon.displayName = "HamburgerIcon";

export default function Navbar() {
  const { setActiveTab, activeTab } = useTab();
  const [burger, setBurger] = useState(false);

  // Memoized click handlers
  const handleTabClick = useCallback(
    (tabId) => {
      setActiveTab(tabId);
      setBurger(false);
    },
    [setActiveTab]
  );

  const toggleBurger = useCallback(() => {
    setBurger((prev) => !prev);
  }, []);

  // Memoized tab items
  const tabItems = useMemo(
    () =>
      TABS.map((tab) => (
        <Link
          href={`/${tab.id}`}
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className="transition-all duration-300 z-50"
        >
          <span
            className={`relative cursor-pointer transition-all duration-300 pb-1 text-[15px]
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
            />
          </span>
        </Link>
      )),
    [activeTab, handleTabClick]
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-black shadow-md py-4 px-6 hidden sm:flex justify-between items-center fixed top-0 w-full z-50">
        <div className="flex gap-6 text-sm font-medium">{tabItems}</div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sm:hidden bg-black shadow-md py-4 px-6 flex justify-right items-center gap-5">
        <button
          onClick={toggleBurger}
          className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="Toggle mobile menu"
          aria-expanded={burger}
        >
          <HamburgerIcon />
        </button>
        <h1 className="font-bold text-lg text-white">کار فیکس</h1>
      </nav>

      {/* Mobile Menu */}
      {burger && (
        <div className="sm:hidden bg-black text-white px-6 py-4 space-y-4 absolute rounded-2xl top-30 opacity-90 z-50 shadow-lg">
          {TABS.map((tab) => (
            <Link
              href={`/${tab.id}`}
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`block py-1 transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
