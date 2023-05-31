import PageHero from "../components/UI/PageHero";
import Layout from "../components/layout/Layout";

import Image from "../assets/slide-2.jpg";
import Mens from "../components/mens/Mens";

const MensWear = () => {
  return (
    <Layout>
      <PageHero img={Image} marked="Men's" title="Wear" />
      <Mens />
    </Layout>
  );
};

export default MensWear;
