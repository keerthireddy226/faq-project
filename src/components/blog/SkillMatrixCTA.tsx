import Link from "next/link";

export default function SkillMatrixCTA() {
  return (
    <div
      className="
        relative mt-4 flex flex-col items-center
        overflow-hidden rounded-[10px]
        border border-[#ACC8FF]
        px-5 py-6
      "
      style={{
        background:
          "linear-gradient(180deg, #EBF1F9 0%, #1B40A9 60%)",
      }}
    >
      {/* Background Shape */}
      <img
        src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/6655839314c7d45134aefd3b_Mask%20group.svg"
        alt=""
        className="absolute top-0 left-0 w-full"
      />

      {/* Laptop Image */}
      <img
        src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/66aa1ed5aad60946c5bcd759_Skill%20matrix.webp"
        alt="Skill Matrix Tool Dashboard"
        className="relative z-10 mb-6 w-[245px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="mb-4 text-[20px] font-bold leading-[28px] text-white">
          Want to evaluate your team&apos;s skill gaps?
        </h3>

        <p className="mb-6 text-[14px] leading-[22px] text-white">
          Do a quick Skill gap analysis with{" "}
          <span className="font-semibold">
            Edstellar&apos;s Free Skill Matrix tool
          </span>
        </p>

        <Link
          href="/skill-matrix"
          target="_blank"
          className="
            inline-flex h-[48px] w-full items-center
            justify-center gap-2 rounded-[8px]
            bg-[#C8E130] px-6
            text-[16px] font-semibold text-[#1C1C1C]
            transition hover:opacity-90
          "
        >
          <span>Get Started</span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M12 1C12 0.447715 11.5523 0 11 0H2C1.44772 0 1 0.447715 1 1C1 1.55228 1.44772 2 2 2H10V10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10V1ZM0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM5.04044 8.37377L11.7071 1.70711L10.2929 0.292893L3.62623 6.95956L5.04044 8.37377ZM1.70711 11.7071L5.04044 8.37377L3.62623 6.95956L0.292893 10.2929L1.70711 11.7071Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}