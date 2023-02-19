import { Background, Button, ButtonArea, ComposedAltButton, ComposedButton, Content, DetailButton, FadeBottom, Feature, Group, Heading } from "./styles";
import { BannerBottomProps, BannerButtonAreaProps, BannerButtonProps, BannerContentProps, BannerFeatureProps, BannerGroupProps, BannerHeadingProps, BannerProps } from "./types";

const Banner = function ({ children, src, ...restProps }: BannerProps) {
  return (
    <Background src={src} {...restProps}>
      {children}
    </Background>
  );
};

Banner.Content = ({ children, ...restProps }: BannerContentProps) => {
  return <Content {...restProps}>{children}</Content>;
};

Banner.Feature = ({ children, ...restProps }: BannerFeatureProps) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Banner.Group = ({ children, ...restProps }: BannerGroupProps) => {
  return <Group {...restProps}>{children}</Group>;
};

Banner.Heading = ({ children, ...restProps }: BannerHeadingProps) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Banner.ButtonArea = ({ children, ...restProps }: BannerButtonAreaProps) => {
  return <ButtonArea {...restProps}>{children}</ButtonArea>;
};

Banner.Button = ({ children, ...restProps }: BannerButtonProps) => {
  return <Button {...restProps}>{children}</Button>;
};

Banner.DetailButton = ({ children, ...restProps }: BannerButtonProps) => {
  return <DetailButton {...restProps}>{children}</DetailButton>;
};

Banner.FadeBottom = ({ children, ...restProps }: BannerBottomProps) => {
  return <FadeBottom {...restProps}>{children}</FadeBottom>;
};

Banner.IconButton = ({ children, ...restProps }: BannerButtonProps) => {
  return <ComposedButton {...restProps}>{children}</ComposedButton>;
};

Banner.IconAltButton = ({ children, ...restProps }: BannerButtonProps) => {
  return <ComposedAltButton {...restProps}>{children}</ComposedAltButton>;
};

export default Banner;
