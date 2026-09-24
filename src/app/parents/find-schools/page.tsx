"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Filter, 
  Star, 
  Phone, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';

interface School {
  id: string;
  name: string;
  board: string;
  type: string;
  grades: string;
  location: string;
  rating: number;
  reviewsCount: number;
  established: number;
  featured: boolean;
  phone: string;
  website: string;
}

const SAMPLE_SCHOOLS: School[] = [
  {
    id: '1',
    name: 'National Model Senior Secondary School',
    board: 'CBSE',
    type: 'Co-ed Day School',
    grades: 'Nursery to XII',
    location: 'Barrackpore, Kolkata',
    rating: 4.8,
    reviewsCount: 142,
    established: 1994,
    featured: true,
    phone: '+91 98300 12345',
    website: 'https://example.com/nmsss',
  },
  {
    id: '2',
    name: 'St. Xavier’s Heritage Academy',
    board: 'ICSE / ISC',
    type: 'Co-ed Day & Boarding',
    grades: 'Class I to XII',
    location: 'Salt Lake Sector V, Kolkata',
    rating: 4.9,
    reviewsCount: 218,
    established: 1988,
    featured: true,
    phone: '+91 98311 67890',
    website: 'https://example.com/sxha',
  },
  {
    id: '3',
    name: 'Vidyasagar Vidyapith High School',
    board: 'WBBSE / WBCHSE',
    type: 'Boys Higher Secondary',
    grades: 'Class V to XII',
    location: 'Naihati, North 24 Parganas',
    rating: 4.6,
    reviewsCount: 95,
    established: 1962,
    featured: false,
    phone: '+91 94333 45678',
    website: 'https://example.com/vvhs',
  },
  {
    id: '4',
    name: 'Greenfield International Public School',
    board: 'CBSE',
    type: 'Co-ed Day School',
    grades: 'Playgroup to X',
    location: 'Rajarhat, New Town',
    rating: 4.7,
    reviewsCount: 88,
    established: 2012,
    featured: false,
    phone: '+91 98745 61230',
    website: 'https://example.com/gips',
  },
];

export default function FindSchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('All');

  const filteredSchools = SAMPLE_SCHOOLS.filter((school) => {
    const matchesSearch = 
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBoard = selectedBoard === 'All' || school.board.includes(selectedBoard);
    return matchesSearch && matchesBoard;
  });

  return (
    <div className="w-full bg-[#f8faf9] min-h-screen pb-20 font-sans">
      {/* Header Banner */}
      <section className="w-full bg-[#eaf5ef] border-b border-emerald-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#093824] bg-white/85 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs">
              FOR PARENTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Find the Right School for Your Child
            </h1>
            <p className="text-sm sm:text-base font-medium text-slate-600">
              Explore accredited schools, curriculum boards, admission details, and parent reviews across your locality.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-emerald-200/80 shadow-md grid grid-cols-1 sm:grid-cols-12 gap-3.5">
            <div className="sm:col-span-6 relative flex items-center">
              <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by school name, city, or area (e.g. Barrackpore)..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#093824] focus:bg-white transition"
              />
            </div>

            <div className="sm:col-span-4 relative flex items-center">
              <Filter className="absolute left-3.5 w-4 h-4 text-slate-400" />
              <select
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="w-full pl-10 pr-8 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#093824] focus:bg-white transition"
              >
                <option value="All">All Curriculum Boards</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE / ISC</option>
                <option value="WBBSE">West Bengal Board (WBBSE)</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex items-center">
              <button
                type="button"
                className="w-full h-full min-h-[46px] rounded-xl bg-[#093824] hover:bg-[#06291a] text-white font-bold text-sm shadow-sm transition flex items-center justify-center gap-2 active:scale-95"
              >
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* School Listings Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold text-slate-700">
            Showing <span className="text-[#093824] font-black">{filteredSchools.length}</span> Verified Institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {school.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md mb-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Partner
                      </span>
                    )}
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      {school.name}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      {school.location}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-lg text-xs font-black">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      {school.rating}
                    </span>
                    <span className="block text-[10px] font-bold text-slate-400 mt-0.5">
                      {school.reviewsCount} reviews
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block">Board</span>
                    <span className="font-extrabold text-slate-800">{school.board}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Type</span>
                    <span className="font-extrabold text-slate-800">{school.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Grades Offered</span>
                    <span className="font-extrabold text-slate-800">{school.grades}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Est. Year</span>
                    <span className="font-extrabold text-slate-800">{school.established}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`tel:${school.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#093824] transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call Campus</span>
                </a>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#093824] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#06291a] transition active:scale-95"
                >
                  View Details & Admissions
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </div>
          ))}

          {filteredSchools.length === 0 && (
            <div className="col-span-full bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-black text-slate-800">No schools match your search</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Try searching with a broader keyword or resetting the curriculum board filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
