/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [
    "node_modules/**",
    "public/**",
    ".storybook/**",
    "src/stories/**",
    "*.scss",
    "*.js",
  ],
};
