import { why } from "@/src/data/mlMonitoringData";

export default function WhyEdstellarSection() {
  return (
    <section className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-14">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">VIII</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Why</span>
          · What sets Edstellar apart
        </div>

        <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-4 max-w-[20ch]">
          Why choose Edstellar for <em className="[font-family:var(--serif)] italic">ML monitoring</em> training.
        </h2>
        <p className="text-[var(--muted)] text-[clamp(15px,1.2vw,17px)] leading-[1.7] mb-14 max-w-[64ch]">
          As a global corporate training company, Edstellar delivers ML Model Monitoring training in 10+ languages and across 100+ countries.
        </p>

        <div className="grid grid-cols-3 gap-[18px]">
          {why.map((w, i) => (
            <div key={i} className="bg-white border border-[var(--rule)] rounded-[16px] p-7 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_22px_46px_-28px_rgba(10,22,40,0.5)]">
              <div className="w-[42px] h-[42px] rounded-[11px] bg-[var(--lime)]/18 flex items-center justify-center text-[20px] mb-4">{w.ic}</div>
              <h4 className="font-semibold text-[18px] tracking-[-0.02em] mb-2">{w.t}</h4>
              <p className="text-[14px] leading-[1.6] text-[var(--muted)]">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
