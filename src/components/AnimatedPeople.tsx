import { useEffect, useState } from 'react';
import { AssetImage } from './AssetImage';

const firstRowImages = [
  '/assets/case-1.png',
  '/assets/case-2.png',
  '/assets/case-3.png',
  '/assets/case-4.png',
];

const secondRowImages = [
  '/assets/case-5.png',
  '/assets/case-6.png',
  '/assets/case-7.png',
  '/assets/case-8.png',
];

export default function AnimatedPeople() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setKey(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-cream py-xl lg:py-[100px]" id="members" key={key} aria-labelledby="members-heading">
      <div className="max-w-1296 mx-auto px-md lg:px-[72px]">
        {/* Header */}
        <div className="flex flex-col gap-md lg:gap-lg items-center text-center mb-xl">
          {/* Label - Inter Semi_Bold 16px uppercase tracking 3.2px */}
          <p className="font-inter font-semibold text-primary text-[14px] lg:text-[16px] tracking-wide uppercase">
            CASE STUDIES
          </p>
          {/* Heading - RocaOne-Bl 48px tracking -2px */}
          <h2 id="members-heading" className="font-rocaone-bl text-black text-[36px] lg:text-[48px] leading-[1.1] tracking-tighter">
            Results in Real-Time
          </h2>
        </div>

        {/* Image Carousels */}
        <div className="flex flex-col gap-0 rounded-24 overflow-hidden" role="region" aria-label="Case studies gallery">
          {/* First Row - Scrolls Right to Left */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-0 items-center animate-people-scroll-right">
              {[...firstRowImages, ...firstRowImages, ...firstRowImages].map((img, idx) => (
                <div key={idx} className="shrink-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[540px] lg:h-[540px]">
                  <AssetImage 
                    src={img} 
                    alt="Case study example" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolls Left to Right */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-0 items-center animate-people-scroll-left">
              {[...secondRowImages, ...secondRowImages, ...secondRowImages, ...secondRowImages].map((img, idx) => (
                <div key={idx} className="shrink-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[540px] lg:h-[540px]">
                  <AssetImage 
                    src={img} 
                    alt="Case study example" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes people-scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes people-scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-people-scroll-right {
          animation: people-scroll-right 45s linear infinite;
        }
        
        .animate-people-scroll-left {
          animation: people-scroll-left 50s linear infinite;
        }
        
        .animate-people-scroll-right:hover,
        .animate-people-scroll-left:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-people-scroll-right,
          .animate-people-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
