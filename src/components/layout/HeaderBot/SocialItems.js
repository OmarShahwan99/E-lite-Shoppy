import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialItems = () => {
  return (
    <ul className="flex gap-3 items-center">
      <li className="">
        <a href="#s" className="p-2 block bg-facebook">
          <FaFacebookF className="text-light-100" />
        </a>
      </li>
      <li className="">
        <a href="#s" className="p-2 block bg-twitter">
          <FaTwitter className="text-light-100" />
        </a>
      </li>
      <li className="">
        <a href="#s" className="p-2 block bg-instagram">
          <FaInstagram className="text-light-100" />
        </a>
      </li>
      <li className="">
        <a href="#s" className="p-2 block bg-linkedin">
          <FaLinkedinIn className="text-light-100" />
        </a>
      </li>
    </ul>
  );
};

export default SocialItems;
