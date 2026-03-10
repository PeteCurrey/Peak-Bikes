"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, SectionHeader, StatsBar } from "@/components/Sections";

const values = [
  {
    icon: "▲",
    title: "PEAK PERFORMANCE",
    desc: "We only stock products we'd ride ourselves. Every brand is vetted, every product tested. If it doesn't meet our standards, it doesn't make the cut.",
  },
  {
    icon: "◆",
    title: "EXPERT KNOWLEDGE",
    desc: "Our team of qualified mechanics, bike fitters, and Category 1 racers are here to guide you. Real expertise, not just a sales pitch.",
  },
  {
    icon: "●",
    title: "RIDER COMMUNITY",
    desc: "We sponsor local racing, host group rides, and champion grassroots cycling. Because cycling is better when we ride together.",
  },
];

const aboutStats = [
  { value: "2019", suffix: "", label: "Founded" },
  { value: "120", suffix: "+", label: "Team Members" },
  { value: "Peak", suffix: " District", label: "Headquarters" },
  { value: "24", suffix: "/7", label: "Customer Support" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="h-[60vh] relative overflow-hidden flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&q=85"
          alt="Cycling in mountains"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-peak-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="section-tag justify-center mb-4">Our Story</div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-wide mb-4">
            BUILT BY<br />RIDERS
          </h1>
          <p className="text-peak-muted text-base max-w-[550px] mx-auto leading-relaxed">
            We started with a simple belief: every cyclist deserves access to the world&apos;s best equipment, expert advice, and a shopping experience that matches the thrill of the ride.
          </p>
        </motion.div>
      </div>

      {/* Origin Story */}
      <section className="px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden border border-white/[0.04]">
              <Image
                src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=85"
                alt="Cycling passion"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeader tag="The Beginning" title="FROM GARAGE TO SUMMIT" />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4">
                <p className="text-peak-muted text-[0.9rem] leading-relaxed">
                  Peak Bikes was born in 2019 from a cramped workshop in the Peak District. Frustrated by fragmented online cycling retail, our founders — all competitive riders — set out to build the definitive UK cycling destination.
                </p>
                <p className="text-peak-muted text-[0.9rem] leading-relaxed">
                  Today, we partner with over 800 brands and serve 250,000+ riders across the UK and Europe. But our mission hasn&apos;t changed: put the rider first, always.
                </p>
                <p className="text-peak-accent font-medium text-[0.9rem]">
                  Every product hand-selected. Every recommendation backed by real ride miles.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-12 pb-24">
        <SectionHeader tag="Our Values" title="What We Stand For" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-12">
          {values.map((val, i) => (
            <Reveal key={val.title} delay={i * 0.1}>
              <div className="p-10 border border-white/[0.04] transition-colors duration-400 hover:border-peak-accent/30 h-full">
                <div className="text-3xl mb-6">{val.icon}</div>
                <h3 className="font-display text-[1.4rem] tracking-wider mb-3">{val.title}</h3>
                <p className="text-peak-muted text-[0.8rem] leading-relaxed">{val.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/[0.04]">
        {aboutStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="py-14 px-8 text-center border-r border-white/[0.04] last:border-r-0">
              <div className="font-display text-[3.2rem] text-peak-white tracking-wide">
                {stat.value}<span className="text-peak-accent">{stat.suffix}</span>
              </div>
              <div className="text-[0.55rem] tracking-[0.3em] uppercase text-peak-muted mt-1.5">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,28,0.04)_0%,transparent_60%)]" />
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none tracking-wide max-w-[700px] mx-auto mb-6">
            JOIN THE PEAK<br />COMMUNITY
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-peak-muted text-[0.9rem] leading-relaxed max-w-[500px] mx-auto mb-10">
            Whether you&apos;re a weekend warrior or a WorldTour dreamer, there&apos;s a place for you here.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/road" className="btn-primary">Shop Now</Link>
            <button className="btn-ghost">Contact Us</button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
