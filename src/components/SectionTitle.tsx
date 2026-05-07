import React from "react";

interface Props {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({ children, light = false, center = false, as: Tag = "h2" }: Props) {
  return (
    <Tag
      className={`font-light leading-[1.1] mb-4 ${center ? "text-center" : ""}`}
      style={{
        fontFamily: "var(--font-serif), Georgia, serif",
        fontSize: "clamp(2rem, 4vw, 3.2rem)",
        color: light ? "var(--paper)" : "var(--ink)",
      }}
    >
      {children}
    </Tag>
  );
}
