import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm mt-12">
      <p>
        © {new Date().getFullYear()} تمامی حقوق محفوظ است. طراحی توسط تیم شما
      </p>
    </footer>
  );
}
