"use server";

// The form shows the matching Signup.<status> message, so no text lives here.
export type SubscribeState = {
  status: "idle" | "success" | "invalid";
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(_prevState: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "invalid" };
  }

  // TODO: Send the address to the newsletter provider. Nothing is stored yet.

  return { status: "success" };
}
