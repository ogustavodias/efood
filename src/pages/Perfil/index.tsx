// Styles
import * as S from "./styles";

// Components
import Header from "../../components/Header";
import Menu from "../../components/Menu";

// React-router-dom
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { open, setElementIn } from "../../redux/reducers/modal";
import { useGetStoreQuery } from "../../services/api";

const Perfil = () => {
  const cart = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { list } = cart;
  const { length } = cart.list;
  const { data, isLoading, isError } = useGetStoreQuery(id!);

  function openModal() {
    dispatch(open());
    dispatch(setElementIn({ id: "cart", value: JSON.stringify(list) }));
  }

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Ocorreu um erro</p>;
  if (!data) return null;

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
        <S.CuisineInfo background={data.capa}>
          <div className="container">
            <S.Specialty>{data.tipo}</S.Specialty>
            <S.Name>{data.titulo}</S.Name>
          </div>
        </S.CuisineInfo>
      </Header>
      <section className="container">
        <Menu menu={data.cardapio} />
      </section>
    </>
  );
};

export default Perfil;
