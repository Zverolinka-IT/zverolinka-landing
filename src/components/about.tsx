import Image from "next/image";
import { useTranslations } from "next-intl";
import team from "../../public/images/about-team.webp";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="o-zverolinke" className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <div className="grid overflow-hidden rounded-2xl border border-brand-soft bg-surface md:min-h-75 md:grid-cols-2">
        <div className="px-5 pt-5 pb-4 md:px-6 md:py-8">
          <h2 className="text-xl leading-7 font-bold md:text-[28px] md:leading-9">{t("title")}</h2>
          <p className="mt-4 text-sm leading-5 text-pretty md:mt-2 md:text-base md:leading-6">
            {t.rich("body", { b: (chunks) => <strong className="font-bold">{chunks}</strong> })}
          </p>
        </div>

        {/* Inside the card padding on mobile, flush against the right edge from md. */}
        <div className="px-5 pt-1 pb-5 md:p-0">
          <Image
            src={team}
            alt={t("imageAlt")}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-50 w-full rounded-2xl object-cover md:h-full md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
