export default function Footer() {
    return (
        <footer className="bg-seafoam dark:bg-gray-900 pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-icons-round text-primary dark:text-white text-2xl">directions_boat</span>
                            <span className="font-display font-semibold text-xl tracking-tight text-primary dark:text-white">CruiseFrnds</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mb-6">
                            Making the world smaller, one voyage at a time. The premier social platform for modern cruise travelers.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors" href="#"><i className="material-icons-round">facebook</i></a>
                            <a className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors" href="#"><i className="material-icons-round">camera_alt</i></a>
                            <a className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors" href="#"><i className="material-icons-round">alternate_email</i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:underline" href="#">Download App</a></li>
                            <li><a className="hover:underline" href="#">Premium</a></li>
                            <li><a className="hover:underline" href="#">For Cruise Lines</a></li>
                            <li><a className="hover:underline" href="#">Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:underline" href="#">About Us</a></li>
                            <li><a className="hover:underline" href="#">Careers</a></li>
                            <li><a className="hover:underline" href="#">Press</a></li>
                            <li><a className="hover:underline" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:underline" href="#">Safety Guide</a></li>
                            <li><a className="hover:underline" href="#">Community Guidelines</a></li>
                            <li><a className="hover:underline" href="#">Help Center</a></li>
                            <li><a className="hover:underline" href="#">Privacy & Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex gap-6">
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Privacy</a>
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Terms of Use</a>
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Trademarks</a>
                    </div>
                    <div>
                        © 2023 CruiseFrnds Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
