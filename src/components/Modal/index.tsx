// React
import React, { PropsWithChildren, useRef } from "react";

// Styles
import * as S from "./styles";

interface Props extends PropsWithChildren {
  closeModal: (element: EventTarget & Element) => void;
  openned: boolean;
}

const Modal = ({ children, closeModal, openned }: Props) => {
  const modalElement = useRef(null);

  function checkOutsideClick(e: React.MouseEvent) {
    const { currentTarget, target } = e;
    if (currentTarget === target) closeModal(currentTarget);
  }

  return (
    <S.Modal
      ref={modalElement}
      className={openned ? "openned" : ""}
      onMouseDown={checkOutsideClick}
    >
      {children}
    </S.Modal>
  );
};

export default Modal;
