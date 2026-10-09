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

// While sending, the button is only disabled. After a successful send it turns
// white with a border and shows a tick and "sent" for three seconds. It stays
// disabled then, so the form is not sent twice.
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
          h-13 rounded-xl border px-8 font-medium transition-opacity
          enabled:hover:opacity-90
          ${pending ? "opacity-60" : ""}
          ${
            sent
              ? "border-brand bg-surface text-brand"
              : "border-transparent bg-linear-to-r from-brand-light to-brand text-white shadow-md shadow-brand/25"
          }
          ${className}
        `}
      >
        {/* Both faces share one grid cell and only one is visible, so the
            button is always as wide as the wider face and never jumps. */}
        <span className="grid justify-items-center *:col-start-1 *:row-start-1">
          <span className={sent ? "invisible" : undefined}>{label}</span>
          {/* The tick has empty space on its left, pulled in so the tick and
              the word are centered together. */}
          <span className={`flex items-center ${sent ? "" : "invisible"}`} aria-hidden={!sent}>
            <CheckIcon className="-my-2 -ml-2 size-7 shrink-0" />
            {t("sent")}
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
