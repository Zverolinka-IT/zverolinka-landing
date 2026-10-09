import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { PawIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");

  return { title: t("metaTitle") };
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <SiteHeader />
      <main
        className="
          relative isolate flex flex-1 flex-col overflow-hidden px-4 pt-10 pb-6
          sm:px-10
          md:items-center md:justify-center md:py-20
        "
      >
        {/* The design has no visible heading, but the page needs one. */}
        <h1 className="sr-only">{t("title")}</h1>

        {/* Two large paws decorate the desktop design only. */}
        <PawIcon className="absolute top-12 left-8 -z-10 size-43 rotate-30 text-brand-soft opacity-20 max-md:hidden" />
        <PawIcon className="absolute right-16 bottom-35 -z-10 size-43 -rotate-30 text-brand-soft opacity-20 max-md:hidden" />

        <ContactForm
          consent={t.rich("consent", {
            link: (chunks) => (
              <a href={site.privacyHref} className="font-bold text-brand underline underline-offset-2">
                {chunks}
              </a>
            ),
          })}
        />
      </main>
    </>
  );
}
