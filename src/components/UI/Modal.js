import ReactDOM from "react-dom";
import Overlay from "./Overlay";

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay className="fixed z-40" onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className="bg-light w-fit fixed top-20 left-1/2 -translate-x-1/2 z-50 rounded-md py-8 px-5">
          <span
            onClick={props.onClose}
            className="font-bold cursor-pointer absolute top-1 right-3 text-gray"
          >
            x
          </span>
          {props.children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
