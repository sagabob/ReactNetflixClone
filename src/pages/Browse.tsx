import { BannerContainer } from "../containers/banner";
import { NavbarContainer } from "../containers/navbar";
import requests from "../data/request";


export default function Browse() {
    return (
        <>
            <NavbarContainer />
            <BannerContainer fetchUrl={requests.fetchNetflixOriginals} />            
        </>
    )
}
