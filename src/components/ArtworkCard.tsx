import { Link } from "@tanstack/react-router";
import type { Artwork } from "@/data/artworks";
import { formatZAR } from "@/data/artworks";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link
      to="/artwork/$id"
      params={{ id: artwork.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-muted hover-zoom aspect-[4/5]">
        <img
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {artwork.status !== "Available" && (
          <span className="absolute top-3 left-3 bg-background/90 text-foreground text-[10px] tracking-[0.2em] uppercase px-2 py-1">
            {artwork.status}
          </span>
        )}
      </div>
      <div className="pt-4">
        <h3 className="font-serif text-lg leading-snug group-hover:text-foreground/80 transition-colors">
          {artwork.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">
          {artwork.artist} · {artwork.year}
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1">
          {artwork.medium} · {artwork.dimensions}
        </p>
        <p className="text-sm mt-3 tracking-wide">
          {artwork.status === "Sold" ? (
            <span className="text-muted-foreground">Sold</span>
          ) : (
            formatZAR(artwork.price)
          )}
        </p>
      </div>
    </Link>
  );
}
