import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Hedvig Letters Serif Variable",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "light-highlight": "#d0021b",
        "dark-highlight": "#f97583",
      },
      screens: {
        xs: "512px",
      },
    },
  },
} satisfies Config
