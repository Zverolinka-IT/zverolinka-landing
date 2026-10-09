import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircleIcon } from "@/components/icons";
import appInHand from "../../public/images/app-in-hand.webp";

const items = ["onePlace", "stepByStep", "contacts", "abuse"] as const;

export function Features() {
  const t = useTranslations("Benefits");

  return (
    <section id="ako-to-funguje" className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <div className="grid overflow-hidden rounded-2xl bg-surface md:grid-cols-[minmax(0,474fr)_minmax(0,886fr)]">
        {/* Under the text on mobile, in the left column from md. */}
        <Image
          src={appInHand}
          alt={t("imageAlt")}
          sizes="(min-width: 768px) 35vw, 100vw"
          className="order-last w-full object-cover max-md:max-h-96 md:order-0 md:h-full"
        />

        <div className="px-5 py-6 md:py-10 md:pr-5 md:pl-11">
          <h2 className="text-xl font-semibold sm:text-[28px] sm:leading-9 md:text-balance">{t("title")}</h2>

          <ul className="mt-6 space-y-4 md:space-y-3 sm:space-y-4 md:mt-8">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 sm:gap-5">
                <CheckCircleIcon className="size-5 shrink-0 text-accent sm:size-6 mt-1" />
                <div className="text-sm leading-5 sm:text-base sm:leading-normal">
                  <h3 className="text-base font-semibold sm:text-lg">{t(`items.${item}.title`)}</h3>
                  <p className="text-pretty sm:mt-0.5">{t(`items.${item}.body`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
