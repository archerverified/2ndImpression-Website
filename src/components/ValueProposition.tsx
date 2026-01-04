import { motion } from 'framer-motion';
import { AssetImage } from './AssetImage';

const valuePoints = [
  "Eliminate all negativity that can harm your business",
  "Become a key leader and have your ideas heard",
  "Build an unmatched network faster than ever",
  "Accelerate your business and stay on top",
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-cream" id="value" aria-labelledby="value-heading">
      <div className="max-w-1296 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1 lg:max-w-[881px] lg:mx-[170px] lg:px-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Label - Inter Semi_Bold 16px uppercase tracking 3.2px */}
            <p className="font-inter font-semibold text-[16px] tracking-wide uppercase text-primary mb-4">
              GUARANTEED VALUE
            </p>
            
            <div className="flex flex-col gap-8">
              {/* Heading - RocaOne-Bl 48px tracking -2px */}
              <h2 id="value-heading" className="font-rocaone-bl text-[48px] lg:text-[52px] leading-[1.1] tracking-tighter text-black">
                Less Fluff, More Results
              </h2>
              <ul className="space-y-6" role="list">
                {valuePoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="shrink-0 w-6 h-6 mt-1" aria-hidden="true">
                      <AssetImage 
                        alt="" 
                        className="w-full h-full object-contain" 
                        src="/assets/checkmark.png" 
                        loading="lazy" 
                      />
                    </div>
                    {/* Body - Inter 18px */}
                    <p className="font-inter text-[18px] leading-relaxed text-[rgba(17,17,17,0.7)] group-hover:text-primary transition-colors lg:w-[1035px]">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.a 
              href="https://automatedrevenue.typeform.com/to/R3joZxyS"
              className="inline-flex bg-primary cursor-pointer h-xl items-center justify-center px-10 rounded-12 shadow-multi text-white font-inter font-semibold text-[20px] hover:bg-[#0040dd] transition-colors mt-12"
              aria-label="Apply for Services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Apply for Services
            </motion.a>
          </motion.div>
          
          {/* Right Image - Graph */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-multi overflow-hidden relative group hover:shadow-lg transition-shadow duration-300 w-full max-w-[624px] mx-auto lg:ml-auto">
              <div className="aspect-624/538 w-full">
                <AssetImage
                  src="/assets/growth-graph.png"
                  alt="Growth chart visualization"
                  className="w-full h-full object-contain p-0"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
