import { DotItem } from "../components/slick/styles";
import Slick from "../components/slick";
import { DotContainerProps } from "./types";

export function SlickDotContainer({ lowestVisibleIndex, itemsInRow, totalItems }: DotContainerProps) {
  let numberOfDots = Math.ceil(totalItems / itemsInRow);

  let activeDot = Math.ceil(lowestVisibleIndex / itemsInRow);

  let content = [];

  for (let i = 0; i < numberOfDots; i++) {
    content.push(<DotItem key={i} active={i === activeDot} colors={{ b: "#CCC", a: "#333" }} />);
  }
  return <Slick.DotArea>{content}</Slick.DotArea>;
}
