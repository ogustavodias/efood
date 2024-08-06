import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: boolean;
}

const Input = ({ id, label, error, ...props }: Props) => {
  return (
    <S.InputGroup>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} className={error ? 'error' : ''} {...props} />
    </S.InputGroup>
  );
};

export default Input;
