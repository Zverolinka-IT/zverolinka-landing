import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer id="kontakt" className="mt-auto border-t border-brand-soft bg-surface">
      <div className="mx-auto w-full max-w-360 px-5 pt-6 pb-6 sm:px-10">
        {/* Mobile shows contact first, then the social links. From md the
            order is logo, social links, contact, as the design has it. */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_338px_minmax(0,1fr)] md:gap-12">
          <div className="max-md:hidden md:order-1">
            <Logo />
            <p className="mt-4 max-w-md text-pretty lg:pr-20">{t("about")}</p>
          </div>

          <div className="md:order-3">
            <h2 className="text-base leading-6 font-bold sm:text-lg sm:leading-7 md:font-semibold">
              {t("contactTitle")}
            </h2>
            <p className="mt-2 text-[15px] leading-6">
              {t.rich("contact", {
                email: site.email,
                br: () => <br className="max-md:hidden" />,
                mail: (chunks) => (
                  <a
                    href={`mailto:${site.email}`}
                    className="
                      font-semibold text-accent underline underline-offset-2
                      max-md:mt-1 max-md:block max-md:w-fit
                    "
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>

          <div className="md:order-2">
            <h2 className="text-lg leading-7 font-bold max-md:hidden">{t("followTitle")}</h2>
            <SocialLinks className="justify-center md:mt-6 md:justify-start" />
          </div>
        </div>

        <div
          className="
            mt-5 flex flex-col items-start gap-3 border-t border-brand-soft pt-4 text-xs leading-4 text-brand
            sm:flex-row sm:justify-center sm:gap-4
          "
        >
          <p>{t("rights", { year: new Date().getFullYear(), name: site.name })}</p>
          <span aria-hidden className="h-4 w-px bg-brand max-sm:hidden" />
          {site.legal.map((link) => (
            <a key={link.key} href={link.href} className="font-semibold underline underline-offset-2">
              {t(`legal.${link.key}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
