// Styles
import React, { PropsWithChildren } from "react";
import * as S from "./styles";

interface Props extends PropsWithChildren {
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: Props) => {
  function checkOutsideClick(e: React.MouseEvent) {
    const { currentTarget, target } = e;
    if (currentTarget === target) closeModal();
  }

  return <S.Modal onMouseDown={checkOutsideClick}>{children}</S.Modal>;
};

export default Modal;
