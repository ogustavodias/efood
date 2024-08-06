import styled from "styled-components";

import { colors } from "../../GlobalStyles";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 338px;
  background-color: ${colors.red};
  padding: 8px;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    margin-bottom: 8px;
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  overflow-y: hidden;
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
