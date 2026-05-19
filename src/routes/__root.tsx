import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-page text-center">
      <div className="max-w-md">
        <p className="eyebrow"><span className="gold-rule" />Not found</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-4">404</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-foreground text-background text-xs tracking-[0.22em] uppercase hover:bg-foreground/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-page text-center">
      <div className="max-w-md">
        <h1 className="font-serif text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 bg-foreground text-background text-xs tracking-[0.22em] uppercase"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 border border-border text-xs tracking-[0.22em] uppercase">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oudtshoorn Art Gallery — Contemporary Art from the Klein Karoo" },
      {
        name: "description",
        content:
          "A contemporary fine art gallery in Oudtshoorn, South Africa. Original paintings and sculpture by South African artists. Visit the gallery or browse the collection online.",
      },
      { name: "author", content: "Oudtshoorn Art Gallery" },
      { property: "og:site_name", content: "Oudtshoorn Art Gallery" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
