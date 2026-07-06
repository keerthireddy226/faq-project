import Link from "next/link";

export default function BlogCategoriesSection() {
  const categories = [
    "Trending Technologies",
    "Digital Transformation",
    "Frameworks / Models / Templates",
    "Learning and Development",
    "Workforce Optimization",
    "Popular Training Providers",
    "Employee Training",
    "Human Resource",
    "In-Demand Skills",
    "Building a Team",
    "Job Roles & Responsibilities",
    "Leadership Skills",
    "Soft Skills",
    "Employee Activities, Games & Exercises",
    "Workplace Statistics & Trends",
    "Popular Training Topics",
    "Diversity & Inclusion",
    "Business Development",
  ];

  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="container">
        <h2 className="mb-10 text-[42px] font-semibold leading-[1.15]">
          <span className="font-serif italic">Blog</span> Categories
        </h2>

        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="rounded-md border border-[#b9cbf4] bg-white px-4 py-3 text-[16px] font-medium leading-none text-[#111827] transition-all duration-300 hover:border-[#7da2f7] hover:bg-[#edf3ff]"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
