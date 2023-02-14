module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["standard", "prettier"],
  overrides: [
    {
      extends: ["standard", "prettier"],
      files: ["*.js", "*.jsx"],
      rules: {
        "no-unused-vars": ["error"],

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
