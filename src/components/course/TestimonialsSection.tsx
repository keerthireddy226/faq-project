"use client";
import { useState, useEffect } from "react";
import { quotes } from "@/src/data/mlMonitoringData";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);

  const q = quotes[active];

  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="container-narrow">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">IX</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Proof</span>
          · From organisations we've trained
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-9 max-w-[20ch]">
          ML monitoring training <em className="[font-family:var(--serif)] italic">results</em> from real teams.
        </h2>

        <div className="min-h-[200px]">
          <blockquote className="[font-family:var(--serif)] italic text-[clamp(19px,2.2vw,27px)] leading-[1.38] tracking-[-0.01em] mb-6 text-[var(--ink)]">
            <span className="text-[#7c9c10]">"</span>{q.q}<span className="text-[#7c9c10]">"</span>
          </blockquote>
          <p className="[font-family:var(--mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--muted)]">
            <b className="text-[var(--ink)] font-medium">{q.w}</b> — {q.r}
          </p>
        </div>

        <div className="flex gap-2.5 mt-8 items-center">
          <div className="flex gap-2.5">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full border-none cursor-pointer transition-all duration-300 ${active === i ? "w-[34px] bg-[var(--navy)]" : "w-[34px] bg-[var(--rule-strong)]"}`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button onClick={() => setActive(p => (p - 1 + quotes.length) % quotes.length)} className="w-[42px] h-[42px] rounded-full border border-[var(--rule-strong)] bg-transparent cursor-pointer text-[16px] flex items-center justify-center transition-all hover:bg-[var(--navy)] hover:text-[var(--lime)] hover:border-[var(--navy)]">←</button>
            <button onClick={() => setActive(p => (p + 1) % quotes.length)} className="w-[42px] h-[42px] rounded-full border border-[var(--rule-strong)] bg-transparent cursor-pointer text-[16px] flex items-center justify-center transition-all hover:bg-[var(--navy)] hover:text-[var(--lime)] hover:border-[var(--navy)]">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
