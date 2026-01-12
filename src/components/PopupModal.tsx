import { useState, useEffect } from 'react';

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showConfirmation) {
          setShowConfirmation(false);
        } else if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen || showConfirmation) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, showConfirmation]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
      setIsOpen(false);
      setShowConfirmation(true);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  // Confirmation Modal
  if (showConfirmation) {
    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleConfirmationClose}
          aria-hidden="true"
        />
        
        {/* Confirmation Content */}
        <div className="relative z-10 bg-white rounded-[24px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] w-full max-w-[500px] max-h-[90vh] overflow-y-auto p-8 border-[3px] border-[rgba(17,17,17,0.1)]">
          {/* Header */}
          <div className="mb-6">
            <h2 id="confirmation-title" className="font-['RocaOne-Bl',sans-serif] text-[24px] text-[#0048ff] mb-4">
              Archer says
            </h2>
            
            <p className="font-['Product_Sans',sans-serif] text-[16px] text-[#111] leading-[24px] mb-4">
              Great news! You've just been emailed your free ChatGPT Google Review Removal assistant.
            </p>
            
            <p className="font-['Product_Sans',sans-serif] text-[16px] text-[#111] leading-[24px] mb-4">
              If you don't see it shortly, please check your spam folder and mark it "not as spam" to ensure future AI tips and tricks and other free gifts arrive safely!
            </p>
            
            <p className="font-['Product_Sans',sans-serif] text-[16px] text-[#111] leading-[24px] mb-4">
              Have any questions or need any help with review removals? Feel free to reply to the email sent to you and we can work on a solution together.
            </p>
            
            <p className="font-['Product_Sans',sans-serif] text-[16px] text-[#111] leading-[24px]">
              Best,<br />
              Archer, Founder of 2nd Impression
            </p>
          </div>

          {/* OK Button */}
          <div className="flex justify-end">
            <button
              onClick={handleConfirmationClose}
              className="bg-[#0048ff] h-[48px] px-8 rounded-[12px] flex items-center justify-center hover:bg-[#0040dd] transition-colors font-['Product_Sans',sans-serif] font-bold text-[16px] text-white"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-[24px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] w-full max-w-[500px] max-h-[90vh] overflow-y-auto p-8 border-[3px] border-[rgba(17,17,17,0.1)]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="font-['RocaOne-Bl',sans-serif] text-[32px] text-[#0048ff] mb-2">
            Happy New Years!
          </p>
          <h2 id="modal-title" className="font-['Product_Sans',sans-serif] font-bold text-[24px] text-black leading-tight">
            Remove Negative Google Reviews<br />
            with ChatGPT for FREE ⚡️
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="font-['Product_Sans',sans-serif] text-[17px] text-[rgba(17,17,17,0.65)] leading-[24px]">
            Do you use ChatGPT? Submit your email to receive a{' '}
            <span className="font-bold text-[#0048ff] underline">FREE GPT</span>{' '}
            that helps remove negative reviews!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-full overflow-hidden border-2 border-[#0048ff] bg-white">
            <input
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-[56px] px-6 bg-transparent border-none outline-none font-['Product_Sans',sans-serif] text-[16px] text-center text-black placeholder:text-[#a5a8ae]"
              required
              aria-label="Email address"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black h-[56px] rounded-full flex items-center justify-center hover:bg-[#222] transition-colors font-['Product_Sans',sans-serif] font-bold text-[18px] text-white"
          >
            Send me my GPT! 🤖
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[12px] text-[rgba(17,17,17,0.6)] font-['Product_Sans',sans-serif] mt-6">
          Used by Moderators at Google, Reddit, Binance, & more
        </p>
      </div>
    </div>
  );
}
