import Link from 'next/link';
import { 
  Users, 
  Search, 
  FileText, 
  Bell, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Heart
} from 'lucide-react';

const PARENT_SERVICES = [
  {
    id: 'school-finder',
    title: 'Find Top Schools',
    description: 'Explore verified schools across West Bengal by board, location, and fee structure.',
    linkText: 'Explore Schools',
    href: '/parents/find-schools',
    icon: Search,
  },
  {
    id: 'track-progress',
    title: 'Track Academic Progress',
    description: 'Monitor daily attendance, terminal marks, and teacher remarks in one dashboard.',
    linkText: 'Access Portal',
    href: '/login',
    icon: FileText,
  },
  {
    id: 'notices',
    title: 'Instant School Notices',
    description: 'Receive real-time circulars, holiday notifications, and emergency alerts.',
    linkText: 'View Updates',
    href: '/login',
    icon: Bell,
  },
  {
    id: 'teacher-comm',
    title: 'Direct Teacher Communication',
    description: 'Ask doubts, book parent-teacher meetings, and consult subject specialists directly.',
    linkText: 'Connect Now',
    href: '/login',
    icon: MessageSquare,
  },
  {
    id: 'fee-transparency',
    title: 'Fee Transparency & Schedules',
    description: 'View transparent annual fee breakdowns and receive timely reminders.',
    linkText: 'Check Fees',
    href: '/parents/find-schools',
    icon: ShieldCheck,
  },
  {
    id: 'guidance',
    title: 'Admission Guidance 2026',
    description: 'Step-by-step guidance on seat availability, entrance dates, and document checklists.',
    linkText: 'Learn More',
    href: '/parents/find-schools',
    icon: Users,
  },
];

export default function ParentsPage() {
  return (
    <div className="w-full bg-[#faf7f5] min-h-screen pb-20 font-sans">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#FAF0EA] overflow-hidden border-b border-[#F2D7CA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 z-10 py-6 sm:py-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#BA4A38] bg-white/80 px-3.5 py-1.5 rounded-full border border-[#F2D7CA] shadow-xs">
                FOR PARENTS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Your Child&apos;s <br />
                <span className="text-[#BA4A38]">Brighter Tomorrow</span> <br />
                Starts Here
              </h1>

              <p className="text-base sm:text-lg font-medium text-slate-600 max-w-lg leading-relaxed">
                Get the right information, guidance and support to make confident education decisions.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/parents/find-schools"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#BA4A38] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition hover:bg-[#a13f2f] active:scale-95"
                >
                  Find Schools
                  <ArrowRight className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white border-2 border-[#BA4A38] px-7 py-3.5 text-sm sm:text-base font-bold text-[#BA4A38] shadow-xs transition hover:bg-[#BA4A38] hover:text-white active:scale-95"
                >
                  Parent Login
                </Link>
              </div>
            </div>

            {/* Right Parents & Girl Artwork */}
            <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end h-full">
              <div className="absolute right-4 top-4 sm:right-10 sm:top-6 z-20 pointer-events-none select-none">
                <div className="flex items-center gap-1.5 text-rose-800/80 text-xs italic font-serif bg-white/90 px-3 py-1 rounded-full border border-rose-200 shadow-xs">
                  <Heart className="h-3.5 w-3.5 text-rose-600 fill-rose-600/30" />
                  <span>Informed Parents, Brighter Futures ♡</span>
                </div>
              </div>

              <div className="relative w-full max-w-[460px] sm:max-w-[500px] h-[340px] sm:h-[420px] flex items-end">
                <img
                  src="/parent-section.png"
                  alt="Parents and child"
                  className="w-full h-full object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Parent Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Guidance & Resources for Every Parent
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Partnering in your child&apos;s educational milestones every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARENT_SERVICES.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#F2D7CA]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#BA4A38]/10 text-[#BA4A38] flex items-center justify-center group-hover:bg-[#BA4A38] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#BA4A38] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#BA4A38] hover:text-[#8a3326] transition"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Banner CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
        <div className="rounded-2xl border border-[#F2D7CA] bg-[#FAF0EA] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-full bg-[#BA4A38]/15 text-[#BA4A38] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900">
                A Unified Platform for Parents and Educators
              </h4>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Join thousands of parents making informed school decisions.
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#BA4A38] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-[#a13f2f] active:scale-95"
          >
            Create Parent Account
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </section>
    </div>
  );
}
