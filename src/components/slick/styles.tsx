import styled from "@emotion/styled";
import { SlickContentProps, SlickControlProps, SlickItemProps } from "./types";

export const Item = styled.div<SlickItemProps>`
  display: inline-block;
  height: 100%;
  width: ${({ width }) => `${width}%`};
`;

export const ItemImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Galery = styled.div`
  overflow-x: hidden;
  padding: 0 4%;
  position: relative;
`;

export const Content = styled.div<SlickContentProps>`
  white-space: nowrap;
  ${({ translateXValue }) => translateXValue != undefined && Math.abs(translateXValue) > 0 && `transform: translateX(${translateXValue}%);`};
  ${({ transitionDurationValue }) => transitionDurationValue != undefined && Math.abs(transitionDurationValue) > 0 && `transition-duration: ${transitionDurationValue}ms;`};
`;

export const Control = styled.div<SlickControlProps>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 4%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  cursor: pointer;
  color: #ffffff;
  z-index: 10;

  ${({ direction }) => (direction == "left" ? "left: 0" : "right: 0")};

  .control-arrow {
    transition-duration: 0.4s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      opacity: 0.2;
    }
  }

  &:hover,
  &:active {
    svg {
      opacity: 0.9;
    }
  }
`;
