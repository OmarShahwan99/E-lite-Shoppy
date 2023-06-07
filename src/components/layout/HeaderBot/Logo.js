import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-3xl md:text-5xl font-light">
      <span className="bg-dark text-light-100 p-2 font-bold">E</span>
      lite Shoppy
    </Link>
  );
};

export default Logo;
