// Styles
import * as S from "./styles";

// Components
import Button from "../Button";

// Types
import { Dish } from "../../types/restaurant";

type Props = {
  dish: Dish;
};

const MenuCard = ({ dish }: Props) => {
  return (
    <S.Card>
      <img src={dish.foto} alt={dish.nome} />
      <S.Infos>
        <S.DishName>{dish.nome}</S.DishName>
        <S.DishDescription>{dish.descricao}</S.DishDescription>
        <Button>Adicionar ao carrinho</Button>
      </S.Infos>
    </S.Card>
  );
};

export default MenuCard;
