import { BannerContainer } from "../containers/banner";
import { FooterContainer } from "../containers/footer";
import { NavbarContainer } from "../containers/navbar";
import { SlickContainer } from "../containers/slick";

import requests from "../data/request";

export default function Browse() {
  return (
    <>
      <NavbarContainer />
      <BannerContainer fetchUrl={requests.fetchNetflixOriginals} />
      <SlickContainer fetchUrl={requests.fetchNetflixOriginals} title="Netflix Originals" />
      <SlickContainer fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <SlickContainer fetchUrl={requests.fetchTrending} title="Trending Now" />
      <SlickContainer fetchUrl={requests.fetchAcionMovies} title="Action Movies" />
      <SlickContainer fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <SlickContainer fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <FooterContainer />
    </>
  );
}
