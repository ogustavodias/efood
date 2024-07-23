// Styles
import * as S from "./styles";

// Components
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const inMenu = location.pathname === "/menu";

  return (
    <S.Header>
      <div className="container">
        <Logo />
        <S.Aside style={{ display: inMenu ? "flex" : "none" }}>
          <Link to={"/"}>Restaurantes</Link>
          <span>0 produtos(s) no carrinho</span>
        </S.Aside>
        <S.HomeSlogan style={{ display: inMenu ? "none" : "block" }}>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </S.HomeSlogan>
      </div>
      <S.CuisineInfo style={{ display: inMenu ? "block" : "none" }}>
        <div className="container">
          <S.Specialty>Italiana</S.Specialty>
          <S.Name>La Dolce Vita Trattoria</S.Name>
        </div>
      </S.CuisineInfo>
    </S.Header>
  );
};

export default Header;
