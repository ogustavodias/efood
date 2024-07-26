import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const Card = styled.li`
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
