import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Product from "../components/product/Product";
import productsContext from "../store/products-context";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const { isLoading, error, sendRequest } = useContext(productsContext);

  useEffect(() => {
    const fetchProdcut = async () => {
      const data = await sendRequest({
        url: `https://e-commerce-cb6b8-default-rtdb.firebaseio.com/${productId - 1}.json`,
        headers: { "Content-Type": "application/json" },
      });
      setProduct(data);
    };
    fetchProdcut();
  }, [productId, sendRequest]);

  return (
    <Layout>
      <Product
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        isLoading={isLoading}
        error={error}
      />
    </Layout>
  );
};

export default ProductDetails;
