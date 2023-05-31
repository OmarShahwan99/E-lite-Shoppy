const OurInformations = () => {
  return (
    <div className="col-span-1">
      <h1 className="font-ligh text-xl text-light uppercase tracking-widest">
        <span className="font-bold">Our</span> Informations
      </h1>
      <ul className="mt-3">
        {["Home", "Men's Wear", "Women's Wear", "About", "Contact"].map(
          (item) => (
            <li className="mb-1" key={item}>
              <a
                className="transition duration-300 hover:text-primary text-sm text-para"
                href="#s"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default OurInformations;
