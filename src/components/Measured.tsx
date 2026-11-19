import { labReport, observedOn, projectHost, projects } from "@/content/site";

const scoreLabels = [
  { key: "performance", label: "Performance" },
  { key: "accessibility", label: "Accessibility" },
  { key: "seo", label: "SEO" },
] as const;

const Measured = () => {
  const byId = new Map(projects.map((project) => [project.id, project]));

  return (
    <section
      id="measured"
      className="scroll-mt-20 border-b border-line"
      aria-labelledby="measured-title"
    >
      <div className="shell py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-pine">04</p>
          <h2 id="measured-title" className="mt-3 font-serif text-4xl text-balance sm:text-5xl">
            Checked on the live sites
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            Two records from the prototype URLs. Lighthouse scores are
            automated lab results. The list under them is a feature checklist
            of what was on the page.
          </p>
        </div>

        {labReport && labReport.rows.length > 0 && (
          <div className="mt-12">
            <h3 className="font-serif text-2xl">Lighthouse scores</h3>
            <p id="lighthouse-note" className="mt-3 max-w-3xl text-sm leading-relaxed text-stone">
              {labReport.tool}, {labReport.formFactor}, {labReport.throttling}{" "}
              throttling. Measured on {labReport.measuredOn} against each live
              URL. Scores are out of 100.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line" aria-describedby="lighthouse-note">
              {labReport.rows.map((row) => {
                const project = byId.get(row.id);
                if (!project) return null;
                return (
                  <li key={row.id} className="grid gap-5 py-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                      >
                        {project.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <p className="mt-1 text-xs text-stone">{projectHost(project.href)}</p>
                    </div>
                    <dl className="grid grid-cols-3 gap-3 md:col-span-8">
                      {scoreLabels.map((column) => (
                        <div key={column.key}>
                          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-stone">
                            {column.label}
                          </dt>
                          <dd className="mt-1 font-serif text-3xl tabular-nums text-ink">
                            {row[column.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mt-14">
          <h3 className="font-serif text-2xl">Feature checklist</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone">
            Observed on the live pages on {observedOn}. A line here means the
            item was visible on that site. It is a checklist.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id} className="border-t border-line pt-5">
                <h4 className="font-medium text-ink">{project.name}</h4>
                <ul className="mt-3 space-y-2">
                  {project.observed.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Measured;
