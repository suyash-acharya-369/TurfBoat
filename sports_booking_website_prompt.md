# Master Website Prompt: Awwwards-Style Interactive Sports Playground & App Showcase

## 1. Role & Core Objective
Act as an Awwwards-winning Creative Developer, Motion Designer, and Senior UI/UX Architect. Build an immersive, ultra-clean, single-page showcase website for a next-generation hyperlocal sports booking, team-challenge, and player-stats app. 

**Strict Website Scope Rule**: 
* The website exists **exclusively** to showcase all features of the mobile app in an interactive "sports playground" storytelling flow, drive users to **Download the App** (iOS / Android), and invite them to **Join the Community** (WhatsApp neighborhood hubs & social media channels), concluding with a sleek **Contact & Socials** section.
* **Do NOT** include web-based checkout flows, B2B vendor portals, pricing tables, blog feeds, or multi-page navigation menus. Every interaction on the site showcases what the app does and funnels users directly to downloading the app or joining the community.

## 2. Aesthetic Direction: "The Digital Sports Playground" (Awwwards SOTD Vibe)
* **Visual Theme**: A living, breathing floodlit night-turf playground that blends clean Swiss grid minimalism with kinetic athletic energy. Subtle tactical chalk lines, pitch markings, and court boundaries dynamically draw themselves across the background as the user scrolls, connecting every section like a continuous sports arena.
* **Color Palette**:
  * **Canvas Background**: Deep Stadium Carbon (`#06090E`) and Matte Turf Obsidian (`#0D131A`) for an uncluttered, high-contrast dark UI.
  * **Primary Accent**: Electric Turf Lime (`#10B981` to `#34D399` glow) representing active slots, live pitches, and WhatsApp community pulse.
  * **Secondary Accent**: Floodlight Amber / Rival Orange (`#FF5A1F`) for team challenges, discounts, and action triggers.
  * **Surface & Borders**: Ultra-clean frosted glass cards (`rgba(255, 255, 255, 0.04)` with `1px solid rgba(255, 255, 255, 0.08)` borders and subtle specular top-edge highlights).
* **Typography**:
  * **Display / Kinetic Headlines**: Ultra-bold, wide or condensed athletic display font (*Monument Extended*, *Clash Display*, or *Syne ExtraBold*) that scales fluidly and reacts to scroll velocity.
  * **UI & Body Copy**: Crisp geometric sans-serif (*Plus Jakarta Sans* or *Inter*) with generous whitespace and high scannability.
  * **Stats & Counters**: Monospaced tabular numerals (*JetBrains Mono* or *Space Grotesk*) for live slot timers, discounts, and player ratings.

## 3. Motion Architecture, Smooth Flow & Playground Micro-Interactions
* **Smooth Inertial Scrolling**: Implement buttery-smooth momentum scrolling (Lenis / Locomotive Scroll style) paired with GSAP ScrollTrigger so sections glide and morph seamlessly without hard page cuts.
* **Tactical Chalk-Line Scroll Spine**: A glowing SVG pitch-line path runs vertically down the page, drawing court circles, penalty boxes, and tactical arrows in real time as the user scrolls from section to section.
* **Custom Playground Cursor**: A reactive custom cursor that glides with spring physics—expanding into a magnetic "Play / Kickoff" badge over app mockups, a "Challenge" crosshair over rival cards, and a glowing QR lens over download buttons.
* **3D / 2.5D Floating Phone Choreography**: A central sleek 3D smartphone mockup stays pinned during key scroll chapters, rotating smoothly in 3D space while its screen transitions seamlessly through the app's core features, surrounded by floating spatial UI badges that react to mouse parallax.
* **Audio-Visual Polish (Optional Toggle)**: Subtle, muted-by-default ambient playground sound design (soft turf kick thuds on button hover, whistle chime on challenge accept, crowd swell on the community section).

## 4. Seamless Section-by-Section Scroll Flow

### Section 1: The Kickoff Hero (Floodlit Playground Entry)
* **Entrance Animation**: Stadium floodlights smoothly power on from the top corners, illuminating a subtle 3D perspective grid of a sports turf. Giant kinetic typography animates in with a staggered upward reveal.
* **Hero Copy**:
  * **Floating Pill Badge**: *"LIVE IN YOUR CITY • BOOK • CHALLENGE • DOMINATE"*
  * **Main Headline**: *"YOUR CITY IS THE PLAYGROUND."*
  * **Subheadline**: *"Book nearby turfs & clubs with instant discounts, split payments effortlessly, challenge rival squads across your city, and turn every match into pro stats and AI highlight reels."*
* **Centerpiece Visual**: A floating, angled 3D phone mockup displaying the live app home screen, surrounded by orbiting glassmorphic micro-widgets (a live *-30% Flash Turf Slot* tag, a *Match MVP* badge, and a *Challenge Accepted* alert) that bob gently and shift with cursor movement.
* **Primary Conversion Bar (Magnetic CTAs)**:
  * **Button 1 (Primary Glow)**: *"Download the App"* (Opens a sleek floating QR code & App Store / Play Store selector on hover or click).
  * **Button 2 (Turf Green Outline)**: *"Join WhatsApp Community"* (Smoothly scrolls to the Community Hub or launches the instant city-group invite modal).

### Section 2: Interactive App Showcase — Chapter 1: Instant Turf Booking, Split-Pay & Flash Discounts
* **Scroll Transition**: As the user scrolls, the SVG chalk line draws a turf boundary box around the pinned 3D phone. The phone screen smoothly transitions to the **Turf & Club Booking** interface.
* **What the Website Shows About the App**:
  * **Nearby Turf & Club Discovery**: Interactive preview showing how the app lets you browse nearby football turfs, box cricket arenas, badminton courts, and pickleball clubs with real-time slot availability and floodlight ratings.
  * **Online Split-Pay Escrow (No More Chasing Cash)**: Animated visual showing a turf booking fee automatically splitting into 10 individual player payment links inside the app so captains never pay out of pocket for dropouts.
  * **Dynamic Discounts & Flash Drops**: Interactive floating cards demonstrating how the app unlocks last-minute off-peak slot discounts, squad streak cashback, and exclusive club deals.
* **Micro-Interaction**: Hovering over different sport pills (*Football*, *Box Cricket*, *Badminton*, *Pickleball*) dynamically changes the playground surface texture and updates the app screen preview.

### Section 3: Interactive App Showcase — Chapter 2: "City Turf Wars" (Team Challenges & Ringer SOS)
* **Scroll Transition**: The background glow shifts from Turf Lime to Rival Ember Orange (`#FF5A1F`). Tactical formation arrows draw across the background as two team crests slide in from opposite sides of the viewport toward the central app screen.
* **What the Website Shows About the App**:
  * **Area & City Team Challenges**: Showcases how squads can issue formal match challenges to other teams in a specific neighborhood or across the city, complete with an "Accept Challenge" swipe animation on the phone screen.
  * **50/50 Escrow Match Lock**: Highlights how the app eliminates flaky no-show opponents by locking each team's half of the turf fee online the moment a challenge is accepted.
  * **Ringer SOS (Need +2 Players Tonight)**: Demonstrates the app's instant beacon that fills last-minute empty spots by inviting verified solo players from the local community based on position and reliability score.

### Section 4: Interactive App Showcase — Chapter 3: Pro Game Management, Stats & AI Match Recording
* **Scroll Transition**: The camera zooms into a sleek horizontal bento-grid showcase that feels like a pro-sports broadcast control room and FIFA/2K player locker.
* **What the Website Shows About the App**:
  * **Smart Turf Match Recording & Instant Reels**: An interactive video-scrubbing card showing how the app connects to turf cameras to record full games and auto-clip 15-second vertical highlight reels of goals, sixes, and smashes ready to share.
  * **Pro Player Cards & Career Stats**: A 3D holographic player card that tilts with the user's cursor, showcasing how the app tracks matches played, win ratio, goals/runs/points, peer-voted MVP awards, and city leaderboard rankings.
  * **Squad Lineups & Match Management**: Shows the app's drag-and-drop tactical lineup builder, automated attendance tracking, and verified post-match digital scorecards.

### Section 5: The Community Arena (WhatsApp Hubs & Social Communities)
* **Scroll Transition**: The tactical pitch lines converge into a glowing radar pulse at the center of the screen, surrounded by floating avatars and live community activity bubbles.
* **Core Message**: *"Never Miss a Game. Plug Into Your City's Biggest Sports Community."*
* **What the Website Shows**:
  * **Hyperlocal WhatsApp Community Integration**: Showcases how the app and city WhatsApp groups work together—dropping daily discounted turf alerts, *"Need 1 Player"* emergency invites, team challenge callouts, and weekly MVP leaderboards directly on WhatsApp.
  * **Interactive Community Join Cards**: Clean, magnetic cards allowing visitors to join with one click:
    * **Official WhatsApp Community Hub** (Primary featured card with live member pulse and instant invite link).
    * **Instagram Highlights & Reels Community** (Watch top local turf goals, weekly MVPs, and city turf wars).
    * **Discord / Telegram & YouTube Channels** (Tournament announcements, full match streams, and squad banter).

### Section 6: The Final Whistle — Giant App Download & Contact Section
* **Visual Layout**: A dramatic, clean full-viewport finale styled like a stadium scoreboard and tunnel exit.
* **App Download Centerpiece**:
  * **Kinetic Headline**: *"STEP ONTO THE TURF. DOWNLOAD THE APP TODAY."*
  * **Interactive QR & Store Dock**: A glowing glassmorphic dock featuring a scannable dynamic QR code alongside magnetic **Download on the App Store** and **Get it on Google Play** buttons.
* **Minimalist Contact & Social Footer**:
  * **Direct Contact Card**: Clean, zero-clutter contact strip for community inquiries, city expansion requests, or support (One-click Email copy pill, WhatsApp Direct Chat button, and a 3-field inline message drawer: *Name*, *City/Message*, *Send*).
  * **Social Community Links**: Bold, magnetic hover links for WhatsApp Community, Instagram, YouTube, X (Twitter), and Discord.
  * **Persistent Floating Action Pill**: A sleek, compact bottom-center floating bar that stays visible while scrolling—housing just two quick actions: **"Get the App"** and **"Join WhatsApp"**.