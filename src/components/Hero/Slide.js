import Button from "../UI/Button";
import Overlay from "../UI/Overlay";
import "./style.css";

const Slide = (props) => {
  return (
    <div className="relative w-full">
      <Overlay className="absolute z-10">
        <div className="flex justify-center items-center h-full flex-col">
          <h2 className="text-light-100 text-2xl sm:text-4xl md:text-6xl uppercase font-extralight tracking-widest">
            {props.title}
            <span className="text-primary font-medium">{props.marked}</span>
          </h2>
          <p className="text-secondary-100 tracking-widest text-xl my-4 font-medium">
            {props.subTitle}
          </p>
          <a href="#arrivals">
            <Button>Shop Now</Button>
          </a>
        </div>
      </Overlay>
      <img src={props.img} alt="slide" className="w-full object-cover img" />
    </div>
  );
};

export default Slide;
