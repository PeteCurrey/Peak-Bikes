"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats as statsData } from "@/lib/data";
import { useEffect, useState } from "react";

// ─── REVEAL WRAPPER ───
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── ANIMATED COUNTER ───
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.floor((frame / totalFrames) * value));
      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="font-display text-[3.2rem] text-peak-white tracking-wide">
      {count.toLocaleString()}
      <span className="text-peak-accent">{suffix}</span>
    </div>
  );
}

// ─── STATS BAR ───
export function StatsBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/[0.04]">
      {statsData.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.1}>
          <div className="py-14 px-8 text-center border-r border-white/[0.04] last:border-r-0">
            {stat.isStatic ? (
              <div className="font-display text-[3.2rem] text-peak-white tracking-wide">
                {stat.value}<span className="text-peak-accent">{stat.suffix}</span>
              </div>
            ) : (
              <AnimatedCounter value={stat.value as number} suffix={stat.suffix} />
            )}
            <div className="text-[0.55rem] tracking-[0.3em] uppercase text-peak-muted mt-1.5">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── MARQUEE ───
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="py-3.5 border-t border-b border-white/[0.04] overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-[0.85rem] tracking-[0.3em] text-peak-muted px-8 flex items-center gap-8 shrink-0">
            {item}
            <span className="w-1 h-1 bg-peak-accent rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ───
export function SectionHeader({
  tag,
  title,
  subtitle,
  center = false,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <Reveal>
        <div className={`section-tag ${center ? "justify-center" : ""}`}>{tag}</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-3 ${center ? "text-center" : ""}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={`text-peak-muted text-[0.9rem] leading-relaxed max-w-[480px] ${center ? "mx-auto text-center" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
