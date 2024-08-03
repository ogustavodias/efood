import React from "react";

// Styles
import * as S from "./styles";
import Cart from "../Cart";
import Checkout from "../Checkout";

export type Step = "cart" | "adress" | "payment" | "finish";

const SideBar = () => {
  const [step, setStep] = React.useState<Step>("payment");

  function getElementOfStep() {
    switch (step) {
      case "cart":
        return <Cart setStep={setStep} />;
      case "adress":
      case "payment":
        return <Checkout step={step} setStep={setStep} />;
      case "finish":
        return <p>Finish</p>;
      default:
        return null;
    }
  }

  return <S.Aside>{getElementOfStep()}</S.Aside>;
};

export default SideBar;
