import { useDispatch, useSelector } from "react-redux";
import * as reduxCart from "../../redux/reducers/cart";

import { toCurrency } from "../../utils/toCurrency";

import Button from "../Button";

import trashIcon from "../../assets/images/lixeira.png";

import * as S from "./styles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Cart = ({ setStep }: Props) => {
  const products = useSelector(reduxCart.selectProducts);
  const totalPrice = useSelector(reduxCart.selectProductsTotalPrice);
  const dispatch = useDispatch();

  if (!products.length)
    return (
      <S.EmptyMessage>
        Carrinho vazio, adicione um item para seguir com a compra.
      </S.EmptyMessage>
    );

  return (
    <>
      <S.List>
        {products.map((item) => (
          <S.Dish key={item.id}>
            <S.DishPhoto src={item.foto} alt={item.nome} />
            <div>
              <S.DishName>{item.nome}</S.DishName>
              <S.DishPrice>{toCurrency(item.preco)}</S.DishPrice>
            </div>
            <S.TrashIcon
              src={trashIcon}
              alt="trash icon"
              onClick={() => dispatch(reduxCart.remove(item.id))}
            />
          </S.Dish>
        ))}
      </S.List>
      <S.TotalPrice>
        <span>Valor total</span>
        <span>{toCurrency(totalPrice)}</span>
      </S.TotalPrice>
      <Button style={{ width: "100%" }} onClick={() => setStep("address")}>
        Continuar com a entrega
      </Button>
    </>
  );
};

export default Cart;
