import React from "react";

// S
import * as S from "./styles";

// Components
import Input from "../Input";

// Types
import { Step } from "../SideBar";
import Button from "../Button";

interface Props {
  step: Step;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Checkout = ({ step, setStep }: Props) => {
  return (
    <S.Form>
      {step === "adress" ? (
        <>
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
              <Button onClick={() => setStep("payment")}>
                Continuar com o pagamento
              </Button>
              <Button onClick={() => setStep("cart")}>
                Voltar para o carrinho
              </Button>
            </S.Options>
          </S.AdressGroup>
        </>
      ) : (
        <>
          <S.Title>Pagamento - Valor a pagar R$ 190,90</S.Title>

          <S.PaymentGroup>
            <Input id="cardOwner" label="Nome no cartão" />
            <div className="grid-half-2">
              <Input id="cardNumber" label="Número do cartão" />
              <Input id="cardCode" label="CVV" />
            </div>
            <div className="grid-half">
              <Input id="expirationMonth" label="Mês de vencimento" />
              <Input id="expirationYear" label="Ano de vencimento" />
            </div>
            <S.Options>
              <Button>Finalizar pagamento</Button>
              <Button onClick={() => setStep("adress")}>
                Voltar para a edição de endereço
              </Button>
            </S.Options>
          </S.PaymentGroup>
        </>
      )}
    </S.Form>
  );
};

export default Checkout;
