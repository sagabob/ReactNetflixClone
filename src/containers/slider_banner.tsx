import BannerSlider from "../components/banner-slider";
import { RowProps } from "./types";

export function SilderBanner({title, fetchUrl}: RowProps) {
    return(
        <>
        <BannerSlider>
            <h2>Recent Release</h2>
            <BannerSlider.Content>

            </BannerSlider.Content>
        </BannerSlider>
        </>
    );
}