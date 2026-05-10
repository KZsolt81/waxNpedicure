"use client";

import Link from "next/link";
import { useState } from "react";
import businessInfo from "../../content/business-info.json";
import { SQUARE_BOOKING_URL } from "@/lib/booking";

const navLinks = [
  { href: "/services",  label: "Services" },
  { href: "/bundles",   label: "Bundles" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/areas",     label: "Areas" },
  { href: "/faq",       label: "FAQ" },
  { href: "/about",     label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(250,246,243,.92)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(200,160,140,.15)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-light tracking-wide"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
        >
          {businessInfo.name.replace("[", "").replace("]", "")}
          <span style={{ color: "var(--rose)", fontStyle: "italic" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.78rem] tracking-[0.1em] uppercase font-normal opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--ink)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.78rem] font-medium tracking-[0.08em] uppercase transition-colors"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "var(--ink)")
            }
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span
            className="block w-6 h-[1.5px] transition-all"
            style={{ background: "var(--ink)", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }}
          />
          <span
            className="block w-6 h-[1.5px] transition-all"
            style={{ background: "var(--ink)", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] transition-all"
            style={{ background: "var(--ink)", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(200,160,140,.15)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.1em] uppercase font-light opacity-80"
              style={{ color: "var(--ink)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-full text-[0.78rem] font-medium tracking-[0.08em] uppercase"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
