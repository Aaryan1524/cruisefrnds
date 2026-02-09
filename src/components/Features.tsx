export default function Features() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16 space-y-4">
                <h2 className="font-display text-4xl md:text-5xl text-primary dark:text-white">
                    Core Features
                </h2>
                <p className="font-display italic text-2xl text-gray-500 dark:text-gray-400">
                    Connect. Explore. Belong.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative mb-6 bg-editorial-card dark:bg-gray-800">
                        <img alt="Secure Ledger Digital Lock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYa4n4sUyiizDUKQt9irYBv5Q8FrQYsjoPJPIm8msHsbMQbovBGyLo1kKd0U0CELgETbS6rlZV4lJEoTrPDldz0QqKeoeusInSklemFrJIR-_WkjbCu_TJ1cLIFWTF-2dkXUAD3fa-WQlfuHpHz91Hx7RKJsR1VtSg4OhtHZD7ozVjCqKmsVGr-hJcxQqjJ_WpSyQvJzAajDHsXUiFtvbJmOfHJ68hkL9-3zeZxqFfb5QoyWUaBCLVwS1USUj2jmTvXm39FiH9o0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                    </div>
                    <div className="space-y-3">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-sm inline-block">Security</span>
                        <h3 className="font-display text-2xl text-primary dark:text-white leading-tight group-hover:underline decoration-1 underline-offset-4">
                            Link Your Ledger: Secure Identity Verification
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                            Seamlessly connect your cruise ID with blockchain-backed security. Ensure everyone you meet is a verified passenger on your voyage.
                        </p>
                    </div>
                </div>
                <div className="group cursor-pointer lg:-mt-12">
                    <div className="aspect-[1/1] overflow-hidden rounded-sm relative mb-6 bg-blue-50 dark:bg-gray-800 p-8 flex items-center justify-center">
                        <img alt="Group of friends toasting drinks" className="w-full h-full object-cover rounded-sm shadow-sm transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2YMkdxS6mAjAIOHjx1qXYG_qEun_N8r54UjynQeZ2Ao-uGvTebG-ZZ5Qc1l_I-pWWGFP8lBkO7DsK4ncPHuBip2P6nHvB6A6xfusW_6fnqFXUsX9gHhme8smSopFcedJryppgtJkVQVawDDPq-EPVIIvxcdBQE2x0GXpeTPVtxxaUtWSF2w73cwafvI8_8cAl7r6QnJ7a6E-CHS4g2Ka_WPkoO5gGiQt76I6Ftj-oi3-lAj1t2himBRi3Q_Xqfbga0bUv6ocXi7E" />
                    </div>
                    <div className="space-y-3">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-sm inline-block">Community</span>
                        <h3 className="font-display text-2xl text-primary dark:text-white leading-tight group-hover:underline decoration-1 underline-offset-4">
                            Meet Your Crew: Intelligent Matching
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Our algorithm suggests companions based on shared interests, dining preferences, and excursion plans. Don&apos;t sail alone unless you want to.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <span className="text-xs text-gray-400">4 min read</span>
                        </div>
                    </div>
                </div>
                <div className="group cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative mb-6 bg-editorial-card dark:bg-gray-800">
                        <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">New Feature</div>
                        <img alt="People laughing at sunset on deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZNVRF2zmaX2RwZkabshhvEZeRaukBRbFecaw8XIvoF03i5Miab_5ay_VTbYZiYV-tVUmdck4Zj1lfeP5Dy-UD1R83hI_1CsYSak_hTot-19fIMyvVvNfc4B1bG9VINkuY1tTTfy7afXwLVvlGVR3nOzu7tzfSOfTaDaPVAQcNcbhXHVbQ8kTRGkSvKyK640NHYpMC56NvUTQnUxR7flRPCnqZCO5KCCFWsnB9hmJPst_paFBXVOqg4ztqYkkrh6eSyESIK_RYegA" />
                    </div>
                    <div className="space-y-3">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-sm inline-block">Social</span>
                        <h3 className="font-display text-2xl text-primary dark:text-white leading-tight group-hover:underline decoration-1 underline-offset-4">
                            Arrive as Friends: Pre-Boarding Chat
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Start the conversation weeks before departure. Organize meetups, plan shared shore excursions, and step on board knowing friendly faces.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex justify-center">
                <button className="bg-gray-100 dark:bg-gray-800 text-primary dark:text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    All Features
                    <span className="material-icons-round text-base">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}
