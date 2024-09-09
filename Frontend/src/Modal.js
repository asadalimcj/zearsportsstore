
import React from "react";
import ReactDom from "react-dom";

const model_css = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(34, 34, 34)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
};

const Overlay_css = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb(0, 0, 0, .7)",
  zIndex: 1000,
};
export default function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <div>
      <div style={Overlay_css} />
      <div style={model_css}>
        <button
          onClick={onClose}
          className="btn btn-outline-danger fs-4"
          style={{ marginLeft: "90%", marginTop: "-35px" }}
        >
          X
        </button>
        {children}
      </div>
    </div>, document.getElementById('cartRoot')
  );
}
