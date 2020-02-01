"use strict";

module.exports = {
  plugins: ["@lsd/internal"],
  rules: {
    // We are not asking to specify a value to the return statement if not necessary
    "consistent-return": 0,

    // We don't want to force the use of this
    "class-methods-use-this": 0,

    // Requires consistent usage of linebreaks for each pair of parentheses.
    "function-paren-newline": ["error", "consistent"],

    // We use global requires in various places, e.g. code splitting instances.
    "global-require": 0,

    // Make sure we have a blank line after imports block
    "import/newline-after-import": 2,

    // We sometimes have components with same name on the same file, so we have
    // to rename one of the default import
    "import/no-named-as-default": 0,

    // Force a line break after the decorator statement
    "@lsd/internal/decorator-line-break": 2,

    // Force a blank line after the class declaration
    "@lsd/internal/padded-blocks": ["error", { classes: "top" }],

    // Ignore linebreak style. The CRLF / LF endings wont matter if a windows user correctly
    // converts CRLF to LF upon commits; otherwise there are errors every line.
    "linebreak-style": 0,

    // We want a blank line between class members
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],

    // We use arrow function
    "no-confusing-arrow": 0,

    // Allow useful console logging
    "no-console": ["error", { allow: ["info", "warn", "error"] }],

    // Only one empty line allow
    "no-multiple-empty-lines": ["error", { max: 1 }],

    // Allow ++ in for loops
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

    // Requires that either both curly braces, or neither, directly enclose newlines
    "object-curly-newline": ["error", { consistent: true }],

    // Since we have our internal padded-blocks plugin, we don't want any conflicts
    "padded-blocks": 0,

    // We want to make sure we have a blank line after a block of const
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ],

    // Allow reassigning props of objects, e.g. `foo.bar = 2`
    "no-param-reassign": ["error", { props: false }]
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
};
