import React from "react";

import { createPortal } from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import CloseIcon from "./CloseIcon.svg";
import "./Modal.css";

const ModalPortal = ({ children, handleDismiss }) =>
  createPortal(
    <div className="modal-containers">
      <OutsideClickHandler onOutsideClick={handleDismiss}>
        <div className="modal-contents">
          <div className="close-icon-wrapper">
            <img
              src={CloseIcon}
              alt="Close icon"
              className="close-icon"
              onClick={handleDismiss}
            />
          </div>
          {children}
        </div>
      </OutsideClickHandler>
    </div>,
    document.getElementById("modalPortal")
  );

export default ModalPortal;
