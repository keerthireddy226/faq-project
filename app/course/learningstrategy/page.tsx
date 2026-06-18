import FAQSection from "../../../src/components/faq/FAQSection";
import HeroBanner from "../../../src/components/hero/HeroBanner";
import { learningstrategyFaqData } from "../../../src/data/faqData";
import { learningstrategyHeroData } from "../../../src/data/aboutHeroData";

export default function LearningStrategy() {
  return (
    <main>
      <HeroBanner {...learningstrategyHeroData} />
      <FAQSection data={learningstrategyFaqData} />
    </main>
  );
}
