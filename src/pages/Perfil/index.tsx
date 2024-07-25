// Styles
import * as S from "./styles";

// Components
import Header from "../../components/Header";
import MenuList from "../../components/MenuList";

// React-router-dom
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <Header>
        <div className="container">
          <S.Aside>
            <Link to={"/"}>Restaurantes</Link>
            <span>0 produtos(s) no carrinho</span>
          </S.Aside>
        </div>
        <S.CuisineInfo>
          <div className="container">
            <S.Specialty>Italiana</S.Specialty>
            <S.Name>La Dolce Vita Trattoria</S.Name>
          </div>
        </S.CuisineInfo>
      </Header>
      <section className="container">
        <MenuList />
      </section>
    </>
  );
};

export default Perfil;
