'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  PlayCircle, 
  BookOpen, 
  X, 
  GraduationCap, 
  School as SchoolIcon,
  Heart
} from 'lucide-react';

interface BlogPost {
  id: string;
  type: 'vlog' | 'article';
  category: string;
  title: string;
  img: string;
  iconColor: string;
  youtubeId?: string;
  content?: string[];
}

const EDUCATIONAL_POSTS: BlogPost[] = [
  {
    id: '1',
    type: 'article',
    category: 'ADMISSIONS 2026',
    title: 'Top Board Affiliations in Bengal: WBBSE, CBSE & ICSE Explained',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    iconColor: 'bg-emerald-700',
    content: [
      'Selecting the right academic board is among the most consequential choices for a parent in West Bengal.',
      'While CBSE emphasizes national competitive frameworks like JEE and NEET, ICSE delivers in-depth language arts and comprehensive application-oriented sciences.',
      'The WBBSE syllabus provides rich cultural anchoring, strong mathematical foundations, and seamless alignment with state educational councils.'
    ]
  },
  {
    id: '2',
    type: 'vlog',
    category: 'CAMPUS TOUR',
    title: 'Smart Classrooms & STEM Labs: Inside Top Kolkata Institutions',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    iconColor: 'bg-rose-600',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    type: 'article',
    category: 'HOLISTIC GROWTH',
    title: 'Balancing Co-Curriculars with Board Exam Preparation',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    iconColor: 'bg-emerald-700',
    content: [
      'Holistic child growth cannot happen in isolation from artistic, athletic, and exploratory pursuits.',
      'Leading educators recommend structured study blocks paired with at least 45 minutes of daily physical sports or creative practice.',
      'Active extracurricular participation sharpens cognitive resilience and prevents academic burnout during terminal exam phases.'
    ]
  }
];

const SHIKKHAYON_QUOTES = [
  { quote: "Education is not just about learning facts, but about shaping better human beings.", author: "Shikkhayon", month: "January" },
  { quote: "To nurture a curious mind is to build an unshakeable foundation for life.", author: "Shikkhayon", month: "February" },
  { quote: "Rooted in values, rising with knowledge for a brighter tomorrow.", author: "Shikkhayon", month: "March" },
  { quote: "True learning ignites when compassion, discipline, and curiosity meet.", author: "Shikkhayon", month: "April" },
  { quote: "Every child holds a world of potential waiting for the right guidance.", author: "Shikkhayon", month: "May" },
  { quote: "A school is not just a classroom; it is a sanctuary for future citizens.", author: "Shikkhayon", month: "June" },
  { quote: "Education is the light that dispels fear and nurtures genuine human dignity.", author: "Shikkhayon", month: "July" },
  { quote: "Empowering young thinkers today creates responsible leaders tomorrow.", author: "Shikkhayon", month: "August" },
  { quote: "Values define who we are; knowledge defines how far we can journey.", author: "Shikkhayon", month: "September" },
  { quote: "When learning inspires character, success naturally follows.", author: "Shikkhayon", month: "October" },
  { quote: "Curiosity is the seed; holistic education is the sunshine.", author: "Shikkhayon", month: "November" },
  { quote: "Together we grow, together we learn, together we build tomorrow.", author: "Shikkhayon", month: "December" },
];

const FAMOUS_EDUCATOR_QUOTES = [
  { quote: "Education is the manifestation of the perfection already in man.", author: "Swami Vivekananda", designation: "Philosopher & Youth Icon", month: "January" },
  { quote: "The highest education is that which does not merely give us information but makes our life in harmony with all existence.", author: "Rabindranath Tagore", designation: "Nobel Laureate & Founder of Visva-Bharati", month: "February" },
  { quote: "Knowledge becomes true wisdom only when it is devoted to the elevation of society.", author: "Ishwar Chandra Vidyasagar", designation: "Polymath & Educational Reformer", month: "March" },
  { quote: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.", author: "Dr. A.P.J. Abdul Kalam", designation: "Scientist & Teacher", month: "April" },
  { quote: "The true teachers are those who help us think for ourselves.", author: "Dr. Sarvepalli Radhakrishnan", designation: "Philosopher & 2nd President of India", month: "May" },
  { quote: "Cultivation of mind should be the ultimate aim of human existence.", author: "Dr. B.R. Ambedkar", designation: "Scholar, Jurist & Reformer", month: "June" },
  { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", designation: "Global Statesman & Visionary", month: "July" },
  { quote: "Awake, arise, and educate. Smash traditions—liberate!", author: "Savitribai Phule", designation: "Pioneer of Women's Education", month: "August" },
  { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", designation: "Leader & Thinker", month: "September" },
  { quote: "The object of education is to prepare the young to educate themselves throughout their lives.", author: "Robert M. Hutchins", designation: "Educational Philosopher", month: "October" },
  { quote: "Education must foster independence of thought and depth of soul.", author: "Sri Aurobindo", designation: "Philosopher & Yogi", month: "November" },
  { quote: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.", author: "Confucius", designation: "Philosopher & Teacher", month: "December" },
];

export default function HomePage() {
  const [blogTab, setBlogTab] = useState<'All' | 'vlog' | 'article'>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const currentMonthIndex = new Date().getMonth();
  const shikkhayonQuote = SHIKKHAYON_QUOTES[currentMonthIndex];
  const educatorQuote = FAMOUS_EDUCATOR_QUOTES[currentMonthIndex];

  const filteredPosts = EDUCATIONAL_POSTS.filter(
    (post) => blogTab === 'All' || post.type === blogTab
  );

  return (
    <div className="space-y-12 pb-20 font-sans">
      {/* 1. Hero Campus Section */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-sky-50 sm:min-h-[580px]">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right] sm:bg-right"
          style={{ backgroundImage: `url('/hero-banner.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent lg:w-3/5" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-14 sm:min-h-[580px] sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-wider text-[#093824] bg-emerald-100/90 px-4 py-1.5 rounded-full border border-emerald-200 shadow-sm">
              A Community For Brighter Futures
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl sm:leading-[1.1]">
              Together <br />
              <span className="text-[#093824]">We Grow</span>
            </h1>
            <p className="text-lg sm:text-2xl font-medium leading-relaxed text-slate-700">
              At Shikkhayon, we nurture curious minds, support every learner, and build a strong foundation for life.
            </p>
            <div className="pt-2">
              <Link
                href="/students"
                className="inline-flex items-center gap-3 rounded-xl bg-[#093824] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#06291a] active:scale-95"
              >
                Discover Shikkhayon
                <ArrowRight className="h-5 w-5 text-emerald-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Segment Portal Cards with Blended Cutouts and Direct Subpage Links */}
      <section className="w-full max-w-[1540px] mx-auto px-2.5 sm:px-4 lg:px-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          
          {/* Card 1: FOR STUDENTS */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#C9EBD7] bg-[#EDF9F2] p-7 sm:p-8 shadow-sm transition hover:shadow-md min-h-[460px]">
            <div className="relative z-10 max-w-[60%] space-y-3.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600 block">
                FOR STUDENTS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Learn Today. <br />
                Lead Tomorrow.
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed pt-1">
                Explore, practice and grow with engaging learning tools and resources.
              </p>
            </div>

            <div className="relative z-10 my-4 max-w-[55%]">
              <div className="flex items-center gap-1.5 text-emerald-800/80 text-xs italic font-serif">
                <GraduationCap className="h-4 w-4 shrink-0 text-emerald-700" />
                <span>Curious Minds, Brighter Futures ✦</span>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/students"
                className="inline-flex items-center gap-2 rounded-xl bg-[#093824] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#06291a] active:scale-95"
              >
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Boy Artwork with Mix-Blend Mode */}
            <div 
              className="absolute right-0 bottom-0 top-0 w-[48%] pointer-events-none select-none z-0 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              }}
            >
              <img 
                src="/student-section.png"
                alt="Student learning"
                className="h-full w-full object-cover object-bottom mix-blend-multiply"
              />
            </div>
          </div>

          {/* Card 2: FOR PARENTS */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F2D7CA] bg-[#FAF0EA] p-7 sm:p-8 shadow-sm transition hover:shadow-md min-h-[460px]">
            <div className="relative z-10 max-w-[60%] space-y-3.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600 block">
                FOR PARENTS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Your Child&apos;s <br />
                Brighter Tomorrow <br />
                Starts Here
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed pt-1">
                Get the right information, guidance and support to make confident education decisions.
              </p>
            </div>

            <div className="relative z-10 my-4 max-w-[55%]">
              <div className="flex items-center gap-1.5 text-rose-800/80 text-xs italic font-serif">
                <Heart className="h-3.5 w-3.5 shrink-0 text-rose-600 fill-rose-600/30" />
                <span>Informed Parents, Brighter Futures ♡</span>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/parents"
                className="inline-flex items-center gap-2 rounded-xl bg-[#BA4A38] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#a13f2f] active:scale-95"
              >
                Create Parent Account <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Parents and Girl Artwork with Mix-Blend Mode */}
            <div 
              className="absolute right-0 bottom-0 top-0 w-[50%] pointer-events-none select-none z-0 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              }}
            >
              <img 
                src="/parent-section.png"
                alt="Parents guidance"
                className="h-full w-full object-cover object-bottom mix-blend-multiply"
              />
            </div>
          </div>

          {/* Card 3: FOR SCHOOLS */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#CFE2F2] bg-[#EEF6FC] p-7 sm:p-8 shadow-sm transition hover:shadow-md min-h-[460px]">
            <div className="relative z-10 max-w-[60%] space-y-3.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600 block">
                FOR SCHOOLS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Partner in <br />
                Progress
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed pt-1">
                Get the tools, visibility and support to manage admissions, engage with parents and build a stronger school community.
              </p>
            </div>

            <div className="relative z-10 my-4 max-w-[55%]">
              <div className="flex items-center gap-1.5 text-sky-800/80 text-xs italic font-serif">
                <SchoolIcon className="h-4 w-4 shrink-0 text-sky-700" />
                <span>Stronger Schools, Brighter Communities</span>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/schools"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1A5C9B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#154a7c] active:scale-95"
              >
                Register Your School <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div 
              className="absolute right-0 bottom-0 top-0 w-[48%] pointer-events-none select-none z-0 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              }}
            >
              <img 
                src="/school-section.png"
                alt="School Partner"
                className="h-full w-full object-cover object-bottom mix-blend-multiply"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Section: Blogging & Vlogging */}
      <section className="w-full max-w-[1540px] mx-auto px-2.5 sm:px-4 lg:px-5">
        <div className="w-full rounded-3xl bg-[#093824] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-emerald-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-4 border-b border-emerald-700/60">
            <div>
              <span className="text-xs font-black tracking-widest text-[#f59e0b] uppercase block mb-1">
                EDUCATIONAL INSIGHTS & CAMPUS STORIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Shikkhayon Blog & Video Vlogs
              </h2>
            </div>

            <div className="flex items-center gap-6 mt-4 md:mt-0 font-bold text-sm">
              <button
                type="button"
                onClick={() => setBlogTab('All')}
                className={`transition cursor-pointer ${
                  blogTab === 'All'
                    ? 'text-[#f59e0b] border-b-2 border-[#f59e0b] pb-1'
                    : 'text-emerald-200/70 hover:text-white'
                }`}
              >
                All Content
              </button>
              <button
                type="button"
                onClick={() => setBlogTab('vlog')}
                className={`transition cursor-pointer flex items-center gap-1.5 ${
                  blogTab === 'vlog'
                    ? 'text-[#f59e0b] border-b-2 border-[#f59e0b] pb-1'
                    : 'text-emerald-200/70 hover:text-white'
                }`}
              >
                <PlayCircle className="w-4 h-4" /> Vlogs
              </button>
              <button
                type="button"
                onClick={() => setBlogTab('article')}
                className={`transition cursor-pointer flex items-center gap-1.5 ${
                  blogTab === 'article'
                    ? 'text-[#f59e0b] border-b-2 border-[#f59e0b] pb-1'
                    : 'text-emerald-200/70 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Articles
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-[#0c452d] rounded-2xl border border-emerald-600/50 overflow-hidden shadow flex flex-col group cursor-pointer hover:border-[#f59e0b] transition"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition pointer-events-none"
                  />
                  <span
                    className={`absolute top-3 left-3 ${post.iconColor} text-white text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-sm uppercase tracking-wider`}
                  >
                    {post.type === 'vlog' ? (
                      <PlayCircle className="w-3.5 h-3.5" />
                    ) : (
                      <BookOpen className="w-3.5 h-3.5" />
                    )}
                    {post.type}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#f59e0b] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-200 transition line-clamp-2 mt-1.5 leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300/80 mt-4 inline-flex items-center gap-1">
                    Read Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:text-right">
            <Link
              href="/news-events"
              className="inline-flex text-sm font-bold text-[#f59e0b] hover:text-amber-300 items-center gap-1.5 transition cursor-pointer"
            >
              View Publication Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Section: Philosophy Banner */}
      <section className="w-full max-w-[1540px] mx-auto px-2.5 sm:px-4 lg:px-5">
        <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 sm:p-5 shadow-sm">
          <img
            src="/phylosophy.png"
            alt="Holistic Education, Caring Community, Values & Character, Excellence"
            className="w-full h-auto object-contain block"
          />
        </div>
      </section>

      {/* 5. Section: Two Cards Quote Layout with "Know more" Action Card */}
      <section className="w-full max-w-[1540px] mx-auto px-2.5 sm:px-4 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Card 1: Shikkhayon's Monthly Vision Quote */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl border border-emerald-200 bg-[#EEF7F2] p-6 sm:p-8 flex items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <img src="/statement.png" alt="Leaf" className="h-10 w-10 object-contain" />
              </div>
              <div className="space-y-1.5">
                <blockquote className="text-base sm:text-lg font-bold tracking-tight text-slate-800 italic leading-snug font-serif">
                  &ldquo;{shikkhayonQuote.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="block text-xs font-black text-slate-900">— {shikkhayonQuote.author}</span>
                  <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded-full">
                    {shikkhayonQuote.month} Vision
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Famous Personality from Education Sector */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl border border-emerald-200 bg-[#EEF7F2] p-6 sm:p-8 flex items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <img src="/statement.png" alt="Leaf" className="h-10 w-10 object-contain" />
              </div>
              <div className="space-y-1.5">
                <blockquote className="text-base sm:text-lg font-bold tracking-tight text-slate-800 italic leading-snug font-serif">
                  &ldquo;{educatorQuote.quote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="block text-xs font-black text-slate-900">— {educatorQuote.author}</span>
                  <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded-full">
                    {educatorQuote.designation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* "Know more" Action Card */}
          <Link
            href="/about"
            className="md:col-span-2 rounded-3xl border-2 border-[#1A5C9B] bg-white p-6 flex flex-col items-center justify-center shadow-sm hover:bg-sky-50 transition group cursor-pointer text-center"
          >
            <span className="text-3xl sm:text-4xl font-black text-[#832232] group-hover:scale-105 transition-transform leading-tight block">
              Know
            </span>
            <span className="text-3xl sm:text-4xl font-black text-[#832232] group-hover:scale-105 transition-transform leading-tight block">
              more
            </span>
          </Link>

        </div>
      </section>

      {/* Full-Page Blog / Vlog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-md overflow-y-auto p-4 sm:p-8">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-black/80 rounded-2xl border border-white/10 max-w-4xl mx-auto w-full mb-6">
            <h2 className="text-base sm:text-lg font-bold text-white truncate pr-4">
              {selectedPost.title}
            </h2>
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-4xl mx-auto w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 mb-12">
            {selectedPost.type === 'vlog' && selectedPost.youtubeId ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedPost.youtubeId}?autoplay=1`}
                  title={selectedPost.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div>
                <span className="text-xs font-black tracking-widest uppercase text-emerald-800 mb-2 block">
                  {selectedPost.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {selectedPost.title}
                </h1>
                <img
                  src={selectedPost.img}
                  alt={selectedPost.title}
                  className="w-full h-[260px] sm:h-[380px] object-cover rounded-2xl mb-8 border border-slate-200"
                />
                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  {selectedPost.content?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}