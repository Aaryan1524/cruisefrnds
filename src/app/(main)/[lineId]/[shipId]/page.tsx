import { getShip } from '@/lib/hierarchy/data';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users } from 'lucide-react';

interface ShipPageProps {
    params: Promise<{ lineId: string; shipId: string }>;
}

export default async function ShipPage({ params }: ShipPageProps) {
    const { lineId, shipId } = await params;
    const ship = getShip(lineId, shipId);

    if (!ship) {
        redirect(`/${lineId}`);
    }

    return (
        <div className="flex flex-col space-y-8 pt-6 pb-20">
            {/* Header */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-4">
                    <Link href="/" className="hover:text-orange-500">Home</Link>
                    <span>/</span>
                    <Link href={`/${lineId}`} className="hover:text-orange-500 capitalize">{ship.lineId.replace('-', ' ')}</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href={`/${lineId}`} className="p-2 rounded-full hover:bg-black/5 transition-colors">
                        <ArrowLeft size={24} className="text-gray-600" />
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {ship.name}
                    </h1>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl pl-14">
                    Choose your sailing date to meet your future shipmates.
                </p>
            </div>

            {/* Sailing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {ship.sailingWeeks.map((week) => (
                    <div key={week.id} className="glass-card p-6 flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl text-orange-700 shadow-inner">
                                <span className="text-xs font-bold uppercase">{new Date(week.startDate).toLocaleString('default', { month: 'short' })}</span>
                                <span className="text-2xl font-bold">{new Date(week.startDate).getDate()}</span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                    {week.name || 'Caribbean Adventure'}
                                </h3>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> 7 Nights</span>
                                    <span className="flex items-center gap-1"><Users size={14} /> 2.4k Members</span>
                                </div>
                            </div>
                        </div>

                        <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-600 font-bold text-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                            Join
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
