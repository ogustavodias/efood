import styled, { keyframes } from "styled-components";

// Global colors
import { colors } from "../../GlobalStyles";

const toLeftShow = keyframes`
  from {
    transform: translateX(100%);
  } to {
    transform: initial;
  }
`;

export const Aside = styled.aside`
  position: absolute;
  right: 0;
  height: 100vh;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  background-color: ${colors.red};
  animation: ${toLeftShow} 0.3s ease forwards;
  overflow-y: hidden;

  @media only screen and (max-width: 500px) {
    max-width: 80vw;
  }
`;

export const List = styled.ul`
  max-height: 85%;
  margin-bottom: 40px;
  overflow-y: auto;
`;

export const Dish = styled.li`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: start;
  gap: 8px;
  height: 100px;
  padding: 8px;
  background-color: ${colors.whiteRed};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const DishPhoto = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const DishName = styled.h2`
  font-weight: 900;
  font-size: 18px;
  color: ${colors.red};
  margin-bottom: 16px;
`;

export const DishPrice = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.red};
`;

export const TrashIcon = styled.img`
  width: 16px;
  height: 16px;
  align-self: flex-end;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;

  span {
    font-weight: 700px;
    font-size: 14px;
    color: ${colors.whiteRed};
  }
`;
