"use client";

import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "rose";

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const styles: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--ink)", color: "var(--paper)" },
  outline: { background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ink)" },
  rose:    { background: "var(--rose)", color: "#fff" },
};

const hover: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--gold)" },
  outline: { background: "var(--ink)", color: "var(--paper)" },
  rose:    { background: "var(--gold)" },
};

export default function Btn({ href, onClick, variant = "primary", children, fullWidth, type = "button" }: Props) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px 32px",
    borderRadius: "100px",
    fontFamily: "var(--font-sans), sans-serif",
    fontSize: "0.82rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    transition: "background 0.35s ease, color 0.35s ease",
    width: fullWidth ? "100%" : undefined,
    ...styles[variant],
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, hover[variant]);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    Object.assign((e.currentTarget as HTMLElement).style, styles[variant]);
  };

  if (href) {
    return (
      <Link href={href} style={base} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} style={base} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </button>
  );
}
