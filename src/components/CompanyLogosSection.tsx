import { CompanyLogosMarquee } from './CompanyLogosMarquee';
import { LOGOS } from '../data/companyLogos';

// Split logos into two rows for variety
const row1Logos = LOGOS.slice(0, 8);
const row2Logos = LOGOS.slice(8);

export default function CompanyLogosSection() {
  return (
    <div className="w-full py-16 relative overflow-hidden bg-[#fffff5] flex flex-col gap-8">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-gradient-to-r from-[#fffff5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-gradient-to-l from-[#fffff5] to-transparent z-10 pointer-events-none" />

      <div className="text-center">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-gray-500 uppercase tracking-widest">
          Platforms we work with
        </p>
      </div>

      {/* Row 1 - Left to Right */}
      <CompanyLogosMarquee logos={row1Logos} direction="left" />

      {/* Row 2 - Right to Left */}
      <CompanyLogosMarquee logos={row2Logos} direction="right" />
    </div>
  );
}
