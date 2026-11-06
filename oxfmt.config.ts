import { defineConfig } from "oxfmt";

const config = defineConfig({
  endOfLine: "lf",
  ignorePatterns: [],
  printWidth: 100,
  singleAttributePerLine: true,
  sortPackageJson: false,
  tabWidth: 2,
  trailingComma: "es5",

  sortImports: {
    customGroups: [
      {
        elementNamePattern: ["react", "react-*", "react-*/**"],
        groupName: "type-react",
        selector: "type",
      },
      {
        elementNamePattern: ["react", "react-*", "react-*/**"],
        groupName: "react",
      },
      {
        elementNamePattern: ["@/**"],
        groupName: "internal-alias",
      },
    ],

    groups: [
      "value-builtin",
      { newlinesBetween: true },
      "react",
      { newlinesBetween: false },
      "value-external",
      { newlinesBetween: true },
      "internal-alias",
      { newlinesBetween: true },
      "value-parent",
      { newlinesBetween: true },
      "value-sibling",
      { newlinesBetween: true },
      "value-index",
      { newlinesBetween: true },
      "value-import",
      { newlinesBetween: true },
      "style",
      { newlinesBetween: true },
      "type-react",
      { newlinesBetween: false },
      "type-external",
      { newlinesBetween: false },
      "type-internal",
      { newlinesBetween: false },
      "type-parent",
      { newlinesBetween: false },
      "type-sibling",
      { newlinesBetween: true },
      "type-index",
      { newlinesBetween: true },
      "type-import",
    ],
    internalPattern: ["@/**"],
    newlinesBetween: true,
    order: "asc",
  },
});

export default config;
