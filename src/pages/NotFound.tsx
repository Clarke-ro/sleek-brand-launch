import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { site } from "@/content/site";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="shell py-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-grove">404</p>
        <h1 className="mt-4 font-serif text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
          No page at {location.pathname}.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center bg-lime px-5 text-sm font-medium text-lime-ink hover:bg-grove hover:text-white"
        >
          Back to the studio
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
