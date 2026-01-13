import { Video } from './Video';
import { VIDEO } from '../data/videoAssets';

// Verification icon component (green checkmark)
function VerifiedBadge() {
  return (
    <img
      src="/assets/green checkmark.png"
      alt="Verified"
      className="w-[24px] h-[24px] flex-shrink-0 mt-[2px]"
    />
  );
}

export function MonitoringSection() {
  return (
    <section id="value" className="py-24 bg-[#fffff5]">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* 24/7 Coverage Container */}
            <div className="mb-6">
              <p className="font-['Inter',sans-serif] font-semibold text-[#0048ff] text-[16px] tracking-[3.2px] uppercase">
                24/7 COVERAGE
              </p>
            </div>

            <h2 className="text-[48px] lg:text-[52px] leading-[52px] tracking-[-2px] text-[#111] mb-10">
              <span className="font-['Product_Sans_Light',sans-serif]">Reputation Monitoring &</span>
              <br />
              <span className="font-['RocaOne-Bl',sans-serif]">Insurance Coverage</span>
            </h2>
            <ul className="space-y-[42px] mb-12">
              <li className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[24px] leading-[27px] text-[#2b2b2b] font-['Product_Sans_Medium',sans-serif] font-medium">
                  AI-enabled screening for all business profiles 24/7
                </p>
              </li>
              <li className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[24px] leading-[27px] text-[#2b2b2b] font-['Product_Sans_Medium',sans-serif] font-medium">
                  Automated alerts when someone posts about your business
                </p>
              </li>
              <li className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[24px] leading-[27px] text-[#2b2b2b] font-['Product_Sans_Medium',sans-serif] font-medium">
                  Immediate takedown of any negative content or review
                </p>
              </li>
              <li className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[24px] leading-[27px] text-[#2b2b2b] font-['Product_Sans_Medium',sans-serif] font-medium">
                  24/7 support & prioritized removal management
                </p>
              </li>
              <li className="flex items-start gap-3">
                <VerifiedBadge />
                <p className="text-[24px] leading-[27px] text-[#2b2b2b] font-['Product_Sans_Medium',sans-serif] font-medium">
                  Pay as you go. No contract lock in or misleading terms
                </p>
              </li>
            </ul>
            <div className="flex flex-col items-start">
              <a
                href="https://forms.gle/66XJUJFUdnqyGZsd7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#0048ff] h-[64px] w-[188px] items-center justify-center rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
              >
                <span className="font-['Product_Sans',sans-serif] font-bold text-[17.5px] leading-[30px] text-white">
                  Get Started
                </span>
              </a>
              <p className="mt-[16px] font-['Product_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[3.2px] text-[#111] uppercase">
                NO CONTRACTS. CANCEL ANYTIME
              </p>
            </div>
          </div>

          {/* Right: Phone with iMessage video */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-[55px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1),0px_12px_40px_0px_rgba(0,0,0,0.08)] overflow-hidden p-3">
              <Video
                src={VIDEO.value.iMessage}
                containerClassName="rounded-[45px] overflow-hidden w-[305px] h-[621px]"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
