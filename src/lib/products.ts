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
    why: 'The foundation of the formula. Organic refined for a clean white color — an intentional choice. Rich in vitamins A, E, and F, delivering deep moisture that synthetics cannot replicate. It does not sit on the skin — it becomes part of it.',
    origin: 'West Africa',
  },
  {
    name: 'Kokum Butter',
    why: 'The most emollient of the tree butters. Melts at body temperature, creating that signature melt-on-contact texture that defines Crown Collection. Rich in essential fatty acids.',
    origin: 'India',
  },
  {
    name: 'Jojoba Oil',
    why: "Technically a liquid wax, jojoba mirrors your skin's natural sebum for unmatched absorption. Rich in vitamins B and E — best-rated oil for hair, skin, and nails. Balances without clogging.",
    origin: 'Organic',
  },
  {
    name: 'Avocado Oil',
    why: 'Penetrates deeper than most carrier oils. Rich in oleic acid and vitamins A, D, and E — nourishes at the cellular level. Cold-pressed and organic, nothing stripped away.',
    origin: 'Organic',
  },
  {
    name: 'Vitamin E Oil',
    why: 'Powerful antioxidant at high, therapeutic levels. Accelerates skin repair and healing while protecting and extending the integrity of the entire blend.',
  },
  {
    name: 'Arrowroot Powder',
    why: 'Organic — a cousin of cassava. Absorbs excess moisture and creates the weightless, non-greasy finish Crown Collection is known for. The reason it never feels heavy.',
  },
  {
    name: 'Pure Fragrance Oil',
    why: 'Undiluted, uncut, no alcohol. Notes inspired by the world\'s most iconic perfume houses — chosen for longevity and complexity, blended to evolve with the warmth of your skin.',
  },
];

export function getScentBySlug(slug: string): Scent | undefined {
  return scents.find((s) => s.slug === slug);
}
