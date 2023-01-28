import Banner from "../components/banner";

export function BannerContainer() {

    return (
        <Banner>
            <Banner.Content>
                <Banner.Heading>Joker</Banner.Heading>
                <Banner.ButtonArea>
                    <Banner.Button>Play</Banner.Button>
                    <Banner.Button>More Info</Banner.Button>
                </Banner.ButtonArea>                
            </Banner.Content>
            <Banner.FadeBottom/>
        </Banner>
    );

}