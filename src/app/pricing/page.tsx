import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import pricingData from "../../../content/pricing.json";
import bundlesData from "../../../content/bundles.json";
import businessInfo from "../../../content/business-info.json";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Full price list for mobile waxing and pedicure treatments in South East London. Transparent pricing with no hidden fees. Min. booking £${businessInfo.minimumBooking}.`,
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 text-center" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Transparent Pricing</SectionTag>
          <SectionTitle center as="h1">
            Full <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Price List</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[520px] mx-auto leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            All prices include products and equipment. No hidden charges. Travel fees may apply — see below.
          </p>
        </div>
      </div>

      <section className="py-20" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">

          {/* Price columns */}
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            {pricingData.categories.map((category) => (
              <div key={category.id}>
                <h2
                  className="font-light text-[1.6rem] mb-7 pb-3"
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--blush)",
                  }}
                >
                  {category.label}
                </h2>
                <table className="w-full border-collapse">
                  <tbody>
                    {category.items.map((item) => (
                      <tr key={item.serviceId} style={{ borderBottom: "1px solid rgba(200,160,140,.2)" }}>
                        <td className="py-3 text-sm font-light" style={{ color: "var(--ink)" }}>{item.name}</td>
                        <td className="py-3 text-sm font-light text-right" style={{ color: "#9a7868" }}>
                          {item.durationMinutes} mins
                        </td>
                        <td
                          className="py-3 text-right font-light text-[1.1rem]"
                          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--gold)" }}
                        >
                          £{item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div
            className="p-6 mb-12"
            style={{
              borderLeft: "3px solid var(--rose)",
              borderRadius: "0 2px 2px 0",
              background: "var(--paper)",
              color: "#6a5048",
              fontSize: "0.88rem",
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "var(--ink)" }}>Minimum booking:</strong> £{businessInfo.minimumBooking}.{" "}
            {pricingData.note}
          </div>

          {/* Travel fees */}
          <div className="mb-14">
            <h3
              className="font-light text-[1.4rem] mb-6"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
            >
              Travel Fees
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {pricingData.travelFees.map((zone) => (
                <div
                  key={zone.zone}
                  className="p-6 rounded-sm"
                  style={{ background: "var(--paper)", border: "1px solid rgba(200,160,140,.2)" }}
                >
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>{zone.zone}</p>
                  <p
                    className="text-[1.8rem] font-light mb-1"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--gold)" }}
                  >
                    {zone.fee === null ? "POA" : zone.fee === 0 ? "Free" : `£${zone.fee}`}
                  </p>
                  <p className="text-[0.78rem] font-light" style={{ color: "#9a7868" }}>{zone.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle upsell */}
          <div
            className="p-8 rounded-sm text-center"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            <p className="text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-3" style={{ color: "var(--blush)" }}>
              Better Value
            </p>
            <h3
              className="font-light text-[1.8rem] mb-3"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Book a Bundle and <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Save up to £{Math.max(...bundlesData.bundles.map(b => b.saving))}</em>
            </h3>
            <p className="text-sm font-light mb-6" style={{ opacity: 0.7 }}>
              Combine a waxing treatment with a pedicure in one visit for a discounted price.
            </p>
            <Btn href="/bundles" variant="rose">View Bundles</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
