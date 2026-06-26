export default function CertificateSection() {
  return (
    <section className="bg-[var(--paper-warm)] py-28 border-b border-[var(--rule)]">
      <div className="container">

        <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-[var(--muted)] mb-8 flex items-baseline gap-3 [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] italic text-[16px] text-[var(--ink)]">X</span>
          <span className="[font-family:var(--serif)] italic text-[16px] normal-case tracking-normal text-[var(--ink)]">Certificate</span>
          · Recognition that motivates
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em] mb-5 max-w-[20ch]">
              Your ML Model Monitoring <em className="[font-family:var(--serif)] italic">training certificate</em>.
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[52ch]">
              On successful completion, employees receive an Edstellar course completion certificate, recognising their commitment to ongoing learning and professional development. It validates the skills they have built and motivates them to keep growing.
            </p>
          </div>

          <div className="aspect-[1.4/1] rounded-[18px] bg-gradient-to-br from-[var(--navy-soft)] to-[var(--navy-deep)] border border-white/14 relative overflow-hidden flex flex-col items-center justify-center text-center p-8 transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-[14px] border border-[var(--lime)]/25 rounded-[12px] pointer-events-none" />
            <div className="w-[74px] h-[74px] rounded-full bg-gradient-to-br from-[var(--lime)] to-[var(--lime-soft)] flex items-center justify-center text-[30px] mb-5">★</div>
            <p className="[font-family:var(--serif)] italic text-[24px] text-[var(--paper)] mb-1.5">Certificate of Completion</p>
            <p className="[font-family:var(--mono)] text-[10px] tracking-[0.18em] uppercase text-white/60">ML Model Monitoring · Edstellar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
