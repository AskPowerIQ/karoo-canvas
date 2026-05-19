import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artworks, getArtwork, formatZAR } from "@/data/artworks";
import { getArtist } from "@/data/artists";
import { ArtworkCard } from "@/components/ArtworkCard";

export const Route = createFileRoute("/artwork/$id")({
  loader: ({ params }) => {
    const artwork = getArtwork(params.id);
    if (!artwork) throw notFound();
    return { artwork };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.artwork;
    if (!a) return { meta: [{ title: "Artwork — Oudtshoorn Art Gallery" }] };
    return {
      meta: [
        { title: `${a.title} by ${a.artist} — Oudtshoorn Art Gallery` },
        { name: "description", content: `${a.medium}, ${a.dimensions}. ${a.story}` },
        { property: "og:title", content: `${a.title} — ${a.artist}` },
        { property: "og:description", content: a.story },
        { property: "og:image", content: a.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/artwork/${a.id}` },
      ],
      links: [{ rel: "canonical", href: `/artwork/${a.id}` }],
    };
  },
  component: ArtworkPage,
});

function ArtworkPage() {
  const { artwork } = Route.useLoaderData();
  const artist = getArtist(artwork.artist);
  const related = artworks
    .filter((a) => a.id !== artwork.id && (a.artist === artwork.artist || a.category === artwork.category))
    .slice(0, 3);

  return (
    <div>
      <div className="container-page pt-8 text-xs text-muted-foreground">
        <Link to="/collection" className="hover:text-foreground">← Back to the collection</Link>
      </div>

      <section className="container-page grid md:grid-cols-2 gap-10 md:gap-16 pt-8 pb-20">
        <div className="bg-muted overflow-hidden self-start">
          <img
            src={artwork.image}
            alt={`${artwork.title} by ${artwork.artist}`}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:pt-6">
          <p className="eyebrow"><span className="gold-rule" />{artwork.category}</p>
          <h1 className="font-serif text-3xl md:text-5xl mt-3 leading-tight">{artwork.title}</h1>
          <p className="mt-2 text-foreground/80">
            {artwork.artist} <span className="text-muted-foreground">· {artwork.year}</span>
          </p>

          <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm border-t border-border pt-6">
            <dt className="text-muted-foreground">Medium</dt><dd>{artwork.medium}</dd>
            <dt className="text-muted-foreground">Dimensions</dt><dd>{artwork.dimensions}</dd>
            <dt className="text-muted-foreground">Year</dt><dd>{artwork.year}</dd>
            <dt className="text-muted-foreground">Status</dt>
            <dd>
              <span className={artwork.status === "Available" ? "text-foreground" : "text-muted-foreground"}>
                {artwork.status}
              </span>
            </dd>
          </dl>

          <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
            <span className="font-serif text-3xl">
              {artwork.status === "Sold" ? "Sold" : formatZAR(artwork.price)}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              disabled={artwork.status !== "Available"}
              className="px-6 py-3 bg-foreground text-background text-xs tracking-[0.22em] uppercase hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Reserve Artwork
            </button>
            <a
              href={`mailto:hello@oudtshoornart.co.za?subject=Enquiry: ${encodeURIComponent(artwork.title)}`}
              className="px-6 py-3 border border-foreground/30 text-xs tracking-[0.22em] uppercase hover:bg-foreground/5"
            >
              Enquire
            </a>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Shipping quoted on request. Local pickup available from the gallery.
          </p>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="eyebrow mb-3">About this work</p>
            <p className="text-foreground/80 leading-relaxed">{artwork.story}</p>
          </div>

          {artist && (
            <div className="mt-10 pt-8 border-t border-border flex gap-5 items-start">
              <img
                src={artist.portrait}
                alt={artist.name}
                loading="lazy"
                className="w-20 h-20 object-cover rounded-full"
              />
              <div>
                <p className="eyebrow mb-2">The artist</p>
                <h3 className="font-serif text-xl">{artist.name}</h3>
                <p className="text-sm text-foreground/75 mt-2 leading-relaxed">{artist.short}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page pb-24">
          <div className="border-t border-border pt-12">
            <p className="eyebrow"><span className="gold-rule" />Continue browsing</p>
            <h2 className="font-serif text-2xl md:text-3xl mt-2 mb-10">Related works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((a) => (
                <ArtworkCard key={a.id} artwork={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
