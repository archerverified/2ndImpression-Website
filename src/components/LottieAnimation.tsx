import { useEffect, useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieAnimationProps {
  src: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  src,
  className,
  containerClassName,
  ariaLabel,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Load the JSON animation data
  useEffect(() => {
    fetch(src)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Failed to load Lottie animation:', error));
  }, [src]);

  // Intersection observer for play/pause based on visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Control playback based on visibility
  useEffect(() => {
    if (!lottieRef.current) return;

    if (isVisible && autoplay) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isVisible, autoplay]);

  if (!animationData) {
    // Return empty placeholder while loading
    return <div className={containerClassName} ref={containerRef} />;
  }

  return (
    <div className={containerClassName} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={false}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}
