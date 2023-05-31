import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STORE_INFORMATIONS = [
  { icon: faPhone, title: "Phone Number", subTitle: "+1 234 567 8901" },
  { icon: faEnvelope, title: "Email Address", subTitle: "mail@example.com" },
  {
    icon: faLocation,
    title: "Location",
    subTitle: "Broome St, NY 10002,California, USA.",
  },
];

const StoreInformations = () => {
  return (
    <div className="col-span-1">
      <h1 className="font-ligh text-xl text-light uppercase tracking-widest">
        <span className="font-bold">Store</span> Informations
      </h1>
      <ul className="mt-3">
        {STORE_INFORMATIONS.map((item) => (
          <li
            key={item.title}
            className="mb-1 p-2 bg-dark flex gap-5 items-center"
          >
            <FontAwesomeIcon className="text-light font-lg" icon={item.icon} />
            <div>
              <h5 className="font-medium text-light mb-2 tracking-widest ">
                {item.title}
              </h5>
              <p className="text-para">{item.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreInformations;
