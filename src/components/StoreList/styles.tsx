import styled from "styled-components";

export const StoreList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
