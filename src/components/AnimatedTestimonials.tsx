import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgImage3774 from "figma:asset/45f28a080254747cdf44a4d3f9eb5eec17800d59.png";
import imgImage3767 from "figma:asset/ccf7cd8cfe338d10b48f4a3fd7e331043b5f4848.png";
import imgImage3768 from "figma:asset/b23506f6120c3468414b2ac3a4c50dedde0f9cfd.png";
import imgImage3769 from "figma:asset/60cb78b8091ce864c3551c85b37cf55f0f8ea01a.png";
import imgImage3776 from "figma:asset/6ddcbff519841ce9b84d0d9af65d21d51d214243.png";
import imgImage3775 from "figma:asset/0e5330bbba566580612a984732942c8f91c08012.png";

const testimonials = [
  {
    quote: "Absolutely blown away by how fast it was to change my entire online presence. So many unwanted social posts that are now removed. Even my clients are super impressed.",
    name: "Joey Send",
    role: "Founder @ Instant Press Co",
    avatar: imgImage3774
  },
  {
    quote: "THIS is the service for founders who understand the unfair competitive strategies that come with being in the right industry. Since working with these guys, I've outranked everyone.",
    name: "Deno Borghi",
    role: "President @ Garage Cowboy",
    avatar: imgImage3767
  },
  {
    quote: "These guys are incredible. All of my negative reviews from Google were removed. Whether it was from a bot attack or a hate-fueled customer, it was all GONE.",
    name: "Archer Wolfe",
    role: "Serial Entrepreneur",
    avatar: imgImage3768
  },
  {
    quote: "One of the biggest benefits of using 2nd Impression has been time saved. My clients need to be able to quickly open the right doors amd these guys made that possible.",
    name: "Jonathan Pesaitis",
    role: "Co-Founder @ Tenxent",
    avatar: imgImage3769
  },
  {
    quote: "I was able to remove unwanted articles when you would Google my name. This helped because those links were dead! 2nd Imp. got rid of them, making room for exactly what I wanted to place.",
    name: "Sarah Austin",
    role: "Entrepreneur & Investor",
    avatar: imgImage3776
  },
  {
    quote: "In 90 days, these guys helped me acquire legacy verification. Without using their service, I'd still be stuck at scaling and wouldn't have been able to shine brighter than my competition.",
    name: "Emilie Raffo",
    role: "Web3 Founder",
    avatar: imgImage3775
  },
];

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar?: string }) {
  return (
    <div className="bg-white flex flex-col gap-[32px] h-full items-start p-[32px] rounded-[24px] shadow-[0px_2px_4px_0px_rgba(117,117,117,0.1),0px_7px_7px_0px_rgba(117,117,117,0.09),0px_15px_9px_0px_rgba(117,117,117,0.05),0px_27px_11px_0px_rgba(117,117,117,0.01)] min-w-[636px] max-w-[636px] border border-[rgba(17,17,17,0.1)]">
      <div className="flex flex-col items-start w-full">
        <p className="text-[24px] leading-[36px] text-black font-['Product_Sans:Regular',sans-serif]">"{quote}"</p>
      </div>
      
      <div className="h-[2px] w-full border-t border-dashed border-[rgba(17,17,17,0.2)]" />
      
      <div className="flex items-center gap-[12px] w-full">
        {avatar && (
          <div className="rounded-full overflow-hidden w-[64px] h-[64px] flex-shrink-0">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-[20px] leading-[30px] text-[#111] font-['Product_Sans:Bold',sans-serif]">{name}</p>
          <p className="text-[14px] leading-[21px] text-[rgba(17,17,17,0.7)] font-['Inter:Regular',sans-serif]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the testimonials array for infinite scroll effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to middle set when reaching the end
        if (next >= testimonials.length * 2) {
          return testimonials.length;
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return testimonials.length * 2 - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= testimonials.length * 2) {
        return testimonials.length;
      }
      return next;
    });
  };

  return (
    <section className="bg-[#0048ff] py-[100px] overflow-hidden">
      <div className="max-w-[1296px] mx-auto px-[72px]">
        {/* Header */}
        <div className="flex items-end justify-between mb-[48px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-white text-[16px] tracking-[3.2px] uppercase font-semibold font-['Inter:Semi_Bold',sans-serif]">
              TESTIMONIALS
            </p>
            <h2 className="text-white text-[52px] leading-[52px] tracking-[-2px] font-['RocaOne-Bl:Regular',sans-serif]">
              What our clients say about us...
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="w-[50px] h-[50px] bg-white rounded-[15px] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#0048ff]" />
            </button>
            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] bg-white rounded-[15px] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#0048ff]" />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex gap-[24px] transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (636 + 24)}px)`
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}