import type { routing } from "@/i18n/routing";
import type messages from "../messages/sk.json";

// Type-checks translation keys against the Slovak messages file.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
