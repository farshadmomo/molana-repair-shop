"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";

// Memoized loading spinner component
const LoadingSpinner = React.memo(() => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
));

LoadingSpinner.displayName = "LoadingSpinner";

// Memoized skeleton loader component
const SkeletonLoader = React.memo(() => (
  <div className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 md:p-6 space-y-4">
    <div className="h-5 w-40 rounded bg-gray-800/70 animate-pulse" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-800 bg-neutral-900/60 p-4"
        >
          <div className="h-4 w-24 rounded bg-gray-800/70 mb-3 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-full bg-gray-800/70 animate-pulse" />
            <div className="h-6 w-24 rounded-full bg-gray-800/70 animate-pulse" />
            <div className="h-6 w-14 rounded-full bg-gray-800/70 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </div>
));

SkeletonLoader.displayName = "SkeletonLoader";

function CarIssueForm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [issues, setIssues] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [models, setModels] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBrandOptions, setShowBrandOptions] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  // Memoized filtered brands
  const filteredBrands = useMemo(() => {
    if (!brandSearch) return brandsData.slice(0, 50); // Limit initial results
    return brandsData.filter((b) =>
      b.brand.toLowerCase().includes(brandSearch.toLowerCase())
    );
  }, [brandsData, brandSearch]);

  // Load brands data with error handling
  useEffect(() => {
    const loadBrandsData = async () => {
      try {
        const response = await fetch("/data/all-car-issues.json");
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();
        setBrandsData(data.brands || []);
      } catch (error) {
        console.error("Error loading brands data:", error);
        setBrandsData([]);
      } finally {
        setDataLoading(false);
      }
    };

    loadBrandsData();
  }, []);

  // Update models when brand changes
  useEffect(() => {
    const selectedBrand = brandsData.find((b) => b.brand === brand);
    setModels(selectedBrand ? selectedBrand.models : []);
    setModel(""); // reset model when brand changes
  }, [brand, brandsData]);

  // Memoized submit handler
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setIssues([]);

      try {
        // Simulate processing delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 300));

        const brandObj = brandsData.find((b) => b.brand === brand);
        if (!brandObj) {
          setIssues([{ error: "برند پیدا نشد." }]);
          return;
        }

        const modelObj = brandObj.models.find((m) => m.name === model);
        if (!modelObj) {
          setIssues([{ error: "مدل پیدا نشد." }]);
          return;
        }

        const yearNum = parseInt(year, 10);
        const yearRangeObj = modelObj.year_ranges.find(
          (yr) => yearNum >= yr.min && yearNum <= yr.max
        );
        if (!yearRangeObj) {
          setIssues([{ error: "سال پیدا نشد." }]);
          return;
        }

        const mileageNum = parseInt(mileage, 10);
        const mileageRangeObj = yearRangeObj.mileage_ranges.find(
          (mr) => mileageNum >= mr.min && mileageNum <= mr.max
        );
        if (!mileageRangeObj) {
          setIssues([{ error: "کیلومتر پیدا نشد." }]);
          return;
        }

        setIssues(mileageRangeObj.possible_issues || []);
      } catch (error) {
        console.error("Error processing form:", error);
        setIssues([{ error: "خطا در پردازش اطلاعات." }]);
      } finally {
        setIsLoading(false);
      }
    },
    [brand, model, year, mileage, brandsData]
  );

  // Memoized form validation
  const isFormValid = useMemo(() => {
    return brand && model && year && mileage && !isLoading;
  }, [brand, model, year, mileage, isLoading]);

  // Show loading state while data is being fetched
  if (dataLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col gap-6 w-full md:flex-nowrap flex-wrap">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-row gap-4 md:flex-nowrap flex-wrap bg-black/40 border border-gray-800 rounded-xl p-4 md:p-6 backdrop-blur"
      >
        {/* Searchable Brand Dropdown */}
        <div className="relative w-full mb-2">
          <Combobox
            value={brand}
            onChange={(val) => {
              setBrand(val);
              setShowBrandOptions(false);
            }}
          >
            {({ open }) => (
              <>
                <ComboboxInput
                  disabled={isLoading}
                  className="w-full h-14 px-3 rounded-lg bg-neutral-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  displayValue={(selectedBrand) => selectedBrand}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  onFocus={() => {
                    setBrandSearch("");
                    setShowBrandOptions(true);
                  }}
                  placeholder="جستجوی برند..."
                  aria-label="Select car brand"
                />
                {(open || showBrandOptions) && (
                  <ComboboxOptions
                    static
                    className="absolute w-full left-0 top-full z-20 mt-1 rounded-lg border border-gray-800 bg-neutral-900 text-white shadow-xl max-h-60 overflow-auto"
                  >
                    {filteredBrands.length === 0 && (
                      <div className="px-3 py-2 text-sm text-gray-400">
                        برند پیدا نشد
                      </div>
                    )}
                    {filteredBrands.slice(0, 100).map((b, idx) => (
                      <ComboboxOption
                        key={`${b.brand}-${idx}`}
                        value={b.brand}
                        className={({ active }) =>
                          `${
                            active
                              ? "bg-blue-600/20 text-blue-300"
                              : "text-gray-200"
                          } cursor-pointer select-none px-3 py-2 transition-colors duration-150`
                        }
                        onClick={() => setShowBrandOptions(false)}
                      >
                        {b.brand}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                )}
              </>
            )}
          </Combobox>
        </div>

        {/* Model Select */}
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          disabled={!brand || isLoading}
          className="w-full h-14 px-3 rounded-lg bg-neutral-900 text-white border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition mb-2"
        >
          <option value="" className="text-white">
            انتخاب مدل
          </option>
          {models.map((m, idx) => (
            <option key={idx} value={m.name} className="text-white">
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="سال ساخت"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          disabled={isLoading}
          className="w-full h-14 px-3 rounded-lg bg-neutral-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="number"
          placeholder="کیلومتر"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required
          disabled={isLoading}
          className="w-full h-14 px-3 rounded-lg bg-neutral-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!isFormValid}
          aria-busy={isLoading}
          className="w-full h-14 mb-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-blue-900/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none enabled:hover:scale-[1.02] enabled:active:scale-[0.98]"
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <LoadingSpinner />
              در حال بررسی...
            </span>
          ) : (
            "بررسی مشکلات"
          )}
        </button>
      </form>

      {isLoading && <SkeletonLoader />}

      {!isLoading && issues.length > 0 && (
        <div className="w-full">
          {issues[0].error ? (
            <div className="w-full rounded-lg border border-red-800 bg-red-900/20 text-red-200 px-4 py-3">
              {issues[0].error}
            </div>
          ) : (
            <div className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 md:p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">نتایج احتمالی</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {issues.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-gray-800 bg-neutral-900/60 p-4 hover:border-blue-700/60 transition"
                  >
                    <div className="flex items-center justify-right mb-3">
                      <span className="text-base font-semibold text-blue-300">
                        {item.part}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.issues.map((issueText, issueIdx) => (
                        <span
                          key={issueIdx}
                          className="inline-flex items-center rounded-full border border-blue-800/50 bg-blue-900/20 px-3 py-1 text-xs text-blue-200"
                        >
                          {issueText}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CarIssueForm;
