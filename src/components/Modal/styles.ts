import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  transform: scale(0);
  pointer-events: none;
  display: grid;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  transition: transform 0.3s ease;

  &.isOpen {
    transform: scale(1);
    pointer-events: initial;
  }
`;
