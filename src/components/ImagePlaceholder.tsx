interface Props {
  label: string;
  aspectRatio?: string;
  height?: string;
}

export default function ImagePlaceholder({ label, aspectRatio, height }: Props) {
  return (
    <div
      className="flex items-center justify-center text-[0.72rem] tracking-[0.1em] uppercase font-medium w-full rounded-sm"
      style={{
        background: "repeating-linear-gradient(135deg, #e8d9d0 0px, #e8d9d0 10px, #f0e5df 10px, #f0e5df 20px)",
        border: "1px dashed var(--blush)",
        color: "var(--rose)",
        aspectRatio: aspectRatio,
        height: height,
        minHeight: height ? undefined : "200px",
      }}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
