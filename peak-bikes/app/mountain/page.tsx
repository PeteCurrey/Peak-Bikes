"use client";

import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function MountainBikesPage() {
  const category = categories.find((c) => c.slug === "mountain")!;
  const mtbProducts = products.filter((p) => p.category === "mountain");

  return (
    <>
      <div className="h-[50vh] relative overflow-hidden flex items-end">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-peak-black via-peak-black/50 to-peak-black/30" />
        <div className="relative z-10 px-6 lg:px-12 pb-12">
          <div className="text-[0.6rem] text-peak-muted tracking-[0.15em] uppercase mb-3">
            <Link href="/" className="hover:text-peak-accent transition-colors">Home</Link>
            <span className="mx-2 text-peak-mid-grey">/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none">{category.name}</h1>
          <p className="text-peak-muted text-[0.9rem] mt-2 max-w-[500px]">{category.description}</p>
        </div>
      </div>

      <div className="sticky top-[70px] z-[100] px-6 lg:px-12 py-4 border-b border-white/[0.04] bg-peak-black flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-2.5 flex-wrap">
          {category.filters.map((filter) => (
            <button
              key={filter}
              className="border border-peak-mid-grey text-peak-muted px-4 py-1.5 font-body text-[0.6rem] tracking-[0.1em] transition-all hover:border-peak-accent hover:text-peak-white flex items-center gap-1.5"
            >
              {filter} <span className="text-[0.4rem]">▼</span>
            </button>
          ))}
        </div>
        <span className="text-[0.65rem] text-peak-muted tracking-wider">
          Showing {mtbProducts.length} results
        </span>
      </div>

      <div className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mtbProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
