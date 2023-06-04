import Cards from "./Cards";

import ContactInformation from "./ContactInformation";

import ContactForm from "./ContactForm";

import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const CONTACT_INFORMATION = [
  {
    icon: faLocation,
    title: "Address",
    description: "12K Street, 45 Building RoadCalifornia, USA.",
  },
  {
    icon: faPhone,
    title: "Call Us",
    description: "+1234 758 839",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "info@example.com",
  },
];

const Contact = () => {
  return (
    <div className="container">
      <Cards items={CONTACT_INFORMATION} />
      <div className="pb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactInformation items={CONTACT_INFORMATION} />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
