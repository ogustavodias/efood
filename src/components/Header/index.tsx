// Styles
import * as S from "./styles";

// SRC of images
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <img src={logo} alt="Efood logo" />
        <h1>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </h1>
      </div>
    </S.Header>
  );
};

export default Header;
