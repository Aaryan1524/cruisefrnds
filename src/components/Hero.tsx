export default function Hero() {
    return (
        <>
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary dark:text-white">
                        The voyage begins <br /><span className="italic font-light opacity-80">before you board.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Connect with fellow travelers, organize your itinerary, and build friendships that last longer than the shore excursions.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 flex items-center gap-2">
                            Start Your Journey
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </button>
                        <button className="text-primary dark:text-white px-8 py-3.5 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Watch the Film
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-50 dark:bg-indigo-900/20 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </header>

            <section className="px-4 md:px-6 -mt-10 md:-mt-20 mb-32 relative z-10 fade-in-up delay-200">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-gray-700 bg-seafoam dark:bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-black opacity-50"></div>
                        <div className="grid md:grid-cols-12 gap-8 items-center relative p-8 md:p-16">
                            <div className="md:col-span-5 space-y-6">
                                <span className="uppercase tracking-widest text-xs font-semibold text-primary dark:text-blue-300 mb-2 block">App Experience</span>
                                <h2 className="font-display text-3xl md:text-4xl text-primary dark:text-white leading-tight">
                                    Seamlessly integrated into your travel lifestyle.
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 font-light">
                                    From secure ledger linking to finding your dinner crew, CruiseFrnds is designed to be your intelligent companion at sea.
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-primary dark:text-white">fingerprint</span>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-primary dark:text-white">groups</span>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-primary dark:text-white">map</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-7 flex justify-center md:justify-end">
                                <div className="relative w-full max-w-md">
                                    <div className="glass-panel rounded-[2.5rem] p-4 shadow-glass transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                        <img alt="Cruise Ship Deck Socializing" className="rounded-[2rem] w-full h-auto object-cover shadow-inner aspect-[9/16] opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDATe15rCltUmAw2Yv94zSttresPwjZ3CL3T19-JiHtSF2M3AKKsXzHohxNVaCK_J_QCwyBgsOKr_l2AfG5iTHbxd5BUhhGpHZGSUmNyTVr_UG8fLTz5-nzUMZHDshIHGsDr1tMXpLb0S2qYZX0KwJq_8N-mv0ZqbIEhwO49Uw_3EbpXuPo0m03ZFetMXLPz67DLZZOzAPP4dS0CM30rJ7q-8GfPMtB7HRgFUWm2qY70JGiXmf7YXR7Y-wXDa6xjHU1PVERKlQgWlg" />
                                        <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-xl p-4 text-white">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex -space-x-2">
                                                    <img alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmPMTEUexqxK0vv8hD1J3HQ1zfLSkUpJIdZwEPrKWAskbXqr97wBtZBVkIHS5rofZyU03USHKntTIJPeTFFv2xMOF9ikT3pb8Se9aIoaADdbqtiQ7nptmXOugyKiqIa2Z_9DLLnkn8M2HwODPmxKWKJzPAH8LRYNwlk79EJEOMqBNfdM4bCprDEqNRjcNQDQZgieJPxwSOb0MsxPpzfHI42QCe0C9sg80o4z0VcboIhXtJhYysnYi_eZUjICyXtQwmW_BNl1Duk4s" />
                                                    <img alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe_XMpkKHP4SKDE2WNuQD1qL_w89V2EOEBB9kk5Uv3SsW3eW_QMOXDvCsRQNNqbAYMvn5IEdSpK6TmAj-2fxV4V9KfoS5yBVFsWF-68MqI58G0JmZR5sS5p1Njybyi_8wX6wuMpx88-OOC2etFYBzrMRjja4QQy055K4QuNysUxyEpAChj7Kzdkmi1g45QBj2ZnlHwETUYBOCq4w1XqQ3YrSRMGLlv2c832ckmBQInPadFoe0ckCbGcfIev3pqLcxQzPhknjEHBHA" />
                                                    <img alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Cbc6xoiarSo66IgaND56Um0aq5G9nLWCmVrN7830FYmsLwjeJ--MYaODjefii8jGk8S3hGNXdA6yWa-vlV-Wk4-eYpIalQ9y1AeoQKK7RcCcpiYhy9I1lS8WZeTPGI-n_nq8_mfOGv5NGca1xJ4aoeJRxW7tf5wshmHmBf711YGye--g8bRD-b4WOMrbxlidrLaFdRZyCAjqkvIRotSTllMhsjvWQypw8Z1d7fHAje0FbVkcVVkvm0Ub2iFwzCtti3VOSWo6y7c" />
                                                </div>
                                                <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-lg">Dinner @ 8PM</span>
                                            </div>
                                            <p className="text-sm font-light">Meet at the Meridian Lounge?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
