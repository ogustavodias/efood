import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const Footer = styled.footer`
  background-color: ${colors.whiteRed};

  img {
    margin: 0 auto;
  }
`;

export const Social = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32px 0 80px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.whiteRed};
    border-radius: 50%;
    background-color: ${colors.red};
    height: 24px;
    width: 24px;
  }
`;

export const Disclaimer = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  color: ${colors.red};
`;
