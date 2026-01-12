import { useEffect, useRef } from 'react';

interface VideoProps {
  src: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
}

export function Video({ src, className, containerClassName, ariaLabel }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={containerClassName}>
      <video
        ref={videoRef}
        className={className}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload noplaybackrate"
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
      />
    </div>
  );
}
