import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site, studioTitle } from "@/content/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#offer", label: "Offer" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-40 bg-paper/95 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight text-ink underline decoration-lime decoration-2 underline-offset-4 sm:text-2xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-ink/80 hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="inline-flex h-10 items-center bg-lime px-4 text-sm font-medium text-lime-ink hover:bg-grove hover:text-white"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper md:hidden"
          aria-label="Mobile"
        >
          <ul className="shell flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex min-h-12 items-center text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                to="/#contact"
                className="inline-flex h-12 w-full items-center justify-center bg-lime text-sm font-medium text-lime-ink hover:bg-grove hover:text-white"
                onClick={() => setOpen(false)}
              >
                Start a project
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/75">
            Software studio of {site.founder}, {site.city}. Websites, ordering
            sites, and online stores for restaurants and small businesses.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
            On this page
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/#measured" className="hover:underline">
                Scores
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
            Studio
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/75">
            {site.founder}
            <br />
            {site.role}
            <br />
            {site.city}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="shell py-5 text-sm text-paper/80">
          © {new Date().getFullYear()} {site.legalName}, {site.city}
        </p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    document.title = studioTitle;
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [hash, pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
