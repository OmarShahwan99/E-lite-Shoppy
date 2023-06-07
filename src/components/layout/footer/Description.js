import { Link } from "react-router-dom";
import SocialItems from "../HeaderBot/SocialItems";

const Description = () => {
  return (
    <div className="col-span-1 font-light">
      <Link to="/" className="text-3xl text-light-100 tracking-widest">
        <span className="px-3 py-1 font-bold bg-primary">E</span>lite Shoppy
      </Link>
      <p className="my-3 text-para leading-7 text-sm">
        Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora.
      </p>
      <SocialItems />
    </div>
  );
};

export default Description;
