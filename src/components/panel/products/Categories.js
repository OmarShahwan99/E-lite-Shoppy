const Categories = (props) => {
  return (
    <div className="flex justify-end">
      <select
        className="bg-transparent border-gray border-2 p-2 text-para rounded-md focus:outline-none"
        onChange={(e) => props.onSelectCat(e.target.value)}
      >
        {props.cats.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
