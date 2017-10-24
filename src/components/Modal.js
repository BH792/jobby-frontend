import React from "react";
import NewJob from "./NewJob";

class Modal extends React.Component {
  close = e => {
    e.preventDefault();
    this.props.onClose();
  };

  render() {
    if (this.props.isOpen === false) return null;

    let modalStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "9999",
      background: "#fff"
    };

    let backdropStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      zIndex: "9998",
      background: "rgba(0, 0, 0, 0.3)"
    };

    return (
      <div className="Modal">
        <div style={modalStyle}>
          <button style={{ float: "right" }} onClick={this.close}>
            X
          </button>
          <h4>Add New Job</h4>
          <NewJob addJob={this.props.addJob} closeModal={this.props.onClose} />
        </div>
        <div style={backdropStyle} onClick={this.close} />
      </div>
    );
  }
}

export default Modal;
