const Title = (props) => {
  return (
    <h1
      className={`mb-14 uppercase tracking-widest font-light ${props.className}`}
    >
      <span className="font-bold">{props.marked}</span> {props.title}
    </h1>
  );
};

export default Title;
