import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
      },
      colors: {
        ink: "#07100D",
        brand: "#6B8E32",
        forest: "#244126",
        deep: "#0A2A1D",
        warm: "#F7F7F2",
        muted: "#6B6B6B",
        mist: "#F3F4F0",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 16, 13, 0.10)",
        premium: "0 24px 80px rgba(7, 16, 13, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
