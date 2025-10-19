import ComparePageClient from "../../components/ComparePageClient";

export const metadata = {
  title: "مقایسه خودروها - مقایسه ویژگی‌های فنی | تعمیرگاه مولانا",
  description:
    "مقایسه کامل خودروها با ویژگی‌های فنی، موتور، گیربکس، ایمنی و امکانات. مقایسه دقیق خودروهای مختلف برای انتخاب بهتر.",
  keywords: [
    "مقایسه خودرو",
    "مقایسه ماشین",
    "ویژگی‌های فنی خودرو",
    "مقایسه موتور خودرو",
    "مقایسه گیربکس",
    "مقایسه ایمنی خودرو",
    "تعمیرگاه مولانا",
  ],
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "مقایسه خودروها - مقایسه ویژگی‌های فنی | تعمیرگاه مولانا",
    description:
      "مقایسه کامل خودروها با ویژگی‌های فنی, موتور, گیربکس, ایمنی و امکانات",
    type: "website",
    url: "/compare",
  },
  twitter: {
    card: "summary",
    title: "مقایسه خودروها - مقایسه ویژگی‌های فنی | تعمیرگاه مولانا",
    description:
      "مقایسه کامل خودروها با ویژگی‌های فنی, موتور, گیربکس, ایمنی و امکانات",
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
