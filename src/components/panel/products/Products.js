import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
import Modal from "../../UI/Modal";
import NewProduct from "./NewProduct";
import { TailSpin } from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [selectedCat, setSelectedCat] = useState("men's clothing");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  }, [selectedCat]);

  const deleteProductHandler = async (id) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${id}`
    );
    const deletedProduct = await response.data;
    const filterdProducts = products.filter(
      (product) => product.id !== deletedProduct.id
    );
    setProducts(filterdProducts);
  };

  return (
    <div className="py-8">
      <div className="mb-5 flex justify-between flex-wrap gap-5">
        <h2 className="uppercase text-3xl tracking-widest">Products</h2>
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-primary px-2 py-1 text-light-100 font-semibold rounded text-md "
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="ml-2">Create New</span>
        </button>
      </div>
      <div className="bg-light-100 p-8 rounded-lg">
        <Categories
          cats={categorys}
          onSelectCat={(cat) => setSelectedCat(cat)}
        />
        {!isLoading && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                onDelete={deleteProductHandler}
              />
            ))}
          </div>
        )}
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
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <NewProduct cats={categorys} />
        </Modal>
      )}
    </div>
  );
};

export default Products;
