import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const Button = styled.button`
  background-color: ${colors.whiteRed};
  padding: 4px 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
  cursor: pointer;

  &:disabled {
    cursor: initial;
    opacity: 0.5;
  }
`;
