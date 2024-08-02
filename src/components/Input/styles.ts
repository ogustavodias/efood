import styled, { css } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const inCommon = css`
  display: block;
  width: 100%;
`;

export const InputGroup = styled.div`
  input {
    ${inCommon};
    padding: 8px;
    border: none;
    background-color: ${colors.whiteRed};
  }

  label {
    ${inCommon};
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.whiteRed};
  }
`;
