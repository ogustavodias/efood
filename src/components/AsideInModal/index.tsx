import React from "react";

// Styles
import * as S from "./styles";
import Cart from "../Cart";
import FormsOfCart from "../FormsOfCart";

export type Step = "cart" | "adress" | "payment" | "finish";

const AsideInModal = () => {
  const [step, setStep] = React.useState<Step>("cart");

  function getElementOfStep() {
    switch (step) {
      case "cart":
        return <Cart setStep={setStep} />;
      case "adress":
      case "payment":
        return <FormsOfCart step={step} setStep={setStep} />;
      case "finish":
        return <p>Finish</p>;
      default:
        return null;
    }
  }

  return <S.Aside>{getElementOfStep()}</S.Aside>;
};

export default AsideInModal;
