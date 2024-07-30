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

// Components
import Modal from "../../components/Modal";
import ModalCart from "../../components/ModalCart";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { close, open } from "../../redux/reducers/cart";

const Perfil = () => {
  const cart = useSelector((state: RootReducer) => state.cart);
  const { isOpen } = cart;
  const { length } = cart.list;
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = React.useState<Restaurant>();
  const { id } = useParams();

  function openModal() {
    dispatch(open());
  }

  function closeModal(element: EventTarget & Element) {
    dispatch(close());
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
      <Modal openned={isOpen} closeModal={closeModal}>
        <ModalCart />
      </Modal>
      <Header>
        <div className="container">
          <S.Nav>
            <Link to={"/"}>Restaurantes</Link>
            <span
              onClick={openModal}
            >{`${length} produtos(s) no carrinho`}</span>
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
