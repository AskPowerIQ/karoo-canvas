import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

export type Artist = {
  name: string;
  slug: string;
  portrait: string;
  style: string;
  short: string;
  bio: string;
};

export const artists: Artist[] = [
  {
    name: "Hannes du Plessis",
    slug: "hannes-du-plessis",
    portrait: artist3,
    style: "Abstract painting",
    short:
      "Large-format abstract works drawn from the colour and light of the Klein Karoo.",
    bio: "Hannes lives and paints outside Oudtshoorn, where the long horizons and shifting light of the Karoo have shaped two decades of practice. His paintings are built from layered oils, scraped back and re-worked until each canvas holds the weight of a remembered landscape.",
  },
  {
    name: "Marlene van Wyk",
    slug: "marlene-van-wyk",
    portrait: artist2,
    style: "Mixed media",
    short:
      "Quiet, layered compositions exploring memory, place and the passage of time.",
    bio: "Marlene works from a small studio at the foot of the Swartberg, combining pigment, paper and oil into pieces that feel both intimate and expansive. Her work is held in private collections across South Africa, the UK and Germany.",
  },
  {
    name: "Lerato Mokoena",
    slug: "lerato-mokoena",
    portrait: artist1,
    style: "Botanical & figurative",
    short:
      "Contemporary botanical and figurative paintings rooted in the fynbos of the Western Cape.",
    bio: "Lerato trained in Cape Town and now divides her year between studios in Stellenbosch and the Klein Karoo. Her work draws on indigenous plant life, treating each subject with the care and gravity of portraiture.",
  },
];

export function getArtist(name: string) {
  return artists.find((a) => a.name === name);
}
