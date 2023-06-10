import ReactDOM from "react-dom";

const Notifications = (props) => {
  let notClasses = "bg-primary";
  if (props.status === "success") {
    notClasses = "bg-success text-light-100";
  }
  if (props.status === "error") {
    notClasses = "bg-error-200 text-error-100";
  }
  return ReactDOM.createPortal(
    <div
      className={`${notClasses} p-3 flex justify-between items-center fixed bottom-0 left-0 z-50 w-full`}
    >
      <h3>{props.title}</h3>
      <p>{props.msg}</p>
    </div>,
    document.getElementById("modal")
  );
};

export default Notifications;
