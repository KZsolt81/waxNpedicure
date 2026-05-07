"use client";

import { useState, FormEvent } from "react";

interface Props {
  serviceOptions: string[];
}

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  service?: string;
  preferredDate?: string;
}

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Please enter your name.";
  if (!data.phone?.trim()) errors.phone = "Please enter a phone or WhatsApp number.";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.postcode?.trim()) errors.postcode = "Please enter your postcode.";
  if (!data.service) errors.service = "Please select a treatment.";
  return errors;
}

const fieldStyle: React.CSSProperties = {
  padding: "13px 16px",
  border: "1.5px solid var(--blush)",
  borderRadius: "4px",
  fontFamily: "var(--font-sans), sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  background: "var(--paper)",
  color: "var(--ink)",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  color: "#8a6858",
  marginBottom: "6px",
  display: "block",
};

export default function ContactForm({ serviceOptions }: Props) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormState("submitting");

    // NOTE: Replace this timeout with a real fetch() call to your form endpoint or email API.
    // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    await new Promise((r) => setTimeout(r, 1000));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div
        className="p-10 rounded-sm text-center"
        style={{ background: "var(--mist)", border: "1px solid var(--blush)" }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h3
          className="font-light text-[1.6rem] mb-3"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--ink)" }}
        >
          Request Received
        </h3>
        <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>
          Thank you for getting in touch. We&rsquo;ll confirm your booking within a few hours. For urgent requests, please message via WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>First Name *</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              style={fieldStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
            />
            {errors.name && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.name}</p>}
          </div>
          <div>
            <label style={labelStyle}>Phone / WhatsApp *</label>
            <input
              name="phone"
              type="tel"
              placeholder="+44 xxx xxxx xxxx"
              style={fieldStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
            />
            {errors.phone && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
          {errors.email && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.email}</p>}
        </div>

        {/* Postcode */}
        <div>
          <label style={labelStyle}>Your Postcode *</label>
          <input
            name="postcode"
            type="text"
            placeholder="e.g. SE15 4AB"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
          {errors.postcode && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.postcode}</p>}
        </div>

        {/* Treatment select */}
        <div>
          <label style={labelStyle}>Treatment *</label>
          <select
            name="service"
            style={fieldStyle}
            defaultValue=""
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          >
            <option value="" disabled>Select a treatment…</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.service}</p>}
        </div>

        {/* Date + Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Preferred Date</label>
            <input
              name="preferredDate"
              type="date"
              style={fieldStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
            />
          </div>
          <div>
            <label style={labelStyle}>Preferred Time</label>
            <input
              name="preferredTime"
              type="time"
              style={fieldStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label style={labelStyle}>Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any notes, allergies, access info, or questions…"
            rows={4}
            style={{ ...fieldStyle, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
        </div>

        {formState === "error" && (
          <p className="text-sm font-light" style={{ color: "var(--rose)" }}>
            Something went wrong. Please try again or contact us via WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full py-4 rounded-full text-[0.82rem] font-medium tracking-[0.1em] uppercase transition-colors disabled:opacity-60 cursor-pointer"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--ink)")}
        >
          {formState === "submitting" ? "Sending…" : "Request Booking →"}
        </button>

        <p className="text-[0.78rem] font-light text-center" style={{ color: "#9a7868" }}>
          * Required fields. We&rsquo;ll never share your data with third parties.
        </p>
      </div>
    </form>
  );
}
