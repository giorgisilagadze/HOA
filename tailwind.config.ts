import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      md: { min: "375px" },
      sm: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1440px" },
      xxl: { min: "1820px" },
    },
    boxShadow: {
      thin: "rgba(2, 47, 176, 0.15) 0px 1px 10px 0px",
      product: "0px 2px 10px 0px rgba(109, 134, 206, 0.25)",
    },
  },
  plugins: [],
};
export default config;
