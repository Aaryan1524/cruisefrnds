import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary dark:text-white font-display">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Nautical map on desk"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9DLPHouV72PZB2sTgroSikcRPuse91_8Py7tvVmssatq7P6C9xlce_fkSwu7GU4ee24HpJui-1l37leyMNO5IyJemHRfpzJyyG4VpikTZztMjCBoGZQWSYgzOW_h575zoDFIXOxMtrJWw86VYZWi_0wrigBEJct657F41_Xklk8T5Cgr-0pv52Upwjfu5p6xY1kbLmgHSOhXajTWxDnSol8ElTL26OlEMm-7EPcu8HN7dTfyn8WiaT6JKyDyRkr0NfMXqm9fwSI"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-display italic font-bold mb-6 drop-shadow-xl">Navigating Connection</h1>
                    <div className="w-24 h-1.5 bg-white/80 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="bg-editorial-card dark:bg-white/5 py-24 px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <span className="text-primary dark:text-white/80 font-bold tracking-[0.2em] uppercase text-xs mb-8 block">The Compass</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary dark:text-white leading-tight italic">
                        “To ensure no traveler <br /><span className="not-italic">sails alone.</span>”
                    </h2>
                </div>
            </section>

            {/* Founders' Story Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                        <img
                            alt="The Founders"
                            className="w-full h-[600px] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzOza3KyIMi5YghxtjNPx4bMbjIlQtCrVxptjaQLS-35jK8r3OL8k4NfQZjhdwRysTeUSD0YWQ_b2IZF0xZ4doaZzDXKZNkRfSLDVBp1HLOaf0BuqjqoruEls6cF_x022CQhnyETI9N-SUeQOJW4wDvDWApVeTyva3Zg89Utei7rHFg1lwpfxywHvyejULlz8R4zjPxyQkirkOq6LYVsspR7rBKkFt3hWI9V19t3BBj9Bg4GmyNyfcxcqseSjxKA76lrKSafs7EbA"
                        />
                    </div>
                    <div className="space-y-8">
                        <h3 className="font-display text-4xl text-primary dark:text-white">The Voyage Begins</h3>
                        <div className="space-y-6 text-lg text-primary/80 dark:text-white/80 font-light leading-relaxed">
                            <p>
                                CruiseFrnds was born from a single sunset over the Mediterranean. Our founders realized that while luxury cruises offer unparalleled comfort, they often lack the authentic human connection that makes travel truly transformative.
                            </p>
                            <p>
                                We&apos;ve built more than an app; we&apos;ve built a digital harbor where like-minded explorers find their tribe before even boarding the ship. We believe every journey is better shared.
                            </p>
                        </div>
                        <div className="pt-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                alt="Signatures"
                                className="h-12 opacity-60 invert dark:invert-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-primary text-white py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons text-white text-4xl">anchor</span>
                        </div>
                        <h4 className="font-bold text-2xl mb-3">Safety First</h4>
                        <p className="text-white/70 text-sm font-light px-4 leading-relaxed">Verified profiles and secure communication protocols for every passenger.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons text-white text-4xl">diversity_3</span>
                        </div>
                        <h4 className="font-bold text-2xl mb-3">Inclusivity</h4>
                        <p className="text-white/70 text-sm font-light px-4 leading-relaxed">A community that celebrates diversity across all seas and horizons.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons text-white text-4xl">explore</span>
                        </div>
                        <h4 className="font-bold text-2xl mb-3">Adventure</h4>
                        <p className="text-white/70 text-sm font-light px-4 leading-relaxed">Encouraging curiosity and the spirit of discovery in every port.</p>
                    </div>
                </div>
            </section>

            {/* Meet the Crew Section */}
            <section className="py-24 px-6 bg-background-light dark:bg-background-dark max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-display text-4xl text-primary dark:text-white mb-4">Meet the Crew</h2>
                    <div className="w-12 h-1 bg-primary/20 dark:bg-white/20 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Team Member 1 */}
                    <div className="bg-white dark:bg-white/5 p-4 rounded-3xl shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                            <img alt="Team Member" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACWKuT8rLLaa1QwcAsH-XZFJNSTa-IGchohJihvf9oHhyEvVw-OxbaJmUdkwwYahwgQCdfxoIW2npjs5qtaRPpMLYNJXcWzhmVFYpStUJKsHRfxMkTpYeuflw1mHC5Et3qBFvV4IlJ5JgLFwhUr8INwSy-US6AuOpvg8CQNZ2pXq9GBUxaITpk13Gm0RH1xtCPqDYKq8Hm1ryEOSBOcQEEmkloKchwDY-sboT4soPLGlFzSHSvXsIB3AHwDoc5kvfr-_A9wU1180c" />
                        </div>
                        <h5 className="font-bold text-base text-primary dark:text-white mb-1">Julian Vance</h5>
                        <p className="text-primary/60 dark:text-white/60 text-[10px] font-bold uppercase tracking-widest">Captain of Design</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white dark:bg-white/5 p-4 rounded-3xl shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                            <img alt="Team Member" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwYskvyJPzG1eeAaS85vqDcm5LsMIYMXTwfl_fKezs0SSmA_t2QXAa4oQU15ctSSCMSmNzdQu10luWUOKsUE1bPOsYWF5pTfn55u5spYtzA-kD00c-bLnqSQ8fORU3xuTyX2TMcSFF72yQFcyfT5m0zS_oI_N_voc3wnP7bW4HXH-EvlQR8PCQqn-hBCfXZfGPo_sh7ygjZhUoVolfsEVDXdrA9gTiSJiuh7UDV1riY-NH1Tho4XOEsjN_f39tXLU3d_JkxkZhg5E" />
                        </div>
                        <h5 className="font-bold text-base text-primary dark:text-white mb-1">Elena Moretti</h5>
                        <p className="text-primary/60 dark:text-white/60 text-[10px] font-bold uppercase tracking-widest">Chief Experience Officer</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white dark:bg-white/5 p-4 rounded-3xl shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                            <img alt="Team Member" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDNOeeysABrmyg0aBm7f4NLgFe8TjOULrW_O1e6VQssisUxYx-4r5qvG_4azUJmjKGv8RTA4dIhZyVBlaj_qzcnQR8ZMnsEplbJq6mqGae71wHIGF94OUsw4DjwSNH3Os_l1jTlderDv8yAaAKkqBkL1D5yDBOd7Z889XvmHdgLRck7i7t9UShAHAPJLjC_EWGVJkJWI80ZTDQIYaO5OZVJCxSq5N_SkzKyzofmJMXNUX7JUN-CgV8NFjlflN6BcEBjCydM1I5rek" />
                        </div>
                        <h5 className="font-bold text-base text-primary dark:text-white mb-1">Marcus Chen</h5>
                        <p className="text-primary/60 dark:text-white/60 text-[10px] font-bold uppercase tracking-widest">Navigator of Community</p>
                    </div>

                    {/* Team Member 4 */}
                    <div className="bg-white dark:bg-white/5 p-4 rounded-3xl shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                            <img alt="Team Member" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC1UiJzAfPcjGOxk4SO-OW8vq0433rxj4fbptWbeKQ2zTPy6Yyj6cpRY_DdHUBaGbDuJrIzCU80Y9FddsfmGVT9k4y4sOeT-Yi2WWiQZKmL7tWqKa28Srghq0AuLs0woJbiB2nMi-upbo46TCcndVDiJxebekHHylqzBHzrJqv0hQ---e2xNndZHYcru333Oosss1NY5YjQffffkl1ZbPND4_sf2MLHNa4ifFjAupRm0MiVham1XRxOV5r_lpcSz3ePhLZMm1mIL4" />
                        </div>
                        <h5 className="font-bold text-base text-primary dark:text-white mb-1">Sasha Petrov</h5>
                        <p className="text-primary/60 dark:text-white/60 text-[10px] font-bold uppercase tracking-widest">Chief Technology Officer</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6 bg-editorial-card dark:bg-white/5">
                <div className="text-center max-w-lg mx-auto">
                    <h2 className="font-display text-4xl text-primary dark:text-white mb-8 italic">Ready to embark?</h2>
                    <button className="w-full py-5 bg-primary text-white rounded-full text-sm font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:scale-[1.02] transition-all uppercase tracking-widest">
                        Join the Voyage
                    </button>
                    <p className="mt-8 text-xs text-primary/40 dark:text-white/40 tracking-[0.3em] uppercase">CruiseFrnds © 2024</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
