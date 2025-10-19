import CarIssueForm from "../../components/CarIssueForm";

export const metadata = {
  title: "فرم عیب‌یابی خودرو - تشخیص مشکلات ماشین | تعمیرگاه مولانا",
  description:
    "فرم تخصصی عیب‌یابی خودرو برای تشخیص دقیق مشکلات. وارد کردن مشخصات خودرو و دریافت راهنمای عیب‌یابی تخصصی.",
  keywords: [
    "فرم عیب‌یابی خودرو",
    "تشخیص مشکلات ماشین",
    "عیب‌یابی آنلاین خودرو",
    "فرم تعمیر خودرو",
    "تعمیرگاه مولانا",
  ],
  alternates: { canonical: "/issueCheck" },
  openGraph: {
    title: "فرم عیب‌یابی خودرو - تشخیص مشکلات ماشین | تعمیرگاه مولانا",
    description: "فرم تخصصی عیب‌یابی خودرو برای تشخیص دقیق مشکلات",
    type: "website",
    url: "/issueCheck",
  },
  twitter: {
    card: "summary",
    title: "فرم عیب‌یابی خودرو - تشخیص مشکلات ماشین | تعمیرگاه مولانا",
    description: "فرم تخصصی عیب‌یابی خودرو برای تشخیص دقیق مشکلات",
  },
};

export default function IssueCheckPage() {
  return (
    <div className="w-full mx-auto py-10 ">
      <h1 className="text-3xl font-bold mb-6">فرم بررسی مشکلات خودرو</h1>
      <CarIssueForm />
    </div>
  );
}
