import aboutImg from "../../assets/ab_pic.jpg";

import Title from "../UI/Title";

const AboutDescription = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
      <img src={aboutImg} alt="" />
      <div>
        <Title marked="About Our Elite" title="Shoppy" className="text-3xl" />
        <p className="mt-10 mb-8 leading-7 text-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque
          vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor.
          Mauris volutpat augue dolor..
        </p>
        <p className="leading-7 text-para">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab
          ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco. labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
