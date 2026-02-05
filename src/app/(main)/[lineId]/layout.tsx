import { ChannelList } from '@/components/navigation/ChannelList';
import { getLine } from '@/lib/hierarchy/data';
import { redirect } from 'next/navigation';

interface LineLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lineId: string }>;
}

export default async function LineLayout({ children, params }: LineLayoutProps) {
    const { lineId } = await params;
    const line = getLine(lineId);

    if (!line) {
        redirect('/'); // Or 404
    }

    return (
        <div className="flex w-full h-full">
            {/* Second sidebar: Channel List (Ships) */}
            <ChannelList cruiseLine={line} />

            {/* Content Area */}
            <div className="flex-1 bg-[#313338] relative">
                {children}
            </div>
        </div>
    );
}
