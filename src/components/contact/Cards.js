import Card from "./Card";

const Cards = (props) => {
  return (
    <ul className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {props.items.map((item) => (
        <Card
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Cards;
