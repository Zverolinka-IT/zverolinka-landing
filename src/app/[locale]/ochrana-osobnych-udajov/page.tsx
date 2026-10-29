import type { Metadata } from "next";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const rows = ["newsletter", "volunteer", "calls", "donations", "consents", "website"] as const;
const dataColumns = ["data", "basis", "retention"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Privacy");

  return { title: t("metaTitle") };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-base leading-6 font-bold md:text-xl md:leading-7">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  const t = useTranslations("Privacy");
  const b = (chunks: ReactNode) => <strong className="font-semibold">{chunks}</strong>;

  return (
    <>
      <SiteHeader />
      <main
        className="
          mx-auto w-full max-w-360 px-5 pt-6 pb-6 text-sm leading-5
          sm:px-10
          md:text-base md:leading-6
          lg:px-26 lg:pt-14 lg:pb-18
        "
      >
        <h1 className="text-2xl font-bold text-brand md:text-[32px] md:leading-10">{t("title")}</h1>
        <p className="mt-4 text-pretty md:mt-6">{t("intro")}</p>

        <Section title={t("controller.title")}>
          <p>{t.rich("controller.body", { b, email: site.email })}</p>
        </Section>

        <Section title={t("purposes.title")}>
          <p>{t("purposes.lead")}</p>
        </Section>

        {/* A table from md. On phones each row is a bullet with the column
            names written above its values, because four columns do not fit. */}
        <table className="w-full max-md:block md:mt-6 md:table-fixed">
          <thead className="max-md:sr-only">
            <tr className="text-left leading-7 font-bold text-white">
              <th scope="col" className="rounded-l-xl bg-accent py-2 pr-8 pl-4">
                {t("purposes.columns.purpose")}
              </th>
              {dataColumns.map((column) => (
                <th key={column} scope="col" className="bg-accent py-2 pr-8 last:rounded-r-xl">
                  {t(`purposes.columns.${column}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-md:block">
            {rows.map((row) => (
              <tr key={row} className="align-top max-md:mt-4 max-md:block md:border-b md:border-brand-soft">
                <th
                  scope="row"
                  className="
                    text-left text-base leading-6 font-bold
                    max-md:ml-6 max-md:list-item max-md:list-disc
                    md:py-3 md:pr-8 md:pl-4 md:leading-5.5 md:font-semibold
                  "
                >
                  {t(`purposes.rows.${row}.purpose`)}
                </th>
                {dataColumns.map((column) => (
                  <td key={column} className="max-md:mt-1 max-md:block md:py-3 md:pr-8 md:leading-5.5">
                    <span className="block font-semibold md:hidden">{t(`purposes.columns.${column}`)}</span>
                    {t(`purposes.rows.${row}.${column}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 space-y-1 md:mt-6">
          <p>{t("purposes.voluntary")}</p>
          <p>{t("purposes.sources")}</p>
        </div>

        <Section title={t("access.title")}>
          <p>{t("access.body")}</p>
        </Section>

        <Section title={t("cookies.title")}>
          <p>{t("cookies.body")}</p>
        </Section>

        <Section title={t("rights.title")}>
          <p>{t("rights.withdraw", { email: site.email })}</p>
          <p>{t("rights.gdpr")}</p>
        </Section>

        <Section title={t("security.title")}>
          <p>{t("security.body")}</p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
