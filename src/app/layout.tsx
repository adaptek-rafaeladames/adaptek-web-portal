import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Brand fonts loaded via next/font (zero layout shift, GDPR-compliant)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adaptek-ai.web.app"),
  title: {
    default: "Adaptek — Human-Centered AI Consulting",
    template: "%s | Adaptek",
  },
  description:
    "Adaptek helps healthcare and mid-market organizations deploy AI that people actually trust and use. We combine AI engineering, user-centered design, and disability-informed accessibility — because 95% of AI initiatives fail because of the humans who have to use them.",
  keywords: [
    "AI consulting",
    "human-centered AI",
    "healthcare AI",
    "RAG systems",
    "AI workflow automation",
    "responsible AI",
    "AI accessibility",
    "disability-informed AI",
    "AI adoption",
    "user-centered design",
    "WCAG accessibility consulting",
    "Massachusetts AI consulting",
  ],
  authors: [
    { name: "Rafael Adames", url: "https://www.linkedin.com/in/rafaeladames/" },
    { name: "Vanessa Echandia", url: "https://www.linkedin.com/in/vanessa-echandia-6157753ba/" },
  ],
  creator: "Adaptek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptek-ai.web.app",
    siteName: "Adaptek",
    title: "Adaptek — Human-Centered AI Consulting",
    description:
      "We build AI systems designed around human psychology, disability-informed accessibility, and user-centered design — because technology must work for everyone.",
    images: [
      {
        url: "/images/og-adaptek.png",
        width: 1200,
        height: 630,
        alt: "Adaptek — Human-Centered AI Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptek — Human-Centered AI Consulting",
    description:
      "We build AI systems that people actually trust and use — designed around human psychology, disability-informed accessibility, and user-centered design.",
    images: ["/images/og-adaptek.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adaptek-ai.web.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
