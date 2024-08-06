import { PropsWithChildren } from "react";

import Logo from "../Logo";

import * as S from "./styles";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <S.Header>
      <div className="container">
        <Logo />
      </div>
      {children}
    </S.Header>
  );
};

export default Header;
