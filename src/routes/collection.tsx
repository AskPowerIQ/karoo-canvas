import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { artworks } from "@/data/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "The Collection — Oudtshoorn Art Gallery" },
      {
        name: "description",
        content:
          "Browse original paintings and sculpture available at the Oudtshoorn Art Gallery. Filter by artist, category and availability.",
      },
      { property: "og:title", content: "The Collection — Oudtshoorn Art Gallery" },
      { property: "og:description", content: "Original works by South African artists." },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const artists = useMemo(
    () => Array.from(new Set(artworks.map((a) => a.artist))).sort(),
    [],
  );
  const categories = useMemo(
    () => Array.from(new Set(artworks.map((a) => a.category))).sort(),
    [],
  );

  const [artist, setArtist] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = artworks.filter((a) => {
    if (artist !== "All" && a.artist !== artist) return false;
    if (category !== "All" && a.category !== category) return false;
    if (availableOnly && a.status !== "Available") return false;
    return true;
  });

  return (
    <div>
      <section className="container-page pt-16 md:pt-24 pb-10 text-center">
        <p className="eyebrow"><span className="gold-rule" />The Collection</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-4">Original works, one of one.</h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
          Most pieces in the gallery are unique. Each is photographed, measured and
          described as you would find it on the wall.
        </p>
      </section>

      <section className="container-page">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 border-y border-border py-4 text-sm">
          <FilterSelect label="Artist" value={artist} onChange={setArtist} options={["All", ...artists]} />
          <FilterSelect label="Category" value={category} onChange={setCategory} options={["All", ...categories]} />
          <label className="flex items-center gap-2 cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
              className="accent-foreground"
            />
            <span className="text-foreground/80">Available only</span>
          </label>
          <span className="text-xs text-muted-foreground">{filtered.length} works</span>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No works match these filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((a) => (
              <ArtworkCard key={a.id} artwork={a} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-border focus:border-foreground py-1 pr-6 text-sm focus:outline-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
