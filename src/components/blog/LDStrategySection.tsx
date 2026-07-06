import Image from "next/image";

export default function LDStrategySection() {
  return (
    <section className="w-full overflow-hidden bg-[#eaf1fb]">
      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/L&D.webp"
            alt="L&D strategy"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative flex items-center overflow-hidden px-6 py-14 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[560px]">
            <h2 className="mb-6 text-[36px] font-bold leading-[1.15] text-[#3d3d3d] md:text-[48px]">
              Transform Your L&amp;D <br className="hidden md:block" />
              Strategy Today
            </h2>

            <p className="mb-8 text-[18px] leading-[1.9] text-[#3f3f3f]">
              Unlock premium resources, tools, and frameworks designed for HR
              and learning professionals. Our L&amp;D Hub gives you everything
              needed to elevate your organization&apos;s training approach.
            </p>

            <a
              href="#"
              className="inline-flex rounded-[7px] bg-[#c9ec1f] px-8 py-4 text-[18px] font-semibold text-[#050b33] transition hover:bg-[#b7dc12]"
            >
              Access L&amp;D Hub Resources
            </a>
          </div>

          <div className="pointer-events-none absolute -right-[170px] bottom-[-220px] h-[500px] w-[500px] rounded-full border-[25px] border-[#d7e3fb]" />
          <div className="pointer-events-none absolute -right-[130px] bottom-[-180px] h-[420px] w-[420px] rounded-full border-[25px] border-[#e1e9f7]" />
          <div className="pointer-events-none absolute -right-[90px] bottom-[-140px] h-[340px] w-[340px] rounded-full border-[25px] border-[#e8eef8]" />
        </div>
      </div>
    </section>
  );
}
