import Link from "next/link";

export default function FreeTemplatesSection() {
  const templates = [
    "Free Digital HR Maturity Assessment Template",
    "Free Peer Learning Launch Kit Template",
    "Free Organizational Chart Generator",
    "Free Training Register Template",
    "Free Learning Portfolio Management (LPM) Toolkit Template",
    "Free Learning Culture Ritual Library Template",
    "Free Employee Performance Review Template for HRs & Managers",
    "Free Employee Skills Assessment Template",
    "Free Training Evaluation Template for HRs & L&Ds",
    "Free 6-Box Talent Grid & Talent Mapping Framework Template",
    "Free L&D Benchmarking Survey Kit Template",
    "Free AI Tool Evaluation Scorecard Template",
    "Free Collaboration Framework Template for Organizations",
  ];

  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="container">
        <h2 className="mb-12 text-[42px] font-semibold leading-[1.15] ">
          Free{" "}
          <span className="font-serif italic">
            Learning and Development &amp; HR{" "}
          </span>
          Templates
        </h2>

        <div className="flex flex-wrap gap-4">
          {templates.map((template, index) => (
            <Link
              key={index}
              href="#"
              className="rounded-md border border-[#b9cbf4] bg-white p-3 text-[16px] font-medium leading-[1.35] text-[#111827] transition-all duration-300 hover:border-[#7da2f7] hover:bg-[#edf3ff]"
            >
              {template}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
