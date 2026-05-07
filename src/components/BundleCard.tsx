import Btn from "./Btn";

interface BundleItem {
  name: string;
  standardPrice: number;
}

interface Props {
  tag: string;
  name: string;
  description: string;
  items: BundleItem[];
  standardTotal: number;
  bundlePrice: number;
  saving: number;
  variant?: "light" | "dark";
}

export default function BundleCard({ tag, name, description, items, standardTotal, bundlePrice, saving, variant = "light" }: Props) {
  const dark = variant === "dark";

  return (
    <div
      className="p-10 rounded-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      style={{
        background: dark ? "var(--ink)" : "var(--mist)",
        border: dark ? "none" : "1px solid var(--blush)",
        color: dark ? "var(--paper)" : "var(--ink)",
        boxShadow: "0 4px 24px var(--shadow)",
      }}
    >
      <p
        className="text-[0.68rem] tracking-[0.18em] uppercase font-medium mb-4"
        style={{ color: dark ? "var(--blush)" : "var(--rose)" }}
      >
        {tag}
      </p>

      <h3
        className="font-light leading-[1.2] mb-3 text-[1.8rem]"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        {name}
      </h3>

      <p className="text-sm font-light mb-7" style={{ opacity: 0.75 }}>
        {description}
      </p>

      <ul className="list-none mb-8 flex flex-col">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex justify-between text-sm font-light py-2"
            style={{ borderBottom: dark ? "1px solid rgba(255,255,255,.1)" : "1px solid rgba(200,160,140,.2)" }}
          >
            <span>{item.name}</span>
            <span style={{ opacity: 0.65 }}>£{item.standardPrice}</span>
          </li>
        ))}
        <li
          className="flex justify-between text-sm font-light py-2"
          style={{ borderBottom: dark ? "1px solid rgba(255,255,255,.1)" : "1px solid rgba(200,160,140,.2)" }}
        >
          <span>You save</span>
          <span style={{ color: dark ? "var(--blush)" : "var(--rose)", fontWeight: 500 }}>£{saving}</span>
        </li>
      </ul>

      <div className="flex items-baseline gap-3 mb-7">
        <span
          className="font-light"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "3rem", color: "var(--gold)" }}
        >
          £{bundlePrice}
        </span>
        <span style={{ fontSize: "1rem", opacity: 0.45, textDecoration: "line-through" }}>£{standardTotal}</span>
        <span
          className="text-[0.72rem] font-medium px-3 py-1 rounded-full"
          style={{ background: "var(--rose)", color: "#fff" }}
        >
          Save £{saving}
        </span>
      </div>

      <Btn href="/contact" variant={dark ? "rose" : "primary"}>
        Book Bundle
      </Btn>
    </div>
  );
}
