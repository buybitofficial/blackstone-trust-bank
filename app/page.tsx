import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import {
  Navbar,
  Footer,
  AccountDashboard,
  ServicesSection,
  SecuritySection,
  Testimonials,
  MobileBankingSection,
  ContactSection,
} from '../components/Shared';

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="container relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-96 bg-hero-glow opacity-90 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gold">
              <ShieldCheck size={16} /> Private Wealth Banking
            </div>
            <div className="space-y-6">
              <p className="text-base uppercase tracking-[0.45em] text-white/50">Blackstone Trust Bank</p>
              <h1 className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
                Banking Built on Trust. Powered by Innovation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                Secure digital banking, wealth management, and global financial solutions designed for modern clients.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/online-banking-login" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-black shadow-xl shadow-gold/15 transition hover:brightness-95">
                Open Account
              </Link>
              <Link href="/online-banking-login" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                Sign In
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                'Global treasury and private wealth services',
                'Enterprise-grade security and compliance',
                'Seamless mobile account controls',
              ].map((feature) => (
                <div key={feature} className="glass-card rounded-3xl border-white/10 p-5 text-sm text-white/70">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[48px] border border-white/10 bg-blackstone/80 p-8 shadow-glass backdrop-blur-xl">
            <div className="rounded-4xl border border-white/10 bg-blackstone/90 p-6 text-white shadow-inner shadow-black/20">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Account Summary</span>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">Private</span>
              </div>
              <div className="mt-8 space-y-6">
                <div className="rounded-[32px] bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">Total Balance</p>
                  <p className="mt-4 text-4xl font-semibold text-white">$228,420.76</p>
                </div>
                <div className="grid gap-4">
                  {[
                    { title: 'Checking', amount: '$18,340.22' },
                    { title: 'Savings', amount: '$72,900.00' },
                    { title: 'Portfolio', amount: '$137,180.54' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[32px] bg-blackstone/70 p-5">
                      <p className="text-sm text-white/60">{item.title}</p>
                      <p className="mt-3 text-xl font-semibold text-white">{item.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[32px] bg-white/5 p-5 text-sm text-white/70">
                  <p className="text-white/80">Recent Transactions</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: 'Private Equity Transfer', value: '- $48,000' },
                      { label: 'Dividend Income', value: '+ $1,250' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="font-semibold text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/online-banking-login" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95">
                View premium dashboard <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AccountDashboard />
      <ServicesSection />
      <SecuritySection />
      <Testimonials />
      <MobileBankingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
