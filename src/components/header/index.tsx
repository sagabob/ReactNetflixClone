import { Background, ButtonLink, Container, Logo } from "./styles";
import { HeaderButtonLinkProps, HeaderFrameProps, HeaderLogoProps, HeaderProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";
import { Group } from "../navbar/styles";

const Header = function ({ children, src, ...restProps }: HeaderProps) {
  return <Background src={src}  {...restProps}>{children}</Background>;
};

Header.Frame = ({ children, ...restProps }: HeaderFrameProps) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = ({ children, src, to, ...restProps }: HeaderLogoProps) => {
  return (
    <ReachRouterLink to={to}>
      <Logo src={src} {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = ({ children, to, ...restProps }: HeaderButtonLinkProps) => {
  return <ButtonLink to={to} {...restProps}>{children}</ButtonLink>;
};



export default Header;
