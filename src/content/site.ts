// Settings that do not change between languages.
// All visible text lives in messages/<locale>.json.
export const site = {
  name: "Zverolinka",
  email: "info@zverolinka.sk",

  nav: [
    { key: "about", href: "/#o-zverolinke" },
    { key: "howItWorks", href: "/#ako-to-funguje" },
    { key: "support", href: "/#podporte-nas" },
  ],
  contactHref: "/kontakt",
  privacyHref: "#",
  donateHref: "https://alianciazdruzeninaochranuzvierat.darujme.sk/zverolinka-sprievodca-pre-zachranu-zvierat/",

  social: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594397074434" },
    { name: "Instagram", href: "https://www.instagram.com/zverolinka/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/zverolinka" },
  ],

  legal: [{ key: "privacy", href: "#" }],
} as const;
