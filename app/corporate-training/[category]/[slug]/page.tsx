import courses from "@/data/courses.json";
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
    <main>
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="mt-6">{course.description}</p>
      </div>

      {"whatIs" in course && course.whatIs && (
        <WhatIsSection {...course.whatIs} />
      )}
    </main>
  );
}
