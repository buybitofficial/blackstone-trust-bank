'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight,
  Banknote,
  Briefcase,
  CreditCard,
  Globe,
  Lock,
  ShieldCheck,
  ShieldAlert,
  Shield,
  Sparkles,
  Star,
  User,
  Users,
  Wallet,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/personal-banking', label: 'Personal' },
  { href: '/business-banking', label: 'Business' },
  { href: '/wealth-management', label: 'Wealth' },
  { href: '/online-banking-login', label: 'Login' },
  { href: '/contact-us', label: 'Contact' },
];

const services = [
  { icon: Briefcase, title: 'Personal Banking', description: 'Custom accounts and concierge support for modern clients.' },
  { icon: Banknote, title: 'Business Banking', description: 'Streamlined treasury tools and premium business credit solutions.' },
  { icon: Sparkles, title: 'Wealth Management', description: 'Family office-grade portfolios and advisory services.' },
  { icon: Globe, title: 'International Transfers', description: 'Global payment rails with currency intelligence.' },
  { icon: CreditCard, title: 'Credit Services', description: 'Tailored lending and elite credit card programs.' },
  { icon: Wallet, title: 'Digital Banking', description: 'Secure mobile access, payments and investment tracking.' },
];

const securityFeatures = [
  { icon: Lock, title: '256-bit Encryption', description: 'Enterprise-level cryptographic protection for every transaction.' },
  { icon: ShieldCheck, title: 'Fraud Protection', description: 'Continuous risk monitoring backed by premium alerts.' },
  { icon: ShieldAlert, title: 'Multi-Factor Authentication', description: 'Secure access with biometric and token verification.' },
  { icon: Shield, title: 'Secure Transactions', description: 'Safe transfers, secure statements, and confidential wealth control.' },
];

const testimonials = [
  { name: 'Ava Sinclair', role: 'Private Investor', quote: 'Every transfer and investment feels effortless. The onboarding was seamless, and the team feels world-class.', initials: 'AS' },
  { name: 'Liam Hart', role: 'Founder', quote: 'Blackstone Trust Bank elevated our treasury and global cash flow with a truly premium experience.', initials: 'LH' },
  { name: 'Mia Chen', role: 'Family Office', quote: 'The mobile insights are elegant and precise. This is how modern private banking should perform.', initials: 'MC' },
];

const accountSummary = {
  balance: '$228,420.76',
  accounts: [
    { label: 'Checking Account', amount: '$18,340.22', icon: Wallet, accent: 'from-gold-400 to-amber-500' },
    { label: 'Savings Account', amount: '$72,900.00', icon: Banknote, accent: 'from-slate-700 to-slate-900' },
    { label: 'Investment Portfolio', amount: '$137,180.54', icon: Star, accent: 'from-indigo-500 to-violet-500' },
  ],
  transactions: [
    { date: 'Jun 07', description: 'Private Equity Transfer', amount: '- $48,000.00', status: 'Approved' },
    { date: 'Jun 06', description: 'Card Payment – Aldo & Co.', amount: '- $620.50', status: 'Approved' },
    { date: 'Jun 05', description: 'Dividend Income', amount: '+ $1,250.00', status: 'Settled' },
    { date: 'Jun 04', description: 'Savings Allocation', amount: '+ $5,200.00', status: 'Pending' },
  ],
};

function shimmerStripe(strength = 5) {
  return `linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.13) ${strength}%, rgba(255,255,255,0.05) 100%)`;
}

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('blackstone-theme');
    if (stored === 'light') {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('blackstone-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('blackstone-theme', 'light');
    }
  }, [darkMode, mounted]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl bg-blackstone/80">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <Image src="/logo.jpg" alt="Blackstone Trust Bank" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Blackstone Trust</p>
            <p className="font-semibold text-xl tracking-tight text-white">Bank</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setDarkMode((current) => !current)}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white transition hover:border-gold hover:text-gold"
          >
            {darkMode ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blackstone/80 py-14 text-sm text-white/60">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <p className="mb-4 font-semibold text-white">Blackstone Trust Bank</p>
          <p className="max-w-md leading-7 text-white/70">
            Luxury digital banking, global wealth services, and secure financial products for discerning clients.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-white">Company</p>
            <ul className="space-y-2 text-white/60">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Services</p>
            <ul className="space-y-2 text-white/60">
              <li>Personal Banking</li>
              <li>Business Banking</li>
              <li>Wealth Management</li>
              <li>Digital Banking</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-white">Connect</p>
          <div className="flex items-center gap-3 text-white/70">
            <Link href="#" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold hover:text-gold">
              <Users size={18} />
            </Link>
            <Link href="#" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold hover:text-gold">
              <Globe size={18} />
            </Link>
            <Link href="#" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold hover:text-gold">
              <Star size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm uppercase tracking-[0.4em] text-gold">{title}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{subtitle}</h2>
    </div>
  );
}

export function AccountDashboard() {
  return (
    <section className="container relative overflow-hidden py-16">
      <div className="absolute inset-x-0 top-0 h-96 bg-hero-glow opacity-80 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div whileInView={{ opacity: [0, 1], y: [40, 0] }} viewport={{ once: true }} className="glass-card p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Account balance</p>
              <p className="mt-3 text-5xl font-semibold text-white">{accountSummary.balance}</p>
              <p className="text-sm text-white/60">Premium account summary across checking, savings and investments.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
              Quick Transfer <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {accountSummary.accounts.map((account) => (
              <div key={account.label} className="rounded-3xl border border-white/10 bg-blackstone/70 p-6 shadow-xl">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${account.accent} text-white`}>
                  <account.icon size={20} />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/60">{account.label}</p>
                <p className="mt-4 text-2xl font-semibold text-white">{account.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div whileInView={{ opacity: [0, 1], x: [40, 0] }} viewport={{ once: true }} className="glass-card p-8">
          <h3 className="text-xl font-semibold text-white">Recent activity</h3>
          <div className="mt-6 space-y-4">
            {accountSummary.transactions.map((item) => (
              <div key={item.date} className="rounded-3xl border border-white/10 bg-blackstone/50 p-4 text-sm text-white/75">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{item.description}</p>
                    <p className="text-xs text-white/50">{item.date}</p>
                  </div>
                  <p className="text-right font-semibold text-white">{item.amount}</p>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">{item.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-blackstone/60 p-6">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Daily cash flow</span>
              <strong className="text-white">$5,120</strong>
            </div>
            <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-white/5">
              {[30, 55, 80, 60, 95, 40].map((width, index) => (
                <span key={index} style={{ width: `${width}%` }} className="mr-1 block rounded-full bg-gradient-to-r from-gold to-white/70" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="container py-16">
      <SectionHeader title="Banking Services" subtitle="Premium services tailored for sophisticated clients." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <motion.article key={service.title} whileHover={{ y: -6 }} className="glass-card p-8 transition-transform duration-300">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 text-gold shadow-lg shadow-gold/10">
              <service.icon size={24} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/70">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-8">
          <SectionHeader title="Security" subtitle="Advanced protection engineered for premium banking." />
          <p className="mt-5 max-w-xl text-white/70">
            Every account and transaction is fortified with layered encryption, intelligent fraud defenses, and secure authentication.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {securityFeatures.map((feature) => (
            <motion.div key={feature.title} whileHover={{ scale: 1.02 }} className="glass-card p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-gold">
                <feature.icon size={20} />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-white">{feature.title}</h4>
              <p className="mt-3 text-sm leading-7 text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container py-16">
      <SectionHeader title="Testimonials" subtitle="Trusted by clients and private offices around the world." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.div key={item.name} whileHover={{ y: -6 }} className="glass-card p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gold/10 text-lg font-semibold uppercase text-gold">
                {item.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/60">{item.role}</p>
              </div>
            </div>
            <p className="mt-6 text-white/70">“{item.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function MobileBankingSection() {
  return (
    <section className="container py-16">
      <div className="grid gap-12 items-center lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader title="Mobile Banking App" subtitle="A sophisticated app built for a mobile-first banking lifestyle." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Instant Transfers',
              'Bill Payments',
              'Investment Tracking',
              'Card Controls',
            ].map((feature) => (
              <div key={feature} className="glass-card rounded-3xl p-6 text-white/80">
                <p className="font-semibold text-white">{feature}</p>
                <p className="mt-3 text-sm leading-7 text-white/60">Reliable workflows designed for the modern banking experience.</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div whileInView={{ opacity: [0, 1], scale: [0.95, 1] }} viewport={{ once: true }} className="relative mx-auto w-full max-w-[360px]">
          <div className="absolute inset-x-0 top-12 h-40 rounded-[48px] bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-blackstone/90 p-6 shadow-glass">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.35em] text-white/60">Blackstone App</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-gold">Elite</span>
            </div>
            <div className="mt-8 space-y-6">
              <div className="rounded-[32px] bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-white/50">Available Balance</p>
                <p className="mt-3 text-3xl font-semibold text-white">$169,420.50</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[32px] bg-white/5 p-5">
                  <div className="flex items-center justify-between text-white/70">
                    <span>Transfers</span>
                    <span>Instant</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gold" />
                  </div>
                </div>
                <div className="rounded-[32px] bg-white/5 p-5">
                  <div className="flex items-center justify-between text-white/70">
                    <span>Investments</span>
                    <span>Up 14%</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="container py-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr]">
        <div className="glass-panel p-10">
          <SectionHeader title="Contact" subtitle="Reach out to our private banking team." />
          <p className="mt-5 max-w-xl text-white/70">
            For partnership inquiries, concierge support, or bespoke financial services, complete the form and a senior advisor will respond promptly.
          </p>
        </div>

        <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass-card rounded-[36px] p-8">
          <div className="grid gap-6">
            {[
              { label: 'Full Name', type: 'text', name: 'name' },
              { label: 'Email', type: 'email', name: 'email' },
              { label: 'Phone Number', type: 'tel', name: 'phone' },
            ].map((field) => (
              <label key={field.name} className="space-y-3 text-sm text-white/80">
                <span className="font-medium text-white">{field.label}</span>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full rounded-3xl border border-white/10 bg-blackstone/60 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder={field.label}
                />
              </label>
            ))}
            <label className="space-y-3 text-sm text-white/80">
              <span className="font-medium text-white">Message</span>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-3xl border border-white/10 bg-blackstone/60 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Tell us about your request"
              />
            </label>
          </div>
          <button type="submit" className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-black transition hover:brightness-95">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function LoginExperience() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactor, setTwoFactor] = useState('');
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.toLowerCase() === 'easton' && password === 'sam1234') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-10">
          <SectionHeader title="Online Banking Login" subtitle="Secure access to your elite banking dashboard." />
          <p className="mt-5 max-w-xl text-white/70">
            Enter your login details to access a premium private banking experience. Use username <span className="font-semibold text-white">easton</span> and password <span className="font-semibold text-white">sam1234</span>.
          </p>
          <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-blackstone/60 p-6 text-sm text-white/70">
            <p><span className="font-semibold">Remember Me:</span> Optional personalization for secure sessions.</p>
            <p><span className="font-semibold">Forgot Password:</span> Reset your credentials through concierge support.</p>
            <p><span className="font-semibold">Two-Factor Authentication:</span> Optional entry field for enhanced security.</p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-[36px] p-8">
          {status !== 'success' ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">Username</label>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-blackstone/60 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="easton"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-blackstone/60 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="sam1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Two-Factor Authentication</label>
                <input
                  value={twoFactor}
                  onChange={(event) => setTwoFactor(event.target.value)}
                  type="text"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-blackstone/60 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="Enter security code"
                />
              </div>
              <div className="flex items-center justify-between gap-4 text-sm text-white/70">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="h-4 w-4 rounded border-white/20 bg-blackstone/60 text-gold focus:ring-gold" />
                  Remember Me
                </label>
                <button type="button" className="text-gold transition hover:text-white">Forgot Password?</button>
              </div>
              {status === 'error' && <p className="text-sm text-red-400">Incorrect login details. Please try again.</p>}
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:brightness-95">
                Sign In
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="rounded-3xl bg-blackstone/70 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-white/50">Welcome back</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Easton</h3>
                <p className="mt-2 text-sm text-white/70">Your premium dashboard is ready with secure global services and treasury insights.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Available Balance', value: '$128,340.12' },
                  { label: 'Active Credit', value: '$240,000' },
                  { label: 'Portfolio Value', value: '$724,900.56' },
                  { label: 'Pending Transfers', value: '$18,200.00' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white/5 p-5">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setStatus('idle')} className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Log Out
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function PageBanner({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-panel my-10 rounded-[36px] border border-white/10 bg-blackstone/80 px-8 py-12 text-white/80">
      <h1 className="text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
    </div>
  );
}
