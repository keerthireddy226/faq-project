import Link from "next/link";

export default function CoachingCTA() {
  return (
    <div
      className="flex flex-col items-start justify-end rounded-[10px] bg-cover bg-center px-5 pt-[24px] pb-[200px]"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/68eccc88ae455a603ca80de0_Group%201000005608%20(1).webp')",
      }}
    >
      <div className="flex flex-col items-stretch">
        <h3 className="mb-[10px] text-[24px] font-bold leading-[32px] text-white">
          Coaching that Unlocks Potential
        </h3>

        <p className="mb-5 text-[16px] leading-[24px] text-white">
          <span className="font-semibold">
            Create dynamic leaders and cohesive teams.
          </span>{" "}
          Learn more now!
        </p>

        <Link
          href="/coaching-solutions"
          target="_blank"
          className="flex items-center gap-[10px] text-[#FCD635] transition-opacity hover:opacity-80"
        >
          <span>Explore 50+ Coaching Programs</span>

          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66726 0.551098H0.889087M8.66726 0.551098V8.32927M8.66726 0.551098L0.889087 8.32927"
              stroke="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
