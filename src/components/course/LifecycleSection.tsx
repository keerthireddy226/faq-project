"use client";
import { useState } from "react";
import { lifecycle } from "@/src/data/mlMonitoringData";

export default function LifecycleSection() {
  const [active, setActive] = useState(0);
  const m = lifecycle[active];

  return (
    <section className="bg-[var(--navy)] py-28 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-white/60 mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-white">II</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-white">Lifecycle</span>
          · What your team will operate
        </div>

        <h2 className="text-[var(--paper)] font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          The <em className="[font-family:var(--serif)] italic">monitoring lifecycle</em> your team will run.
        </h2>
        <p className="text-white/75 text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          This is the operational loop your teams will run after the training. Select a stage to see what it covers.
        </p>

        <div className="grid grid-cols-[0.82fr_1.18fr] gap-12 items-start">
          <div className="flex flex-col gap-2">
            {lifecycle.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left rounded-[14px] px-5 py-[18px] border flex gap-4 items-center transition-all cursor-pointer [font-family:var(--body)] ${
                  active === i
                    ? "bg-[var(--navy-soft)] border-[var(--lime)]"
                    : "bg-white/5 border-white/14 hover:border-[var(--lime)]/40"
                }`}
              >
                <span className={`[font-family:var(--mono)] text-[13px] flex-shrink-0 ${active === i ? "text-[var(--lime)]" : "text-white/50"}`}>{item.ix}</span>
                <span className="[font-family:var(--display)] font-semibold text-[15.5px] text-white tracking-[-0.01em]">{item.t}</span>
              </button>
            ))}
          </div>

          <div className="bg-[var(--navy-soft)] border border-white/14 rounded-[18px] p-9 min-h-[280px]">
            <p className="[font-family:var(--serif)] italic text-[clamp(21px,2.5vw,28px)] leading-[1.3] text-white mb-4"
               dangerouslySetInnerHTML={{ __html: m.over }} />
            <p className="text-[15px] leading-[1.7] text-white/80 mb-5">{m.p}</p>
            <p className="[font-family:var(--mono)] text-[10px] tracking-[0.16em] uppercase text-[var(--lime)] mb-3">{m.t} · {m.mods}</p>
            <ul className="space-y-1">
              {m.does.map((d, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] text-white/82">
                  <span className="text-[var(--lime)]">→</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
