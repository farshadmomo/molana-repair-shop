"use client";

import React, { useEffect, useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import SearchBar from "@/components/SearchBar";
import Script from "next/script";

export default function IssuesPageClient() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const toggleCategory = (categoryName) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const scrollToSection = (categoryName, problemIndex = null) => {
    const elementId = problemIndex
      ? `${slugify(categoryName)}-${problemIndex}`
      : slugify(categoryName);

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      // Add a highlight effect
      element.style.transition = "background-color 0.3s ease";
      element.style.backgroundColor = "#1e40af";
      setTimeout(() => {
        element.style.backgroundColor = "";
      }, 2000);
    }
  };

  useEffect(() => {
    fetch("/data/car-problems.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredCategories = categories.filter(
    (category) =>
      category.category?.toLowerCase().includes(search.toLowerCase()) ||
      category.problems?.some(
        (problem) =>
          problem.problem?.toLowerCase().includes(search.toLowerCase()) ||
          problem.solutions?.some((solution) =>
            solution.toLowerCase().includes(search.toLowerCase())
          )
      )
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filteredCategories.flatMap(
      (category) =>
        category.problems?.map((problem) => ({
          "@type": "Question",
          name: problem.problem,
          acceptedAnswer: {
            "@type": "Answer",
            text: problem.solutions?.join("\n") || "",
          },
        })) || []
    ),
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd)}
      </Script>

      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              راهنمای جامع عیب‌یابی خودرو
            </h1>
            <p className="text-gray-300 text-lg">
              تشخیص و حل مشکلات موتور، گیربکس، ترمز، فرمان و سایر اجزای خودرو
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <SearchBar onSearch={setSearch} />
          </div>

          <HamburgerMenu categories={categories} />

          <div className="max-w-6xl mx-auto">
            {/* All Problems List with Categories as Titles */}
            <div className="space-y-8">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  {/* Category Title */}
                  <div className="text-center py-4">
                    <h2 className="text-2xl font-bold text-blue-400 border-b-2 border-blue-400 pb-2 inline-block">
                      {category.category}
                    </h2>
                  </div>

                  {/* Problems in this category */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.problems?.map((problem, problemIndex) => {
                      // Create a unique sequential ID for the flattened list
                      const globalIndex =
                        filteredCategories
                          .slice(0, categoryIndex)
                          .reduce(
                            (acc, cat) => acc + (cat.problems?.length || 0),
                            0
                          ) + problemIndex;

                      return (
                        <div
                          key={`${category.category}-${problemIndex}`}
                          id={`problem-${globalIndex}`}
                          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        >
                          <h3 className="text-lg font-semibold mb-3 text-white">
                            {problem.problem}
                          </h3>
                          {problem.solutions &&
                            problem.solutions.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-medium text-green-400 mb-2">
                                  راه‌حل‌ها:
                                </h4>
                                <ul className="text-xs text-gray-300 space-y-1">
                                  {problem.solutions.map(
                                    (solution, solIndex) => (
                                      <li
                                        key={solIndex}
                                        className="flex items-start"
                                      >
                                        <span className="text-green-500 mr-2">
                                          •
                                        </span>
                                        <span>{solution}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  هیچ مشکلی با این جستجو یافت نشد.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
