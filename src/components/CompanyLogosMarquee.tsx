interface Logo {
  src: string;
  alt: string;
}

interface CompanyLogosMarqueeProps {
  logos: Logo[];
  direction?: 'left' | 'right';
}

export function CompanyLogosMarquee({ logos, direction = 'left' }: CompanyLogosMarqueeProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`marquee-track flex items-center gap-16 w-max ${
          direction === 'right' ? 'flex-row-reverse' : ''
        }`}
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex items-center justify-center px-4 h-12 shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
