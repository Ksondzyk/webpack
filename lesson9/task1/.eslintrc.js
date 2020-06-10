module.exports = {
  extends: "eslint-config-airbnb-base",
  rules: {
    "no-console": "warn",
    eqeqeq: "error",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
  },
};
