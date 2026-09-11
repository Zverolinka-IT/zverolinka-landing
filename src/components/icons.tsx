type IconProps = { className?: string };

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="m7 12.5 3.2 3.2L17 9"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowCircleRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="10" cy="10" r="9" />
      <path d="M5.5 10h8.5M10.5 6.5 14 10l-3.5 3.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

// Two open hands with a heart between the palms, redrawn from the design.
const handPath =
  "M28 45C21.5 44 16.5 40.5 12.5 36L4 27.5a2.4 2.4 0 0 1 3.5-3.4L13 29.5V10a2 2 0 0 1 4 0v10M17 20V7a2 2 0 0 1 4 0v13M21 20V7.5a2 2 0 0 1 4 0V20M25 20v-9.5a2 2 0 0 1 4 0V33";

export function HandsHeartIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d={handPath} />
      <path d={handPath} transform="matrix(-1 0 0 1 60 0)" />
      <path d="M30 42c-5.5-3.6-7-6.2-7-8a3.3 3.3 0 0 1 7-1.4 3.3 3.3 0 0 1 7 1.4c0 1.8-1.5 4.4-7 8z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M7 9.5v10H4v-10zM5.5 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 9.5h2.9v1.4c.4-.8 1.5-1.7 3.1-1.7 3.2 0 3.8 2.1 3.8 4.8v5.5h-3v-4.9c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v5H10z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 3h-3.1v12.2a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.4a5.9 5.9 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-4.3-4.4z" />
    </svg>
  );
}
