import type { Metadata } from "next";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using our mobile beauty service.",
};

export default function TermsPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Legal</SectionTag>
          <SectionTitle as="h1">Terms & Conditions</SectionTitle>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <div
            className="p-8 rounded-sm mb-6"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)", color: "#6a5048", fontSize: "0.9rem", lineHeight: 1.8 }}
          >
            <p className="font-medium mb-2" style={{ color: "var(--ink)" }}>Placeholder Notice</p>
            <p>
              These terms are a placeholder. Replace with full terms and conditions before going live. Consider seeking legal advice for your specific business model.
            </p>
          </div>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Bookings</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            Bookings are confirmed in writing (WhatsApp or email). A booking is only confirmed when acknowledged by the therapist. We reserve the right to decline a booking.
          </p>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Cancellations</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            Please provide at least [24] hours notice for cancellations. Late cancellations may incur a charge. No-shows may be charged in full.
          </p>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Health & Safety</h2>
          <p className="font-light text-sm leading-relaxed" style={{ color: "#6a5048" }}>
            Clients are responsible for disclosing relevant medical conditions, skin sensitivities, or contraindications prior to treatment. We cannot be held liable for reactions arising from undisclosed conditions.
          </p>
        </div>
      </section>
    </>
  );
}
