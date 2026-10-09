import Image from "next/image";
import { site } from "@/content/site";
import logo from "../../public/images/logo.svg";

// The logo file exported from the design. It is 62 x 40 and already orange.
export function Logo({ className = "" }: { className?: string }) {
  return <Image src={logo} alt={site.name} priority className={`h-10 w-15.5 ${className}`} />;
}
