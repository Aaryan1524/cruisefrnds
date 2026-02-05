'use client';

import Link from 'next/link';
import { ArrowRight, Anchor } from 'lucide-react';

export default function Home() {
  const cruiseLines = [
    {
      id: 'royal-caribbean',
      name: 'Royal Caribbean',
      desc: 'Bold innovation & family thrills.',
      color: 'from-blue-400 to-cyan-500' // Placeholder gradient
    },
    {
      id: 'carnival',
      name: 'Carnival Cruise Line',
      desc: 'The Fun Ships offering pure joy.',
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 'virgin-voyages',
      name: 'Virgin Voyages',
      desc: 'Adult-only luxury rebellious fun.',
      color: 'from-purple-500 to-red-500'
    },
    {
      id: 'norwegian',
      name: 'Norwegian',
      desc: 'Freestyle cruising at its best.',
      color: 'from-teal-400 to-green-500'
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-20 space-y-16">

      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 backdrop-blur-md text-gray-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Anchor size={12} className="text-orange-500" />
          The New Way to Cruise
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Cruise Crew</span> Before You Sail.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Connect with shipmates, plan excursions, and build hype for your upcoming voyage.
          Less planning anxiety, more friends on the lido deck.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/explore" className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-black hover:scale-105 transition-all shadow-xl flex items-center gap-2">
            Start Exploring <ArrowRight size={18} />
          </Link>
          <button className="px-8 py-4 rounded-full bg-white/40 hover:bg-white/60 text-gray-900 font-bold backdrop-blur-md border border-white/50 transition-all shadow-sm hover:shadow-md">
            How it Works
          </button>
        </div>
      </section>

      {/* Cruise Line Cards */}
      <section className="w-full max-w-6xl px-4 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Select Your Line</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cruiseLines.map((line) => (
            <Link key={line.id} href={`/${line.id}`} className="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${line.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-1">{line.name}</h3>
                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {line.desc}
                </p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
