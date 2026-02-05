'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getHierarchy } from '@/lib/hierarchy/data';
import { cn } from '@/lib/utils'; // Assuming basic utils exist or I will inline the merge if not
import { Ship, Anchor } from 'lucide-react'; // Fallback icons

export function ServerRail() {
    const pathname = usePathname();
    const lines = getHierarchy();

    return (
        <div className="flex flex-col items-center w-[72px] h-screen bg-[#1E1F22] py-3 overflow-y-auto no-scrollbar space-y-2">
            {/* Home / Direct Messages placeholder */}
            <div className="group relative flex items-center justify-center">
                <div className={cn(
                    "absolute left-0 bg-white rounded-r-full transition-all duration-200",
                    pathname === '/' ? "h-10 w-1" : "h-2 w-1 opacity-0 group-hover:opacity-100 group-hover:h-5"
                )} />
                <Link href="/" className="flex items-center justify-center w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] hover:bg-[#5865F2] transition-all duration-200 text-green-500">
                    <Anchor size={28} />
                </Link>
            </div>

            <div className="w-8 h-[2px] bg-[#35363C] rounded-lg mx-auto" />

            {lines.map((line) => {
                const isActive = pathname.startsWith(`/${line.id}`);

                // Use first letter as placeholder logo
                const initials = line.name.substring(0, 2).toUpperCase();

                return (
                    <div key={line.id} className="group relative flex items-center justify-center">
                        {/* Pill indicator */}
                        <div className={cn(
                            "absolute left-0 bg-white rounded-r-full transition-all duration-200",
                            isActive ? "h-10 w-1" : "h-2 w-1 opacity-0 group-hover:opacity-100 group-hover:h-5"
                        )} />

                        <Link
                            href={`/${line.id}`}
                            className={cn(
                                "flex items-center justify-center w-12 h-12 bg-[#313338] rounded-[24px] transition-all duration-200 overflow-hidden",
                                "hover:rounded-[16px] hover:bg-[#5865F2]",
                                isActive && "rounded-[16px] bg-[#5865F2]"
                            )}
                        >
                            {/* If we had logos, they would go here. For now: Text */}
                            <span className="text-sm font-bold text-white group-hover:text-white">
                                {initials}
                            </span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
