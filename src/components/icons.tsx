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

// The exact path from the design's "Ďakujeme full" icon.
export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7474 5.52012C14.9212 3.35812 18.4288 3.36234 20.5679 5.51865L20.5696 5.52041C21.6191 6.56211 22.2 7.9604 22.2 9.45703C22.2 10.9522 21.6192 12.3505 20.5658 13.3983L13.1074 20.8342L13.106 20.8354C12.7992 21.1451 12.3946 21.3 11.9895 21.3C11.581 21.3 11.1751 21.1441 10.8671 20.8321L3.43184 13.3972C2.38093 12.3518 1.80004 10.9524 1.8 9.45703C1.8 7.96059 2.3808 6.56213 3.43418 5.51426L3.43535 5.51309C5.50217 3.43394 9.15295 3.42822 11.2266 5.51865L11.2289 5.521L11.995 6.27744L12.7474 5.52012Z"
      />
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

// Exact paths from the design's Info icon.
export function InfoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6622 4.62796C10.0083 4.63264 4.61777 10.032 4.62245 16.6871C4.62245 17.3579 4.68016 18.0272 4.7909 18.6886C5.8952 25.2377 12.0968 29.6511 18.643 28.5481C20.0452 28.311 21.3929 27.8289 22.6266 27.1207C23.1881 26.7946 23.8635 26.7244 24.4812 26.9241L28.1388 28.1441L26.9191 24.4858C26.7194 23.8664 26.7912 23.1909 27.1187 22.6278C30.4207 16.8681 28.4289 9.52026 22.6687 6.21764C21.435 5.50938 20.0858 5.02733 18.6851 4.79176C18.016 4.68256 17.3391 4.62796 16.6622 4.62796ZM16.6871 30.6667C15.7201 30.6651 14.7561 30.5684 13.8094 30.3765C6.23991 28.7962 1.38597 21.3797 2.96443 13.8104C4.54446 6.24104 11.9595 1.38462 19.529 2.96495C24.9772 4.10222 29.2353 8.35958 30.3723 13.8104C31.0711 17.1536 30.5158 20.6387 28.811 23.5997C28.7611 23.6792 28.7471 23.7775 28.7736 23.868L30.1977 28.1441C30.4815 28.9974 30.0214 29.9178 29.1682 30.2018C28.8344 30.3141 28.4741 30.3141 28.1403 30.2018L23.8635 28.7774C23.773 28.7525 23.6763 28.7665 23.5968 28.8165C21.4958 30.0286 19.1125 30.6682 16.6871 30.6667Z" />
      <path d="M16.6672 16.3443C16.034 16.3474 15.4974 16.8123 15.4054 17.4394L14.7472 22.0494C14.6473 22.7451 15.1324 23.391 15.8281 23.4908C15.8889 23.5002 15.9482 23.5049 16.009 23.5049H17.3254C18.0289 23.5049 18.5997 22.9339 18.6013 22.2303C18.6013 22.1695 18.5966 22.1086 18.5873 22.0494L17.9291 17.4394C17.837 16.8123 17.3005 16.3458 16.6672 16.3443ZM17.3254 25.4565H16.009C14.2262 25.4565 12.7819 24.0119 12.7819 22.2288C12.7819 22.0759 12.7928 21.923 12.8146 21.7732L13.4729 17.1633C13.724 15.3989 15.3586 14.1727 17.1227 14.4239C18.5436 14.6267 19.6588 15.7437 19.8616 17.1633L20.5198 21.7732C20.7725 23.5361 19.5481 25.171 17.7856 25.4237C17.6327 25.4456 17.4798 25.4565 17.3254 25.4565Z" />
      <path d="M16.6672 8.85884C15.9482 8.85884 15.3664 9.44229 15.3664 10.1599C15.3664 10.8791 15.9482 11.4626 16.6672 11.4626C17.3863 11.4626 17.968 10.8791 17.968 10.1599C17.968 9.44229 17.3863 8.8604 16.6672 8.85884ZM16.6672 13.4157C14.8704 13.4157 13.4136 11.9586 13.4136 10.1599C13.4136 8.36274 14.8704 6.90566 16.6672 6.90566C18.464 6.90566 19.9209 8.36274 19.9209 10.1599C19.9193 11.9571 18.464 13.4126 16.6672 13.4157Z" />
    </svg>
  );
}

export function PawIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0003 9.00396C13.2271 9.00396 14.3963 9.52314 15.2161 10.4324L17.8294 13.3289C18.7252 14.3219 19.222 15.6102 19.222 16.9459C19.2219 19.9328 16.7941 22.3542 13.7996 22.3542H10.1998C7.20533 22.3542 4.77888 19.9328 4.77884 16.9459C4.77884 15.6102 5.27429 14.3219 6.17003 13.3289L8.78366 10.4324C9.60455 9.52318 10.7735 9.00398 12.0003 9.00396Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24361 7.61259C2.93186 7.21674 3.72795 7.24155 4.423 7.52882C5.11688 7.81497 5.74498 8.37156 6.17242 9.10893C6.59984 9.84742 6.76879 10.6673 6.67017 11.4103C6.57152 12.1545 6.19511 12.8557 5.50805 13.2515C4.8198 13.6474 4.02371 13.6214 3.32865 13.3353C2.63479 13.048 2.00669 12.4928 1.57924 11.7554C1.15179 11.0169 0.98287 10.1958 1.08149 9.45273C1.18013 8.70969 1.55651 8.00843 2.24361 7.61259Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.577 7.52882C20.2721 7.24155 21.0681 7.21674 21.7564 7.61259C22.4435 8.00844 22.8199 8.7097 22.9185 9.45273C23.0171 10.1958 22.8482 11.0169 22.4208 11.7554C21.9945 12.4928 21.3652 13.048 20.6714 13.3353C19.9763 13.6214 19.1802 13.6474 18.492 13.2515C17.8049 12.8557 17.4285 12.1545 17.3298 11.4103C17.2312 10.6673 17.4002 9.84743 17.8276 9.10893C18.255 8.37155 18.8831 7.81497 19.577 7.52882Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4571 2.37737C15.1363 1.85827 15.9958 1.60149 16.8552 1.83105C17.7147 2.06064 18.3304 2.71221 18.658 3.50049C18.9857 4.28763 19.0446 5.24214 18.7907 6.18649C18.5378 7.1297 18.0084 7.92825 17.3304 8.44625C16.6512 8.96536 15.7917 9.22214 14.9323 8.99256C14.0717 8.76297 13.4561 8.11142 13.1284 7.32313C12.8007 6.53597 12.7427 5.58147 12.9955 4.63713C13.2495 3.69389 13.7791 2.89649 14.4571 2.37737Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.14825 1.73032C8.00766 1.50074 8.86719 1.75757 9.54635 2.27664C10.2244 2.79575 10.754 3.59317 11.008 4.5364C11.2608 5.48073 11.203 6.43525 10.8754 7.2224C10.5477 8.01067 9.93202 8.66223 9.07146 8.89184C8.21201 9.12142 7.35253 8.86463 6.67335 8.34552C5.99531 7.82753 5.46566 7.029 5.21281 6.08576C4.95886 5.14143 5.01775 4.18689 5.34541 3.39976C5.67309 2.61149 6.28882 1.95993 7.14825 1.73032Z"
      />
    </svg>
  );
}

// The tick from the design's Checkbox/on.
export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        d="M7 11.5L10.5 15.5L17 8"
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
