import { ArrowUpRight } from "lucide-react";
import { projectHost, projects } from "@/content/site";

const Work = () => {
  return (
    <section id="work" className="scroll-mt-20 border-b border-line" aria-labelledby="work-title">
      <div className="shell py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-grove">01</p>
          <h2 id="work-title" className="mt-3 font-serif text-4xl text-balance sm:text-5xl">
            Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            Four live prototypes. Open a link and click through the site
            itself. Each card is labelled as a prototype.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col">
                <a href={project.href} target="_blank" rel="noreferrer" className="group block">
                  <div className="overflow-hidden border border-line bg-white">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width={1440}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[144/100] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-stone">
                    <span>Prototype</span>
                    <span aria-hidden="true" className="h-px w-6 bg-line" />
                    <span>{project.kind}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-3xl text-ink group-hover:text-grove">
                    {project.name}
                  </h3>
                </a>
                <p className="mt-3 text-base leading-relaxed text-stone">{project.summary}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  {projectHost(project.href)}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
