// Styles
import * as S from "./styles";

// Components
import Button from "../Button";

// Utils
import { toCurrency } from "../../utils/toCurrency";

// Types
import { Dish } from "../../types/restaurant";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/reducers/cart";
import { RootReducer } from "../../redux/configureStore";
import { setElementIn } from "../../redux/reducers/modal";

interface Props {
  dish: Dish;
}

const DishDetails = ({ dish }: Props) => {
  const { list } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  function alreadyInCart() {
    return list.findIndex((item) => item.id === dish.id) !== -1 ? true : false;
  }

  function addToCart() {
    dispatch(add(dish));
    dispatch(setElementIn({ id: "cart", value: JSON.stringify(list) }));
  }

  function removeOfCart() {
    dispatch(remove(dish.id));
  }

  if (!dish) return null;

  return (
    <div className="container" style={{ padding: "0px 20px" }}>
      <S.Card>
        <img src={dish.foto} alt={dish.nome} />
        <S.Infos>
          <S.DishName>{dish.nome}</S.DishName>
          <S.DishDescription>{dish.descricao}</S.DishDescription>
          <S.DishLot>{`Serve de ${dish.porcao}`}</S.DishLot>
          <Button
            onClick={alreadyInCart() ? removeOfCart : addToCart}
            style={{ width: "max-content" }}
          >
            {alreadyInCart()
              ? "Remover do carrinho"
              : `Adicionar ao carrinho - ${toCurrency(dish.preco)}`}
          </Button>
        </S.Infos>
      </S.Card>
    </div>
  );
};

export default DishDetails;
