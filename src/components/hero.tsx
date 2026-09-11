import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { SignupForm } from "@/components/signup-form";
import appScreens from "../../public/images/app-screens.png";

const DAY_MS = 24 * 60 * 60 * 1000;

function daysUntil(date: string) {
  return Math.max(0, Math.ceil((new Date(date).getTime() - Date.now()) / DAY_MS));
}

export function Hero() {
  const t = useTranslations("Hero");
  const tSignup = useTranslations("Signup");
  const days = daysUntil(site.launchDate);

  return (
    <section
      className="
        mx-auto flex w-full max-w-360 flex-col px-4 pt-4
        sm:px-10
        md:grid md:items-end md:gap-10 md:pt-10
        lg:pt-15
        xl:grid-cols-[minmax(0,1fr)_385px] xl:gap-9
      "
    >
      {/* Below md both wrappers are display: contents, so their children join
          one column and the order classes can put the countdown on top and
          the signup card under the image, as the mobile design does. */}
      <div className="contents md:block">
        <h1
          className="
            mt-6 text-[32px] leading-[1.2] font-bold tracking-[-0.02em] text-brand
            sm:text-5xl sm:leading-tight
            md:mt-0
            lg:text-[60px]
          "
        >
          {t.rich("title", {
            accent: (chunks) => <span className="text-accent">{chunks}</span>,
            br: () => <br className="hidden lg:inline" />,
          })}
        </h1>

        <p className="mt-4 text-sm leading-5 font-medium text-pretty sm:text-xl sm:leading-7 sm:font-normal">
          {t("lead")}
        </p>

        <div className="contents md:mt-5 md:grid md:grid-cols-[252px_minmax(0,1fr)] md:gap-6">
          <div
            className="
              order-first flex flex-col items-center justify-center rounded-xl bg-brand p-4 text-center text-white
              md:order-0 md:px-6 md:py-8
            "
          >
            <p className="text-xl leading-6 font-medium text-balance md:max-w-48">{t("countdownTitle")}</p>
            <p className="mt-4 text-[40px] leading-none font-medium md:mt-6">{days}</p>
            <p className="mt-1 text-sm">{t("countdownUnit", { count: days })}</p>
          </div>

          <div className="order-last mt-9 rounded-xl border border-brand bg-surface p-5 md:order-0 md:mt-0 md:p-6">
            <p className="leading-6 font-semibold">{tSignup("title")}</p>
            <SignupForm
              consent={tSignup.rich("consent", {
                link: (chunks) => (
                  <a href={site.privacyHref} className="font-medium text-brand underline underline-offset-2">
                    {chunks}
                  </a>
                ),
              })}
            />
          </div>
        </div>
      </div>

      {/* The picture has a light, not transparent, background, so the soft
          shadow under the phones is a blurred oval behind it. */}
      <div
        className="
          relative isolate mx-auto mt-10 w-full max-w-63
          after:absolute after:inset-x-[8%] after:top-[90%] after:-z-10 after:h-[16%] after:rounded-[50%]
          after:bg-foreground/10 after:blur-lg
          md:mt-0 md:max-w-sm
          xl:max-w-none
        "
      >
        <Image
          src={appScreens}
          alt={t("imageAlt")}
          preload
          sizes="(min-width: 1280px) 385px, (min-width: 768px) 24rem, 252px"
          className="w-full"
        />
      </div>
    </section>
  );
}
