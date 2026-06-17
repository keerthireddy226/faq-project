import HeroBanner from "../../src/components/hero/HeroBanner";
import FAQSection from "../../src/components/faq/FAQSection";
import { learningTechnologyHeroData } from "../../src/data/aboutHeroData";
import { learningtechnologyFaqData } from "../../src/data/faqData";

export default function LearningTechnology() {
  return (
    <main>
      <HeroBanner {...learningTechnologyHeroData} />
      <FAQSection data={learningtechnologyFaqData} />
    </main>
  );
}
