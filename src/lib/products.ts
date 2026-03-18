export interface Scent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  mood: string;
  profile: string[];
  color: string;
}

export interface Size {
  size: string;
  label: string;
  price: number;
  description: string;
}

export interface Ingredient {
  name: string;
  why: string;
  origin?: string;
}

export const scents: Scent[] = [
  {
    slug: 'black-oak',
    name: 'Black Oak',
    tagline: 'Deep. Grounding. Sovereign.',
    description:
      'A commanding accord rooted in dark woods and warm amber. Black Oak does not ask for attention — it commands it. Dense and atmospheric, this scent settles into the skin like a second nature, building depth with each passing hour.',
    mood: 'For those who move through the world with quiet authority.',
    profile: ['Dark Cedarwood', 'Black Amber', 'Vetiver', 'Sandalwood', 'Musk'],
    color: '#2C1810',
  },
  {
    slug: 'soie-vanille',
    name: 'Soie Vanille',
    tagline: 'Warm. Luminous. Enveloping.',
    description:
      'French for "silk vanilla." A spun-sugar warmth that wraps the skin in something between memory and desire. Soie Vanille is not sweet in the ordinary sense — it is rich, textured, deeply comforting without apology.',
    mood: 'For those who leave warmth in every room they enter.',
    profile: ['Madagascar Vanilla', 'Caramelized Tonka', 'White Musk', 'Warm Amber', 'Benzoin'],
    color: '#3D2B1F',
  },
  {
    slug: 'moonlight',
    name: 'Moonlight',
    tagline: 'Clean. Ethereal. Boundless.',
    description:
      'A luminous nocturnal presence. Moonlight captures the quality of cool air after dusk — weightless, impossibly clean, with a softness that lingers like the glow of the moon itself. Worn by those who carry mystery with ease.',
    mood: 'For those who are most themselves in the quiet hours.',
    profile: ['White Jasmine', 'Cool Iris', 'Sheer Musk', 'Sea Salt', 'Light Cedarwood'],
    color: '#1A1E2E',
  },
];

export const sizes: Size[] = [
  {
    size: '2oz',
    label: 'Travel',
    price: 10,
    description: 'The perfect introduction. Carry it everywhere.',
  },
  {
    size: '4oz',
    label: 'Everyday',
    price: 18,
    description: 'Your daily ritual. Generous enough to last.',
  },
  {
    size: '8oz',
    label: 'Indulgence',
    price: 30,
    description: 'The full experience. For those who do not compromise.',
  },
];

export const ingredients: Ingredient[] = [
  {
    name: 'Shea Butter',
    why: 'The foundation of the formula. Unrefined shea carries a richness that synthetic alternatives cannot replicate — deep moisture that does not sit on the skin but becomes part of it.',
    origin: 'West Africa',
  },
  {
    name: 'Kokum Butter',
    why: 'The most emollient of the tree butters. Kokum melts precisely at body temperature, creating that signature melt-on-contact texture that defines Crown Collection.',
    origin: 'India',
  },
  {
    name: 'Jojoba Oil',
    why: "Technically a liquid wax, structurally similar to the skin's own sebum. Organic jojoba balances without clogging — it works with your skin, not against it.",
    origin: 'Organic',
  },
  {
    name: 'Avocado Oil',
    why: 'Cold-pressed and unrefined. Rich in oleic acid and vitamins A, D, and E — it penetrates deeper than most carrier oils, nourishing at the cellular level.',
    origin: 'Organic',
  },
  {
    name: 'Vitamin E Oil',
    why: 'A natural antioxidant that protects and extends. Vitamin E repairs the moisture barrier while preserving the integrity of the blend.',
  },
  {
    name: 'Arrowroot Powder',
    why: 'The reason it never feels heavy. Arrowroot absorbs excess moisture and creates the weightless, velvety finish that makes Crown Collection unlike anything else.',
  },
  {
    name: 'Pure Fragrance Oil',
    why: 'Undiluted and alcohol-free. Our fragrances are not watered down — they are chosen for their longevity and complexity, blended to evolve with the warmth of your skin.',
  },
];

export function getScentBySlug(slug: string): Scent | undefined {
  return scents.find((s) => s.slug === slug);
}
