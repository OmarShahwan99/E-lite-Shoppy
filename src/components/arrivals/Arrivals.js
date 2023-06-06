import { useEffect, useState } from "react";
import Products from "./Products";

import "./style.css";

import { useDispatch } from "react-redux";
import axios from "axios";
import Title from "../UI/Title";

import { TailSpin } from "react-loader-spinner";

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [selectedCat, setSelectedCat] = useState("men's clothing");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productsData = await response.data;
      setIsLoading(false);
      let cats = [];
      for (let product of productsData) {
        cats.push(product.category);
        cats = cats.filter((cat, index, arr) => arr.indexOf(cat) === index);
      }
      setCategorys(cats);

      const filterdProducts = productsData.filter(
        (product) => product.category === selectedCat
      );
      setProducts(filterdProducts);
    };
    try {
      setIsLoading(true);
      fetchProducts();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [selectedCat, dispatch]);

  const catFilterHandler = (cat) => {
    setSelectedCat(cat);
  };

  return (
    <div className="py-16 ">
      <div className="container">
        <Title marked="New" title="Arrivals" className="text-5xl text-center" />
        <ul className="flex flex-wrap gap-5 justify-center mb-12">
          {categorys.map((cat) => (
            <li
              onClick={() => catFilterHandler(cat)}
              key={cat}
              className={`cursor-pointer py-3 px-6 font-semibold text-xlg uppercase ${
                selectedCat === cat ? "active" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
        {!isLoading && <Products isLoading={isLoading} products={products} />}
        {isLoading && (
          <TailSpin
            height="120"
            width="120"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ justifyContent: "center" }}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

export default Arrivals;
