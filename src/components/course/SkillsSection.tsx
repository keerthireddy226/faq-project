"use client";
import { useState } from "react";
import { skills } from "@/src/data/mlMonitoringData";

export default function SkillsSection() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">III</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Skills</span>
          · What your employees will gain
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          ML monitoring <em className="[font-family:var(--serif)] italic">skills</em> your team will gain.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          These are the core, practical skills your team develops during the programme. Tap any card to see what it means in production.
        </p>

        <div className="grid grid-cols-3 gap-[18px]">
          {skills.map((s, i) => {
            const isFlipped = flipped.has(i);
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className="h-[208px] cursor-pointer [perspective:1200px]"
              >
                <div className={`relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
                  <div className="absolute inset-0 rounded-[18px] border border-[var(--rule)] bg-white p-6 flex flex-col justify-between [backface-visibility:hidden]">
                    <span className="[font-family:var(--mono)] text-[11px] tracking-[0.18em] text-[var(--muted-soft)]">{s.n}</span>
                    <h4 className="font-semibold text-[18px] tracking-[-0.02em]">{s.t}</h4>
                    <span className="[font-family:var(--mono)] text-[10px] tracking-[0.14em] uppercase text-[var(--muted-soft)] flex items-center gap-1.5">Tap to reveal ↻</span>
                  </div>
                  <div className="absolute inset-0 rounded-[18px] bg-[var(--navy)] p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="[font-family:var(--mono)] text-[11px] tracking-[0.18em] text-[var(--lime)]">{s.n}</span>
                    <p className="text-[13px] leading-[1.55] text-white/82">{s.d}</p>
                    <span className="[font-family:var(--mono)] text-[10px] tracking-[0.14em] uppercase text-white/55 flex items-center gap-1.5">Tap to flip back ↺</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
