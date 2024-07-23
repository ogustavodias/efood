// Styles-components
import styled from "styled-components";

// Link component of react-router-dom
import { Link } from "react-router-dom";

// Global colors
import { colors } from "../../GlobalStyles";

export const Logo = styled(Link)`
  display: block;
  max-width: max-content;
  background-color: ${colors.white};
  margin: 0 auto;
`;
