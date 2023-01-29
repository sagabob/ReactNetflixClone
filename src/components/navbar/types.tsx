export interface NavbarAreaProps extends React.ComponentPropsWithoutRef<"div"> {
    isScrolled: boolean
}

export interface NavbarLeftMenuProps extends React.ComponentPropsWithoutRef<"ul"> {
}

export interface NavbarLeftMenuItemProps extends React.ComponentPropsWithoutRef<"li"> {
}

export interface NavbarLeftMenuAreaProps extends React.ComponentPropsWithoutRef<"div"> {
}

export interface NavbarRightMenuAreaProps extends React.ComponentPropsWithoutRef<"div"> {
}

export interface NavbarRightMenuProps extends React.ComponentPropsWithoutRef<"div"> {
}

export interface NavbarLogoProps extends React.ComponentPropsWithoutRef<"img"> {
    to: string;
}

export interface NavbarButtonLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    to: string;
}

export interface NavbarRightMenuButtonProps extends React.ComponentPropsWithoutRef<"a"> {
}

export interface NavbarSearchInputProps extends React.ComponentPropsWithoutRef<"input"> {
    active: boolean;
}

export interface NavbarSearchProps extends React.ComponentPropsWithoutRef<"div"> {
    searchTerm: string;
    setSearchTerm: (s: string) => void;
}

