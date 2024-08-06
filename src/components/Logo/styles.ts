import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "../../GlobalStyles";

export const Logo = styled(Link)`
  display: block;
  max-width: max-content;
  background-color: ${colors.white};
  margin: 0 auto;
`;
