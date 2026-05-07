import type { Metadata } from "next";
import Link from "next/link";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import BundleCard from "@/components/BundleCard";
import ReviewCard from "@/components/ReviewCard";
import FAQItem from "@/components/FAQItem";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import businessInfo from "../../content/business-info.json";
import services from "../../content/services.json";
import pricing from "../../content/pricing.json";
import bundlesData from "../../content/bundles.json";
import testimonials from "../../content/testimonials.json";
import faq from "../../content/faq.json";
import areas from "../../content/service-areas.json";

export const metadata: Metadata = {
  title: `${businessInfo.name.replace(/[\[\]]/g, "")} — Mobile Waxing & Pedicure in South East London`,
  description: businessInfo.description,
};

function getPriceForService(serviceId: string): number {
  for (const cat of pricing.categories) {
    const item = cat.items.find((i) => i.serviceId === serviceId);
    if (item) return item.price;
  }
  return 0;
}

export default function HomePage() {
  const featuredServices = [
    ...services.categories[0].services.slice(0, 3),
    ...services.categories[1].services.slice(0, 3),
  ];
  const featuredBundles = bundlesData.bundles.slice(0, 2);
  const featuredTestimonials = testimonials.testimonials.slice(0, 3);
  const faqPreview = faq.categories.slice(0, 2).flatMap((c) => c.items).slice(0, 4);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="min-h-screen grid pt-[72px] overflow-hidden" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div
          className="flex flex-col justify-center py-20 px-6 fade-in"
          style={{ paddingLeft: "max(24px, calc((100vw - 1180px) / 2))", paddingRight: "60px" }}
        >
          <p className="text-[0.72rem] tracking-[0.22em] uppercase font-medium mb-6" style={{ color: "var(--rose)" }}>
            ✦ Mobile Beauty · South East London
          </p>
          <h1
            className="font-light leading-[1.08] mb-7"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              color: "var(--ink)",
            }}
          >
            Salon‑quality beauty,
            <em
              className="block"
              style={{ fontStyle: "italic", color: "var(--gold)" }}
            >
              in your own home.
            </em>
          </h1>
          <p className="text-base font-light leading-[1.85] mb-10 max-w-[460px]" style={{ color: "#6a5048" }}>
            Professional waxing and pedicure treatments delivered to your door in South East London. Fully insured, qualified therapist. No travel stress. Just beautiful results.
          </p>
          <div className="flex flex-wrap gap-4 mb-14 fade-in-2">
            <Btn href="/contact" variant="primary">Book Your Treatment</Btn>
            <Btn href="/services" variant="outline">See All Services</Btn>
          </div>
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-light self-start fade-in-3"
            style={{ background: "var(--mist)", border: "1px solid var(--blush)", color: "#6a5048" }}
          >
            ⭐ <strong style={{ color: "var(--rose)", fontWeight: 500 }}>5-star rated</strong>
            &nbsp;· Fully insured · Min. booking £{businessInfo.minimumBooking}
          </div>
        </div>

        <div className="relative overflow-hidden hidden md:block">
          <ImagePlaceholder label="Hero image — beauty / lifestyle photo" height="100%" />
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "40%", background: "linear-gradient(to top, rgba(250,246,243,.6), transparent)" }}
          />
        </div>
      </section>

      {/* ══ TRUST STRIP ══════════════════════════════════════ */}
      <div className="py-4" style={{ background: "var(--ink)" }}>
        <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap items-center justify-center gap-6">
          {[
            "✦ Fully Mobile Service",
            "✦ Qualified & Insured Therapist",
            "✦ Same-Day Bookings Available",
            "✦ No Salon Commute",
            `✦ Min. Booking £${businessInfo.minimumBooking}`,
          ].map((item, i) => (
            <span key={i} className="text-[0.75rem] tracking-[0.1em] uppercase font-light" style={{ color: "var(--blush)" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ ABOUT PREVIEW ════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <ImagePlaceholder label="About / therapist photo" height="520px" />
              <div
                className="absolute -bottom-5 -right-5 w-44 h-44 rounded-full pointer-events-none"
                style={{ border: "1px solid var(--blush)" }}
              />
            </div>
            <div>
              <SectionTag>About the Business</SectionTag>
              <SectionTitle>
                Beauty that{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>comes to you</em>
              </SectionTitle>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-4 max-w-[520px]" style={{ color: "#5a4840" }}>
                [About paragraph 1 — introduce the business, the therapist, and the mission. Replace this placeholder with your own story.]
              </p>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-8 max-w-[520px]" style={{ color: "#5a4840" }}>
                [About paragraph 2 — why mobile beauty, what makes you different, your values and approach.]
              </p>
              <Btn href="/about" variant="rose">Learn More About Us</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES PREVIEW ═════════════════════════════════ */}
      <section id="services" className="py-28" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>What We Offer</SectionTag>
            <SectionTitle center>
              Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Treatments</em>
            </SectionTitle>
            <p className="text-[0.95rem] font-light max-w-[520px] mx-auto leading-[1.8]" style={{ color: "#5a4840" }}>
              Professional waxing and pedicure treatments at your home, using premium products and sanitised equipment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                price={getPriceForService(service.id)}
                durationMinutes={service.durationMinutes}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Btn href="/services" variant="outline">View All Services</Btn>
          </div>
        </div>
      </section>

      {/* ══ BUNDLE HIGHLIGHT ═════════════════════════════════ */}
      <section id="bundles" className="py-28">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>Save More</SectionTag>
          <SectionTitle>
            Treatment <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Bundles</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light leading-[1.8] max-w-[520px] mb-14" style={{ color: "#5a4840" }}>
            {bundlesData.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredBundles.map((bundle) => (
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

          <div className="mt-10 text-center">
            <Btn href="/bundles" variant="outline">See All Bundles</Btn>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════ */}
      <section className="py-28" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Client Love</SectionTag>
            <SectionTitle center>
              What They&rsquo;re <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Saying</em>
            </SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <ReviewCard key={t.id} stars={t.stars} text={t.text} author={t.author} location={t.location} service={t.service} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREA ═════════════════════════════════════ */}
      <section id="area" className="py-28">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTag>Where We Come To You</SectionTag>
              <SectionTitle>
                Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Service Area</em>
              </SectionTitle>
              <p className="text-[0.95rem] font-light leading-[1.8] mb-6 max-w-[520px]" style={{ color: "#5a4840" }}>
                {areas.intro}
              </p>
              <ul className="list-none mb-6">
                {areas.primaryAreas.slice(0, 6).map((area) => (
                  <li
                    key={area.name}
                    className="flex items-center gap-3 py-[10px] text-sm font-light"
                    style={{ borderBottom: "1px solid rgba(200,160,140,.2)", color: "var(--ink)" }}
                  >
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--rose)" }} />
                    {area.name}
                    <span className="text-[0.75rem] ml-auto" style={{ color: "#9a7868" }}>
                      {area.postcodes.join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="p-5 rounded-sm text-sm font-light"
                style={{ background: "var(--mist)", border: "1px solid var(--blush)", color: "#6a5048" }}
              >
                📍 {areas.enquiryPrompt}{" "}
                <Link href="/contact" style={{ color: "var(--rose)", fontWeight: 500 }}>
                  Message us here →
                </Link>
              </div>
            </div>
            <ImagePlaceholder label="Map — embed Google Map or service area image" height="460px" />
          </div>
        </div>
      </section>

      {/* ══ FAQ PREVIEW ══════════════════════════════════════ */}
      <section id="faq" className="py-28" style={{ background: "var(--ink)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag light>Frequently Asked</SectionTag>
          <SectionTitle light>
            Your{" "}
            <em style={{ fontStyle: "italic", color: "var(--blush)" }}>Questions</em> Answered
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-px mt-14">
            {faqPreview.map((item) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Btn href="/faq" variant="rose">View All FAQs</Btn>
          </div>
        </div>
      </section>

      {/* ══ BOOKING CTA ══════════════════════════════════════ */}
      <section id="booking" className="py-28">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <SectionTag>Ready to Book?</SectionTag>
          <SectionTitle center>
            Book Your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Treatment</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light leading-[1.8] max-w-[480px] mx-auto mt-2 mb-10" style={{ color: "#5a4840" }}>
            Message us on WhatsApp for the fastest response, or use the contact form and we&rsquo;ll confirm your booking within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton label="Book via WhatsApp" />
            <Btn href="/contact" variant="outline">Use Contact Form</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
