"use server";

import { neon } from "@neondatabase/serverless";
import { createFormToken, isValidFormToken, MIN_FORM_AGE_MS, type FormName } from "@/lib/form-token";

// A form asks for a token when a person starts using it. See lib/form-token.ts.
export async function formToken(form: FormName) {
  return { token: createFormToken(form), minAgeMs: MIN_FORM_AGE_MS };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// The longest email address that mail servers accept.
const EMAIL_MAX_LENGTH = 254;
// Spam puts links and HTML in name fields. Real names have neither.
const SPAM_IN_NAME_PATTERN = /https?:|www\.|[<>]/i;
// More contact requests from one email address in a day are spam.
const CONTACTS_PER_EMAIL_PER_DAY = 3;

// The form shows a Contact.errors.<field> message under each field in errors,
// and Contact.error when saving fails. On a failure the fields come back too,
// so the form can show them again after React resets it.
export type ContactValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  volunteer: boolean;
  consent: boolean;
};

export type ContactField = "firstName" | "lastName" | "email" | "phone" | "consent";

export type ContactState = {
  status: "idle" | "success" | "invalid" | "error";
  values?: ContactValues;
  errors?: ContactField[];
};

const PHONE_PATTERN = /^\+?[\d\s()/-]{6,20}$/;

export async function contact(_prevState: ContactState, formData: FormData): Promise<ContactState> {
  if (formData.get("website")) {
    return { status: "success" };
  }

  const field = (name: string) =>
    String(formData.get(name) ?? "")
      .trim()
      .slice(0, 200);
  const values: ContactValues = {
    firstName: field("firstName"),
    lastName: field("lastName"),
    email: String(formData.get("email") ?? "")
      .trim()
      .slice(0, EMAIL_MAX_LENGTH)
      .toLowerCase(),
    phone: field("phone"),
    volunteer: formData.get("volunteer") === "on",
    consent: formData.get("consent") === "on",
  };

  if (!isValidFormToken("contact", formData.get("token"))) {
    return { status: "error", values };
  }

  const errors: ContactField[] = [];
  if (!values.firstName || SPAM_IN_NAME_PATTERN.test(values.firstName)) {
    errors.push("firstName");
  }
  // The last name is optional, so only spam is rejected.
  if (SPAM_IN_NAME_PATTERN.test(values.lastName)) {
    errors.push("lastName");
  }
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.push("email");
  }
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.push("phone");
  }
  if (!values.consent) {
    errors.push("consent");
  }

  if (errors.length > 0) {
    return { status: "invalid", values, errors };
  }

  try {
    const sql = neon(process.env.DATABASE_URL!);

    // Too many requests from one address: tell the sender it worked and save
    // nothing, so a bot does not learn about the limit.
    const [{ count }] = await sql`SELECT count(*)::int AS count FROM contact_requests
      WHERE email = ${values.email} AND created_at > now() - interval '1 day'`;
    if (count >= CONTACTS_PER_EMAIL_PER_DAY) {
      return { status: "success" };
    }

    // The consent box is newsletter consent, so the email also joins the
    // subscribers list.
    await sql.transaction([
      sql`INSERT INTO contact_requests (name, surname, email, phone, volunteer)
          VALUES (${values.firstName}, ${values.lastName}, ${values.email}, ${values.phone || null}, ${values.volunteer})`,
      sql`INSERT INTO subscribers (email) VALUES (${values.email}) ON CONFLICT (email) DO NOTHING`,
    ]);
  } catch (error) {
    console.error("Could not save contact", error);
    return { status: "error", values };
  }

  return { status: "success" };
}
