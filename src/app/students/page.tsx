import Link from 'next/link';
import { 
  BookOpen, 
  ClipboardList, 
  Video, 
  Trophy, 
  Compass, 
  Star, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';

const ACADEMIC_CARDS = [
  {
    id: 'materials',
    title: 'Study Materials',
    description: 'Access notes, PDFs, videos and more for your subjects.',
    linkText: 'Browse Materials',
    href: '#academic-support',
    icon: BookOpen,
  },
  {
    id: 'quizzes',
    title: 'Practice & Quizzes',
    description: 'Test your knowledge with chapter-wise quizzes.',
    linkText: 'Start Practicing',
    href: '#academic-support',
    icon: ClipboardList,
  },
  {
    id: 'live-classes',
    title: 'Live Classes',
    description: 'Join interactive live sessions with expert teachers.',
    linkText: 'View Schedule',
    href: '#academic-support',
    icon: Video,
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Get ready for board exams with curated resources.',
    linkText: 'Explore Now',
    href: '#academic-support',
    icon: Trophy,
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Explore career options and get expert advice.',
    linkText: 'Discover Careers',
    href: '#academic-support',
    icon: Compass,
  },
  {
    id: 'co-curricular',
    title: 'Co-curricular Activities',
    description: 'Participate in competitions, clubs and talent programs.',
    linkText: 'View Opportunities',
    href: '#academic-support',
    icon: Star,
  },
];

export default function StudentsPage() {
  return (
    <div className="w-full bg-[#f8faf9] min-h-screen pb-20 font-sans">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#eaf5ef] overflow-hidden border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 z-10 py-6 sm:py-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#093824] bg-white/80 px-3.5 py-1.5 rounded-full border border-emerald-200/80 shadow-xs">
                FOR STUDENTS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Learn Today. <br />
                <span className="text-[#093824]">Lead Tomorrow.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium text-slate-600 max-w-lg leading-relaxed">
                Explore, practice and grow with engaging learning tools and resources.
              </p>

              <div className="pt-2">
                <a
                  href="#academic-support"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#093824] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition hover:bg-[#06291a] active:scale-95"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Student Image & Writeup Graphic */}
            <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end h-full">
              {/* Writeup Graphic */}
              <div className="absolute right-3 top-2 sm:right-6 sm:top-4 z-20 pointer-events-none select-none">
                <img
                  src="/students-section-writeup.png"
                  alt="Curious Minds, Brighter Futures"
                  className="w-24 sm:w-28 md:w-32 h-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Student Artwork */}
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] h-[340px] sm:h-[420px] flex items-end">
                <img
                  src="/students-hero-banner.png"
                  alt="Student learning on laptop"
                  className="w-full h-full object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Academic Support Grid Section */}
      <section id="academic-support" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Academic Support for Every Learner
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Build skills, boost confidence and achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMIC_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-200"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#093824]/10 text-[#093824] flex items-center justify-center group-hover:bg-[#093824] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#093824] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#093824] hover:text-emerald-700 transition"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Banner CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
        <div className="rounded-2xl border border-emerald-200/90 bg-[#EDF9F2] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-full bg-[#093824]/15 text-[#093824] flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900">
                Discover. Learn. Grow. Become the best version of you.
              </h4>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                Your future is full of possibilities.
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#093824] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-[#06291a] active:scale-95"
          >
            Create Student Account
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}