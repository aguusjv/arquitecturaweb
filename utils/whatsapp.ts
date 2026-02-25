export const CONTACT_CONFIG = {
  phone: "5492932547307",
  email: "info@arquitecturaweb.site",
  defaultMessage: "Hola! Vengo desde la web. Quisiera consultar por servicios de arquitectura y desarrollo web profesional.",
  // Usar el logo público en /public
  logoUrl: "arq_web.png" 
};

export const buildWhatsAppLink = (message?: string): string => {
  const finalMessage = message || CONTACT_CONFIG.defaultMessage;
  return `https://wa.me/${CONTACT_CONFIG.phone}?text=${encodeURIComponent(finalMessage)}`;
};

export const openWhatsApp = (message?: string): void => {
  window.open(buildWhatsAppLink(message), '_blank');
};

/**
 * Opens the default email client with a pre-filled subject and body
 */
export const openEmail = (subject?: string, body?: string): void => {
  const mailto = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
  // open mail client without navigating away from the site
  window.open(mailto, '_blank');
};