import { Container, Heading } from "./styles";
import { DisplayContainerProps, DisplayHeadingProps } from "./types";

export const Display = ({ children, ...restProps }: DisplayContainerProps) => {
  return <Container {...restProps}>{children}</Container>;
};

Display.Heading = ({ children, ...restProps }: DisplayHeadingProps) => {
  return <Heading {...restProps}>{children}</Heading>;
};
