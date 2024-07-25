// Styles
import * as S from "./styles";

// Components
import Logo from "../Logo";

// Typescript with React
import { PropsWithChildren } from "react";

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
