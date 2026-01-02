import { useEffect, useState } from 'react';
import imgImage3773 from "figma:asset/7df38433a483d1db7a6ab37265df7379fb9a3ac6.png";
import imgImage3772 from "figma:asset/3a6d4f87df4d447bd98bf62392271a30009e0541.png";
import imgImage3771 from "figma:asset/04232f816fd756ab5cf50d7a2db043280aeb8651.png";
import imgFrame47844Png from "figma:asset/03837e829a4e86bd84f28f255fb46fbbf3fb3791.png";
import imgImage3736 from "figma:asset/bc7ea67f4deae6f199fae880caf73c60f78de075.png";
import imgImage3735 from "figma:asset/6aeb7eb9e0ca334cd859a6732540929c1f67ad8d.png";
import imgGtm3Home from "figma:asset/12f7c19f1f1c6b28d4d243ce7a721e9e41e16123.png";
import imgImage3737 from "figma:asset/32d9dc24e9e4e77d00b68aab5541b05c675b0685.png";
import imgImage3742 from "figma:asset/0f473d9a1fdba42f12a26ab5dc24659dd5e2a4ef.png";
import imgImage3770 from "figma:asset/78c3357786c2ec4c9d8f7e0f5c661cef85bc049e.png";

const firstRowImages = [
  imgImage3773,
  imgImage3772,
  imgImage3771,
  imgFrame47844Png,
];

const secondRowImages = [
  imgImage3737,
  imgImage3742,
  imgImage3770,
];

export default function AnimatedPeople() {
  const [key, setKey] = useState(0);

  // Force re-render to ensure smooth animation
  useEffect(() => {
    const timer = setTimeout(() => setKey(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#fffff5] py-[100px]" key={key}>
      <div className="max-w-[1296px] mx-auto px-[72px]">
        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center text-center mb-[48px]">
          <p className="text-[#0048ff] text-[16px] tracking-[3.2px] uppercase font-semibold font-['Inter:Semi_Bold',sans-serif]">
            CASE STUDIES
          </p>
          <h2 className="text-black text-[52px] leading-[52px] tracking-[-2px] font-['RocaOne-Bl:Regular',sans-serif]">
            Results in Real-Time
          </h2>
        </div>

        {/* Image Carousels */}
        <div className="flex flex-col gap-0">
          {/* First Row - Scrolls Right to Left */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-0 items-center animate-people-scroll-right">
              {[...firstRowImages, ...firstRowImages, ...firstRowImages].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-[540px] h-[540px]">
                  <img 
                    src={img} 
                    alt={`Member ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolls Left to Right */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-0 items-center animate-people-scroll-left">
              {[...secondRowImages, ...secondRowImages, ...secondRowImages, ...secondRowImages].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-[540px] h-[540px]">
                  <img 
                    src={img} 
                    alt={`Member ${idx + 1}`} 
                    className="w-full h-full object-cover"
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
      `}</style>
    </section>
  );
}