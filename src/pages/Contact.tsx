import { ContactDetails } from "@/components/ContactSection";
import { Layout } from "@/components/Layout";
import { site } from "@/content/site";

const Contact = () => {
  return (
    <Layout>
      <section className="shell py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-grove">Contact</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl text-balance sm:text-6xl">
          Start a project with {site.name}.
        </h1>
        <div className="mt-12 max-w-3xl">
          <ContactDetails />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
