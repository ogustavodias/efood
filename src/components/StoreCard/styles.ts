import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

// Star image
import starImage from "../../assets/images/estrela.png";

export const Card = styled.li`
  position: relative;
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.red};

  img {
    display: block;
  }
`;

export const Tags = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  span {
    display: block;
    padding: 6px 4px;
    background-color: ${colors.red};
    font-size: 12px;
    color: ${colors.whiteRed};
  }
`;

export const Infos = styled.div`
  border: 1px solid ${colors.red};
  border-top: none;
  padding: 8px;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Rate = styled.span`
  display: flex;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    width: 21px;
    height: 20px;
    background-image: url(${starImage});
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0;
`;

export const KnowMore = styled.a`
  display: block;
  padding: 6px 4px;
  max-width: max-content;
  background-color: ${colors.red};
  font-size: 14px;
  color: ${colors.whiteRed};
  cursor: pointer;
`;
