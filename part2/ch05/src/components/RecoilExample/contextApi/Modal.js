import React, {useContext} from 'react';
import {ModalContext} from "./ModalProvider";

function Modal(props) {
  const context = useContext(ModalContext);

  return (
    <div>{context}</div>
  );
}

export default Modal;