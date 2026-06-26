import courses from "@/data/courses.json";
import CourseHero from "@/src/components/course/CourseHero";
import { notFound } from "next/navigation";
import WhatIsSection from "@/src/components/WhatIsSection";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { category, slug } = await params;

  const course = courses.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-[#fbfbf7] max-w-7xl mx-auto px-6">
      <CourseHero />

      {"whatIs" in course && course.whatIs && (
        <WhatIsSection {...course.whatIs} />
      )}
    </main>
  );
}
