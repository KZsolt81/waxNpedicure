import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import offersData from "../../../content/offers.json";

export const metadata: Metadata = {
  title: "Offers & Promotions",
  description: "Current offers and promotions from our mobile waxing and pedicure service in South East London.",
};

export default function OffersPage() {
  const activeOffers = offersData.offers.filter((o) => o.active);
  const upcomingOffers = offersData.offers.filter((o) => !o.active);

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Current Promotions</SectionTag>
          <SectionTitle as="h1">
            Offers & <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Deals</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            {offersData.intro}
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          {activeOffers.length > 0 ? (
            <>
              <h2
                className="font-light text-[1.6rem] mb-8"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
              >
                Active Offers
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {activeOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="p-8 rounded-sm"
                    style={{ background: "var(--paper)", border: "1px solid var(--blush)" }}
                  >
                    <span
                      className="inline-block text-[0.68rem] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full mb-5"
                      style={{ background: "var(--rose)", color: "#fff" }}
                    >
                      {offer.tag}
                    </span>
                    <h3
                      className="font-light text-[1.6rem] mb-3"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                    >
                      {offer.title.replace(/[\[\]]/g, "")}
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "#6a5048" }}>
                      {offer.description.replace(/[\[\]]/g, "")}
                    </p>
                    {offer.code && (
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded mb-5 text-sm font-medium tracking-widest uppercase"
                        style={{ background: "var(--mist)", border: "1px dashed var(--rose)", color: "var(--rose)" }}
                      >
                        Code: {offer.code.replace(/[\[\]]/g, "")}
                      </div>
                    )}
                    {offer.expiry && (
                      <p className="text-[0.78rem] font-light mb-5" style={{ color: "#9a7868" }}>
                        Expires: {offer.expiry.replace(/[\[\]]/g, "")}
                      </p>
                    )}
                    <Btn href="/contact" variant="primary">Claim Offer</Btn>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div
              className="p-10 rounded-sm text-center mb-16"
              style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
            >
              <p className="text-sm font-light" style={{ color: "#6a5048" }}>
                No active promotions at the moment — check back soon, or follow us on Instagram for updates.
              </p>
            </div>
          )}

          {/* Bundle reminder */}
          <div
            className="p-10 rounded-sm text-center mb-10"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            <SectionTag light>Always Great Value</SectionTag>
            <h2
              className="font-light text-[1.8rem] mb-3"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Don&rsquo;t forget our <em style={{ fontStyle: "italic", color: "var(--blush)" }}>bundles</em>
            </h2>
            <p className="text-sm font-light mb-6" style={{ opacity: 0.7 }}>
              Combine waxing and pedicure treatments in one visit and save — no promo code needed.
            </p>
            <Btn href="/bundles" variant="rose">View Bundles</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
