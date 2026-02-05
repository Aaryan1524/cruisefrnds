import { getLine } from '@/lib/hierarchy/data';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Ship as ShipIcon } from 'lucide-react';

interface LinePageProps {
    params: Promise<{ lineId: string }>;
}

export default async function LinePage({ params }: LinePageProps) {
    const { lineId } = await params;
    const line = getLine(lineId);

    if (!line) {
        redirect('/');
    }

    return (
        <div className="flex flex-col space-y-8 pt-6 pb-20 fade-in">
            <div className="flex items-center gap-4">
                <Link href="/" className="p-2 rounded-full hover:bg-black/5 transition-colors">
                    <ArrowLeft size={24} className="text-gray-600" />
                </Link>
                <h1 className="text-4xl font-bold text-gray-800">{line.name} Ships</h1>
            </div>

            <p className="text-gray-600 text-lg max-w-2xl">
                Select your ship to view upcoming sailing weeks and jump into the conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {line.ships.map((ship) => (
                    <Link key={ship.id} href={`/${line.id}/${ship.id}`} className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start justify-between">
                            <div className="p-3 bg-blue-100/50 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <ShipIcon size={32} />
                            </div>
                            <span className="text-xs font-bold bg-white/50 px-2 py-1 rounded-full text-gray-500 uppercase tracking-wide">
                                {ship.sailingWeeks.length} Sailings
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                            {ship.name}
                        </h2>

                        <p className="mt-2 text-gray-500 text-sm">
                            Join the community of explorers on this vessel.
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
