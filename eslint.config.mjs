import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import betterTailwind from "eslint-plugin-better-tailwindcss";

// Keep in sync with printWidth in .prettierrc.json.
const printWidth = 120;

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Always wrap if, else, for, and while bodies in braces. This comes after `prettier`,
  // which turns the rule off; the "all" option does not conflict with Prettier.
  { rules: { curly: ["error", "all"] } },
  // Prettier does not break long strings, so this rule wraps long Tailwind class lists.
  // "loose" leaves a class list alone when Prettier keeps it on one line, so the two
  // tools do not undo each other's changes.
  {
    plugins: { "better-tailwindcss": betterTailwind },
    settings: { "better-tailwindcss": { entryPoint: "src/app/globals.css" } },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "error",
        { printWidth, preferSingleLine: true, strictness: "loose" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Agent skill files are not ours, so `npm run format` must not rewrite them.
    ".agents/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
