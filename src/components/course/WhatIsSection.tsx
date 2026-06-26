"use client";
import { useState } from "react";

type Row = { old: string; new: string };

type Props = {
  mark?: string;
  title: string;
  titleEm: string;
  intro: string;
  more?: string[];
  rows: Row[];
  oldLabel?: string;
  newLabel?: string;
};

export default function WhatIsSection({
  mark = "About · Why this matters",
  title,
  titleEm,
  intro,
  more,
  rows,
  oldLabel = "Traditional software monitoring",
  newLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[var(--paper)] py-28 border-b border-[var(--rule)]">
      <div className="container">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--muted)] mb-[18px]">
          <span className="[font-family:var(--serif)] italic text-[14px] text-[var(--ink)]">
            I
          </span>{" "}
          {mark}
        </div>

        <h2 className="mb-9 whitespace-nowrap text-[var(--ink)] leading-[1.08] text-[50px] font-bold tracking-[-0.03em]">
          {title}
          <span className="font-[var(--serif)] italic text-[50px] font-semibold text-[var(--ink)]">
            {titleEm.replace(/\?$/, "")}
          </span>
          ?
        </h2>

        <div className="grid grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base leading-[1.7] text-[var(--muted)]">
              {intro}
            </p>
            {more && (
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: open ? 1000 : 0, opacity: open ? 1 : 0 }}
              >
                {more.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.7] mt-4 text-[var(--muted)]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
            {more && (
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex gap-1.5 mt-5 bg-transparent border-none [border-bottom:1.5px_solid_var(--navy)] pb-[3px] text-[11px] font-bold tracking-[0.14em] uppercase cursor-pointer text-[var(--navy)] [font-family:var(--mono)] outline-none"
              >
                {open ? "Show less ×" : "Read more +"}
              </button>
            )}
          </div>

          <div className="[border:1.5px_solid_var(--rule)] rounded-[14px] overflow-hidden bg-[var(--white)]">
            <div className="grid grid-cols-2">
              <div className="px-[18px] py-[14px] text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] bg-[var(--paper-warm)] border-r border-b border-[var(--rule)]">
                {oldLabel}
              </div>
              <div className="px-[18px] py-[14px] text-[10px] font-bold tracking-[0.1em] uppercase text-[#7a8c00] bg-[var(--lime)]/10 border-b border-[var(--rule)]">
                {newLabel}
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-2${i < rows.length - 1 ? " border-b border-[var(--rule)]" : ""}`}
              >
                <div className="px-[18px] py-[16px] text-[15px] leading-[1.5] text-[var(--muted)] border-r border-[var(--rule)]">
                  {r.old}
                </div>
                <div className="px-[18px] py-[16px] text-[15px] leading-[1.5] font-normal text-[var(--ink)] bg-[var(--lime)]/5">
                  {r.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
