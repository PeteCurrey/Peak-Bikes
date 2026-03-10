import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      {/* Newsletter */}
      <div className="px-6 lg:px-12 py-16 border-b border-white/[0.04]">
        <div className="flex justify-between items-center max-w-[900px] mx-auto gap-8 flex-wrap">
          <div>
            <h3 className="font-display text-2xl tracking-wide mb-1">JOIN THE PELOTON</h3>
            <p className="text-peak-muted text-sm">Exclusive deals, new arrivals, and riding stories. No spam, ever.</p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-peak-grey border border-peak-mid-grey border-r-0 text-peak-white px-5 py-3 font-body text-sm w-[280px] outline-none transition-colors focus:border-peak-accent placeholder:text-peak-muted"
            />
            <button className="bg-peak-accent border border-peak-accent text-peak-black px-6 py-3 font-body text-[0.6rem] font-bold tracking-[0.2em] uppercase transition-all hover:bg-peak-accent-glow">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="px-6 lg:px-12 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <span className="w-[30px] h-[30px] border-2 border-peak-accent rounded-full flex items-center justify-center text-[0.65rem] text-peak-accent">▲</span>
              <span className="font-display text-[1.5rem] tracking-[0.25em] text-peak-white">PEAK BIKES</span>
            </Link>
            <p className="text-peak-muted text-[0.8rem] leading-relaxed max-w-[280px]">
              The UK&apos;s most uncompromising cycling destination. Every ride, every rider, every road — we&apos;ve got you covered.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[0.85rem] tracking-[0.2em] mb-4 text-peak-white">Shop</h4>
            {["Road Bikes", "Mountain Bikes", "Gravel Bikes", "Electric Bikes", "Components", "Clothing"].map((item) => (
              <Link key={item} href="/road" className="block text-peak-muted text-[0.75rem] mb-2.5 transition-colors hover:text-peak-accent">
                {item}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-display text-[0.85rem] tracking-[0.2em] mb-4 text-peak-white">Support</h4>
            {["Delivery & Returns", "Bike Fitting", "Finance Options", "Size Guide", "Workshop"].map((item) => (
              <Link key={item} href="#" className="block text-peak-muted text-[0.75rem] mb-2.5 transition-colors hover:text-peak-accent">
                {item}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-display text-[0.85rem] tracking-[0.2em] mb-4 text-peak-white">Company</h4>
            {[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
              { label: "Affiliate Program", href: "#" },
              { label: "Contact", href: "#" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block text-peak-muted text-[0.75rem] mb-2.5 transition-colors hover:text-peak-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-white/[0.04] flex-wrap gap-4">
          <span className="text-[0.65rem] text-peak-muted tracking-wider">© 2026 Peak Bikes Ltd. All rights reserved.</span>
          <div className="flex gap-3">
            {["IG", "TW", "YT", "ST"].map((s) => (
              <a key={s} href="#" className="w-[34px] h-[34px] border border-peak-mid-grey flex items-center justify-center text-peak-muted text-[0.6rem] font-medium transition-all hover:border-peak-accent hover:text-peak-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
