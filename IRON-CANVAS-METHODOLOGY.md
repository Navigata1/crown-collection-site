# Iron Canvas — Complete Methodology (Compiled v2.0)

> **"Enhancement means amplifying what's already good, not replacing it with a uniform style."**

Iron Canvas is NOT a template. It's a methodology for making any site the best version of ITSELF. Every site has its own DNA — palette, fonts, imagery style, personality, mood. Iron Canvas reads that DNA first, then enhances within it. Three sites enhanced by Iron Canvas should look like three DIFFERENT premium sites, not three copies of the same dark template.

---

## Table of Contents

1. [The Golden Rule](#the-golden-rule)
2. [Phase 1: STUDY — Read the Site's DNA](#phase-1-study)
3. [Phase 2: FEEL — Discover the Emotional Target](#phase-2-feel)
4. [Phase 3: COLLECT — Find Matching References](#phase-3-collect)
5. [Phase 4: FORGE — Structural Enhancement](#phase-4-forge)
6. [Phase 5: GENERATE — Context-Aware Artifact Creation](#phase-5-generate)
7. [Phase 6: COMPOSE — Integration & Scroll Engine](#phase-6-compose)
8. [Phase 7: REFINE — Iterative Polish](#phase-7-refine)
9. [Production Branching Protocol](#production-branching)
10. [Anti-Patterns](#anti-patterns)
11. [Invocation Templates](#invocation)

---

## The Golden Rule

Before changing anything: **STUDY what's there. Extract. Understand. Then enhance.**

The 7-Phase Pipeline:
```
STUDY → FEEL → COLLECT → FORGE → GENERATE → COMPOSE → REFINE
  1        2       3        4         5          6        7
```

---

## Phase 1: STUDY (Read the Site's DNA) {#phase-1-study}

Before ANY design work happens, you must profile the existing site completely:

### Actions
1. **Screenshot every section** — full page captures + individual section crops
2. **Extract CSS custom properties** (`--vars`) to get the ACTUAL palette, not what you think it is
3. **Identify all fonts** currently in use (display, heading, body, accent)
4. **Map every image**: position, dimensions, container blending (overlay? gradient? blend mode?)
5. **Count and name sections**: hero, stats, features, testimonials, CTA, footer, etc.
6. **Document what's WORKING**: What has personality? What should be preserved at all costs?
7. **Document what's WEAK**: Generic layouts? Missing hover states? Poor typography? Broken spacing?

### Output — Site DNA Profile
```
PALETTE: [hex codes with names]
FONTS: [display], [headings], [body]
PERSONALITY: [3-5 adjectives describing the site's feel]
HERO: [layout description]
SECTIONS: [count] ([list])
IMAGES: [count] — [breakdown by type]
STRENGTHS: [what works]
WEAKNESSES: [what needs enhancement]
```

### Why This Matters
Without Phase 1, you're guessing. And guessing leads to cookie-cutter results — the #1 anti-pattern.

---

## Phase 2: FEEL (Discover the Emotional Target) {#phase-2-feel}

Read the site's existing content, imagery, and palette to understand what it's TRYING to be. **Don't impose a feel — discover it.**

### Process
- Read all copy on the site. What words recur? What tone?
- Study the imagery. Warm? Cold? Bold? Subtle?
- Look at the palette. Earth tones = organic/natural. Gold/black = luxury. Bright primaries = playful.
- Combine into a **Feel Profile**: 3-5 emotional targets the site is aiming for

### Examples
| Site Type | Palette Signals | Feel Profile |
|-----------|----------------|--------------|
| Church (maroon/gold, stained glass) | Warm, deep, sacred | Trusted, community, sanctuary |
| Academy (green/gold, mascot) | Energetic, institutional | Youthful, pride, aspiration |
| Luxury product (black/gold) | Opulent, minimal | Exclusive, premium, desire |
| Outdoor brand (earth tones) | Natural, rugged | Adventure, achievement, spirit |

**Each site gets its OWN feel profile. Never apply the same feel to different sites.**

---

## Phase 3: COLLECT (Find Matching References) {#phase-3-collect}

Find inspiration that matches THIS site's unique personality — not a universal mood board.

### Process
1. Based on the Feel Profile, identify the **industry vertical** (luxury goods, faith org, education, etc.)
2. Find 3-5 reference sites in that vertical that are considered best-in-class
3. Screenshot specific elements you want to draw from (hover states, scroll effects, typography treatments)
4. Note what makes each reference PREMIUM in a way that fits the target site's personality
5. **Never copy** — use references to understand patterns, then adapt to the site's DNA

---

## Phase 4: FORGE (Structural Enhancement) {#phase-4-forge}

This is where you upgrade the site's skeleton. The taste/design engineering rules apply but must be ADAPTED to the existing design.

### Always Add (Universal Upgrades)
- ✅ Scroll-triggered reveal animations (`IntersectionObserver`)
- ✅ Hover/active/focus states on ALL interactive elements
- ✅ Spring cubic-bezier curves on transitions: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- ✅ Mobile responsive with `min-h-[100dvh]`
- ✅ Grain/noise texture overlays where the aesthetic supports it
- ✅ Glassmorphism where it fits (luxury, modern, minimal sites)
- ✅ Tinted shadows using the site's own hue (gold shadows for gold palette, etc.)

### Adapt to the Site (Never Impose)
- **Typography**: Enhance the EXISTING font stack. Improve hierarchy (tighter tracking on display, better line-height on body). Only swap fonts if they're genuinely bad (system defaults).
- **Colors**: Use the site's ACTUAL palette. Enhance contrast, add depth. Don't replace their unique colors with a "safe" palette.
- **Layout**: Break symmetry and add visual interest WITHIN the existing structure. Don't reorganize sections — enhance them.

### Never Do
- ❌ Replace a site's unique palette with a uniform one
- ❌ Swap all fonts regardless of what's there
- ❌ Apply the same hero layout to every site
- ❌ Make different sites look identical

---

## Phase 5: GENERATE (Context-Aware Artifact Creation) {#phase-5-generate}

The most critical phase. Every generated artifact must be PURPOSE-BUILT for its exact location on the site.

### Before Generating ANY Image
1. Screenshot the exact section where it will live
2. Understand the CSS context (gradients, blend modes, opacity overlays)
3. Note exact dimensions needed (natural size AND rendered size)
4. Study the palette and mood from Phase 1
5. Craft the prompt to produce something that BLENDS into that specific context

### Prompt Engineering Rules
- **Include the site's actual hex colors** in every prompt
- **Describe the usage context**: "displayed at 1128×375px with dark gradient overlay from the left"
- **Match existing style**: If current icons are warm photorealistic, generate in that style
- **Negative constraints**: "no cold blue tones, no purple, no neon"
- **Material specificity**: "matte black jar with brushed gold lid, soft studio lighting from upper left"

### Model Selection
| Need | Best Tool |
|------|-----------|
| Product stills, hero images | Nano Banana Pro (Gemini 3 Pro Image) |
| Alternative stills | GPT Image 1.5, Grok Imagine |
| Video/Animation | Kling 3, Veo 3 |
| Start/End frames | Stitch |
| Product rotations | Leonardo AI Product Spin Video |
| Style matching | Leonardo AI Style Transfer |
| Scene placement | Leonardo AI Product In Scene |
| Relighting | Leonardo AI Custom Relight |
| Background swap | Leonardo AI Background Change |
| Canvas expansion | Leonardo AI Instant Outpaint |

### Leonardo AI Blueprints (Workflow Accelerators)
When Leonardo AI access is available, Blueprints provide production-grade one-click workflows:
- **Product Studio Photoshoot** → Upload product photo → professional studio angles with consistent lighting
- **Product In Scene** → Place products in lifestyle environments (shelves, hands, surfaces)
- **Product Spin Video** → 360° rotation video → extract frames for scroll sequences
- **Style Transfer** → Apply the site's EXACT visual identity to generated images
- **Custom Relight** → Match lighting and atmosphere across all product frames
- **Background Change** → Swap backgrounds to match site sections
- **Instant Outpaint** → Expand images to fill wider containers without stretching

### Scroll Sequence Frame Generation
For Apple-style scroll-driven product reveals (the "exploding artifact" effect):

1. **Define 8-12 keyframe moments**: closed product → lid lifting → ingredients visible → texture close-up → reassembled
2. **Generate keyframes with Nano Banana Pro**: Each includes site colors, branding, product details
3. **Interpolation strategy**: Generate 30-60 carefully chosen frames with smooth canvas transitions between them (NOT 200 unique AI frames)
4. **Consistency protocol**: Use the SAME base prompt with only action/angle changing:
   ```
   Base: "luxury body butter jar, matte black container, brushed gold lid, 
   Crown Collection embossed logo, soft studio lighting from upper-left, 
   black background (#0a0a0a), gold accent (#d4af37), photorealistic"
   
   Frame 1: [base] + "jar centered, lid closed, front angle, slight shadow beneath"
   Frame 2: [base] + "jar centered, lid slightly lifted 15 degrees, golden light escaping"
   Frame 3: [base] + "lid floating 2 inches above jar, cream visible, steam wisps"
   ...etc
   ```
5. **Video-to-frames fallback**: If still-frame consistency is hard to maintain:
   ```bash
   # Generate video with Kling 3 / Veo 3 / Leonardo Product Spin
   # Then extract frames:
   ffmpeg -i product_reveal.mp4 -vf "fps=24,scale=1920:1080" frames/frame_%04d.webp
   ```
6. **Frame format**: WebP for web (smaller than PNG, supports transparency). Target 50-80KB per frame.
7. **Test first**: Before committing all frames, test 10 in a prototype canvas to verify smoothness.

### Generation Protocol
1. Generate 4 variants of each artifact
2. Preview ALL variants — show to user or evaluate against site context
3. Select the best match
4. Test in situ (place in actual page, screenshot, evaluate)
5. If it doesn't blend → adjust prompt → regenerate. Never force-fit.

---

## Phase 6: COMPOSE (Integration & Scroll Engine) {#phase-6-compose}

### Standard Image Integration
1. Place each artifact into the site
2. Screenshot the section with the new artifact in context
3. Evaluate: Does it BLEND? Or does it look dropped in?
4. Adjust CSS (overlay gradients, opacity, blend modes, tint)
5. Check on mobile — does it scale properly?
6. If it doesn't work → go back to Phase 5 and regenerate

### Scroll Engine (GSAP ScrollTrigger + HTML5 Canvas)
For scroll-driven image sequence animations:

```
┌──────────────────────────────────────┐
│  Fixed <canvas> (100vw × 100vh)      │
│  Position: sticky or fixed           │
│  z-index: behind content overlays    │
├──────────────────────────────────────┤
│  Scroll container (height: 5-8×      │
│  viewport for smooth scrub pacing)   │
├──────────────────────────────────────┤
│  GSAP ScrollTrigger maps scroll      │
│  position (0→1) → frame index        │
│  requestAnimationFrame draws frame   │
├──────────────────────────────────────┤
│  Content overlays fade in/out at     │
│  specific scroll progress points     │
│  (text, CTAs, feature callouts)      │
└──────────────────────────────────────┘
```

**Core Logic:**
```javascript
// Scroll progress → frame index
const frameIndex = Math.floor(progress * (totalFrames - 1));
// Draw on canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(frames[frameIndex], 0, 0, canvas.width, canvas.height);
```

### Scroll Engine Checklist
- [ ] Preload ALL frames before enabling scroll (show loading %)
- [ ] Use `<canvas>` not `<img>` swapping (GPU-accelerated, no layout thrash)
- [ ] Map scroll progress (0→1) to frame index
- [ ] Debounce with `requestAnimationFrame` — max one draw per frame
- [ ] Mobile: reduce frame count (every 2nd frame) or lower resolution
- [ ] Fallback: if frames fail to load, show static hero — never blank canvas
- [ ] Content sync: text/CTAs fade at specific scroll % via GSAP `scrub: true`
- [ ] Performance: 60fps on M1+, 30fps minimum on older mobile
- [ ] Scroll height: tall enough for comfortable scrubbing (5-8× viewport)
- [ ] Reverse works: scrolling up plays animation backward smoothly

---

## Phase 7: REFINE (Iterative Polish) {#phase-7-refine}

The refinement loop: **LOOK → REACT → DESCRIBE → FIX → LOOK AGAIN**

### Quality Checklist (Per Site)
- [ ] Site retains its unique personality and palette
- [ ] All images blend into their containers (no floating objects on wrong backgrounds)
- [ ] Typography hierarchy is clear, using the site's own fonts
- [ ] Hover/active/focus states on all interactive elements
- [ ] Scroll animations fire smoothly (no jank on mobile)
- [ ] Shadows tinted to the site's own hue
- [ ] Enhanced version is recognizably the SAME SITE but better
- [ ] Scroll sequence (if present) scrubs smoothly in both directions
- [ ] Content overlays sync with scroll animation timing
- [ ] Loading experience is graceful (progress indicator, not white screen)
- [ ] Lighthouse performance score stays above 85
- [ ] Largest Contentful Paint under 2.5s (even with frame preloading)

---

## Production Branching Protocol {#production-branching}

Iron Canvas work ALWAYS follows staging → production:

1. **Lock production**: Before starting, merge current state to `main` and deploy
2. **Work on staging**: ALL modifications happen on `staging` branch only
3. **Visual diff**: Before promoting, screenshot both side-by-side for review
4. **Incremental promotion**: Promote phase by phase, not everything at once
5. **Rollback ready**: Production branch must always be deployable and stable

---

## Anti-Patterns (What Iron Canvas Must NEVER Do) {#anti-patterns}

| # | Anti-Pattern | Why It's Bad |
|---|-------------|-------------|
| 1 | **Cookie-cutter** | All sites end up with same palette/fonts/layout |
| 2 | **Blind generation** | Creating artifacts without studying where they'll go |
| 3 | **Template imposition** | Forcing a specific palette regardless of existing design |
| 4 | **Batch-and-pray** | Generating all artifacts at once without reviewing each in context |
| 5 | **Identity erasure** | Making a site unrecognizable from its original version |
| 6 | **Trinket dropping** | Adding small AI images that don't integrate with CSS context |
| 7 | **Video-as-animation** | Playing MP4 instead of interactive frame sequences (can't scrub, can't reverse, can't sync) |
| 8 | **Frame inconsistency** | Sequence frames with wildly different lighting/angles (breaks smooth illusion) |

---

## Invocation Templates {#invocation}

**Enhance an existing site:**
```
"Apply Iron Canvas to [URL]. Start with Phase 1: Study the site's DNA. 
Do not change anything until you've profiled the palette, fonts, imagery, and personality."
```

**Build from scratch:**
```
"Build [project] using Iron Canvas. Start with Phase 2: Define the feel. 
What should users feel when they use this?"
```

**Generate artifacts only:**
```
"Iron Canvas Phase 5: Generate artifacts for [site]. 
Study the site's palette and context first. Show me variants before selecting."
```

**Full scroll experience:**
```
"Apply Iron Canvas to [URL] with scroll-driven product reveal. 
Phase 1 first, then build through Phase 6 scroll engine. 
Generate keyframes with Nano Banana Pro, compose with GSAP ScrollTrigger + Canvas."
```

---

## Origin & Lineage

Built from production experience and methodology analysis:
- **Oakwood AI Hub** (March 2026): Where we learned that uniform templates kill site identity
- **Video 86HM0RUWhCk**: Screenshot loop, reference cloning, iterative refinement
- **Video 9OnN4O4uapI**: Feel-first design, mood boards, context-aware generation
- **Apple AirPods Pro / DJI Mavic 3**: Scroll-driven canvas animation reference implementations
- **Taste Skill**: Design engineering directives (adapted, not imposed)
- **Redesign Skill**: Audit checklist, upgrade techniques
- **Crown Collection** (March 2026): First full scroll-engine implementation with AI-generated frames

---

*Iron Canvas v2.0 — Enhanced with scroll engine architecture, Leonardo AI Blueprints integration, 
Nano Banana Pro frame generation protocol, and production branching workflow.*
*Compiled: March 19, 2026*
