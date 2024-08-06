import { css, keyframes, styled } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

const formShowAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Form = styled.form`
  .grid-half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
  }

  .grid-half-2 {
    display: grid;
    grid-template-columns: 1fr 45px;
    gap: 34px;
  }
`;

export const inCommon = css`
  display: grid;
  gap: 8px;
  animation: ${formShowAnimation} 0.3s ease forwards;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.whiteRed};
  margin-bottom: 16px;
`;

export const AddressGroup = styled.div`
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

export const PaymentGroup = styled.div`
  ${inCommon};
`;

export const FinishGroup = styled.div`
  ${inCommon};
  gap: 24px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.whiteRed};
  }
`;
