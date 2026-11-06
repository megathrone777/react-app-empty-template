import { defineConfig } from "oxlint";

const config = defineConfig({
  categories: {
    correctness: "error",
  },

  env: {
    builtin: true,
  },

  ignorePatterns: ["dist/**", "node_modules/**"],

  overrides: [
    {
      files: ["src/theme/**"],
      rules: {
        "react/button-has-type": "off",
      },
    },
  ],

  plugins: ["react", "import"],

  rules: {
    "func-style": ["error", "expression"],
    "no-inline-comments": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    "typescript/consistent-type-imports": "error",
    "typescript/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: true, allowExpressions: true },
    ],
    "typescript/no-explicit-any": "error",
    "typescript/no-non-null-assertion": "off",
    "typescript/no-unused-vars": ["error", { argsIgnorePattern: "_", varsIgnorePattern: "_" }],

    "react/button-has-type": "error",
    "react/exhaustive-deps": "off",
    "react/hook-use-state": "error",
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-array-index-key": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/no-unstable-nested-components": "error",
    "react/prefer-function-component": "error",
    "react/rules-of-hooks": "error",
    "react/style-prop-object": "error",
  },
});

export default config;
