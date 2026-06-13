import { Footer, Navbar, PageBanner } from '../../components/Shared';

export default function BusinessBankingPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="container py-16">
        <PageBanner
          title="Business Banking"
          description="Financial infrastructure for enterprises and high-growth companies operating across markets."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Treasury Services', description: 'Real-time cash management and liquidity optimization for global business operations.' },
            { title: 'Corporate Credit', description: 'Flexible credit facilities and bespoke lending backed by institutional expertise.' },
            { title: 'Payments', description: 'Secure digital payments, international settlements, and integrated card controls.' },
          ].map((item) => (
            <div key={item.title} className="glass-panel rounded-[36px] p-8">
              <p className="text-xl font-semibold text-white">{item.title}</p>
              <p className="mt-4 text-white/70 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
