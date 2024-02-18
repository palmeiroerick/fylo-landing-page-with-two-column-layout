import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      veryDarkBlue: "hsl(243, 87%, 12%)",
      desaturatedBlue: "hsl(238, 22%, 44%)",
      brightBlue: "hsl(224, 93%, 58%)",
      moderateCyan: "hsl(170, 45%, 43%)",
      lightGrayishBlue: "hsl(240, 75%, 98%)",
      lightGray: "hsl(0, 0%, 75%)",
    },
    fontFamily: {
      raleway: ["var(--raleway)"],
      openSans: ["var(--open-sans)"],
    },
    backgroundImage: {
      arrow: "url('/icon-arrow.svg')",
    },
  },
};

export default config;
