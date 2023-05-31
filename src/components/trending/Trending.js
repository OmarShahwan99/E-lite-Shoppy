import ImageWithEffect from "../UI/ImageWithEffect";

import imgOne from "../../assets/bb1.jpg";
import imgTwo from "../../assets/bottom3.jpg";
import imgThree from "../../assets/bottom4.jpg";

const Trending = () => {
  return (
    <div className="py-8">
      <div className="container">
        <h1 className="mb-14 text-center uppercase tracking-widest text-5xl font-light">
          <span className="font-bold">What's</span> Trending
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="basis-2/5">
            <ImageWithEffect title="Sale" subTitle="up to 55%" img={imgOne} />
          </div>
          <div className="basis-3/5">
            <div className="mb-4">
              <ImageWithEffect title="Sale" subTitle="up to 55%" img={imgTwo} />
            </div>
            <div>
              <ImageWithEffect
                title="Sale"
                subTitle="up to 55%"
                img={imgThree}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
