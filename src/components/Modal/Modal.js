import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={classes.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div></div>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
