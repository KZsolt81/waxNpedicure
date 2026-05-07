"use client";

import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cursor-pointer transition-colors duration-300 p-8"
      style={{ border: "1px solid rgba(255,255,255,.07)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className="font-light text-[1.05rem] leading-snug"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--paper)" }}
        >
          {question}
        </p>
        <span
          className="text-xl flex-shrink-0 transition-transform duration-300"
          style={{ color: "var(--blush)", transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </div>
      {open && (
        <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: "rgba(250,246,243,.65)" }}>
          {answer}
        </p>
      )}
    </div>
  );
}
