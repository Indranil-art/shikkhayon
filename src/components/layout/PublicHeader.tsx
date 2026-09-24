import Link from 'next/link';
import { Search } from 'lucide-react';

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Shikkhayon"
            className="h-12 w-auto object-contain transition group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#093824]">Shikkhayon</span>
            <span className="block text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
              Rooted in values - Rising with knowledge
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-base font-bold text-[#093824] border-b-2 border-[#093824] pb-1">
            Home
          </Link>
          <Link href="/about" className="text-base font-semibold text-slate-600 transition hover:text-[#093824]">
            About
          </Link>
          <Link href="/academics" className="text-base font-semibold text-slate-600 transition hover:text-[#093824]">
            Academics
          </Link>
          <Link href="/parents/find-schools" className="text-base font-semibold text-slate-600 transition hover:text-[#093824]">
            Admissions
          </Link>
          <Link href="/news-events" className="text-base font-semibold text-slate-600 transition hover:text-[#093824]">
            News & Events
          </Link>
          <Link href="/contact" className="text-base font-semibold text-slate-600 transition hover:text-[#093824]">
            Contact
          </Link>
        </nav>

        {/* Search & Login Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/parents/find-schools"
            aria-label="Search Schools"
            className="p-2 text-slate-600 hover:text-[#093824] transition rounded-full hover:bg-slate-100"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/login"
            className="rounded-xl bg-[#093824] px-6 py-2.5 text-base font-bold text-white shadow-sm transition hover:bg-[#06291a] active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}