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
        background: "var(--background)",
        foreground: "var(--foreground)",
        kaspi: {
          DEFAULT: "#F14635",
          hover: "#D63525",
          light: "#FFF0EE",
          dark: "#BD291A"
        },
        brand: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        dark: {
          950: "#070A10",
          900: "#0B0F19",
          850: "#101626",
          800: "#161F36",
          700: "#243254",
          600: "#384B75",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
