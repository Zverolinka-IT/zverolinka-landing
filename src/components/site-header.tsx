import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  const t = useTranslations("Header");

  return (
    <header
      className="
        sticky top-0 z-50 border-b border-border bg-surface shadow-[0_4px_12px_rgb(37_42_49/0.05)]
        md:shadow-none
      "
    >
      <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between gap-6 px-4 sm:px-10 lg:h-25">
        <a href="#" aria-label={t("home", { name: site.name })}>
          <Logo />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10">
            {site.nav.map((item) => (
              <a key={item.key} href={item.href} className="font-medium transition-colors hover:text-brand">
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <a
            href={site.contactHref}
            className="
              flex h-13 items-center rounded-xl border border-brand px-10 font-medium text-brand transition-colors
              hover:bg-brand hover:text-white
            "
          >
            {t("contact")}
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
