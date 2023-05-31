import Slider from "../components/Hero/Slider";
import Banner from "../components/banner/Banner";
import Arrivals from "../components/arrivals/Arrivals";
import Layout from "../components/layout/Layout";
import Trending from "../components/trending/Trending";
import Offer from "../components/offer/Offer";
import Features from "../components/features/Features";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Banner />
      <Trending />
      <Arrivals />
      <Offer />
      <Features />
    </Layout>
  );
};

export default Home;
