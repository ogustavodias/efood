import styled from "styled-components";

import { colors } from "../../GlobalStyles";

export const Card = styled.div`
  display: flex;
  gap: 24px;
  height: 344px;
  background-color: ${colors.red};
  padding: 32px;

  > img {
    width: 280px;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    gap: 8px;
    height: 500px;

    > img {
      width: 100%;
      height: 50%;
    }
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  overflow-y: hidden;
  height: 100%;
`;

export const DishName = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.whiteRed};
`;

export const DishDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.whiteRed};
  overflow-y: auto;
`;

export const DishLot = styled(DishDescription)``;
