import Header from "../../components/Header";
import StoreList from "../../components/Stores";

import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Header>
        <S.Slogan>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </S.Slogan>
      </Header>
      <section className="container">
        <StoreList />
      </section>
    </>
  );
};

export default Home;
