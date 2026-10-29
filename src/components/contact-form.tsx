"use client";

import { useActionState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { contact, type ContactField, type ContactState } from "@/app/actions";
import { CheckIcon } from "@/components/icons";
import { SubmitButton } from "@/components/submit-button";
import { useFormToken } from "@/components/use-form-token";

const initialState: ContactState = { status: "idle" };

type FieldProps = {
  name: "firstName" | "lastName" | "email" | "phone";
  type: "text" | "email" | "tel";
  autoComplete: string;
  required?: boolean;
  defaultValue?: string;
  invalid?: boolean;
};

// The message under a field that the server rejected.
function FieldError({ id, field, className = "" }: { id: string; field: ContactField; className?: string }) {
  const t = useTranslations("Contact");

  return (
    <p id={id} className={`mt-1 px-1 text-xs leading-4 font-medium text-accent ${className}`}>
      {t(`errors.${field}`)}
    </p>
  );
}

function Field({ name, type, autoComplete, required, defaultValue, invalid }: FieldProps) {
  const t = useTranslations("Contact");
  const id = `contact-${name}`;

  return (
    <div>
      <label htmlFor={id} className="block px-1 text-xs leading-4">
        {t(name)}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        placeholder={t(`${name}Placeholder`)}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${id}-error` : undefined}
        className="
          mt-2 h-11 w-full rounded-2xl border border-brand bg-surface px-4 text-base
          placeholder:text-placeholder
          focus:outline-2 focus:outline-offset-1 focus:outline-brand
          aria-invalid:border-accent
          md:text-sm
        "
      />
      {invalid && <FieldError id={`${id}-error`} field={name} />}
    </div>
  );
}

function Checkbox({
  name,
  required,
  defaultChecked,
  invalid,
  children,
}: {
  name: ContactField | "volunteer";
  required?: boolean;
  defaultChecked?: boolean;
  invalid?: boolean;
  children: ReactNode;
}) {
  const errorId = `contact-${name}-error`;

  return (
    <div>
      <label className="flex cursor-pointer items-start gap-2 text-sm leading-5">
        <span className="relative size-6 shrink-0">
          <input
            type="checkbox"
            name={name}
            required={required}
            defaultChecked={defaultChecked}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid ? errorId : undefined}
            className="
              peer absolute inset-0.5 cursor-pointer appearance-none rounded border border-brand bg-surface
              checked:bg-brand
              focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand
            "
          />
          <CheckIcon className="pointer-events-none absolute inset-0 hidden text-white peer-checked:block" />
        </span>
        <span className="pt-0.5">{children}</span>
      </label>
      {invalid && name !== "volunteer" && <FieldError id={errorId} field={name} className="pl-8" />}
    </div>
  );
}

export function ContactForm({ consent }: { consent: ReactNode }) {
  const t = useTranslations("Contact");
  const guarded = useFormToken("contact", contact);
  const [state, formAction, pending] = useActionState(guarded.action, initialState);
  const values = state.values;
  const invalid = (field: ContactField) => state.errors?.includes(field);

  return (
    <form
      action={formAction}
      onFocus={guarded.onFocus}
      noValidate
      className="flex w-full flex-1 flex-col md:max-w-191 md:flex-none"
    >
      {/* One column on phones. From md, two columns filled row by row, so the
          names share the first row and email and phone the second. */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-x-6">
        <Field
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          defaultValue={values?.firstName}
          invalid={invalid("firstName")}
        />
        <Field
          name="lastName"
          type="text"
          autoComplete="family-name"
          defaultValue={values?.lastName}
          invalid={invalid("lastName")}
        />
        <Field
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          invalid={invalid("email")}
        />
        <Field name="phone" type="tel" autoComplete="tel" defaultValue={values?.phone} invalid={invalid("phone")} />
      </div>

      {/* A trap for spam bots. It is off screen and skipped by keyboard and
          screen readers, so only bots fill it in. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] size-px opacity-0"
      />

      <div className="mt-6 flex flex-col gap-3 md:mt-8">
        <Checkbox name="consent" required defaultChecked={values?.consent} invalid={invalid("consent")}>
          {consent}
        </Checkbox>
        <Checkbox name="volunteer" defaultChecked={values?.volunteer}>
          {t("volunteer")}
        </Checkbox>
      </div>

      {/* On phones the button sits at the bottom of the screen, as in the design. */}
      <div className="mt-auto pt-10 md:mt-19 md:w-92.5 md:self-center md:pt-0">
        <SubmitButton state={state} pending={pending} label={t("submit")} className="w-full" />

        {/* Saving failed, which belongs to no single field. */}
        <p aria-live="polite" className="mt-3 text-center text-sm font-medium text-accent empty:hidden">
          {state.status === "error" && t("error")}
        </p>
      </div>
    </form>
  );
}
