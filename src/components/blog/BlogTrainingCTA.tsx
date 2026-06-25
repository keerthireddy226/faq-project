import Link from "next/link";

export default function BlogTrainingCTA() {
  return (
    <div className="sticky top-20 z-10 flex flex-col items-center justify-center overflow-hidden rounded-[5px] border border-[#ACC8FF] px-5 pt-6 pb-[240px]">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/6655839414c7d45134aefdb3_Group%201000005623.webp"
        alt="Have a Training Requirement?"
        className="absolute inset-0 -z-10 h-full w-full rounded-[5px] object-cover"
      />

      {/* Content */}
      <div className="flex flex-col items-start">
        <h3 className="mb-5 text-[28px] leading-[36px] font-semibold text-[#1B40A9]">
          Have a Training Requirement?
        </h3>

        <Link
          href="#"
          className="mb-4 rounded-[8px] border-2 border-[#264CBE] px-6 py-3 text-center font-medium text-[#264CBE] transition-all duration-300 hover:bg-[#264CBE] hover:text-white"
        >
          Get a Quote now
        </Link>

        <Link
          href="/corporate-training-pricing"
          target="_blank"
          className="flex items-center gap-[10px] text-black"
        >
          <span>View Training Pricing Packages</span>

          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66726 1.33271H0.889087M8.66726 1.33271V9.11089M8.66726 1.33271L0.889087 9.11089"
              stroke="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
