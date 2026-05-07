interface Props {
  stars: number;
  text: string;
  author: string;
  location: string;
  service?: string;
}

export default function ReviewCard({ stars, text, author, location, service }: Props) {
  return (
    <div
      className="p-9 rounded-sm"
      style={{
        background: "var(--paper)",
        border: "1px solid rgba(200,160,140,.2)",
      }}
    >
      <div className="mb-4 text-[1rem] tracking-[0.1em]" style={{ color: "var(--gold)" }}>
        {"★".repeat(stars)}
      </div>
      <p
        className="font-light italic leading-[1.75] mb-6 text-[1.05rem]"
        style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#4a3028" }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-[0.78rem] font-medium tracking-[0.06em] uppercase" style={{ color: "#8a6858" }}>
        {author} &middot; {location}
      </p>
      {service && (
        <p className="text-[0.72rem] mt-1 font-light" style={{ color: "#b08070" }}>
          {service}
        </p>
      )}
    </div>
  );
}
