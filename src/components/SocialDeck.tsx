export default function SocialDeck() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-5xl text-primary dark:text-white mb-6">
                    Experiences tailored for every traveler
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                    Whether you are a solo adventurer, a couple seeking new friends, or a group looking to expand, our platform adapts to your social style.
                </p>
                <div className="flex justify-center mt-10 mb-12 overflow-x-auto">
                    <div className="inline-flex bg-editorial-card dark:bg-gray-800 rounded-full p-1 gap-1">
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm text-xs font-bold uppercase tracking-wider text-primary dark:text-white">Solo Travelers</button>
                        <button className="px-6 py-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 transition-colors">Couples</button>
                        <button className="px-6 py-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 transition-colors">Groups</button>
                        <button className="px-6 py-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-700 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 transition-colors">Events</button>
                    </div>
                </div>
            </div>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden group">
                <img alt="Cruise ship swimming pool at night" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpzKzzOPbPVtP6kXhkfneOu_FAWgzYrklvbSc3hAo0jBcafV3lt27qfGcKDmI9UkH7u-_Jq0sms7hWw0jKHOgZOCryhnCfp_AbHaUlPBtJr4IPjUe2-iukpsBWCY_Qkpg_WsDC6m_P9UGdimN3kD7GTcVTbSbTmmJWviL6MSfajrwd07CHOMmuoG9l_y0UN0Ipax6HXb6Z9Xo5m2xvohfaGsew8RNUTkcIU2slqN6r8m7ZxUfq9F6Bf0cCRqYjGcvMIo7uBtbuXhc" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <h3 className="font-display text-white text-4xl md:text-6xl mb-4 drop-shadow-md">The Social Deck</h3>
                        <div className="bg-white/90 backdrop-blur text-primary px-6 py-2 rounded-full inline-flex items-center gap-2 text-sm font-medium cursor-pointer hover:bg-white">
                            <span className="material-icons-round text-lg">search</span>
                            Find your next event
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
                CruiseFrnds is your AI companion that helps you think, create, and get things done, whether you&apos;re solving itinerary problems, exploring ideas, or just having a great conversation.
            </p>
        </section>
    );
}
