import React from "react";

// S
import * as S from "./styles";

// Components
import Input from "../Input";

// Types
import { Step } from "../AsideInModal";
import Button from "../Button";

interface Props {
  step: Step;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const FormsOfCart = ({ step, setStep }: Props) => {
  return (
    <S.Form>
      <S.Title>Entrega</S.Title>
      <S.AdressGroup>
        <Input id="receiver" label="Quem irá receber" />
        <Input id="adress" label="Endereço" />
        <Input id="city" label="Cidade" />
        <div className="grid-half">
          <Input id="zipCode" label="CEP" />
          <Input id="number" label="Número" />
        </div>
        <Input id="complement" label="Complemento (opcional)" />
        <S.Options>
          <Button>Continuar com o pagamento</Button>
          <Button onClick={() => setStep("cart")}>
            Voltar para o carrinho
          </Button>
        </S.Options>
      </S.AdressGroup>
    </S.Form>
  );
};

export default FormsOfCart;
