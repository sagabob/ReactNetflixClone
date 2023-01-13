import { Background, ButtonLink, Container, Logo } from "./styles";
import { HeaderButtonLinkProps, HeaderCoreProps, HeaderLogoProps, HeaderProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";

const Header = function (props: HeaderProps) {
  return <Background src={props.src}>{props.children}</Background>;
};

Header.Frame = (props: HeaderCoreProps) => {
  return <Container>{props.children}</Container>;
};

Header.Logo = (props: HeaderLogoProps) => {
  return (
    <ReachRouterLink to={props.to}>
      <Logo src={props.src} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = (props: HeaderButtonLinkProps) => {
  return <ButtonLink to={props.to}>{props.children}</ButtonLink>;
};

export default Header;
