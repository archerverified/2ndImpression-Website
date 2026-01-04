import { useState, useEffect } from "react";
import Slider from "react-slick";
import { AssetImage } from "./AssetImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All logos - using correct paths from Company Logos subdirectory
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
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CompanyLogos() {
  const [shuffledLogos1, setShuffledLogos1] = useState(allLogos);
  const [shuffledLogos2, setShuffledLogos2] = useState(allLogos);

  useEffect(() => {
    setShuffledLogos1(shuffleArray(allLogos));
    setShuffledLogos2(shuffleArray(allLogos));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const settingsReverse = {
    ...settings,
    rtl: true,
  };

  return (
    <div className="w-full py-16 relative overflow-hidden bg-cream flex flex-col gap-8">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-linear-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-linear-to-l from-cream to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Left to Right (default) */}
      <Slider {...settings} className="logo-slider">
        {shuffledLogos1.map((logo, idx) => (
          <div key={idx} className="outline-none">
            <div className="flex items-center justify-center px-8 h-12">
              <AssetImage
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`${logo.height || 'h-8'} w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 mx-auto`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Row 2 - Right to Left */}
      <Slider {...settingsReverse} className="logo-slider">
        {shuffledLogos2.map((logo, idx) => (
          <div key={idx} className="outline-none">
            <div className="flex items-center justify-center px-8 h-12">
              <AssetImage
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`${logo.height || 'h-8'} w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 mx-auto`}
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
    </div>
  );
}
