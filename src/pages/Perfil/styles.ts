import styled from "styled-components";

// Cuisine image
import bgCuisine from "../../assets/images/cozinha.png";

// Global colors
import { colors } from "../../GlobalStyles";

export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  * {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.red};
  }
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
