"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryCardProps {
  name: string;
  slug: string;
  count: string;
  image: string;
  index: number;
}

export default function CategoryCard({ name, slug, count, image, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/${slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden border border-white/[0.04] transition-colors duration-500 group-hover:border-peak-accent/40">
          {/* BG Image */}
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]">
            <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
          </div>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-peak-black/95 via-peak-black/40 to-transparent z-[1]" />

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-[38px] h-[38px] border border-white/10 flex items-center justify-center z-[2] opacity-0 translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-peak-accent text-peak-accent text-sm">
            →
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-[2] translate-y-2.5 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-display text-[1.7rem] tracking-wide mb-1">{name}</h3>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-peak-accent font-medium">
              {count} Products
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
