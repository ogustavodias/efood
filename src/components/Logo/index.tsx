import * as S from "./styles";

import logoSrc from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <S.Logo to={"/"}>
      <img src={logoSrc} alt="Efood logo" />
    </S.Logo>
  );
};

export default Logo;
