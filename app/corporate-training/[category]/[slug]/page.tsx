import courses from "@/data/courses.json";
import { notFound } from "next/navigation";
import CourseHero from "@/src/components/course/CourseHero";
import WhatIsSection from "@/src/components/course/WhatIsSection";
import LifecycleSection from "@/src/components/course/LifecycleSection";
import SkillsSection from "@/src/components/course/SkillsSection";
import OutcomesSection from "@/src/components/course/OutcomesSection";
import CurriculumSection from "@/src/components/course/CurriculumSection";
import AudienceSection from "@/src/components/course/AudienceSection";
import ModesSection from "@/src/components/course/ModesSection";
import WhyEdstellarSection from "@/src/components/course/WhyEdstellarSection";
import TestimonialsSection from "@/src/components/course/TestimonialsSection";
import CertificateSection from "@/src/components/course/CertificateSection";
import CourseFAQSection from "@/src/components/course/CourseFAQSection";
import RelatedApplySection from "@/src/components/course/RelatedApplySection";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { category, slug } = await params;

  const course = courses.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!course) notFound();

  return (
    <main>
      {"hero" in course && course.hero && <CourseHero {...course.hero} />}
      {"whatIs" in course && course.whatIs && <WhatIsSection {...course.whatIs} />}
      <LifecycleSection />
      <SkillsSection />
      <OutcomesSection />
      <CurriculumSection />
      <AudienceSection />
      <ModesSection />
      <WhyEdstellarSection />
      <TestimonialsSection />
      <CertificateSection />
      <CourseFAQSection />
      <RelatedApplySection />
    </main>
  );
}
