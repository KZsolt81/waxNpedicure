import Link from "next/link";
import businessInfo from "../../content/business-info.json";

const treatmentLinks = [
  { href: "/services#waxing",   label: "Waxing" },
  { href: "/services#pedicure", label: "Pedicure" },
  { href: "/bundles",           label: "Bundles & Offers" },
  { href: "/pricing",           label: "Full Price List" },
];

const infoLinks = [
  { href: "/about",    label: "About" },
  { href: "/hygiene",  label: "Hygiene & Trust" },
  { href: "/areas",    label: "Service Areas" },
  { href: "/faq",      label: "FAQ" },
  { href: "/offers",   label: "Promotions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-8">
        {/* Grid */}
        <div
          className="grid gap-10 pb-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {/* Brand */}
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-light tracking-wide mb-4 block"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {businessInfo.name.replace("[", "").replace("]", "")}
              <span style={{ color: "var(--rose)", fontStyle: "italic" }}>.</span>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-[240px]" style={{ opacity: 0.55 }}>
              {businessInfo.tagline}
            </p>
          </div>

          {/* Treatments */}
          <div>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-5" style={{ color: "var(--blush)" }}>
              Treatments
            </p>
            <ul className="flex flex-col gap-2 list-none">
              {treatmentLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-light transition-opacity hover:opacity-100"
                    style={{ opacity: 0.6 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-5" style={{ color: "var(--blush)" }}>
              Info
            </p>
            <ul className="flex flex-col gap-2 list-none">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-light transition-opacity hover:opacity-100"
                    style={{ opacity: 0.6 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-5" style={{ color: "var(--blush)" }}>
              Connect
            </p>
            <ul className="flex flex-col gap-2 list-none">
              {businessInfo.instagram !== "[yourbrand]" && (
                <li>
                  <a href={`https://instagram.com/${businessInfo.instagram.replace("@", "")}`} className="text-sm font-light hover:opacity-100" style={{ opacity: 0.6 }}>
                    Instagram
                  </a>
                </li>
              )}
              {businessInfo.facebook && (
                <li>
                  <span className="text-sm font-light" style={{ opacity: 0.6 }}>Facebook</span>
                </li>
              )}
              <li>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
                  className="text-sm font-light hover:opacity-100"
                  style={{ opacity: 0.6 }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`} className="text-sm font-light hover:opacity-100" style={{ opacity: 0.6 }}>
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem]" style={{ opacity: 0.4 }}>
          <span>© {year} {businessInfo.name.replace(/[\[\]]/g, "")} — Mobile Beauty. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
