# Crown Collection — Website Brief

## Brand Overview
- **Brand Name:** Crown Collection
- **Tagline:** "For Kings & Queens who want to smell unforgettable"
- **Product:** Luxury handmade whipped body butters
- **Instagram:** @crown.collection.official
- **Launched:** ~March 3, 2026
- **Owner:** Jon's brother

## Brand Aesthetic
- **Theme:** Black and gold, luxury, royal
- **Vibe:** Premium, sophisticated, regal — NOT generic skincare
- **Photography style:** Dark/moody product shots, luxury packaging
- **Typography:** Elegant, refined — serif for brand name, clean sans for body

## Products
| Size | Description | Price |
|------|-------------|-------|
| 2 oz | Travel size | $10 |
| 4 oz | Everyday | $18 |
| 8 oz | Indulgence | $30 |

## Scent Collection
- Black Oak
- Soie Vanille
- Moonlight
- (More TBD — brand invites customers to suggest dream fragrances)

## Product Details
- Rich, creamy shea-based formula whipped to perfection
- All-natural with ethically sourced butters and oils
- Luxurious melt-in feel
- Also offers body oils alongside body butters
- Handmade in small batches
- Shipping: 2-3 business days

## Business Requirements (from Fireflies summary)
- E-commerce with payment processing (Stripe + Klarna via Elavon, or direct Stripe)
- Inventory management (avoid overselling)
- Support pre-sales with limited runs
- Scalable architecture
- Domain strategy: .store and .biz secured, .com planned later
- Staging/production branch workflow (already implemented)

## Website Sections Needed
1. **Hero** — Full-screen luxury hero with brand statement
2. **About** — Brand story, handmade process, "Kings & Queens" identity
3. **Products/Shop** — Product cards with size/price selection, add to cart
4. **Scent Collection** — Individual scent profiles with descriptions
5. **Ingredients** — Transparency about natural, ethically sourced ingredients
6. **Testimonials** — Customer reviews (can start with placeholders)
7. **Instagram Feed** — Pull from @crown.collection.official
8. **Contact/Order** — Contact form + DM link for custom orders
9. **Footer** — Social links, shipping info, legal

## Tech Stack Decision
- **Framework:** Next.js (App Router) — consistent with our workflow
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (with staging/production branches)
- **Payments:** Stripe (simplest to implement, supports Klarna)
- **CMS:** Static for now, can add Sanity/Contentful later

## Design Principles (TASTE Skill)
- DESIGN_VARIANCE: 9 (luxury = asymmetric, lots of negative space)
- MOTION_INTENSITY: 7 (elegant animations, not flashy)
- VISUAL_DENSITY: 2 (art gallery mode — spacious, expensive feel)
- Font: Playfair Display (serif headlines) + Outfit (body)
- Colors: #0A0A0A (off-black), #C5A572 (gold), #1A1A1A (dark card), #F5F0EB (cream accent)
- No emojis, no AI cliches, no generic stock photos
