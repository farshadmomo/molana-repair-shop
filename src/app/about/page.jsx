export const metadata = {
  title: "درباره ما - تعمیرگاه مولانا | تعمیرگاه مولانا",
  description:
    "تعمیرگاه مولانا با بیش از 10 سال تجربه در خدمات تخصصی تعمیر و عیب‌یابی خودرو. آدرس، شماره تماس و اطلاعات تماس تعمیرگاه.",
  keywords: [
    "درباره تعمیرگاه مولانا",
    "اطلاعات تماس تعمیرگاه",
    "آدرس تعمیرگاه",
    "شماره تماس تعمیرگاه",
    "تعمیرگاه خودرو",
    "تعمیرگاه مولانا",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "درباره ما - تعمیرگاه مولانا | تعمیرگاه مولانا",
    description:
      "تعمیرگاه مولانا با بیش از 10 سال تجربه در خدمات تخصصی تعمیر و عیب‌یابی خودرو",
    type: "website",
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: "درباره ما - تعمیرگاه مولانا | تعمیرگاه مولانا",
    description:
      "تعمیرگاه مولانا با بیش از 10 سال تجربه در خدمات تخصصی تعمیر و عیب‌یابی خودرو",
  },
};

export default function AboutPage() {
  const placeName = "تعمیرگاه مولانا";
  const phone = "09360936223";
  const mapsUrl =
    "https://www.google.com/maps/place/35%C2%B050'07.8%22N+50%C2%B059'15.3%22E/@35.835495,50.987583,16z/data=!4m4!3m3!8m2!3d35.835495!4d50.987583?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D";
  const embedSrc =
    "https://www.google.com/maps?q=35.835495,50.987583&z=16&output=embed";

  return (
    <div className="w-full mx-auto py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {placeName}
          </h1>
          <p className="text-gray-300">
            ارائه دهنده خدمات تخصصی تعمیر و عیب‌یابی خودرو با تمرکز بر کیفیت،
            امانتداری و رضایت مشتری.
          </p>
        </header>

        <section className="bg-black/40 border border-gray-800 rounded-2xl p-5 md:p-6 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">اطلاعات تماس</h2>
              <p className="text-gray-400">
                برای هماهنگی و مشاوره با ما در تماس باشید.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5c0-1.105.895-2 2-2h2a2 2 0 0 1 2 1.723l.272 1.907a2 2 0 0 1-.577 1.73l-1.23 1.23a16.91 16.91 0 0 0 7.945 7.945l1.23-1.23a2 2 0 0 1 1.73-.577L19.277 16A2 2 0 0 1 21 18v2c0 1.105-.895 2-2 2h-1C9.82 22 2 14.18 2 5V5Z"
                    fill="currentColor"
                  />
                </svg>
                تماس: {phone}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 hover:border-blue-600 text-blue-300 hover:text-white px-4 py-2 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                    fill="currentColor"
                  />
                </svg>
                مسیریابی در گوگل‌مپ
              </a>
            </div>
          </div>
        </section>

        <section className="bg-black/40 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="aspect-video w-full bg-neutral-900">
            <iframe
              title="نقشه تعمیرگاه مولانا"
              src={embedSrc}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 md:p-5 flex items-center justify-between border-t border-gray-800">
            <div className="text-gray-300 text-sm">
              مختصات: 35.835495, 50.987583
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-300 hover:text-white transition"
            >
              مشاهده در نقشه
            </a>
          </div>
        </section>

        <section className="bg-black/40 border border-gray-800 rounded-2xl p-5 md:p-6 backdrop-blur space-y-3">
          <h2 className="text-xl font-semibold text-white">درباره ما</h2>
          <p className="text-gray-300 leading-7">
            در {placeName} با بهره‌گیری از تجربه و دانش فنی، خدمات تعمیر و
            نگهداری انواع خودرو ارائه می‌شود. ما تلاش می‌کنیم با عیب‌یابی دقیق،
            استفاده از قطعات باکیفیت، و رعایت زمان‌بندی، بهترین تجربه را برای
            شما رقم بزنیم.
          </p>
        </section>
      </div>
    </div>
  );
}
