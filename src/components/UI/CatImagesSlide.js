import { useState, useEffect } from "react";

const CatImagesSlider = (props) => {
  const [index, setIndex] = useState(0);

  const { images } = props;

  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((prevState) => prevState + 1);
      if (index === images.length - 1) {
        setIndex(0);
      }
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [index, images]);

  const activeClass = "bg-primary border-primary";

  return (
    <div className="relative col-span-2">
      <img
        className="h-full object-cover w-full transition duration-300 "
        src={images[index]}
        alt=""
      />
      <ul className="flex gap-4 absolute bottom-5 left-14">
        {props.images.map((_, imgIdx) => (
          <li
            className={`w-3 h-3 rounded-full border-light-100 border-2 cursor-pointer ${
              index === imgIdx ? activeClass : ""
            }`}
            key={imgIdx}
            onClick={() => setIndex(imgIdx)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CatImagesSlider;
