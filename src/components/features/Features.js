import {
  faTruck,
  faHeadphones,
  faBagShopping,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FEATURES = [
  {
    icon: faTruck,
    title: "Free Shipping",
    discription: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    icon: faHeadphones,
    title: "24/7 Support",
    discription: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    icon: faBagShopping,
    title: "Money Back Gurantee",
    discription: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    icon: faGift,
    title: "Free Gift Coupones",
    discription: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const Features = () => {
  return (
    <div className="py-10">
      <div className="container flex flex-wrap gap-8 justify-center">
        {FEATURES.map((feature) => (
          <div className="flex gap-4 group" key={feature.title}>
            <div className="flex justify-center items-center bg-dark text-light-100 p-7 relative overflow-hidden before:absolute before:w-0 before:h-0 before:bg-primary before:top-0 before:left-0 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:h-full">
              <FontAwesomeIcon
                className="text-xl absolute z-10"
                icon={feature.icon}
              />
            </div>
            <div>
              <h6 className="text-primary uppercase text-sm tracking-widest">
                {feature.title}
              </h6>
              <p className="text-sm text-para mt-2 font-semibold">
                {feature.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
