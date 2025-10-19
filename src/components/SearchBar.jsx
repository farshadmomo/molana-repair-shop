"use client";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch = () => {} }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Check if onSearch is a function before calling it
    if (typeof onSearch !== "function") {
      return;
    }

    // اگه ورودی خالی باشه، مستقیم سرچ خالی بزنیم
    if (query.trim() === "") {
      onSearch("");
      return;
    }

    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="جستجو در مشکلات ماشین..."
      className="border rounded p-2 w-full"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
