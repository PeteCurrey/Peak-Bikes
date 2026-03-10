"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200);
    const removeTimer = setTimeout(() => setRemoved(true), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 bg-peak-black z-[9999] flex items-center justify-center flex-col transition-all duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="font-display text-[clamp(3rem,8vw,6rem)] tracking-[0.3em] text-peak-white opacity-0 animate-[loaderFade_1.5s_ease_forwards]">
        PEAK BIKES
      </div>
      <div className="w-[200px] h-[2px] bg-peak-mid-grey mt-8 rounded overflow-hidden">
        <div className="h-full w-0 bg-gradient-to-r from-peak-accent to-peak-gold animate-[loaderBar_2s_ease_forwards]" />
      </div>
    </div>
  );
}
