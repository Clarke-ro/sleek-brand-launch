import { Link } from "react-router-dom";
import { site } from "@/content/site";

const facts = [
  { term: "Where", detail: site.city },
  { term: "Who", detail: `${site.founder}. ${site.role}.` },
  { term: "For", detail: "Restaurants and small businesses" },
];

const Hero = () => {
  return (
    <section className="border-b border-line">
      <div className="shell pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine">
          Software studio
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-serif text-[2.6rem] leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
          Websites and ordering sites, built in{" "}
          <em className="italic text-pine">Accra</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone sm:text-xl">
          {site.name} is the studio of {site.founder}. He builds websites,
          restaurant ordering sites with WhatsApp checkout, and online stores
          for small businesses.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/#work"
            className="inline-flex h-12 items-center justify-center bg-pine px-5 text-sm font-medium text-white hover:bg-pine-deep"
          >
            View the prototypes
          </Link>
          <Link
            to="/#contact"
            className="inline-flex h-12 items-center justify-center border border-ink/20 px-5 text-sm font-medium text-ink hover:border-ink"
          >
            Start a project
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <dl className="shell grid sm:grid-cols-3">
          {facts.map((fact, index) => (
            <div
              key={fact.term}
              className={`py-6 sm:py-8 ${index > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-8" : ""}`}
            >
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
                {fact.term}
              </dt>
              <dd className="mt-2 max-w-xs text-base leading-snug text-ink">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
