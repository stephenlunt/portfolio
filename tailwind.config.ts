import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      },
    },
    screens: {
      xs: "512px",
      ...defaultTheme.screens,
    },
  },
} satisfies Config
