import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useSendOrderMutation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../../utils/toCurrency";
import * as reduxCart from "../../redux/reducers/cart";

import Input from "../Input";
import Button from "../Button";

import * as S from "./styles";

interface Props {
  step: Step;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Checkout = ({ step, setStep }: Props) => {
  const [sendOrder, { isLoading, isSuccess, data }] = useSendOrderMutation();
  const list = useSelector(reduxCart.selectProducts);
  const totalPrice = useSelector(reduxCart.selectProductsTotalPrice);
  const dispatch = useDispatch();

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
      const order: Order = {
        products: list.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expirationMonth,
              year: values.expirationYear,
            },
          },
        },
      };
      sendOrder(order);
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required("O campo é obrigatório"),
      address: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string()
        .required("O campo é obrigatório")
        .min(9, "O campo deve ter 9 caracteres")
        .max(9, "O campo deve ter 9 caracteres"),
      number: Yup.string().required("O campo é obrigatório"),
      complement: Yup.string(),
      cardOwner: Yup.string().required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .required("O campo é obrigatório")
        .min(19, "O campo deve ter 19 caracteres")
        .max(19, "O campo deve ter 19 caracteres"),
      cardCode: Yup.string()
        .required("O campo é obrigatório")
        .min(3, "O campo deve ter 3 caracteres")
        .max(3, "O campo deve ter 3 caracteres"),
      expirationMonth: Yup.string().required("O campo é obrigatório"),
      expirationYear: Yup.string()
        .required("O campo é obrigatório")
        .min(2, "O campo deve ter ao menos 2 caracteres"),
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

  function finish() {
    dispatch(reduxCart.clear());
    setStep("cart");
  }

  React.useEffect(() => {
    if (isSuccess) setStep("finish");
  }, [isSuccess, setStep]);

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
                mask={"99999-999"}
              />
              <Input
                id="number"
                label="Número"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("number")}
                mask={"99999"}
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
      ) : step === "payment" ? (
        <>
          <S.Title>Pagamento - Valor a pagar {toCurrency(totalPrice)}</S.Title>

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
                mask={"9999 9999 9999 9999"}
              />
              <Input
                id="cardCode"
                label="CVV"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("cardCode")}
                mask={"999"}
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
                mask={"99"}
              />
              <Input
                id="expirationYear"
                label="Ano de vencimento"
                name="expirationYear"
                value={form.values.expirationYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={checkIfError("expirationYear")}
                mask={"99"}
              />
            </div>
            <S.Options>
              <Button disabled={invalidToFinish() || isLoading} type="submit">
                {isLoading
                  ? "Processando o pagamento..."
                  : "Finalizar pagamento"}
              </Button>
              <Button onClick={() => setStep("address")}>
                Voltar para a edição de endereço
              </Button>
            </S.Options>
          </S.PaymentGroup>
        </>
      ) : step === "finish" && data ? (
        <>
          <S.Title>Pedido realizado - &#123;{data.orderId}&#125;</S.Title>

          <S.FinishGroup>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button type="button" onClick={finish}>
              Concluir
            </Button>
          </S.FinishGroup>
        </>
      ) : (
        ""
      )}
    </S.Form>
  );
};

export default Checkout;
