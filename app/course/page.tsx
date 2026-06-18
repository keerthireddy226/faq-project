import Link from "next/link";

const courses = [
  {
    title: "Learning Strategy Design",
    description: "Align workforce capability development with business priorities and long-term performance goals.",
    href: "/course/learningstrategy",
  },
  {
    title: "Learning Technology Consulting",
    description: "Design, select, and integrate the technology ecosystem your enterprise actually needs.",
    href: "/course/learningtechnology",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#22295a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#c8e130]">Courses</span>
        </h1>
        <p className="text-white/70 mb-12 text-base">
          Select a course to explore more details.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="block bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-8 border border-white/10"
            >
              <h2 className="text-xl font-semibold text-[#c8e130] mb-3">
                {course.title}
              </h2>
              <p className="text-white/70 text-sm leading-6">
                {course.description}
              </p>
              <span className="inline-block mt-6 text-sm font-semibold text-white/80">
                View Course →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
