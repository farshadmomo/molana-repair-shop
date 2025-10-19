"use client";
import dynamic from "next/dynamic";

const AudioGrid = dynamic(() => import("./AudioGrid"), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-zinc-100">
      در حال بارگذاری...
    </div>
  ),
});

export default function AudioGridClient(props) {
  return <AudioGrid {...props} />;
}
