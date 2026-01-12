import { Video } from './Video';
import { VIDEO } from '../data/videoAssets';

// Verification icon component (blue checkmark badge)
function VerifiedBadge() {
  return (
    <img
      src="/assets/checkmark.png"
      alt="Verified"
      className="w-[24px] h-[24px] flex-shrink-0"
    />
  );
}

export function ValueProposition() {
  return (
    <section id="pricing" className="py-24 bg-[#fffff5]">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video Mockups (swapped from right) */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Main mockup container */}
            <div className="bg-white rounded-[24px] shadow-[0px_1px_3px_0px_rgba(161,161,161,0.5),0px_6px_6px_0px_rgba(161,161,161,0.5),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)] overflow-hidden relative">
              <Video
                src={VIDEO.lfmr.iphoneMockups}
                className="w-full max-w-[500px] h-auto"
              />
              <div className="absolute border border-[rgba(17,17,17,0.1)] inset-0 rounded-[24px] pointer-events-none" />
            </div>
          </div>

          {/* Right: Content (swapped from left) */}
          <div className="order-1 lg:order-2">
            <p className="text-[16px] tracking-[3.2px] uppercase text-[#0048ff] mb-6 font-semibold font-['Inter',sans-serif]">
              LIMITED-TIME ONLY
            </p>
            <h2 className="text-[48px] lg:text-[52px] leading-[1.1] lg:leading-[52px] tracking-[-2px] text-[#111] mb-8">
              <span className="font-['Product_Sans_Light',sans-serif]">Pay Less Now, or</span>
              <br />
              <span className="font-['RocaOne-Bl',sans-serif]">Pay More Later</span>
            </h2>
            <p className="text-[#0048ff] text-[24px] leading-[27px] font-['Product_Sans_Black',sans-serif] font-black mb-10">
              BUY 4 AND GET 1 FREE ON REVIEW REMOVALS
            </p>

            <div className="flex flex-col gap-[24px] mb-10">
              <div className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[#2b2b2b] text-[24px] leading-[27px] font-['Product_Sans_Medium',sans-serif] font-medium">
                  Official turnaround is 0-7 days. Most cases gone in 24 hours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[#2b2b2b] text-[24px] leading-[27px] font-['Product_Sans_Medium',sans-serif] font-medium">
                  Increase your Google Business rating overnight by over 20%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[#2b2b2b] text-[24px] leading-[27px] font-['Product_Sans_Medium',sans-serif] font-medium">
                  No upfront payment for eligible cases
                </p>
              </div>
            </div>

            {/* CTA Button with Badge */}
            <div className="flex items-center gap-3">
              {/* Badge next to button */}
              <Video
                src={VIDEO.lfmr.badge}
                containerClassName="w-[64px] h-[64px]"
                className="w-full h-full object-contain"
              />
              <a
                href="https://forms.gle/66XJUJFUdnqyGZsd7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#0048ff] h-[64px] w-[185px] items-center justify-center overflow-clip rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
              >
                <span className="font-['Product_Sans',sans-serif] font-bold text-[20px] leading-[30px] text-center text-nowrap text-white">
                  Start Today
                </span>
              </a>
            </div>
            {/* Google limitation line with mixed weights */}
            <p className="mt-[24px] text-[#2b2b2b] text-[13px] leading-[16px] tracking-[3.2px] uppercase">
              <span className="font-['Product_Sans',sans-serif]">LIMITED TO GOOGLE REVIEWS THAT HAVE </span>
              <span className="font-['Product_Sans_Black',sans-serif] font-black">IMAGES</span>
              <span className="font-['Product_Sans',sans-serif]"> OR </span>
              <span className="font-['Product_Sans_Black',sans-serif] font-black">VIDEOS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
