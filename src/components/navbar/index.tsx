import { Area, ButtonLink, LeftMenu, LeftMenuArea, LeftMenuItem, Logo, RightMenuArea } from "./styles";
import { NavbarAreaProps, NavbarButtonLinkProps, NavbarLeftMenuAreaProps, NavbarLeftMenuItemProps, NavbarLeftMenuProps, NavbarLogoProps, NavbarRightMenuAreaProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";

export default function Navbar({ children, ...restProps }: NavbarAreaProps) {
    return (
        <Area {...restProps}>{children}</Area>
    );
}

Navbar.LeftMenuArea = ({ children, ...restProps }: NavbarLeftMenuAreaProps) => {
    return <LeftMenuArea {...restProps}>{children}</LeftMenuArea>;
};

Navbar.RightMenuArea = ({ children, ...restProps }: NavbarRightMenuAreaProps) => {
    return <RightMenuArea {...restProps}>{children}</RightMenuArea>;
};

Navbar.Logo = ({ children, src, to, ...restProps }: NavbarLogoProps) => {
    return (
        <ReachRouterLink to={to}>
            <Logo src={src} {...restProps} />
        </ReachRouterLink>
    );
};


Navbar.LeftMenu = ({ children, ...restProps }: NavbarLeftMenuProps) => {
    return (
        <LeftMenu  {...restProps} >{children}</LeftMenu>
    );
};


Navbar.LeftMenuItem = ({ children, ...restProps }: NavbarLeftMenuItemProps) => {
    return (
        <LeftMenuItem  {...restProps} >{children}</LeftMenuItem>
    );
};

Navbar.ButtonLink = ({ children, to, ...restProps }: NavbarButtonLinkProps) => {
    return <ButtonLink to={to} {...restProps}>{children}</ButtonLink>;
  };
  