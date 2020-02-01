"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
  rules: {
    "import/no-unresolved": "off",

    "prettier/prettier": [
      0,
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5",
        printWidth: 100,
        tabWidth: 2,
        arrowParens: "avoid",
        jsxSingleQuote: false,
        jsxBracketSameLine: true
      }
    ],

    "@typescript-eslint/indent": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-angle-bracket-type-assertion": 0
  }
};
