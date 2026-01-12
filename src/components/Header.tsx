import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Services', href: '#services' },
    { label: '24/7 Value', href: '#value' },
    { label: 'Results', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Newsletter', href: '#newsletter' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fffff5]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <div className="bg-white content-stretch flex items-center justify-between px-[24px] h-[80px] relative rounded-[16px] shadow-[0px_32px_13px_0px_rgba(130,130,130,0.01),0px_18px_11px_0px_rgba(130,130,130,0.05),0px_8px_8px_0px_rgba(130,130,130,0.09),0px_2px_4px_0px_rgba(130,130,130,0.1)] shrink-0 w-full max-w-[1236.4px]">
            <div className="absolute inset-[0_0.4px_0.08px_0] rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
            </div>

            {/* Logo/Brand */}
            <div className="relative shrink-0">
              <span className="font-['RocaOne-Bl',sans-serif] text-[32px] leading-[59px] tracking-[-2px] text-black">
                2nd Impression
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex gap-[24px] h-[24px] items-center justify-center relative shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className={`text-[#212121] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:opacity-70 transition-opacity ${
                    link.label === 'Testimonials'
                      ? "font-['Product Sans Medium',sans-serif] font-medium"
                      : "font-['Product Sans Light',sans-serif] font-light"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center justify-end relative shrink-0">
              <a
                className="bg-[#0048ff] content-stretch flex h-[48px] w-[110px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] shrink-0 hover:bg-[#0040dd] transition-colors"
                href="https://forms.gle/66XJUJFUdnqyGZsd7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-['Product Sans Medium',sans-serif] font-medium text-[16px] text-center text-nowrap text-white leading-[24px]">
                  Book a Call
                </span>
                <div className="absolute inset-0 rounded-[12px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]"
                  />
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-[40px] h-[40px] relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-[24px] h-[2px] bg-[#111] rounded transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block w-[24px] h-[2px] bg-[#111] rounded mt-[4px] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-[24px] h-[2px] bg-[#111] rounded mt-[4px] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 lg:hidden transform transition-transform duration-300 shadow-[-4px_0px_20px_rgba(0,0,0,0.1)] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-[20px] right-[20px] w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col pt-[80px] px-[24px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-['Product Sans Light',sans-serif] font-light text-[#111] text-[18px] leading-[24px] py-[16px] border-b border-[rgba(0,0,0,0.1)] cursor-pointer hover:opacity-70 transition-opacity"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-[12px] mt-[24px]">
            <a
              className="bg-[#0048ff] flex h-[48px] items-center justify-center overflow-clip px-[16px] py-[10px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_12px_5px_0px_rgba(0,0,0,0.01)] hover:bg-[#0040dd] transition-colors"
              href="https://forms.gle/66XJUJFUdnqyGZsd7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="font-['Product Sans Medium',sans-serif] font-medium text-[16px] text-center text-nowrap text-white leading-[24px]">
                Book a Call
              </p>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
