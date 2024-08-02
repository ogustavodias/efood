// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import DishDetailsInModal from "../DishDetailsInModal";
import AsideInModal from "../AsideInModal";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { close } from "../../redux/reducers/modal";

const Modal = () => {
  const { isOpen, elementIn } = useSelector(
    (state: RootReducer) => state.modal
  );
  const dispatch = useDispatch();
  const modalElement = React.useRef<HTMLDivElement>(null);

  function checkElementToRender() {
    if (elementIn) {
      switch (elementIn.id) {
        case "dish":
          return <DishDetailsInModal dish={JSON.parse(elementIn.value)} />;
        case "cart":
          return <AsideInModal />;
        default:
          return "";
      }
    }
  }

  function checkOutsideClick(e: React.MouseEvent) {
    const { currentTarget, target } = e;
    if (currentTarget === target) dispatch(close());
  }

  return (
    <S.Modal
      id="modal"
      ref={modalElement}
      className={isOpen ? "isOpen" : ""}
      onMouseDown={checkOutsideClick}
    >
      {checkElementToRender()}
    </S.Modal>
  );
};

export default Modal;
