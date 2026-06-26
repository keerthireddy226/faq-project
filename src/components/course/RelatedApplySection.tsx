import { related } from "@/src/data/mlMonitoringData";

const applyCards = [
  { n:"01", h:"Request a quote", d:"Tell us team size and delivery format. We scope curriculum, duration, and pricing to your needs.", go:"Get a tailored proposal →" },
  { n:"02", h:"Book a discovery call", d:"Walk us through your production ML stack and the monitoring gaps you need to close.", go:"Talk to an advisor →" },
  { n:"03", h:"Download the outline", d:"Share the full 10-module breakdown with your ML, MLOps, and L&D stakeholders.", go:"Get the curriculum →" },
];

export default function RelatedApplySection() {
  return (
    <section className="bg-[var(--paper-warm)] py-28">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">XII</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Explore</span>
          · Related AI & ML training
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-9 max-w-[20ch]">
          Related machine learning & <em className="[font-family:var(--serif)] italic">MLOps training</em> courses.
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-14">
          {related.map((r, i) => (
            <div key={i} className="bg-white border border-[var(--rule)] rounded-[14px] p-[22px] flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-26px_rgba(10,22,40,0.5)] hover:border-[var(--rule-strong)] cursor-pointer">
              <h4 className="font-semibold text-[16px] tracking-[-0.01em] leading-[1.3]">{r.t}</h4>
              <div className="[font-family:var(--mono)] text-[10.5px] tracking-[0.08em] uppercase text-[var(--muted-soft)] flex gap-4 mt-auto flex-wrap">
                <span>{r.d}</span><span>Instructor-led</span>
              </div>
              <span className="[font-family:var(--mono)] text-[11px] tracking-[0.12em] uppercase text-[#6f8c0f]">View course →</span>
            </div>
          ))}
        </div>

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-6 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Apply</span>
          · Start the conversation
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-8 max-w-[20ch]">
          Request <em className="[font-family:var(--serif)] italic">ML Model Monitoring</em> training for your team.
        </h2>

        <div className="grid grid-cols-3 gap-[18px]">
          {applyCards.map((c, i) => (
            <div key={i} className="bg-white border border-[var(--rule)] rounded-[18px] p-[30px] cursor-pointer transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_24px_50px_-28px_rgba(10,22,40,0.5)]">
              <p className="[font-family:var(--mono)] text-[11px] tracking-[0.18em] text-[#6f8c0f] mb-5">{c.n}</p>
              <h4 className="font-semibold text-[20px] tracking-[-0.02em] mb-2.5">{c.h}</h4>
              <p className="text-[14px] leading-[1.6] text-[var(--muted)] mb-5">{c.d}</p>
              <span className="[font-family:var(--mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--ink)] inline-flex gap-2 items-center">{c.go}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
