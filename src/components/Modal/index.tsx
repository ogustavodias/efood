// React
import React from "react";

// Styles
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { close } from "../../redux/reducers/modal";
import ModalDishDetails from "../ModalDishDetails";
import ModalCart from "../ModalCart";

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
          return <ModalDishDetails dish={JSON.parse(elementIn.value)} />;
        case "cart":
          return <ModalCart />;
        default:
          return "";
      }
    }
  }

  function checkOutsideClick(e: React.MouseEvent) {
    const { currentTarget, target } = e;
    if (currentTarget === target) dispatch(close());
  }

  React.useEffect(() => {
    if (isOpen) modalElement.current?.classList.add("isOpen");
    else modalElement.current?.classList.remove("isOpen");
  }, [dispatch, isOpen]);

  return (
    <S.Modal
      id="modal"
      ref={modalElement}
      className={!isOpen ? "isOpen" : ""}
      onMouseDown={checkOutsideClick}
    >
      {checkElementToRender()}
    </S.Modal>
  );
};

export default Modal;
