import styled from "@emotion/styled";
import { DotItemProps, SlickContentProps, SlickControlProps, SlickItemProps } from "./types";

export const Area = styled.div`
  margin-top: 50px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  color: white;
  margin: 15px 0px;
`;

export const DotArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const DotItem = styled.div<DotItemProps>`
  background: ${({ active, colors }) => (active ? colors.b : colors.a)};
  display: inline-block;
  width: 10px;
  height: 3px;
  margin: 0 2px;
  cursor: pointer;
`;

export const Item = styled.div<SlickItemProps>`
  display: inline-block;
  height: 100%;
  width: ${({ width }) => `${width}%`};
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Galery = styled.div`
  overflow-x: hidden;
  padding: 0 3%;
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
  width: 3%;

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
    .control-arrow {
      background-color: rgba(37, 37, 37, 0.5);
    }
  }
`;
