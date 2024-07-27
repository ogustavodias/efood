// Styles
import * as S from "./styles";

// Typescript with React
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
