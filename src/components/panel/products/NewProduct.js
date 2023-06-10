import { useState } from "react";

const NewProduct = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [cat, setCat] = useState("");

  const addHandler = async (event) => {
    event.preventDefault();
    const productData = {
      title,
      description,
      price: +price,
      image,
      category: cat,
      id: Date.now().toString(36),
    };
    props.onAdd(productData);
  };

  return (
    <div>
      <h2 className="text-2xl mb-3">Create New Product</h2>
      <form onSubmit={addHandler}>
        <div className="mb-4">
          <label className="block text-para font-bold mb-1" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-para font-bold mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-para font-bold mb-1" htmlFor="price">
            Price
          </label>
          <input
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-para font-bold mb-1" htmlFor="image">
            Image
          </label>
          <input
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-para font-bold mb-1">Category</label>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
          >
            <option disabled value="">
              Category
            </option>
            {props.cats.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="px-2 py-1 bg-primary text-light-100 font-bold mt-4 rounded">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
