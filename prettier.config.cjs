/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  printWidth: 80,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
