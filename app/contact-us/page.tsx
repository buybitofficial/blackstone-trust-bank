import { ContactSection, Footer, Navbar, PageBanner } from '../../components/Shared';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="container py-16">
        <PageBanner
          title="Contact Us"
          description="Speak directly with our banking advisors or request an introduction to bespoke financial services."
        />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
