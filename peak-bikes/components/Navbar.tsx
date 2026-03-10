"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/road", label: "Road" },
  { href: "/mountain", label: "Mountain" },
  { href: "/road", label: "Gravel" },
  { href: "/road", label: "Electric" },
  { href: "/road", label: "Components" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 lg:px-12 h-[70px] flex justify-between items-center bg-peak-black/85 backdrop-blur-xl border-b border-white/[0.04]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="w-[30px] h-[30px] border-2 border-peak-accent rounded-full flex items-center justify-center text-[0.65rem] text-peak-accent transition-all group-hover:bg-peak-accent group-hover:text-peak-black">
          ▲
        </span>
        <span className="font-display text-[1.5rem] tracking-[0.25em] text-peak-white">
          PEAK BIKES
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-10 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[0.7rem] tracking-[0.15em] uppercase font-normal transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-peak-accent after:transition-all after:duration-300 ${
              pathname === link.href
                ? "text-peak-white after:w-full"
                : "text-peak-muted hover:text-peak-white after:w-0 hover:after:w-full"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex gap-3 items-center">
        <button className="text-peak-muted hover:text-peak-white transition-colors p-2">
          <Search size={18} strokeWidth={1.5} />
        </button>
        <button className="relative border border-peak-mid-grey text-peak-white px-4 py-2 text-[0.65rem] tracking-[0.15em] uppercase font-body font-normal transition-all hover:border-peak-accent hover:text-peak-accent">
          Basket
          <span className="absolute -top-1.5 -right-1.5 bg-peak-accent text-peak-black text-[0.5rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-peak-white ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-[1px] bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[1px] bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1px] bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-peak-black/95 backdrop-blur-xl border-b border-white/[0.04] p-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-peak-muted hover:text-peak-white transition-colors text-sm tracking-[0.1em] uppercase border-b border-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
