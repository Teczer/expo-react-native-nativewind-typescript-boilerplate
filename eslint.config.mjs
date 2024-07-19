import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error", // Ajoute une règle ESLint pour Prettier
      "react/react-in-jsx-scope": "off", // Déjà configuré
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Détecte automatiquement la version de React
      },
    },
  },
  ...configPrettier, // Assure que les règles ESLint n'entrent pas en conflit avec Prettier
];
