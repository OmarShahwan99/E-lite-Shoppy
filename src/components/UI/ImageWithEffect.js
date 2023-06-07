import Overlay from "./Overlay";

const ImageWithEffect = (props) => {
  return (
    <div className="relative overflow-hidden group h-full">
      <Overlay className="absolute z-10 px-16 py-12 sm:px-20 sm:py-20 xl:p-24 before:absolute before:border-light-100 before:border-4 before:w-4/5 before:h-2/3 before:top-10 before:left-12 before:opacity-0 before:-translate-x-10 group hover:before:translate-x-0 hover:before:opacity-100 before:transition-all before:duration-300">
        <h2 className="uppercase tracking-widest text-light-100 text-2xl font-light text-right">
          <span className="text-secondary-200">{props.title.charAt(0)}</span>
          {props.title.slice(1)}
        </h2>
        <p className="text-light-100 tracking-widest text-right font-light mt-1 md:mt-3 text-xl transition duration-300 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0">
          {props.subTitle}
        </p>
      </Overlay>
      <img
        alt=""
        src={props.img}
        className="object-cover w-full transition duration-300 group-hover:translate-x-9 scale-125"
      />
    </div>
  );
};

export default ImageWithEffect;
