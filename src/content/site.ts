// Settings that do not change between languages.
// All visible text lives in messages/<locale>.json.
export const site = {
  name: "Zverolinka",
  email: "info@zverolinka.sk",
  // The hero countdown counts the days until this moment.
  launchDate: "2026-11-12T00:00:00+01:00",

  nav: [
    { key: "about", href: "#o-nas" },
    { key: "howItWorks", href: "#ako-to-funguje" },
    { key: "support", href: "#podporte-nas" },
  ],
  contactHref: "#kontakt",
  privacyHref: "#",
  donateHref: "#",
  teamHref: "#",

  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "TikTok", href: "#" },
  ],

  legal: [
    { key: "privacy", href: "#" },
    { key: "terms", href: "#" },
  ],
} as const;
