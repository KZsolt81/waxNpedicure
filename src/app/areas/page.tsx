import type { Metadata } from "next";
import Link from "next/link";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import areasData from "../../../content/service-areas.json";
import pricingData from "../../../content/pricing.json";
import businessInfo from "../../../content/business-info.json";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Mobile waxing and pedicure service covering South East London. Check if we cover your postcode and find out about travel fees.",
};

export default function AreasPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Where We Come To You</SectionTag>
          <SectionTitle as="h1">
            Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Service Area</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            {areasData.intro}
          </p>
        </div>
      </div>

      {/* Map + Primary areas */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
            <div>
              <h2
                className="font-light text-[1.6rem] mb-6"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
              >
                Areas We Cover
              </h2>
              <ul className="list-none mb-6">
                {areasData.primaryAreas.map((area) => (
                  <li
                    key={area.name}
                    className="flex items-center gap-3 py-3 text-sm font-light"
                    style={{ borderBottom: "1px solid rgba(200,160,140,.2)", color: "var(--ink)" }}
                  >
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--rose)" }} />
                    <span className="flex-1">{area.name}</span>
                    <span className="text-[0.75rem] font-light" style={{ color: "#9a7868" }}>
                      {area.postcodes.join(", ")}
                    </span>
                    <span
                      className="text-[0.68rem] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "var(--mist)", color: "var(--rose)", border: "1px solid var(--blush)" }}
                    >
                      Free travel
                    </span>
                  </li>
                ))}
              </ul>

              {areasData.extendedAreas.length > 0 && (
                <>
                  <h3
                    className="font-light text-[1.2rem] mb-4 mt-8"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                  >
                    Extended Coverage
                  </h3>
                  <ul className="list-none mb-6">
                    {areasData.extendedAreas.map((area) => (
                      <li
                        key={area.name}
                        className="flex items-center gap-3 py-3 text-sm font-light"
                        style={{ borderBottom: "1px solid rgba(200,160,140,.2)", color: "var(--ink)" }}
                      >
                        <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--blush)" }} />
                        <span className="flex-1">{area.name}</span>
                        <span className="text-[0.75rem] font-light" style={{ color: "#9a7868" }}>
                          {area.postcodes.join(", ")}
                        </span>
                        {area.travelSupplement && (
                          <span
                            className="text-[0.68rem] px-2 py-0.5 rounded-full font-medium"
                            style={{ background: "rgba(200,139,120,.1)", color: "var(--rose)", border: "1px solid var(--blush)" }}
                          >
                            +£{area.travelSupplement} travel
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div
                className="p-5 rounded-sm text-sm font-light"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)", color: "#6a5048" }}
              >
                📍 {areasData.enquiryPrompt}{" "}
                <Link href="/contact" style={{ color: "var(--rose)", fontWeight: 500 }}>
                  Message us →
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <ImagePlaceholder label="Service area map — embed Google Map here" height="500px" />
              <p className="text-[0.78rem] font-light mt-3 text-center" style={{ color: "#9a7868" }}>
                [Replace with an embedded Google Map centred on your service area]
              </p>
            </div>
          </div>

          {/* Travel fees */}
          <div
            className="rounded-sm p-10 mb-14"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
          >
            <h2
              className="font-light text-[1.6rem] mb-2"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
            >
              Travel Fees
            </h2>
            <p className="text-sm font-light mb-8" style={{ color: "#6a5048" }}>
              {areasData.travelNote}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {pricingData.travelFees.map((zone) => (
                <div
                  key={zone.zone}
                  className="p-6 rounded-sm text-center"
                  style={{ background: "var(--paper)", border: "1px solid rgba(200,160,140,.2)" }}
                >
                  <p
                    className="text-[2rem] font-light mb-2"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--gold)" }}
                  >
                    {zone.fee === null ? "POA" : zone.fee === 0 ? "Free" : `£${zone.fee}`}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>{zone.zone}</p>
                  <p className="text-[0.78rem] font-light" style={{ color: "#9a7868" }}>{zone.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Minimum booking note */}
          <div
            className="p-6 mb-10"
            style={{ borderLeft: "3px solid var(--rose)", background: "var(--paper)", color: "#6a5048", fontSize: "0.88rem" }}
          >
            <strong style={{ color: "var(--ink)" }}>Minimum booking:</strong>{" "}
            {areasData.minimumBookingNote}
          </div>

          <div className="text-center">
            <Btn href="/contact" variant="primary">Check Your Postcode</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
