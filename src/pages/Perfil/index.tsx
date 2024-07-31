// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import Header from "../../components/Header";
import Menu from "../../components/Menu";

// React-router-dom
import { Link, useParams } from "react-router-dom";

// Types
import Restaurant from "../../types/restaurant";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { open, setElementIn } from "../../redux/reducers/modal";

const Perfil = () => {
  const cart = useSelector((state: RootReducer) => state.cart);
  const { list } = cart;
  const { length } = cart.list;
  const [restaurant, setRestaurant] = React.useState<Restaurant>();
  const { id } = useParams();
  const dispatch = useDispatch();

  function openModal() {
    dispatch(open());
    dispatch(setElementIn({ id: "cart", value: JSON.stringify(list) }));
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
        <Menu menu={restaurant.cardapio} />
      </section>
    </>
  );
};

export default Perfil;
