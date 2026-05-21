import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          dark:    "#191D18",
          card:    "#232820",
          section: "#1E221C",
        },
        gold: {
          DEFAULT: "#C4953A",
          light:   "#E8C97A",
          dim:     "#8A6828",
        },
        cream: {
          DEFAULT: "#F2EDE3",
          dim:     "#C8C0B0",
        },
        green: {
          deep:  "#2A3A28",
          mid:   "#3D5A3A",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif:   ["var(--font-shippori)", "serif"],
        body:    ["var(--font-noto)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
