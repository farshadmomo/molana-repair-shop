"use client";

import React from "react";
import Script from "next/script";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function Typeahead({ items, selected, onChange, getLabel, placeholder }) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const filteredItems = React.useMemo(() => {
    if (!query) return items.slice(0, 50);
    const filtered = items
      .filter((item) => {
        const label = getLabel(item);
        return (
          label &&
          label !== "نامشخص" &&
          label.toLowerCase().includes(query.toLowerCase())
        );
      })
      .slice(0, 50);
    return filtered;
  }, [items, query, getLabel]);

  React.useEffect(() => {
    if (selected) {
      setQuery(getLabel(selected));
    }
  }, [selected, getLabel]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (!e.target.value) {
            onChange(null);
          }
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {open && filteredItems.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <div
              key={`${slugify(getLabel(item))}-${index}`}
              className="px-4 py-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
              onClick={() => {
                onChange(item);
                setQuery(getLabel(item));
                setOpen(false);
              }}
            >
              <div className="text-white font-medium">
                {getLabel(item) || "نامشخص"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ComparePageClient() {
  const [cars, setCars] = React.useState([]);
  const [carA, setCarA] = React.useState(null);
  const [carB, setCarB] = React.useState(null);
  const [showComparison, setShowComparison] = React.useState(false);

  React.useEffect(() => {
    fetch("/data/cars-compare.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars data");
        return res.json();
      })
      .then((data) => {
        // Filter out cars with missing required properties
        const validCars = data.filter((car) => {
          const hasRequiredFields = car?.brand_en && car?.model_fa && car?.trim;
          if (!hasRequiredFields) {
            console.log("Filtered out car with missing fields:", car);
          }
          return hasRequiredFields;
        });
        console.log("Valid cars loaded:", validCars.length);
        setCars(validCars);
      })
      .catch((error) => {
        console.error("Error loading cars data:", error);
        setCars([]);
      });
  }, []);

  const tabItems = React.useMemo(
    () => [
      { id: "engine", label: "موتور و قدرت", icon: "🔧" },
      { id: "transmission", label: "گیربکس و عملکرد", icon: "⚙️" },
      { id: "safety", label: "ایمنی و راحتی", icon: "🛡️" },
      { id: "tires", label: "تایر و چرخ", icon: "🛞" },
      { id: "features", label: "امکانات", icon: "✨" },
    ],
    []
  );

  const comparisonJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "مقایسه خودروها - کار فیکس",
    description: "ابزار مقایسه خودروها با ویژگی‌های فنی کامل",
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") +
      "/compare",
    applicationCategory: "AutomotiveApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
    },
    featureList: [
      "مقایسه موتور و قدرت",
      "مقایسه گیربکس و عملکرد",
      "مقایسه ایمنی و راحتی",
      "مقایسه تایر و چرخ",
      "مقایسه امکانات",
    ],
  };

  return (
    <>
      <Script
        id="comparison-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(comparisonJsonLd)}
      </Script>

      <div className="min-h-screen bg-black text-white">
        <div className="px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">مقایسه خودروها</h1>
            <p className="text-gray-300 text-lg">
              مقایسه کامل ویژگی‌های فنی خودروهای مختلف
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Typeaheads */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">خودرو اول</h3>
                <Typeahead
                  items={cars}
                  selected={carA}
                  onChange={(val) => {
                    setCarA(val);
                    setShowComparison(false);
                  }}
                  getLabel={(car) => {
                    if (!car) return "نامشخص";
                    const brand = car.brand_en || "";
                    const model = car.model_fa || "";
                    const trim = car.trim || "";
                    const label = `${brand} ${model} ${trim}`.trim();
                    return label || "نامشخص";
                  }}
                  placeholder="جستجو و انتخاب خودرو اول..."
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">خودرو دوم</h3>
                <Typeahead
                  items={cars}
                  selected={carB}
                  onChange={(val) => {
                    setCarB(val);
                    setShowComparison(false);
                  }}
                  getLabel={(car) => {
                    if (!car) return "نامشخص";
                    const brand = car.brand_en || "";
                    const model = car.model_fa || "";
                    const trim = car.trim || "";
                    const label = `${brand} ${model} ${trim}`.trim();
                    return label || "نامشخص";
                  }}
                  placeholder="جستجو و انتخاب خودرو دوم..."
                />
              </div>
            </div>

            {/* Compare Button */}
            <div className="text-center mb-8">
              <button
                onClick={() => setShowComparison(Boolean(carA && carB))}
                disabled={!carA || !carB}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                مقایسه خودروها
              </button>
            </div>

            {/* Comparison Section */}
            {showComparison && carA && carB && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-6 mb-6 mt-6">
                    <div className="text-center">
                      {/* <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-2 border border-blue-500/30">
                        <span className="text-2xl">🚗</span>
                      </div> */}
                      <h3 className="font-semibold text-white">
                        {carA.brand_en}
                      </h3>
                      <p className="text-sm text-gray-400">{carA.model_fa}</p>
                    </div>
                    <div className="text-gray-400 text-lg font-light">VS</div>
                    <div className="text-center">
                      {/* <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-2 border border-green-500/30">
                        <span className="text-2xl">🚗</span>
                      </div> */}
                      <h3 className="font-semibold text-white">
                        {carB.brand_en}
                      </h3>
                      <p className="text-sm text-gray-400">{carB.model_fa}</p>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-12">
                  {tabItems.map((tab) => (
                    <div key={tab.id} className="space-y-6">
                      <div className="text-center py-4">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                          <span className="text-xl">{tab.icon}</span>
                          <h3 className="font-semibold text-gray-200">
                            {tab.label}
                          </h3>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <ComparisonCard
                          car={carA}
                          color="blue"
                          title={`${carA.brand_en} ${carA.model_fa}`}
                          category={tab.id}
                          carA={carA}
                          carB={carB}
                        />
                        <ComparisonCard
                          car={carB}
                          color="green"
                          title={`${carB.brand_en} ${carB.model_fa}`}
                          category={tab.id}
                          carA={carA}
                          carB={carB}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ComparisonCard({ car, color, title, category, carA, carB }) {
  const getCategoryData = (car, category) => {
    switch (category) {
      case "engine":
        return {
          "حجم موتور": {
            value: `${
              car.technical_specs?.engine?.volume_cc || "نامشخص"
            } سی‌سی`,
            numeric: car.technical_specs?.engine?.volume_cc,
            better: "higher",
          },
          "نوع تنفس": {
            value: car.technical_specs?.engine?.breathing || "نامشخص",
            numeric: null,
            better: "equal",
          },
          قدرت: {
            value: `${
              car.technical_specs?.engine?.max_power_hp || "نامشخص"
            } اسب بخار`,
            numeric: car.technical_specs?.engine?.max_power_hp,
            better: "higher",
          },
          گشتاور: {
            value: `${
              car.technical_specs?.engine?.max_torque_nm || "نامشخص"
            } نیوتن متر`,
            numeric: car.technical_specs?.engine?.max_torque_nm,
            better: "higher",
          },
        };
      case "transmission":
        return {
          "نوع گیربکس": {
            value: car.technical_specs?.transmission?.type || "نامشخص",
            numeric: null,
            better: "equal",
          },
          "تعداد دنده": {
            value: `${
              car.technical_specs?.transmission?.gears || "نامشخص"
            } دنده`,
            numeric: car.technical_specs?.transmission?.gears,
            better: "higher",
          },
          "شتاب 0-100": {
            value: `${
              car.technical_specs?.performance?.acceleration_0_100 || "نامشخص"
            } ثانیه`,
            numeric: car.technical_specs?.performance?.acceleration_0_100,
            better: "lower",
          },
          "مصرف سوخت": {
            value: `${
              car.technical_specs?.performance
                ?.fuel_combined_consumption_l_100km || "نامشخص"
            } لیتر در 100 کیلومتر`,
            numeric:
              car.technical_specs?.performance
                ?.fuel_combined_consumption_l_100km,
            better: "lower",
          },
        };
      case "safety":
        return {
          "کیسه هوا": {
            value: `${car.technical_specs?.safety?.airbags || "نامشخص"} عدد`,
            numeric: car.technical_specs?.safety?.airbags,
            better: "higher",
          },
          "سیستم ترمز": {
            value: car.technical_specs?.safety?.brakes || "نامشخص",
            numeric: null,
            better: "equal",
          },
          "سیستم پایداری": {
            value: car.technical_specs?.safety?.stability_system
              ? "دارد"
              : "ندارد",
            numeric: car.technical_specs?.safety?.stability_system ? 1 : 0,
            better: "higher",
          },
          "تعلیق جلو": {
            value: car.technical_specs?.chassis?.front_suspension || "نامشخص",
            numeric: null,
            better: "equal",
          },
        };
      case "tires":
        return {
          "سایز تایر": {
            value: car.technical_specs?.tires?.size || "نامشخص",
            numeric: null,
            better: "equal",
          },
          "نوع رینگ": {
            value: car.technical_specs?.tires?.rim_type || "نامشخص",
            numeric: null,
            better: "equal",
          },
          فرمان: {
            value: car.technical_specs?.chassis?.steering || "نامشخص",
            numeric: null,
            better: "equal",
          },
        };
      case "features":
        return {
          "سقف شیشه‌ای": {
            value: car.technical_specs?.features?.sunroof ? "دارد" : "ندارد",
            numeric: car.technical_specs?.features?.sunroof ? 1 : 0,
            better: "higher",
          },
          نمایشگر: {
            value: car.technical_specs?.features?.display || "نامشخص",
            numeric: null,
            better: "equal",
          },
          کولر: {
            value: car.technical_specs?.features?.ac || "نامشخص",
            numeric: null,
            better: "equal",
          },
          "شیشه برقی": {
            value: car.technical_specs?.features?.power_windows || "نامشخص",
            numeric: null,
            better: "equal",
          },
        };
      default:
        return {};
    }
  };

  const isCarA = color === "blue";
  const categoryData = getCategoryData(car, category);

  const isBetterValue = (key, value) => {
    if (!carA || !carB) return false;

    const carAData = getCategoryData(carA, category)[key];
    const carBData = getCategoryData(carB, category)[key];

    if (
      !carAData ||
      !carBData ||
      carAData.numeric === null ||
      carBData.numeric === null
    ) {
      return false;
    }

    const aValue = carAData.numeric;
    const bValue = carBData.numeric;

    if (carAData.better === "higher") {
      return isCarA ? aValue > bValue : bValue > aValue;
    } else if (carAData.better === "lower") {
      return isCarA ? aValue < bValue : bValue < aValue;
    }

    return false;
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:shadow-lg">
      <div className="mb-6">
        <h3
          className={`text-lg font-semibold ${
            isCarA ? "text-blue-400" : "text-green-400"
          }`}
        >
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {Object.entries(categoryData).map(([key, data]) => {
          const isBetter = isBetterValue(key, data.value);
          return (
            <div
              key={key}
              className="flex justify-between items-center py-3 px-4 bg-gray-900 rounded-xl border border-gray-600"
            >
              <span className="text-gray-300 font-medium text-sm">{key}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`font-semibold text-sm ${
                    isBetter
                      ? "text-green-400 bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30"
                      : "text-white"
                  }`}
                >
                  {data.value}
                </span>
                {isBetter && <span className="text-green-400 text-xs">✓</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
