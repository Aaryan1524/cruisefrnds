import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuoteSection from "@/components/QuoteSection";
import SocialDeck from "@/components/SocialDeck";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <QuoteSection />
      <SocialDeck />
      <Footer />
    </main>
  );
}
