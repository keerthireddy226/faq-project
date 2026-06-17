import FAQSection from "../src/components/faq/FAQSection";
import MethodSection from "../src/components/method/MethodSection";
import WhySection from "../src/components/why/WhySection";
import PracticesSection from "../src/components/practices/PracticesSection";
import InsightsSection from "../src/components/insights/InsightsSection";

export default function Home() {
  return (
    <main>
      <MethodSection />
      <WhySection />
      <PracticesSection />
      <InsightsSection />
      <FAQSection />
    </main>
  );
}
