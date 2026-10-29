import { createHmac, timingSafeEqual } from "node:crypto";

// A form token is "<issued at in ms>.<signature>". The server signs the time
// when a person starts using a form. A bot that posts straight to the server
// has no token, and a token sent too soon is from a bot that fills the form in
// at once. The form waits until the token is old enough, so people never see
// this.
export const MIN_FORM_AGE_MS = 2000;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;

export type FormName = "contact";

function sign(form: FormName, issuedAt: string) {
  const secret = process.env.FORM_SECRET;
  if (!secret) {
    throw new Error("FORM_SECRET is not set");
  }

  return createHmac("sha256", secret).update(`${form}.${issuedAt}`).digest("base64url");
}

export function createFormToken(form: FormName) {
  const issuedAt = String(Date.now());

  return `${issuedAt}.${sign(form, issuedAt)}`;
}

export function isValidFormToken(form: FormName, token: FormDataEntryValue | null) {
  if (typeof token !== "string") {
    return false;
  }

  const [issuedAt, signature] = token.split(".");
  const age = Date.now() - Number(issuedAt);
  if (!signature || !(age >= MIN_FORM_AGE_MS && age <= MAX_FORM_AGE_MS)) {
    return false;
  }

  const expected = Buffer.from(sign(form, issuedAt));
  const actual = Buffer.from(signature);

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
