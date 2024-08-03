import styled, { keyframes } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

const toLeftShow = keyframes`
  from {
    transform: translateX(100%);
  } to {
    transform: initial;
  }
`;

export const Aside = styled.aside`
  position: absolute;
  right: 0;
  height: 100vh;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  background-color: ${colors.red};
  animation: ${toLeftShow} 0.3s ease forwards;
  overflow-y: hidden;

  @media only screen and (max-width: 500px) {
    max-width: 80vw;
  }
`;

