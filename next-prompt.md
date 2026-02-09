---
page: about
---
A compelling "About Us" page detailing the mission, team, and origin story of CruiseFrnds.

**DESIGN SYSTEM (REQUIRED):**
# Design System: CruiseFrnds
**Project ID:** local-export

## 1. Visual Theme & Atmosphere
The design exudes **"Modern Maritime Luxury."** It feels serene, exclusive, and sophisticated, like a high-end travel magazine coming to life. The atmosphere is:
-   **Airy & Spacious**: Generous usage of negative space to create a sense of calm.
-   **Liquid & Glassy**: Subtle glassmorphism and smooth transitions mimic the ocean.
-   **Premium & Trustworthy**: Deep navy tones anchored by warm cream backgrounds suggest tradition and reliability, while modern typography adds a contemporary edge.

## 2. Color Palette & Roles
*   **Deep Midnight Navy (#001F3F)**: *Primary Brand Color.* Used for key text, strong headings, and primary action buttons. Anchors the design.
*   **Warm Sand Cream (#F9F7F2)**: *Primary Background.* A soft, paper-like off-white that replaces harsh white for a more organic, luxurious feel.
*   **Deep Space Black (#0a0a0a)**: *Dark Mode Background.* Used for the dark theme base.
*   **Pure White (#FFFFFF)**: *Surface & Text.* Used for cards in light mode and text in dark mode.
*   **Accent Silver (#E2E8F0)**: *Borders & Dividers.* Subtle separation lines.
*   **Soft Seafoam (#F0F4F8)**: *Secondary Backgrounds.* Used for slight differentiation in sections.
*   **Editorial Card (#F0EFE9)**: *Card Backgrounds.* A slightly darker cream to separate cards from the main background.

## 3. Typography Rules
*   **Headings (Display):** **Playfair Display** (Serif). Used for large, impact statements (e.g., "The voyage begins..."). It adds an editorial, classic elegance.
*   **Body & UI (Sans):** **Inter** (Sans-serif). Used for navigation, buttons, and long-form text. It provides clean, modern readability.

## 4. Component Stylings
*   **Buttons:**
    *   **Primary:** Pill-shaped (`rounded-full`), Deep Midnight Navy background with White text. Hover effects include a subtle lift and shadow.
    *   **Secondary/Outline:** Transparent background with a Deep Midnight Navy border and text. `rounded-full`.
*   **Cards/Containers:**
    *   **Glass Panels:** `glass-panel` class. Translucent white backgrounds with a blur effect (`backdrop-blur-md`) and a thin, semi-transparent white border.
    *   **Standard Cards:** `rounded-2xl` or `rounded-3xl`. Soft, large corner radii for a friendly, organic feel.
    *   **Shadows:** `shadow-soft` (diffused, large spread) or `shadow-glass` (crisp, light).
*   **Imagery:**
    *   **Rounded Corners:** Images often have `rounded-2xl` or `rounded-3xl` to match container shapes.
    *   **Aspect Ratios:** Cinematic wide crops or tall editorial portraits.

## 5. Layout Principles
*   **Whitespace:** generous padding (`py-20`, `px-6`). Sections are distinct and uncluttered.
*   **Grid:** Standard 12-column grid, often centering content in a max-width container (`max-w-7xl`).
*   **Alignment:** Center-aligned headings for impact, left-aligned body text for readability.

**Page Structure:**
1.  **Navbar**: Consistent.
2.  **Hero Section**: "Navigating Connection" - Image of a compass or map on a captain's table.
3.  **Mission Statement**: Large serif typography: "To ensure no traveler sails alone." with a short paragraph about fostering meaningful connections at sea.
4.  **The Story**: Two-column layout (Text + Image) describing how the founders met on a cruise and realized the need for better pre-voyage tools.
5.  **Meet the Crew**: Grid of team member cards (Founders, Designers, Engineers) with photos and titles.
6.  **Values**: Icons + Text for "Safety", "Inclusivity", and "Adventure".
7.  **Footer**: Consistent.
