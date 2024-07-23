// Styles
import * as S from "./styles";

// Typescript with React
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return <S.Button type="button">{children}</S.Button>;
};

export default Button;
