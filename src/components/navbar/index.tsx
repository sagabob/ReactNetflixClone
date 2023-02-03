import { Area, ButtonLink, Dropdown, Group, LeftMenu, LeftMenuArea, LeftMenuItem, Logo, Picture, Profile, RightMenuArea, RightMenuButton, SearchArea, SearchIcon, SearchInput, TextLink } from "./styles";
import { NavbarAreaProps, NavbarButtonLinkProps, NavbarDropDownProps, NavbarGroupProps, NavbarLeftMenuAreaProps, NavbarLeftMenuItemProps, NavbarLeftMenuProps, NavbarLogoProps, NavbarPictureProps, NavbarProfileProps, NavbarRightMenuAreaProps, NavbarRightMenuButtonProps, NavbarSearchProps, NavbarTextLinkProps } from "./types";
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
                placeholder="Title, people, genres..."
                active={searchActive}
                data-testid="search-input"
            />
        </SearchArea>
    );
};

Navbar.Group = ({ children, ...restProps }: NavbarGroupProps) => {
    return <Group {...restProps}>{children}</Group>;
};

Navbar.Profile = ({ children, ...restProps }: NavbarProfileProps) => {
    return <Profile {...restProps}>{children}</Profile>;
};


Navbar.Picture = ({ src, ...restProps }: NavbarPictureProps) => {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Navbar.Dropdown = ({ children, ...restProps }: NavbarDropDownProps) => {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Navbar.TextLink = ({ children, ...restProps }: NavbarTextLinkProps) => {
    return <TextLink {...restProps}>{children}</TextLink>;
};