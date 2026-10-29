"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckIcon } from "@/components/icons";

const SENT_MS = 3000;

type SubmitButtonProps = {
  // The action state. A new "success" state shows the tick for a moment.
  state: { status: string };
  pending: boolean;
  label: string;
  // Layout only, such as width and grid placement. The look lives here.
  className?: string;
};

// While sending, the button is disabled and dimmed. After a successful send it
// stays purple, draws a tick next to "sent", and stays disabled for three
// seconds without dimming, so the form is not sent twice.
export function SubmitButton({ state, pending, label, className = "" }: SubmitButtonProps) {
  const t = useTranslations("Form");
  const [shownState, setShownState] = useState<typeof state | null>(null);
  const sent = state.status === "success" && shownState !== state;

  useEffect(() => {
    if (state.status !== "success") {
      return;
    }
    const timer = setTimeout(() => setShownState(state), SENT_MS);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <>
      <button
        type="submit"
        disabled={pending || sent}
        className={`
          h-13 rounded-2xl bg-linear-to-r from-brand via-brand-light via-35% to-brand px-8 font-semibold text-white
          shadow-button transition-opacity
          enabled:hover:opacity-90
          ${pending ? "opacity-60" : ""}
          ${className}
        `}
      >
        {/* Both faces share one grid cell and only one is visible, so the
            button is always as wide as the wider face and never jumps. */}
        <span className="grid justify-items-center *:col-start-1 *:row-start-1">
          <span className={sent ? "invisible" : undefined}>{label}</span>
          {/* Only the tick shows. The word stays for screen readers, so the
              button keeps a name. The draw class is added only while sent,
              so the tick draws again after every send. */}
          <span className={`flex items-center ${sent ? "" : "invisible"}`} aria-hidden={!sent}>
            <CheckIcon className={`-my-2 size-10 shrink-0 ${sent ? "motion-safe:[&_path]:animate-draw-check" : ""}`} />
            <span className="sr-only">{t("sent")}</span>
          </span>
        </span>
      </button>
      {/* Screen readers do not read out a change inside a button, so the
          word is said here too. */}
      <span aria-live="polite" className="sr-only">
        {sent && t("sent")}
      </span>
    </>
  );
}
