import { useState } from "react";
import BannerSlider from "../components/banner-slider";
import { BannerSliderContext } from "../context/bannerslider-context";
import { MovieType } from "../data/types";
import { useGettingDataHook } from "../hooks/useGettingDataHook";
import { RowProps } from "./types";

export function SilderBannerContainer({ title, fetchUrl }: RowProps) {
  const movies = useGettingDataHook<MovieType>(fetchUrl);
  const [index, setIndex] = useState(0);

  const CurrentBannerSliderContext = BannerSliderContext.context;

  let selectedMovies: MovieType[] = [];
  if (movies !== undefined && Array.isArray(movies)) {
    selectedMovies = movies as MovieType[];
  }

  const goToSlide = (i: number) => {
    if (i >= 0 && i < selectedMovies.length) {
      setIndex(i);
    }
  };

  const goToPreviousSlide = () => {
    let i = index;
    if (index > 0) i = index - 1;
    goToSlide(i);
  };

  const goToNextSlide = () => {
    let i = index;
    i = (index + 1) % selectedMovies.length;
    goToSlide(i);
  };

  return (
    <CurrentBannerSliderContext.Provider value={{ index, goToPreviousSlide, goToNextSlide, goToSlide }}>
      <BannerSlider>
        <BannerSlider.Content>
          <BannerSlider.Slider movies={selectedMovies} />
        </BannerSlider.Content>
      </BannerSlider>
    </CurrentBannerSliderContext.Provider>
  );
}
