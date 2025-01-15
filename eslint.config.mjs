import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], //should add ".ts" if typescript project
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
