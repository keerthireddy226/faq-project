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
  const [added, setAdded] = useState<Set<number>>(new Set());

  function toggleAdd(i: number) {
    setAdded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const addedCount = added.size;
  const estHrs = addedCount * 2;

  return (
    <section className="py-28 border-b border-[var(--rule)]">
      <div className="container">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">V</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Curriculum</span>
          · Topics & programme outline
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4">
          ML Model Monitoring <em className="[font-family:var(--serif)] italic">course outline</em>.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-8 max-w-[64ch]">
          Filter by what your team needs most, open any module for the detail, then build an agenda to send with your quote request.
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
            const isAdded = added.has(i);
            const dimmed = activeFilter !== "all" && !m.tag.includes(activeFilter);
            return (
              <div key={i} className={`border border-[var(--rule)] rounded-[16px] bg-white overflow-hidden transition-all duration-300 ${dimmed ? "opacity-40 grayscale" : ""}`}>
                <div
                  onClick={() => setOpenMod(isOpen ? null : i)}
                  className="w-full flex items-center gap-[18px] px-6 py-5 cursor-pointer"
                >
                  <span className="[font-family:var(--mono)] text-[12px] tracking-[0.1em] text-[#6f8c0f] flex-shrink-0">{m.no}</span>
                  <div className="flex-1">
                    <span className="[font-family:var(--display)] font-semibold text-[17px] tracking-[-0.02em]">{m.t}</span>
                    <p className="text-[12.5px] text-[var(--muted)] mt-0.5">{m.sub}</p>
                  </div>

                  {/* Add / Added button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleAdd(i); }}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase [font-family:var(--mono)] transition-all duration-200 cursor-pointer ${
                      isAdded
                        ? "bg-[var(--navy)] text-[var(--lime)] border border-[var(--navy)]"
                        : "border border-[var(--rule-strong)] text-[var(--muted)] hover:border-[var(--navy)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {isAdded ? "✓ Added" : "+ Add"}
                  </button>

                  {/* Expand button */}
                  <span className={`flex-shrink-0 w-[30px] h-[30px] rounded-full border border-[var(--rule-strong)] flex items-center justify-center transition-transform duration-300 text-[18px] leading-none ${isOpen ? "rotate-[135deg] bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]" : ""}`}>
                    +
                  </span>
                </div>

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

      {/* Sticky bottom bar */}
      {addedCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-[var(--navy)] text-white rounded-full px-6 py-4 flex items-center gap-5 shadow-[0_20px_60px_-10px_rgba(10,22,40,0.6)] [font-family:var(--mono)]">
            <span className="text-[13px] tracking-[0.06em]">
              <span className="text-[var(--lime)] font-bold">{addedCount}</span>
              {" "}module{addedCount !== 1 ? "s" : ""} selected
              <span className="text-white/40 mx-2">·</span>
              ~{estHrs} hrs of 16–24
            </span>
            <button
              onClick={() => setAdded(new Set())}
              className="text-[11px] tracking-[0.18em] uppercase text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Clear
            </button>
            <a
              href="#enquire"
              className="bg-[var(--lime)] text-[var(--navy)] rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-[var(--lime-soft)] transition-colors"
            >
              Request this agenda →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
