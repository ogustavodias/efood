// Styles
import * as S from "./styles";

// Components
import MenuCard from "../MenuCard";

// Types
import { Dish } from "../../types/restaurant";

type Props = {
  menu: Dish[];
};

const MenuList = ({ menu }: Props) => {
  return (
    <S.List>
      {menu.map(item => <MenuCard dish={item}/>)}
    </S.List>
  );
};

export default MenuList;
