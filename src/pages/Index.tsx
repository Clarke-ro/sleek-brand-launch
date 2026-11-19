import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Measured from "@/components/Measured";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
import Work from "@/components/Work";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <Offer />
      <Process />
      <Measured />
      <ContactSection />
    </Layout>
  );
};

export default Index;
