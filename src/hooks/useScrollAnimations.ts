import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, skip animations
    if (prefersReducedMotion) {
      // Ensure all elements are visible without animation
      document.querySelectorAll('[data-animate]').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    // Store all ScrollTrigger instances for cleanup
    const triggers: ScrollTrigger[] = [];

    // Helper function to add gsap-animated class after animation
    const markAsAnimated = (element: Element) => {
      element.classList.add('gsap-animated');
    };

    // Helper function to create scroll-triggered animations
    const createAnimation = (
      selector: string,
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars,
      triggerOptions?: Partial<ScrollTrigger.Vars>
    ) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const tween = gsap.fromTo(element, fromVars, {
          ...toVars,
          onComplete: () => markAsAnimated(element),
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none',
            once: true,
            ...triggerOptions,
          },
        });
        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      });
    };

    // Helper for staggered animations
    const createStaggerAnimation = (
      selector: string,
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars,
      stagger: number = 0.1,
      triggerSelector?: string
    ) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;

      const triggerElement = triggerSelector
        ? document.querySelector(triggerSelector)
        : elements[0];

      if (!triggerElement) return;

      const tween = gsap.fromTo(elements, fromVars, {
        ...toVars,
        stagger,
        onComplete: () => {
          elements.forEach((el) => markAsAnimated(el));
        },
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    };

    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      // ==========================================
      // HERO SECTION - Scale + Fade + Rotation
      // ==========================================
      createAnimation(
        '[data-animate="hero-video"]',
        {
          opacity: 0,
          scale: 0.8,
          rotate: -3,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: 'power2.out',
        }
      );

      createAnimation(
        '[data-animate="hero-content"]',
        {
          opacity: 0,
          x: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );

      // ==========================================
      // COMPANY LOGOS - Staggered Slide Up + Scale
      // ==========================================
      createStaggerAnimation(
        '[data-animate="logo-item"]',
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.08,
        '[data-animate="logos-section"]'
      );

      // ==========================================
      // TESTIMONIALS - Rotate + Scale
      // ==========================================
      createAnimation(
        '[data-animate="testimonials-section"]',
        {
          opacity: 0,
          scale: 0.9,
          rotate: -2,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: 'power2.out',
        }
      );

      // ==========================================
      // RESULTS IN REAL TIME - Dramatic Scale
      // ==========================================
      createAnimation(
        '[data-animate="results-header"]',
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );

      createAnimation(
        '[data-animate="results-container"]',
        {
          opacity: 0,
          scale: 0.7,
          rotate: 2,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );

      // ==========================================
      // FAQ SECTION - Accordion Slide
      // ==========================================
      createAnimation(
        '[data-animate="faq-header"]',
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );

      createStaggerAnimation(
        '[data-animate="faq-item"]',
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
          x: -20,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.1,
        '[data-animate="faq-container"]'
      );

      // ==========================================
      // CTA SECTION - Bounce Scale
      // ==========================================
      createAnimation(
        '[data-animate="cta-container"]',
        {
          opacity: 0,
          scale: 0.85,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
        }
      );

      // ==========================================
      // FOOTER - Fade In
      // ==========================================
      createAnimation(
        '[data-animate="footer"]',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(initTimeout);
      triggers.forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
