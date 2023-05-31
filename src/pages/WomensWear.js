import PageHero from "../components/UI/PageHero";
import Layout from "../components/layout/Layout";
import Womens from "../components/womens/Womens";

import Image from "../assets/slide-3.jpg";

const WomensWear = () => {
  return (
    <Layout>
      <PageHero img={Image} marked="Women's" title="Wear" />
      <Womens />;
    </Layout>
  );
};

export default WomensWear;
