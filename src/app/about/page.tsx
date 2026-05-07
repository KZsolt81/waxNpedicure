import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import businessInfo from "../../../content/business-info.json";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the therapist behind the mobile beauty service. Qualified, insured, and dedicated to salon-quality treatments at your home in South East London.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Our Story</SectionTag>
          <SectionTitle as="h1">
            Beauty that <em style={{ fontStyle: "italic", color: "var(--gold)" }}>comes to you</em>
          </SectionTitle>
        </div>
      </div>

      {/* Main about section */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div className="relative">
              <ImagePlaceholder label="Therapist / brand photo" height="560px" />
              <div
                className="absolute -bottom-5 -right-5 w-44 h-44 rounded-full pointer-events-none"
                style={{ border: "1px solid var(--blush)" }}
              />
            </div>
            <div>
              <SectionTag>About Me</SectionTag>
              <h2
                className="font-light text-[2.2rem] leading-[1.2] mb-6"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
              >
                [Your Name]
              </h2>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-4" style={{ color: "#5a4840" }}>
                [About paragraph 1 — introduce yourself, your background, why you started this business. Replace with your own story.]
              </p>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-4" style={{ color: "#5a4840" }}>
                [About paragraph 2 — your training, qualifications, and approach to beauty treatments.]
              </p>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-8" style={{ color: "#5a4840" }}>
                [About paragraph 3 — your personal touch, what makes your service different, your commitment to clients.]
              </p>
              <Btn href="/contact" variant="rose">Book With Me</Btn>
            </div>
          </div>

          {/* Qualifications */}
          <div
            className="rounded-sm p-10 mb-16"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
          >
            <SectionTag>Credentials</SectionTag>
            <h2
              className="font-light text-[1.8rem] mb-8"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
            >
              Qualifications & <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Insurance</em>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {businessInfo.qualifications.map((q) => (
                <div
                  key={q}
                  className="flex items-start gap-3 p-5 rounded-sm"
                  style={{ background: "var(--paper)", border: "1px solid rgba(200,160,140,.2)" }}
                >
                  <span className="text-xl mt-0.5">✓</span>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#5a4840" }}>
                    {q.replace(/[\[\]]/g, "")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why mobile */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTag>Our Mission</SectionTag>
              <h2
                className="font-light text-[1.8rem] leading-[1.2] mb-6"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
              >
                Why mobile beauty?
              </h2>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-4" style={{ color: "#5a4840" }}>
                [Explain the philosophy behind mobile beauty — convenience, privacy, no travel, relaxing in your own space.]
              </p>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-4" style={{ color: "#5a4840" }}>
                [Describe who benefits most — busy women, those with young children, people who prefer privacy, or anyone who values their time.]
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏠", label: "At-home comfort" },
                { icon: "⏱", label: "Save time" },
                { icon: "🔒", label: "Complete privacy" },
                { icon: "✨", label: "Salon results" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-sm text-center"
                  style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
