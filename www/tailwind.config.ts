import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "magic-indigo": "#5A16FF",
      },
    },
  },
  plugins: [],
};

export default config;
