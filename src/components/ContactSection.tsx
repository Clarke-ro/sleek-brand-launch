import { site } from "@/content/site";

const placeholders = [
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    hint: "Replace with your WhatsApp number, including the country code.",
  },
  {
    label: "Email",
    value: site.email,
    hint: "Replace with your email address.",
  },
];

export function ContactDetails() {
  return (
    <div>
      <p className="max-w-xl text-base leading-relaxed text-stone">
        WhatsApp is the direct way to start. The number and email below are
        placeholders for {site.founder} to replace before publishing. Each one
        is marked Placeholder.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {placeholders.map((item) => (
          <li key={item.label} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
            <div className="sm:col-span-3">
              <p className="text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-2 inline-flex border border-dashed border-ink/30 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-stone">
                Placeholder
              </p>
            </div>
            <div className="sm:col-span-9">
              <p className="font-serif text-2xl text-ink">{item.value}</p>
              <p className="mt-2 text-sm text-stone">{item.hint}</p>
            </div>
          </li>
        ))}
        <li className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
          <p className="text-sm font-medium text-ink sm:col-span-3">Studio</p>
          <p className="text-base leading-relaxed text-ink sm:col-span-9">
            {site.founder}
            <br />
            {site.role}
            <br />
            {site.city}
          </p>
        </li>
      </ul>
    </div>
  );
}

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20" aria-labelledby="contact-title">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-pine">05</p>
            <h2 id="contact-title" className="mt-3 font-serif text-4xl text-balance sm:text-5xl">
              Contact
            </h2>
          </div>
          <div className="md:col-span-8">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
