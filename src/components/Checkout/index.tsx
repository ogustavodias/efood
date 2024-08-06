import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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

interface Order {
  products: [{ id: number; price: number }];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
}

const Checkout = ({ step, setStep }: Props) => {
  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardOwner: "",
      cardNumber: "",
      cardCode: "",
      expirationMonth: "",
      expirationYear: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required("O campo é obrigatório"),
      address: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string()
        .required("O campo é obrigatório")
        .min(9, "O campo deve ter 9 caracteres")
        .max(9, "O campo deve ter 9 caracteres"),
      number: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
      complement: Yup.string(),
      cardOwner: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
      cardNumber: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
      cardCode: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
      expirationMonth: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
      expirationYear: Yup.number()
        .required("O campo é obrigatório")
        .typeError("O campo é do tipo numérico"),
    }),
    validateOnMount: true,
  });

  function checkIfError(key: string) {
    const touched = key in form.touched;
    const error = key in form.errors;
    return touched && error;
  }

  function invalidToPayment() {
    const fieldsToCheck = ["receiver", "address", "city", "zipCode", "number"];
    return fieldsToCheck.some((field) => field in form.errors);
  }

  function invalidToFinish() {
    return Boolean(Object.values(form.errors).length);
  }

  console.log(form);

  return (
    <S.Form onSubmit={form.handleSubmit}>
      {step === "address" ? (
        <>
          <S.Title>Entrega</S.Title>

          <S.AddressGroup>
            <Input
              id="receiver"
              label="Quem irá receber"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={checkIfError("receiver")}
            />
            <Input
              id="address"
              label="Endereço"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={checkIfError("address")}
            />
            <Input
              id="city"
              label="Cidade"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={checkIfError("city")}
            />
            <div className="grid-half">
              <Input
                id="zipCode"
                label="CEP"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("zipCode")}
              />
              <Input
                id="number"
                label="Número"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("number")}
              />
            </div>
            <Input
              id="complement"
              label="Complemento (opcional)"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <S.Options>
              <Button
                disabled={invalidToPayment()}
                onClick={() => setStep("payment")}
              >
                Continuar com o pagamento
              </Button>
              <Button onClick={() => setStep("cart")}>
                Voltar para o carrinho
              </Button>
            </S.Options>
          </S.AddressGroup>
        </>
      ) : (
        <>
          <S.Title>Pagamento - Valor a pagar R$ 190,90</S.Title>

          <S.PaymentGroup>
            <Input
              id="cardOwner"
              label="Nome no cartão"
              name="cardOwner"
              value={form.values.cardOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={checkIfError("cardOwner")}
            />
            <div className="grid-half-2">
              <Input
                id="cardNumber"
                label="Número do cartão"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("cardNumber")}
              />
              <Input
                id="cardCode"
                label="CVV"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("cardCode")}
              />
            </div>
            <div className="grid-half">
              <Input
                id="expirationMonth"
                label="Mês de vencimento"
                name="expirationMonth"
                value={form.values.expirationMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("expirationMonth")}
              />
              <Input
                id="expirationYear"
                label="Ano de vencimento"
                name="expirationYear"
                value={form.values.expirationYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("expirationYear")}
              />
            </div>
            <S.Options>
              <Button disabled={invalidToFinish()} type="submit">
                Finalizar pagamento
              </Button>
              <Button onClick={() => setStep("address")}>
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
