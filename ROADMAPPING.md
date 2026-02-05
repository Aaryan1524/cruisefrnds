# CruiseFrnds Granular Roadmap

## Vision
A Discord-like platform for cruise enthusiasts with heavy AI integration (RAG, Matchmaking, AR).
Target: 200-300 days.

## Phase 1: Foundation (Days 1-30)

### Epic 1: Project Initialization
- [x] 1.1 Initialize Git Repository
- [x] 1.2 Initialize Next.js 14+ Project with TypeScript
- [x] 1.3 Configure Tailwind CSS with "Apple Liquid Glass" aesthetic presets
- [x] 1.4 Setup ESLint and Prettier with strict rules
- [x] 1.5 Configure Husky for pre-commit hooks
- [ ] 1.6 Setup Jest and React Testing Library
- [ ] 1.7 Create initial directory structure (src/components, src/lib, etc.)
- [ ] 1.8 Configure absolute imports (@/)
- [ ] 1.9 Setup CI/CD pipeline skeleton (GitHub Actions)
- [ ] 1.10 Create README with project vision and setup instructions

### Epic 2: Core Analysis & RAG Foundation
- [ ] 2.1 Set up Pinecone/Vector DB environment
- [ ] 2.2 Design Cruise Line data schema (JSON/SQL)
- [ ] 2.3 Design Ship data schema
- [ ] 2.4 Design "Sailing Week" temporal schema
- [ ] 2.5 Implement basic RAG ingestion script
- [ ] 2.6 Create OpenAI API integration module
- [ ] 2.7 Build "Cruise Knowledge Base" scraper skeleton
- [ ] 2.8 Define RAG context window strategies
- [ ] 2.9 Implement "CruiseFrnds AI" persona definitions
- [ ] 2.10 Unit test RAG utility functions

### Epic 3: Authentication & User Identity
- [ ] 3.1 Integrate Clerk or NextAuth for authentication
- [ ] 3.2 Create "Traveler Profile" schema (Solo, Couple, Family)
- [ ] 3.3 Build Onboarding Wizard UI foundation
- [ ] 3.4 Implement "Past Cruises" logging logic
- [ ] 3.5 Create User Settings page layout
- [ ] 3.6 Implement Profile Picture upload with CDN
- [ ] 3.7 Add "Cruise Personality" quiz logic
- [ ] 3.8 Secure API routes with middleware
- [ ] 3.9 Create "Verified Cruiser" status logic
- [ ] 3.10 Build Login/Signup page with glassmorphism UI

### Epic 4: Nested Hierarchy Engine (The Core)
- [ ] 4.1 Create `Category` (Cruise Line) data model
- [ ] 4.2 Create `Channel` (Ship) data model
- [ ] 4.3 Create `SubChoice` (Sailing Date) data model
- [ ] 4.4 Build Sidebar UI Component (Discord-style)
- [ ] 4.5 Implement "Cruise Line" server list UI
- [ ] 4.6 Implement "Ship" channel list UI
- [ ] 4.7 Develop "Sailing Week" date picker/selector logic
- [ ] 4.8 Store active hierarchy state in global store (Zustand/Redux)
- [ ] 4.9 Optimize hierarchy rendering for performance
- [ ] 4.10 Write integration tests for navigation switching

### Epic 5: Real-time Communication (Chat)
- [ ] 5.1 Initialize WebSocket / Supabase Realtime setup
- [ ] 5.2 Create Chat Message component (Bubble UI)
- [ ] 5.3 Design Data Model for Messages (User, Timestamp, Content)
- [ ] 5.4 Implement "Channel" subscription logic for Ships
- [ ] 5.5 Build "Sailing Week" specific chat rooms
- [ ] 5.6 Add Emoji Picker integration
- [ ] 5.7 Implement Message Persistence (Database)
- [ ] 5.8 Add "Typing..." indicators
- [ ] 5.9 Implement "Read Receipts"
- [ ] 5.10 Build Thread/Reply system foundation

### Epic 6: AI Chat Assistance
- [ ] 6.1 Create "Summarize this Channel" AI button
- [ ] 6.2 Implement "Reply Suggestion" using LLM
- [ ] 6.3 Build Sentiment Analysis hook for chat stream
- [ ] 6.4 Create "Moderator AI" bot skeleton
- [ ] 6.5 Implement "Fact Check" AI overlay for cruise facts
- [ ] 6.6 Design "Travel Buddy" AI agent interface
- [ ] 6.7 Implement multi-language AI translation hook
- [ ] 6.8 Cache AI responses for efficiency
- [ ] 6.9 Rate limit AI features per user
- [ ] 6.10 Build UI for AI "Thinking" states

### Epic 7: Solo Traveler Matchmaking
- [ ] 7.1 Define Matchmaking Algorithm variables
- [ ] 7.2 Create "Looking for Roommate" status toggle
- [ ] 7.3 Build "Match Card" UI component
- [ ] 7.4 Implement Swipe/Connect logic
- [ ] 7.5 Create Private Match Chat initiation
- [ ] 7.6 Design "Compatibility Score" visualization
- [ ] 7.7 Implement "Safety Check" verification prompt
- [ ] 7.8 Build "Shared Interests" tag system
- [ ] 7.9 Create Notification system for matches
- [ ] 7.10 Analytics for match success rates

## Phase 2: Expansion & Content (Days 31-60)

### Epic 8: Deck Plans & Visuals
- [ ] 8.1 Source deck plan images for major ships
- [ ] 8.2 Build Interactive Map Viewer component
- [ ] 8.3 Implement "Pin Location" feature for meets
- [ ] 8.4 Create "Cabin Locator" tool
- [ ] 8.5 Integrate Mapbox/Leaflet for route maps
- [ ] 8.6 Build "Ship Tour" gallery component
- [ ] 8.7 Optimize image loading (Next.js Image)
- [ ] 8.8 Add "Points of Interest" markers
- [ ] 8.9 Implement Mobile-friendly zoom/pan
- [ ] 8.10 Link Deck Locations to Chat Channels

### Epic 9: Excursion & Port AI
- [ ] 9.1 Scrape Shore Excursion data backbone
- [ ] 9.2 Build "Port Guide" generation pipeline (RAG)
- [ ] 9.3 Create "Group Excursion" planner tool
- [ ] 9.4 Implement "Weather Forecast" widget per port
- [ ] 9.5 Build "Local Currency" converter tool
- [ ] 9.6 Design "Port Safety" AI summary card
- [ ] 9.7 Create "Transportation" options list
- [ ] 9.8 Implement "Food & Drink" recommendations
- [ ] 9.9 Build "Memory Maker" photo spot list
- [ ] 9.10 User Review system for excursions

### Epic 10: Event Scheduling System
- [ ] 10.1 Create Calendar UI component
- [ ] 10.2 Implement "Create Meetup" form
- [ ] 10.3 Build RSVP system
- [ ] 10.4 Integrate with Personal Schedule
- [ ] 10.5 Add "Reminders" notification logic
- [ ] 10.6 Create "Official Cruise Schedule" parser
- [ ] 10.7 Implement "Conflicting Event" warning
- [ ] 10.8 Build "Share Event" deep link generator
- [ ] 10.9 Create "Past Events" archive
- [ ] 10.10 Admin tools for event moderation

... (Continuing to Epic 100 would require extensive file length, pausing here to ensure quality of the foundation. Further Epics will be generated as we progress through Phases.)
