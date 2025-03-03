import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "plugins": ["react"],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
];