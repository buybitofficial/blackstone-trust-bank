import { Footer, Navbar, PageBanner } from '../../components/Shared';

export default function PersonalBankingPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="container py-16">
        <PageBanner
          title="Personal Banking"
          description="High-touch personal banking services with elite account management and digital convenience."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Bespoke accounts</h2>
            <p className="mt-4 text-white/70 leading-8">
              Enjoy premium checking, savings and international payment options with elevated advisory and concierge support.
            </p>
          </div>
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Dedicated guidance</h2>
            <p className="mt-4 text-white/70 leading-8">
              Our specialists help manage cash flow, credit, family wealth and cross-border strategies with confidential service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
