import imgImage3748 from "figma:asset/b8a3ec2e88c734b2dfc40f3dba16e5c0d2c03125.png";

export function Footer() {
  return (
    <footer className="bg-black py-[80px] relative">
      <div className="max-w-[1880px] mx-auto px-[20px]">
        {/* 2nd Impression Logo */}
        <div className="text-center mb-[45px]">
          <h2 className="font-['RocaOne-Bl:Regular',sans-serif] text-[32px] leading-[59px] text-white tracking-[-2px]">
            2nd Impression
          </h2>
        </div>

        {/* Heading */}
        <div className="text-center mb-[48px]">
          <div className="flex flex-col text-white tracking-[-2px] text-[48px] leading-[52px]">
            <p className="font-['Product_Sans_Light:Regular',sans-serif] mb-0">Reputation Management</p>
            <p className="font-['RocaOne-Bold:Regular',sans-serif]">That Works</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="max-w-[1440px] mx-auto mb-[48px]">
          <div className="h-[1px] bg-[#A2A2A2] rounded-full" />
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[200px] text-center">
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="font-['Product_Sans:Regular',sans-serif] text-[24px] leading-[59px] text-[#626262] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="font-['RocaOne-Bl:Regular',sans-serif] text-[24px] leading-[59px] text-[#626262]">|</span>
            <a
              href="#terms"
              className="font-['Product_Sans:Regular',sans-serif] text-[24px] leading-[59px] text-[#626262] hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
          <div>
            <p className="font-['RocaOne-Bl:Regular',sans-serif] text-[24px] leading-[59px] text-[#626262] tracking-[-2px]">
              ©2ndimpression.co 2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}