export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fffff5]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <div className="bg-white content-stretch flex gap-[112.7px] items-center pl-[24px] pr-[16px] py-[16px] relative rounded-[16px] shadow-[0px_32px_13px_0px_rgba(130,130,130,0.01),0px_18px_11px_0px_rgba(130,130,130,0.05),0px_8px_8px_0px_rgba(130,130,130,0.09),0px_2px_4px_0px_rgba(130,130,130,0.1)] shrink-0">
            <div className="absolute inset-[0_0.4px_0.08px_0] rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
            </div>

            {/* Logo/Brand */}
            <div className="flex flex-col font-['Product_Sans:Bold',sans-serif] h-[29.712px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center tracking-[-2px] w-[198px]">
              <p className="leading-[59px] font-[RocaOne-Bl] px-[-26px] py-[0px] mx-[-20px] my-[0px]">2nd Impression</p>
            </div>

            {/* Navigation Links */}
            <div className="content-stretch flex gap-[24px] h-[24px] items-center justify-center relative shrink-0">
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Medium]"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Thin]"
                href="#benefits"
              >
                Benefits
              </a>
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Thin]"
                href="#value"
              >
                Value
              </a>
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Thin]"
                href="#faq"
              >
                FAQs
              </a>
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Thin]"
                href="#members"
              >
                Members
              </a>
              <a
                className="font-['Nunito:ExtraLight',sans-serif] font-extralight text-[#111] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity font-[Product_Sans_Thin]"
                href="#newsletter"
              >
                Newsletter
              </a>
            </div>

            {/* Action Buttons */}
            <div className="content-stretch cursor-pointer flex gap-[10.01px] items-center justify-end relative shrink-0">
              <a
                className="bg-[#242424] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] shrink-0 hover:bg-[#333] transition-colors"
                href="#client-portal"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-center text-nowrap text-white leading-[24px] cursor-pointer">
                  Client Portal
                </p>
                <div className="absolute inset-0 rounded-[12px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]"
                  />
                </div>
              </a>

              <a
                className="bg-[#0048ff] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] shrink-0 hover:bg-[#0040dd] transition-colors"
                href="#apply"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-center text-nowrap text-white leading-[24px] cursor-pointer">
                  Apply for Services
                </p>
                <div className="absolute inset-0 rounded-[12px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}