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
          <div
            className="p-8 rounded-sm mb-6"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)", color: "#6a5048", fontSize: "0.9rem", lineHeight: 1.8 }}
          >
            <p className="font-medium mb-2" style={{ color: "var(--ink)" }}>Placeholder Notice</p>
            <p>
              This privacy policy is a placeholder. Replace this page with a full GDPR-compliant privacy policy before going live.
              A solicitor or an online privacy policy generator can assist with this.
            </p>
          </div>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>What data we collect</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            When you use our contact form we collect your name, email address, phone number, postcode, and any additional notes you provide. This information is used solely to confirm and manage your booking.
          </p>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>How we use it</h2>
          <p className="font-light text-sm leading-relaxed mb-6" style={{ color: "#6a5048" }}>
            Your data is used to respond to your enquiry, confirm your booking, and contact you about your appointment. We do not share your data with third parties or use it for marketing without your consent.
          </p>
          <h2 className="font-light text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Contact</h2>
          <p className="font-light text-sm leading-relaxed" style={{ color: "#6a5048" }}>
            To request deletion of your data or for any privacy queries, please contact us via the details on our Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
