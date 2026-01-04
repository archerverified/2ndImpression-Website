import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#benefits', label: 'Services' },
  { href: '#value', label: 'Use Cases' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#faq', label: 'FAQs' },
  { href: '#newsletter', label: 'Newsletter' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md">
        Skip to main content
      </a>
      
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-md relative w-full max-w-1880">
          <div className="bg-white content-stretch flex justify-between md:justify-center md:gap-[80px] lg:gap-[112.7px] items-center pl-lg pr-md py-md relative rounded-16 shadow-header max-w-[1550px] w-full border border-black/10">
            {/* Logo/Brand */}
            <div className="flex flex-col justify-center leading-0 relative shrink-0 text-[32px] text-black text-center tracking-tighter">
              <a 
                href="/" 
                className="leading-[59px] font-rocaone-bl font-thin focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm px-[15px] mx-[50px]"
                aria-label="2nd Impression - Home"
              >
                2nd Impression
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-6 h-[24px] items-center justify-center relative shrink-0" aria-label="Main navigation">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  className={`font-product text-[#212121] text-[16px] text-center text-nowrap leading-[24px] cursor-pointer hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm ${index === 0 ? 'font-medium' : 'font-light'}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex gap-[10px] items-center justify-end relative shrink-0">
              <a
                className="bg-[#242424] flex h-[48px] items-center justify-center px-md py-[10px] rounded-12 shadow-multi shrink-0 hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 border border-white/10"
                href="https://members.introduction.com/"
                aria-label="Access Client Portal"
              >
                <span className="font-product font-medium text-[16px] text-center text-nowrap text-white leading-relaxed">
                  Client Portal
                </span>
              </a>

              <a
                className="bg-primary flex h-[48px] items-center justify-center px-md py-[10px] rounded-12 shadow-multi shrink-0 hover:bg-[#0040dd] transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 border border-white/10"
                href="https://automatedrevenue.typeform.com/to/R3joZxyS"
                aria-label="Apply for Services"
              >
                <span className="font-product font-medium text-[16px] text-center text-nowrap text-white leading-relaxed">
                  Apply for Services
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-[48px] h-[48px] rounded-12 bg-primary text-white hover:bg-[#0040dd] transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[96px] z-40 bg-cream"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col p-md gap-sm" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-inter font-semibold text-black text-[18px] py-3 border-b border-black/10 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                href={link.href}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex flex-col gap-3 mt-md">
              <a
                className="bg-black flex h-[48px] items-center justify-center overflow-clip px-md py-sm rounded-12 shadow-multi hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                href="#client-portal"
                onClick={closeMobileMenu}
              >
                <span className="font-inter font-semibold text-[16px] text-center text-white leading-relaxed">
                  Client Portal
                </span>
              </a>

              <a
                className="bg-primary flex h-[48px] items-center justify-center overflow-clip px-md py-sm rounded-12 shadow-multi hover:bg-[#0040dd] transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                href="https://automatedrevenue.typeform.com/to/R3joZxyS"
                onClick={closeMobileMenu}
              >
                <span className="font-inter font-semibold text-[16px] text-center text-white leading-relaxed">
                  Apply for Services
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
