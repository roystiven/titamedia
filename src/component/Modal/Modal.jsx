import React from "react";
import cerrar from "../../assets/cerrar.png";
import "./Modal.css"

const Modal = ({ children, show, setShow, titulo }) => {

  const handlecerrar =()=>{
    setShow(false)
  }

  if (show === true) {
    return (
      <div className="o-modal">
        <div className="cerrar-modal">
          <img className="o-button-cerrar" src={cerrar} alt="cerrar" onClick={handlecerrar} />
        </div>
        <div>
        <h4 className="o-titulo-modal">{titulo}</h4>
        </div>
        <div className="o-modal-body">
          {children}
        </div>
      </div>
    );
  }
};

export default Modal;
