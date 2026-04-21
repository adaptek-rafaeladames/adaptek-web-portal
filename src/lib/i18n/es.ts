/**
 * Spanish copy for the Adaptek website.
 * [TODO: Translate all strings from en.ts]
 * Currently mirrors English as placeholders — replace with proper translations.
 */

export const es = {
  nav: {
    logo: "Adaptek",
    links: [
      { label: "Servicios", href: "#services" },
      { label: "Nosotros", href: "#founders" },
      { label: "Perspectivas", href: "#insights" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Agendar consulta",
    skipLink: "Saltar al contenido principal",
  },

  hero: {
    headline: "Sistemas de IA centrados en el ser humano para equipos reales.",
    subheadline:
      "Adaptek diseña y despliega flujos de trabajo de IA, sistemas de conocimiento y agentes inteligentes para entornos de salud y otros sectores de alto impacto — pensados desde la psicología humana y la accesibilidad.",
    ctaPrimary: "Agendar una consulta de 30 minutos",
    ctaSecondary: "Descargar checklist de preparación para IA",
    imageAlt:
      "Ilustración abstracta de personas y sistemas de IA interconectados en tonos verde y naranja",
  },

  // [TODO: Complete all remaining Spanish translations]
  // Sections below are placeholders — translate before launching ES toggle
  whyAdaptek: { sectionLabel: "Por qué Adaptek", headline: "[TODO]", intro: "[TODO]", problemsHeadline: "[TODO]", problems: [], solutionsHeadline: "[TODO]", solutions: [] },
  services: { sectionLabel: "Servicios", headline: "[TODO]", subheadline: "[TODO]", items: [] },
  proof: { sectionLabel: "Confianza", headline: "[TODO]", subheadline: "[TODO]", outcomes: [], logosLabel: "[TODO]", ctaText: "[TODO]" },
  founders: { sectionLabel: "El equipo", headline: "[TODO]", subheadline: "[TODO]", members: [] },
  ctaStrip: { headline: "[TODO]", subheadline: "[TODO]", ctaPrimary: "Agendar consulta", ctaSecondary: "Ver demo" },
  contact: { sectionLabel: "Contacto", headline: "[TODO]", subheadline: "[TODO]", fields: { firstName: "Nombre", lastName: "Apellido", email: "Correo laboral", company: "Empresa", role: "Cargo", message: "¿En qué quieres que te ayude la IA?" }, submit: "Enviar solicitud", successMessage: "[TODO]", errorMessage: "[TODO]" },
  footer: { tagline: "La tecnología debe adaptarse a las realidades humanas.", links: [], languageToggle: { en: "EN", es: "ES" }, copyright: "© 2026 Adaptek. Todos los derechos reservados.", email: "info@adaptek.ai" },
} as const;
