import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { PawIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

// Shown on every page in production until the site launches.
export function ComingSoon() {
  const t = useTranslations("ComingSoon");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center sm:px-10">
      <Logo />

      <div className="relative mt-10 w-full max-w-md overflow-hidden rounded-2xl bg-brand px-10 py-12">
        <PawIcon className="absolute top-5 left-7 size-6 -rotate-30 text-brand-soft" />
        <h1 className="text-3xl leading-[1.2] font-bold tracking-[-0.02em] text-background text-balance">
          {t("title")}
        </h1>
        <PawIcon className="absolute right-6 bottom-6 size-6 rotate-37 text-brand-soft" />
      </div>

      <p className="mt-6 max-w-md text-pretty sm:text-lg sm:leading-7">{t("lead")}</p>

      <SocialLinks className="mt-8 justify-center" />

      <p className="mt-8 max-w-md text-[15px] leading-6 text-pretty">
        {t.rich("contact", {
          email: site.email,
          mail: (chunks) => (
            <a href={`mailto:${site.email}`} className="font-semibold text-accent underline underline-offset-2">
              {chunks}
            </a>
          ),
        })}
      </p>
    </main>
  );
}
