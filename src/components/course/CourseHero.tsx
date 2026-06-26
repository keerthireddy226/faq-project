type Chip = { label: string; value: string; sub?: string };

type HeroProps = {
  breadcrumb: string;
  badge: string;
  headline: string;
  headlineEm: string;
  headlineSuffix: string;
  subtitle: string;
  lede: string;
  chips: Chip[];
};

export default function CourseHero({
  breadcrumb,
  badge,
  headline,
  headlineEm,
  headlineSuffix,
  subtitle,
  lede,
  chips,
}: HeroProps) {
  return (
    <section className="bg-[#fbfbf7] py-12 lg:py-16">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">
            {breadcrumb}
          </div>

          <div className="mb-6 inline-flex rounded-full bg-lime-100 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-700">
            {badge}
          </div>

          <h1 className="max-w-3xl font-[var(--display)] text-[clamp(30px,5vw,64px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#07162c]">
            {headline}{" "}
            <span className="[font-family:var(--serif)] text-[#6b8f00] italic font-normal">
              {headlineEm}
            </span>
            <br />
            {headlineSuffix}
          </h1>

          <p className="mt-5 max-w-md font-[var(--body)] text-lg md:text-xl leading-8 text-[#07162c]">
            {subtitle}
          </p>

          <p className="mt-6 max-w-xl font-[var(--body)] text-base md:text-lg leading-7 md:leading-8 text-slate-600">
            {lede}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#course-outline"
              className="rounded-full bg-[#07162c] px-8 py-4  text-sm font-bold text-lime-300"
            >
              View course outline
            </a>
            <a
              href="#enquire"
              className="rounded-full border border-slate-300 px-8 py-4  text-sm font-bold text-[#07162c]"
            >
              Enquire now
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {chips.map((c, i) => (
              <InfoCard key={i} label={c.label} value={c.value} sub={c.sub} />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-[520px] rounded-[22px] bg-[#07162c] p-8 text-white shadow-xl">
            <p className="mb-8  text-[10px] font-semibold uppercase tracking-[0.32em] text-lime-300">
              The Production Monitoring Lifecycle
            </p>

            <div className="relative mx-auto flex h-[250px] w-[250px] items-center justify-center">
              <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-slate-600" />
              <div className="absolute h-[150px] w-[150px] rounded-full border border-dashed border-slate-700" />

              <div className="z-10 flex h-[95px] w-[95px] items-center justify-center rounded-full bg-lime-300 text-center font-[var(--display)] text-sm font-extrabold leading-4 text-[#07162c]">
                Model
                <br />
                health
              </div>

              <CircleIcon className="left-[18px] top-[65px]" text="⚖️" />
              <CircleIcon className="left-[82px] top-[15px]" text="📉" />
              <CircleIcon className="right-[18px] top-[65px]" text="📊" />
              <CircleIcon className="right-[36px] bottom-[45px]" text="🚨" />
              <CircleIcon className="bottom-[18px] left-[104px]" text="🔁" />
              <CircleIcon className="bottom-[45px] left-[36px]" text="🔍" />
            </div>

            <p className="mt-6 max-w-md  text-sm leading-6 text-slate-300">
              Hover a stage to see how this programme keeps production models
              healthy across the full monitoring lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className=" text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 font-[var(--display)] text-base font-extrabold text-[#07162c]">
        {value}
      </p>
      {sub && (
        <p className="mt-1 font-[var(--body)] text-xs text-slate-500">{sub}</p>
      )}
    </div>
  );
}

function CircleIcon({ className, text }: { className: string; text: string }) {
  return (
    <div
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#10213a] text-lg shadow-md ${className}`}
    >
      {text}
    </div>
  );
}
