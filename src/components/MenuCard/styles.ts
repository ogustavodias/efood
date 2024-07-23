import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${colors.red};
  padding: 8px;
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
`;
