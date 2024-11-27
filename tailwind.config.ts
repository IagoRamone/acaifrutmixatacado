import type { Config } from "tailwindcss";

export default {
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
        customGreen: "#BAD341",
        customFundo:  "#5F3368",
        customForm: "#4EA37D",
        customButton:"#5EBF2A"
      },
    },
  },
  plugins: [],
} satisfies Config;
