import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules", ".astro", "dist"],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
