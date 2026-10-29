import Image from "next/image";
import { useTranslations } from "next-intl";
import csob from "../../public/images/partner-csob.png";
import ombudsman from "../../public/images/partner-zvieraci-ombudsman.png";

export function Partners() {
  const t = useTranslations("Partners");

  return (
    <section aria-label={t("label")} className="mx-auto w-full max-w-360 px-4 sm:px-10">
      <ul className="flex items-center justify-center gap-16 py-12 md:gap-22.5 md:py-16">
        <li>
          <Image src={csob} alt={t("csob")} className="h-20 w-auto md:h-22.5" />
        </li>
        <li>
          <Image src={ombudsman} alt={t("ombudsman")} className="h-20 w-auto md:h-22.5" />
        </li>
      </ul>
    </section>
  );
}
