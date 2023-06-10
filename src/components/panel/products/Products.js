import { useState } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
import Modal from "../../UI/Modal";
import NewProduct from "./NewProduct";

import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../store/products-slice";
import Notifications from "../../UI/Notifications";
import { uiActions } from "../../../store/ui-slice";

const Products = () => {
  const [selectedCat, setSelectedCat] = useState("men's clothing");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const products = useSelector((state) => state.products.products);
  const nots = useSelector((state) => state.ui.notifications);

  const dispatch = useDispatch();

  if (nots.status === "success" || nots.status === "error") {
    setTimeout(() => {
      dispatch(uiActions.setNotifictations({}));
    }, [2000]);
  }

  const addProductHandler = (product) => {
    dispatch(productsActions.addProduct(product));
  };

  const deleteProductHandler = (productId) => {
    dispatch(productsActions.deleteProduct(productId));
  };

  const filteredProducts = products.filter(
    (product) => product.category === selectedCat
  );

  let categories = [];
  for (let product of products) {
    categories.push(product.category);
  }
  categories = categories.filter(
    (cat, index, arr) => arr.indexOf(cat) === index
  );

  return (
    <div className="pb-8 pt-14">
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
          cats={categories}
          onSelectCat={(cat) => setSelectedCat(cat)}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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
      </div>
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <NewProduct onAdd={addProductHandler} cats={categories} />
        </Modal>
      )}
      {nots.status && (
        <Notifications status={nots.status} title={nots.title} msg={nots.msg} />
      )}
    </div>
  );
};

export default Products;
