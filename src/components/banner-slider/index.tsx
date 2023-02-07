import { Area, Content } from "./styles";
import { SliderContentProps, SliderProps } from "./types";

const BannerSlider = function ({ children,...restProps }: SliderProps) {
    return <Area  {...restProps}>{children}</Area>;
};

BannerSlider.Content = function ({ children,...restProps }: SliderContentProps) {
    return <Content {...restProps}>{children}</Content>;
};

export default BannerSlider;
