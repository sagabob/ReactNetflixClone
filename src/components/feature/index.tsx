import { Container, Title, SubTitle } from "./styles";
import { FeatureContainerProps, FeatureSubTitleProps, FeatureTitleProps } from "./types";

const Feature = ({ children, ...restProps }: FeatureContainerProps) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = ({ children, ...restProps }: FeatureTitleProps) => {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = ({ children, ...restProps }: FeatureSubTitleProps) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
