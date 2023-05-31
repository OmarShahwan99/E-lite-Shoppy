import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Product from "../components/product/Product";
import axios from "axios";


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProdcut = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      const responseData = await response.data;
      setIsLoading(false);
      setProduct(responseData);
    };
    try {
      setIsLoading(true);
      fetchProdcut();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [productId]);

  return (
    <Layout>
        <Product
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          isLoading={isLoading}
        />
    </Layout>
  );
};

export default ProductDetails;
