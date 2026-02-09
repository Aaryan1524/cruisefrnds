import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="material-icons-round text-primary dark:text-white text-3xl">directions_boat</span>
                    <span className="font-display font-semibold text-xl tracking-tight text-primary dark:text-white">CruiseFrnds</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link className="hover:text-primary dark:hover:text-white transition-colors" href="/destinations">Destinations</Link>
                    <Link className="hover:text-primary dark:hover:text-white transition-colors" href="/community">Community</Link>
                    <Link className="hover:text-primary dark:hover:text-white transition-colors" href="/about">About</Link>
                    <a className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-white dark:hover:text-primary transition-all duration-300" href="#">
                        Get the App
                    </a>
                </div>
                <button className="md:hidden text-gray-600 dark:text-gray-300">
                    <span className="material-icons-round text-2xl">menu</span>
                </button>
            </div>
        </nav>
    );
}
