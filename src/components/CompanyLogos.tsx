import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { AssetImage } from './AssetImage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const allLogos = [
  { name: 'Google', src: '/assets/Company Logos/Google.svg', height: 'h-8' },
  { name: 'Facebook', src: '/assets/Company Logos/Facebook.svg', height: 'h-8' },
  { name: 'Instagram', src: '/assets/Company Logos/Instagram.svg', height: 'h-8' },
  { name: 'LinkedIn', src: '/assets/Company Logos/LinkedIn.svg', height: 'h-8' },
  { name: 'Reddit', src: '/assets/Company Logos/Reddit.svg', height: 'h-8' },
  { name: 'Snapchat', src: '/assets/Company Logos/Snapchat.png', height: 'h-8' },
  { name: 'Telegram', src: '/assets/Company Logos/Telegram.svg', height: 'h-8' },
  { name: 'Threads', src: '/assets/Company Logos/Threads.svg', height: 'h-8' },
  { name: 'TikTok', src: '/assets/Company Logos/TikTok.svg', height: 'h-8' },
  { name: 'X', src: '/assets/Company Logos/X.png', height: 'h-8' },
  { name: 'YouTube', src: '/assets/Company Logos/YouTube.svg', height: 'h-8' },
  { name: 'Airbnb', src: '/assets/Company Logos/Airbnb.svg', height: 'h-8' },
  { name: 'GooglePlus', src: '/assets/Company Logos/GooglePlus.svg', height: 'h-8' },
  { name: 'Instagram Wordmark', src: '/assets/Company Logos/Instagram_wordmark.svg', height: 'h-8' },
  { name: 'Pinterest', src: '/assets/Company Logos/Pinterest.svg', height: 'h-8' },
  { name: 'Trustpilot', src: '/assets/Company Logos/Trustpilot.svg', height: 'h-8' },
  { name: 'Yelp', src: '/assets/Company Logos/Yelp.svg', height: 'h-8' },
  { name: '1st Impression', src: '/assets/Company Logos/1stimpression.svg', height: 'h-8' },
  { name: 'Do For You Heroes', src: '/assets/Company Logos/do-for-you-heroes.png', height: 'h-8' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function CompanyLogos() {
  const [row1, setRow1] = useState(allLogos);
  const [row2, setRow2] = useState(allLogos);

  useEffect(() => {
    setRow1(shuffleArray(allLogos));
    setRow2(shuffleArray(allLogos));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 6500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  } as const;

  const settingsReverse = { ...settings, rtl: true } as const;

  return (
    <section className="w-full py-16 relative overflow-hidden bg-[#fffff5] flex flex-col gap-8">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-gradient-to-r from-[#fffff5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-gradient-to-l from-[#fffff5] to-transparent z-10 pointer-events-none" />

      <div className="text-center">
        <p className="font-['Inter',sans-serif] font-semibold text-[16px] tracking-[3.2px] uppercase text-[#323232]">
          platforms we work with
        </p>
      </div>

      {/* Row 1 - Left to Right */}
      <Slider {...settings} className="logo-slider">
        {row1.map((logo, idx) => (
          <div key={`row1-${idx}`} className="outline-none">
            <div className="flex items-center justify-center px-8 h-12">
              <AssetImage
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`${logo.height} w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 mx-auto`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Row 2 - Right to Left */}
      <Slider {...settingsReverse} className="logo-slider">
        {row2.map((logo, idx) => (
          <div key={`row2-${idx}`} className="outline-none">
            <div className="flex items-center justify-center px-8 h-12">
              <AssetImage
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`${logo.height} w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 mx-auto`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .logo-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .logo-slider .slick-slide {
          padding: 0 10px;
        }
      `}</style>
    </section>
  );
}

