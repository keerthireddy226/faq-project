import { whyData } from "@/src/data/whyData";

export default function WhySection() {
  return (
    <section className="bg-[#FAFAF7] py-32">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 mb-24">

          <div>
            <div className="flex items-center gap-4 mb-8 uppercase tracking-[0.3em] text-[11px] text-[#8B8F97]">
              <span>05</span>

              <div className="w-10 h-px bg-[#D8D8D8]" />

              <span>Why Edstellar</span>
            </div>

            <h2 className="text-[#0A1628] text-[64px] leading-[0.95] tracking-[-0.04em] font-light">
              Built for the
              <br />
              <em className="italic font-serif font-normal">
                seriousness
              </em>
              <br />
              of enterprise
              <br />
              change.
            </h2>
          </div>

          <div className="flex items-center">
            <div className="border-l border-[#0A1628] pl-6 max-w-[560px]">
              <p className="text-[#24324A] text-[18px] leading-[1.9]">
                Three commitments separate us from every commodity training
                vendor your team has already met — and they are the reason
                Fortune-listed buyers stay for the second renewal.
              </p>
            </div>
          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E3E3E3]">

          {whyData.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                min-h-[360px]
                p-8
                bg-[#FAFAF7]
                transition-all
                duration-500
                hover:bg-[#F2F0E8]
                ${
                  index !== whyData.length - 1
                    ? "border-r border-[#E3E3E3]"
                    : ""
                }
              `}
            >

              {/* Small Top Accent Line */}

              <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#D9D5C7]" />

              {/* Numeral */}

              <div className="mb-8 text-[54px] leading-none italic text-[#8B8F97] [font-family:var(--font-cormorant)]">
                {item.numeral}
              </div>

              {/* Title */}

              <h3 className="text-[#0A1628] text-[30px] leading-[1.2] mb-8 font-normal">
                {item.title}
                <br />

                <em className="italic font-serif font-normal">
                  {item.emphasis}
                </em>
              </h3>

              {/* Description */}

              <p className="text-[#24324A] text-[16px] leading-[2]">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}