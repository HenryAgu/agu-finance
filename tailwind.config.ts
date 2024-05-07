import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-background-image": "url('/assets/payment.png')",
      },
      colors: {
        primaryButton: "#d8cbbf",
        secondaryButton: "#d8cbbf",
      },
    },
  },
  plugins: [],
};
export default config;
