import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = ({ id, label, ...props }: Props) => {
  return (
    <S.InputGroup>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </S.InputGroup>
  );
};

export default Input;
