import { useRef } from "react";
import { formToken } from "@/app/actions";
import type { FormName } from "@/lib/form-token";

// The server accepts a token for two hours. Get a new one well before that.
const REFRESH_AFTER_MS = 60 * 60 * 1000;

type Ticket = { token: string; readyAt: number };

// Adds the anti-spam token from lib/form-token.ts to a form action. The form
// asks for the token on its first focus, not on page load, so a page view
// costs no server call. The wrapped action waits until the token is old
// enough, so a fast person sees "sending" for a moment instead of an error.
export function useFormToken<State>(form: FormName, action: (state: State, formData: FormData) => Promise<State>) {
  const ticket = useRef<Promise<Ticket> | null>(null);
  const receivedAt = useRef(0);

  const load = () => {
    if (!ticket.current || (receivedAt.current && Date.now() - receivedAt.current > REFRESH_AFTER_MS)) {
      receivedAt.current = 0;
      ticket.current = formToken(form).then(({ token, minAgeMs }) => {
        const now = Date.now();
        receivedAt.current = now;
        return { token, readyAt: now + minAgeMs };
      });
      // A failed request is tried again on the next focus or send.
      ticket.current.catch(() => {
        ticket.current = null;
      });
    }
    return ticket.current;
  };

  const actionWithToken = async (state: State, formData: FormData) => {
    try {
      const { token, readyAt } = await load();
      await new Promise((resolve) => setTimeout(resolve, readyAt - Date.now()));
      formData.set("token", token);
    } catch {
      // Without a token the server answers with its "error" state.
    }
    return action(state, formData);
  };

  return { action: actionWithToken, onFocus: () => void load() };
}
