"use client";

import { useState, FormEvent } from "react";

interface Props {
  serviceOptions: string[];
}

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  replyContact?: string;
  postcode?: string;
  preferredLanguage?: string;
  question?: string;
}

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Please enter your name.";
  if (!data.replyContact?.trim())
    errors.replyContact = "Please enter your email or WhatsApp number so we can reply.";
  if (!data.question?.trim()) errors.question = "Please enter your question.";
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
  const [serverMessage, setServerMessage] = useState("");

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
    setServerMessage("");
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          replyContact: data.replyContact,
          service: data.service,
          postcode: data.postcode,
          preferredLanguage: data.preferredLanguage,
          question: data.question,
          website: data.website, // honeypot
        }),
      });

      const result = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !result.ok) {
        setFormState("error");
        setServerMessage(result.message || "Something went wrong. Please try again shortly.");
        return;
      }

      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
      setServerMessage("Something went wrong. Please try again shortly.");
    }
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
          Question Sent
        </h3>
        <p className="text-sm font-light leading-relaxed" style={{ color: "#6a5048" }}>
          Thank you for getting in touch. We&rsquo;ll reply shortly regarding your enquiry.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label style={labelStyle}>Name *</label>
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
          <label style={labelStyle}>Your Email or WhatsApp Number *</label>
          <input
            name="replyContact"
            type="text"
            placeholder="you@example.com or +44..."
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
          {errors.replyContact && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.replyContact}</p>}
        </div>

        <div>
          <label style={labelStyle}>Service Interest (Optional)</label>
          <select
            name="service"
            style={fieldStyle}
            defaultValue=""
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          >
            <option value="">Select a service (optional)</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Postcode / Area (Optional)</label>
          <input
            name="postcode"
            type="text"
            placeholder="e.g. SE15 4AB"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
        </div>

        <div>
          <label style={labelStyle}>Preferred Language (Optional)</label>
          <input
            name="preferredLanguage"
            type="text"
            placeholder="e.g. English"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
        </div>

        <div>
          <label style={labelStyle}>Your Question *</label>
          <textarea
            name="question"
            placeholder="Type your question here..."
            rows={4}
            style={{ ...fieldStyle, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--rose)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--blush)")}
          />
          {errors.question && <p className="text-[0.78rem] mt-1" style={{ color: "var(--rose)" }}>{errors.question}</p>}
        </div>

        {formState === "error" && (
          <p className="text-sm font-light" style={{ color: "var(--rose)" }}>
            {serverMessage || "Something went wrong. Please try again or contact us via WhatsApp."}
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
          {formState === "submitting" ? "Sending…" : "Send Question"}
        </button>

        <p className="text-[0.78rem] font-light text-center" style={{ color: "#9a7868" }}>
          For appointments, please use the Book Now button. This form is for questions only.
        </p>
      </div>
    </form>
  );
}
