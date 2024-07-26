// React
import React from "react";

// Styles
import * as S from "./styles";

// Components
import StoreCard from "../StoreCard";

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
        <StoreCard key={item.id} restaurant={item} />
      ))}
    </S.StoreList>
  );
};

export default StoreList;
