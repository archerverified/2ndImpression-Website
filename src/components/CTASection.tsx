import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AssetImage } from './AssetImage';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Email submitted:', email);
    
    setIsSuccess(true);
    setEmail('');
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="bg-primary py-xl lg:py-[80px]" id="newsletter" aria-labelledby="newsletter-heading">
      <motion.div 
        className="max-w-1296 mx-auto px-md flex flex-col items-center gap-lg lg:gap-[30px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Label - Inter Semi_Bold 16px uppercase tracking 3.2px */}
        <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-wide uppercase leading-md">
          NEWSLETTER
        </p>

        {/* Heading - RocaOne-Bl 48px tracking -2px */}
        <div className="flex flex-col items-center text-center">
          <h2 id="newsletter-heading" className="text-white tracking-tighter text-[36px] lg:text-[48px] leading-[1.1]">
            <span className="font-product block">New AI Tips & Tricks</span>
            <span className="font-rocaone-bl font-thin block" style={{ fontFamily: 'RocaOne-Bl' }}>Every Week</span>
          </h2>
        </div>

        {/* Subheading */}
        <p className="font-product text-[20px] lg:text-[27px] leading-[1.2] text-center text-white tracking-tight lg:tracking-tighter">
          Tutorials. Tools. Discounts.
        </p>

        {/* Form */}
        <div className="flex flex-col items-center w-full max-w-[280px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-sm w-full" aria-label="Newsletter subscription">
            <div className="bg-[#eee] h-[44px] lg:h-[40px] rounded-10 overflow-clip">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                disabled={isSubmitting}
                className="w-full h-full px-md font-product text-[14px] text-black bg-transparent border-none outline-none placeholder:text-[#999] focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset disabled:opacity-50"
                aria-label="Email address for newsletter"
                autoComplete="email"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black h-[44px] lg:h-[40px] rounded-10 flex items-center justify-center hover:bg-[#222] transition-colors disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <span className="font-product font-bold text-[14px] leading-[16.8px] text-white">
                {isSubmitting ? 'Submitting...' : isSuccess ? 'Subscribed!' : 'Submit'}
              </span>
            </button>
          </form>
        </div>

        {/* Telegram Icon */}
        <a 
          href="https://t.me/mediaopportunities" 
          className="block w-lg h-lg cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-full"
          aria-label="Join us on Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="size-full overflow-clip relative flex items-center justify-center">
            <AssetImage alt="" className="size-[24px] max-w-none object-cover" src="/assets/telegram.png" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
