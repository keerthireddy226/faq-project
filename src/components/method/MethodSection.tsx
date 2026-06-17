import { methodData } from "@/src/data/methodData";

export default function MethodSection() {
  return (
    <section className="bg-[#FAFAF7] py-32">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 mb-24">

          <div>
            <div className="flex items-center gap-4 mb-8 uppercase tracking-[0.3em] text-[11px] text-[#8B8F97]">
              <span>04</span>

              <div className="w-10 h-px bg-[#D8D8D8]" />

              <span>Methodology</span>
            </div>

            <h2 className="text-[#0A1628] text-[64px] leading-[0.95] tracking-[-0.04em] font-light">
              A four-step
              <br />
              protocol,
              <br />
              repeated{" "}
              <em className="italic font-serif font-normal">
                with
                <br />
                discipline.
              </em>
            </h2>
          </div>

          <div className="flex items-center">
            <div className="border-l border-[#0A1628] pl-6 max-w-[560px]">
              <p className="text-[#24324A] text-[18px] leading-[1.9]">
                We do not improvise on enterprise capability. Every engagement
                runs the same protocol — diagnostic before design, evidence
                before delivery, measurement before renewal — so the work is
                auditable end to end.
              </p>
            </div>
          </div>

        </div>

        {/* Method Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-[#E3E3E3]">

          {methodData.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-h-[430px]
                p-8
                bg-[#FAFAF7]
                border-r border-[#E3E3E3]
                transition-all
                duration-500
                hover:bg-[#F2F0E8]
              "
            >

              {/* Animated Top Border */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-[2px]
                  w-full
                  bg-[#D9D5C7]
                  scale-x-0
                  origin-left
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* Step Header */}

              <div className="flex justify-between mb-16 text-[10px] uppercase tracking-[0.35em] text-[#8B8F97]">

                <span>Step</span>

                <span className="transition-colors duration-300">
                  {item.step}
                </span>

              </div>

              {/* Title */}

              <h3 className="text-[#0A1628] text-[28px] leading-[1.2] mb-8">
                {item.title}
                <br />

                <em className="font-serif italic font-normal">
                  {item.emphasis}
                </em>
              </h3>

              {/* Description */}

              <p className="text-[#24324A] text-[16px] leading-[2] mb-10">
                {item.description}
              </p>

              {/* Duration */}

              <span
                className="
                  inline-flex
                  border
                  border-[#D7D7D7]
                  px-4
                  py-2
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-[#0A1628]
                  bg-transparent
                "
              >
                {item.duration}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}