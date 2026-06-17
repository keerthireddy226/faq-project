"use client";

import { useState } from "react";
interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">

      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex justify-between items-start gap-6 text-left"
      >

        <h3 className="text-xl font-semibold text-slate-900">
          {question}
        </h3>

        <div className="h-6 w-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
          <span
            className={`text-slate-900 leading-none transition-transform duration-300 inline-block ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>

      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className={`text-gray-600 leading-8 transition-all duration-300 ${open ? "pb-8" : ""}`}>
            {answer}
          </p>
        </div>
      </div>

    </div>
  );
}