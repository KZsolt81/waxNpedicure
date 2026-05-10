import type { Metadata } from "next";
import Btn from "@/components/Btn";
import BundleCard from "@/components/BundleCard";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import bundlesData from "../../../content/bundles.json";
import { SQUARE_BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Bundles",
  description: "Waxing and pedicure bundles — combine treatments in one visit and save. Mobile beauty service in South East London.",
};

export default function BundlesPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 text-center" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Save More</SectionTag>
          <SectionTitle center as="h1">
            Treatment <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Bundles</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] mx-auto leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            {bundlesData.intro}
          </p>
        </div>
      </div>

      {/* Bundle grid */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {bundlesData.bundles.map((bundle) => (
              <BundleCard
                key={bundle.id}
                tag={bundle.tag}
                name={bundle.name}
                description={bundle.description}
                items={bundle.items}
                standardTotal={bundle.standardTotal}
                bundlePrice={bundle.bundlePrice}
                saving={bundle.saving}
                variant={bundle.variant as "light" | "dark"}
              />
            ))}
          </div>

          {/* Why bundle */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "One visit, two treatments",
                body: "We come to you once — and you get your waxing and pedicure done in the same appointment. No extra travel, no extra wait.",
              },
              {
                icon: "💷",
                title: "Better value, guaranteed",
                body: "Every bundle is priced below the cost of booking each treatment separately. The more you book, the more you save.",
              },
              {
                icon: "✨",
                title: "Fully pampered",
                body: "Arrive to your next occasion — holiday, event, or just life — feeling perfectly polished from your legs to your toes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
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

          <div className="text-center mt-14">
            <Btn href={SQUARE_BOOKING_URL} variant="primary">Book Now</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
