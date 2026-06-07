import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2D2D2D",
        ivory: "#FAF9F6",
        mutedGold: "#C9A769",
        burgundy: "#6B1F2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
