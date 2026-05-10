import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import businessInfo from "../../../content/business-info.json";
import servicesData from "../../../content/services.json";
import bundlesData from "../../../content/bundles.json";
import { FULL_CANCELLATION_POLICY, SHORT_BOOKING_POLICY, SQUARE_BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book your appointment through Square Appointments. No upfront payment at booking, with card-on-file no-show protection.",
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
            Book through Square Appointments to check availability and request your slot.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          {/* Square Booking CTA — primary path */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-sm mb-16"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            <div>
              <p
                className="font-light text-[1.4rem] mb-1"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Ready to book?
              </p>
              <p className="text-sm font-light" style={{ opacity: 0.7 }}>
                No upfront payment. Card details may be required to secure your appointment.
              </p>
            </div>
            <Btn href={SQUARE_BOOKING_URL} variant="rose">Book Now</Btn>
          </div>

          <div
            id="square-booking"
            className="p-7 rounded-sm mb-12"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
          >
            <h4
              className="font-light text-[1.1rem] mb-3"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
            >
              Square Appointments Booking
            </h4>
            <p className="text-sm font-light leading-relaxed mb-3" style={{ color: "#6a5048" }}>
              {SHORT_BOOKING_POLICY}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Btn href={SQUARE_BOOKING_URL} variant="primary">Book Now</Btn>
              <WhatsAppButton />
            </div>
            <p className="text-[0.82rem] font-light mt-3" style={{ color: "#6a5048" }}>
              Have a question before booking? Send us a WhatsApp message.
            </p>
            {/* Square Appointments booking button/embed goes here.
            Get this from Square Dashboard:
            Appointments / Payments > Appointments > Online Booking > Channels > Add your booking flow to an existing site.
            Use either:
            1) booking flow URL,
            2) Square booking button HTML,
            3) Square embed code.
            */}
          </div>

          {/* Form + info */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Contact form (general enquiries) */}
            <div>
              <h3
                className="font-light text-[1.6rem] mb-3"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
              >
                Ask a Question
              </h3>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "#6a5048" }}>
                Not ready to book yet? Send a quick question and we&rsquo;ll get back to you.
              </p>
              <ContactForm serviceOptions={serviceOptions} />
            </div>

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
                  {FULL_CANCELLATION_POLICY}
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
                  📱 Questions
                </h4>
                <p className="text-sm font-light mb-4" style={{ color: "#6a5048" }}>
                  Have a question before booking? Chat with us directly on WhatsApp.
                </p>
                <WhatsAppButton fullWidth />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
