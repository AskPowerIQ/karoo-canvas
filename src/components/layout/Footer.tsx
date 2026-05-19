import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 bg-secondary/40">
      <div className="container-page py-14 md:py-20 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl">Oudtshoorn Art Gallery</div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
            Contemporary art from the heart of the Klein Karoo. Original works by
            South African artists.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/collection" className="hover:text-foreground text-foreground/70">The Collection</Link></li>
            <li><Link to="/artists" className="hover:text-foreground text-foreground/70">Artists</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-foreground/70">About the Gallery</Link></li>
            <li><Link to="/visit" className="hover:text-foreground text-foreground/70">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <address className="not-italic text-sm text-foreground/80 leading-relaxed">
            123 Baron van Reede Street<br />
            Oudtshoorn, 6625<br />
            Western Cape, South Africa
          </address>
          <p className="text-sm text-foreground/80 mt-3">
            Tue – Sat · 09:00 – 17:00<br />
            Sun · 10:00 – 14:00
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Newsletter</div>
          <p className="text-sm text-muted-foreground mb-3">
            New arrivals, exhibitions and artist news.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-border bg-background"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 text-xs tracking-[0.2em] uppercase bg-foreground text-background hover:bg-foreground/90"
            >
              Join
            </button>
          </form>
          <div className="flex gap-4 mt-5 text-foreground/70">
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="size-4" /></a>
            <a href="mailto:hello@oudtshoornart.co.za" aria-label="Email" className="hover:text-foreground"><Mail className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Oudtshoorn Art Gallery. All rights reserved.</span>
          <span>Contemporary South African Art · Klein Karoo</span>
        </div>
      </div>
    </footer>
  );
}
