"use client";

import { useActionState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { subscribe, type SubscribeState } from "@/app/actions";

const initialState: SubscribeState = { status: "idle" };

export function SignupForm({ consent }: { consent: ReactNode }) {
  const t = useTranslations("Signup");
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <form action={formAction} className="mt-4">
      {/* One column: field, consent, button. From sm the field and the
          button share the first row and the consent moves under them. */}
      <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
        <label htmlFor="signup-email" className="sr-only">
          {t("emailLabel")}
        </label>
        <input
          id="signup-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={t("placeholder")}
          className="
            h-11 rounded-xl border border-brand/60 bg-surface px-3 text-base
            placeholder:text-muted/70
            focus:outline-2 focus:outline-offset-1 focus:outline-brand
            sm:text-sm
          "
        />
        <p className="text-sm leading-[1.4] sm:col-span-2 sm:row-start-2">{consent}</p>
        <button
          type="submit"
          disabled={pending}
          className="
            h-13 rounded-xl bg-linear-to-r from-brand-light to-brand px-5 font-medium text-white shadow-md
            shadow-brand/25 transition-opacity
            hover:opacity-90
            disabled:opacity-60
            sm:col-start-2 sm:row-start-1
          "
        >
          {pending ? t("pending") : t("submit")}
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 text-sm font-medium empty:hidden ${state.status === "invalid" ? "text-accent" : "text-brand"}`}
      >
        {state.status !== "idle" && t(state.status)}
      </p>
    </form>
  );
}
