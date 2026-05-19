import { createFileRoute, Link } from "@tanstack/react-router";
import interiorImg from "@/assets/gallery-interior.jpg";
import heroImg from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oudtshoorn Art Gallery" },
      {
        name: "description",
        content:
          "The story behind the Oudtshoorn Art Gallery — a quiet space for contemporary South African art in the Klein Karoo.",
      },
      { property: "og:title", content: "About — Oudtshoorn Art Gallery" },
      { property: "og:description", content: "Our story, our space, our mission." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-16 md:pt-24 pb-10 text-center">
        <p className="eyebrow"><span className="gold-rule" />About</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-4 leading-tight max-w-3xl mx-auto">
          A quiet room for contemporary art, in the heart of the Karoo.
        </h1>
      </section>

      <section className="container-page py-10">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={heroImg}
            alt="The Oudtshoorn Art Gallery main room"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-page py-14 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow"><span className="gold-rule" />Our Story</p>
        </div>
        <div className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            The Oudtshoorn Art Gallery was founded as a permanent home for South African
            artists working with care and depth. The Klein Karoo has long drawn painters
            and writers — its scale, its silence and its peculiar light have a way of
            quieting a person down. We built the gallery to honour that.
          </p>
          <p>
            We represent a small group of artists, both established and emerging, and we
            show their work in the way it deserves to be seen: with room around it, in
            good light, and without rush.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container-page grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow"><span className="gold-rule" />The Karoo Influence</p>
          </div>
          <div className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Oudtshoorn sits between the Swartberg and Outeniqua mountains, in a
              semi-arid plateau that has shaped generations of South African artists.
              The land here teaches restraint. It pares back the unnecessary.
            </p>
            <p>
              You'll find that quality in much of what hangs in the gallery — a long
              horizon, a single gesture, a deliberate emptiness.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow"><span className="gold-rule" />Supporting Local Artists</p>
        </div>
        <div className="md:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Every work sold supports the artist directly. We work on fair terms, with
            transparent commissions and long relationships. Several of our artists live
            and work within an hour of the gallery; others come from further afield.
          </p>
          <p>
            We open the gallery for studio visits and conversations by appointment, and
            we host two or three solo exhibitions a year.
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={interiorImg}
            alt="Visitors viewing artwork in the gallery"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-page py-14 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Come and see for yourself.</h2>
        <p className="mt-4 text-foreground/75 max-w-xl mx-auto">
          The work is best seen in person. We're open six days a week.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/visit"
            className="px-6 py-3 bg-foreground text-background text-xs tracking-[0.22em] uppercase hover:bg-foreground/90"
          >
            Plan your visit
          </Link>
          <Link
            to="/collection"
            className="px-6 py-3 border border-foreground/30 text-xs tracking-[0.22em] uppercase hover:bg-foreground/5"
          >
            Browse the collection
          </Link>
        </div>
      </section>
    </div>
  );
}
