import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Destinations() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-primary dark:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full mt-16">
                <div className="absolute inset-0">
                    <img
                        alt="Luxury Cruise Ship at Sunset"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnXuUHktiTuI_zh58aLYLxh7z6KoRC_p9Vxu1nKHHuKGMuO6R1yPcklxcy0wNDIAticbGcPCSJ92WaxPN9qSovoXvN7QlhCNHxt-XYNQx9TkKAJarGcfQ10BRK-FiHFiBvqjD34dU4n-nhQ6gyI288GByKJi1Sfm1dSj9PtgZU9CuT9iG4Y3soXJz-Kjv5eg3Uon0V3bLsk0q0RqTvKYgGn2-dSlvzcG5sQBIcxaUK58tGK6qV4eie3JU3Cpyoefz_ewsG5CA_jTY"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-lg">Charts &amp;<br />Courses</h1>
                    <p className="text-white/90 text-lg max-w-lg mb-8 drop-shadow-md">Discover hidden gems and connect with fellow explorers on the high seas.</p>

                    {/* Floating Search Bar */}
                    <div className="glass-panel rounded-full px-6 py-4 flex items-center shadow-2xl w-full max-w-md">
                        <span className="material-icons text-white/80 mr-3">search</span>
                        <input
                            className="bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 p-0 text-base flex-1 outline-none"
                            placeholder="Find Your Cruise"
                            type="text"
                        />
                        <span className="material-icons text-white/80 cursor-pointer">tune</span>
                    </div>
                </div>
            </section>

            {/* Featured Regions Grid */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="font-display text-4xl text-primary dark:text-white mb-2">Featured Regions</h2>
                        <p className="text-sm text-primary/60 dark:text-white/60 uppercase tracking-widest font-medium">Curated Expeditions</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Mediterranean Card */}
                    <div className="bg-editorial-card dark:bg-white/5 rounded-3xl p-4 flex flex-col h-96 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="h-48 rounded-2xl overflow-hidden mb-4">
                            <img alt="Mediterranean Coast" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRAE28zpgTv-926-S3PR-cbDMplhAt2Eq9AMlmfU_F9YjTYDkOSV_mi0qF-SlxhWsIdEfjxYmdjSZbbJuYm8G9xFGnEQbw-sP7gzmRizwn97M8aGH-ZpePk0kGAH7one_iwPFVX0SZQYDzMmfLWpImmmq623gC7KxtXo0p-z-xy0rao3rcVsmPBbFiqn_gvs2xhvfy6_mub5aGeNbfFUTrU7dCEw2uxo3ft-PUteOeYv1qq6UGDKPrkDej8EvBZE_1K-aJpzFWoM" />
                        </div>
                        <h3 className="font-display text-primary dark:text-white text-2xl mb-1">Mediterranean</h3>
                        <p className="text-primary/60 dark:text-white/60 text-xs uppercase font-bold tracking-widest mb-auto">92 Voyages Active</p>
                        <button className="bg-primary text-white rounded-full py-3 px-4 text-xs font-bold uppercase tracking-widest w-full mt-4 hover:bg-primary/90 transition-colors">
                            See Travelers
                        </button>
                    </div>

                    {/* Caribbean Card */}
                    <div className="bg-editorial-card dark:bg-white/5 rounded-3xl p-4 flex flex-col h-96 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="h-48 rounded-2xl overflow-hidden mb-4">
                            <img alt="Caribbean Island" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoYkSZoubTSaMLU-UD4vxz5sd0Hz7HSxbXn5IsEofUQ8gp0Y_IJ-Q5hMnoES27hxz7uP7XmFouXinocUaVzdWfNEINnfCfct-2T6-80AOmGj6iuDue-OPZHYJbAhIvmN7IQ-uAgGE84FJ81eZsCfv8LPK4ysUwbnIxjE5MElv6qQYsizdOdrLxvm00DqEMAiV88UFGs1_hqLjfYq_cQXi1HlfVGBSNimS2RPQyYxSVl8oLmdUvEGG1MmreuY9Gf-5u5grQLneLjpw" />
                        </div>
                        <h3 className="font-display text-primary dark:text-white text-2xl mb-1">Caribbean</h3>
                        <p className="text-primary/60 dark:text-white/60 text-xs uppercase font-bold tracking-widest mb-auto">145 Voyages Active</p>
                        <button className="bg-primary text-white rounded-full py-3 px-4 text-xs font-bold uppercase tracking-widest w-full mt-4 hover:bg-primary/90 transition-colors">
                            See Travelers
                        </button>
                    </div>

                    {/* Alaska Card */}
                    <div className="bg-editorial-card dark:bg-white/5 rounded-3xl p-4 flex flex-col h-96 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="h-48 rounded-2xl overflow-hidden mb-4">
                            <img alt="Alaska Glacier" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHlun3rNk5WFmximtN9qL9SMCahHEyAqevvDnxobp8m35kEzQFYK94ufYfORkcac309MNcxOdkIi2NCo9A63lmzPISrzTJsFG6LG0oQSm6wFi58PIh0DX3sikEfXOrfrPYMqJpncWHfoqp_oVTCO_3u1tdqLZNml-hie_aGRz-bWFHRLGRLGYoQcPt4tqd40oUWD9WqofB7d3TRAE10fchw2GdtX6yM3NGfClWBpO6iHvZV6uuEISrWvqbQB0H2EvzUZWmw2tYpLQ" />
                        </div>
                        <h3 className="font-display text-primary dark:text-white text-2xl mb-1">Alaska</h3>
                        <p className="text-primary/60 dark:text-white/60 text-xs uppercase font-bold tracking-widest mb-auto">34 Voyages Active</p>
                        <button className="bg-primary text-white rounded-full py-3 px-4 text-xs font-bold uppercase tracking-widest w-full mt-4 hover:bg-primary/90 transition-colors">
                            See Travelers
                        </button>
                    </div>

                    {/* Asia Card */}
                    <div className="bg-editorial-card dark:bg-white/5 rounded-3xl p-4 flex flex-col h-96 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div className="h-48 rounded-2xl overflow-hidden mb-4">
                            <img alt="Asia Destination" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdqTWnGA0OgriBoBSPiYe1JCtumyGrSYyKMXcBNmjUv3SH1SEtSvbrtSgbgbPX5g1MsJbUdeb-aPjgsuTbi9atloUAcc-lmZExmo6mCsVOusaMrkB5jI-trMnbpMkjGJjfzqwWSRAeALK3AIWLIaFxOYmKTF6Cp20cUQFXiCwTujCZx4RJHCgOAT1eIXymgawTlmpwNi0fCnHSrX3ujS1vm5z25gHjieezSHly6VuVxrWH3RyIN0bSHBGiaBDdtuCIcpnieYI6cU" />
                        </div>
                        <h3 className="font-display text-primary dark:text-white text-2xl mb-1">Asia</h3>
                        <p className="text-primary/60 dark:text-white/60 text-xs uppercase font-bold tracking-widest mb-auto">58 Voyages Active</p>
                        <button className="bg-primary text-white rounded-full py-3 px-4 text-xs font-bold uppercase tracking-widest w-full mt-4 hover:bg-primary/90 transition-colors">
                            See Travelers
                        </button>
                    </div>
                </div>
            </section>

            {/* Upcoming Popular Voyages */}
            <section className="max-w-7xl mx-auto px-6 pb-24 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-display text-3xl text-primary dark:text-white">Popular Voyages</h2>
                        <p className="text-xs text-primary/60 dark:text-white/60 uppercase tracking-widest font-medium mt-1">High Social Activity</p>
                    </div>
                    <button className="text-primary dark:text-white/80 text-sm font-medium hover:underline underline-offset-4">View All</button>
                </div>

                <div className="flex overflow-x-auto gap-8 pb-8 -mx-6 px-6 hide-scrollbar">
                    {/* Voyage Card 1 */}
                    <div className="flex-none w-80 bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="relative h-48">
                            <img alt="Luxury Ship" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG69w3vHp76Lk8TuT-lH0UhxHR1vpL3NKiN1xBwvqQNId2Xds2kytX7tWyxPHlYVqeGMQMT15SlxFUiuaN9NwFIa2gT_YbAzse6PMTAQsP_-9QUkfEKwoNhVqlzy9MLD5e_XkUqbg9q1fTYtjG4Q8HidwB3iaz3oNEb2Yw5f4ePBYls0FuEKOdmP89hPll2qePVUwHdHNfXbfbr0mi7kPkk5Qq3ctbqefK7o0GAqSyai1pEAzZgWtW_AJVq3YIGboOJOZL2INWkXo" />
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                                254 Travelers onboard
                            </div>
                        </div>
                        <div className="p-5">
                            <p className="text-[10px] text-primary/60 dark:text-white/60 font-bold uppercase tracking-wider mb-2">Oct 12-19, 2024</p>
                            <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Symphony of the Seas</h4>
                            <div className="flex items-center text-xs text-primary/70 dark:text-white/50 mb-4">
                                <span className="material-icons text-sm mr-1">location_on</span>
                                Royal Caribbean • Miami Port
                            </div>
                            <div className="flex -space-x-3">
                                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOujiMIPltUeeTd7TCPmpaSvoZlQdrO2FksQCausfdq0MoTV2jzlN8Gy41e_KlvWY7Y8nYCfPdYUrFpJO-RaVgoGxSELBs-eGJyarG3naVgIQVoqJY57lLwDRrXqbAdXdcGnZ-YR8EvNvvZET26BehoxPb52531a8FfIxAv10xxvuJ0CKXpyAbEdeZpir0YHT0Ym5lSy8pgJ9C5D-e2NLXgSnqDDcWnBt9oYCZflxwg1yKMtD5-jiOXvf3XAB_MMr-dEaxSHxQ6WM" />
                                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnQtu-84vxwkpMpaI80XdZEDVrsTIYhNv0R-g5lFEwjbO53_sEgETTV92LUxD_4KUy3Eusgu0vR78ceP6AyuldUgbxoNA0aDZMFlYJWZhU_MDp2L9Cip-uyG1DXVf6-XebMsPHauYh7Gdnos8VaqnDniovdBMeuO1IZD0RqEGpNrB1Eh727goAyQAZDaL5de6fPp76pCZccStPzu35Ztq4oCtnNkSq1RaucjolBT_OKD8BGH-gBR4NNBjeHFwrVLMREavwOFcIL3s" />
                                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTKhoMYuXJyC4DxORmlgGSXyKMR2tXuJ3vJfB3FP6GUL0SjtYpCVGMUQvvTCY7-Cflsg3IKhPqK5kPDURFfiWWWvnjAZvztwghbgfrvrTtDJy7N0iAuzK9HBr9FhXHI4zLxkLWKmIZsCr7QZFr7N3e9WKLd9G8vGzcQjSkhrp_702bIAnc58wlEMiDbpC8jEHJFXAOUEJ-QDqV1tk3qr9pR7cNHIuj-3fXm4ON7tFylhlOdYOhGOZBcjDqjQDjNc2ocJQuOeHabF4" />
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-background-dark text-primary dark:text-white">
                                    +251
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Voyage Card 2 */}
                    <div className="flex-none w-80 bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-soft border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="relative h-48">
                            <img alt="Luxury Ship" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOJmpJhFA48bwNvETn-uVp7EQQAuxYqz8kOBiexNlJt6gfVyF4krCQkiho8If_pKH4NhuvLH9F0ftQVwQMDjkb9g5Ghuc53o0MuteI30e2a_vBA6Q9R9BUW23okLP2-_BYOFPTWbylKwutTUvBKm-Cwj8Y_SVtFSraeDu2GK__6uoAjeq22WHrINCyxSxsVJa-1rgo8pm4i_lEDWTzmSrf8iPLWS_5xwq1XJcTYbywG4DAXlHtd2dEb1lhWUah7R21_LdTLGxA6I" />
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                                188 Travelers onboard
                            </div>
                        </div>
                        <div className="p-5">
                            <p className="text-[10px] text-primary/60 dark:text-white/60 font-bold uppercase tracking-wider mb-2">Nov 05-12, 2024</p>
                            <h4 className="font-bold text-xl mb-2 text-primary dark:text-white">Celebrity Edge</h4>
                            <div className="flex items-center text-xs text-primary/70 dark:text-white/50 mb-4">
                                <span className="material-icons text-sm mr-1">location_on</span>
                                Celebrity • Fort Lauderdale
                            </div>
                            <div className="flex -space-x-3">
                                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcQpFQywwyz1J2nBjiPrs9rSROMW_d3-0xQ_ezi7nx5yUHu9n2qQRim61gQrnJVFxTKnpK7Xi_AFV4vglUN7r3zBJsNaeWTAA-WgoLWIHIlyz_DNkpIATMURhhXVYFALRbEode02pONpuNW9DJmbSAqNJJ5NXpf1i3uI6CpFt6eVGCfFgSj77lZus5tR2PGIjt1WONm-Jt-l2Q9IZE8am9--OS_WNvIDSQZi9Yptsq8LMz8O1F22y7H_EHsZpSTQz9U2cXXK7kbPE" />
                                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79X_HaPkSu-hgIg_Muk6cchGhWVJhNcBXM-UrchNVlpyFuZj3242DglZX9OXpW7Dc_8Gfs-_NHlj34IW5qVRisjU5x3toLttreoMDiKBZhiBXW1gZErk1FORu5StaTCy2MgZfUltEtWYoPccuZC5ojs2fdS_2JZGjnJf37wMFQFmdZfSDJsXxbuFoYj8tKdKUSP1PGZNWgNCv3EAMLJDAo2pfbUav1-11Ut8k5vdkg3PfecNz55dRgl38QvTXA-tZZ9fOblJjVZs" />
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-background-dark text-primary dark:text-white">
                                    +186
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
