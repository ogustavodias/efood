// Styles
import * as S from "./styles";

// Store image
import storeImage from "../../assets/images/restaurante.png";

const StoreCard = () => {
  return (
    <S.Card>
      <S.Tags>
        <span>Destaque da semana</span>
        <span>Japonesa</span>
      </S.Tags>
      <img src={storeImage} alt="store image" />
      <S.Infos>
        <div>
          <S.Name>Hioki Sushi</S.Name>
          <S.Rate>4.9</S.Rate>
        </div>
        <S.Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </S.Description>
        <S.KnowMore to={"/menu"}>Saiba mais</S.KnowMore>
      </S.Infos>
    </S.Card>
  );
};

export default StoreCard;
