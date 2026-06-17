import FAQItem from "../faq/FAQItem";
import { faqData } from "../../data/faqData";

interface FAQSectionProps {
  data?: {
    heading: string;
    subheading: string;
    items: { id: number; question: string; answer: string }[];
  };
}

export default function FAQSection({ data = faqData }: FAQSectionProps) {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <h2 className="text-[32px] font-bold text-slate-900">
            {data.heading}
          </h2>

          <p className="text-[16px] italic text-slate-900 mt-2">
            {data.subheading}
          </p>

        </div>

        <div>
          {data.items.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
