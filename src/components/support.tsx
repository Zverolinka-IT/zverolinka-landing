import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { HandsHeartIcon } from "@/components/icons";

export function Support() {
  const t = useTranslations("Support");

  return (
    <section id="podporte-nas" className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <div
        className="
          rounded-2xl border border-accent-border bg-accent-soft px-5 pt-5 pb-4
          md:flex md:items-center md:gap-6 md:p-6
        "
      >
        <div className="md:min-w-0 md:flex-1 mb-1">
          <div className="flex items-center gap-2 -ml-1 md:ml-0">
            <HandsHeartIcon className="h-10 w-12.5 shrink-0 text-accent md:w-15" />
            <h2 className="text-lg leading-6 font-semibold sm:text-xl sm:leading-9">{t("title")}</h2>
          </div>
          <p className="mt-3 text-sm leading-normal text-pretty md:pl-17 md:pr-20 sm:text-base md:mt-1">{t("body")}</p>
        </div>
        <a
          href={site.donateHref}
          className="
            mt-6 flex h-13 items-center justify-center rounded-xl bg-linear-to-r from-accent-light to-accent px-6
            font-semibold text-white shadow-md shadow-accent/25 transition-opacity
            hover:opacity-90
            md:mt-0 md:mx-10 md:w-84 md:shrink-0
          "
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
