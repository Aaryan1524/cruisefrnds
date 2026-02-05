import { getShip } from '@/lib/hierarchy/data';
import { redirect } from 'next/navigation';

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
        <div className="flex flex-col h-full bg-[#313338] text-gray-100">
            {/* Header / Topbar */}
            <div className="h-12 border-b border-[#26272D] flex items-center px-4 shadow-sm">
                <div className="font-bold text-lg"># {ship.name}</div>
                <div className="border-l border-gray-600 mx-4 h-6"></div>
                <div className="text-gray-400 text-sm">Select a sailing week to join the chat</div>
            </div>

            {/* Content: Sailing Weeks List */}
            <div className="flex-1 overflow-y-auto p-6">
                <h2 className="text-2xl font-bold mb-6">Upcoming Sailings</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ship.sailingWeeks.map((week) => (
                        <div
                            key={week.id}
                            className="bg-[#2B2D31] p-4 rounded-md hover:bg-[#35373C] cursor-pointer transition-colors border border-transparent hover:border-gray-600"
                        >
                            <h3 className="font-bold text-lg text-indigo-400">{week.startDate}</h3>
                            <p className="text-gray-400">{week.name || 'Regular Sailing'}</p>
                            <div className="mt-4 text-xs text-gray-500 font-mono">ID: {week.id}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
