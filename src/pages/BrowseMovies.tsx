import { BannerContainer } from "../containers/banner";
import { FooterContainer } from "../containers/footer";
import { NavbarContainer } from "../containers/navbar";
import { SlickContainer } from "../containers/slick";

import requests from "../data/request";

export default function BrowseMovies() {
  return (
    <>
      <NavbarContainer />
      <BannerContainer fetchUrl={requests.fetchPopularMovies} />
      <SlickContainer fetchUrl={requests.fetchAcionMovies} title="Action movies" />
      <SlickContainer fetchUrl={requests.fetchAsianMovies} title="Asian movies" />
      <SlickContainer fetchUrl={requests.fetchComedyMovies} title="Comedy movies" />
      <SlickContainer fetchUrl={requests.fetchHorrorMovies} title="Horror movies" />
      <FooterContainer />
    </>
  );
}
