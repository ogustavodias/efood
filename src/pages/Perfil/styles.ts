import styled from "styled-components";

import { colors } from "../../GlobalStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  * {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.red};
  }

  span {
    cursor: pointer;
  }
`;

type Props = {
  background: string;
};

export const CuisineInfo = styled.div<Props>`
  position: relative;
  background: ${({ background }: Props) =>
    background ? `url(${background}) no-repeat center center / cover;` : ""};
  .container {
    padding: 24px 20px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Specialty = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`;

export const Name = styled.h1`
  position: relative;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  margin-top: 156px;
  z-index: 1;
`;
