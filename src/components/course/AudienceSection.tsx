"use client";
import { useState } from "react";
import { audience } from "@/src/data/mlMonitoringData";

const filters = [
  { label: "Everyone", value: "all" },
  { label: "ML & data science", value: "mlds" },
  { label: "MLOps & platform", value: "mlops" },
  { label: "Data & product", value: "dataprod" },
];

const groupLabel: Record<string, string> = { mlds: "ML & DS", mlops: "MLOps", dataprod: "Data & Product" };

export default function AudienceSection() {
  const [activeGroup, setActiveGroup] = useState("all");

  return (
    <section className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]">
      <div className="container">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">VI</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Who</span>
          · Who should attend
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Who should attend this <em className="[font-family:var(--serif)] italic">ML monitoring</em> training?
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-6 max-w-[64ch]">
          Filter by function to see which roles this corporate training is shaped for.
        </p>

        <div className="text-[14px] text-[var(--muted)] bg-white border border-[var(--rule)] border-l-[3px] border-l-[var(--lime)] rounded-[10px] px-[18px] py-3.5 mb-7 max-w-[70ch] leading-[1.6]">
          <b>Prerequisites:</b> participants should have experience in machine learning model development and Python programming.
        </div>

        <div className="flex gap-2.5 flex-wrap mb-7">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveGroup(f.value)}
              className={`[font-family:var(--mono)] text-[11px] tracking-[0.1em] uppercase px-[15px] py-2.5 rounded-full border transition-all cursor-pointer ${
                activeGroup === f.value
                  ? "bg-[var(--navy)] text-[var(--lime)] border-[var(--navy)]"
                  : "border-[var(--rule-strong)] text-[var(--muted)] hover:bg-[var(--navy)] hover:text-[var(--lime)] hover:border-[var(--navy)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {audience.map((a, i) => {
            const visible = activeGroup === "all" || a.g === activeGroup;
            return (
              <div
                key={i}
                className={`bg-white border rounded-[12px] px-5 py-3.5 text-[14.5px] font-medium flex items-center gap-2.5 transition-all duration-300 ${
                  visible ? "border-[rgba(124,156,16,0.5)] shadow-sm opacity-100" : "opacity-20 grayscale border-[var(--rule)]"
                }`}
              >
                {a.r}
                <span className="[font-family:var(--mono)] text-[9px] tracking-[0.1em] uppercase text-[var(--muted-soft)] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded-[5px]">
                  {groupLabel[a.g]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
