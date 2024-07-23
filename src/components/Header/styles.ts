// Styled components
import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

// Background image
import bgHeader from "../../assets/images/bg-header.svg";

// Cuisine image
import bgCuisine from "../../assets/images/cozinha.png";

export const Header = styled.header`
  background: url(${bgHeader});
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  * {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.red};
  }
`;

export const HomeSlogan = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.red};
  text-align: center;
  padding-top: 262px;
`;

export const CuisineInfo = styled.div`
  position: relative;
  background: url(${bgCuisine}) no-repeat center center / cover;

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
