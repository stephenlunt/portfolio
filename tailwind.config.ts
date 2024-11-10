import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        highlight: "#d0021b",
      },
      screens: {
        xs: "512px",
      },
    },
  },
} satisfies Config
