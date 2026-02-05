import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ServerRail } from '@/components/navigation/ServerRail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CruiseFrnds',
  description: 'The Premier Cruise Social & AI Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-[#313338] text-gray-100 overflow-hidden">
          {/* The Server Rail (Leftmost Sidebar) */}
          <ServerRail />

          {/* Main Content Area */}
          <main className="flex-1 flex overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
