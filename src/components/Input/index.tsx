import { InputHTMLAttributes } from "react";
import ReactInputMask from "react-input-mask";

import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: boolean;
  mask?: string | (string | RegExp)[];
}

const Input = ({ id, label, error, ...props }: Props) => {
  return (
    <S.InputGroup>
      <label htmlFor={id}>{label}</label>
      <ReactInputMask
        mask={""}
        maskChar={""}
        type="text"
        id={id}
        name={id}
        className={error ? "error" : ""}
        {...props}
      ></ReactInputMask>
    </S.InputGroup>
  );
};

export default Input;
