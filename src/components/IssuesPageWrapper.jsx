"use client";

import dynamic from "next/dynamic";

const IssuesPageClient = dynamic(() => import("./IssuesPageClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-300">در حال بارگذاری...</p>
      </div>
    </div>
  ),
});

export default function IssuesPageWrapper() {
  return <IssuesPageClient />;
}
