import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "[Brand Name] — Mobile Waxing & Pedicure in South East London",
    template: "%s | [Brand Name]",
  },
  description:
    "Professional mobile waxing and pedicure treatments delivered to your home in South East London. Fully insured, qualified therapist. Book online or via WhatsApp.",
  keywords: [
    "mobile waxing South East London",
    "mobile pedicure London",
    "at-home waxing",
    "Hollywood wax London",
    "mobile beauty therapist SE London",
    "waxing pedicure bundle London",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "[Brand Name]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
