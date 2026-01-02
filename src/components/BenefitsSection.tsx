import svgPaths from "../imports/svg-67gftlgl6r";
import svgPathsCard4 from "../imports/svg-dcdxfl6ktb";
import svgPathsCard5 from "../imports/svg-h58flmp1jo";
import imgImage3777 from "figma:asset/762b5626874ea5538e743a85496ad3ec4b158e58.png";
import imgImage3778 from "figma:asset/57029559bf5fb731d3bfbf1a9a4cfa24047f7ab5.png";
import imgImage3779 from "figma:asset/00fe4e00a08258ec8090b8fea210ba3c2c4dd3b5.png";
import imgImage3780 from "figma:asset/d3bd3c96bc1dfaebc70c4853d298543b25860212.png";
import imgImage3781 from "figma:asset/1841f799d3ad162712fabdc4ba2f023355cc763a.png";
import imgImage3782 from "figma:asset/b818f88b8e326a8ce6a9ed75e897c56835eccf0a.png";
import imgGoogleMaps from "figma:asset/0134d70d0354a0f775cb0a80559ef26bddae69f0.png";
import imgGoogle from "figma:asset/5d85406704c3857cee7cbf3f664cfbb5f192d9df.png";
import imgSocialMedia from "figma:asset/449f98477a94512c9adc3cebad0e29c53f0070d8.png";
import imgArtificialIntelligence from "figma:asset/e157aa38071d3219bb18aaf02af9d343f6053203.png";
import imgArroba from "figma:asset/59a7f1c61452d2be86e42a02b7bc54998ddcf0f5.png";
import imgConnection from "figma:asset/6db4b4236badf0e5a41c803d967d790f89b300b0.png";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  image: string;
  imageConfig: {
    containerHeight: string;
    containerClass?: string;
    imageLeft: string;
    imageTop: string;
    imageWidth: string;
    imageHeight: string;
  };
}

function BenefitCard({ icon, title, description, image, imageConfig }: BenefitCardProps) {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[24px] self-stretch shadow-[0px_1px_3px_0px_rgba(161,161,161,0.1),0px_6px_6px_0px_rgba(161,161,161,0.09),0px_13px_8px_0px_rgba(161,161,161,0.05),0px_23px_9px_0px_rgba(161,161,161,0.01)] shrink-0">
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="content-stretch flex flex-col gap-[3.305px] items-start p-[24px] relative w-full">
            {/* Title with Icon */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                {icon}
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] tracking-[-0.4px] w-full">
                  <p className="leading-[30px]">{title}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[27.2px] not-italic relative shrink-0 text-[16px] text-[rgba(17,17,17,0.65)] tracking-[-0.32px] w-full">
                {description.map((line, index) => (
                  <p key={index} className={index < description.length - 1 ? "mb-0" : ""}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={`relative shrink-0 w-full ${imageConfig.containerClass || ''}`} style={{ height: imageConfig.containerHeight }}>
        <div className="absolute pointer-events-none" style={{
          left: imageConfig.imageLeft,
          top: imageConfig.imageTop,
          width: imageConfig.imageWidth,
          height: imageConfig.imageHeight
        }}>
          <img alt={title} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={image} />
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-[0_0_0.49px_0] rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(17,17,17,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGoogleMaps} />
        </div>
      ),
      title: "Negative Review Removals (Google)",
      description: [
        "Negative Google reviews can sink your credibility fast and cost you thousands in business. We specialize in removing spam, harassment, fake, and hurtful reviews. Once removed, you'll see a boost in visibility, rankings, and money saved."
      ],
      image: imgImage3777,
      imageConfig: {
        containerHeight: "300px",
        containerClass: "overflow-clip",
        imageLeft: "25px",
        imageTop: "1.7px",
        imageWidth: "367px",
        imageHeight: "291.5px"
      }
    },
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGoogle} />
        </div>
      ),
      title: "Search Engine \"De-Indexing\"",
      description: [
        "\"De-Indexing\" removes unwanted pages and content from search engines, putting you back in control of what shows up online. With our DMCA agents and legal teams, we remove damaging content from showing up when searched."
      ],
      image: imgImage3778,
      imageConfig: {
        containerHeight: "300px",
        imageLeft: "32px",
        imageTop: "20.79px",
        imageWidth: "326px",
        imageHeight: "259px"
      }
    },
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSocialMedia} />
        </div>
      ),
      title: "Social Media Content Removal",
      description: [
        "Old posts, photos, or comments that don't reflect who you are today? We work directly with platforms to get problematic content removed, helping you protect your brand and reputation with legally-binding tactics and discretion."
      ],
      image: imgImage3779,
      imageConfig: {
        containerHeight: "300px",
        imageLeft: "32px",
        imageTop: "21.49px",
        imageWidth: "352px",
        imageHeight: "226px"
      }
    },
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArtificialIntelligence} />
        </div>
      ),
      title: "AI Prompt & Search Optimization",
      description: [
        "Leverage AI to optimize online search presence. From business rankings to popping up first on AI research, this service transforms how your brand is found, presented, and perceived as a source of real value in your industry."
      ],
      image: imgImage3780,
      imageConfig: {
        containerHeight: "272.8px",
        containerClass: "overflow-clip",
        imageLeft: "22px",
        imageTop: "27.39px",
        imageWidth: "372px",
        imageHeight: "218px"
      }
    },
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArroba} />
        </div>
      ),
      title: "Social Media Handle Acquisition",
      description: [
        "Helping you secure premium social media handles before someone else does. Whether you're launching a business or cleaning up a digital footprint, we'll make sure your name is available and protected across any major platform."
      ],
      image: imgImage3781,
      imageConfig: {
        containerHeight: "300px",
        containerClass: "overflow-clip",
        imageLeft: "108px",
        imageTop: "27.39px",
        imageWidth: "200px",
        imageHeight: "200px"
      }
    },
    {
      icon: (
        <div className="relative size-[20px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgConnection} />
        </div>
      ),
      title: "Free Tutorials & AI Tools",
      description: [
        "Access powerful tutorials, AI tools, and expert tips trusted by leaders in the industry. From DIY review removal to AI-SEO and content clean-up, our weekly newsletter helps you stay a step ahead, all included for free when you sign up."
      ],
      image: imgImage3782,
      imageConfig: {
        containerHeight: "300px",
        imageLeft: "96px",
        imageTop: "-2.61px",
        imageWidth: "239px",
        imageHeight: "264px"
      }
    }
  ];

  return (
    <section className="py-[72px] bg-[#fffff5]" id="benefits">
      <div className="max-w-[1296px] mx-auto px-6">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full mb-[48px]">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0048ff] text-[16px] text-nowrap tracking-[3.2px] uppercase">
            <p className="leading-[16px]">SERVICES</p>
          </div>
          <div className="flex flex-col font-['RocaOne-Bl:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[52px] text-black text-center text-nowrap tracking-[-2px]">
            <p className="leading-[52px]">Reputation Management</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[48px]">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a className="inline-flex bg-[#0048ff] content-stretch cursor-pointer h-[56px] items-center justify-center overflow-clip px-[36px] py-[10px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] shrink-0 hover:bg-[#0040dd] transition-colors" href="#apply">
            <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-center text-nowrap text-white tracking-[-0.2px] leading-[27px]">
              Apply for Services
            </div>
            <div className="absolute inset-0 rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}