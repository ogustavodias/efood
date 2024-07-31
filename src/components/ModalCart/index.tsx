// Styles
import * as S from "./styles";

// SRC of images
import trashIcon from "../../assets/images/lixeira.png";

// Utils
import { toCurrency } from "../../utils/toCurrency";

// Components
import Button from "../Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/configureStore";
import { remove } from "../../redux/reducers/cart";

const ModalCart = () => {
  const { list } = useSelector((state: RootReducer) => state.cart);
  const totalPrice = list.reduce((acc, value) => acc + value.preco, 0);
  const dispatch = useDispatch();

  return (
    <S.Aside>
      {list.length ? (
        <S.List>
          {list.map((item) => (
            <S.Dish key={item.id}>
              <S.DishPhoto src={item.foto} alt={item.nome} />
              <div>
                <S.DishName>{item.nome}</S.DishName>
                <S.DishPrice>{toCurrency(item.preco)}</S.DishPrice>
              </div>
              <S.TrashIcon
                src={trashIcon}
                alt="trash icon"
                onClick={() => dispatch(remove(item.id))}
              />
            </S.Dish>
          ))}
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
          <S.Dish>
            <S.DishPhoto src={trashIcon} />
            <div>
              <S.DishName>Teste</S.DishName>
              <S.DishPrice>{toCurrency(60)}</S.DishPrice>
            </div>
            <S.TrashIcon src={trashIcon} alt="trash icon" />
          </S.Dish>
        </S.List>
      ) : (
        ""
      )}

      <S.TotalPrice>
        <span>Valor total</span>
        <span>{toCurrency(totalPrice)}</span>
      </S.TotalPrice>
      <Button style={{ width: "100%" }}>Continuar com a entrega</Button>
    </S.Aside>
  );
};

export default ModalCart;
