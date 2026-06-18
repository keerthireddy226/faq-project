"use client";
import { useEffect } from "react";

export default function BlogFaqScript() {
  useEffect(() => {
    const configs = [
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

        if (index === 0) {
          item.classList.add(activeClass);
          requestAnimationFrame(() => {
            bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
          });
        }

        headerEl.addEventListener("click", () => {
          allItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove(activeClass);
              const otherBody = otherItem.querySelector<HTMLElement>(body);
              if (otherBody) otherBody.style.maxHeight = "";
            }
          });

          item.classList.toggle(activeClass);
          if (item.classList.contains(activeClass)) {
            bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
          } else {
            bodyEl.style.maxHeight = "";
          }
        });
      });
    });
  }, []);

  return null;
}
