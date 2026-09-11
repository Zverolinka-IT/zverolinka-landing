import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer id="kontakt" className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-360 px-5 pt-6 pb-6 sm:px-10 md:pt-5">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,513fr)_minmax(0,358fr)_minmax(0,487fr)] lg:gap-0">
          {/* The mobile design shows only the contact column; the social
              links are already in the card above the footer. */}
          <div className="max-md:hidden">
            <Logo />
            <p className="mt-3.5 max-w-md text-lg leading-7 text-pretty sm:text-xl">{t("about")}</p>
          </div>

          <div className="max-md:hidden lg:pt-0.5">
            <h2 className="text-xl leading-7 font-semibold">{t("followTitle")}</h2>
            <SocialLinks tone="outline" className="mt-7" />
          </div>

          <div className="lg:pt-0.5">
            <h2 className="text-base leading-6 font-semibold sm:text-xl sm:leading-7">{t("contactTitle")}</h2>
            <p className="mt-1 text-[15px] leading-6 sm:text-xl sm:leading-7">
              {t.rich("contact", {
                email: site.email,
                br: () => <br className="max-md:hidden" />,
                mail: (chunks) => (
                  <a href={`mailto:${site.email}`} className="font-medium text-accent underline underline-offset-2">
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>

        <div
          className="
            mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border pt-4 text-xs leading-4 text-brand
            sm:grid-cols-3 sm:gap-y-2
            md:mt-5
          "
        >
          <p className="col-span-2 sm:col-span-1">{t("rights", { year: new Date().getFullYear(), name: site.name })}</p>
          {site.legal.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="w-fit font-medium underline underline-offset-2 last:justify-self-end sm:last:justify-self-auto"
            >
              {t(`legal.${link.key}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
