/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./Navigation.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        mono: ["SpaceMono"],
      },
      filter: {
        dropShadowDark: "drop-shadow(0 1px 1px rgb(255 255 255 / 1))",
        dropShadowLight: "drop-shadow(0 1px 1px rgb(0 0 0 / 1))",
      },
      colors: {
        border: "#1a332a",
        input: "#243f34",
        ring: "#274b36",
        background: "#0d1c11",
        foreground: "#a9ffea",
        primary: {
          DEFAULT: "#62dfa0",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1cd7a2",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#26a879",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1a1e19",
          foreground: "#b3b3c0",
        },
        accent: {
          DEFAULT: "#eaffff",
          foreground: "#1a1a1a",
        },
        popover: {
          DEFAULT: "#1c1e19",
          foreground: "#e4f3f4",
        },
        card: {
          DEFAULT: "#102314",
          foreground: "#e4f3f4",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {},
    },
  },
  plugins: [],
};
