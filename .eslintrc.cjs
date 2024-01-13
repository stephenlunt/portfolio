// https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".astro"],
  },
  rules: {
    "no-mixed-spaces-and-tabs": "error",
  },
  settings: {
    react: {
      pragma: "h",
      version: "18.0",
    },
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y"],
  overrides: [
    {
      files: ["*.astro", "*.js", "*.ts", "*.tsx"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        camelcase: ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      files: ["*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
}
