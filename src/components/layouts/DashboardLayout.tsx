'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0b1020] to-[#0f172a]">
      <Navbar />
      <main className="relative pt-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        </div>
        <div className="relative">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
