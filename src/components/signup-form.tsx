"use client";

import { useActionState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { subscribe, type SubscribeState } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { useFormToken } from "@/components/use-form-token";

const initialState: SubscribeState = { status: "idle" };

export function SignupForm({ consent }: { consent: ReactNode }) {
  const t = useTranslations("Signup");
  const guarded = useFormToken("signup", subscribe);
  const [state, formAction, pending] = useActionState(guarded.action, initialState);
  // There is only one field, so both problems show under it.
  const failed = state.status === "invalid" || state.status === "error";

  return (
    <form action={formAction} onFocus={guarded.onFocus} noValidate className="@container mt-4">
      {/* One column: field, consent, button. The switch to two columns follows
          the card's own width, not the screen. The card needs 32rem before the
          field and the button share a row, or the field gets too narrow. */}
      <div className="grid gap-4 @lg:grid-cols-[minmax(0,1fr)_auto] @lg:items-start">
        <label htmlFor="signup-email" className="sr-only">
          {t("emailLabel")}
        </label>
        {/* The field is 0.25rem lower, so its middle lines up with the taller
            button while an error message hangs below it. */}
        <div className="@lg:mt-1">
          <input
            id="signup-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            defaultValue={state.email}
            placeholder={t("placeholder")}
            aria-invalid={failed || undefined}
            aria-describedby={failed ? "signup-email-error" : undefined}
            className="
              h-11 w-full rounded-xl border border-brand/60 bg-surface px-3 text-base
              placeholder:text-muted/70
              focus:outline-2 focus:outline-offset-1 focus:outline-brand
              aria-invalid:border-accent
              @lg:text-sm
            "
          />
          <p
            id="signup-email-error"
            aria-live="polite"
            className="mt-1 px-1 text-xs leading-4 font-medium text-accent empty:hidden"
          >
            {(state.status === "invalid" || state.status === "error") && t(state.status)}
          </p>
        </div>
        {/* A trap for spam bots. It is off screen and skipped by keyboard and
            screen readers, so only bots fill it in. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] size-px opacity-0"
        />
        <p className="text-sm leading-[1.4] @lg:col-span-2 @lg:row-start-2">{consent}</p>
        <SubmitButton
          state={state}
          pending={pending}
          label={t("submit")}
          className="whitespace-nowrap @lg:col-start-2 @lg:row-start-1"
        />
      </div>
    </form>
  );
}
