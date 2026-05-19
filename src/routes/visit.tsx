import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Phone, Mail, MessageCircle, Car } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Oudtshoorn Art Gallery" },
      {
        name: "description",
        content:
          "Plan your visit to the Oudtshoorn Art Gallery. Address, gallery hours, parking and contact details.",
      },
      { property: "og:title", content: "Visit — Oudtshoorn Art Gallery" },
      { property: "og:description", content: "Find us in Oudtshoorn, Western Cape." },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: VisitPage,
});

function VisitPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="container-page pt-16 md:pt-24 pb-10 text-center">
        <p className="eyebrow"><span className="gold-rule" />Visit Us</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-4">Find the gallery.</h1>
        <p className="mt-5 max-w-2xl mx-auto text-foreground/75 leading-relaxed">
          We're a short walk from the centre of Oudtshoorn. Free parking on the street.
          Come for an hour — stay for two.
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-border">
          <iframe
            title="Map to Oudtshoorn Art Gallery"
            src="https://www.google.com/maps?q=Oudtshoorn,+Western+Cape,+South+Africa&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="container-page pb-20 grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-8">
          <InfoBlock icon={<MapPin className="size-4" />} label="Address">
            123 Baron van Reede Street<br />
            Oudtshoorn, 6625<br />
            Western Cape, South Africa
          </InfoBlock>
          <InfoBlock icon={<Clock className="size-4" />} label="Gallery Hours">
            Tuesday – Saturday · 09:00 – 17:00<br />
            Sunday · 10:00 – 14:00<br />
            Monday · Closed
          </InfoBlock>
          <InfoBlock icon={<Phone className="size-4" />} label="Phone">
            <a href="tel:+27440000000" className="hover:text-foreground">+27 (0)44 000 0000</a>
          </InfoBlock>
          <InfoBlock icon={<Mail className="size-4" />} label="Email">
            <a href="mailto:hello@oudtshoornart.co.za" className="hover:text-foreground">
              hello@oudtshoornart.co.za
            </a>
          </InfoBlock>
          <InfoBlock icon={<Car className="size-4" />} label="Parking">
            Free street parking directly in front of the gallery and one block down.
          </InfoBlock>
          <a
            href="https://wa.me/27440000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-foreground/30 text-xs tracking-[0.22em] uppercase hover:bg-foreground/5"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>

        <div>
          <p className="eyebrow"><span className="gold-rule" />Get in touch</p>
          <h2 className="font-serif text-2xl md:text-3xl mt-3">Send us a message</h2>
          <p className="text-foreground/75 mt-2 text-sm">
            For enquiries, private viewings or studio visits.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-7 space-y-5"
          >
            <Field label="Your name" type="text" required />
            <Field label="Email" type="email" required />
            <Field label="Phone (optional)" type="tel" />
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border border-border focus:border-foreground p-3 text-sm focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-background text-xs tracking-[0.22em] uppercase hover:bg-foreground/90"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-sm text-foreground/70 pt-2">
                Thank you — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({
  icon, label, children,
}: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow flex items-center gap-2 mb-2">
        <span className="text-gold">{icon}</span>
        {label}
      </p>
      <div className="text-foreground/85 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-foreground py-2 text-sm focus:outline-none"
      />
    </div>
  );
}
