"use client";
import { useState } from "react";
import { outcomes } from "@/src/data/mlMonitoringData";

export default function OutcomesSection() {
  const [done, setDone] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setDone(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const pct = Math.round((done.size / outcomes.length) * 100);
  const circ = 402;
  const offset = circ * (1 - done.size / outcomes.length);

  return (
    <section className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">IV</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Outcomes</span>
          · What your team will achieve
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Learning <em className="[font-family:var(--serif)] italic">outcomes</em> of this training.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          Select the outcomes most relevant to your team. We tailor the curriculum and success measures around them.
        </p>

        <div className="grid grid-cols-[1.4fr_0.6fr] gap-12 items-start">
          <div className="flex flex-col gap-3">
            {outcomes.map((o, i) => {
              const isDone = done.has(i);
              return (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className={`flex gap-4 items-start rounded-[14px] border px-5 py-[18px] text-left transition-all [font-family:var(--body)] cursor-pointer ${
                    isDone ? "bg-[var(--lime)]/8 border-[#7c9c10]/40" : "bg-white border-[var(--rule)] hover:border-[var(--rule-strong)]"
                  }`}
                >
                  <span className={`flex-shrink-0 w-6 h-6 rounded-[7px] border-[1.5px] flex items-center justify-center transition-all ${isDone ? "bg-[var(--lime)] border-[var(--lime)]" : "border-[var(--rule-strong)]"}`}>
                    {isDone && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0A1628" strokeWidth="3" className="w-3.5 h-3.5">
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    )}
                  </span>
                  <p className="text-[15px] leading-[1.5]">{o}</p>
                </button>
              );
            })}
          </div>

          <div className="sticky top-[90px] bg-[var(--navy)] rounded-[20px] p-8 text-white text-center">
            <div className="relative w-[150px] h-[150px] mx-auto mb-5">
              <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
                <circle cx="75" cy="75" r="64" fill="none" stroke="rgba(250,250,247,.14)" strokeWidth="10" />
                <circle cx="75" cy="75" r="64" fill="none" stroke="#C8F135" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset .6s ease" }} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <b className="[font-family:var(--display)] font-bold text-[34px]">{pct}%</b>
                <span className="[font-family:var(--mono)] text-[10px] tracking-[0.16em] uppercase text-white/60">selected</span>
              </div>
            </div>
            <p className="text-[13.5px] text-white/78 leading-[1.6]">These outcomes become the success measures we build your curriculum and KPIs around.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
