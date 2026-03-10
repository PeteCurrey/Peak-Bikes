"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Reveal, SectionHeader } from "@/components/Sections";
import { Truck, RotateCcw, Wrench } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug) || products[1]; // fallback to Factor
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(2);
  const [activeColor, setActiveColor] = useState(0);

  const images = product.images || [product.image];
  const sizes = product.sizes || ["S", "M", "L", "XL"];
  const colors = product.colors || ["Black"];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* PDP Layout */}
      <div className="pt-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-70px)]">
          {/* Gallery */}
          <div className="bg-peak-grey relative p-6 lg:p-12 flex flex-col">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex items-center justify-center overflow-hidden"
            >
              <div className="relative w-full aspect-square max-h-[70vh]">
                <Image
                  src={images[activeImage]}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  className="object-contain"
                  sizes="50vw"
                  priority
                />
              </div>
            </motion.div>
            <div className="flex gap-3 mt-6">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-[70px] h-[70px] border overflow-hidden transition-all ${
                    i === activeImage
                      ? "border-peak-accent opacity-100"
                      : "border-peak-mid-grey opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} width={70} height={70} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="px-6 lg:px-12 py-12 lg:py-16 flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="text-[0.6rem] text-peak-muted tracking-[0.12em] uppercase mb-8">
              <Link href="/" className="hover:text-peak-accent transition-colors">Home</Link>
              <span className="mx-2 text-peak-mid-grey">/</span>
              <Link href={`/${product.category}`} className="hover:text-peak-accent transition-colors capitalize">
                {product.category} Bikes
              </Link>
              <span className="mx-2 text-peak-mid-grey">/</span>
              <span>{product.name}</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-[0.6rem] tracking-[0.25em] uppercase text-peak-accent font-medium mb-2">
                {product.brand}
              </div>
              <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-wide mb-4">
                {product.name.toUpperCase()}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-[2px]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={`text-[0.65rem] ${s <= product.rating ? "star" : "star-empty"}`}>★</span>
                  ))}
                </div>
                {product.reviewCount && (
                  <span className="text-[0.7rem] text-peak-muted">{product.reviewCount} Reviews</span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-1">
                <span className="font-display text-[2.8rem]">£{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-[1.2rem] text-peak-muted line-through">£{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {product.originalPrice && (
                <div className="text-[0.6rem] text-peak-accent font-semibold tracking-[0.1em] uppercase mb-6">
                  Save £{(product.originalPrice - product.price).toLocaleString()} — Limited Time
                </div>
              )}

              {/* Description */}
              {product.description && (
                <p className="text-peak-muted text-[0.85rem] leading-relaxed mb-8 max-w-[480px]">
                  {product.description}
                </p>
              )}

              {/* Size Selector */}
              <div className="mb-6">
                <div className="text-[0.6rem] tracking-[0.15em] uppercase text-peak-muted mb-2.5 font-medium">
                  {product.category === "clothing" ? "Size" : "Frame Size"}
                </div>
                <div className="flex gap-2">
                  {sizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(i)}
                      className={`min-w-[44px] h-[44px] px-2 border flex items-center justify-center text-[0.65rem] font-medium transition-all ${
                        i === activeSize
                          ? "border-peak-accent text-peak-accent bg-peak-accent/[0.08]"
                          : "border-peak-mid-grey text-peak-muted hover:border-peak-white hover:text-peak-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-8">
                <div className="text-[0.6rem] tracking-[0.15em] uppercase text-peak-muted mb-2.5 font-medium">Colour</div>
                <div className="flex gap-2">
                  {colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(i)}
                      className={`min-w-[44px] h-[44px] px-3 border flex items-center justify-center text-[0.5rem] font-medium uppercase tracking-wider transition-all ${
                        i === activeColor
                          ? "border-peak-accent text-peak-accent bg-peak-accent/[0.08]"
                          : "border-peak-mid-grey text-peak-muted hover:border-peak-white hover:text-peak-white"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button className="btn-primary flex-1">
                  Add to Basket — £{product.price.toLocaleString()}
                </button>
                <button className="w-[52px] h-[52px] border border-peak-mid-grey flex items-center justify-center text-peak-muted text-lg transition-all hover:border-peak-accent hover:text-peak-accent bg-transparent">
                  ♡
                </button>
              </div>

              {/* Meta */}
              <div className="flex gap-6 pt-6 border-t border-white/[0.06] flex-wrap">
                <div className="flex items-center gap-2 text-[0.6rem] text-peak-muted tracking-wide">
                  <Truck size={14} className="text-peak-accent" /> Free Next-Day Delivery
                </div>
                <div className="flex items-center gap-2 text-[0.6rem] text-peak-muted tracking-wide">
                  <RotateCcw size={14} className="text-peak-accent" /> 30 Day Returns
                </div>
                <div className="flex items-center gap-2 text-[0.6rem] text-peak-muted tracking-wide">
                  <Wrench size={14} className="text-peak-accent" /> Expert Build
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      {product.specs && (
        <section className="px-6 lg:px-12 py-16 border-t border-white/[0.04]">
          <SectionHeader tag="Full Specifications" title="Technical Details" />
          <Reveal delay={0.2}>
            <div className="grid grid-cols-[1fr_2fr] max-w-[900px] mt-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="contents">
                  <div className="py-3.5 border-b border-white/[0.06] text-[0.7rem] text-peak-muted tracking-[0.1em] uppercase">
                    {key}
                  </div>
                  <div className="py-3.5 border-b border-white/[0.06] text-[0.85rem]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="px-6 lg:px-12 py-20 bg-peak-grey">
          <SectionHeader tag="Recommended" title="You May Also Like" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
