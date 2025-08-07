// app/problems/page.js
import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import HamburgerMenu from "@/components/HamburgerMenu";

export default async function Issues() {
  const filePath = path.join("public", "car-problems.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const categories = JSON.parse(jsonData);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
       <Head>
        <title>راهنمای جامع عیب‌یابی خودرو و راه‌حل‌ها</title>
        <meta name="description" content="لیست کامل مشکلات رایج خودرو، دسته‌بندی شده بر اساس نوع مشکل (موتور، گیربکس، ترمز و ...)، همراه با راه‌حل‌های دقیق. با جستجوی مشکل خودرو خود، سریع‌ترین راه‌حل را پیدا کنید." />
      </Head>

      <h1 className="text-white text-4xl font-bold text-center">
        راهنمای جامع عیب‌یابی خودرو
      </h1>

      <p className="text-gray-300 text-center mt-4 text-xl">
        برای یافتن سریع راه‌حل، روی دسته‌بندی مورد نظر خود کلیک کنید:
      </p>

      <HamburgerMenu categories={categories}/>

      <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-2xl mt-12">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="flex flex-col items-start gap-6 mb-10">
            <h2
              id={category.category.replace(/\s/g, "-")}
              className="text-white text-2xl font-bold mt-10 border-b-4 border-blue-300 pb-3 w-full"
            >
              {category.category}
            </h2>
            <div className="flex flex-row flex-wrap gap-7 w-full">
              {category.problems.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] min-w-[260px] flex flex-col items-start gap-3 mb-4 bg-gray-900 bg-opacity-90 border border-gray-700 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl shadow-lg"
                  style={{ boxShadow: "0 8px 36px 0 rgba(0,118,255,0.07)" }}
                >
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.problem}</h3>
                  {item.solutions && item.solutions.length > 0 && (
                    <>
                      <h4 className="text-gray-300 font-medium border-b border-gray-600 pb-1 mb-2 text-base">
                        راه‌حل‌ها:
                      </h4>
                      <ul className="list-disc pl-6 text-gray-200 space-y-2">
                        {item.solutions.map((solution, solIndex) => (
                          <li key={solIndex} className="leading-7">
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
