import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
