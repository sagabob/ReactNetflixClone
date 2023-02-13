import { Background, ButtonLink, Container, Logo, RightMenuArea } from "./styles";
import { HeaderButtonLinkProps, HeaderFrameProps, HeaderLogoProps, HeaderProps, HeaderRightMenuAreaProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";

const Header = function ({ children, src, ...restProps }: HeaderProps) {
  return <Background src={src}  {...restProps}>{children}</Background>;
};

Header.Frame = ({ children, ...restProps }: HeaderFrameProps) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.RightMenuArea = ({ children, ...restProps }: HeaderRightMenuAreaProps) => {
  return <RightMenuArea {...restProps}>{children}</RightMenuArea>;
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
