// Styles
import * as S from "./styles";

// Components
import StoreCard from "../StoreCard";

const StoreList = () => {
  return (
    <S.StoreList className="container">
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </S.StoreList>
  );
};

export default StoreList;
