import Image from "../assets/slide-3.jpg";
import PageHero from "../components/UI/PageHero";
import Contact from "../components/contact/Contact";
import Layout from "../components/layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <PageHero img={Image} marked="Contact" title="us" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
