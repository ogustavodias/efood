// Styles
import * as S from "./styles";

// Types
import Restaurant from "../../types/restaurant";

type Props = {
  restaurant: Restaurant;
};

const StoreCard = ({ restaurant }: Props) => {
  return (
    <S.Card>
      <S.Tags>
        {restaurant.destacado && <span>Destaque da semana</span>}
        <span>{restaurant.tipo}</span>
      </S.Tags>
      <img src={restaurant.capa} alt="store image" />
      <S.Infos>
        <div>
          <S.Name>{restaurant.titulo}</S.Name>
          <S.Rate>{restaurant.avaliacao}</S.Rate>
        </div>
        <S.Description>{restaurant.descricao}</S.Description>
        <S.KnowMore to={`perfil/${restaurant.id}`}>Saiba mais</S.KnowMore>
      </S.Infos>
    </S.Card>
  );
};

export default StoreCard;
