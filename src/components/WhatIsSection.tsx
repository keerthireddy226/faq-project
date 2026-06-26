"use client";
import { useState } from "react";
import "../styles/styles-font.css";

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
    <section className="wis-section">
      <div className="wis-container">

        <div className="wis-mark">
          <span className="wis-mark-roman">I</span>{" "}{mark}
        </div>

        <h2 className="wis-headline">
          <span className="wis-headline-plain">{title} </span>
          <em className="wis-headline-em">{titleEm.replace(/\?$/, "")}</em>
          <span className="wis-headline-q">?</span>
        </h2>

        <div className="wis-grid">

          <div>
            <p className="wis-intro">{intro}</p>
            {more && (
              <div
                className="wis-more"
                style={{ maxHeight: open ? 1000 : 0, opacity: open ? 1 : 0 }}
              >
                {more.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            )}
            {more && (
              <button className="wis-toggle" onClick={() => setOpen(!open)}>
                {open ? "Show less ×" : "Read more +"}
              </button>
            )}
          </div>

          <div className="wis-card">
            <div className="wis-card-header">
              <div className="wis-col-old-head">{oldLabel}</div>
              <div className="wis-col-new-head">{newLabel}</div>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="wis-row">
                <div className="wis-col-old">{r.old}</div>
                <div className="wis-col-new">{r.new}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
