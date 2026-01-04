import { useState, useEffect, useCallback, useRef, type FormEvent } from 'react';
import { X } from 'lucide-react';

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Email submitted:', email);
      alert(`Thanks! We'll send the GPT to ${email}`);
      setEmail('');
      setIsSubmitting(false);
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-md"
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
      <div 
        ref={modalRef}
        className="relative bg-white rounded-3xl shadow-multi w-full max-w-[541px] p-8 border-[3px] border-[rgba(17,17,17,0.1)]"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-black" aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-rocaone-bl font-bold text-[32px] text-primary mb-2">
            Happy New Years!
          </p>
          <h2 id="modal-title" className="font-product font-bold text-[28px] text-black leading-tight mb-4">
            Remove Negative Google Reviews with ChatGPT for FREE ⚡️
          </h2>
          <p className="font-inter text-[18px] text-[rgba(17,17,17,0.7)]">
            Do you use ChatGPT? Submit your email to receive a <span className="font-bold text-primary">FREE GPT</span> that helps remove negative reviews!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-full overflow-hidden border-2 border-primary">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-[56px] px-6 bg-transparent border-none outline-none font-inter text-[18px] text-center text-black placeholder:text-[#a5a8ae]"
              required
              disabled={isSubmitting}
              aria-label="Email address"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black h-xl rounded-full flex items-center justify-center hover:bg-[#222] transition-colors disabled:opacity-50 font-inter font-bold text-[20px] text-white"
          >
            {isSubmitting ? 'Sending...' : 'Send me my GPT! 🤖'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[12px] text-[rgba(17,17,17,0.6)] font-inter mt-6">
          Used by Moderators at Google, Reddit, Binance, & more
        </p>
      </div>
    </div>
  );
}
