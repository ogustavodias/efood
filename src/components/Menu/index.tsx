// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import Modal from "../Modal";
import ModalDishDetails from "../ModalDishDetails";
import Button from "../Button";

// Types
import { Dish } from "../../types/restaurant";

type Props = {
  menu: Dish[];
};

const Menu = ({ menu }: Props) => {
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
          <S.Card key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <S.Infos>
              <S.DishName>{item.nome}</S.DishName>
              <S.DishDescription>{item.descricao}</S.DishDescription>
              <Button onClick={() => openModal(item)}>Mais detalhes</Button>
            </S.Infos>
          </S.Card>
        ))}
      </S.List>
    </>
  );
};

export default Menu;
