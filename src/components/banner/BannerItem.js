import ImageWithEffect from "../UI/ImageWithEffect";

const BannerItem = (props) => {
  return (
    <ImageWithEffect
      title="Fall Ahead"
      subTitle="New Arrivals"
      img={props.img}
    />
  );
};

export default BannerItem;
