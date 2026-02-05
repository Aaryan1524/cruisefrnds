'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CruiseLine } from '@/lib/hierarchy/types';
import { cn } from '@/lib/utils';
import { Ship as ShipIcon } from 'lucide-react';

interface ChannelListProps {
    cruiseLine: CruiseLine;
}

export function ChannelList({ cruiseLine }: ChannelListProps) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-60 h-screen bg-[#2B2D31] text-gray-300">
            {/* Header */}
            <div className="h-12 px-4 flex items-center shadow-sm border-b border-[#1F2023] font-bold text-white truncate">
                {cruiseLine.name}
            </div>

            {/* Channels (Ships) */}
            <div className="flex-1 overflow-y-auto p-2 space-y-[2px]">
                <div className="pt-2 px-2 text-xs font-bold text-gray-400 uppercase hover:text-gray-300 cursor-pointer">
                    Ships
                </div>

                {cruiseLine.ships.map((ship) => {
                    const isActive = pathname.includes(`/${ship.id}`);

                    return (
                        <Link
                            key={ship.id}
                            href={`/${cruiseLine.id}/${ship.id}`}
                            className={cn(
                                "flex items-center px-2 py-1.5 rounded-md group mx-1 transition-colors",
                                isActive ? "bg-[#404249] text-white" : "hover:bg-[#35373C] hover:text-gray-100"
                            )}
                        >
                            <ShipIcon size={18} className="mr-1.5 text-gray-400 group-hover:text-gray-300" />
                            <span className="truncate">{ship.name}</span>
                        </Link>
                    );
                })}
            </div>

            {/* User Controls Area (Discord style bottom bar) - Placeholder */}
            <div className="h-[52px] bg-[#232428] px-2 flex items-center">
                <div className="flex items-center hover:bg-[#3F4147] p-1 rounded cursor-pointer w-full">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 mr-2"></div>
                    <div className="text-xs">
                        <div className="font-bold text-white">User</div>
                        <div className="text-gray-400">#1234</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
