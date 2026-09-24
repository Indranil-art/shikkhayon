import Link from 'next/link';
import { 
  School, 
  UserCheck, 
  Megaphone, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

const SCHOOL_SOLUTIONS = [
  {
    id: 'admission-mgmt',
    title: 'Admissions & Enquiry CRM',
    description: 'Track, manage, and convert parent enquiries across every admission pipeline stage.',
    linkText: 'Manage Leads',
    href: '/login',
    icon: UserCheck,
  },
  {
    id: 'profile-showcase',
    title: 'Verified School Showcase',
    description: 'Display transparent fee structures, facilities, board accreditations, and achievements.',
    linkText: 'Build Profile',
    href: '/login',
    icon: School,
  },
  {
    id: 'announcements',
    title: 'Broadcast & Communication',
    description: 'Send circulars, holiday alerts, and emergency updates to all classes instantly.',
    linkText: 'Explore Broadcasting',
    href: '/login',
    icon: Megaphone,
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Gain real-time insights on admission trends, student engagement, and parent queries.',
    linkText: 'View Insights',
    href: '/login',
    icon: BarChart3,
  },
  {
    id: 'verification',
    title: 'Accreditation & Badges',
    description: 'Get verified on Shikkhayon to build institutional trust and credibility across Bengal.',
    linkText: 'Get Verified',
    href: '/login',
    icon: ShieldCheck,
  },
  {
    id: 'digital-setu',
    title: 'Digital Notice Desk',
    description: 'Eliminate chaotic messaging groups with a structured, office-hours query desk.',
    linkText: 'Learn More',
    href: '/login',
    icon: Sparkles,
  },
];

export default function SchoolsPage() {
  return (
    <div className="w-full bg-[#f6f9fc] min-h-screen pb-20 font-sans">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#EEF6FC] overflow-hidden border-b border-[#CFE2F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 z-10 py-6 sm:py-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#1A5C9B] bg-white/80 px-3.5 py-1.5 rounded-full border border-[#CFE2F2] shadow-xs">
                FOR SCHOOLS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Partner in <br />
                <span className="text-[#1A5C9B]">Progress</span>
              </h1>

              <p className="text-base sm:text-lg font-medium text-slate-600 max-w-lg leading-relaxed">
                Get the tools, visibility and support to manage admissions, engage with parents and build a stronger school community.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#1A5C9B] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition hover:bg-[#154a7c] active:scale-95"
                >
                  Register Your School
                  <ArrowRight className="h-4 w-4 text-sky-200" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white border-2 border-[#1A5C9B] px-7 py-3.5 text-sm sm:text-base font-bold text-[#1A5C9B] shadow-xs transition hover:bg-[#1A5C9B] hover:text-white active:scale-95"
                >
                  School Admin Login
                </Link>
              </div>
            </div>

            {/* Right School Partner Artwork */}
            <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end h-full">
              <div className="absolute right-4 top-4 sm:right-10 sm:top-6 z-20 pointer-events-none select-none">
                <div className="flex items-center gap-1.5 text-sky-900/80 text-xs italic font-serif bg-white/90 px-3 py-1 rounded-full border border-sky-200 shadow-xs">
                  <School className="h-4 w-4 text-sky-700" />
                  <span>Stronger Schools, Brighter Communities</span>
                </div>
              </div>

              <div className="relative w-full max-w-[460px] sm:max-w-[500px] h-[340px] sm:h-[420px] flex items-end">
                <img
                  src="/school-section.png"
                  alt="School Administrator"
                  className="w-full h-full object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. School Solutions Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Institutional Solutions for Bengal Schools
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Streamline admissions, communicate efficiently, and showcase educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOOL_SOLUTIONS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#CFE2F2]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A5C9B]/10 text-[#1A5C9B] flex items-center justify-center group-hover:bg-[#1A5C9B] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#1A5C9B] transition-colors">
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
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1A5C9B] hover:text-[#133f69] transition"
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
        <div className="rounded-2xl border border-[#CFE2F2] bg-[#EEF6FC] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-full bg-[#1A5C9B]/15 text-[#1A5C9B] flex items-center justify-center shrink-0">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900">
                Ready to Expand Your School&apos;s Reach?
              </h4>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Join the statewide Shikkhayon institutional network today.
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A5C9B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-[#154a7c] active:scale-95"
          >
            Register Your School
            <ArrowRight className="w-4 h-4 text-sky-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}