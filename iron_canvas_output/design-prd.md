# IRON CANVAS DESIGN PRD
## Project: Crown Collection | Type: E (Enhancement) + D (Product Showcase) | Mode: SWARM
## Date: 2026-03-19

---

## 1. DESIGN DNA SUMMARY
- Dominant palette: #0A0A0A (off-black) | #1A1A1A (dark card) | #222222 (elevated)
- Accent: #CFA855 (gold) | #EDD37A (gold-light) | #A07830 (gold-dark)
- Text: #F5F0EB (cream) | #D4C9BC (cream-dim) | #6B6560 (muted)
- Fonts: Playfair Display (serif headlines) / Outfit (sans body)
- Base unit: Tailwind scale | Max width: 1280px (7xl) | Grid: CSS Grid 2/3/4 col
- Brand Personality: Minimal[3] Serious[8] Classic[6] Digital[4] Quiet[6] Fast[7→contemplative]

## 2. EMOTIONAL TARGET
- Primary: Regal exclusivity — rare, handcrafted, worthy of royalty
- Anti-feelings: Generic skincare, mass-produced corporate, feminine-only, cheap/amateur, cold/clinical
- Reference vibe: "Walking into a private Parisian atelier where the owner knows your name"

## 3. TECH STACK
- Framework: Next.js 16 (App Router) with React 19
- Styling: Tailwind CSS 4 (with @theme custom properties)
- NEW dependencies to install:
  - `gsap` (GreenSock Animation Platform — free for this use)
  - `@studio-freight/lenis` (smooth scroll)
- NO Three.js (avant-garde score 6 doesn't justify it)
- NO Barba.js (Next.js App Router — use CSS/GSAP page transitions instead)

## 4. IMPLEMENTATION TASKS (Priority Order)

### TASK 1: Install Dependencies
```bash
npm install gsap @studio-freight/lenis
```

### TASK 2: Smooth Scroll Engine (Lenis + GSAP)
Create `src/components/SmoothScroll.tsx` — a client component wrapper:
- Initialize Lenis with `duration: 1.6, smoothWheel: true`
- Sync with GSAP ticker: `gsap.ticker.add((time) => lenis.raf(time * 1000))`
- `gsap.ticker.lagSmoothing(0)`
- Wrap the app layout's children with this provider
- Handle cleanup on unmount

### TASK 3: Replace ALL IntersectionObserver reveals with GSAP ScrollTrigger
Every component currently uses its own IntersectionObserver. Replace with GSAP ScrollTrigger:
- Create `src/hooks/useScrollReveal.ts` — a hook that registers GSAP ScrollTrigger for `.reveal` elements
- Use `gsap.from()` with ScrollTrigger for each `.reveal` element
- Stagger: 0.08s between siblings
- Animation: `y: 40, autoAlpha: 0, duration: 0.8, ease: 'power2.out'`
- Start: `'top 85%'`
- Remove ALL individual IntersectionObserver implementations from components
- Keep the CSS `.reveal` class for initial hidden state but let GSAP drive the animation

### TASK 4: Hero Load Sequence
Replace CSS animation delays with a choreographed GSAP timeline on the Hero:
- Phase 0 (0ms): Background glow orbs fade in
- Phase 1 (200ms): Gold line appears
- Phase 2 (400ms): Eyebrow text slides up + fades in
- Phase 3 (600ms): "Crown" text — use SplitText to animate chars from below
- Phase 4 (800ms): "Collection" gold text — chars from below with slight rotation
- Phase 5 (1000ms): Taglines fade in from sides
- Phase 6 (1200ms): CTAs scale in
- Phase 7 (1400ms): Scroll indicator fades in
- Total: ~2s for complete hero entry
- Use `gsap.timeline()` with absolute position labels

### TASK 5: Section Transition Enhancements
Add section-specific GSAP animations beyond basic reveals:
- **About section**: Left text slides from left, right card slides from right, with gold corner accents drawing in
- **Products section**: Cards stagger from bottom with scale, price numbers use counter animation
- **Scents section**: Alternating cards slide from left/right matching their alternating layout
- **Collections section**: King card from left, Queen card from right (offset maintained)
- **Ingredients section**: Each ingredient row slides in from alternating sides
- **Contact section**: Instagram section scales in, contact cards stagger from right

### TASK 6: Navbar Scroll Enhancement
- On scroll down: navbar slides up and hides
- On scroll up: navbar slides back down
- Use GSAP + ScrollTrigger with `onUpdate` to detect scroll direction
- Maintain the existing blur/border behavior on scroll

### TASK 7: Gold Accent Parallax
Add subtle parallax to decorative elements:
- Hero gold glow orbs: move at 0.3x scroll speed (parallax depth)
- About section vertical gold line: slight parallax
- Section divider gold rules: very subtle (0.1x) horizontal shimmer tied to scroll

### TASK 8: Micro-interactions Polish
- **Buttons**: Add `gsap.to` spring effect on hover (slight scale + shadow bloom)
- **Gold rule dividers**: Animate width from 0 to full when they enter viewport
- **Scent profile tags**: Stagger pop-in animation when scent card enters view
- **Size selector (scent page)**: GSAP spring transition when switching sizes
- **Mobile menu**: GSAP-powered slide with staggered link entries (replace CSS transition)

### TASK 9: Cursor System
Since Bold score is 6 (≥5), implement trailing cursor:
- Create `src/components/Cursor.tsx`
- Dot follows mouse instantly, ring follows with lerp (0.12)
- `data-magnetic` on all CTA buttons — ring scales up, element pulls toward cursor
- Skip entirely on touch devices (`'ontouchstart' in window`)
- Ring changes to text "View" when hovering scent cards
- Ring changes to text "Shop" when hovering product cards
- Use `position: fixed` with `pointer-events: none`
- Z-index: 9999

### TASK 10: Text Animations
For key headlines only (not all text):
- Hero "Crown" + "Collection": SplitText char animation on load
- Section headings (About, Products, Scents, Collections, Ingredients): SplitText word animation on scroll reveal
- Price numbers on product cards: Counter animation (0 → actual price) on scroll reveal
- Use `gsap.registerPlugin(SplitText)` — NOTE: SplitText requires GSAP Club membership. 
  ALTERNATIVE: Use a simple custom text splitter function that wraps each word/char in spans

### TASK 11: prefers-reduced-motion
- Wrap ALL GSAP animations in a check: `const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches`
- If reduced motion: skip all animations, show content immediately with simple opacity transitions
- Lenis: disable smooth scroll if reduced motion preferred

### TASK 12: Performance
- All animations use `transform` and `opacity` only
- Apply `will-change: transform` before animation, remove after with `clearProps`
- Lazy load any generated product images
- Ensure no layout shifts from animation (set explicit dimensions)

## 5. FILE STRUCTURE (what to create/modify)
```
src/
├── components/
│   ├── SmoothScroll.tsx    ← NEW: Lenis wrapper
│   ├── Cursor.tsx          ← NEW: Custom cursor
│   ├── Hero.tsx            ← MODIFY: GSAP load sequence, remove IntersectionObserver
│   ├── About.tsx           ← MODIFY: GSAP ScrollTrigger, remove IO
│   ├── Products.tsx        ← MODIFY: GSAP ScrollTrigger + counters, remove IO
│   ├── Scents.tsx          ← MODIFY: GSAP ScrollTrigger, remove IO
│   ├── Collections.tsx     ← MODIFY: GSAP ScrollTrigger, remove IO
│   ├── Ingredients.tsx     ← MODIFY: GSAP ScrollTrigger, remove IO
│   ├── Contact.tsx         ← MODIFY: GSAP ScrollTrigger, remove IO
│   ├── Navbar.tsx          ← MODIFY: hide-on-scroll-down behavior
│   ├── Footer.tsx          ← KEEP (minimal changes)
│   ├── ScrollReveal.tsx    ← DELETE (replaced by GSAP)
│   └── Nav.tsx             ← KEEP (alternative nav, unused in main page)
├── hooks/
│   └── useGSAP.ts          ← NEW: shared GSAP initialization hook
├── app/
│   ├── layout.tsx          ← MODIFY: wrap with SmoothScroll
│   ├── globals.css         ← MODIFY: add cursor styles, update reveal system
│   └── ...
└── lib/
    └── splitText.ts        ← NEW: lightweight text splitter utility (avoid GSAP Club dep)
```

## 6. ANTI-PATTERNS — ACTIVE VETO LIST
- ❌ DO NOT add Three.js or WebGL — overkill for this project
- ❌ DO NOT change the color palette — the gold/black is perfect
- ❌ DO NOT change fonts — Playfair + Outfit is intentional and strong
- ❌ DO NOT add particle effects — this is quiet luxury, not tech demo
- ❌ DO NOT make animations longer than 1s for section reveals
- ❌ DO NOT add sound/audio effects
- ❌ DO NOT change the copy — it's been carefully written
- ❌ DO NOT restructure the component hierarchy — enhance in place
- ❌ DO NOT remove any existing sections or features
- ❌ DO NOT use `<video>` tags for animation — Canvas + frames only if scroll sequence needed (not needed here)

## 7. QUALITY TARGETS
- Lighthouse Performance: ≥ 85
- LCP: < 2.5s
- All animations: 60fps
- Mobile: preserve at least the reveal animations, skip cursor
- WCAG: AA contrast maintained (already passing)
- Build must compile without errors (`npm run build`)

## 8. GIT WORKFLOW
- Work on `staging` branch
- Commit atomic changes per task
- Final: `npm run build` must pass clean
