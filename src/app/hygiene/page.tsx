import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import { SQUARE_BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Hygiene & Trust",
  description: "Our strict hygiene standards and safety protocols. Fully insured, qualified mobile beauty therapist in South East London.",
};

const hygieneItems = [
  {
    icon: "🧴",
    title: "Single-Use Applicators",
    body: "We use a fresh applicator for every wax application. No double-dipping, ever. This protects your skin and ensures the wax remains uncontaminated throughout your treatment.",
  },
  {
    icon: "🧼",
    title: "Sanitised Equipment",
    body: "All reusable tools are sanitised between every client using professional-grade products. We maintain rigorous hygiene standards that meet industry guidelines.",
  },
  {
    icon: "🛁",
    title: "Disposable Liners & Towels",
    body: "Single-use paper roll, disposable couch covers, and fresh towels are used for every appointment. Nothing from a previous client touches your skin.",
  },
  {
    icon: "💉",
    title: "Patch Testing Available",
    body: "For new clients or those with sensitive skin, a patch test can be arranged prior to your first treatment. Please mention any allergies or skin conditions at the time of booking.",
  },
  {
    icon: "🏠",
    title: "Clean Setup, Clean Departure",
    body: "We set up a clean, organised treatment area in your home and tidy everything up completely before we leave. You won't know we were there — except for your gorgeous results.",
  },
  {
    icon: "📋",
    title: "Fully Insured",
    body: "We hold full public liability and professional indemnity insurance. You are protected — and so are we. Certificates available on request.",
  },
];

const trustPoints = [
  {
    title: "Qualified Therapist",
    body: "[Qualification name] — professionally trained in waxing, pedicure, and skin care. Not just self-taught. Replace with your actual qualifications.",
  },
  {
    title: "Insured Practice",
    body: "Full professional indemnity and public liability insurance in place. Your wellbeing is covered at every appointment.",
  },
  {
    title: "Consistent Standards",
    body: "The same rigorous protocols at every appointment, regardless of which treatment you book or where you are in our service area.",
  },
  {
    title: "Open Communication",
    body: "We always discuss any concerns, contraindications, or sensitivities before beginning a treatment. Your comfort and safety come first.",
  },
];

export default function HygienePage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag light>Your Safety, Our Priority</SectionTag>
          <SectionTitle light as="h1">
            Hygiene & <em style={{ fontStyle: "italic", color: "var(--blush)" }}>Trust</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] leading-[1.8] mt-2" style={{ color: "rgba(250,246,243,.7)" }}>
            We take hygiene and safety as seriously as the treatment itself. Here is exactly what we do to ensure every appointment is safe, clean, and professional.
          </p>
        </div>
      </div>

      {/* Hygiene standards grid */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {hygieneItems.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3
                  className="font-light text-[1.2rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Trust section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <SectionTag>Why You Can Trust Us</SectionTag>
              <SectionTitle>
                Professional to the <em style={{ fontStyle: "italic", color: "var(--gold)" }}>last detail</em>
              </SectionTitle>
              <p className="text-[0.95rem] font-light leading-[1.8]" style={{ color: "#5a4840" }}>
                Being mobile doesn&rsquo;t mean cutting corners. Our standards match or exceed those of a high-street salon — the only difference is that we bring everything to you.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 p-5 rounded-sm"
                  style={{ background: "var(--paper)", border: "1px solid rgba(200,160,140,.2)" }}
                >
                  <span className="text-lg mt-0.5 flex-shrink-0" style={{ color: "var(--rose)" }}>✓</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>{point.title}</p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No double dipping callout */}
          <div
            className="p-8 rounded-sm mb-14"
            style={{ borderLeft: "3px solid var(--rose)", background: "var(--mist)" }}
          >
            <h3
              className="font-light text-[1.4rem] mb-3"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
            >
              Our &ldquo;No Double Dip&rdquo; Promise
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-[640px]" style={{ color: "#6a5048" }}>
              A fresh spatula is used for every wax application, without exception. Once a spatula has been used on skin, it is disposed of immediately. This eliminates any risk of cross-contamination and is a standard we will never compromise on.
            </p>
          </div>

          <div className="text-center">
            <Btn href={SQUARE_BOOKING_URL} variant="primary">Book Now</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
