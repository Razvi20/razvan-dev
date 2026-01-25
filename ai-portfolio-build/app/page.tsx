import {
  HeroSection,
  TrustSection,
  ShowcaseSection,
  ExpertiseSection,
  ContactSection,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ShowcaseSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
