import { css, styled } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

export const Form = styled.form`
  .grid-half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
  }
`;

export const inCommon = css`
  display: grid;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.whiteRed};
  margin-bottom: 16px;
`;

export const AdressGroup = styled.div`
  ${inCommon}
`;

export const Options = styled.div`
  button {
    width: 100%;

    &:not(:last-child) {
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }
`;
