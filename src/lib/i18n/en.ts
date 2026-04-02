/**
 * English copy for the Adaptek website.
 * Edit text here — no component files need to change for copy-only updates.
 * Mirror every key change in es.ts for Spanish.
 */

export const en = {
  nav: {
    logo: "Adaptek",
    links: [
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#founders" },
      { label: "Insights", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Book a consult",
    skipLink: "Skip to main content",
  },

  hero: {
    headline: "Human-centered AI systems for real-world teams.",
    subheadline:
      "Adaptek builds reliable AI workflows, knowledge systems, and intelligent agents for healthcare and other high-stakes environments — designed around human psychology, behavior, and accessibility from day one.",
    ctaPrimary: "Book a 30-minute consult",
    ctaSecondary: "Download AI readiness checklist",
    imageAlt:
      "Abstract paper-cut illustration of interconnected people and AI systems in teal and orange tones",
  },

  whyAdaptek: {
    sectionLabel: "Why Adaptek",
    headline: "AI that fits human realities, not the other way around.",
    intro:
      "Most AI projects fail not because of bad technology — but because they ignore the humans who have to use it. We fix that.",
    problemsHeadline: "The common pattern we fix:",
    problems: [
      "AI tools built without input from the people who use them daily",
      "Adoption collapses because staff don't trust or understand the system",
      "Accessibility and cognitive load ignored until after launch",
      "No guardrails: hallucinations, bias, and liability risks go unmanaged",
      "Generic consulting that doesn't understand your workflows",
    ],
    solutionsHeadline: "What we do differently:",
    solutions: [
      "Co-design with your staff — from clinicians to operations teams",
      "Behavioral readiness assessments before and after deployment",
      "Accessibility-first architecture, tested with people with disabilities",
      "Responsible AI guardrails: input filtering, output validation, observability",
      "Boutique depth: senior experts on every engagement, no junior handoffs",
    ],
  },

  services: {
    sectionLabel: "Our Services",
    headline: "Four ways we help you deploy AI that works.",
    subheadline:
      "From the first workflow to a full AI adoption program — we meet you where you are.",
    items: [
      {
        id: "rag",
        icon: "brain",
        title: "AI Knowledge Systems (RAG)",
        tagline: "Your knowledge base, made intelligent.",
        bullets: [
          "RAG pipelines for policies, protocols, and clinical documentation",
          "Guardrails, citation enforcement, and hallucination detection",
          "Connects to your existing systems (EHR, SharePoint, Confluence)",
        ],
        priceRange: "$15K – $60K",
        leadTime: "4 – 10 weeks",
      },
      {
        id: "automation",
        icon: "workflow",
        title: "AI Workflow Automation",
        tagline: "Cut the manual work that drains your team.",
        bullets: [
          "Email triage, summarization, and smart draft generation",
          "Form pre-population and intake automation",
          "Seamlessly integrated into existing tools — no rip-and-replace",
        ],
        priceRange: "$15K – $50K",
        leadTime: "3 – 8 weeks",
      },
      {
        id: "responsible-ai",
        icon: "shield",
        title: "Responsible AI Architecture",
        tagline: "AI you can stand behind legally and ethically.",
        bullets: [
          "Input filters, output validation, and bias auditing",
          "Observability dashboards and failure monitoring",
          "AI Act and HIPAA-aligned documentation and controls",
        ],
        priceRange: "$10K – $40K",
        leadTime: "3 – 6 weeks",
      },
      {
        id: "adoption",
        icon: "people",
        title: "Adoption, Accessibility & Training",
        tagline: "Build the human side of your AI rollout.",
        bullets: [
          "AI readiness assessment: stakeholder interviews + readiness scoring",
          "Accessibility audits and inclusive design workshops",
          "Change management strategy and staff training programs",
        ],
        priceRange: "$5K – $35K",
        leadTime: "2 – 6 weeks",
      },
    ],
  },

  proof: {
    sectionLabel: "Proof & Trust",
    headline: "Built for organizations where the stakes are real.",
    subheadline:
      "We are currently onboarding our first cohort of clients. These are the kinds of outcomes we're here to deliver.",
    outcomes: [
      {
        metric: "30–50%",
        description:
          "Reduction in manual documentation time reported by clinical teams after RAG knowledge system deployments in similar healthcare environments.",
      },
      {
        metric: "2×",
        description:
          "Staff adoption rate when AI tools are co-designed with end users vs. top-down deployments, based on behavioral research Vanessa brings to every engagement.",
      },
      {
        metric: "100%",
        description:
          "Of our projects include responsible AI controls — guardrails, bias review, and output validation — built in from the start, not bolted on later.",
      },
    ],
    logosLabel: "We are accepting founding clients in healthcare and mid-market organizations.",
    ctaText: "Let's talk about your AI challenge",
  },

  founders: {
    sectionLabel: "The Team",
    headline: "Meet your human-centered AI experts.",
    subheadline:
      "We are the AI consultancy where both co-founders are qualified to discuss the architecture of the system and the psychology of the people using it.",
    members: [
      {
        name: "Rafael Adames",
        title: "Chief AI Architect",
        imageAlt: "Portrait of Rafael Adames, Chief AI Architect at Adaptek",
        imageSrc: "/images/rafael-adames.jpg",
        bio: "Rafael brings 10+ years of enterprise AI experience, including large-scale deployments at Accenture across healthcare, financial services, and operations. He specializes in production-grade RAG systems, AI workflow automation, responsible AI architecture, and MLOps.",
        highlights: [
          "10+ years enterprise AI at Accenture",
          "Expert in RAG, MLOps, and responsible AI guardrails",
          "B.S. Human Systems Engineering (UX), ASU",
          "Bilingual: English / Spanish",
        ],
        linkedin: "https://linkedin.com/in/rafael-adames",
      },
      {
        name: "Vanessa Echandia",
        title: "Director of Human-Centered Strategy",
        imageAlt:
          "Portrait of Vanessa Echandia, Director of Human-Centered Strategy at Adaptek",
        imageSrc: "/images/vanessa-echandia.jpg",
        bio: "Vanessa combines a psychology and social sciences background with lived experience as a person with multiple sclerosis and years of health advocacy work at the National MS Society. She leads every engagement's human side — adoption, accessibility, behavioral readiness, and inclusive design.",
        highlights: [
          "M.S. Psychology / Cyberpsychology (in progress)",
          "Former health advocate, National MS Society",
          "Disability-informed accessibility design",
          "Bilingual: English / Spanish",
        ],
        linkedin: "https://linkedin.com/in/vanessa-echandia",
      },
    ],
  },

  ctaStrip: {
    headline: "Ready to humanize your AI?",
    subheadline:
      "Book a free 30-minute consult. No pitch, no pressure — just an honest conversation about where AI can genuinely help your team.",
    ctaPrimary: "Book a 30-minute consult",
    ctaSecondary: "Schedule a demo",
  },

  contact: {
    sectionLabel: "Contact",
    headline: "Contact our AI strategy team.",
    subheadline:
      "Tell us about your organization and what you're trying to solve. We'll get back to you within one business day.",
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Work Email",
      company: "Company Name",
      role: "Job Title",
      message: "What do you want AI to help with?",
    },
    submit: "Submit Request",
    successMessage:
      "Thank you! We received your message and will get back to you within one business day.",
    errorMessage:
      "Something went wrong. Please try again or email us directly at rafael.adames@adaptek.ai.",
  },

  footer: {
    tagline: "Technology must adapt to human realities.",
    links: [
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#founders" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
    languageToggle: {
      en: "EN",
      es: "ES",
    },
    copyright: "© 2026 Adaptek. All rights reserved.",
    email: "rafael.adames@adaptek.ai",
  },
} as const;

export type SiteContent = typeof en;
