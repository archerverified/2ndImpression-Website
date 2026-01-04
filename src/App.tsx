import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import { BenefitsSection } from './components/BenefitsSection';
import { ValueProposition } from './components/ValueProposition';
import { FAQSection } from './components/FAQSection';
import { CaseStudies } from './components/CaseStudies';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PopupModal } from './components/PopupModal';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-black overflow-x-hidden">
      <Header />
      <main id="main-content" role="main" className="max-w-[2310px] mx-auto px-md lg:px-xl">
        <HeroSection />
        <AnimatedTestimonials />
        <BenefitsSection />
        <ValueProposition />
        <CaseStudies />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <PopupModal />
    </div>
  );
}
