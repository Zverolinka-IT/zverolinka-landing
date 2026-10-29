import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { HomeLink } from "@/components/home-link";
import { HeartIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-header">
      <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between gap-6 px-4 sm:px-10 lg:h-25">
        <HomeLink aria-label={t("home", { name: site.name })}>
          <Logo />
        </HomeLink>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10">
            {site.nav.map((item) => (
              <a key={item.key} href={item.href} className="font-bold transition-colors hover:text-brand">
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <a
            href={site.donateHref}
            target="_blank"
            rel="noopener"
            className="
              flex h-12 w-50 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand via-brand-light
              via-35% to-brand font-semibold text-white shadow-button transition-opacity
              hover:opacity-90
            "
          >
            <HeartIcon className="size-6 shrink-0" />
            <span className="pr-2">{t("donate")}</span>
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
