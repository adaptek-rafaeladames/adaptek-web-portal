import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adaptek brand palette
        brand: {
          orange: "#FF7F2E",        // Primary orange
          "orange-dark": "#E06A18", // Hover state
          "orange-light": "#FFF0E6",// Tint / background
          green: "#3D9970",         // Fresh green accent
          "green-dark": "#2D7A55",  // Hover state
          "green-light": "#EBF7F0", // Tint
          charcoal: "#3A4A52",      // Primary text
          "charcoal-light": "#5A6A72",
          offwhite: "#F9F8F6",      // Page background
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        body: ["Nunito", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "section": "6rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 16px rgba(58, 74, 82, 0.08)",
        "card-hover": "0 6px 24px rgba(58, 74, 82, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
