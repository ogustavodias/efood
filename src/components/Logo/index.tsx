// Styles
import * as S from "./styles";

// SRC of image
import logoSrc from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <S.Logo to={"/"}>
      <img src={logoSrc} alt="Efood logo" />
    </S.Logo>
  );
};

export default Logo;
