import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crownyears.vercel.app"),
  title: "Crown Years — Clear Next Moves for Midlife",
  description:
    "Evidence-led tools and editorial for women navigating the consequential decisions of midlife — money, identity, work, health, travel, and connection.",
  openGraph: {
    title: "Crown Years — Clear Next Moves for Midlife",
    description:
      "Practical tools and thoughtful editorial for the consequential decisions of midlife.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-deep px-5 py-3 text-sm text-cream transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
