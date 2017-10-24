import React from "react";

class Modal extends React.Component {
  close = e => {
    e.preventDefault();
    this.props.toggleModal();
  };

  render() {
    if (this.props.isOpen === false) return null;

    let modalStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "9999",
      background: "#fff",
      "text-align": "center"
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
          <button style={{ float: "right" }} onClick={this.props.toggleModal}>
            X
          </button>
          {this.props.header ? (
            <h4
              style={{
                "margin-bottom": "0",
                "margin-top": "20px"
              }}
            >
              {this.props.header}
            </h4>
          ) : null}
          {this.props.children}
        </div>
        <div style={backdropStyle} onClick={this.close} />
      </div>
    );
  }
}

export default Modal;
