export default function QuoteSection() {
    return (
        <section className="py-24 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="font-display text-3xl md:text-5xl text-primary dark:text-white leading-tight mb-8">
                    &quot;We want to create technology that deepens our trust and understanding of one another, strengthening our connections to the real world.&quot;
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <img alt="CEO Signature" className="w-16 h-16 rounded-full grayscale opacity-80 mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtw-AYQjmahgf2gzsLLQVkpLtiPZbQCzDeimyfzVGbjmhhzUNSzshqulrTTGDeZsqyudyb8DqfNh9WLFiX4kh1Izlu-fWKg209VGM_YfpZaloAyiKbjNjrnheAiDWN18mrhjUEiQrd7lKdy84HaIig7b2Kfst2b5tALpu8_0hkfsMtsol_3PyxMWwnq2Pa7aPtjNJ28i9xfsSLW1Hn07v8zu_ZDS3ZQ5OCCKtITm6LlRLtDg4CegiMZOzF7aT-Caxzji0VrKhbBzY" />
                    <div className="text-sm tracking-wider uppercase text-gray-500 dark:text-gray-400">
                        Elena Fisher, CEO CruiseFrnds
                    </div>
                    <button className="mt-6 bg-blue-50 dark:bg-gray-800 text-primary dark:text-blue-200 px-6 py-2 rounded-full text-xs font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                        Read Our Mission
                    </button>
                </div>
            </div>
        </section>
    );
}
