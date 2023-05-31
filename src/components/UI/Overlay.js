const Overlay = (props) => {
  return (
    <div
      onClick={props.onClose}
      className={` w-full h-full top-0 left-0 bg-dark bg-opacity-30 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
