import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnquiryPayload {
  name?: string;
  replyContact?: string;
  service?: string;
  postcode?: string;
  preferredLanguage?: string;
  question?: string;
  website?: string; // honeypot
}

function clean(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

function hasObviousSpam(text: string): boolean {
  const lower = text.toLowerCase();
  const spamKeywords = ["crypto", "casino", "viagra", "loan", "forex", "seo service"];
  const links = (lower.match(/https?:\/\//g) || []).length;
  const repeatedChars = /(.)\1{8,}/.test(lower);
  return spamKeywords.some((word) => lower.includes(word)) || links > 2 || repeatedChars;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EnquiryPayload;

    // Honeypot: bots often fill hidden fields.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true, message: "Thanks for your message." });
    }

    const payload = {
      name: clean(body.name),
      replyContact: clean(body.replyContact),
      service: clean(body.service),
      postcode: clean(body.postcode),
      preferredLanguage: clean(body.preferredLanguage),
      question: clean(body.question),
    };

    if (!payload.name || !payload.replyContact || !payload.question) {
      return NextResponse.json(
        { ok: false, message: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (payload.name.length > 120 || payload.replyContact.length > 180 || payload.question.length > 4000) {
      return NextResponse.json(
        { ok: false, message: "Please shorten your message and try again." },
        { status: 400 }
      );
    }

    const spamText = `${payload.name}\n${payload.replyContact}\n${payload.question}`;
    if (hasObviousSpam(spamText)) {
      return NextResponse.json(
        { ok: false, message: "We could not send this message. Please try again." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpSecureRaw = process.env.SMTP_SECURE;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL;

    const smtpPort = Number.parseInt(smtpPortRaw || "", 10);
    const smtpSecure = (smtpSecureRaw || "").toLowerCase() === "true";

    if (
      !smtpHost ||
      !smtpPortRaw ||
      Number.isNaN(smtpPort) ||
      !smtpSecureRaw ||
      !smtpUser ||
      !smtpPassword ||
      !enquiryToEmail
    ) {
      console.error("Missing SMTP environment variables.");
      return NextResponse.json(
        { ok: false, message: "Message service is not configured yet. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const subject = `New Website Question - ${payload.name}`;
    const textBody = [
      "New question-only enquiry from website:",
      "",
      `Name: ${payload.name}`,
      `Reply Contact: ${payload.replyContact}`,
      `Service Interest: ${payload.service || "Not specified"}`,
      `Postcode/Area: ${payload.postcode || "Not specified"}`,
      `Preferred Language: ${payload.preferredLanguage || "Not specified"}`,
      "",
      "Question:",
      payload.question,
    ].join("\n");

    const isEmailReply = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.replyContact);

    await transporter.sendMail({
      from: `"Website Enquiry" <${smtpUser}>`,
      to: enquiryToEmail,
      subject,
      text: textBody,
      replyTo: isEmailReply ? payload.replyContact : undefined,
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks for your question. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
