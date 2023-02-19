import { BannerContainer } from "../containers/banner";
import { FooterContainer } from "../containers/footer";
import { NavbarContainer } from "../containers/navbar";
import { SlickContainer } from "../containers/slick";

import requests from "../data/request";

export default function BrowseTvShows() {
  return (
    <>
      <NavbarContainer />
      <BannerContainer fetchUrl={requests.fetchTvShows} />
      <SlickContainer fetchUrl={requests.fetchTvShows} title="Popular shows" />
      <SlickContainer fetchUrl={requests.fetchAsianTvShows} title="Asian shows" />
      <FooterContainer />
    </>
  );
}
