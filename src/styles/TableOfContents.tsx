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
    <aside className="sticky top-24 border rounded-xl p-5 bg-white">
      <h3 className="font-bold mb-4">Table of Contents</h3>

      <ul className="space-y-2">
        {headings.map((item) => (
          <li
            key={item.id}
            className={item.level === "h3" ? "ml-4 text-sm" : ""}
          >
            <a href={`#${item.id}`} className="text-[#2D3BC8] hover:underline">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
