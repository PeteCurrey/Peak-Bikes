"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.slug}`} className="group block">
        <div className="bg-peak-black border border-white/[0.04] overflow-hidden transition-all duration-400 group-hover:border-peak-accent/25 group-hover:-translate-y-1">
          {/* Image */}
          <div className="aspect-[4/3] bg-peak-card-bg relative overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              fill
              className="object-cover transition-transform duration-600 group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {product.tag && (
              <span className="absolute top-3 left-3 bg-peak-accent text-peak-black text-[0.45rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 z-10">
                {product.tag}
              </span>
            )}
            <span className="absolute bottom-3 right-3 w-[34px] h-[34px] bg-peak-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-peak-white text-[0.65rem] z-10">
              ⤢
            </span>
          </div>

          {/* Info */}
          <div className="p-5">
            <div className="text-[0.5rem] tracking-[0.2em] uppercase text-peak-accent font-medium mb-1.5">
              {product.brand}
            </div>
            <div className="font-display text-[1.25rem] tracking-wide mb-1.5">
              {product.name}
            </div>
            <div className="text-[0.95rem] font-medium text-peak-white">
              £{product.price.toLocaleString()}
              {product.originalPrice && (
                <span className="text-peak-muted line-through font-light text-[0.8rem] ml-2">
                  £{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Stars */}
            <div className="flex gap-[2px] mt-2.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-[0.65rem] ${star <= product.rating ? "star" : "star-empty"}`}>
                  ★
                </span>
              ))}
            </div>

            {/* Stock */}
            {product.inStock && (
              <div className="text-[0.55rem] text-peak-green mt-1.5 tracking-wide">
                ✓ In Stock{product.finance ? " — Finance Available" : " — Free Delivery"}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
