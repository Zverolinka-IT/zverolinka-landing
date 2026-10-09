"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

// Links to the top of the home page. Next.js only scrolls for #top when the
// hash changes, so a second click on the home page would do nothing. There the
// click scrolls by hand and clears the hash. From other pages Next.js opens
// the home page at #top.
export function HomeLink(props: Omit<ComponentProps<typeof Link>, "href">) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    props.onClick?.(event);

    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    if (new URL(event.currentTarget.href).pathname === window.location.pathname) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return <Link {...props} href="/#top" onClick={onClick} />;
}
