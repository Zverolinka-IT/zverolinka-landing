import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { ArrowCircleRightIcon } from "@/components/icons";
// Cut from the mobile design screenshot. Swap for the real photo when it is ready.
import team from "../../public/images/about-team.png";

// Only the mobile design has this section so far, so it is hidden from md up.
export function About() {
  const t = useTranslations("About");

  return (
    <section id="o-zverolinke" className="mx-auto w-full max-w-360 px-4 sm:px-10 md:hidden">
      <div className="rounded-2xl bg-surface px-5 pt-5 pb-4">
        <h2 className="text-xl leading-7 font-semibold">{t("title")}</h2>
        <p className="mt-1 text-sm leading-5 text-pretty">{t("body")}</p>

        <a
          href={site.teamHref}
          className="
            mt-5 inline-flex items-center gap-2.5 font-semibold text-accent transition-opacity
            hover:opacity-80
          "
        >
          {t("team")}
          <ArrowCircleRightIcon className="size-5" />
        </a>

        <Image src={team} alt={t("imageAlt")} sizes="100vw" className="mt-4 w-full rounded-2xl" />
      </div>
    </section>
  );
}
