// Styled components
import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

// Background image
import bgHeader from "../../assets/images/bg-header.svg";

export const Header = styled.header`
  background-image: url(${bgHeader});

  img {
    display: block;
    margin: 0 auto;
    padding-bottom: 262px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    color: ${colors.red};
    text-align: center;
  }
`;
