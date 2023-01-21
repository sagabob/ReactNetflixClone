import { FaqsContainer } from "../containers/faq";
import HeaderContainer from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer/>
    </>
  );
}

export default Home;
