import { Footer, Navbar, PageBanner } from '../../components/Shared';

export default function WealthManagementPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="container py-16">
        <PageBanner
          title="Wealth Management"
          description="Investment advisory, portfolio design and family office services built around your long-term goals."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Strategic portfolios</h2>
            <p className="mt-4 text-white/70 leading-8">
              Customized investment strategies and risk-managed allocation designed to preserve capital while pursuing growth.
            </p>
          </div>
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Global advisory</h2>
            <p className="mt-4 text-white/70 leading-8">
              Access curated insight for private equity, fixed income, real assets and cross-border wealth planning.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
