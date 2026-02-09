import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Community() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary dark:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-6 pt-24 pb-8 max-w-7xl mx-auto">
                <div className="relative h-[50vh] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        className="w-full h-full object-cover"
                        alt="Elegant group of people laughing on a luxury cruise ship deck"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr2lh5KXPEmTBd9iRfnupZmMPWPd7-m_T84OnN9hXnkq5K_iO6JcKMdmgxzWKrBBp5LhEJvqOoLCLJTsQWWefFVar5Oj5jgzos-RIw0oB7YO8YZ-L0weNJhpy4VOYR5TQACU2X0UMuFKqHFT4iJHEiYv0mEBC245S3WSGOt1KvUQlKCA3O6bG85EUNtdD0brldwRR5maKcWdL4XiU4X5m_aEnX7dxxhpu3Zm6DD4oxY7bMoA2ZVBiBo3C2-4n5kLxKyBOFiY2fHnc"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-8 right-8 md:left-12">
                        <h1 className="font-display text-5xl md:text-7xl text-white italic leading-tight mb-4 drop-shadow-lg">Your Crew Awaits</h1>
                        <p className="text-white/90 text-lg font-light max-w-md drop-shadow-md">Connect with fellow voyagers across the seven seas.</p>
                    </div>
                </div>
            </section>

            {/* Active Communities Section */}
            <section className="py-12 max-w-7xl mx-auto">
                <div className="px-6 flex justify-between items-end mb-8">
                    <h3 className="text-3xl font-display font-medium text-primary dark:text-white">Active Communities</h3>
                    <a className="text-xs font-bold text-primary dark:text-white/80 uppercase tracking-widest hover:underline underline-offset-4" href="#">See All</a>
                </div>

                <div className="flex overflow-x-auto gap-6 px-6 pb-4 hide-scrollbar">
                    {/* Solo Travelers Card */}
                    <div className="min-w-[240px] bg-editorial-card dark:bg-white/5 p-8 rounded-3xl flex flex-col items-center text-center shadow-soft hover:shadow-lg transition-all">
                        <div className="w-20 h-20 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-icons text-primary dark:text-white text-3xl">person_outline</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Solo Travelers</h4>
                        <span className="text-xs text-primary/60 dark:text-white/60 mb-8 font-medium">1.2k Members</span>
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-opacity w-full">Join</button>
                    </div>

                    {/* Foodies Card */}
                    <div className="min-w-[240px] bg-editorial-card dark:bg-white/5 p-8 rounded-3xl flex flex-col items-center text-center shadow-soft hover:shadow-lg transition-all">
                        <div className="w-20 h-20 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-icons text-primary dark:text-white text-3xl">restaurant</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Foodies</h4>
                        <span className="text-xs text-primary/60 dark:text-white/60 mb-8 font-medium">840 Members</span>
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-opacity w-full">Join</button>
                    </div>

                    {/* Adventure Seekers Card */}
                    <div className="min-w-[240px] bg-editorial-card dark:bg-white/5 p-8 rounded-3xl flex flex-col items-center text-center shadow-soft hover:shadow-lg transition-all">
                        <div className="w-20 h-20 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-icons text-primary dark:text-white text-3xl">explore</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Adventures</h4>
                        <span className="text-xs text-primary/60 dark:text-white/60 mb-8 font-medium">2.1k Members</span>
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-opacity w-full">Join</button>
                    </div>

                    {/* Nightlife Card (Extra) */}
                    <div className="min-w-[240px] bg-editorial-card dark:bg-white/5 p-8 rounded-3xl flex flex-col items-center text-center shadow-soft hover:shadow-lg transition-all">
                        <div className="w-20 h-20 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-icons text-primary dark:text-white text-3xl">nightlife</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Nightlife</h4>
                        <span className="text-xs text-primary/60 dark:text-white/60 mb-8 font-medium">1.5k Members</span>
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-opacity w-full">Join</button>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <h3 className="text-3xl font-display font-medium text-primary dark:text-white mb-8">Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Event 1 */}
                    <div className="group border border-accent-silver dark:border-white/10 p-6 rounded-2xl bg-white dark:bg-white/5 flex items-center gap-6 hover:shadow-md transition-all">
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/5 dark:bg-white/10 rounded-full border border-primary/10 dark:border-white/10">
                            <span className="text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider">Aug</span>
                            <span className="text-xl font-bold text-primary dark:text-white -mt-0.5">12</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-lg text-primary dark:text-white group-hover:text-primary/80 transition-colors">Sunset Mixer</h4>
                                <span className="bg-primary/10 dark:bg-white/20 text-primary dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">6:00 PM</span>
                            </div>
                            <p className="text-sm text-primary/60 dark:text-white/60 flex items-center gap-1.5">
                                <span className="material-icons text-base">location_on</span>
                                Observation Deck A
                            </p>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="group border border-accent-silver dark:border-white/10 p-6 rounded-2xl bg-white dark:bg-white/5 flex items-center gap-6 hover:shadow-md transition-all">
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/5 dark:bg-white/10 rounded-full border border-primary/10 dark:border-white/10">
                            <span className="text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider">Aug</span>
                            <span className="text-xl font-bold text-primary dark:text-white -mt-0.5">13</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-lg text-primary dark:text-white group-hover:text-primary/80 transition-colors">Shore Excursion Meet</h4>
                                <span className="bg-primary/10 dark:bg-white/20 text-primary dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">9:30 AM</span>
                            </div>
                            <p className="text-sm text-primary/60 dark:text-white/60 flex items-center gap-1.5">
                                <span className="material-icons text-base">location_on</span>
                                Main Atrium Lobby
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Member Spotlight Section */}
            <section className="py-12 max-w-7xl mx-auto mb-12">
                <div className="px-6 mb-8">
                    <h3 className="text-3xl font-display font-medium text-primary dark:text-white">Member Spotlight</h3>
                </div>
                <div className="flex overflow-x-auto gap-8 px-6 pb-4 hide-scrollbar">
                    {/* Spotlight 1 */}
                    <div className="min-w-[160px] text-center">
                        <div className="relative inline-block mb-4 p-1 rounded-full border-2 border-primary/20 dark:border-white/20">
                            <img className="w-32 h-32 rounded-full object-cover" alt="Professional portrait of a friendly man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-sdx48hDApcwe-jU4yD-kWdBwJXaetM5p7o82zBYVbURwp-397EtBRngowlU5EVsXYK1_m2ubLKwkvEES_tNr5yEuMlWvjtAuoiMdaF0DR1c1pNS_vVoJt5XDfyIgi243XEgm4CjkBXvjEWPIchAVXk7M2cPaczewdYo61pHfodgDI6pFToPDSDRZFnQ_5atDGhb6KKihujlQnWpo_frouZARi3CLn9x4z3GlZEVfBtrzJsnHo1hHFza4igbdwTvpLeMhzBlVFE" />
                        </div>
                        <h5 className="font-bold text-lg text-primary dark:text-white">Marcus V.</h5>
                        <p className="text-xs text-primary/60 dark:text-white/60 mt-1 line-clamp-2 leading-relaxed max-w-[140px] mx-auto">Luxury travel enthusiast and jazz lover.</p>
                    </div>

                    {/* Spotlight 2 */}
                    <div className="min-w-[160px] text-center">
                        <div className="relative inline-block mb-4 p-1 rounded-full border-2 border-primary/20 dark:border-white/20">
                            <img className="w-32 h-32 rounded-full object-cover" alt="Portrait of a woman with a warm smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2-XGDecZARnoA652qC9AEyYNtmKLdKn7C9rAR6t-06QcPagw9_GC_LRZq0x8QnC-3sIfd4BM-y9ap6lgpt93BnSLD4Yxx1GQ4zXZ1Iov9O8X5yH245Cizg05T88sPvNjmyirN2Pg9dId5CmLhzI-WKBQx2dYw5Xt6yiRonNJ0s2aJkI2YHsXewka5IuacPwBEdLj0P8NcOqQqQYI-SKQ70bXxZb6Y8tBjAwsj4dtr4c0YOuO6ceFAI_mn2RUIA6gaQf-K1PWMfS8" />
                        </div>
                        <h5 className="font-bold text-lg text-primary dark:text-white">Elena R.</h5>
                        <p className="text-xs text-primary/60 dark:text-white/60 mt-1 line-clamp-2 leading-relaxed max-w-[140px] mx-auto">Exploring the world, one port at a time.</p>
                    </div>

                    {/* Spotlight 3 */}
                    <div className="min-w-[160px] text-center">
                        <div className="relative inline-block mb-4 p-1 rounded-full border-2 border-primary/20 dark:border-white/20">
                            <img className="w-32 h-32 rounded-full object-cover" alt="Portrait of a traveler with sunglasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZsnx_bLhtJrsQAmLNFrisPu4zhfADyTPsSrap-4GeNPkHMg3KXi5EFL_n2Far3tihTguR-KG6RN4zjLhmtIyPDyJ8U8uGfbYqXoHhDpu09OSpqeybPS5MF_RbUbPDIzzu17CNPapL1nunWta0rICVs4bU4EhDBZwaSXi4iov7UyvgxJgawVgHt1uDxelkHjAtEfsnSSo_x2C1fSK67Fs4S2BfM-JzlbFIH2Hh8QUKx7DDqW7DgoiL2W7wxqKuMU2wF_ogduQ2-Nk" />
                        </div>
                        <h5 className="font-bold text-lg text-primary dark:text-white">David S.</h5>
                        <p className="text-xs text-primary/60 dark:text-white/60 mt-1 line-clamp-2 leading-relaxed max-w-[140px] mx-auto">Photographer and adventure seeker.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
