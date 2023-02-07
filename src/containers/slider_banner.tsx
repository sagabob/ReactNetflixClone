import BannerSlider from "../components/banner-slider";
import { MovieType } from "../data/types";
import { useGettingDataHook } from "../hooks/useGettingDataHook";

import { RowProps } from "./types";

export function SilderBanner({title, fetchUrl}: RowProps) {

    const movies = useGettingDataHook<MovieType>(fetchUrl);
    console.log(movies);
    return(
        <>
        <BannerSlider>
            <h2>{title}</h2>
            <BannerSlider.Content>

            </BannerSlider.Content>
        </BannerSlider>
        </>
    );
}