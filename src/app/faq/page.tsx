import type { Metadata } from "next";
import Btn from "@/components/Btn";
import FAQItem from "@/components/FAQItem";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import faqData from "../../../content/faq.json";
import { SQUARE_BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our mobile waxing and pedicure service in South East London. Booking, preparation, aftercare, and practical info.",
};

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag light>Got Questions?</SectionTag>
          <SectionTitle light as="h1">
            Frequently Asked <em style={{ fontStyle: "italic", color: "var(--blush)" }}>Questions</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] leading-[1.8] mt-2" style={{ color: "rgba(250,246,243,.7)" }}>
            Everything you need to know about our mobile beauty service — from booking to aftercare.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <section className="py-24" style={{ background: "var(--ink)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          {faqData.categories.map((category) => (
            <div key={category.id} className="mb-14">
              <h2
                className="font-light text-[1.4rem] mb-1 pb-3"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  color: "var(--blush)",
                  borderBottom: "1px solid rgba(255,255,255,.1)",
                }}
              >
                {category.label}
              </h2>
              <div className="grid md:grid-cols-2 gap-px mt-2">
                {category.items.map((item) => (
                  <FAQItem key={item.id} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div
            className="mt-12 p-8 rounded-sm text-center"
            style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)" }}
          >
            <p
              className="font-light text-[1.4rem] mb-3"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--paper)" }}
            >
              Still have a question?
            </p>
            <p className="text-sm font-light mb-6" style={{ color: "rgba(250,246,243,.6)" }}>
              Send us a message and we&rsquo;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Btn href={SQUARE_BOOKING_URL} variant="rose">Book Now</Btn>
              <Btn href="/contact" variant="outline">General Enquiries</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
