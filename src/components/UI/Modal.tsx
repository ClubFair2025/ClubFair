import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
  <div className="">
    <div className="">
      
    </div>
  </div>, document.getElementById("modal")!)
}

export default Modal;