import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ["**/**/*.test.js"],
  },
  {
    ignores: ["cypress/*"],
  },
  {
    ignores: ["cypress.config.js"],
  },
];
