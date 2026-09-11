import { site } from "@/content/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "@/components/icons";

const icons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  TikTok: TikTokIcon,
};

// light: white disc with a thin outer ring, for the blue card.
// outline: blue ring only, for the white footer.
const tones = {
  light: "size-7 bg-white text-brand ring-[1.5px] ring-white ring-offset-[1.5px] ring-offset-brand hover:bg-white/85",
  outline: "size-9 border-2 border-brand text-brand hover:bg-brand hover:text-white",
};

const iconSizes = {
  light: "size-5",
  outline: "size-5.5",
};

export function SocialLinks({ tone, className = "" }: { tone: keyof typeof tones; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-9 ${className}`}>
      {site.social.map((item) => {
        const Icon = icons[item.name];
        return (
          <li key={item.name}>
            <a
              href={item.href}
              aria-label={item.name}
              className={`flex items-center justify-center rounded-full transition-colors ${tones[tone]}`}
            >
              <Icon className={iconSizes[tone]} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
