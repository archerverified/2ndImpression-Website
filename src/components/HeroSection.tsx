import svgPaths from "../imports/svg-28janitbgm";
import imgCitibankLogo from "figma:asset/83ad1ad31cccb359e5b0201f256bce3476803a5f.png";
import imgVisaLogo from "figma:asset/afb9281d11c9e9ea801ea309800adf854e1f2a7a.png";
import imgGeminiPng from "figma:asset/26dd280d0400c0f67b524c682aa1fd3ea5c88a43.png";
import img2560PxUniswapLogoAndWordmarkSvg from "figma:asset/08747b10854f7a8bd74bfad9923d920a7e806035.png";
import imgMoonPaySvg from "figma:asset/c936a93f4661340ab39250a527e96bec1950a062.png";
import imgBinanceLogoSvg from "figma:asset/2e9b651a3546f96f7bc4b16433e43207bbdae629.png";
import imgGeminiPng1 from "figma:asset/85628e2e76eba3823b682ac1b8f0a3fb8af80e87.png";
import imgGeminiPng2 from "figma:asset/aff9cb8f0223ae8897dbdcfb5dbfdacce44da230.png";
import imgGeminiPng3 from "figma:asset/0fc879221ae68a15c0d90ce10e52b43b3ccb5a2a.png";
import { imgSection } from "../imports/svg-1li2n";
import CompanyLogos from './CompanyLogos';

export function HeroSection() {
  return (
    <section className="content-stretch flex flex-col items-center justify-center pb-[72px] pt-[100px] px-0 relative bg-[#fffff5]">
      {/* Main Content */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pb-[88px] pt-[108px] px-[72px] relative w-full">
            {/* Heading */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[921.59px]">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center pl-[9.83px] pr-0 py-0 relative w-full">
                    <div className="font-['Product_Sans:Bold',sans-serif] h-[118px] leading-[0] not-italic relative shrink-0 text-black text-center tracking-[-2px] w-[921.16px]">
                      <div className="absolute flex flex-col h-[59px] justify-center left-[calc(50%+0.1px)] text-[59px] top-[29.5px] translate-x-[-50%] translate-y-[-50%] w-[921.35px]">
                        <p className="leading-[59px]">Cleaning Up the Internet,</p>
                      </div>
                      <div className="absolute flex flex-col justify-center left-[calc(50%+0.59px)] text-[0px] text-nowrap top-[97.5px] translate-x-[-50%] translate-y-[-50%]">
                        <p className="leading-[59px] text-[59px] tracking-[-2px]">
                          <span className="font-['RocaOne-Bold:Regular',sans-serif] not-italic text-[#0048ff]">1</span>
                          <span className="font-['RocaOne-Bold:Regular',sans-serif] not-italic"> </span>
                          <span className="font-['RocaOne-Bold:Regular',sans-serif] not-italic text-[#0048ff]">Bad Link</span>
                          <span>{` at a Time`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="h-[81px] relative shrink-0 w-[930px]">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[81px] justify-center leading-[0] left-[calc(50%+3px)] not-italic text-[18px] text-[rgba(17,17,17,0.65)] text-center top-[40.5px] translate-x-[-50%] translate-y-[-50%] w-[922px]">
                <p className="leading-[27px]">{`2ndimpression.co hosts a team of elite reputation management experts and DMCA agents across all landscapes of the internet. Our core focus is to help clean up damaged reputations across Google, social media platforms, and websites posting damaging content about individuals and businesses. `}</p>
              </div>
            </div>

            {/* CTA Button */}
            <a className="bg-[#0048ff] content-stretch cursor-pointer flex h-[56px] items-center justify-center overflow-clip px-[36px] py-[10px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] shrink-0 hover:bg-[#0040dd] transition-colors" href="https://automatedrevenue.typeform.com/to/R3joZxyS">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.2px]">
                    <p className="cursor-pointer leading-[27px]">Apply for Services</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[12px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Logo Carousels */}
      <CompanyLogos />
    </section>
  );
}