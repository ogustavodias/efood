import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { open, setElementIn } from "../../redux/reducers/modal";
import { useGetStoreQuery } from "../../services/api";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./styles";
import { selectProducts } from "../../redux/reducers/cart";

const Perfil = () => {
  const list = useSelector(selectProducts);
  const { length } = list;
  const { id } = useParams();
  const { data, isLoading, isError } = useGetStoreQuery(id!);
  const dispatch = useDispatch();

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
