import styled, { css, keyframes } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const inCommon = css`
  display: block;
  width: 100%;
`;

const errorAnimation = keyframes`
  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(5px);
  } 

  100% {
    transform: translateX(-5px);
  }
`;

export const InputGroup = styled.div`
  input {
    ${inCommon};
    padding: 8px;
    border: 2px solid ${colors.whiteRed};
    background-color: ${colors.whiteRed};
    outline: none;

    &.error {
      border: 2px solid ${colors.red};
      box-shadow: 0px 0px 0px 1px white;
      animation: ${errorAnimation} 0.3s ease;
    }
  }

  label {
    ${inCommon};
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.whiteRed};
  }
`;
