const steps = [
  {
    title: "Discovery call",
    body: "We talk through the business, the menu or the catalogue, and what the site has to do on a normal day.",
  },
  {
    title: "Free prototype",
    body: "You get a working preview you can click through before you decide to go ahead.",
  },
  {
    title: "Written proposal",
    body: "You receive a proposal with a fixed quote for the agreed scope. The quote is specific to that project.",
  },
  {
    title: "Build",
    body: "The site is designed and developed to the scope in the proposal.",
  },
  {
    title: "Launch",
    body: "The site goes live, and the main paths are checked on a phone.",
  },
  {
    title: "Support",
    body: "After launch, maintenance is available as its own agreement.",
  },
];

const Process = () => {
  return (
    <section id="process" className="scroll-mt-20 border-b border-line" aria-labelledby="process-title">
      <div className="shell py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-pine">03</p>
          <h2 id="process-title" className="mt-3 font-serif text-4xl text-balance sm:text-5xl">
            How we work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            Six steps, from the first conversation to support after launch. A
            written proposal includes a fixed quote for the agreed scope.
          </p>
        </div>
        <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-paper p-6 md:p-8">
              <p className="font-serif text-3xl text-pine">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
