"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: string }[]
  >([]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".blog-content h2, .blog-content h3",
    );

    const items = Array.from(elements).map((heading, index) => {
      const text = heading.textContent || "";

      let id =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-");

      if (!id) {
        id = `heading-${index}`;
      }

      heading.id = id;

      return {
        id,
        text,
        level: heading.tagName.toLowerCase(),
      };
    });

    setHeadings(items);
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="toc-wrapper sticky top-24 self-start w-[200px] min-w-[200px] h-[80vh] overflow-y-auto">
      <h3 className="text-[#1B40A9] mb-5 text-[18px] font-medium leading-5">
        Content
      </h3>

      <nav>
        {headings.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
        block px-2 py-[5px]
        text-[12px] leading-4
        text-[#1d1d1d]
        border-l-2 border-transparent
        hover:bg-[rgba(41,98,255,0.1)]
        hover:border-l-black
        transition-all
        ${item.level === "h3" ? "ml-3" : ""}
      `}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
