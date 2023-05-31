import Overlay from "./Overlay";

const PageHero = (props) => {
  return (
    <div className=" h-48 relative">
      <img src={props.img} alt="" className="h-full w-full object-cover" />
      <Overlay className="absolute z-10">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-5xl text-light uppercase font-light">
            <span className="font-bold">{props.marked}</span> {props.title}
          </h1>
        </div>
      </Overlay>
    </div>
  );
};

export default PageHero;
