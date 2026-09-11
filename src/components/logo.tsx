import { site } from "@/content/site";

// Redrawn from the design screenshot. Swap for the real SVG file when it is ready.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 42" role="img" aria-label={site.name} className={`h-10.5 w-16 text-accent ${className}`}>
      <g fill="currentColor" fontSize="16" fontWeight="500" letterSpacing="0">
        <text x="0" y="12">
          Zvero
        </text>
        <text x="0" y="27.5">
          Linka
        </text>
        <circle cx="49" cy="24" r="1.8" />
      </g>
      <path
        d="M28 33c4 6 18 7 26 2.5 7-4.5 7-16-4-20.5M54 35.5l8 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
