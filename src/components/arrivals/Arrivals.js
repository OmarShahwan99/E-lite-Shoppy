import { useState } from "react";
import Products from "./Products";

import "./style.css";

import Title from "../UI/Title";

import { useSelector } from "react-redux";

const Arrivals = () => {
  const [selectedCat, setSelectedCat] = useState("men's clothing");

  const products = useSelector((state) => state.products.products);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCat
  );

  let categories = [];
  for (const product of products) {
    categories.push(product.category);
  }
  categories = categories.filter(
    (cat, index, arr) => arr.indexOf(cat) === index
  );

  const catFilterHandler = (cat) => {
    setSelectedCat(cat);
  };

  return (
    <div className="py-16" id="arrivals">
      <div className="container">
        <Title
          marked="New"
          title="Arrivals"
          className="text-3xl sm:text-5xl text-center"
        />
        <ul className="flex flex-wrap gap-5 justify-center mb-12">
          {categories.map((cat) => (
            <li
              onClick={() => catFilterHandler(cat)}
              key={cat}
              className={`cursor-pointer py-3 px-6 font-semibold text-xlg uppercase ${
                selectedCat === cat ? "cat-active" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

export default Arrivals;
