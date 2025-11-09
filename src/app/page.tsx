import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import WhyChooseUs from '@/components/sections/why-choose-us';
import AboutSection from '@/components/sections/about';
import FeaturedWork from '@/components/sections/featured-work';
import ServicesSection from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import PricingSection from '@/components/sections/pricing';
import Faq from '@/components/sections/faq';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="pt-[74px]">
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <AboutSection />
        <FeaturedWork />
        <ServicesSection />
        <Testimonials />
        <PricingSection />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}