import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { HandsHeartIcon } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";

export function Support() {
  const t = useTranslations("Support");
  const tFollow = useTranslations("Follow");

  return (
    <section id="podporte-nas" className="mx-auto grid w-full max-w-360 gap-4 px-4 sm:px-10 md:grid-cols-2 md:gap-6">
      <div className="rounded-2xl border border-accent-border bg-accent-soft px-5 pt-5 pb-4 md:px-6 md:pb-6">
        <div className="flex items-center gap-2">
          <HandsHeartIcon className="h-10 w-12.5 shrink-0 text-accent md:h-12 md:w-15" />
          <h2 className="text-xl leading-6 font-semibold md:leading-7">{t("title")}</h2>
        </div>
        <p className="mt-3 text-sm leading-normal text-pretty md:mt-1">{t("body")}</p>
        <a
          href={site.donateHref}
          className="
            mt-6 flex h-10 items-center justify-center rounded-xl bg-linear-to-r from-accent-light to-accent px-6
            font-semibold text-white shadow-md shadow-accent/25 transition-opacity
            hover:opacity-90
            md:inline-flex
          "
        >
          {t("cta")}
        </a>
      </div>

      <div className="flex flex-col rounded-2xl bg-brand px-5 pt-5 pb-7 text-white md:px-6 md:pb-6">
        <h2 className="text-xl leading-7 font-semibold">{tFollow("title")}</h2>
        <p className="text-sm leading-normal">{tFollow("body")}</p>
        <SocialLinks tone="light" className="justify-center pt-7 md:mt-auto md:justify-start md:pt-10" />
      </div>
    </section>
  );
}
