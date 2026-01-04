import { motion } from 'framer-motion';
import CompanyLogos from './CompanyLogos';

export function HeroSection() {
  return (
    <section className="bg-cream pt-24 pb-16 overflow-hidden">
      <div className="max-w-1296 mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Heading - RocaOne-Bl 48px/59px tracking -2px */}
          <motion.div 
            className="w-full max-w-[921px] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-product font-semibold text-[36px] sm:text-[48px] lg:text-[59px] leading-none text-black tracking-tighter">
              Cleaning Up the Internet,
            </h1>
            <p className="font-rocaone-bl text-[36px] sm:text-[48px] lg:text-[59px] leading-[1.1] tracking-tighter mt-2">
              <span className="text-primary">1 Bad Link</span>
              <span className="text-black font-product font-semibold">{` at a Time`}</span>
            </p>
          </motion.div>

          {/* Description - Inter 18px */}
          <motion.div 
            className="w-full max-w-[922px] mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="font-inter text-[18px] text-[rgba(17,17,17,0.7)] leading-relaxed">
              2ndimpression.co hosts a team of elite reputation management experts and DMCA agents across all landscapes of the internet. Our core focus is to help clean up damaged reputations across Google, social media platforms, and websites posting damaging content about individuals and businesses.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a 
            className="bg-primary cursor-pointer flex h-xl items-center justify-center px-10 rounded-16 shadow-multi text-white font-inter font-semibold text-[20px] hover:bg-[#0040dd] transition-colors mb-16"
            href="https://automatedrevenue.typeform.com/to/R3joZxyS"
            aria-label="Apply for Services"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Apply for Services
          </motion.a>
        </div>
      </div>

      {/* Logo Carousels */}
      <CompanyLogos />
    </section>
  );
}
