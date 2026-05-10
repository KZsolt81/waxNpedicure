export const SQUARE_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "PASTE_SQUARE_BOOKING_URL_HERE";

export const WHATSAPP_CHAT_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || "PASTE_WHATSAPP_CHAT_URL_HERE";

export function getWhatsAppChatUrl(message: string): string {
  if (WHATSAPP_CHAT_URL !== "PASTE_WHATSAPP_CHAT_URL_HERE") {
    return WHATSAPP_CHAT_URL;
  }

  return `https://wa.me/447751314988?text=${encodeURIComponent(message)}`;
}

export const SHORT_BOOKING_POLICY =
  "No upfront payment. Card details may be required to secure your appointment. A 50% late cancellation/no-show fee may apply if cancelled with less than 24 hours' notice.";

export const FULL_CANCELLATION_POLICY =
  "Card details may be required to secure your appointment. No payment is taken at the time of booking. If you cancel with less than 24 hours' notice or do not attend your appointment, a late cancellation/no-show fee of 50% of the selected treatment price may be charged. If you cancel more than 24 hours before your appointment, no cancellation fee applies. The remaining balance is paid after your treatment.";
