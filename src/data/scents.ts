export interface Scent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  notes: string[];
  mood: string;
  gradient: string;
  accentColor: string;
  usageTips: string[];
  ingredients: string[];
}

export const scents: Scent[] = [
  {
    slug: "black-oak",
    name: "Black Oak",
    tagline: "Grounded. Warm. Commanding.",
    description:
      "Deep cedarwood and dark amber root this scent in the earth. Rich, primal, unforgettable — it clings to skin like a second layer.",
    longDescription:
      "Black Oak is built for those who command a room without raising their voice. Cedarwood and oakmoss form the backbone — earthy, confident, ancient. Dark amber lifts it with warmth, while vetiver grounds everything in something irreducibly real. This is not a scent that announces itself. It simply arrives, and stays.",
    notes: ["Cedarwood", "Oakmoss", "Dark Amber", "Vetiver", "Smoky Musk"],
    mood: "For those who leave a mark without saying a word.",
    gradient: "linear-gradient(145deg, #1A1008 0%, #0F0A05 50%, #0A0A0A 100%)",
    accentColor: "#8B6B14",
    usageTips: [
      "Apply generously after a shower to damp skin for maximum absorption.",
      "Focus on pulse points — wrists, neck, inner elbows — for lasting scent.",
      "Layer with unscented oils for an extended melt-in effect.",
    ],
    ingredients: [
      "Shea Butter",
      "Kokum Butter",
      "Coconut Oil",
      "Jojoba Oil",
      "Arrowroot Powder",
      "Vitamin E",
      "Cedarwood Fragrance Oil",
      "Amber Fragrance Oil",
    ],
  },
  {
    slug: "soie-vanille",
    name: "Soie Vanille",
    tagline: "Silky. Sensual. Intoxicating.",
    description:
      "Bourbon vanilla wrapped in warm musk — this is not your ordinary sweet. It's the kind of scent that lingers in memory long after you leave.",
    longDescription:
      "Soie Vanille (French for 'silky vanilla') is the one people ask about. A base of bourbon vanilla meets tonka bean and warm sandalwood, softened by clean musk that never crosses into cloying territory. It smells expensive because it is — sourced, not manufactured. The kind of fragrance you reach for when you want to feel like the most important person in any room.",
    notes: ["Bourbon Vanilla", "Tonka Bean", "Warm Musk", "Sandalwood", "Caramel"],
    mood: "For those who know the power of a slow entrance.",
    gradient: "linear-gradient(145deg, #2A1A08 0%, #1A1005 50%, #0A0A0A 100%)",
    accentColor: "#CFA855",
    usageTips: [
      "Best applied to warm skin — the heat activates the vanilla notes.",
      "Excellent as a bedtime ritual. The sandalwood base promotes calm.",
      "Pairs beautifully with a subtle vanilla or amber perfume.",
    ],
    ingredients: [
      "Shea Butter",
      "Mango Butter",
      "Sweet Almond Oil",
      "Jojoba Oil",
      "Arrowroot Powder",
      "Vitamin E",
      "Vanilla Fragrance Oil",
      "Tonka Fragrance Blend",
    ],
  },
  {
    slug: "moonlight",
    name: "Moonlight",
    tagline: "Cool. Mysterious. Luminous.",
    description:
      "Night-blooming jasmine meets cool ozone and white tea. Ethereal and magnetic — the scent of quiet confidence after dark.",
    longDescription:
      "Moonlight was designed for the ones who are most alive after midnight. Night-blooming jasmine opens the fragrance with something almost floral but never soft — it has an edge. White tea and cool ozone cut through with crystalline clarity, and clean musk settles everything into skin like moonlight on water. Mysterious. Luminous. Unmistakably you.",
    notes: ["Night Jasmine", "White Tea", "Cool Ozone", "Clean Musk", "Soft Iris"],
    mood: "For those who shine brightest in the dark.",
    gradient: "linear-gradient(145deg, #080A1E 0%, #05070F 50%, #0A0A0A 100%)",
    accentColor: "#7B8FA8",
    usageTips: [
      "Apply before heading out — the cool notes bloom in night air.",
      "Excellent for sensitive skin; the formula is gentle and non-irritating.",
      "Layer over lightly scented body wash for a full sensory experience.",
    ],
    ingredients: [
      "Shea Butter",
      "Kokum Butter",
      "Grapeseed Oil",
      "Jojoba Oil",
      "Arrowroot Powder",
      "Vitamin E",
      "Jasmine Fragrance Oil",
      "White Tea & Ozone Blend",
    ],
  },
];

export const sizes = [
  {
    oz: "2",
    label: "Travel",
    price: 10,
    displayPrice: "$10",
    description: "Perfect for the journey. Slips into any bag, fits any life.",
  },
  {
    oz: "4",
    label: "Everyday",
    price: 18,
    displayPrice: "$18",
    description: "Your daily ritual. Rich, creamy, absorbed without a trace.",
  },
  {
    oz: "8",
    label: "Indulgence",
    price: 30,
    displayPrice: "$30",
    description: "The full experience. For when you choose to truly take care.",
  },
] as const;
