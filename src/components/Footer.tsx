export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-xl lg:py-[80px] relative" role="contentinfo">
      <div className="max-w-1880 mx-auto px-md lg:px-[20px]">
        {/* 2nd Impression Logo */}
        <div className="text-center mb-lg lg:mb-[45px]">
          <a 
            href="/" 
            className="font-rocaone-bl text-[28px] lg:text-[32px] leading-normal text-white tracking-tighter hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
            aria-label="2nd Impression - Home"
          >
            2nd Impression
          </a>
        </div>

        {/* Heading - RocaOne-Bl 48px tracking -2px */}
        <div className="text-center mb-lg lg:mb-xl">
          <p className="text-white tracking-tighter text-[36px] lg:text-[48px] leading-[1.1]">
            <span className="font-product block">Reputation Management</span>
            <span className="font-rocaone-bl block">That Works</span>
          </p>
        </div>

        {/* Divider Line */}
        <div className="max-w-1440 mx-auto mb-lg lg:mb-xl" aria-hidden="true">
          <div className="h-px bg-[#A2A2A2] rounded-full" />
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-md lg:gap-[200px] text-center">
          <nav className="flex items-center gap-md" aria-label="Legal links">
            <a
              href="/privacy"
              className="font-product text-[16px] lg:text-[24px] leading-relaxed text-gray-700 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
            >
              Privacy Policy
            </a>
            <span className="font-rocaone-bl text-[16px] lg:text-[24px] leading-relaxed text-gray-700" aria-hidden="true">|</span>
            <a
              href="/terms"
              className="font-product text-[16px] lg:text-[24px] leading-relaxed text-gray-700 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
            >
              Terms & Conditions
            </a>
          </nav>
          <p className="font-product text-[14px] lg:text-[24px] leading-relaxed text-gray-700 tracking-tight lg:tracking-tighter">
            <span className="sr-only">Copyright </span>©2ndimpression.co {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
