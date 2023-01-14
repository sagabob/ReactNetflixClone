import Header from "../components/header";
import { HeaderProps } from "../components/header/types";
import * as ROUTES from "../constants/routes";

const HeaderArea = (props: HeaderProps) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {props.children}
    </Header>
  );
};

export default HeaderArea;
