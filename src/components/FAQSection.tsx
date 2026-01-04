import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Why do you do this?",
    answer: "We believe everyone deserves a second chance online. Our mission is to help individuals and businesses clean up their digital presence and take control of their online reputation."
  },
  {
    question: "How do you remove content from the internet?",
    answer: "We use a combination of legal DMCA takedowns, direct platform communications, and strategic de-indexing techniques to remove or suppress unwanted content from search engines and social platforms."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing varies based on the scope and complexity of your reputation management needs. We provide custom quotes after an initial consultation. Contact us through the application form for a detailed assessment."
  },
  {
    question: "Who have you helped in the past?",
    answer: "We've helped founders, executives, entrepreneurs, and businesses across industries including finance, technology, healthcare, and entertainment. Our clients range from individuals to Fortune 500 companies."
  },
  {
    question: "What are the benefits of these services?",
    answer: "Our services help protect your personal and professional reputation, improve search engine results, remove negative reviews, and create a positive online presence that opens doors for new opportunities."
  },
  {
    question: "How can I remove unwanted content myself?",
    answer: "Sign up for our free newsletter to access DIY tutorials, AI tools, and expert tips for basic reputation management. For complex cases, our professional services ensure thorough and effective removal."
  },
  {
    question: "Is there anyone you do not work with?",
    answer: "We maintain ethical standards and do not assist with removing legitimate criticism, court records, or content that serves the public interest. Each case is evaluated individually."
  },
  {
    question: "What does the process of getting started look like?",
    answer: "Submit an application through our form, and our team will conduct an initial assessment within 2-3 business days. If approved, we'll create a customized strategy and begin work immediately."
  }
];

function FAQItem({ faq, isOpen, onToggle, index }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; index: number }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-24 shadow-card relative overflow-hidden">
      <h3>
        <button
          onClick={onToggle}
          className="w-full px-md lg:px-lg py-md lg:py-lg flex items-center justify-between text-left transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          {/* Question - Inter Semi_Bold 18px */}
          <span className="font-inter font-semibold text-[16px] lg:text-[18px] leading-relaxed lg:leading-[30px] pr-md text-black">
            {faq.question}
          </span>
          <div className={`shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
            {isOpen ? (
              <Minus className="w-5 h-5 text-white" />
            ) : (
              <Plus className="w-5 h-5 text-white" />
            )}
          </div>
        </button>
      </h3>
      
      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        hidden={!isOpen}
      >
        <div className="px-md lg:px-lg pb-md lg:pb-lg">
          <div className="pt-2 border-t border-[rgba(17,17,17,0.1)]">
            {/* Answer - Inter 18px */}
            <p className="font-inter text-[16px] lg:text-[18px] leading-relaxed lg:leading-[28px] text-[rgba(17,17,17,0.7)] mt-md">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-24 pointer-events-none" aria-hidden="true">
        <div className="absolute border border-[rgba(17,17,17,0.1)] inset-0 rounded-24" />
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-xl lg:py-[96px] bg-cream" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-[900px] mx-auto px-md">
        <motion.div 
          className="text-center mb-lg lg:mb-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label - Inter Semi_Bold 16px uppercase tracking 3.2px */}
          <p className="font-inter font-semibold text-[14px] lg:text-[16px] tracking-wide uppercase text-primary mb-md">
            FAQS
          </p>
          {/* Heading - RocaOne-Bl 48px tracking -2px */}
          <h2 id="faq-heading" className="font-rocaone-bl text-[36px] lg:text-[48px] leading-[1.1] tracking-tighter text-black">
            Questions & Answers
          </h2>
        </motion.div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
