const rules = require("./.eslintrules.cjs");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: true,
      node: true
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  ignorePatterns: ["build"],
  rules
};
