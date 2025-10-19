"use client";
import React, { useState } from "react";

export default function HamburgerMenu({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const toggleCategory = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getGlobalProblemIndex = (categoryName, problemIndex) => {
    // Find the category and calculate its global index
    let globalIndex = 0;
    for (const category of categories) {
      if (category.category === categoryName) {
        return globalIndex + problemIndex;
      }
      globalIndex += category.problems?.length || 0;
    }
    return -1; // Category not found
  };

  const scrollToProblem = (categoryName, problemIndex) => {
    console.log(`Scrolling to: ${categoryName} - ${problemIndex}`);

    // Close the menu
    setIsMenuOpen(false);

    // Calculate the global index for this problem
    const globalIndex = getGlobalProblemIndex(categoryName, problemIndex);
    const problemId = `problem-${globalIndex}`;
    console.log(
      `Looking for element with ID: ${problemId} (global index: ${globalIndex})`
    );

    setTimeout(() => {
      const element = document.getElementById(problemId);
      if (element) {
        console.log(`Element found, scrolling to: ${problemId}`);

        // Calculate position with offset to ensure title is visible
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const offset = 100; // Offset to ensure title is visible
        const targetPosition = absoluteElementTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Add highlight effect for 1 second
        element.style.transition = "background-color 0.3s ease";
        element.style.backgroundColor = "#1e40af";
        setTimeout(() => {
          element.style.backgroundColor = "";
        }, 2000);
      } else {
        console.log(`Element with ID "${problemId}" not found`);
        // List all available IDs for debugging
        const allElements = document.querySelectorAll("[id]");
        const allIds = Array.from(allElements).map((el) => el.id);
        console.log("Available IDs:", allIds);
      }
    }, 100);
  };

  return (
    <nav className="bg-gray-800 shadow-lg p-3 md:p-6 absolute md:absolute md:top-[15%] md:right-[10%] rounded-2xl border border-gray-700 z-30">
      <div className="flex justify-right gap-4 items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-400 focus:outline-none scale-125 hover:text-blue-300 transition-colors cursor-pointer"
          aria-label="باز کردن منو"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/*<h1 className="text-lg font-bold text-blue-600">دسته‌بندی‌ها</h1>*/}
      </div>

      {/* آیتم‌های منو */}
      <ul
        className={`mt-4 space-y-3 text-center text-sm font-semibold text-blue-400 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {categories?.map((category, index) => (
          <li key={index} className=" border-b border-gray-600">
            <button
              type="button"
              className="flex items-center justify-between w-full hover:bg-gray-700 py-3 px-4 transition-colors duration-200 focus:outline-none cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex flex-col items-start">
                <span className="text-white text-base">
                  {category.category}
                </span>
                <span className="text-xs text-gray-400">
                  {category.problems?.length || 0} مشکل
                </span>
              </div>
              <svg
                className={`w-5 h-5 ml-2 transition-transform duration-200 text-blue-400 ${
                  expandedItems[index] ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {expandedItems[index] && (
              <ul className="bg-gray-700 rounded-lg mt-2 p-2 space-y-2 text-xs">
                {category.problems?.map((item, i) => (
                  <li key={i} className="flex items-center justify-right">
                    <button
                      type="button"
                      className="block px-3 py-2 hover:bg-gray-600 rounded text-sm text-gray-200 border-b border-gray-600 text-left w-full transition-colors duration-200 cursor-pointer"
                      onClick={() => scrollToProblem(category.category, i)}
                    >
                      {item.problem}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
