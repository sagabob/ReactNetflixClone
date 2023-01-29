import { Area, ButtonLink, LeftMenu, LeftMenuArea, LeftMenuItem, Logo, RightMenuArea, RightMenuButton, SearchArea, SearchIcon, SearchInput } from "./styles";
import { NavbarAreaProps, NavbarButtonLinkProps, NavbarLeftMenuAreaProps, NavbarLeftMenuItemProps, NavbarLeftMenuProps, NavbarLogoProps, NavbarRightMenuAreaProps, NavbarRightMenuButtonProps, NavbarSearchProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";
import { useState } from "react";

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


Navbar.RightMenuButton = ({ children, ...restProps }: NavbarRightMenuButtonProps) => {
    return (
        <RightMenuButton  {...restProps} >{children}</RightMenuButton>
    );
};


Navbar.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }: NavbarSearchProps) {
    const [searchActive, setSearchActive] = useState(false);
  
    return (
      <SearchArea {...restProps}>
        <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
          <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          placeholder="Search films and series"
          active={searchActive}
          data-testid="search-input"
        />
      </SearchArea>
    );
  };