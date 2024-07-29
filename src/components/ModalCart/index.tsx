// Styles
import * as S from "./styles";

// Mock IMG
import trashIcon from "../../assets/images/lixeira.png";
import mockImg from "../../assets/images/prato.png";

// Utils
import { toCurrency } from "../../utils/toCurrency";

// Components
import Button from "../Button";

const ModalCart = () => {
  return (
    <S.Aside>
      <S.List>
        <S.Dish>
          <S.DishPhoto src={mockImg} alt="" />
          <div>
            <S.DishName>Pizza Marguerita</S.DishName>
            <S.DishPrice>{toCurrency(60.9)}</S.DishPrice>
          </div>
          <S.TrashIcon src={trashIcon} alt="trash icon" />
        </S.Dish>
        <S.Dish>
          <S.DishPhoto src={mockImg} alt="" />
          <div>
            <S.DishName>Pizza Marguerita</S.DishName>
            <S.DishPrice>{toCurrency(60.9)}</S.DishPrice>
          </div>
          <S.TrashIcon src={trashIcon} alt="trash icon" />
        </S.Dish>
        <S.Dish>
          <S.DishPhoto src={mockImg} alt="" />
          <div>
            <S.DishName>Pizza Marguerita</S.DishName>
            <S.DishPrice>{toCurrency(60.9)}</S.DishPrice>
          </div>
          <S.TrashIcon src={trashIcon} alt="trash icon" />
        </S.Dish>
      </S.List>
      <S.TotalPrice>
        <span>Valor total</span>
        <span>{toCurrency(139.9)}</span>
      </S.TotalPrice>
      <Button style={{ width: "100%" }}>Continuar com a entrega</Button>
    </S.Aside>
  );
};

export default ModalCart;
