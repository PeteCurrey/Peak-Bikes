import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peak Bikes — Ride Beyond the Summit",
  description:
    "The UK's most uncompromising cycling destination. 800+ brands, 50,000+ products. Road, Mountain, Gravel, Electric bikes and everything in between.",
  openGraph: {
    title: "Peak Bikes — Ride Beyond the Summit",
    description: "The UK's most uncompromising cycling destination.",
    siteName: "Peak Bikes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body className="font-body font-light">
        {/* Film grain overlay */}
        <div className="grain-overlay" />

        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
