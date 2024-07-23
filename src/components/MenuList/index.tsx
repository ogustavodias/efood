// Styles
import * as S from "./styles";

// Components
import MenuCard from "../MenuCard";

const MenuList = () => {
  return (
    <S.List>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </S.List>
  );
};

export default MenuList;
