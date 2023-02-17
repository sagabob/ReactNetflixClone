import { BannerContainer } from "../containers/banner";
import { NavbarContainer } from "../containers/navbar";
import { SilderBannerContainer } from "../containers/slider_banner";
import requests from "../data/request";

export default function Browse() {
  return (
    <>
      <NavbarContainer />
      <BannerContainer fetchUrl={requests.fetchNetflixOriginals} />
    </>
  );
}
