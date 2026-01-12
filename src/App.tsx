import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CompanyLogos } from './components/CompanyLogos';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import { ValueProposition } from './components/ValueProposition';
import { BenefitsSection } from './components/BenefitsSection';
import { MonitoringSection } from './components/MonitoringSection';
import { ResultsInRealTime } from './components/ResultsInRealTime';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PopupModal } from './components/PopupModal';

export default function App() {
  return (
    <div className="bg-[#fffff5] min-h-screen">
      <PopupModal />
      <Header />
      <main>
        <HeroSection />
        <CompanyLogos />
        <AnimatedTestimonials />
        <ValueProposition />
        <BenefitsSection />
        <MonitoringSection />
        <ResultsInRealTime />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
