"use client";
import { useState } from "react";
import { modes } from "@/src/data/mlMonitoringData";

const labels = [{ lbl:"Online", h:"Virtual" }, { lbl:"In-house", h:"On-site" }, { lbl:"Away day", h:"Off-site" }];

export default function ModesSection() {
  const [active, setActive] = useState(0);
  const m = modes[active];

  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="container">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">VII</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Modes</span>
          · Choose the format that fits your team
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Training delivery: <em className="[font-family:var(--serif)] italic">onsite, virtual</em>, and offsite.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-8 max-w-[64ch]">
          We design training your teams actually engage with, then deliver it the way that suits you, in 10+ languages.
        </p>

        <div className="flex gap-2 border-b border-[var(--rule)] mb-8 flex-wrap">
          {labels.map((l, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`[font-family:var(--display)] font-semibold text-[16px] tracking-[-0.01em] px-1.5 pb-[14px] mr-[22px] bg-none border-none cursor-pointer relative transition-colors ${
                active === i ? "text-[var(--ink)]" : "text-[var(--muted)]"
              }`}
            >
              <span className="block [font-family:var(--mono)] text-[10px] tracking-[0.14em] uppercase text-[var(--muted-soft)] mb-1">{l.lbl}</span>
              {l.h}
              {active === i && <span className="absolute left-0 -bottom-px w-full h-[2px] bg-[var(--lime)]" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="[font-family:var(--display)] font-semibold text-[24px] tracking-[-0.02em] mb-3">{m.h}</h3>
            <p className="text-[var(--muted)] text-[15px] leading-[1.6]">{m.d}</p>
            <ul className="mt-4 list-none">
              {m.li.map((item, i) => (
                <li key={i} className="flex gap-3 text-[14.5px] text-[var(--muted)] py-2.5 border-t border-[var(--rule)]">
                  <span className="text-[#6f8c0f] font-bold">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--paper-warm)] border border-[var(--rule)] rounded-[20px] h-[280px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.55),transparent_70%)] animate-pulse" />
            <span className="[font-family:var(--display)] font-bold text-[clamp(38px,6vw,74px)] tracking-[-0.04em] text-[var(--navy)] opacity-10">
              {["LIVE","HERE","AWAY"][active]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
