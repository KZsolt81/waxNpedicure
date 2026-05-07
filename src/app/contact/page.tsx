import type { Metadata } from "next";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import businessInfo from "../../../content/business-info.json";
import servicesData from "../../../content/services.json";
import bundlesData from "../../../content/bundles.json";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book a mobile waxing or pedicure treatment in South East London. Message via WhatsApp or use our contact form.",
};

export default function ContactPage() {
  const allServices = servicesData.categories.flatMap((c) =>
    c.services.map((s) => s.name)
  );
  const allBundles = bundlesData.bundles.map((b) => b.name);
  const serviceOptions = [...allServices, ...allBundles];

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Get in Touch</SectionTag>
          <SectionTitle as="h1">
            Book Your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Treatment</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            The quickest way to book is via WhatsApp. You can also use the form below and we&rsquo;ll confirm within a few hours.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          {/* WhatsApp CTA — prominent at the top */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-sm mb-16"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            <div>
              <p
                className="font-light text-[1.4rem] mb-1"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Prefer to message directly?
              </p>
              <p className="text-sm font-light" style={{ opacity: 0.7 }}>
                WhatsApp is the fastest way to check availability and confirm your booking.
              </p>
            </div>
            <WhatsAppButton label="Open WhatsApp" />
          </div>

          {/* Form + info */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Contact form */}
            <ContactForm serviceOptions={serviceOptions} />

            {/* Info cards */}
            <div className="flex flex-col gap-5">
              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <h4
                  className="font-light text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  📋 Booking Policy
                </h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>
                  {businessInfo.bookingPolicy}
                </p>
              </div>

              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <h4
                  className="font-light text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  💰 Payment
                </h4>
                <p className="text-sm font-light leading-relaxed mb-2" style={{ color: "#6a5048" }}>
                  Accepted: {businessInfo.paymentMethods.join(", ")}.
                </p>
                <p className="text-sm font-light" style={{ color: "#6a5048" }}>
                  Minimum booking value: £{businessInfo.minimumBooking}.
                </p>
              </div>

              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <h4
                  className="font-light text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  ❌ Cancellation
                </h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>
                  {businessInfo.cancellationPolicy}
                </p>
              </div>

              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <h4
                  className="font-light text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  🕐 Opening Hours
                </h4>
                <ul className="list-none flex flex-col gap-1">
                  {Object.entries(businessInfo.openingHours).map(([day, hours]) => (
                    <li key={day} className="flex justify-between text-sm font-light" style={{ color: "#6a5048" }}>
                      <span>{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
              >
                <h4
                  className="font-light text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  📱 Direct Contact
                </h4>
                <p className="text-sm font-light mb-2" style={{ color: "#6a5048" }}>
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
                    style={{ color: "var(--rose)", fontWeight: 500 }}
                  >
                    {businessInfo.whatsapp}
                  </a>
                </p>
                <p className="text-sm font-light" style={{ color: "#6a5048" }}>
                  Email:{" "}
                  <a href={`mailto:${businessInfo.email}`} style={{ color: "var(--rose)", fontWeight: 500 }}>
                    {businessInfo.email}
                  </a>
                </p>
                {businessInfo.instagram && (
                  <p className="text-sm font-light mt-2" style={{ color: "#6a5048" }}>
                    Instagram:{" "}
                    <a
                      href={`https://instagram.com/${businessInfo.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--rose)", fontWeight: 500 }}
                    >
                      {businessInfo.instagram}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
