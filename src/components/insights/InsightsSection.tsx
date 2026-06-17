import { insightsData } from "@/src/data/insightsData";

export default function InsightsSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 mb-24">

          <div>
            <div className="flex items-center gap-4 mb-8 uppercase tracking-[0.3em] text-[11px] text-[#8B8F97]">
              <span>07</span>
              <div className="w-10 h-px bg-[#D8D8D8]" />
              <span>Insights</span>
            </div>

            <h2 className="text-[#0A1628] text-[64px] leading-[0.95] tracking-[-0.04em] font-light">
              Field notes
              <br />
              from the
              <br />
              <em className="italic font-serif font-normal">
                capability
                <br />
                frontier.
              </em>
            </h2>
          </div>

          <div className="flex items-center">
            <div className="border-l border-[#0A1628] pl-6 max-w-[560px]">
              <p className="text-[#24324A] text-[18px] leading-[1.9]">
                Original research and short-form theses from our Principals —
                written for the L&D leader who needs to decide, not to be
                entertained.
              </p>
            </div>
          </div>

        </div>

        {/* Insight Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E3E3E3]">

          {insightsData.map((item, index) => (
            <div
              key={index}
              className={`
                group
                flex
                flex-col
                bg-white
                transition-colors
                duration-500
                hover:bg-[#F2F0E8]
                ${index !== insightsData.length - 1 ? "border-r border-[#E3E3E3]" : ""}
              `}
            >

              {/* Image */}

              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titleBefore}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}

              <div className="flex flex-col flex-1 p-8">

                {/* Category + Read Time */}

                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8f135" }}>
                    {item.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#8B8F97]">
                    {item.readTime}
                  </span>
                </div>

                {/* Description */}

                <p className="text-[#24324A] text-[15px] leading-[1.9] mb-8 [font-family:var(--font-dm-sans)]">
                  {item.description}
                </p>

                {/* Title with highlighted word */}

                <h3 className="text-[#0A1628] text-[22px] leading-[1.4] font-normal flex-1 [font-family:var(--font-cormorant)]">
                  {item.titleBefore}{" "}
                  <em className="not-italic" style={{ color: "#c8f135" }}>
                    {item.highlight}
                  </em>{" "}
                  {item.titleAfter}
                </h3>

                {/* Read Now link */}

                <div className="mt-8 pt-6 border-t border-[#E3E3E3] flex items-center gap-2">
                  <span
                    className="text-[11px] uppercase tracking-[0.3em] transition-colors duration-300"
                    style={{ color: "#c8f135" }}
                  >
                    {item.cta}
                  </span>
                  <span
                    className="transition-all duration-300 group-hover:translate-x-1.5"
                    style={{ color: "#c8f135" }}
                  >
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
