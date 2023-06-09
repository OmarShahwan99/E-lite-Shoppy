import { useEffect, useState } from "react";
import axios from "axios";

import imageOne from "../../assets/slide-1.jpg";
import imageTwo from "../../assets/slide-3.jpg";
import imageThree from "../../assets/banner4.jpg";

import CatImagesSlider from "../UI/CatImagesSlide";
import CatDescription from "../UI/CatDescription";

import ProductItem from "../arrivals/ProductItem";

import { TailSpin } from "react-loader-spinner";

const images = [imageOne, imageTwo, imageThree];

const Womens = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        const responseData = await response.data;
        setIsLoading(false);
        setIsLoading(false);
        setProducts(responseData);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-14">
      <div className="grid md:grid-cols-3 gap-8">
        <CatImagesSlider images={images} />
        <CatDescription marked="Exclusive Women's" title="Collections" />
      </div>
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
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Womens;
