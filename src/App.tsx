import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import { BenefitsSection } from './components/BenefitsSection';
import { ValueProposition } from './components/ValueProposition';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import AnimatedPeople from './components/AnimatedPeople';
import { PopupModal } from './components/PopupModal';

export default function App() {
  return (
    <div className="bg-[#fffff5] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnimatedTestimonials />
        <BenefitsSection />
        <ValueProposition />
        <AnimatedPeople />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <PopupModal />
    </div>
  );
}