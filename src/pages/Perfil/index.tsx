// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import Header from "../../components/Header";
import MenuList from "../../components/MenuList";

// React-router-dom
import { Link, useParams } from "react-router-dom";

// Types
import Restaurant from "../../types/restaurant";
import Modal from "../../components/Modal";
import ModalCart from "../../components/ModalCart";

const Perfil = () => {
  const [cartModalOpen, setCartModalOpen] = React.useState(false);
  const [restaurant, setRestaurant] = React.useState<Restaurant>();
  const { id } = useParams();

  function openModal() {
    setCartModalOpen(true);
  }

  function closeModal(element: EventTarget & Element) {
    setCartModalOpen(false);
    element.classList.remove("openned");
  }

  React.useEffect(() => {
    async function fetchRestaurant() {
      const url = `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`;
      const response = await fetch(url);
      const json = await response.json();
      if (response.ok) setRestaurant(json);
    }

    fetchRestaurant();
  }, [id]);

  if (!restaurant) return null;

  return (
    <>
      <Modal openned={cartModalOpen} closeModal={closeModal}>
        <ModalCart />
      </Modal>
      <Header>
        <div className="container">
          <S.Nav>
            <Link to={"/"}>Restaurantes</Link>
            <span onClick={openModal}>0 produtos(s) no carrinho</span>
          </S.Nav>
        </div>
        <S.CuisineInfo background={restaurant.capa}>
          <div className="container">
            <S.Specialty>{restaurant.tipo}</S.Specialty>
            <S.Name>{restaurant.titulo}</S.Name>
          </div>
        </S.CuisineInfo>
      </Header>
      <section className="container">
        <MenuList menu={restaurant.cardapio} />
      </section>
    </>
  );
};

export default Perfil;
