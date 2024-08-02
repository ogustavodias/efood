import React from "react";

// Styles
import * as S from "./styles";
import Cart from "../Cart";

export type Step = "cart" | "adress" | "payment" | "finish";

const AsideInModal = () => {
  const [step, setStep] = React.useState<Step>("cart");

  function getElementOfStep() {
    switch (step) {
      case "cart":
        return <Cart setStep={setStep} />;
      case "adress":
        return <p>a</p>
      default:
        return null;
    }
  }

  return <S.Aside>{getElementOfStep()}</S.Aside>;
};

export default AsideInModal;
