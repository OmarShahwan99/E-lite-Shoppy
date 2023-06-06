import MenuItem from "./MenuItem";

const BarList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <MenuItem key={item.title} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};

export default BarList;
