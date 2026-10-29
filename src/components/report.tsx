import { useTranslations } from "next-intl";
import { InfoIcon } from "@/components/icons";

const steps = ["check", "forward", "followUp"] as const;

export function Report() {
  const t = useTranslations("Report");

  return (
    <section id="nahlasenie" className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <div className="rounded-2xl border border-brand-soft bg-surface p-6 md:p-12">
        <h2 className="text-xl font-bold text-balance md:text-[28px] md:leading-9">{t("title")}</h2>

        <ol className="mt-6 md:mt-8 md:grid md:grid-cols-3 md:gap-x-3">
          {steps.map((step, index) => (
            <li key={step} className="relative flex gap-4 pb-2">
              {/* In the one-column list a line joins each number to the next one. */}
              {index < steps.length - 1 && (
                <span aria-hidden className="absolute top-6 -bottom-2 left-[11.5px] w-px bg-accent md:hidden" />
              )}
              {/* The padding plus bg-clip-content leaves a white gap inside the ring. */}
              <span
                className="
                  flex size-6 shrink-0 items-center justify-center rounded-full border border-accent bg-accent
                  bg-clip-content p-0.5 text-xs font-semibold text-white
                  md:size-10 md:p-1 md:text-lg
                "
              >
                {index + 1}
              </span>
              <div className="text-sm leading-5 md:text-base md:leading-6">
                <h3 className="text-base leading-6 font-bold md:text-lg md:leading-7">{t(`items.${step}.title`)}</h3>
                <p className="mt-1 text-pretty">{t(`items.${step}.body`)}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-2xl bg-accent-soft p-4 md:mt-7">
          <div className="flex items-center gap-3">
            <InfoIcon className="size-6 shrink-0 text-accent md:size-8" />
            <h3 className="text-sm leading-5 font-semibold text-accent md:text-lg md:leading-7">{t("note.title")}</h3>
          </div>
          <p className="mt-1 pl-11 text-sm leading-5 text-pretty md:text-base md:leading-6">{t("note.body")}</p>
        </div>
      </div>
    </section>
  );
}
