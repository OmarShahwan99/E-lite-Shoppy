import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`text-light-100 bg-primary px-5 py-1 text-lg relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:border-primary  after:transition-all after:duration-300 button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
