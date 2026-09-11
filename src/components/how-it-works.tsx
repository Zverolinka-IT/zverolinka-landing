import { useTranslations } from "next-intl";

const steps = ["situation", "questions", "contact", "whatToDo"] as const;

export function HowItWorks() {
  const t = useTranslations("Steps");

  return (
    <section id="ako-to-funguje" className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <div className="rounded-2xl bg-surface px-5 pt-6 pb-8 sm:px-7">
        <h2 className="text-xl leading-6 font-semibold sm:text-[30px] sm:leading-10">{t("title")}</h2>

        <ol className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-4">
          {steps.map((step, index) => (
            <li key={step} className="relative flex gap-4">
              {/* In the one-column list a line joins each number to the next one. */}
              {index < steps.length - 1 && (
                <span aria-hidden className="absolute top-6 -bottom-2 left-[11.5px] w-px bg-brand sm:hidden" />
              )}
              {/* The padding plus bg-clip-content leaves a white gap inside the ring. */}
              <span
                className="
                  flex size-6 shrink-0 items-center justify-center rounded-full border border-brand bg-brand-soft
                  bg-clip-content p-0.5 text-sm font-medium text-brand
                  sm:size-8 sm:p-0.75 sm:text-lg
                "
              >
                {index + 1}
              </span>
              <div className="text-sm leading-5 sm:text-xl sm:leading-7">
                <h3 className="text-base leading-6 font-semibold sm:text-xl sm:leading-7">
                  {t(`items.${step}.title`)}
                </h3>
                <p className="mt-1 text-pretty">{t(`items.${step}.body`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
