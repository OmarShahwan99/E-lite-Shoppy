import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialItems from "../layout/HeaderBot/SocialItems";

const ContactInformation = (props) => {
  return (
    <div>
      <h2 className="uppercase font-light text-3xl mb-10 tracking-widest">
        <span className="font-bold">For more </span>information
      </h2>
      <ul className="mb-12">
        {props.items.map((item) => (
          <li className="flex gap-6 mb-8" key={item.title}>
            <FontAwesomeIcon
              className="border-gray border-2 p-5 text-xl"
              icon={item.icon}
            />
            <div>
              <h3 className="text-primary uppercase text-xl tracking-wider font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-para text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <SocialItems />
    </div>
  );
};

export default ContactInformation;
