import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
