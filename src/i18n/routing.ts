import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Add a locale here and a matching messages/<locale>.json file to add a language.
  locales: ["sk"],
  defaultLocale: "sk",
  // The default language keeps clean URLs (/). Other languages get a prefix (/en).
  localePrefix: "as-needed",
});
