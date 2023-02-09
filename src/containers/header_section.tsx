import Header from "../components/header";
import { HeaderProps } from "../components/header/types";
import * as ROUTES from "../constants/routes";

const HeaderSection = (props: HeaderProps) => {
  return (
    <Header src="home-bg">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        <Header.ButtonLink to={ROUTES.BROWSE}>Browse</Header.ButtonLink>
      </Header.Frame>
      {props.children}
    </Header>
  );
};

export default HeaderSection;
