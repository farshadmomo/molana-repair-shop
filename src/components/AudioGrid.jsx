"use client";

import React, { useRef, useEffect } from "react";

export default function AudioGrid({ audioFiles }) {
  const audioRefs = useRef([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, audioFiles.length);
  }, [audioFiles.length]);

  const handlePlay = (indexToPlay) => {
    audioRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx !== indexToPlay && !el.paused) {
        el.pause();
        el.currentTime = 0;
      }
    });
  };

  const getSolutionLines = (title) => {
    const t = String(title || "").toLowerCase();
    const contains = (arr) => arr.some((k) => t.includes(k));

    if (contains(["engine", "motor", "\u0645\u0648\u062a\u0648\u0631"])) {
      return [
        "سطح و کیفیت روغن موتور را بررسی و در صورت نیاز تعویض کنید.",
        "تسمه‌ها، پولی‌ها و سفتی آن‌ها را کنترل کنید.",
        "تنظیم بودن جرقه‌زنی و انژکتورها را بازبینی کنید.",
        "در صورت ادامه صدا، کمپرس و یاتاقان‌ها بررسی شود.",
      ];
    }
    if (
      contains([
        "bearing",
        "wheel",
        "\u0628\u0644\u0628\u0631\u06cc\u0646\u06af",
        "\u0686\u0631\u062e",
      ])
    ) {
      return [
        "چرخ‌ها را بالا بزنید و لقی جانبی را بررسی کنید.",
        "در صورت وجود لقی/صدای سایشی، تعویض بلبرینگ توصیه می‌شود.",
        "گشتاور بستن مهره‌ها و سلامت توپی چرخ را کنترل کنید.",
      ];
    }
    if (contains(["brake", "\u062a\u0631\u0645\u0632"])) {
      return [
        "سایش لنت‌ها و دیسک/کاسه را بررسی و در صورت نیاز تعویض کنید.",
        "وجود جسم خارجی یا گرد و غبار بین لنت و دیسک را برطرف کنید.",
        "هواگیری سیستم ترمز و بررسی روغن ترمز انجام شود.",
      ];
    }
    if (contains(["exhaust", "\u0627\u06af\u0632\u0648\u0632"])) {
      return [
        "وجود نشتی یا ترک در منیفولد/اگزوز را بررسی و رفع کنید.",
        "بست‌ها و آویزهای اگزوز را محکم و واشرها را تعویض کنید.",
      ];
    }
    if (
      contains([
        "belt",
        " \u062a\u0633\u0645\u0647",
        "\u062a\u0633\u0645\u0647",
      ])
    ) {
      return [
        "سفتی و سلامت تسمه‌ها را بررسی و در صورت خشک/ترک‌خورده بودن تعویض کنید.",
        "پولی هرزگرد و تسمه سفت‌کن را بررسی کنید.",
      ];
    }
    if (
      contains([
        "suspension",
        "\u062c\u0644\u0648\u0628\u0646\u062f\u06cc",
        "\u0641\u0646\u0631",
        "\u06a9\u0645\u06a9",
      ])
    ) {
      return [
        "बوش‌ها، طبق‌ها و سیبک‌ها را از نظر لقی بررسی و تعویض کنید.",
        "سلامت کمک‌فنرها و لاستیک‌های ضربه‌گیر را کنترل کنید.",
      ];
    }
    return [
      "محل دقیق صدا را شناسایی کنید (موتور/چرخ/اگزوز/جلوبندی).",
      "اتصالات شل و قطعات فرسوده را سفت یا تعویض کنید.",
      "در صورت تداوم مشکل، بررسی تخصصی در تعمیرگاه انجام شود.",
    ];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {audioFiles.map((audio, index) => (
        <div
          key={audio.fileName}
          className="rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <h2
            className="font-semibold mb-3 text-zinc-100 truncate"
            title={audio.title}
          >
            {audio.title}
          </h2>
          <audio
            ref={(el) => (audioRefs.current[index] = el)}
            controls
            loop
            className="w-full mt-1"
            onPlay={() => handlePlay(index)}
          >
            <source src={audio.src} type={audio.type} />
            مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
          </audio>
          <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-zinc-200 leading-7">
            <p className="mb-2">راه حل پیشنهادی:</p>
            <ul className="list-disc pr-5 space-y-1 text-sm">
              {getSolutionLines(audio.title).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
