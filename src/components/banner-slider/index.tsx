import { useRef } from "react";
import { BannerSliderContext } from "../../context/bannerslider-context";
import { BASE_IMAGE_URL } from "../../data/request";
import { Area, Content, SlideComp, SliderComp } from "./styles";
import { SliderContentProps, SliderDataProps, SliderProps } from "./types";

const BannerSlider = function ({ children, ...restProps }: SliderProps) {
  return <Area {...restProps}>{children}</Area>;
};

BannerSlider.Content = function ({ children, ...restProps }: SliderContentProps) {
  return <Content {...restProps}>{children}</Content>;
};

BannerSlider.Slider = function ({ movies, children, ...restProps }: SliderDataProps) {
  const { index, goToNextSlide } = BannerSliderContext.useContext();

  const slider = useRef<HTMLDivElement>(null);

  const sliderWidth = slider.current == null ? 100 : slider.current.getBoundingClientRect().width;

  return (
    <SliderComp width={sliderWidth} index={index} ref={slider} transition={true} onClick={() => goToNextSlide()} {...restProps}>
      {movies.map((curr, i) => (
        <SlideComp key={i} image={`${BASE_IMAGE_URL}${curr.backdrop_path}`}></SlideComp>
      ))}
    </SliderComp>
  );
};

export default BannerSlider;
