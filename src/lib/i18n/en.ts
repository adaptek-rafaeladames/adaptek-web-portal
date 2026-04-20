/**
 * English copy for the Adaptek website — V3 Human-Centered AI rebranding.
 * Edit text here — no component files need to change for copy-only updates.
 * Mirror every key change in es.ts for Spanish.
 */

export const en = {
  nav: {
    logo: "Adaptek",
    links: [
      { label: "Services", href: "#services" },
      { label: "Who We Serve", href: "#who-we-serve" },
      { label: "About Us", href: "#founders" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Book a consult",
    skipLink: "Skip to main content",
  },

  hero: {
    eyebrow: "Human & Psychological AI Consulting",
    headline: "AI that works for everyone.\nIncluding the people everyone else forgets.",
    subheadline:
      "Adaptek combines AI engineering, behavioral science, and disability-informed accessibility design — because 95% of AI initiatives fail not because of the technology, but because of the humans who have to use it.",
    ctaPrimary: "Book a 30-minute consult",
    ctaSecondary: "Get a Free Accessibility Scan",
    imageAlt:
      "Paper-cut illustration of diverse people — including a person in a wheelchair — connected by glowing lines to AI and health symbols",
    trustSignals: [
      "Disability-informed AI design",
      "Cyberpsychology-backed adoption",
      "WCAG 2.2 AA compliant",
    ],
  },

  whyAdaptek: {
    sectionLabel: "The Problem",
    stat: "95%",
    statLabel: "of corporate AI initiatives fail",
    statCaption:
      "Not because of the technology. Because of the humans who have to use it.",
    headline: "AI that fits human realities, not the other way around.",
    intro:
      "Organizations pour capital into AI deployments — tools purchased, licenses activated, infrastructure built. Yet those tools are abandoned before ROI is realized because they ignore accessibility, psychological safety, and the humans at the center.",
    barriers: [
      {
        number: "1",
        title: "Job Security Anxiety",
        description:
          "Employees fear replacement — actively resist, hide knowledge, and undermine rollouts.",
      },
      {
        number: "2",
        title: "Leadership Misalignment",
        description:
          "93% of senior AI leaders cite human factors as their #1 barrier (McKinsey 2025).",
      },
      {
        number: "3",
        title: "Cognitive Overload",
        description:
          "Generic training fails. Role-specific, task-integrated learning drives real adoption.",
      },
      {
        number: "4",
        title: "Culture Misalignment",
        description:
          "Authoritarian cultures amplify AI fear. Innovative cultures accelerate it.",
      },
      {
        number: "5",
        title: "Change Fatigue",
        description:
          "Without behavioral reinforcement, change reverts within 90 days.",
      },
      {
        number: "6",
        title: "Accessibility & Inclusion Gaps",
        description:
          "AI tools designed for the median user exclude employees and clients with disabilities — creating a two-tiered workplace where some people can use the tools and others cannot.",
      },
    ],
    barriersHeading: "The 6 Barriers to AI Adoption — And How We Address Them",
    barriersFootnote:
      "These barriers are especially acute in high-stakes, accessibility-sensitive environments — healthcare, disability services, and social-impact organizations.",
    problemsHeadline: "✗ The common pattern we fix:",
    problems: [
      "AI tools built without input from the people who use them daily",
      "Adoption collapses because staff don't trust or understand the system",
      "Accessibility and cognitive load ignored until after launch",
      "No guardrails: hallucinations, bias, and liability risks go unmanaged",
      "No boutique has ever combined deep psychology and technical expertise at this level — until now",
    ],
    solutionsHeadline: "✓ What we do differently:",
    solutions: [
      "Co-design with your staff — from clinicians to DSPs to operations teams",
      "Behavioral readiness assessments grounded in our Cyberpsychology Trust Framework",
      "Disability-informed design, tested with people who have lived experience",
      "Responsible AI guardrails: input filtering, output validation, observability",
      "Boutique depth: both founders on every engagement, no junior handoffs",
    ],
  },

  whoWeServe: {
    sectionLabel: "Who We Serve",
    headline: "Built for organizations where trust, inclusion, and AI must coexist.",
    subheadline:
      "We work best with mission-driven teams where the stakes are human — not just financial.",
    segments: [
      {
        id: "disability",
        icon: "accessibility",
        title: "Disability & Accessibility Organizations",
        description:
          "Nonprofits and service organizations deploying AI for people with I/DD — where dignity, inclusion, psychological safety, and oversight are non-negotiable.",
        tags: ["DSP Teams", "Assistive Technology", "I/DD Support"],
      },
      {
        id: "healthcare",
        icon: "health",
        title: "Healthcare & Clinical Teams",
        description:
          "Hospitals, clinics, and health systems rolling out AI documentation, clinical decision support, or patient engagement tools where staff anxiety and burnout are real.",
        tags: ["Clinical Documentation", "AI Readiness", "HIPAA-aligned"],
      },
      {
        id: "enterprise",
        icon: "enterprise",
        title: "Mid-Market AI Adoption",
        description:
          "Companies with 100–2,000 employees who invested in Copilot, ChatGPT Enterprise, or similar tools and need a human-centered rollout to get real, sustained adoption.",
        tags: ["Microsoft Copilot", "Change Management", "Adoption Programs"],
      },
      {
        id: "hr",
        icon: "hr",
        title: "HR & People Teams",
        description:
          "People operations leaders managing workforce AI anxiety, equitable AI policy, and responsible deployment across a diverse, often resistant workforce.",
        tags: ["AI Policy", "Workforce Equity", "Leadership Training"],
      },
      {
        id: "latam",
        icon: "latam",
        title: "Bilingual & LATAM Organizations",
        description:
          "Organizations serving Spanish-speaking communities or expanding across LATAM who need AI implementation delivered natively in both English and Spanish.",
        tags: ["EN/ES Delivery", "LATAM Markets", "Bilingual Training"],
      },
      {
        id: "behavioral",
        icon: "behavioral",
        title: "Behavioral Health & Social Services",
        description:
          "Mental health networks, social service agencies, and community health organizations embedding AI into case management, documentation, or client engagement — where client dignity, data sensitivity, and staff wellbeing are paramount.",
        tags: ["Case Management AI", "Client Dignity", "Ethical AI Guardrails"],
      },
    ],
  },

  services: {
    sectionLabel: "Our Services",
    headline: "Four service lines. One integrated team.",
    subheadline:
      "From your first accessibility audit to a full behavioral adoption program — we meet you where you are.",
    items: [
      {
        id: "accessibility",
        icon: "accessibility",
        title: "AI Accessibility & Inclusive Design",
        tagline: "AI that works for every person in your organization.",
        lead: "Vanessa + Rafael",
        bullets: [
          "WCAG 2.2 accessibility audits for AI interfaces and outputs",
          "Disability-informed co-design with people who have lived experience",
          "Assistive technology integration and cognitive load analysis",
        ],
        priceRange: "Starting at $3K",
        leadTime: "2 – 4 weeks",
      },
      {
        id: "adoption",
        icon: "brain",
        title: "AI Adoption & Behavioral Readiness",
        tagline: "Turn AI anxiety into trusted everyday tools.",
        lead: "Vanessa leads · Rafael provides technical context",
        bullets: [
          "Organizational psychology assessments and culture resistance mapping",
          "Change management grounded in our Human-Centered Design framework",
          "Accessible AI rollouts for disability-service and clinical teams",
        ],
        priceRange: "Starting at $5K",
        leadTime: "2 – 8 weeks",
      },
      {
        id: "build",
        icon: "workflow",
        title: "Human-Centered AI Design & Build",
        tagline: "Production-grade AI built around the humans who use it.",
        lead: "Rafael leads · Vanessa designs the human layer",
        bullets: [
          "RAG pipelines for clinical documentation, policies, and knowledge bases",
          "Responsible AI guardrails: input filtering, output validation, observability",
          "Connects to your existing systems — no rip-and-replace",
        ],
        priceRange: "Starting at $15K",
        leadTime: "4 – 12 weeks",
      },
      {
        id: "speaking",
        icon: "people",
        title: "Speaking, Training & Education",
        tagline: "Build your team's AI literacy from the inside out.",
        lead: "Rafael + Vanessa co-deliver",
        bullets: [
          "AI literacy workshops and executive leadership programs",
          "Keynote presentations tailored to your industry and audience",
          "Programs for disability-service, healthcare, and bilingual organizations",
        ],
        priceRange: "Starting at $2.5K",
        leadTime: "1 – 4 weeks",
      },
    ],
  },

  disabilitySpotlight: {
    sectionLabel: "Disability-Informed AI",
    headline: "The people most affected by AI are still being designed around — not with.",
    intro:
      "Most AI systems are designed for the median user — missing the 26% of U.S. adults living with a disability. Adaptek's disability-informed lens ensures AI works for everyone: the DSP who needs cognitive simplicity, the person with I/DD using an AI companion, and the clinical team managing accessibility compliance.",
    stats: [
      { value: "1.3B", label: "people worldwide live with a disability" },
      {
        value: "26%",
        label: "of U.S. adults have a disability — underserved by most AI tools",
      },
      {
        value: "30%",
        label:
          "of issues caught by automated accessibility tools — the rest require expert review",
      },
    ],
    useCases: [
      {
        tag: "Use Case · 1 of 3",
        title: "AI Independence Companion",
        description:
          "A dignity-first daily assistant co-designed with people with intellectual and developmental disabilities — pilotable in one program, scalable across the network.",
        highlights: [
          "Daily routine and communication support in a low-cognitive-load format",
          "Strict guardrails and full transparency so families and staff can trust it",
          "Person-centered: adapts to each individual's goals, abilities, and style",
        ],
      },
      {
        tag: "Use Case · 2 of 3",
        title: "AI Support Coach for DSPs & Clinicians",
        description:
          "Reducing paperwork fatigue and AI anxiety for the frontline staff who make independence possible — framing AI as a helper, not a judge.",
        highlights: [
          "Trained exclusively on organization-approved materials — not the open web",
          "Converts clinical language into plain-language documentation staff can own",
          "Positions AI as a supportive colleague — reducing burnout and building confidence",
        ],
      },
      {
        tag: "Use Case · 3 of 3",
        title: "Assistive Technology Matching at Scale",
        description:
          "AI-assisted intake captures goals, abilities, and environments — suggesting the right AT tools and generating tailored training plans for specialists and families.",
        highlights: [
          "AI-assisted intake and shortlist matching for AT specialists",
          "Auto-generated training plans per individual, reducing specialist documentation burden",
          "Feedback loop that tracks real independence outcomes over time",
        ],
      },
    ],
    vanessaQuote:
      "Accessibility is never a checkbox for us. It's lived reality — and it's the starting point for every engagement, not an afterthought.",
    vanessaCredit:
      "Vanessa Echandia · Behavioral Scientist · M.S. User-Centered Design (Brandeis) · Person with MS",
  },

  proof: {
    sectionLabel: "Case Studies",
    headline: "Built for organizations where the stakes are real.",
    subheadline:
      "This is what happens when AI is designed around the humans who use it.",
    caseStudies: [
      {
        tag: "Healthcare",
        title: "Hospital AI Readiness Program",
        context:
          "500-bed Massachusetts hospital · 800 clinical staff · AI clinical documentation rollout",
        approach:
          "4-phase program: Behavioral Assessment → Leadership Training → All-Staff Rollout → Reinforcement",
        metrics: [
          {
            value: "71%",
            label: "Adoption at 6 months",
            sub: "vs. 34% projected without intervention",
          },
          {
            value: "3.2",
            label: "AI Anxiety Score",
            sub: "down from 6.8/10 pre-program",
          },
          {
            value: "$28K",
            label: "Investment",
            sub: "ROI-positive for client at Month 7",
          },
        ],
      },
      {
        tag: "Mid-Market Tech",
        title: "84% Copilot Adoption in 90 Days",
        context:
          "300-person company · $108K/year Copilot investment · only 23% active usage at Day 60",
        approach:
          "Culture audit + resistance mapping (3 distinct groups) · Cyberpsychology-driven workshops · internal champions network",
        metrics: [
          {
            value: "84%",
            label: "Active usage at Day 90",
            sub: "up from 23% at Day 60",
          },
          {
            value: "90",
            label: "Days to result",
            sub: "vs. 12-month industry average",
          },
          {
            value: "$22K",
            label: "Investment",
            sub: "vs. $108K license at risk of abandonment",
          },
        ],
      },
      {
        tag: "Clinical Knowledge",
        title: "Healthcare Knowledge Assistant",
        context:
          "Regional health network · Clinical teams searching policies and protocols across 3 EHRs",
        approach:
          "RAG pipeline on clinical documentation · Guardrails + hallucination detection · Accessibility-first UI",
        metrics: [
          {
            value: "30–40%",
            label: "Reduction in search time",
            sub: "reported by clinical teams",
          },
          {
            value: "95%",
            label: "Answer accuracy rate",
            sub: "on validated clinical queries",
          },
          {
            value: "$180K",
            label: "Estimated annual ROI",
            sub: "from time savings across teams",
          },
        ],
      },
    ],
    ctaText: "Talk to us about your AI challenge",
  },

  competitive: {
    sectionLabel: "Our Edge",
    headline: "The only boutique that speaks both languages.",
    subheadline:
      "Most behavioral firms need a technical team to brief them. Most AI firms need a behavioral scientist to explain why adoption fails. Adaptek doesn't — because both disciplines live in the same room.",
    columns: ["Adaptek", "Big Four", "Boutique AI Firms", "Accessibility Firms"],
    rows: [
      {
        capability: "Production-grade AI Build",
        values: [true, true, true, false],
      },
      {
        capability: "Behavioral Science & Cyberpsychology",
        values: [true, false, false, false],
      },
      {
        capability: "Disability-Informed Design",
        values: [true, "limited", false, true],
      },
      {
        capability: "Bilingual EN/ES Delivery",
        values: [true, false, false, false],
      },
      {
        capability: "Both Founders Senior-Led",
        values: [true, false, "varies", "varies"],
      },
      {
        capability: "Boutique Price Point",
        values: [true, false, true, true],
      },
    ],
    closingLine:
      "Vanessa's M.S. in User-Centered Design (Brandeis University) combined with Rafael's enterprise AI engineering background creates a structural moat no other boutique consultancy can replicate.",
  },

  founders: {
    sectionLabel: "The Team",
    headline: "The only boutique where both founders speak both languages.",
    subheadline:
      "AI architecture and behavioral psychology — in one integrated team, at every engagement, with no junior handoffs.",
    members: [
      {
        name: "Rafael Adames",
        title: "Co-Founder, Human-Centered AI Engineering",
        imageAlt: "Portrait of Rafael Adames, Co-Founder of Adaptek",
        imageSrc: "/images/rafael-adames.jpg",
        bio: "Rafael brings 10+ years of enterprise AI experience including large-scale deployments at Accenture across healthcare, financial services, and operations. He explains AI architecture, risks, and limitations from the inside out — combining deep technical expertise with formal study in Human Systems Engineering (UX) at ASU to design AI that fits the people who actually use it.",
        highlights: [
          "10+ years enterprise AI, Accenture",
          "Production RAG, MLOps, Responsible AI guardrails",
          "Human Systems Engineering / UX, ASU",
          "Bilingual: English / Spanish",
        ],
        linkedin: "https://www.linkedin.com/in/rafaeladames/",
      },
      {
        name: "Vanessa Echandia",
        title: "Co-Founder, AI Accessibility & Human Impact",
        imageAlt: "Portrait of Vanessa Echandia, Co-Founder of Adaptek",
        imageSrc: "/images/vanessa-echandia.jpg",
        bio: "Vanessa combines an M.S. in User-Centered Design (Brandeis University) with lived experience as a person with multiple sclerosis and years of disability advocacy at the National MS Society. She brings human psychology, usability research, and inclusive design principles to every AI engagement — ensuring systems work for the people who actually have to use them.",
        highlights: [
          "M.S. User-Centered Design, Brandeis University",
          "Disability advocate · National MS Society alumna · Person with MS",
          "Human-centered design · Accessible behavioral change · UX research",
          "Bilingual: English / Spanish",
        ],
        linkedin: "https://www.linkedin.com/in/vanessa-echandia-6157753ba/",
      },
    ],
  },

  ctaStrip: {
    headline: "Ready to build AI that actually works for your people?",
    subheadline:
      "Book a free 30-minute consult. No pitch, no pressure — just an honest conversation about where human-centered AI can make a real difference.",
    ctaPrimary: "Book a 30-minute consult",
    ctaSecondary: "Get a Free Accessibility Scan",
  },

  contact: {
    sectionLabel: "Contact",
    headline: "Let's talk about your AI challenge.",
    subheadline:
      "Tell us about your organization and your biggest AI or accessibility challenge. We'll get back to you within one business day.",
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Work Email",
      company: "Company Name",
      role: "Job Title",
      message: "Your biggest AI or accessibility challenge",
    },
    messagePlaceholder:
      "Tell us about your organization and what you'd like AI to help with — including any accessibility or adoption challenges…",
    intentPrefill: {
      consult:
        "I'd like to book a 30-minute introductory consult to explore how Adaptek can help our organization.",
      accessibility:
        "I'm interested in a free accessibility scan for our organization's digital products or AI tools.",
      challenge:
        "I have an AI adoption or implementation challenge I'd like to talk through with Adaptek.",
      services:
        "I'd like to learn more about Adaptek's services and which one might be the right fit for us.",
    },
    submit: "Start the Conversation",
    successMessage:
      "Thank you! We'll be in touch within one business day.",
    errorMessage:
      "Something went wrong. Please try again or email us directly at rafael.adames@adaptek.ai.",
  },

  footer: {
    tagline: "AI that adapts to human realities — not the other way around.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Who We Serve", href: "#who-we-serve" },
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
