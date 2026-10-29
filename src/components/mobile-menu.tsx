"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { CloseIcon, HeartIcon, MenuIcon } from "@/components/icons";

// The panel is positioned against the sticky header, which is its nearest
// positioned ancestor, so it opens full width right under the header.
export function MobileMenu() {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={root} className="md:hidden">
      <button
        type="button"
        aria-label={t("menu")}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="-mr-2 flex size-10 items-center justify-center rounded-lg text-brand"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      <nav
        id="mobile-menu"
        hidden={!open}
        className="
          absolute inset-x-0 top-full border-t border-brand-soft bg-surface px-4 pt-2 pb-6
          shadow-[0_8px_16px_rgb(37_42_49/0.06)]
          sm:px-10
        "
      >
        <ul>
          {site.nav.map((item) => (
            <li key={item.key}>
              <a href={item.href} onClick={close} className="block py-3 font-bold transition-colors hover:text-brand">
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.donateHref}
          target="_blank"
          rel="noopener"
          onClick={close}
          className="
            mt-3 flex h-13 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand via-brand-light
            via-35% to-brand font-semibold text-white shadow-button transition-opacity
            hover:opacity-90
          "
        >
          <HeartIcon className="size-6 shrink-0" />
          {t("donate")}
        </a>
      </nav>
    </div>
  );
}
