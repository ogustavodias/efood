// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import MenuCard from "../MenuCard";
import Modal from "../Modal";
import ModalDishDetails from "../ModalDishDetails";

// Types
import { Dish } from "../../types/restaurant";

type Props = {
  menu: Dish[];
};

const MenuList = ({ menu }: Props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<Dish | null>(null);

  function openModal(dish: Dish) {
    setModalOpen(true);
    setModalContent(dish);
  }

  function closeModal(element: EventTarget & Element) {
    setModalOpen(false);
    setModalContent(null);
    element.classList.remove("openned");
  }

  return (
    <>
      <Modal openned={modalOpen} closeModal={closeModal}>
        {modalContent && <ModalDishDetails dish={modalContent} />}
      </Modal>
      <S.List>
        {menu.map((item) => (
          <MenuCard key={item.id} dish={item} openModal={openModal} />
        ))}
      </S.List>
    </>
  );
};

export default MenuList;
