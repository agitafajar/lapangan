import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "0px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      textColor: {
        primary: "#129DC5",
        secondary: "#E0EDF1",
        error: "#BD2F2F",
      },
      backgroundColor: {
        primary: "#129DC5",
        secondary: "#E0EDF1",
        error: "#BD2F2F",
      },
      borderColor: {
        primary: "#129DC5",
        secondary: "#E0EDF1",
        error: "#BD2F2F",
      },
      ringColor: {
        primary: "#129DC5",
        secondary: "#E0EDF1",
        error: "#BD2F2F",
      },
    },
  },
  plugins: [],
};
export default config;
