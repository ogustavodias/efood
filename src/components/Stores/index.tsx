// React
import React from "react";

// Styles
import * as S from "./styles";

// Types
import Restaurant from "../../types/restaurant";

const StoreList = () => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>();

  React.useEffect(() => {
    async function fetchRestaurants() {
      const url = "https://fake-api-tau.vercel.app/api/efood/restaurantes";
      const response = await fetch(url);
      const json = await response.json();
      if (response.ok) setRestaurants(json);
    }

    fetchRestaurants();
  }, []);

  if (!restaurants) return null;

  // Else
  return (
    <S.StoreList>
      {restaurants.map((item) => (
        <S.Card key={item.id}>
          <S.Tags>
            {item.destacado && <span>Destaque da semana</span>}
            <span>{item.tipo}</span>
          </S.Tags>
          <img src={item.capa} alt="store image" />
          <S.Infos>
            <div>
              <S.Name>{item.titulo}</S.Name>
              <S.Rate>{item.avaliacao}</S.Rate>
            </div>
            <S.Description>{item.descricao}</S.Description>
            <S.KnowMore to={`perfil/${item.id}`}>Saiba mais</S.KnowMore>
          </S.Infos>
        </S.Card>
      ))}
    </S.StoreList>
  );
};

export default StoreList;
