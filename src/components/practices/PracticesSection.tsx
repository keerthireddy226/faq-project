import { practicesData } from "@/src/data/practicesData";

const bars = [
  { height: "45%", color: "#C8C4B4" },
  { height: "70%", color: "#A8C4A0" },
  { height: "55%", color: "#C8C4B4" },
  { height: "85%", color: "#8DB89C" },
  { height: "60%", color: "#C8C4B4" },
  { height: "40%", color: "#C8C4B4" },
  { height: "75%", color: "#A8C4A0" },
  { height: "90%", color: "#7AAB88" },
  { height: "65%", color: "#C8C4B4" },
  { height: "50%", color: "#C8C4B4" },
];

function SkillsChart() {
  return (
    <div className="flex items-end gap-1.5 h-20 my-8">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-300"
          style={{ height: bar.height, backgroundColor: bar.color }}
        />
      ))}
    </div>
  );
}

export default function PracticesSection() {
  return (
    <section className="bg-[#FAFAF7] py-32">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 mb-24">

          <div>
            <div className="flex items-center gap-4 mb-8 uppercase tracking-[0.3em] text-[11px] text-[#8B8F97]">
              <span>06</span>
              <div className="w-10 h-px bg-[#D8D8D8]" />
              <span>Practices</span>
            </div>

            <h2 className="text-[#0A1628] text-[64px] leading-[0.95] tracking-[-0.04em] font-light">
              Four pillars,
              <br />
              one operating
              <br />
              system
              <br />
              for capability.
            </h2>
          </div>

          <div className="flex items-center">
            <div className="border-l border-[#0A1628] pl-6 max-w-[560px]">
              <p className="text-[#24324A] text-[18px] leading-[1.9]">
                From 1:1 ratio coaching to enterprise-wide skills intelligence,
                our practices are designed to interlace — so the strategy your
                CHRO sets becomes the behaviour your business sees on the
                ground, in measurable weeks.
              </p>
            </div>
          </div>

        </div>

        {/* Practice Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-[#E3E3E3]">

          {practicesData.map((item, index) => (
            <div
              key={index}
              className={`
                group
                flex
                flex-col
                bg-[#FAFAF7]
                transition-all
                duration-500
                hover:bg-[#F2F0E8]
                ${index !== practicesData.length - 1 ? "border-r border-[#E3E3E3]" : ""}
              `}
            >

              {/* Image */}

              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}

              <div className="flex flex-col flex-1 p-8">

                {/* Label */}

                <div className="flex justify-between items-center mb-8 text-[10px] uppercase tracking-[0.35em] text-[#8B8F97]">
                  <span>{item.numeral}</span>
                  <span>{item.label}</span>
                </div>

                {/* Title */}

                <h3 className="text-[#0A1628] text-[22px] leading-[1.3] font-normal mb-5">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-[#24324A] text-[15px] leading-[1.9] flex-1">
                  {item.description}
                </p>

                {/* Chart (Skills Intelligence Platform only) */}

                {item.chart && <SkillsChart />}

                {/* Bottom Tag */}

                <div className="mt-8 pt-6 border-t border-[#E3E3E3] flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#8B8F97] transition-colors duration-300 group-hover:text-[#0A1628]">
                    {item.tag.replace("→", "").trim()}
                  </span>
                  <span className="text-[#8B8F97] transition-all duration-300 group-hover:text-[#0A1628] group-hover:translate-x-1.5">
                    →
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
