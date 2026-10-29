import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { PawIcon } from "@/components/icons";
import appScreens from "../../public/images/app-screens.webp";

export function Hero() {
  const t = useTranslations("Hero");
  const tSignup = useTranslations("Signup");

  return (
    <section
      className="
        mx-auto flex w-full max-w-360 flex-col px-4 pt-4
        sm:px-10
        md:pt-10
        lg:pt-15 lg:grid lg:grid-cols-[minmax(0,1fr)_32%] lg:items-end lg:gap-9
        xl:grid-cols-[minmax(0,1fr)_385px]
      "
    >
      {/* Below lg both wrappers are display: contents, so their children join
          one column and the order classes can place the launch note, the image
          and the signup card around each other. Only lg splits into columns. */}
      <div className="contents lg:block">
        <h1
          className="
            mt-6 text-3xl leading-[1.2] font-bold tracking-[-0.02em] text-brand
            sm:text-[40px] sm:leading-tight
            md:mt-0
            lg:text-5xl
          "
        >
          {t.rich("title", {
            accent: (chunks) => <span className="text-accent">{chunks}</span>,
            br: () => <br className="hidden lg:inline" />,
          })}
        </h1>

        <p className="mt-4 font-medium text-pretty sm:text-lg sm:leading-7 sm:font-normal">{t("lead")}</p>

        {/* Side by side from md up. At lg the picture column is a share of the
            width, so the picture shrinks with the window and this row keeps
            enough room. From xl the picture stays 385px and this row shrinks. */}
        <div
          className="
            contents
            md:order-2 md:mt-8 md:grid md:grid-cols-[clamp(11rem,40%,252px)_minmax(0,1fr)] md:gap-6
            lg:mt-5
          "
        >
          {/* The two paws are decoration, so they sit in the corners instead of
              at the fixed offsets the design uses for its wider frame. */}
          <div
            className="
              relative order-first flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-brand p-10
              text-center
              md:order-0 md:px-5 md:py-9
            "
          >
            <PawIcon className="absolute top-5 left-7 size-6 -rotate-30 text-brand-soft md:top-6" />
            <p className="text-xl leading-6 font-bold tracking-[-0.01em] text-background text-balance">
              {t("launchTitle")}
            </p>
            <PawIcon className="absolute right-6 bottom-6 size-6 rotate-37 text-brand-soft md:bottom-6 lg:right-7" />
          </div>

          <div
            className="
              order-last mt-12 rounded-2xl border border-brand bg-surface p-5
              md:order-0 md:mt-0 md:flex md:flex-col md:justify-center md:p-6
            "
          >
            <p className="leading-6 font-bold">{tSignup("title")}</p>
            <a
              href={site.newsletterHref}
              className="
                mt-5 flex h-13 items-center justify-center rounded-2xl bg-linear-to-r from-brand via-brand-light via-35%
                to-brand px-8 font-semibold text-white shadow-button transition-opacity
                hover:opacity-90
                md:w-70 md:max-w-full
              "
            >
              {tSignup("cta")}
            </a>
          </div>
        </div>
      </div>

      {/* The picture has a light, not transparent, background, so the soft
          shadow under the phones is a blurred oval behind it. */}
      <div
        className="
          relative isolate mx-auto mt-10 w-full max-w-72
          after:absolute after:inset-x-[8%] after:top-[90%] after:-z-10 after:h-[16%] after:rounded-[50%]
          after:bg-foreground/10 after:blur-lg
          sm:max-w-sm
          md:order-1 md:mt-8
          lg:mt-0 lg:max-w-none
        "
      >
        <Image
          src={appScreens}
          alt={t("imageAlt")}
          preload
          sizes="(min-width: 1280px) 385px, (min-width: 1024px) 30vw, (min-width: 640px) 384px, 320px"
          className="w-full"
        />
      </div>
    </section>
  );
}
