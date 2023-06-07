import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Men's Wear", path: "/mens" },
  { title: "Women's Wear", path: "/womens" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const OurInformations = () => {
  return (
    <div className="col-span-1">
      <h1 className="font-ligh text-xl text-light-100 uppercase tracking-widest">
        <span className="font-bold">Our</span> Informations
      </h1>
      <ul className="mt-3">
        {NAV_ITEMS.map((item) => (
          <li className="mb-1" key={item.title}>
            <Link
              className="transition duration-300 hover:text-primary text-sm text-para"
              href="#s"
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurInformations;
