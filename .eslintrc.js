module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: [`plugin:@typescript-eslint/recommended`, `prettier`],
  plugins: [`@typescript-eslint`, `prettier`],
  rules: {
    'prettier/prettier': `error`,
    quotes: [`warn`, `backtick`, { avoidEscape: true }],
    'no-console': [`warn`, { allow: [`info`, `warn`, `error`] }],
  },
}
