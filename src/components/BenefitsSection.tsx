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
    <div className="bg-white rounded-[24px] shadow-[0px_1px_3px_0px_rgba(161,161,161,0.1),0px_6px_6px_0px_rgba(161,161,161,0.09),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)] overflow-hidden relative h-[648px] w-full lg:w-[416px]">
      <div className="px-[24px] pt-[24px]">
        <h3 className="font-['Product_Sans_Medium'] font-medium text-[20px] text-[#111] tracking-[-0.32px] leading-[27.2px] text-center">
          {title}
        </h3>
        <p className="mt-[8px] text-[16px] leading-[27.2px] tracking-[-0.32px] text-[rgba(17,17,17,0.65)] font-['Product Sans Medium',sans-serif] font-medium">
          {description}
        </p>
      </div>

      <div className="mt-[14px]">{children}</div>

      <div className="absolute bottom-[36px] left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={onButtonClick}
          className={`inline-flex bg-[#0048ff] h-[56px] items-center justify-center rounded-[12px] hover:bg-[#0040dd] transition-colors cursor-pointer ${buttonWidthClassName}`}
        >
          <span className="font-['Product Sans',sans-serif] font-bold text-[20px] leading-[30px] text-white">
            {buttonLabel}
          </span>
        </button>
      </div>

      <div className="absolute border border-[rgba(17,17,17,0.1)] inset-0 rounded-[24px] pointer-events-none" />
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
      <section id="services" className="py-[72px] bg-[#fffff5]">
        <div className="max-w-[1296px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col gap-[24px] items-center mb-[48px]">
            <p className="font-['Inter',sans-serif] font-semibold text-[#0048ff] text-[16px] tracking-[3.2px] uppercase">
              PROFESSIONAL SERVICES
            </p>
            <h2 className="font-['RocaOne-Bl',sans-serif] text-[52px] text-black text-center tracking-[-2px] leading-[52px]">
              Reputation Management
            </h2>
          </div>

          {/* Services Grid - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* Card 1: Negative Review Removals */}
            <ServiceCard
              title="Negative Review Removals"
              description="Negative reviews can sink your credibility fast and cost you thousands in business. We specialize in removing spam, harassment, fake, and hurtful reviews. Once removed, you'll see a boost in visibility, rankings, and money saved."
              buttonLabel="Remove a Review"
              buttonWidthClassName="w-[233px]"
              onButtonClick={() => openPopup('review')}
            >
              <div className="px-[36px] pt-[14px] flex flex-col gap-[12px]">
                <Video src={VIDEO.services.gmb} containerClassName="w-[344px] h-[68px] overflow-hidden" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.gmail} containerClassName="w-[344px] h-[68px] overflow-hidden" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.google} containerClassName="w-[344px] h-[68px] overflow-hidden" className="w-full h-full object-contain" />
                <Video src={VIDEO.services.notification} containerClassName="w-[344px] h-[68px] overflow-hidden" className="w-full h-full object-contain" />
              </div>
            </ServiceCard>

            {/* Card 2: Search Engine De-Indexing */}
            <ServiceCard
              title='Search Engine "De-Indexing"'
              description='"De-Indexing" removes unwanted pages and content from search engines, putting you back in control of what shows up online. With our DMCA agents and legal teams, we remove damaging content from showing up when searched.'
              buttonLabel="Remove a Link"
              buttonWidthClassName="w-[204px]"
              onButtonClick={() => openPopup('link')}
            >
              <div className="pt-[14px]">
                <Video src={VIDEO.services.webScreens} containerClassName="w-full h-[312px] overflow-hidden" className="w-full h-full object-cover" />
              </div>
            </ServiceCard>

            {/* Card 3: Social Media Content Removal */}
            <ServiceCard
              title="Social Media Content Removal"
              description="Old posts, photos, or comments that don't reflect who you are today? We work directly with platforms to get problematic content removed, helping you protect your brand and reputation with legally-binding tactics and discretion."
              buttonLabel="Remove a Post"
              buttonWidthClassName="w-[206px]"
              onButtonClick={() => openPopup('post')}
            >
              <div className="pt-[14px] flex flex-col items-center">
                {/* AVAILABLE PLATFORMS label - centered above videos */}
                <p className="font-['Inter',sans-serif] font-semibold text-[16px] tracking-[3.2px] uppercase text-[#a2a2a2] mb-[16px] text-center">
                  AVAILABLE PLATFORMS
                </p>
                <div className="grid grid-cols-2 gap-0">
                  <Video src={VIDEO.services.tiktok} containerClassName="w-[134px] h-[134px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.instagram} containerClassName="w-[133px] h-[133px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.youtube} containerClassName="w-[133px] h-[134px] overflow-hidden" className="w-full h-full object-cover" />
                  <Video src={VIDEO.services.facebook} containerClassName="w-[134px] h-[134px] overflow-hidden" className="w-full h-full object-cover" />
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
