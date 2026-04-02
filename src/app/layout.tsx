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
    "Adaptek helps healthcare and mid-market organizations deploy AI that people actually trust and use. We combine deep AI engineering with psychology, cyberpsychology, and disability-informed design.",
  keywords: [
    "AI consulting",
    "human-centered AI",
    "healthcare AI",
    "RAG systems",
    "AI workflow automation",
    "responsible AI",
    "AI accessibility",
    "AI adoption",
    "Massachusetts AI consulting",
  ],
  authors: [
    { name: "Rafael Adames", url: "https://linkedin.com/in/rafael-adames" },
    { name: "Vanessa Echandia", url: "https://linkedin.com/in/vanessa-echandia" },
  ],
  creator: "Adaptek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptek-ai.web.app",
    siteName: "Adaptek",
    title: "Adaptek — Human-Centered AI Consulting",
    description:
      "We build reliable AI workflows, knowledge systems, and agents for healthcare and high-stakes environments — designed around human psychology and accessibility.",
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
      "We build AI systems that people actually trust and use — designed around human psychology, behavior, and accessibility.",
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
