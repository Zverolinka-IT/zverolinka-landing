import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Report } from "@/components/report";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Support } from "@/components/support";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col gap-4 pb-6 md:gap-10 md:pb-10">
        <Hero />
        <Features />
        <Report />
        <About />
        <Support />
        <Partners />
      </main>
      <SiteFooter />
    </>
  );
}
