import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  className?: string;
  children: React.ReactNode;
}

export function Carousel({
  opts,
  plugins,
  className,
  children,
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    { loop: true, align: 'start', ...opts },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
      }}
    >
      <div
        className={className}
        role="region"
        aria-roledescription="carousel"
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

interface CarouselContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CarouselContent({ className, children }: CarouselContentProps) {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" tabIndex={0}>
      <div className={`flex ${className || ''}`}>{children}</div>
    </div>
  );
}

interface CarouselItemProps {
  className?: string;
  children: React.ReactNode;
}

export function CarouselItem({ className, children }: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 ${className || 'basis-full md:basis-1/2 lg:basis-1/3'}`}
    >
      {children}
    </div>
  );
}

interface CarouselPrevProps {
  className?: string;
  children?: React.ReactNode;
}

export function CarouselPrev({ className, children }: CarouselPrevProps) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={className}
      aria-label="Previous slide"
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      )}
    </button>
  );
}

interface CarouselNextProps {
  className?: string;
  children?: React.ReactNode;
}

export function CarouselNext({ className, children }: CarouselNextProps) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={className}
      aria-label="Next slide"
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}

interface CarouselDotsProps {
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

export function CarouselDots({
  className,
  dotClassName,
  activeDotClassName,
}: CarouselDotsProps) {
  const { api, selectedIndex, scrollSnaps } = useCarousel();

  return (
    <div className={`flex justify-center gap-2 ${className || ''}`}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          className={`${dotClassName || 'w-2 h-2 rounded-full bg-white/50'} ${
            index === selectedIndex ? activeDotClassName || 'bg-white' : ''
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
