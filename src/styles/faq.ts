"use client";

import { useEffect } from "react";

export default function BlogFaqScript({ content }: { content?: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const configs = [
        {
          items: ".nz-item",
          header: ".nz-header",
          body: ".nz-body",
          activeClass: "open",
        },
        {
          items: ".faq-item",
          header: ".faq-question",
          body: ".faq-answer",
          activeClass: "active",
        },
      ];

      configs.forEach(({ items, header, body, activeClass }) => {
        const allItems = document.querySelectorAll<HTMLElement>(items);
        if (!allItems.length) return;

        allItems.forEach((item, index) => {
          const headerEl = item.querySelector<HTMLElement>(header);
          const bodyEl = item.querySelector<HTMLElement>(body);

          if (!headerEl || !bodyEl) return;

          bodyEl.style.overflow = "hidden";
          bodyEl.style.transition = "max-height 0.3s ease";

          if (index === 0) {
            item.classList.add(activeClass);
            bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
          } else {
            bodyEl.style.maxHeight = "0px";
          }

          headerEl.onclick = () => {
            allItems.forEach((otherItem) => {
              const otherBody = otherItem.querySelector<HTMLElement>(body);
              if (!otherBody) return;

              if (otherItem !== item) {
                otherItem.classList.remove(activeClass);
                otherBody.style.maxHeight = "0px";
              }
            });

            item.classList.toggle(activeClass);

            bodyEl.style.maxHeight = item.classList.contains(activeClass)
              ? bodyEl.scrollHeight + "px"
              : "0px";
          };
        });
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [content]);

  return null;
}
