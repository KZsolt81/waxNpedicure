import type { Metadata } from "next";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Legal</SectionTag>
          <SectionTitle as="h1">Privacy Policy</SectionTitle>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <p className="font-light text-sm leading-relaxed mb-8" style={{ color: "#6a5048" }}>
            Last updated: May 2026. This policy explains how we handle your personal data in compliance with GDPR.
          </p>

          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>What data we collect</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            When you use our contact form or book a treatment, we collect personal information including your full name, email address, phone number, home address/postcode (for mobile visits), preferred appointment details, and any health notes or allergies you disclose.
          </p>

          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Why we collect it</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            We collect this data solely to process your booking request, ensure the safety and suitability of treatments (especially regarding allergies or health conditions), and provide our mobile service at your location.
          </p>

          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Data Retention</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            We keep your personal information for 12 months from your last appointment or enquiry. After this period, your data is securely deleted unless you book with us again.
          </p>

          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Who has access</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            Access to your data is strictly limited to your therapist for the purpose of fulfilling your booking. We never sell your data, and we do not share it with any third parties for marketing purposes.
          </p>

          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Your Rights & Deletion</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            You have the right to request a copy of the data we hold about you or ask for its immediate deletion. To make a request, please use our contact page or WhatsApp chat option.
          </p>

          <div className="mt-12 p-8 rounded-sm" style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}>
            <p className="font-light text-[0.9rem] leading-relaxed" style={{ color: "#6a5048" }}>
              By using our website and services, you consent to the collection and use of your information as described in this policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
