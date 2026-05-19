import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gallery.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";
import { artworks } from "@/data/artworks";
import { artists } from "@/data/artists";
import { ArtworkCard } from "@/components/ArtworkCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oudtshoorn Art Gallery — Contemporary Art from the Klein Karoo" },
      {
        name: "description",
        content:
          "Discover original paintings and sculpture by South African artists at the Oudtshoorn Art Gallery. Visit in person or browse the collection online.",
      },
      { property: "og:title", content: "Oudtshoorn Art Gallery" },
      {
        property: "og:description",
        content: "Contemporary South African art from the heart of the Klein Karoo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = artworks.filter((a) => a.featured).slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior of the Oudtshoorn Art Gallery with contemporary paintings"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/55" />
        <div className="relative h-full container-page flex flex-col justify-end pb-16 md:pb-24 text-background">
          <p className="eyebrow !text-background/80 fade-in-up">
            <span className="gold-rule" />Established in the Klein Karoo
          </p>
          <h1 className="font-serif font-normal text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mt-5 fade-in-up">
            Contemporary art from the heart of the&nbsp;Karoo.
          </h1>
          <p className="mt-5 max-w-xl text-background/85 text-base md:text-lg fade-in-up">
            A quiet space for original paintings and sculpture by South African artists —
            in Oudtshoorn, and online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-in-up">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-background/90"
            >
              Explore Collection <ArrowRight className="size-3.5" />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 border border-background/70 text-background px-6 py-3 text-xs tracking-[0.22em] uppercase hover:bg-background/10"
            >
              Visit the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow"><span className="gold-rule" />Featured Works</p>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">A selection from the collection</h2>
          </div>
          <Link
            to="/collection"
            className="text-sm tracking-wide text-foreground/80 hover:text-foreground inline-flex items-center gap-1.5"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {featured.map((a) => (
            <ArtworkCard key={a.id} artwork={a} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={interiorImg}
              alt="Visitors viewing artworks inside the gallery"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow"><span className="gold-rule" />About the Gallery</p>
            <h2 className="font-serif text-3xl md:text-5xl mt-3 leading-tight">
              A gallery shaped by the light of the Karoo.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              The Oudtshoorn Art Gallery is a permanent home for contemporary South African
              artists working in painting, drawing and sculpture. Our rooms are quiet,
              generous and lit for looking — built for the long, slow conversation between
              a viewer and a work.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              We represent established and emerging artists from across the country, with a
              particular focus on the Klein Karoo and the Western Cape.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="px-6 py-3 bg-foreground text-background text-xs tracking-[0.22em] uppercase hover:bg-foreground/90"
              >
                Read More
              </Link>
              <Link
                to="/artists"
                className="px-6 py-3 border border-foreground/30 text-xs tracking-[0.22em] uppercase hover:bg-foreground/5"
              >
                Meet the Artists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow"><span className="gold-rule" />Featured Artists</p>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">The hands behind the work</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {artists.map((a) => (
            <Link to="/artists" key={a.slug} className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-muted hover-zoom">
                <img
                  src={a.portrait}
                  alt={`Portrait of ${a.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-xl">{a.name}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {a.style}
                </p>
                <p className="text-sm text-foreground/75 mt-3 leading-relaxed">{a.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow !text-background/70"><span className="gold-rule" />Visit Us</p>
            <h2 className="font-serif text-3xl md:text-5xl mt-3 leading-tight">
              The work is best seen in person.
            </h2>
            <p className="mt-6 text-background/80 leading-relaxed max-w-md">
              We're a short walk from the centre of Oudtshoorn, open six days a week.
              Pop in for a quiet hour — coffee on us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="eyebrow !text-background/70 mb-3">Address</p>
              <p className="text-background/90 leading-relaxed">
                123 Baron van Reede Street<br />
                Oudtshoorn, 6625<br />
                Western Cape
              </p>
            </div>
            <div>
              <p className="eyebrow !text-background/70 mb-3">Hours</p>
              <p className="text-background/90 leading-relaxed">
                Tue – Sat · 09:00 – 17:00<br />
                Sun · 10:00 – 14:00<br />
                Mon · Closed
              </p>
            </div>
            <div>
              <p className="eyebrow !text-background/70 mb-3">Contact</p>
              <p className="text-background/90 leading-relaxed">
                +27 (0)44 000 0000<br />
                hello@oudtshoornart.co.za
              </p>
            </div>
            <div className="sm:self-end">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-background/60 px-5 py-3 text-xs tracking-[0.22em] uppercase hover:bg-background/10"
              >
                Get Directions <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
