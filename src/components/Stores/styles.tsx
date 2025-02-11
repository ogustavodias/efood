import styled from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

// Star image
import starImage from "../../assets/images/estrela.png";

// Link component of react-router-dom
import { Link } from "react-router-dom";

export const StoreList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;
  justify-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  position: relative;
  width: 100%;
  height: 398px;
  background-color: ${colors.white};
  color: ${colors.red};

  > img {
    display: block;
    height: 50%;
    width: 100%;
    object-fit: cover;
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
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-content: start;
  height: 50%;
  border: 1px solid ${colors.red};
  border-top: none;
  padding: 8px;
  overflow-y: hidden;

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
  overflow-y: auto;
`;

export const KnowMore = styled(Link)`
  display: block;
  padding: 6px 4px;
  max-width: max-content;
  background-color: ${colors.red};
  font-size: 14px;
  color: ${colors.whiteRed};
  cursor: pointer;
`;
