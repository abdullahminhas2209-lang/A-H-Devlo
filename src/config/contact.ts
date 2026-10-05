/**
 * Centralized Contact Configuration for A&H Devlo Studio
 * All official studio communication links, emails, phone numbers,
 * and social profiles are maintained here.
 */

export interface ContactConfig {
  email: string;
  whatsappNumber: string;
  formattedWhatsapp: string;
  linkedinUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  gmailSubject: string;
  gmailBody: string;
  whatsappMessage: string;
  formspreeEndpoint: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  // Official Business Email
  email: import.meta.env?.VITE_CONTACT_EMAIL || 'devlobyah@gmail.com',

  // Official Formspree Endpoint for client inquiries
  formspreeEndpoint:
    import.meta.env?.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xjygvzbl',

  // Official WhatsApp Business Number (international digits only: 923333875790)
  whatsappNumber: import.meta.env?.VITE_CONTACT_WHATSAPP || '923333875790',

  // Human-readable formatted phone for UI display & copy
  formattedWhatsapp: '+92 333 3875790',

  // Official LinkedIn Company Page
  linkedinUrl:
    import.meta.env?.VITE_CONTACT_LINKEDIN || 'https://www.linkedin.com/company/a-h-devlo/',

  // Official Instagram Profile & Handle
  instagramUrl:
    import.meta.env?.VITE_INSTAGRAM_URL ||
    import.meta.env?.VITE_CONTACT_INSTAGRAM_URL ||
    'https://www.instagram.com/ah_devlo/#',

  // Instagram handle without @
  instagramHandle:
    (import.meta.env?.VITE_INSTAGRAM_HANDLE ||
      import.meta.env?.VITE_CONTACT_INSTAGRAM_HANDLE ||
      'ah_devlo').replace(/^@/, ''),

  // Prefilled Subject for Gmail Compose & Mailto
  gmailSubject: 'Website project inquiry — A&H Devlo',

  // Prefilled Body template for Gmail Compose & Mailto
  gmailBody:
    'Hi A&H Devlo team,\n\nI would like to discuss a website project for my business.\n\nProject Overview:\n- Business / Company:\n- Service needed (Business Website / Landing Page / Redesign):\n- Approximate timeline / target launch:\n- Any design references or existing links:\n\nBest regards,',

  // Prefilled Message for WhatsApp Business chat
  whatsappMessage: "Hi A&H Devlo, I'd like to discuss a website project.",
};

/**
 * Builds the direct Gmail web compose URL with prefilled to, subject, and body.
 */
export const getGmailComposeUrl = (
  subject: string = CONTACT_CONFIG.gmailSubject,
  body: string = CONTACT_CONFIG.gmailBody,
  to: string = CONTACT_CONFIG.email
): string => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Builds the standard mailto: fallback URL for native mail applications.
 */
export const getMailtoUrl = (
  subject: string = CONTACT_CONFIG.gmailSubject,
  body: string = CONTACT_CONFIG.gmailBody,
  to: string = CONTACT_CONFIG.email
): string => {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Builds the direct WhatsApp Business chat URL with international number and prefilled message.
 */
export const getWhatsAppUrl = (
  message: string = CONTACT_CONFIG.whatsappMessage,
  number: string = CONTACT_CONFIG.whatsappNumber
): string => {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Builds the direct Instagram Direct Message (DM) URL using the ig.me deep link.
 */
export const getInstagramDmUrl = (
  handle: string = CONTACT_CONFIG.instagramHandle
): string => {
  const cleanHandle = handle.replace(/^@/, '');
  return `https://ig.me/m/${cleanHandle}`;
};

