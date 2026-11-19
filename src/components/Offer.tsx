const offers = [
  {
    title: "Restaurant ordering sites",
    body: "A menu guests can browse on their phone, with ordering that can finish on WhatsApp. That might be QR ordering at the table, or a restaurant page with pickup, delivery, and dine-in.",
  },
  {
    title: "Business landing pages",
    body: "A clear page for a small business: what you do, where you are, and a straight way to enquire. Written and structured so someone can understand the offer in one visit.",
  },
  {
    title: "Online stores",
    body: "A shop with products, prices, and a path to buy or enquire. Wear A Word, linked in the work above, is this kind of build.",
  },
  {
    title: "Ongoing maintenance",
    body: "Fixes and small updates after a site is live. What is included gets written into the proposal alongside the build, as its own agreement.",
  },
];

const Offer = () => {
  return (
    <section id="offer" className="scroll-mt-20 border-b border-line" aria-labelledby="offer-title">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-grove">02</p>
            <h2 id="offer-title" className="mt-3 font-serif text-4xl text-balance sm:text-5xl">
              What we offer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Four kinds of work. The scope for a project is agreed in writing
              before the build starts.
            </p>
          </div>
          <ol className="md:col-span-8">
            {offers.map((offer, index) => (
              <li key={offer.title} className="border-t border-line py-7 first:border-t-0 first:pt-0">
                <h3 className="font-serif text-2xl text-ink">
                  <span className="mr-3 font-sans text-sm font-medium text-grove">
                    0{index + 1}
                  </span>
                  {offer.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-stone">{offer.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Offer;
