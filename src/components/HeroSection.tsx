import { VIDEO } from '../data/videoAssets';

export function HeroSection() {
  return (
    <section className="bg-[#fffff5] py-16 lg:py-24">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[184px] items-center">
          {/* LEFT: Video */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-[532px] h-auto max-h-[450px] lg:w-[532px] lg:h-[450px] overflow-hidden rounded-[24px] shadow-[0px_1px_3px_0px_rgba(161,161,161,0.5),0px_6px_6px_0px_rgba(161,161,161,0.5),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)]">
              <video
                className="w-full h-full object-cover"
                src={VIDEO.hero.scrollingList}
                muted
                playsInline
                autoPlay
                loop
                preload="auto"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-[48px] lg:text-[59px] leading-[1] tracking-[-2px] mb-6">
              <span className="font-['Product_Sans_Light',sans-serif] text-[#111]">Less Fluff,</span>
              <br />
              <span className="font-['RocaOne-Bl',sans-serif] text-[#0048ff]">More Results</span>
            </h1>
            <p className="text-[18px] leading-[27px] text-[#2b2b2b] mb-8 max-w-[500px] mx-auto lg:mx-0">
              <span className="font-['Product_Sans',sans-serif] font-bold">2nd Impression fixes damaged online reputations.</span>
              <br />
              <span className="font-['Product_Sans',sans-serif]">Working with verified DMCA agents and sources directly to resolve damaging reviews, website links, and online content across Google and social media platforms since 2019.</span>
            </p>
            <a
              href="https://chatgpt.com/g/g-695d300d075481918e136c3455a39d36-business-reviews-policy-appeals-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#0048ff] h-[56px] items-center justify-center overflow-clip px-[36px] py-[10px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
            >
              <span className="font-['Product_Sans_Medium',sans-serif] font-medium text-[18px] text-center text-nowrap text-white tracking-[-0.2px]">
                Get A Free Removal AI Tool
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
