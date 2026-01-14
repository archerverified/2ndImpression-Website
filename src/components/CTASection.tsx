import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="bg-[#0048ff] py-[80px]" id="apply">
      <div className="max-w-[1296px] mx-auto px-6 flex flex-col items-center gap-[30px]">
        {/* Newsletter Label */}
        <div className="flex flex-col items-start">
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-white tracking-[3.2px] uppercase leading-[16px]">
            newsletter
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white tracking-[-2px] text-[51px] leading-[51px]">
            <span className="font-['RocaOne-Bold',sans-serif]">New AI Tips & Tricks</span>
            <br />
            <span className="font-['RocaOne-Bl',sans-serif]">Every Week</span>
          </h2>
        </div>

        {/* Subheading */}
        <div className="flex flex-col items-center h-[51px]">
          <p className="font-['Product_Sans',sans-serif] text-[27px] leading-[27px] text-center text-white tracking-[-2px] w-[252px]">
            Tutorials. Tools. Discounts.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center w-[280px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] w-full">
            <div className="bg-[#eee] h-[40px] rounded-[10px] overflow-clip">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                className="w-full h-full px-[12px] font-['Product_Sans',sans-serif] text-[14px] text-[#999] bg-transparent border-none outline-none placeholder:text-[#999]"
              />
            </div>
            <button
              type="submit"
              className="bg-black h-[40px] rounded-[10px] flex items-center justify-center hover:bg-[#222] transition-colors"
            >
              <span className="font-['Product_Sans',sans-serif] font-bold text-[14px] leading-[16.8px] text-white">
                Submit
              </span>
            </button>
          </form>
        </div>

        {/* Telegram Icon */}
        <div className="relative h-[24px] w-[24px]">
          <a href="https://t.me/repmgmt" className="block size-full cursor-pointer">
            <div className="size-full overflow-clip relative">
              <img alt="Telegram" className="absolute inset-[2px] size-[20px] max-w-none object-cover" src="/assets/telegram.png" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
