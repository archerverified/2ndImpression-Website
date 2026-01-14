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

    let playRequested = false;
    let shouldPlay = false;

    // Optimize video loading and playback
    const playVideo = () => {
      if (playRequested || !shouldPlay) return;
      playRequested = true;
      
      // Use requestAnimationFrame for smoother playback start
      requestAnimationFrame(() => {
        if (video.readyState >= 2) {
          video.play().catch(() => {
            playRequested = false;
          });
        } else {
          playRequested = false;
        }
      });
    };

    const handleCanPlay = () => {
      // Video is ready to play
      if (shouldPlay) {
        playVideo();
      }
    };

    const handlePlaying = () => {
      playRequested = false;
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('playing', handlePlaying);

    // Preload video when it's close to viewport (200px before)
    const preloadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.readyState === 0) {
            // Start loading video when near viewport
            video.preload = 'metadata';
            video.load();
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '200px'
      }
    );

    // Play/pause observer when video enters viewport
    const playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            shouldPlay = true;
            // Play if video is ready
            if (video.readyState >= 2) {
              playVideo();
            }
          } else {
            shouldPlay = false;
            playRequested = false;
            video.pause();
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    preloadObserver.observe(video);
    playObserver.observe(video);

    return () => {
      preloadObserver.disconnect();
      playObserver.disconnect();
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('playing', handlePlaying);
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
        preload="none"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload noplaybackrate"
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        style={{
          willChange: 'contents',
          transform: 'translateZ(0)', // Force GPU acceleration
          backfaceVisibility: 'hidden',
        }}
        onError={(e) => {
          // Silently handle errors
          console.warn('Video failed to load:', src);
        }}
      />
    </div>
  );
}
