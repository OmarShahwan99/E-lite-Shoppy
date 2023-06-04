import PageHero from "../components/UI/PageHero";
import Layout from "../components/layout/Layout";
import Image from "../assets/slide-3.jpg";
import About from "../components/about/About";

const AboutPage = () => {
  return (
    <Layout>
      <PageHero img={Image} marked="About" title="Us" />
      <About />
    </Layout>
  );
};

export default AboutPage;
