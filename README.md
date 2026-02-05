#  CruiseFrnds

**The Premier Cruise Social & AI Platform**

CruiseFrnds is a next-generation social platform designed specifically for cruise enthusiasts. It combines a familiar Discord-like architecture with powerful RAG (Retrieval-Augmented Generation) AI agents, advanced matchmaking, and augmented reality features to transform the cruise experience.

##  The Vision

### 1. The "Cruise-Centric" Nested Hierarchy
We organize communities not just by topic, but by the specific journey:

*   **Categories (Cruise Lines)**: Roots of the community (e.g., *Royal Caribbean*, *Carnival*, *Virgin Voyages*).
*   **Channels (Ships)**: Dedicated spaces for each vessel (e.g., *Icon of the Seas*, *Wonder of the Seas*).
*   **Sub-Channels (Sailing Weeks)**: The core social unit. Specific dates for specific trips.
    *   Example: `#Mar-15-2026-Eastern-Caribbean`
*   **Topics (Decks)**: Granular interest groups within a sailing:
    *   `#solo-travelers`
    *   `#excursion-planning`
    *   `#foodies-dining-mates`
    *   `#the-casino-crew`

### 2. High-Impact AI Implementations
CruiseFrnds differentiates itself with deeply integrated AI agents:

####  A. "Shore-Sight" RAG Agent
An embedded AI in every "Week" room that acts as the ultimate guide.
*   **Tech**: RAG ingestion of ship itineraries, deck plans, and excursion PDFs.
*   **Usage**: User tags `@CruiseBot`: *"What's the best quiet spot for a sunset on Deck 12?"* -> Bot answers using actual ship blueprints.

####  B. "Vibe-Check" Matchmaking
AI that goes beyond simple profiles to match cruise mates.
*   **Tech**: Embedding models analyzing user bios and interests.
*   **Feature**: *"Hey, I noticed you and 3 others are Indian international students at FIU and like TQQQ trading—want me to start a private 'Trader's Brunch' group for your March 15th sailing?"*

####  C. AI Excursion Bundler
Automated group planning for shore excursions.
*   **Feature**: Scans `#excursion-planning` for interest clusters. If 10 people want a private catamaran in St. Thomas, the AI finds an operator, calculates the split cost, and creates a "Commitment Poll."

####  D. "Memory Collage" Generator
Post-cruise nostalgia engine.
*   **Feature**: Users dump photos into a shared week-folder. The AI (Ghibli-style/Retro aesthetic) generates a cinematic recap or artistic collage of the group's highlights.

### 3. "X-Factor" Creative Features

####  Digital Cruise Card (NFC/QR)
Every user gets a "CruiseFrnd Pass." Meet someone on the ship? Scan phones to "collect" them as a digital souvenir badge.

####  AR Ship Finder
Hold up your phone in a lounge to see floating icons of where your app friends are hanging out (opt-in).

####  Ghost-Mode Transitions
*   **Pre-Boarding**: High-bandwidth social activity.
*   **On-Board**: Offline-first, low-data messaging optimized for spotty maritime Wi-Fi.

---

##  Stack

*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS ("Apple Liquid Glass" Aesthetic)
*   **AI/RAG**: Vector DB (Pinecone/Supabase), OpenAI/LangChain
*   **Realtime**: WebSockets

##  Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the prototype.
