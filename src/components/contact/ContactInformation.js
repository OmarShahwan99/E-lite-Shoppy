import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialItems from "../layout/HeaderBot/SocialItems";

import Title from "../UI/Title";

const ContactInformation = (props) => {
  return (
    <div>
      <Title marked="For More" title="Information" className="text-3xl" />
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
