import { useState } from 'react';
import { Video } from './Video';
import { VIDEO } from '../data/videoAssets';
import { ServicePopupModal, type ServiceType } from './ServicePopupModal';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonWidthClassName: string;
  children: React.ReactNode;
  onButtonClick: () => void;
}

function ServiceCard({ title, description, buttonLabel, buttonWidthClassName, children, onButtonClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[16px] sm:rounded-[24px] shadow-[0px_1px_3px_0px_rgba(161,161,161,0.1),0px_6px_6px_0px_rgba(161,161,161,0.09),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)] overflow-hidden relative min-h-[500px] sm:min-h-[580px] lg:h-[648px] w-full lg:w-[416px] pb-[100px] sm:pb-[110px]">
      <div className="px-4 sm:px-[24px] pt-4 sm:pt-[24px]">
        <h3 className="font-['Product_Sans_Medium'] font-medium text-[17.5px] sm:text-[17.5px] text-[#111] tracking-[-0.32px] leading-[24px] sm:leading-[24px] text-center">
          {title}
        </h3>
        <p className="mt-[8px] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27.2px] tracking-[-0.32px] text-[rgba(17,17,17,0.65)] font-['Product Sans Medium',sans-serif] font-medium text-center sm:text-left">
          {description}
        </p>
      </div>

      <div className="mt-[14px]">{children}</div>

      <div className="absolute bottom-[24px] sm:bottom-[36px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] sm:w-auto">
        <button
          type="button"
          onClick={onButtonClick}
          className={`inline-flex bg-[#0048ff] h-[52px] sm:h-[60px] px-[18px] sm:px-[22px] items-center justify-center rounded-[10px] sm:rounded-[12px] hover:bg-[#0040dd] transition-colors cursor-pointer w-full sm:${buttonWidthClassName}`}
        >
          <span className="font-['Product Sans',sans-serif] font-bold text-[14px] sm:text-[18px] leading-none whitespace-nowrap text-white">
            {buttonLabel}
          </span>
        </button>
      </div>

      <div className="absolute border border-[rgba(17,17,17,0.1)] inset-0 rounded-[16px] sm:rounded-[24px] pointer-events-none" />
    </div>
  );
}

export function BenefitsSection() {
  const [activePopup, setActivePopup] = useState<ServiceType | null>(null);

  const openPopup = (service: ServiceType) => {
    setActivePopup(service);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <section id="services" className="py-[48px] sm:py-[72px] bg-[#fffff5]">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col gap-[16px] sm:gap-[24px] items-center mb-[32px] sm:mb-[48px]">
            <p className="font-['Inter',sans-serif] font-semibold text-[#0048ff] text-[12px] sm:text-[16px] tracking-[2px] sm:tracking-[3.2px] uppercase">
              PROFESSIONAL SERVICES
            </p>
            <h2 className="font-['RocaOne-Bl',sans-serif] text-[32px] sm:text-[42px] lg:text-[52px] text-black text-center tracking-[-1px] sm:tracking-[-2px] leading-[36px] sm:leading-[46px] lg:leading-[52px]">
              Reputation Management
            </h2>
          </div>

          {/* Services Grid - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px]">
            {/* Card 1: Negative Review Removals */}
            <ServiceCard
              title="Negative Review Removals"
              description="Negative reviews can sink your credibility fast and cost you thousands in business. We specialize in removing spam, harassment, fake, and hurtful reviews. Once removed, you'll see a boost in visibility, rankings, and money saved."
              buttonLabel="Remove a Review"
              buttonWidthClassName="w-[248px]"
              onButtonClick={() => openPopup('review')}
            >
              <div className="px-4 sm:px-[36px] pt-[14px] flex flex-col gap-[8px] sm:gap-[12px]">
                <Video src={VIDEO.services.gmb} containerClassName="w-full sm:w-[344px] h-[56px] sm:h-[68px] overflow-hidden mx-auto" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.gmail} containerClassName="w-full sm:w-[344px] h-[56px] sm:h-[68px] overflow-hidden mx-auto" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.google} containerClassName="w-full sm:w-[344px] h-[56px] sm:h-[68px] overflow-hidden mx-auto" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.notification} containerClassName="w-full sm:w-[344px] h-[56px] sm:h-[68px] overflow-hidden mx-auto" className="w-full h-full object-contain" />
              </div>
            </ServiceCard>

            {/* Card 2: Search Engine De-Indexing */}
            <ServiceCard
              title='Search Engine "De-Indexing"'
              description='"De-Indexing" removes unwanted pages and content from search engines, putting you back in control of what shows up online. With our DMCA agents and legal teams, we remove damaging content from showing up when searched.'
              buttonLabel="Remove a Link"
              buttonWidthClassName="w-[216px]"
              onButtonClick={() => openPopup('link')}
            >
              <div className="pt-[14px]">
                <Video src={VIDEO.services.webScreens} containerClassName="w-full h-[240px] sm:h-[312px] overflow-hidden" className="w-full h-full object-cover" />
              </div>
            </ServiceCard>

            {/* Card 3: Social Media Content Removal */}
            <ServiceCard
              title="Social Media Content Removal"
              description="Old posts, photos, or comments that don't reflect who you are today? We work directly with platforms to get problematic content removed, helping you protect your brand and reputation with legally-binding tactics and discretion."
              buttonLabel="Remove a Post"
              buttonWidthClassName="w-[216px]"
              onButtonClick={() => openPopup('post')}
            >
              <div className="pt-[14px] flex flex-col items-center">
                {/* AVAILABLE PLATFORMS label - centered above videos */}
                <p className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[16px] tracking-[2px] sm:tracking-[3.2px] uppercase text-[#a2a2a2] mb-[12px] sm:mb-[16px] text-center">
                  AVAILABLE PLATFORMS
                </p>
                <div className="grid grid-cols-2 gap-0 max-w-[280px] sm:max-w-none">
                  <Video src={VIDEO.services.tiktok} containerClassName="w-[100px] sm:w-[134px] h-[100px] sm:h-[134px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.instagram} containerClassName="w-[100px] sm:w-[133px] h-[100px] sm:h-[133px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.youtube} containerClassName="w-[100px] sm:w-[133px] h-[100px] sm:h-[134px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.facebook} containerClassName="w-[100px] sm:w-[134px] h-[100px] sm:h-[134px] overflow-hidden" className="w-full h-full object-cover" />
                </div>
              </div>
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Service Popup Modal */}
      {activePopup && (
        <ServicePopupModal service={activePopup} onClose={closePopup} />
      )}
    </>
  );
}
