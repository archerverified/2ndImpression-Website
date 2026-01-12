import { useEffect } from 'react';

export type ServiceType = 'review' | 'link' | 'post';

interface ServicePopupModalProps {
  service: ServiceType;
  onClose: () => void;
}

interface ServiceContent {
  headline: string;
  subheadline: string;
  benefits: string[];
  ctaLabel: string;
  pricing: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

const serviceContent: Record<ServiceType, ServiceContent> = {
  review: {
    headline: 'Remove Negative Reviews to Significantly Boost your Business',
    subheadline: 'Reviews from Google, Yelp, TrustPilot, and other websites are the make-or-break for getting new customers through the door.',
    benefits: [
      'Most cases resolved in 24 hours',
      'Instantly get ahead of your competitors on every search',
      'Increase your ratings by 2x or more',
      'Pay AFTER it\'s removed (for eligible cases)',
    ],
    ctaLabel: 'Get Started',
    pricing: 'Pricing starts at $80 per review',
    testimonial: {
      quote: 'Archer removed 4 of my negative reviews over the weekend and I jumped from a 4.5 star rating to a 4.7!',
      author: 'Cedric, Owner of EFC',
    },
  },
  link: {
    headline: 'Your first impression on Google is everything when people look you up to do a reference check.',
    subheadline: 'When someone Google\'s your name, are you proud of what pops up?',
    benefits: [
      'Remove 90% of links from any search',
      'Redesign your entire search presence with positive information',
      'Feature in the world\'s top media and build a legacy that lasts a lifetime',
      'Full-service identity makeover in 90 days or it\'s FREE',
    ],
    ctaLabel: 'Get Started',
    pricing: 'Pricing starts at $299 per link',
  },
  post: {
    headline: 'Eliminate the threat where it starts by removing the first piece of content people see.',
    subheadline: 'Social media is known for spreading information like wildfires. Remove unwanted posts before it spreads to the rest of the internet.',
    benefits: [
      'Remove posts from any major social media platform',
      '24/7 monitoring with AI and remove content before you wake up',
      'File legal defamation cases to take down the source forever',
    ],
    ctaLabel: 'Get Started',
    pricing: 'Pricing starts at $199 per post',
  },
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#0048ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ServicePopupModal({ service, onClose }: ServicePopupModalProps) {
  const content = serviceContent[service];

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-[24px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-12 border-[3px] border-[rgba(17,17,17,0.1)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2
            id="service-modal-title"
            className="font-['RocaOne-Bl',sans-serif] text-[32px] text-[#0048ff] leading-tight"
          >
            {content.headline}
          </h2>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-8">
          <p className="font-['Product_Sans',sans-serif] text-[18px] text-[rgba(17,17,17,0.7)] leading-[26px]">
            {content.subheadline}
          </p>
        </div>

        {/* Benefits List */}
        <div className="bg-[#f8f8f5] rounded-[16px] p-6 mb-8">
          <ul className="space-y-4">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-['Product_Sans',sans-serif] text-[17px] text-[#111] leading-[24px]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial (if exists) */}
        {content.testimonial && (
          <div className="text-center mb-8 px-4">
            <p className="font-['Product_Sans',sans-serif] text-[16px] text-[rgba(17,17,17,0.8)] leading-[26px] italic mb-2">
              "{content.testimonial.quote}"
            </p>
            <p className="font-['Product_Sans',sans-serif] text-[14px] text-[rgba(17,17,17,0.6)]">
              — {content.testimonial.author}
            </p>
          </div>
        )}

        {/* Free offer for review */}
        {service === 'review' && (
          <div className="text-center mb-6">
            <p className="font-['Product_Sans',sans-serif] font-bold text-[18px] text-[#0048ff] uppercase">
              GET YOUR FIRST REVIEW REMOVED FOR FREE!
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Primary CTA */}
          <a
            href="https://forms.gle/66XJUJFUdnqyGZsd7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0048ff] h-[56px] rounded-[12px] flex items-center justify-center hover:bg-[#0040dd] transition-colors shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)]"
          >
            <span className="font-['Product_Sans',sans-serif] font-bold text-[20px] leading-[30px] text-white">
              {content.ctaLabel}
            </span>
          </a>
        </div>

        {/* Pricing */}
        <div className="text-center">
          <p className="font-['Product_Sans',sans-serif] text-[14px] text-[rgba(17,17,17,0.6)]">
            {content.pricing}
          </p>
        </div>
      </div>
    </div>
  );
}
