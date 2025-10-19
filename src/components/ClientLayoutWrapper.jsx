"use client";

import dynamic from "next/dynamic";

// Dynamic imports with client-side rendering
const Navbar = dynamic(() => import("./Navbar"), {
  ssr: true,
  loading: () => (
    <div className="bg-black shadow-md py-4 px-6 fixed top-0 w-full z-50">
      <div className="h-6 bg-gray-800 animate-pulse rounded w-32"></div>
    </div>
  ),
});

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="h-32 bg-gray-800 animate-pulse rounded"></div>
      </div>
    </div>
  ),
});

const ScrollToTop = dynamic(() => import("./ScrollToTop"), {
  ssr: false,
});

const PerformanceMonitor = dynamic(() => import("./PerformanceMonitor"), {
  ssr: false,
});

export { Navbar, Footer, ScrollToTop, PerformanceMonitor };
