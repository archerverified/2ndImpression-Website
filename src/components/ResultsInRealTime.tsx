// Case study images for the carousel - Top row (scrolls left)
const topRowImages = [
  { src: '/assets/case-1.png', alt: 'Case study 1' },
  { src: '/assets/case-2.png', alt: 'Case study 2' },
  { src: '/assets/case-3.png', alt: 'Case study 3' },
  { src: '/assets/case-4.png', alt: 'Case study 4' },
  { src: '/assets/case-5.png', alt: 'Case study 5' },
];

// Bottom row (scrolls right)
const bottomRowImages = [
  { src: '/assets/case-6.png', alt: 'Case study 6' },
  { src: '/assets/case-7.png', alt: 'Case study 7' },
  { src: '/assets/case-8.png', alt: 'Case study 8' },
];

function CarouselCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-[540px] h-[540px] p-[22px]">
      <div className="w-full h-full bg-white rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1),0px_12px_40px_0px_rgba(0,0,0,0.08)] overflow-hidden p-3 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-[436px] h-[436px] object-contain rounded-[16px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ScrollingRow({ images, direction }: { images: { src: string; alt: string }[]; direction: 'left' | 'right' }) {
  // Duplicate images for seamless loop (3x for smooth infinite scroll)
  const duplicatedImages = [...images, ...images, ...images];
  
  return (
    <div 
      className="relative h-[540px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)',
      }}
    >
      <div 
        className={`flex ${direction === 'left' ? 'case-scroll-left' : 'case-scroll-right'}`}
        style={{ width: 'max-content' }}
      >
        {duplicatedImages.map((img, index) => (
          <CarouselCard key={`${img.src}-${index}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export function ResultsInRealTime() {
  return (
    <section className="py-16 lg:py-[100px] bg-[#fffff5] overflow-hidden" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="max-w-[1296px] mx-auto px-6 lg:px-[72px]">
        {/* Header */}
        <div className="text-center mb-[48px]">
          <p className="font-['Inter',sans-serif] font-semibold text-[#0048ff] text-[16px] tracking-[3.2px] uppercase mb-4">
            CASE STUDIES
          </p>
          <h2 id="case-studies-heading" className="font-['RocaOne-Bl',sans-serif] text-[52px] text-black tracking-[-2px] leading-[52px]">
            Results in Real-Time
          </h2>
        </div>
      </div>

      {/* Full-width carousel container */}
      <div className="w-full">
        {/* Top row - scrolls left */}
        <ScrollingRow images={topRowImages} direction="left" />
        
        {/* Bottom row - scrolls right */}
        <ScrollingRow images={bottomRowImages} direction="right" />
      </div>

      {/* CTA Button */}
      <div className="max-w-[1296px] mx-auto px-6 lg:px-[72px]">
        <div className="mt-[48px] text-center">
          <a
            href="https://forms.gle/66XJUJFUdnqyGZsd7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#0048ff] h-[64px] w-[188px] items-center justify-center rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
          >
            <span className="font-['Product_Sans',sans-serif] font-bold text-[20px] leading-[30px] text-white">
              Get Started
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
