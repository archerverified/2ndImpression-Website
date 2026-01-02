import { useState } from 'react';
import svgPaths from "../imports/svg-0sj01lc6ez";

const faqs = [
  {
    question: "Why do you do this?",
    answer: "Introduction.com is designed for founders, executives, and senior leaders in technology, finance, and related industries. We carefully review each application to ensure members can contribute to and benefit from our community."
  },
  {
    question: "How do you remove content from the internet?",
    answer: "Membership includes access to exclusive events, a vetted community platform, introductions to relevant connections, priority access to resources and insights, and invitations to private dinners and gatherings."
  },
  {
    question: "How much does it cost?",
    answer: "Submit an application through our website. Our team reviews applications on a rolling basis, typically responding within 5-7 business days. If approved, you'll receive an invitation to complete your membership and join the community."
  },
  {
    question: "Who have you helped in the past?",
    answer: "We host a variety of events including intimate dinners, fireside chats with industry leaders, networking sessions, workshops on relevant topics, and annual conferences. All events are designed to facilitate meaningful connections."
  },
  {
    question: "What are the benefits of these services?",
    answer: "Yes, there is an annual membership fee that supports our operations, events, and community programs. Pricing details are shared during the application process. We also offer a limited number of scholarships."
  },
  {
    question: "How can I remove unwanted content myself?",
    answer: "Most events are members-only to maintain an intimate atmosphere. However, we do host occasional events where members can bring qualified guests. Details are provided with each event invitation."
  },
  {
    question: "Is there anyone you do not work with?",
    answer: "Most events are members-only to maintain an intimate atmosphere. However, we do host occasional events where members can bring qualified guests. Details are provided with each event invitation."
  },
  {
    question: "What does the process of getting started look like?",
    answer: "Most events are members-only to maintain an intimate atmosphere. However, we do host occasional events where members can bring qualified guests. Details are provided with each event invitation."
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
          <p className="text-[16px] tracking-[3.2px] uppercase text-[#0048ff] mb-4 font-semibold font-['Inter:Semi_Bold',sans-serif]">
            FAQS
          </p>
          <h2 className="text-[52px] leading-[52px] tracking-[-2px] text-[#111] font-['RocaOne-Bl:Regular',sans-serif]">
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
                <span className="text-[20px] leading-[30px] pr-4 font-['Product_Sans:Bold',sans-serif] text-[#111]">{faq.question}</span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0048ff] flex items-center justify-center">
                  <div className="relative w-4 h-4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p31021500} stroke="white" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-[rgba(17,17,17,0.1)]">
                    <p className="text-[18px] leading-[28px] text-[rgba(17,17,17,0.7)] mt-4 font-['Inter:Regular',sans-serif]">
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
      </div>
    </section>
  );
}