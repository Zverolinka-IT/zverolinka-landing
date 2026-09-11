import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Support } from "@/components/support";

// Rebuild the page every hour so the launch countdown stays current.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col gap-4 pb-6 md:gap-10 md:pb-10">
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Support />
      </main>
      <SiteFooter />
    </>
  );
}
