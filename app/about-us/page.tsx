import { Footer, Navbar, PageBanner } from '../../components/Shared';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="container py-16">
        <PageBanner
          title="About Us"
          description="Blackstone Trust Bank delivers private banking, elite financial services, and global digital wealth solutions."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Our Philosophy</h2>
            <p className="mt-4 text-white/70 leading-8">
              We combine best-in-class digital tools with the confidentiality and dedication expected from a world-class private bank.
            </p>
          </div>
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Our Expertise</h2>
            <p className="mt-4 text-white/70 leading-8">
              From global treasury to wealth planning, our services are engineered for high-net-worth clients and corporate leaders.
            </p>
          </div>
          <div className="glass-panel rounded-[36px] p-10">
            <h2 className="text-2xl font-semibold text-white">Global Reach</h2>
            <p className="mt-4 text-white/70 leading-8">
              Secure banking across markets with seamless international transfers, compliance intelligence and trusted service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
