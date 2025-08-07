"use client";
import React, { useState } from "react";

export default function HamburgerMenu({ categories }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 md:p-6 absolute top-32 right-32 rounded-4xl">
            {/* دکمه منوی همبرگری */}
            <div className="flex justify-right gap-4 items-center ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-blue-600 focus:outline-none scale-125"
                    aria-label="باز کردن منو"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
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
                className={`mt-4 space-y-4 text-center text-sm font-semibold text-blue-600 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                {categories.map((category, index) => (
                    <li key={index} className="cursor-pointer border-b border-gray-200">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full hover:hover:bg-blue-100 py-2 rounded-lg px-4 transition-colors duration-200 focus:outline-none"
                            onClick={() =>
                                setIsOpen((open) =>
                                    typeof open === "object"
                                        ? { ...open, [index]: !open[index] }
                                        : { [index]: true }
                                )
                            }
                        >
                            <span>{category.category}</span>
                            <svg
                                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                    isOpen && isOpen[index] ? "rotate-90" : ""
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
                        {isOpen && isOpen[index] && (
                            <ul className="bg-gray-50 rounded-lg mt-2 p-2 space-y-2 text-xs">
                                {category.problems?.map((item, i) => (
                                    <li key={i} className="flex items-center justify-right">
                                        <a
                                            href={`#${category.category.replace(/\s/g, "-")}`}
                                            className="block px-3 py-2 hover:bg-blue-100 rounded text-sm text-blue-600 border-b border-gray-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.problem}
                                        </a>
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
