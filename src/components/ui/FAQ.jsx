import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How often should I brush my teeth?",
    answer:
      "You should brush your teeth at least twice a day - in the morning and before bed. Use fluoride toothpaste and a soft-bristled toothbrush for best results.",
  },
  {
    question: "When should I replace my toothbrush?",
    answer:
      "Replace your toothbrush or electric toothbrush head every 3-4 months, or sooner if the bristles become frayed.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "Regular dental check-ups should be scheduled every 6 months. However, your dentist might recommend more frequent visits based on your oral health needs.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "In case of a dental emergency, rinse your mouth with warm water, use dental floss to remove any objects stuck between teeth, and contact a dentist immediately.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span
          className={`ml-6 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-4 text-base text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          {...faq}
          isOpen={index === openIndex}
          onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}
