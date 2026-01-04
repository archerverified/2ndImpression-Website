import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AssetImage } from './AssetImage';

interface BenefitCardProps {
  icon: ReactNode;
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

function BenefitCard({ icon, title, description, image, index = 0 }: { icon: ReactNode; title: string; description: string[]; image: string; index?: number }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-3xl shadow-multi flex flex-col items-start text-left hover:bg-cream transition-colors duration-300 group h-full border border-[rgba(17,17,17,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 shrink-0">
          {icon}
        </div>
        <h3 className="font-product-sans font-bold text-[26px] text-[#111] leading-tight tracking-[-0.32px]">
          {title}
        </h3>
      </div>
      <div className="font-product-sans text-[16px] text-[rgba(17,17,17,0.65)] leading-relaxed tracking-[-0.32px] mb-6">
        {description.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <div className="mt-auto w-full relative h-[300px] overflow-clip">
        <AssetImage
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-google-maps.png" />,
      title: "Negative Review Removals (Google)",
      description: [
        "Negative Google reviews can sink your credibility fast and cost you thousands in business. We specialize in removing spam, harassment, fake, and hurtful reviews. Once removed, you'll see a boost in visibility, rankings, and money saved."
      ],
      image: "/assets/Negative Review Removals (Google).png"
    },
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-google.png" />,
      title: "Search Engine \"De-Indexing\"",
      description: [
        "\"De-Indexing\" removes unwanted pages and content from search engines, putting you back in control of what shows up online. With our DMCA agents and legal teams, we remove damaging content from showing up when searched."
      ],
      image: "/assets/Search Engine De-Indexing.png"
    },
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-social-media.png" />,
      title: "Social Media Content Removal",
      description: [
        "Old posts, photos, or comments that don't reflect who you are today? We work directly with platforms to get problematic content removed, helping you protect your brand and reputation with legally-binding tactics and discretion."
      ],
      image: "/assets/Social Media Content Removal.png"
    },
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-ai.png" />,
      title: "AI Prompt & Search Optimization",
      description: [
        "Leverage AI to optimize online search presence. From business rankings to popping up first on AI research, this service transforms how your brand is found, presented, and perceived as a source of real value in your industry."
      ],
      image: "/assets/AI Prompt & Search Optimzation.png"
    },
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-arroba.png" />,
      title: "Social Media Handle Acquisition",
      description: [
        "Helping you secure premium social media handles before someone else does. Whether you're launching a business or cleaning up a digital footprint, we'll make sure your name is available and protected across any major platform."
      ],
      image: "/assets/Social Media Handle Acquisition.png"
    },
    {
      icon: <AssetImage alt="" className="w-full h-full object-contain" src="/assets/icon-connection.png" />,
      title: "Free Tutorials & AI Tools",
      description: [
        "Access powerful tutorials, AI tools, and expert tips trusted by leaders in the industry. From DIY review removal to AI-SEO and content clean-up, our weekly newsletter helps you stay a step ahead, all included for free when you sign up."
      ],
      image: "/assets/Free Tutorials & AI Tools.png"
    }
  ];

  return (
    <section className="py-24 bg-cream" id="benefits" aria-labelledby="benefits-heading">
      <div className="max-w-1296 mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-inter font-semibold text-primary text-[16px] tracking-wide uppercase mb-4">
            SERVICES
          </p>
          <h2 id="benefits-heading" className="font-rocaone-bl text-[48px] lg:text-[52px] text-black tracking-tighter leading-[1.1]">
            Reputation Management
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            className="inline-flex bg-primary cursor-pointer h-xl items-center justify-center px-10 rounded-12 shadow-multi text-white font-inter font-semibold text-[20px] hover:bg-[#0040dd] transition-colors" 
            href="https://automatedrevenue.typeform.com/to/R3joZxyS"
            aria-label="Apply for Services"
          >
            Apply for Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
