import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "CruiseFrnds - The Voyage Begins Before You Board",
  description: "Connect with fellow travelers, organize your itinerary, and build friendships that last longer than the shore excursions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
