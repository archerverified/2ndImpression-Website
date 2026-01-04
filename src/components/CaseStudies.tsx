import { motion } from 'framer-motion';
import { AssetImage } from './AssetImage';
import './CaseStudies.css';

// Row 1 images - scrolls left
const topRowImages = [
  { image: '/assets/case-1.png', alt: 'Case study 1' },
  { image: '/assets/case-2.png', alt: 'Case study 2' },
  { image: '/assets/case-3.png', alt: 'Case study 3' },
  { image: '/assets/case-4.png', alt: 'Case study 4' },
  { image: '/assets/case-5.png', alt: 'Case study 5' },
];

// Row 2 images - scrolls right
const bottomRowImages = [
  { image: '/assets/case-6.png', alt: 'Case study 6' },
  { image: '/assets/case-7.png', alt: 'Case study 7' },
  { image: '/assets/case-8.png', alt: 'Case study 8' },
];

// Before/After card component - Combined container per Figma design
function BeforeAfterCard() {
  return (
    <div className="shrink-0 w-[560px] lg:w-[720px] aspect-[2/1] bg-white rounded-16 overflow-hidden shadow-card flex">
      {/* Before side */}
      <div className="flex-1 relative flex flex-col p-4">
        <span className="absolute top-4 left-4 font-rocaone-bl text-[18px] lg:text-[22px] text-black z-10 bg-white/90 px-2 py-1 rounded-md">
          BEFORE
        </span>
        <div className="flex-1 overflow-hidden rounded-md">
          <AssetImage
            src="/assets/case-before.png"
            alt="Before reputation management"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-[2px] bg-[rgba(17,17,17,0.1)]" aria-hidden="true" />
      
      {/* After side */}
      <div className="flex-1 relative flex flex-col p-4">
        <span className="absolute top-4 right-4 font-rocaone-bl text-[18px] lg:text-[22px] text-primary z-10 bg-white/90 px-2 py-1 rounded-md">
          AFTER
        </span>
        <div className="flex-1 overflow-hidden rounded-md">
          <AssetImage
            src="/assets/case-after.png"
            alt="After reputation management"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  // Duplicate for seamless scroll
  const topRowDuplicated = [...topRowImages, ...topRowImages, ...topRowImages];
  const bottomRowDuplicated = [...bottomRowImages, ...bottomRowImages, ...bottomRowImages, ...bottomRowImages];

  return (
    <section className="py-xl lg:py-[100px] bg-cream overflow-hidden" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="max-w-1296 mx-auto px-md lg:px-[72px] mb-xl">
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-inter font-semibold text-primary text-[14px] lg:text-[16px] tracking-wide uppercase mb-md">
            CASE STUDIES
          </p>
          <h2 id="case-studies-heading" className="font-rocaone-bl text-[36px] lg:text-[52px] text-black tracking-[-2px] leading-[1.1]">
            Results in Real-Time
          </h2>
        </motion.div>
      </div>

      {/* Case Studies Carousel - Two rows */}
      <div className="relative" role="region" aria-label="Case study images carousel">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] lg:w-[120px] bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] lg:w-[120px] bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        {/* Top row - scrolls left */}
        <div className="overflow-hidden mb-lg">
          <div className="case-scroll-left flex gap-lg">
            {topRowDuplicated.map((study, index) => (
              <div
                key={`top-${index}`}
                className="shrink-0 w-[280px] lg:w-[360px] aspect-square rounded-16 overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 bg-white flex items-center justify-center p-4"
              >
                <AssetImage
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Include Before/After card */}
            <BeforeAfterCard />
          </div>
        </div>

        {/* Bottom row - scrolls right */}
        <div className="overflow-hidden">
          <div className="case-scroll-right flex gap-lg">
            {bottomRowDuplicated.map((study, index) => (
              <div
                key={`bottom-${index}`}
                className="shrink-0 w-[280px] lg:w-[360px] aspect-square rounded-16 overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 bg-white flex items-center justify-center p-4"
              >
                <AssetImage
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
