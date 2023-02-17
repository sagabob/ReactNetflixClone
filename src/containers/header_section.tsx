import Header from "../components/header";
import { HeaderProps } from "../components/header/types";
import * as ROUTES from "../constants/routes";

const HeaderSection = (props: HeaderProps) => {
  return (
    <Header src="home-bg">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        <Header.RightMenuArea>
          <Header.ButtonLink to={ROUTES.BROWSE}>Browse (without Auth)</Header.ButtonLink>
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.RightMenuArea>
      </Header.Frame>
      {props.children}
    </Header>
  );
};

export default HeaderSection;
