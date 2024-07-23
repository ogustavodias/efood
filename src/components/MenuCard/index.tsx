// Styles
import * as S from "./styles";

// Dish image src
import dishSrc from "../../assets/images/prato.png";
import Button from "../Button";

const MenuCard = () => {
  return (
    <S.Card>
      <img src={dishSrc} alt="Pizza" />
      <S.DishName>Pizza Marguerita</S.DishName>
      <S.DishDescription>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </S.DishDescription>
      <Button>Adicionar ao carrinho</Button>
    </S.Card>
  );
};

export default MenuCard;
