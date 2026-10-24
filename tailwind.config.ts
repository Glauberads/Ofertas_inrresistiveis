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
        brand: {
          primary: "#16A34A",
          primaryHover: "#15803D",
          dark: "#14532D",
          accent: "#FACC15",
          accentHover: "#EAB308",
          bgLight: "#F8FAFC",
          textMain: "#0F172A",
          textMuted: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(22, 163, 74, 0.2)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
        cardHover: "0 14px 30px -4px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
