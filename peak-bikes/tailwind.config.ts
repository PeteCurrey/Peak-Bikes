import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peak: {
          black: "#0a0a0a",
          white: "#f5f0eb",
          cream: "#e8e0d5",
          accent: "#ff4d1c",
          "accent-glow": "#ff6b3d",
          grey: "#131313",
          "mid-grey": "#2a2a2a",
          "card-bg": "#161616",
          muted: "#8a8580",
          gold: "#c9a96e",
          green: "#2ecc71",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "scroll-pulse": "scrollPulse 2s ease infinite",
        "loader-bar": "loaderBar 2s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        "hero-in": "heroIn 1.2s ease forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollPulse: {
          "0%": { top: "-100%" },
          "50%": { top: "100%" },
          "100%": { top: "100%" },
        },
        loaderBar: {
          to: { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heroIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
