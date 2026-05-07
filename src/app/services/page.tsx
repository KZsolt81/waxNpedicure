"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Btn from "@/components/Btn";
import SectionTag from "@/components/SectionTag";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "../../../content/services.json";
import pricingData from "../../../content/pricing.json";

function getPriceForService(serviceId: string): number {
  for (const cat of pricingData.categories) {
    const item = cat.items.find((i) => i.serviceId === serviceId);
    if (item) return item.price;
  }
  return 0;
}

type TabId = "all" | "waxing" | "pedicure";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const categories = servicesData.categories;
  const visibleCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 text-center" style={{ background: "var(--mist)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionTag>What We Offer</SectionTag>
          <SectionTitle center as="h1">
            Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Treatments</em>
          </SectionTitle>
          <p className="text-[0.95rem] font-light max-w-[560px] mx-auto leading-[1.8] mt-2" style={{ color: "#5a4840" }}>
            Professional waxing and pedicure treatments delivered to your home in South East London. All treatments use premium products with single-use disposables where applicable.
          </p>
        </div>
      </div>

      {/* Tabs + Grid */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-14 flex-wrap">
            {(["all", "waxing", "pedicure"] as TabId[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-7 py-2 rounded-full text-[0.8rem] tracking-[0.08em] uppercase cursor-pointer transition-all"
                style={{
                  border: "1.5px solid var(--blush)",
                  background: activeTab === tab ? "var(--ink)" : "transparent",
                  color: activeTab === tab ? "var(--paper)" : "var(--ink)",
                  borderColor: activeTab === tab ? "var(--ink)" : "var(--blush)",
                }}
              >
                {tab === "all" ? "All Treatments" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Service groups */}
          {visibleCategories.map((category) => (
            <div key={category.id} className="mb-20" id={category.id}>
              <div className="mb-8">
                <h2
                  className="font-light text-[2rem] mb-2"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
                >
                  {category.label}
                </h2>
                <p className="text-sm font-light leading-relaxed max-w-[600px]" style={{ color: "#6a5048" }}>
                  {category.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
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
            </div>
          ))}

          <div className="text-center mt-4">
            <Btn href="/contact" variant="primary">Book a Treatment</Btn>
            <span className="mx-3" style={{ color: "#9a7868" }}>or</span>
            <Btn href="/bundles" variant="outline">View Bundles &amp; Save</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
