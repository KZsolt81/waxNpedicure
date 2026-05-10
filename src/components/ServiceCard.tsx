interface Props {
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  imageAlt?: string;
}

export default function ServiceCard({ name, description, price, durationMinutes, imageAlt }: Props) {
  return (
    <div
      className="rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--paper)",
        border: "1px solid rgba(200,160,140,.2)",
        boxShadow: "0 2px 12px var(--shadow)",
      }}
    >
      {/* Image placeholder */}
      <div
        className="h-52 flex items-center justify-center text-[0.72rem] tracking-[0.1em] uppercase font-medium"
        style={{
          background: "repeating-linear-gradient(135deg, #e8d9d0 0px, #e8d9d0 10px, #f0e5df 10px, #f0e5df 20px)",
          color: "var(--rose)",
          border: "1px dashed var(--blush)",
        }}
        role="img"
        aria-label={imageAlt ?? name}
      >
        {imageAlt ?? name}
      </div>

      <div className="p-7">
        <h3
          className="font-light mb-2 text-[1.4rem]"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
        >
          {name}
        </h3>
        <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "#6a5048" }}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-[1.5rem] font-light"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--gold)" }}
          >
            £{price}
          </span>
          <span className="text-[0.75rem] tracking-[0.06em] uppercase" style={{ color: "#9a7868" }}>
            {durationMinutes} mins
          </span>
        </div>
      </div>
    </div>
  );
}
