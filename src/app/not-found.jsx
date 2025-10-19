export const metadata = {
  title: "صفحه پیدا نشد",
  description: "لینک مورد نظر شما یافت نشد. از مسیرهای زیر استفاده کنید.",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-white mb-3">صفحه پیدا نشد</h1>
      <p className="text-gray-300 mb-8">
        لینک مورد نظر شما در دسترس نیست. مسیرهای سریع زیر می‌تواند کمک کند:
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/" className="px-4 py-2 rounded bg-blue-600 text-white">
          صفحه اصلی
        </a>
        <a
          href="/issues"
          className="px-4 py-2 rounded bg-neutral-800 text-white"
        >
          لیست مشکلات
        </a>
        <a
          href="/issueCheck"
          className="px-4 py-2 rounded bg-neutral-800 text-white"
        >
          بررسی مشکلات
        </a>
        <a
          href="/sound-check"
          className="px-4 py-2 rounded bg-neutral-800 text-white"
        >
          بررسی صدا
        </a>
      </div>
    </div>
  );
}
