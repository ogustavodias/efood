import styled, { keyframes } from "styled-components";

const showModal = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

export const Modal = styled.div`
  display: grid;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: ${showModal} 0.3s ease forwards;
`;
