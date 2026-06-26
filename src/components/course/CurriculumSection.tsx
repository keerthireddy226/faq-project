"use client";
import { useState } from "react";
import { modules } from "@/src/data/mlMonitoringData";

const filters = [
  { label: "All modules", value: "all" },
  { label: "Foundations", value: "foundations" },
  { label: "Detect & measure", value: "detect" },
  { label: "Operate & alert", value: "operate" },
  { label: "Retrain & test", value: "retrain" },
  { label: "Govern & comply", value: "govern" },
];

export default function CurriculumSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openMod, setOpenMod] = useState<number | null>(null);


  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">V</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Curriculum</span>
          · Topics & programme outline
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          ML Model Monitoring <em className="[font-family:var(--serif)] italic">course outline</em>.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-8 max-w-[64ch]">
          Filter by what your team needs most, then open any module for the detail.
        </p>

        <div className="flex gap-2.5 flex-wrap mb-7">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`[font-family:var(--mono)] text-[11px] tracking-[0.1em] uppercase px-[15px] py-2.5 rounded-full border transition-all cursor-pointer ${
                activeFilter === f.value
                  ? "bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]"
                  : "border-[var(--rule-strong)] text-[var(--muted)] hover:border-[var(--navy)] hover:text-[var(--ink)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {modules.map((m, i) => {
            const isOpen = openMod === i;
            const dimmed = activeFilter !== "all" && !m.tag.includes(activeFilter);
            return (
              <div key={i} className={`border border-[var(--rule)] rounded-[16px] bg-white overflow-hidden transition-all duration-300 ${dimmed ? "opacity-40 grayscale" : ""}`}>
                <button
                  onClick={() => setOpenMod(isOpen ? null : i)}
                  className="w-full flex items-center gap-[18px] px-6 py-5 cursor-pointer text-left [font-family:var(--body)]"
                >
                  <span className="[font-family:var(--mono)] text-[12px] tracking-[0.1em] text-[#6f8c0f] flex-shrink-0">{m.no}</span>
                  <div className="flex-1">
                    <span className="[font-family:var(--display)] font-semibold text-[17px] tracking-[-0.02em]">{m.t}</span>
                    <p className="text-[12.5px] text-[var(--muted)] mt-0.5">{m.sub}</p>
                  </div>
                  <span className={`flex-shrink-0 w-[30px] h-[30px] rounded-full border border-[var(--rule-strong)] flex items-center justify-center transition-transform duration-300 text-[18px] leading-none ${isOpen ? "rotate-[135deg] bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pl-[58px]">
                    {m.groups.map((g, gi) => (
                      <div key={gi} className="mt-4">
                        <h5 className="[font-family:var(--display)] font-semibold text-[14px] mb-1.5">{g.g}</h5>
                        <ul className="list-none">
                          {g.items.map((item, ii) => (
                            <li key={ii} className="flex gap-2.5 text-[13.5px] text-[var(--muted)] py-1 leading-[1.5]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] flex-shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
