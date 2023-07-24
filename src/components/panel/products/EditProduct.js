import { useState } from "react";

const EditProduct = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const editHandler = (event) => {
    event.preventDefault();
    props.onEdit({
      title,
      description,
      price,
      image,
      id: props.id,
      category: props.cat,
    });
  };

  return (
    <div>
      <h2 className="text-2xl mb-3">Edit Product Number {props.id}</h2>
      <form onSubmit={editHandler}>
        <div className="mb-4">
          <label className="block text-para font-bold mb-1" htmlFor="title">
            New Title
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
            New Description
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
            New Price
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
            New Image
          </label>
          <input
            className="w-full border-gray border-2 focus:outline-none rounded-lg px-2 py-1"
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div>
          <button className="px-2 py-1 bg-primary text-light-100 font-bold mt-4 rounded">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
