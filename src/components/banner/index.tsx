import { Background, Button, ButtonArea, Content, FadeBottom, Heading } from "./styles";
import { BannerBottomProps, BannerButtonAreaProps, BannerButtonProps, BannerContentProps, BannerDescriptionProps, BannerHeadingProps, BannerProps } from "./types";

const Banner = function ({ children, src, ...restProps }: BannerProps) {
    return <Background src={src}  {...restProps}>{children}</Background>;
};

Banner.Content = ({ children, ...restProps }: BannerContentProps) => {
    return <Content {...restProps}>{children}</Content>;
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

Banner.Description = ({ children, ...restProps }: BannerDescriptionProps) => {
    return <Heading {...restProps}>{children}</Heading>;
};

Banner.FadeBottom = ({ children, ...restProps }: BannerBottomProps) => {
    return <FadeBottom {...restProps}>{children}</FadeBottom>;
};


export default Banner;