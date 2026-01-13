import { useState } from 'react';

const AccordionIcon = ({ open }: { open: boolean }) => (
  <svg
    className="block size-full"
    fill="none"
    viewBox="0 0 16 16"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {/* Horizontal line (always visible) */}
    <path d="M4 8h8" />
    {/* Vertical line (only when closed) */}
    {!open && <path d="M8 4v8" />}
  </svg>
);

const faqs = [
  {
    question: "Are removals 100% guaranteed?",
    answer:
      "Results vary based on platform policies, content type, and case specifics. While we work directly with verified DMCA agents and sources to maximize outcomes, no result is 100% guaranteed."
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#fffff5]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[16px] tracking-[3.2px] uppercase text-[#0048ff] mb-4 font-semibold font-['Inter',sans-serif]">
            FAQS
          </p>
          <h2 className="text-[52px] leading-[52px] tracking-[-2px] text-[#111] font-['RocaOne-Bl',sans-serif]">
            Questions & Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] shadow-[0px_1px_3px_0px_rgba(161,161,161,0.1),0px_6px_6px_0px_rgba(161,161,161,0.09),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)] relative"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className="text-[17.5px] leading-[30px] pr-4 font-['Product_Sans',sans-serif] font-bold text-[#111]">{faq.question}</span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0048ff] flex items-center justify-center">
                  <div className="relative w-4 h-4">
                    <AccordionIcon open={openIndex === index} />
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-[rgba(17,17,17,0.1)]">
                    <p className="text-[18px] leading-[28px] text-[rgba(17,17,17,0.7)] mt-4 font-['Inter',sans-serif]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 rounded-[24px] pointer-events-none">
                <div aria-hidden="true" className="absolute border border-[rgba(17,17,17,0.1)] border-solid inset-0 rounded-[24px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Book a Free Consultation Button */}
        <div className="mt-[48px] text-center">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0wA66iSpGpWfL_9Jnyc-PJd6Kfzyzce9QWik_OSpnbWSOcBLoOSBSQA98okufAE0NIy5MlL5YA?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#0048ff] h-[64px] items-center justify-center px-[40px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
          >
            <span className="font-['Product_Sans',sans-serif] font-bold text-[17.5px] leading-[30px] text-white">
              Book a Free Consultation
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}