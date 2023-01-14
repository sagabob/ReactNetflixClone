import { Container, Title, SubTitle } from "./styles";
import { FeatureContainerProps, FeatureSubTitleProps, FeatureTitleProps } from "./types";

const Feature = (props: FeatureContainerProps) => {
  return <Container>{props.children}</Container>;
};

Feature.Title = (props: FeatureTitleProps) => {
  return <Title>{props.children}</Title>;
};

Feature.SubTitle = (props: FeatureSubTitleProps) => {
  return <SubTitle>{props.children}</SubTitle>;
};

export default Feature;
