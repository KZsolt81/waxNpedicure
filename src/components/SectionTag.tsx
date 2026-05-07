export default function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-block text-[0.68rem] font-medium tracking-[0.18em] uppercase mb-3"
      style={{ color: light ? "var(--blush)" : "var(--rose)" }}
    >
      {children}
    </span>
  );
}
