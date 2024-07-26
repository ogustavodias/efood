import styled from "styled-components";

export const StoreList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;
  justify-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
