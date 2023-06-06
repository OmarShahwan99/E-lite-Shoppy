import ImageWithEffect from "../UI/ImageWithEffect";

import imgOne from "../../assets/bb1.jpg";
import imgTwo from "../../assets/bottom3.jpg";
import imgThree from "../../assets/bottom4.jpg";
import Title from "../UI/Title";

const Trending = () => {
  return (
    <div className="py-8">
      <div className="container">
        <Title marked="What's" title="Trending" className="text-3xl sm:text-5xl text-center" />
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
