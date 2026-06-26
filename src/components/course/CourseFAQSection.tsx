"use client";
import { useState } from "react";
import { faqs } from "@/src/data/mlMonitoringData";

export default function CourseFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="max-w-[920px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">XI</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Questions</span>
          · Frequently asked
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-5 max-w-[20ch]">
          ML Model Monitoring training <em className="[font-family:var(--serif)] italic">FAQs</em>.
        </h2>

        <div className="mt-5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--rule)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left bg-none border-none cursor-pointer py-6 flex justify-between gap-6 items-center [font-family:var(--display)] font-medium text-[18px] tracking-[-0.01em] text-[var(--ink)]"
                >
                  <span>{f.q}</span>
                  <span className="flex-shrink-0 w-[26px] h-[26px] relative">
                    <span className="absolute top-[12px] left-1 w-[18px] h-[0.5px] bg-[var(--ink)]" />
                    <span className={`absolute top-[3px] left-[12px] w-[0.5px] h-[20px] bg-[var(--ink)] transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`} />
                  </span>
                </button>
                {isOpen && (
                  <p className="text-[15px] leading-[1.7] text-[var(--muted)] pb-6">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
