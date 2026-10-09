import { site } from "@/content/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const icons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-8 ${className}`}>
      {site.social.map((item) => {
        const Icon = icons[item.name];
        return (
          <li key={item.name}>
            <a
              href={item.href}
              aria-label={item.name}
              className="
                flex size-8 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors
                hover:bg-brand hover:text-white
                md:size-10
              "
            >
              <Icon className="size-5 md:size-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
