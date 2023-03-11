import styled from "@emotion/styled";
import { DotItemProps, SlickContentProps, SlickControlProps, SlickItemProps } from "./types";

export const Area = styled.div`
  margin-top: -20px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: white;
  margin: -20px 0px;
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
  height: auto;
  width: ${({ width }) => `${width}%`};
  transition: transform 0.3s ease; /* Animation */

  &:hover,
  &:active {
    transform: scale(1.5);
    transition-delay: 0.5s;
    > div {
      visibility: visible;
      transition: visibility 0.3s linear;
      transition-delay: 0.5s;
    }

    > h3 {
      visibility: visible;
      transition: visibility 0.3s linear;
      transition-delay: 0.5s;
    }
  }
`;

export const ItemHeading = styled.h3`
  position: relative;
  left: 10px;
  top: -40px;
  width: 100%;
  visibility: hidden;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ItemDetail = styled.div`
  position: relative;
  left: 0;
  top: -30px;
  height: 50px;
  width: 100%;
  background-color: #333333;
  visibility: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
`;

export const ItemDetailLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > span {
    margin-right: 7px;
  }
`;

export const ItemDetailRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Galery = styled.div`
  overflow: hidden;
  padding: 30px 50px;
`;

export const Content = styled.div<SlickContentProps>`
  white-space: nowrap;
  ${({ translateXValue }) => translateXValue != undefined && Math.abs(translateXValue) > 0 && `transform: translateX(${translateXValue}%);`};
  ${({ transitionDurationValue }) => transitionDurationValue != undefined && Math.abs(transitionDurationValue) > 0 && `transition-duration: ${transitionDurationValue}ms;`};
`;

export const Control = styled.div<SlickControlProps>`
  position: absolute;
  ${({ currentTop }) => (currentTop === null ? "top: 30px" : `top: ${currentTop}px`)};

  ${({ currentHeight }) => (currentHeight === null ? "height: 200px" : `height: ${currentHeight}px`)};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  cursor: pointer;
  color: #ffffff;
  z-index: 20;
  width: 50px;

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
