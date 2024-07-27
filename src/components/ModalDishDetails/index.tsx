// Styles
import * as S from "./styles";

// Components
import Button from "../Button";

// Utils
import { toCurrency } from "../../utils/toCurrency";

// Types
import { Dish } from "../../types/restaurant";

interface Props {
  dish: Dish;
}

const ModalDishDetails = ({ dish }: Props) => {
  return (
    <div className="container" style={{ padding: "0px 20px" }}>
      <S.Card>
        <img src={dish.foto} alt={dish.nome} />
        <S.Infos>
          <S.DishName>{dish.nome}</S.DishName>
          <S.DishDescription>{dish.descricao}</S.DishDescription>
          <S.DishLot>{`Serve de ${dish.porcao}`}</S.DishLot>
          <Button
            style={{ width: "max-content" }}
          >{`Adicionar ao carrinho - ${toCurrency(dish.preco)}`}</Button>
        </S.Infos>
      </S.Card>
    </div>
  );
};

export default ModalDishDetails;
