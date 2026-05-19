import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";
import art7 from "@/assets/art-7.jpg";
import art8 from "@/assets/art-8.jpg";

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  category: "Painting" | "Sculpture" | "Mixed Media";
  dimensions: string;
  price: number; // ZAR
  image: string;
  status: "Available" | "Reserved" | "Sold";
  story: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "ochre-horizon",
    title: "Ochre Horizon",
    artist: "Hannes du Plessis",
    year: 2024,
    medium: "Oil on canvas",
    category: "Painting",
    dimensions: "120 × 90 cm",
    price: 38500,
    image: art1,
    status: "Available",
    story:
      "A meditation on the late afternoon light that washes across the Klein Karoo — ochre, ash, and a single dark gesture that anchors the field.",
    featured: true,
  },
  {
    id: "quiet-passage",
    title: "Quiet Passage",
    artist: "Marlene van Wyk",
    year: 2024,
    medium: "Mixed media on linen",
    category: "Painting",
    dimensions: "100 × 140 cm",
    price: 42000,
    image: art2,
    status: "Available",
    story:
      "Layered washes recall the strata of the Swartberg, where rock and time meet in soft accumulations of pigment.",
    featured: true,
  },
  {
    id: "pale-horizon",
    title: "Pale Horizon",
    artist: "Sandra Meyer",
    year: 2023,
    medium: "Acrylic on canvas",
    category: "Painting",
    dimensions: "150 × 120 cm",
    price: 54000,
    image: art3,
    status: "Available",
    story:
      "A near-empty plane in which silence becomes the subject. The viewer's eye travels and rests.",
    featured: true,
  },
  {
    id: "gold-thread",
    title: "Gold Thread",
    artist: "Pieter Coetzee",
    year: 2025,
    medium: "Oil and gold leaf on canvas",
    category: "Painting",
    dimensions: "110 × 110 cm",
    price: 67000,
    image: art4,
    status: "Reserved",
    story:
      "A single arc of gilded white cuts through deep black — a study in contrast and restraint.",
    featured: true,
  },
  {
    id: "karoo-dusk",
    title: "Karoo Dusk",
    artist: "Sandra Meyer",
    year: 2024,
    medium: "Oil on canvas",
    category: "Painting",
    dimensions: "90 × 70 cm",
    price: 29500,
    image: art5,
    status: "Available",
    story:
      "The koppies catch the last light as a violet sky settles over the veld.",
    featured: true,
  },
  {
    id: "protea-study",
    title: "Protea Study II",
    artist: "Lerato Mokoena",
    year: 2024,
    medium: "Oil on linen",
    category: "Painting",
    dimensions: "80 × 100 cm",
    price: 32000,
    image: art6,
    status: "Available",
    story:
      "A contemporary botanical drawn from the fynbos of the Western Cape — luminous against a quiet ground.",
    featured: true,
  },
  {
    id: "vessel-no-7",
    title: "Vessel No. 7",
    artist: "Pieter Coetzee",
    year: 2024,
    medium: "Hand-built terracotta",
    category: "Sculpture",
    dimensions: "46 × 28 × 28 cm",
    price: 18500,
    image: art7,
    status: "Available",
    story:
      "An asymmetric vessel shaped by hand from local clay, scarred and burnished by fire.",
  },
  {
    id: "indigo-field",
    title: "Indigo Field",
    artist: "Hannes du Plessis",
    year: 2025,
    medium: "Oil on canvas",
    category: "Painting",
    dimensions: "180 × 220 cm",
    price: 92000,
    image: art8,
    status: "Available",
    story:
      "A large-format study in indigo and bone — drawn from the night sky over the plains, rendered with raw, unguarded gesture.",
    featured: true,
  },
];

export function getArtwork(id: string) {
  return artworks.find((a) => a.id === id);
}

export const formatZAR = (n: number) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(n);
