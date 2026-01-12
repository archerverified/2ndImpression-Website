import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, useCarousel } from './ui/Carousel';

const testimonials = [
  {
    quote: "Absolutely blown away by how fast it was to change my entire online presence. So many unwanted social posts that are now removed. Even my clients are super impressed.",
    name: "Joey Send",
    role: "Founder @ Instant Press Co",
    avatar: '/assets/avatar-joey-sendz.png'
  },
  {
    quote: "THIS is the service for founders who understand the unfair competitive strategies that come with being in the right industry. Since working with these guys, I've outranked everyone.",
    name: "Deno Borghi",
    role: "President @ Garage Cowboy",
    avatar: '/assets/avatar-deno-borghi.png'
  },
  {
    quote: "These guys are incredible. All of my negative reviews from Google were removed. Whether it was from a bot attack or a hate-fueled customer, it was all GONE.",
    name: "Archer Wolfe",
    role: "Serial Entrepreneur",
    avatar: '/assets/avatar-archer-wolfe.png'
  },
  {
    quote: "One of the biggest benefits of using 2nd Impression has been time saved. My clients need to be able to quickly open the right doors amd these guys made that possible.",
    name: "Jonathan Pesaitis",
    role: "Co-Founder @ Tenxent",
    avatar: '/assets/avatar-jonathan-pesaitis.png'
  },
  {
    quote: "I was able to remove unwanted articles when you would Google my name. This helped because those links were dead! 2nd Imp. got rid of them, making room for exactly what I wanted to place.",
    name: "Sarah Austin",
    role: "Entrepreneur & Investor",
    avatar: '/assets/avatar-sarah-austin.png'
  },
  {
    quote: "In 90 days, these guys helped me acquire legacy verification. Without using their service, I'd still be stuck at scaling and wouldn't have been able to shine brighter than my competition.",
    name: "Emilie Raffo",
    role: "Web3 Founder",
    avatar: '/assets/avatar-emilie-raffo.png'
  },
];

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar?: string }) {
  return (
    <div className="bg-white flex flex-col h-[351px] items-start p-[32px] rounded-[24px] shadow-[0px_2px_4px_0px_rgba(117,117,117,0.1),0px_7px_7px_0px_rgba(117,117,117,0.09),0px_15px_9px_0px_rgba(117,117,117,0.05),0px_27px_11px_0px_rgba(117,117,117,0.01)] border border-[rgba(17,17,17,0.1)]">
      {/* Quote region - fixed height so divider aligns across all cards */}
      <div className="flex flex-col items-start w-full h-[180px] overflow-hidden">
        <p className="text-[24px] leading-[36px] text-black font-['Product_Sans',sans-serif]">"{quote}"</p>
      </div>
      
      {/* Dashed divider - always at same position */}
      <div className="h-[2px] w-full border-t border-dashed border-[rgba(17,17,17,0.2)] my-[16px]" />
      
      {/* Footer: avatar + name/role */}
      <div className="flex items-center gap-[12px] w-full">
        {avatar && (
          <div className="rounded-full overflow-hidden w-[64px] h-[64px] flex-shrink-0">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-[20px] leading-[30px] text-[#111] font-['Product_Sans',sans-serif]">{name}</p>
          <p className="text-[14px] leading-[21px] text-[rgba(17,17,17,0.7)] font-['Inter',sans-serif]">{role}</p>
        </div>
      </div>
    </div>
  );
}

function AutoplayCarousel({ children }: { children: React.ReactNode }) {
  const { api } = useCarousel();
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  const handleFocusIn = useCallback(() => setIsPaused(true), []);
  const handleFocusOut = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusIn}
      onBlurCapture={handleFocusOut}
    >
      {children}
    </div>
  );
}

function CarouselControls() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="flex gap-2">
      <button
        onClick={scrollPrev}
        className="w-[50px] h-[50px] bg-white rounded-[15px] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0048ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="w-[50px] h-[50px] bg-white rounded-[15px] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0048ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default function AnimatedTestimonials() {
  return (
    <section id="testimonials" className="bg-[#0048ff] py-[100px] overflow-hidden">
      <div className="max-w-[1296px] mx-auto px-6 lg:px-[72px]">
        <Carousel opts={{ loop: true, align: 'start' }}>
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-[48px] gap-6">
            <div className="flex flex-col gap-[24px]">
              <p className="text-white text-[16px] tracking-[3.2px] uppercase font-semibold font-['Inter',sans-serif]">
                TESTIMONIALS
              </p>
              <h2 className="text-white text-[40px] lg:text-[52px] leading-[1.1] lg:leading-[52px] tracking-[-2px] font-['RocaOne-Rg',sans-serif]">
                What our clients say about us...
              </h2>
            </div>
            
            {/* Navigation Buttons */}
            <CarouselControls />
          </div>

          {/* Testimonials Carousel */}
          <AutoplayCarousel>
            <CarouselContent className="-ml-[24px]">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-[424px] lg:basis-[660px] pl-[24px]"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </AutoplayCarousel>

          {/* See Results Button */}
          <div className="mt-12 text-center">
            <a
              href="#case-studies"
              className="inline-flex bg-white h-[64px] w-[166px] items-center justify-center rounded-[12px] shadow-lg hover:shadow-xl transition-shadow"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="font-['Product_Sans',sans-serif] font-bold text-[20px] leading-[24px] text-[#0048ff]">
                See Results
              </span>
            </a>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
