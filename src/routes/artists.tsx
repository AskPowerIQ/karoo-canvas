import { createFileRoute } from "@tanstack/react-router";
import { artists } from "@/data/artists";
import { artworks } from "@/data/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Oudtshoorn Art Gallery" },
      {
        name: "description",
        content:
          "Meet the South African artists represented by the Oudtshoorn Art Gallery — painters and sculptors working from the Klein Karoo and beyond.",
      },
      { property: "og:title", content: "Artists — Oudtshoorn Art Gallery" },
      { property: "og:description", content: "South African painters and sculptors." },
      { property: "og:url", content: "/artists" },
    ],
    links: [{ rel: "canonical", href: "/artists" }],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  return (
    <div>
      <section className="container-page pt-16 md:pt-24 pb-10 text-center">
        <p className="eyebrow"><span className="gold-rule" />The Artists</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-4">South African voices.</h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
          We represent a small group of artists with a long view of their practice.
          Each has a distinct visual language, rooted in this country and its landscape.
        </p>
      </section>

      <section className="container-page pb-20 space-y-24 md:space-y-32 pt-10">
        {artists.map((artist, idx) => {
          const works = artworks.filter((w) => w.artist === artist.name);
          const reverse = idx % 2 === 1;
          return (
            <article key={artist.slug} className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
              <div className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artist.portrait}
                    alt={`Portrait of ${artist.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="eyebrow"><span className="gold-rule" />{artist.style}</p>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">{artist.name}</h2>
                <p className="mt-5 text-foreground/80 leading-relaxed">{artist.bio}</p>

                {works.length > 0 && (
                  <div className="mt-10">
                    <p className="eyebrow mb-5">Available works</p>
                    <div className="grid grid-cols-2 gap-6">
                      {works.slice(0, 4).map((w) => (
                        <ArtworkCard key={w.id} artwork={w} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
