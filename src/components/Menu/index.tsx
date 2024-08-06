import { useDispatch } from "react-redux";
import { open, setElementIn } from "../../redux/reducers/modal";

import Button from "../Button";

import * as S from "./styles";

type Props = {
  menu: Dish[];
};

const Menu = ({ menu }: Props) => {
  const dispatch = useDispatch();

  function openModal(dish: Dish) {
    dispatch(open());
    dispatch(setElementIn({ id: "dish", value: JSON.stringify(dish) }));
  }

  return (
    <>
      <S.List>
        {menu.map((item) => (
          <S.Card key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <S.Infos>
              <S.DishName>{item.nome}</S.DishName>
              <S.DishDescription>{item.descricao}</S.DishDescription>
              <Button onClick={() => openModal(item)}>Mais detalhes</Button>
            </S.Infos>
          </S.Card>
        ))}
      </S.List>
    </>
  );
};

export default Menu;
