import { useState, useEffect } from 'react';

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup when component mounts (page loads)
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle email submission here
      console.log('Email submitted:', email);
      alert(`Thanks! We'll send the GPT to ${email}`);
      setEmail('');
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content - Centered */}
      <div className="relative" data-name="Pop Up">
        <div className="relative content-stretch flex h-[381px] items-center justify-center w-[444px]" data-name="Variant 1">
          <div className="absolute bg-white content-stretch flex flex-col gap-[13px] h-[380px] items-center justify-center left-0 pb-[160px] pt-[30px] px-0 right-0 rounded-[12px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="container">
            
            {/* Up Content */}
            <div className="content-stretch flex flex-col gap-[10px] h-[200px] items-center relative shrink-0 w-full" data-name="up_content">
              
              {/* Header Container */}
              <div className="content-stretch flex h-[104px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[105px] left-[31px] top-0 w-[382px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[105px] items-center left-[-6px] right-0 top-0" data-name="Container">
                    <div className="absolute flex flex-col font-['Product_Sans:Bold',sans-serif] justify-center leading-[36.4px] left-[calc(50%+3px)] not-italic text-[#1d2634] text-[24px] text-center text-nowrap top-[54.5px] translate-x-[-50%] translate-y-[-50%]">
                      <p className="font-['RocaOne-Bl:Regular',sans-serif] mb-0 text-[#0048ff]">Happy New Years!</p>
                      <p className="mb-0">{`Remove Negative Google Reviews `}</p>
                      <p>with ChatGPT for FREE ⚡️</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Paragraph */}
              <div className="absolute h-[96px] leading-[0] left-0 not-italic right-0 text-[17px] text-[rgba(17,17,17,0.65)] text-center top-[104px]" data-name="Paragraph">
                <div className="absolute flex flex-col font-['Product_Sans:Regular',sans-serif] justify-center left-[calc(50%+0.5px)] top-[76px] translate-x-[-50%] translate-y-[-50%] w-[273px]">
                  <p className="leading-[23.8px]">that helps remove negative reviews!</p>
                </div>
                <div className="absolute flex flex-col font-['Product_Sans:Regular',sans-serif] justify-center left-[calc(50%+0.5px)] top-[50px] translate-x-[-50%] translate-y-[-50%] w-[313px]">
                  <p className="leading-[23.8px]">
                    <span>{`Submit your email to receive a `}</span>
                    <span className="font-['Product_Sans:Bold',sans-serif] not-italic text-[#0048ff]">FREE GPT</span>{" "}
                  </p>
                </div>
                <div className="absolute flex flex-col font-['RocaOne-Rg:Regular',sans-serif] justify-center left-[calc(50%+0.5px)] top-[24px] translate-x-[-50%] translate-y-[-50%] w-[177px]">
                  <p className="leading-[23.8px]">{`Do you use ChatGPT? `}</p>
                </div>
              </div>
            </div>
            
            {/* Email Input */}
            <div className="absolute content-stretch flex flex-col items-center justify-center left-[45px] top-[260px] w-[350px]" data-name="Email">
              <div className="absolute bg-[rgba(187,187,187,0.15)] content-stretch flex flex-col h-[36px] items-start justify-center left-0 overflow-clip right-0 rounded-[32px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="inputs">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
                  <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start justify-center pl-[34px] pr-[16px] py-[8px] relative size-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="absolute left-[175.5px] top-[18px] -translate-x-1/2 -translate-y-1/2 w-full bg-transparent border-none outline-none font-['Product_Sans_Light:Regular',sans-serif] text-[16px] text-center text-[#a5a8ae] placeholder:text-[#a5a8ae] leading-[normal]"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[0.8px_0_-0.8px_0] rounded-[32px]" data-name="Border">
                  <div aria-hidden="true" className="absolute border-[#0048ff] border-[1.5px_1.5px_2px] border-solid inset-0 pointer-events-none rounded-[32px]" />
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="absolute content-stretch flex h-[36px] items-center justify-center left-1/2 top-[293px] translate-x-[-50%] w-[230px]" data-name="Send me GPT">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-black content-stretch flex h-full items-center justify-center pb-[8.4px] pt-[7.39px] px-[16px] relative rounded-[32px] shrink-0 w-[228px] cursor-pointer hover:bg-[#222] transition-colors"
                data-name="Button - Default"
              >
                <div aria-hidden="true" className="absolute border-[#0048ff] border-[1.5px_1.5px_2px] border-solid inset-0 pointer-events-none rounded-[32px]" />
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Product_Sans_Medium:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                      <p className="leading-[19.2px]">{`Send me my GPT!  🤖 `}</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            
            {/* Close Button - Clickable */}
            <button
              onClick={handleClose}
              className="absolute left-[414px] size-[14px] top-[12px] cursor-pointer hover:opacity-70 transition-opacity z-10"
              data-name="Bllog1548"
              aria-label="Close popup"
            >
              <div className="absolute inset-[-7.14%]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M1 1L15 15M1 15L15 1" id="Bllog1548" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </button>
            
            {/* Border */}
            <div className="absolute inset-[0_0_-0.39px_0] rounded-[12px]" data-name="Border">
              <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
            
            {/* Description */}
            <div className="absolute content-stretch flex flex-col items-center justify-center left-[30px] pb-[10px] pt-[9px] px-[10px] right-[30px] top-[calc(50%+157.4px)] translate-y-[-50%]" data-name="description">
              <div className="absolute flex flex-col font-['Product_Sans:Regular',sans-serif] justify-center leading-[0] left-[185px] not-italic text-[12px] text-[rgba(17,17,17,0.65)] text-center text-nowrap top-[25.7px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[16.8px]">{`Used by Moderators at Google, Reddit, Binance, & more`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}