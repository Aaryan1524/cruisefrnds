'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Anchor } from 'lucide-react';

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="glass px-6 py-3 flex items-center justify-between w-full max-w-5xl">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-lg text-white group-hover:scale-105 transition-transform duration-300">
                        <Anchor size={20} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-800">CruiseFrnds</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/" className={cn("hover:text-orange-500 transition-colors", pathname === '/' && "text-orange-600 font-bold")}>Home</Link>
                    <Link href="/explore" className="hover:text-orange-500 transition-colors">Explore Ships</Link>
                    <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="px-5 py-2 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                        Join Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
