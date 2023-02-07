import BannerSlider from "../components/banner-slider";
import { BannerContainer } from "../containers/banner";
import { NavbarContainer } from "../containers/navbar";


export default function Browse() {
    return (
        <>
            <NavbarContainer />
            <BannerContainer />
            <BannerSlider />
        </>
    )
}
