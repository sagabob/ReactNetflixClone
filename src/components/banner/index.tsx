import { Background, Button, ButtonArea, ComposedButton, Content, Description, DetailButton, FadeBottom, Feature, Group, Heading } from "./styles";
import { BannerBottomProps, BannerButtonAreaProps, BannerButtonProps, BannerContentProps, BannerDescriptionProps, BannerFeatureProps, BannerGroupProps, BannerHeadingProps, BannerProps } from "./types";

const Banner = function ({ children, src, ...restProps }: BannerProps) {
    return <Background src={src}  {...restProps}>{children}</Background>;
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

Banner.Description = ({ children, ...restProps }: BannerDescriptionProps) => {
    return <Description {...restProps}>{children}</Description>;
};

Banner.FadeBottom = ({ children, ...restProps }: BannerBottomProps) => {
    return <FadeBottom {...restProps}>{children}</FadeBottom>;
};

Banner.IconButton = ({ children, ...restProps }: BannerButtonProps) => {
    return <ComposedButton {...restProps}>{children}</ComposedButton>;
};

export default Banner;