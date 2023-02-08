import Banner from "../components/banner";
import { BASE_IMAGE_URL } from "../data/request";
import { MovieType } from "../data/types";
import { useGettingDataHook } from "../hooks/useGettingDataHook";
import { BannerProps } from "./types";

export function BannerContainer({fetchUrl}: BannerProps) {

    const movies = useGettingDataHook<MovieType>(fetchUrl);
    let selectedMovie = null;
    if (movies !== undefined && Array.isArray(movies)) {
        selectedMovie = movies[Math.floor(Math.random() * movies.length)] as MovieType
        console.log(selectedMovie)
    }

    return selectedMovie == null ? (
        <Banner >
            <Banner.Content>
                <Banner.Heading>Joker</Banner.Heading>
                <Banner.ButtonArea>
                    <Banner.Button>Play</Banner.Button>
                    <Banner.Button>More Info</Banner.Button>
                </Banner.ButtonArea>
            </Banner.Content>
            <Banner.FadeBottom />
        </Banner>
    ) : (
        <Banner src={`${BASE_IMAGE_URL}${selectedMovie.backdrop_path}`}>
            <Banner.Content>
                <Banner.Heading>{selectedMovie.title || selectedMovie.original_title}</Banner.Heading>
                <Banner.ButtonArea>
                    <Banner.Button>Play</Banner.Button>
                    <Banner.Button>More Info</Banner.Button>
                </Banner.ButtonArea>
                <Banner.Description>{selectedMovie.overview}</Banner.Description>
            </Banner.Content>
            <Banner.FadeBottom />
        </Banner>
    );

}