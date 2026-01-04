import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AssetImage } from './AssetImage';

const testimonials = [
  {
    quote: "Absolutely blown away by how fast it was to change my entire online presence. So many unwanted social posts that are now removed. Even my clients are super impressed.",
    name: "Joey Sendz",
    role: "Founder of Instant Press Co",
    avatar: "/assets/avatar-joey-sendz.png"
  },
  {
    quote: "THIS is the service for founders who understand the unfair competitive strategies that come with being in the right industry. Since working with these guys, I've outranked everyone.",
    name: "Deno Borghi",
    role: "President @ Garage Cowboy",
    avatar: "/assets/avatar-deno-borghi.png"
  },
  {
    quote: "These guys are incredible. All of my negative reviews from Google were removed. Whether it was from a bot attack or a hate-fueled customer, it was all GONE.",
    name: "Archer Wolfe",
    role: "Serial Entrepreneur",
    avatar: "/assets/avatar-archer-wolfe.png"
  },
  {
    quote: "One of the biggest benefits of using 2nd Impression has been time saved. My clients need to be able to quickly open the right doors amd these guys made that possible.",
    name: "Jonathan Pesaitis",
    role: "Co-Founder @ Tenxent",
    avatar: "/assets/avatar-jonathan-pesaitis.png"
  },
  {
    quote: "They removed unwanted articles when you would Google my name. This helped because those links were dead! 2nd Impression got rid of them, making room for exactly what I wanted to place.",
    name: "Sarah Austin",
    role: "Entrepreneur & Investor",
    avatar: "/assets/avatar-sarah-austin.png"
  },
  {
    quote: "Within 90 days, these guys helped me acquire my legacy verification through the GKP. Without using their service, I'd still be stuck at scaling and wouldn't have been able to outrank my competition.",
    name: "Emilie Raffo",
    role: "Founder & Entrepreneur",
    avatar: "/assets/avatar-emilie-raffo.png"
  },
];

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar?: string }) {
  return (
    <article className="bg-white flex flex-col justify-between gap-6 min-h-[300px] h-full items-start p-8 rounded-3xl shadow-multi border border-[rgba(17,17,17,0.1)] w-[300px] sm:w-[400px] lg:w-[636px]">
      <blockquote className="flex flex-col items-start w-full">
        {/* Quote - Inter 18px italic */}
        <p className="font-inter italic text-[18px] leading-[28px] text-black">"{quote}"</p>
      </blockquote>
      
      <footer className="flex items-center gap-4 w-full mt-auto">
        {avatar && (
          <div className="rounded-full overflow-hidden w-16 h-16 shrink-0">
            <AssetImage src={avatar} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}
        <div className="flex flex-col">
          {/* Name - Inter Bold */}
          <cite className="font-inter font-bold text-[18px] text-black not-italic">{name}</cite>
          {/* Role - Inter 14px */}
          <span className="font-inter text-[14px] text-[rgba(17,17,17,0.7)]">{role}</span>
        </div>
      </footer>
    </article>
  );
}

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
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
    <section className="bg-primary py-24 overflow-hidden w-full" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="max-w-1296 mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Label - Inter Semi_Bold 16px uppercase tracking 3.2px */}
          <p className="font-inter font-semibold text-white text-[16px] tracking-wide uppercase mb-4">
            TESTIMONIALS
          </p>
          {/* Heading - RocaOne-Bl white bold centered */}
          <h2 id="testimonials-heading" className="font-rocaone-bl text-white text-[48px] lg:text-[52px] leading-[1.1] tracking-tighter max-w-[800px]">
            What our members say about us...
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8" role="group" aria-label="Testimonial navigation">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              aria-label="View previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" aria-hidden="true" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              aria-label="View next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-label="Client testimonials carousel"
          aria-live="polite"
        >
          <div 
            className="flex gap-8 transition-transform duration-700 ease-in-out items-stretch"
            style={{
              transform: `translateX(-${currentIndex * (currentIndex === 0 ? 0 : 636 + 32)}px)`
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="shrink-0 flex self-stretch">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
