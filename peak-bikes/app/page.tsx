"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories, products, brands, marqueeItems } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Reveal, StatsBar, Marquee, SectionHeader } from "@/components/Sections";
import { useState } from "react";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Road", "MTB", "Gear"];

  const trendingProducts = products.slice(0, 6);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="h-screen relative flex items-center overflow-hidden">
        {/* BG Image with parallax */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1920&q=85"
            alt="Cyclist on road at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-peak-black/[0.92] via-peak-black/70 via-40% to-peak-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-peak-black to-transparent to-30%" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="relative z-10 px-6 lg:px-12 max-w-[55%] max-lg:max-w-full"
        >
          <div className="section-tag mb-6">Introducing 2026 Collection</div>
          <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-wide mb-6">
            <span className="block bg-gradient-to-br from-peak-white via-peak-cream to-peak-gold bg-clip-text text-transparent">
              RIDE
            </span>
            <span className="block font-serif italic text-[0.5em] text-peak-accent tracking-wider">
              beyond the
            </span>
            <span className="block bg-gradient-to-br from-peak-white via-peak-cream to-peak-gold bg-clip-text text-transparent">
              SUMMIT
            </span>
          </h1>
          <p className="text-peak-muted text-[0.95rem] leading-relaxed max-w-[460px] mb-10">
            The UK&apos;s most uncompromising cycling destination. 800+ brands. 50,000+ products.
            Zero compromises. From carbon superbikes to Sunday cruisers — find your peak.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/road" className="btn-primary">Shop Collection</Link>
            <button className="btn-ghost">Watch Film ▶</button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[0.5rem] tracking-[0.3em] uppercase text-peak-muted">Scroll</span>
          <div className="w-[1px] h-10 bg-peak-mid-grey relative overflow-hidden scroll-line" />
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee items={marqueeItems} />

      {/* ═══ CATEGORIES ═══ */}
      <section className="px-6 lg:px-12 py-24">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-8">
          <SectionHeader
            tag="Shop by Discipline"
            title="Find Your Terrain"
          />
          <Reveal delay={0.2}>
            <p className="text-peak-muted text-[0.9rem] leading-relaxed max-w-[480px]">
              Every ride starts with the right machine. Whether you&apos;re chasing KOMs or exploring gravel paths less travelled.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PRODUCT ═══ */}
      <section className="px-6 lg:px-12 py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,77,28,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal>
            <Link href="/product/factor-ostro-vam" className="block group">
              <div className="aspect-square relative overflow-hidden border border-white/[0.04] bg-peak-grey">
                <Image
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&q=85"
                  alt="Factor Ostro VAM"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="50vw"
                />
                <span className="absolute top-5 left-5 bg-peak-accent text-peak-black text-[0.5rem] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 z-10">
                  Editor&apos;s Pick
                </span>
              </div>
            </Link>
          </Reveal>
          <div>
            <SectionHeader tag="Featured Machine" title="FACTOR OSTRO VAM" />
            <Reveal delay={0.2}>
              <p className="text-peak-muted text-[0.9rem] leading-relaxed max-w-[480px] mt-4">
                The most aerodynamic bike ever tested at the Tour de France. A masterclass in engineering, hand-finished in Italy with relentless precision.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-6 my-10 py-10 border-t border-b border-white/[0.06]">
                {[
                  { value: "6.8", unit: "kg", label: "Frame Weight" },
                  { value: "T800", label: "Carbon Layup" },
                  { value: "12", unit: "spd", label: "Drivetrain" },
                  { value: "Disc", label: "Brake System" },
                ].map((spec) => (
                  <div key={spec.label}>
                    <div className="font-display text-[1.7rem] text-peak-white tracking-wide">
                      {spec.value}
                      {spec.unit && <span className="text-[0.5em] text-peak-muted">{spec.unit}</span>}
                    </div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-peak-muted mt-0.5">{spec.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display text-[3rem] text-peak-white">£8,499</span>
                <span className="text-[1.1rem] text-peak-muted line-through">£9,999</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/product/factor-ostro-vam" className="btn-primary">Configure & Buy</Link>
                <button className="btn-ghost">Full Specs</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ EDITORIAL BANNER ═══ */}
      <Reveal>
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&q=85"
            alt="Cycling in the mountains"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-peak-black/90 via-peak-black/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 max-w-[50%] max-lg:max-w-full">
            <div className="section-tag mb-4">The Journal</div>
            <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none tracking-wide mb-6">
              CONQUER THE<br />COLS OF FRANCE
            </h2>
            <p className="text-peak-muted text-[0.9rem] leading-relaxed max-w-[480px] mb-8">
              Our ultimate guide to riding the legendary Alpine passes. Gear, routes, and the stories that define cycling&apos;s greatest climbs.
            </p>
            <button className="btn-ghost self-start">Read the Story →</button>
          </div>
        </div>
      </Reveal>

      {/* ═══ STATS ═══ */}
      <StatsBar />

      {/* ═══ TRENDING PRODUCTS ═══ */}
      <section className="px-6 lg:px-12 py-24 bg-peak-grey">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <SectionHeader tag="Trending Now" title="What Riders Want" />
          <Reveal delay={0.2}>
            <div className="flex gap-1.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`border px-4 py-2 font-body text-[0.6rem] tracking-[0.15em] uppercase transition-all ${
                    activeFilter === f
                      ? "border-peak-accent text-peak-white bg-peak-accent/10"
                      : "border-peak-mid-grey text-peak-muted hover:border-peak-accent hover:text-peak-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ BRANDS ═══ */}
      <section className="px-6 lg:px-12 py-20 text-center">
        <SectionHeader tag="Trusted Partners" title="800+ Brands. One Destination." center />
        <Reveal delay={0.2}>
          <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
            {brands.map((brand) => (
              <span key={brand} className="font-display text-[1.6rem] tracking-[0.15em] text-peak-muted opacity-35 transition-all duration-400 hover:opacity-100 hover:text-peak-white cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 lg:px-12 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,28,0.04)_0%,transparent_60%)]" />
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide max-w-[800px] mx-auto mb-6">
            YOUR NEXT RIDE<br />STARTS HERE
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-peak-muted text-[0.9rem] leading-relaxed max-w-[550px] mx-auto mb-10">
            Join 250,000+ riders who trust Peak Bikes for their next adventure. Free delivery, price match guarantee, and expert advice — always.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/road" className="btn-primary">Start Shopping</Link>
            <button className="btn-ghost">Create Account</button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
